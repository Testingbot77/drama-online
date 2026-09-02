const express = require('express');
const cors = require('cors');
const path = require('path');
const multer = require('multer');
const fs = require('fs');
const db = require('./db');
const { startFolderWatcher, scanAndProcessFolder, handleNewVideoFile } = require('./watcher');
const { processDramaVideo } = require('./geminiEngine');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Public static files (Web App, Images, Videos)
app.use(express.static(path.join(__dirname, '..', 'public')));

// Multer storage for direct dashboard video upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const inputDir = path.join(__dirname, '..', 'input_videos');
    if (!fs.existsSync(inputDir)) fs.mkdirSync(inputDir, { recursive: true });
    cb(null, inputDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E4);
    const ext = path.extname(file.originalname);
    const base = path.basename(file.originalname, ext).replace(/[^a-zA-Z0-9_-]/g, '_');
    cb(null, `${base}_${uniqueSuffix}${ext}`);
  }
});
const upload = multer({ storage });

// ======================== API ROUTES ========================

// 1. Get all public stories
app.get('/api/stories', (req, res) => {
  const stories = db.getStories();
  res.json({ success: true, stories });
});

// 2. Get single story by slug
app.get('/api/stories/:slug', (req, res) => {
  const stories = db.getStories();
  const story = stories.find(s => s.slug === req.params.slug);
  if (!story) {
    return res.status(404).json({ success: false, error: 'Story not found' });
  }
  res.json({ success: true, story });
});

// 3. Record story read / view (updates analytics with US geo tracking)
app.post('/api/stories/:slug/view', (req, res) => {
  const stories = db.getStories();
  const story = stories.find(s => s.slug === req.params.slug);
  if (story) {
    story.views = (story.views || 0) + 1;
    db.saveStories(stories);

    // Update global analytics
    const analytics = db.getAnalytics();
    analytics.overview.totalPageviews = (analytics.overview.totalPageviews || 0) + 1;
    analytics.overview.adImpressions = (analytics.overview.adImpressions || 0) + 3; // 3 ad slots per read
    
    // Simulate US vs Global distribution
    const isUS = Math.random() < 0.74;
    const country = isUS ? 'United States 🇺🇸' : 'United Kingdom 🇬🇧';
    const referrer = req.body.referrer || 'TikTok Reel (Direct Bio Link)';
    
    analytics.recentVisitors.unshift({
      time: 'Just now',
      drama: story.title,
      country: country,
      device: req.body.device || 'Mobile (iOS/Android)',
      referrer: referrer
    });

    if (analytics.recentVisitors.length > 20) {
      analytics.recentVisitors.pop();
    }

    // Update revenue estimates ($25 RPM for US, $10 for global)
    const incrementalRevenue = isUS ? 0.035 : 0.012;
    analytics.overview.estimatedRevenueUsd = Number(((analytics.overview.estimatedRevenueUsd || 0) + incrementalRevenue).toFixed(2));

    db.saveAnalytics(analytics);
  }
  res.json({ success: true });
});

// 4. Dashboard 1: Video & Marketing Data
app.get('/api/marketing', (req, res) => {
  const marketing = db.getMarketingItems();
  const settings = db.getSettings();
  const host = req.headers.host ? `http://${req.headers.host}` : settings.domainUrl;

  // Enhance items with full story URLs
  const itemsWithUrls = marketing.map(item => {
    const fullStoryUrl = `${host}/#drama/${item.storySlug}`;
    const formattedPinnedComments = (item.pinnedComments || []).map(c => ({
      ...c,
      formattedText: c.text.replace(/\{\{STORY_URL\}\}/g, fullStoryUrl)
    }));

    return {
      ...item,
      fullStoryUrl,
      pinnedComments: formattedPinnedComments
    };
  });

  res.json({ success: true, marketing: itemsWithUrls });
});

// 5. Dashboard 2: Analytics & Traffic Metrics
app.get('/api/analytics', (req, res) => {
  const analytics = db.getAnalytics();
  const stories = db.getStories();

  // Calculate top performing stories
  const topStories = [...stories]
    .sort((a, b) => (b.views || 0) - (a.views || 0))
    .slice(0, 5)
    .map(s => ({
      id: s.id,
      title: s.title,
      genre: s.genre,
      views: s.views || 0,
      slug: s.slug
    }));

  res.json({
    success: true,
    analytics: {
      ...analytics,
      topStories
    }
  });
});

// 6. Settings (Get / Update Gemini API Key, AdSense ID)
app.get('/api/settings', (req, res) => {
  const settings = db.getSettings();
  // Mask API key for security
  const maskedKey = settings.geminiApiKey 
    ? `${settings.geminiApiKey.slice(0, 4)}...${settings.geminiApiKey.slice(-4)}`
    : '';
  res.json({
    success: true,
    settings: {
      ...settings,
      hasGeminiKey: Boolean(settings.geminiApiKey && settings.geminiApiKey.length > 10),
      maskedKey
    }
  });
});

app.post('/api/settings', (req, res) => {
  const current = db.getSettings();
  const updated = {
    ...current,
    ...req.body
  };
  // If user passed a real new key, update it
  if (req.body.geminiApiKey && !req.body.geminiApiKey.includes('...')) {
    updated.geminiApiKey = req.body.geminiApiKey.trim();
  }
  db.saveSettings(updated);
  res.json({ success: true, message: 'Settings saved successfully' });
});

// 7. Manual Video Upload & Process
app.post('/api/upload-video', upload.single('video'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, error: 'No video file uploaded' });
  }

  try {
    const result = await handleNewVideoFile(req.file.path);
    res.json({ success: true, message: 'Video processed successfully', data: result });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 8. Manual Folder Scan Trigger
app.post('/api/scan-folder', async (req, res) => {
  try {
    const results = await scanAndProcessFolder();
    res.json({
      success: true,
      message: `Scanned folder. Processed ${results.length} new video(s).`,
      count: results.length
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 9. WordPress 1-Click Sync Endpoint (When upgrading)
const { publishToWordPress } = require('./wordpressSync');

app.post('/api/wordpress/sync', async (req, res) => {
  const { storyId, wpUrl, wpUsername, wpAppPassword } = req.body;
  const stories = db.getStories();
  const story = stories.find(s => s.id === storyId);

  if (!story) {
    return res.status(404).json({ success: false, error: 'Story not found' });
  }

  try {
    const result = await publishToWordPress(story, { wpUrl, wpUsername, wpAppPassword });
    res.json({ success: true, message: 'Story successfully published to WordPress!', result });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Fallback to SPA index.html for any client routes
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// Start Server and Folder Watcher
app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`🎬 DramaLuxe Web Portal & Creator Control Hub`);
  console.log(`🌐 Server running at: http://localhost:${PORT}`);
  console.log(`📁 Watcher active on: input_videos/ folder`);
  console.log(`====================================================`);
  
  startFolderWatcher();
});
