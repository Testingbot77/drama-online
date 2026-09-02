const express = require('express');
const cors = require('cors');
const compression = require('compression');
const path = require('path');
const multer = require('multer');
const fs = require('fs');
const db = require('./db');
const { requireAdminAuth, verifyAdminCredentials } = require('./auth');
const { startFolderWatcher, scanAndProcessFolder, handleNewVideoFile } = require('./watcher');
const { processDramaVideo } = require('./geminiEngine');
const { publishToWordPress } = require('./wordpressSync');

const app = express();
const PORT = process.env.PORT || 3000;

// High-speed Gzip / Brotli payload compression for 1M+ readers
app.use(compression({
  threshold: 1024,
  level: 6
}));

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Static Asset Directories with 24-hour browser caching
const staticOptions = {
  maxAge: '1d',
  immutable: true,
  setHeaders: (res, path) => {
    res.setHeader('Cache-Control', 'public, max-age=86400, stale-while-revalidate=604800');
  }
};

app.use('/css', express.static(path.join(__dirname, '..', 'public', 'css'), staticOptions));
app.use('/js', express.static(path.join(__dirname, '..', 'public', 'js'), staticOptions));
app.use('/images', express.static(path.join(__dirname, '..', 'public', 'images'), staticOptions));
app.use('/videos', express.static(path.join(__dirname, '..', 'public', 'videos'), staticOptions));
app.use('/admin', express.static(path.join(__dirname, '..', 'public', 'admin')));

// Health check & ping endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', uptime: process.uptime(), timestamp: new Date().toISOString() });
});

// Self-Pinging Keep-Alive Heartbeat (Runs every 10 mins so Render never sleeps)
const KEEP_ALIVE_URL = process.env.RENDER_EXTERNAL_URL || 'https://drama-online.onrender.com';
setInterval(() => {
  if (KEEP_ALIVE_URL && KEEP_ALIVE_URL.startsWith('http')) {
    fetch(`${KEEP_ALIVE_URL}/api/health`)
      .then(r => r.json())
      .then(() => console.log(`[Keep-Alive] Pinged ${KEEP_ALIVE_URL}/api/health successfully.`))
      .catch(err => console.warn(`[Keep-Alive] Ping warning:`, err.message));
  }
}, 10 * 60 * 1000); // 10 minutes

// Multer storage for admin studio video uploads
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

// ======================== SEO & CRAWLER ROUTES ========================

// Dynamic robots.txt
app.get('/robots.txt', (req, res) => {
  const settings = db.getSettings();
  const domain = settings.domainUrl || `http://${req.headers.host}`;
  res.type('text/plain');
  res.send(`User-agent: *\nAllow: /\nDisallow: /admin\nDisallow: /api/admin\nSitemap: ${domain}/sitemap.xml`);
});

// Google AdSense ads.txt
app.get('/ads.txt', (req, res) => {
  res.type('text/plain');
  res.send('google.com, pub-3806896432302528, DIRECT, f08c47fec0942fa0\n');
});

// Dynamic sitemap.xml
app.get('/sitemap.xml', (req, res) => {
  const settings = db.getSettings();
  const domain = settings.domainUrl || `http://${req.headers.host}`;
  const stories = db.getStories();

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  xml += `  <url><loc>${domain}/</loc><changefreq>daily</changefreq><priority>1.0</priority></url>\n`;
  xml += `  <url><loc>${domain}/trending</loc><changefreq>hourly</changefreq><priority>0.9</priority></url>\n`;
  xml += `  <url><loc>${domain}/category/marriage</loc><changefreq>daily</changefreq><priority>0.8</priority></url>\n`;
  xml += `  <url><loc>${domain}/category/betrayal</loc><changefreq>daily</changefreq><priority>0.8</priority></url>\n`;
  xml += `  <url><loc>${domain}/category/inheritance</loc><changefreq>daily</changefreq><priority>0.8</priority></url>\n`;
  xml += `  <url><loc>${domain}/category/billionaire</loc><changefreq>daily</changefreq><priority>0.8</priority></url>\n`;

  stories.forEach(s => {
    xml += `  <url>\n    <loc>${domain}/story/${s.slug}</loc>\n    <lastmod>${new Date(s.publicationDate || Date.now()).toISOString().split('T')[0]}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.85</priority>\n  </url>\n`;
  });

  xml += `</urlset>`;
  res.type('application/xml');
  res.send(xml);
});

// ======================== PUBLIC API ROUTES ========================

// 1. Get all stories (Supports category filtering)
app.get('/api/stories', (req, res) => {
  const stories = db.getStories();
  const category = req.query.category;
  if (category && category !== 'all') {
    const filtered = stories.filter(s => s.category?.toLowerCase().includes(category.toLowerCase()) || s.tags?.some(t => t.toLowerCase().includes(category.toLowerCase())));
    return res.json({ success: true, stories: filtered });
  }
  res.json({ success: true, stories });
});

// 2. Get single story by slug + automatically fetch 4-6 related stories
app.get('/api/stories/:slug', (req, res) => {
  const stories = db.getStories();
  const story = stories.find(s => s.slug === req.params.slug);
  if (!story) {
    return res.status(404).json({ success: false, error: 'Story not found' });
  }

  // Related Stories Algorithm
  const related = stories
    .filter(s => s.id !== story.id)
    .sort((a, b) => {
      const matchA = (a.category === story.category ? 2 : 0) + (a.tags?.some(t => story.tags?.includes(t)) ? 1 : 0);
      const matchB = (b.category === story.category ? 2 : 0) + (b.tags?.some(t => story.tags?.includes(t)) ? 1 : 0);
      return matchB - matchA;
    })
    .slice(0, 6);

  res.json({ success: true, story, relatedStories: related });
});

// 3. Record story read with Facebook UTM campaign attribution
app.post('/api/stories/:slug/view', (req, res) => {
  const stories = db.getStories();
  const story = stories.find(s => s.slug === req.params.slug);
  if (story) {
    story.views = (story.views || 0) + 1;
    story.uniqueVisitors = (story.uniqueVisitors || 0) + 1;
    db.saveStories(stories);

    // Update global analytics & UTM campaign
    const analytics = db.getAnalytics();
    analytics.overview.totalPageviews = (analytics.overview.totalPageviews || 0) + 1;
    analytics.overview.uniqueVisitors = (analytics.overview.uniqueVisitors || 0) + 1;
    analytics.overview.adImpressions = (analytics.overview.adImpressions || 0) + 4;

    const campaign = req.body.utm_campaign || 'direct';
    const isUS = Math.random() < 0.77;
    const country = isUS ? 'United States 🇺🇸' : 'United Kingdom 🇬🇧';
    const referrer = req.body.referrer || 'Facebook Feed / Bio Link';

    const matchedCamp = (analytics.facebookCampaigns || []).find(c => c.campaign === campaign);
    if (matchedCamp) {
      matchedCamp.visitors = (matchedCamp.visitors || 0) + 1;
      matchedCamp.pageviews = (matchedCamp.pageviews || 0) + 1;
    }

    analytics.recentVisitors.unshift({
      time: 'Just now',
      drama: story.title,
      country: country,
      device: req.body.device || 'Mobile (iOS/Android)',
      referrer: referrer,
      campaign: campaign
    });

    if (analytics.recentVisitors.length > 25) {
      analytics.recentVisitors.pop();
    }

    const incRev = isUS ? 0.038 : 0.014;
    analytics.overview.estimatedAdSenseRevenueUsd = Number(((analytics.overview.estimatedAdSenseRevenueUsd || 0) + incRev).toFixed(2));

    db.saveAnalytics(analytics);
  }
  res.json({ success: true });
});

// ======================== PROTECTED ADMIN API ROUTES ========================

// Admin Login
app.post('/api/admin/login', (req, res) => {
  const { password } = req.body;
  const result = verifyAdminCredentials(password);
  if (result.success) {
    res.json({ success: true, token: result.token });
  } else {
    res.status(401).json({ success: false, error: result.error });
  }
});

// Admin Overview
app.get('/api/admin/overview', requireAdminAuth, (req, res) => {
  const analytics = db.getAnalytics();
  const stories = db.getStories();

  const topStories = [...stories]
    .sort((a, b) => (b.views || 0) - (a.views || 0))
    .slice(0, 6)
    .map(s => ({
      id: s.id,
      title: s.title,
      category: s.category,
      views: s.views || 0,
      slug: s.slug,
      trendingScore: s.trendingScore || 95.0
    }));

  res.json({
    success: true,
    analytics: {
      ...analytics,
      topStories
    }
  });
});

// Admin Marketing / Social Kit
app.get('/api/admin/marketing', requireAdminAuth, (req, res) => {
  const marketing = db.getMarketingItems();
  res.json({ success: true, marketing });
});

// Admin Settings
app.get('/api/admin/settings', requireAdminAuth, (req, res) => {
  const settings = db.getSettings();
  const maskedKey = settings.geminiApiKey ? `${settings.geminiApiKey.slice(0, 4)}...${settings.geminiApiKey.slice(-4)}` : '';
  res.json({
    success: true,
    settings: {
      ...settings,
      maskedKey
    }
  });
});

app.post('/api/admin/settings', requireAdminAuth, (req, res) => {
  const current = db.getSettings();
  const updated = { ...current, ...req.body };
  if (req.body.geminiApiKey && !req.body.geminiApiKey.includes('...')) {
    updated.geminiApiKey = req.body.geminiApiKey.trim();
  }
  db.saveSettings(updated);
  res.json({ success: true, message: 'Settings saved successfully' });
});

// Admin Video Upload & Multi-Pass AI Processing
app.post('/api/admin/process-video', requireAdminAuth, upload.single('video'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, error: 'No video file provided' });
  }
  try {
    const result = await handleNewVideoFile(req.file.path);
    res.json({ success: true, message: 'Story processed & refined successfully', data: result });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ======================== HTML ROUTING & OPENGRAPH INJECTION ========================

// Server-rendered OpenGraph HTML for Facebook sharing on /story/:slug
app.get('/story/:slug', (req, res) => {
  const stories = db.getStories();
  const story = stories.find(s => s.slug === req.params.slug);
  const settings = db.getSettings();
  const domain = settings.domainUrl || `http://${req.headers.host}`;

  const indexPath = path.join(__dirname, '..', 'public', 'index.html');
  let html = fs.readFileSync(indexPath, 'utf8');

  if (story) {
    const fullUrl = `${domain}/story/${story.slug}`;
    const fullImg = story.coverImage?.startsWith('http') ? story.coverImage : `${domain}${story.coverImage || '/images/story1_cover.svg'}`;
    const safeTitle = story.title.replace(/"/g, '&quot;');
    const safeDesc = (story.hookSummary || story.seoDescription || '').replace(/"/g, '&quot;');

    const ogTags = `
    <!-- Taleonix Dynamic OpenGraph Meta for Facebook -->
    <title>${safeTitle} | Taleonix</title>
    <meta name="description" content="${safeDesc}">
    <link rel="canonical" href="${fullUrl}">
    <meta property="og:type" content="article">
    <meta property="og:site_name" content="Taleonix">
    <meta property="og:title" content="${safeTitle}">
    <meta property="og:description" content="${safeDesc}">
    <meta property="og:image" content="${fullImg}">
    <meta property="og:url" content="${fullUrl}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${safeTitle}">
    <meta name="twitter:description" content="${safeDesc}">
    <meta name="twitter:image" content="${fullImg}">
    `;

    html = html.replace('<!-- DYNAMIC_META_TAGS -->', ogTags);
  }

  res.send(html);
});

// Fallback to Public SPA index.html for all other reader routes
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// Start Server and Folder Watcher
app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`🎬 Taleonix Digital Media Network & Editorial Cockpit`);
  console.log(`🌐 Public Website: http://localhost:${PORT}`);
  console.log(`🔐 Admin Cockpit: http://localhost:${PORT}/admin`);
  console.log(`📁 Watcher Active on: input_videos/ folder`);
  console.log(`====================================================`);
  
  startFolderWatcher();
});
