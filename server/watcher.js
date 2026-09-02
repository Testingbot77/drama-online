const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');
const db = require('./db');
const { processDramaVideo } = require('./geminiEngine');

const INPUT_DIR = path.join(__dirname, '..', 'input_videos');
const PUBLIC_VIDEOS_DIR = path.join(__dirname, '..', 'public', 'videos');

// Ensure directories exist
if (!fs.existsSync(INPUT_DIR)) {
  fs.mkdirSync(INPUT_DIR, { recursive: true });
}
if (!fs.existsSync(PUBLIC_VIDEOS_DIR)) {
  fs.mkdirSync(PUBLIC_VIDEOS_DIR, { recursive: true });
}

let isProcessing = false;
const processedFiles = new Set();

async function handleNewVideoFile(filePath) {
  const fileName = path.basename(filePath);
  const ext = path.extname(fileName).toLowerCase();

  if (!['.mp4', '.mov', '.webm', '.mkv', '.avi'].includes(ext)) {
    return;
  }

  if (processedFiles.has(fileName)) {
    return;
  }

  // Check if this video has already been recorded in marketing db
  const existingMarketing = db.getMarketingItems();
  if (existingMarketing.some(m => m.videoFileName === fileName)) {
    processedFiles.add(fileName);
    return;
  }

  console.log(`[Watcher] New video detected: ${fileName}`);
  processedFiles.add(fileName);

  try {
    // Copy video to public/videos for dashboard preview player
    const destVideoPath = path.join(PUBLIC_VIDEOS_DIR, fileName);
    if (!fs.existsSync(destVideoPath)) {
      fs.copyFileSync(filePath, destVideoPath);
    }

    const settings = db.getSettings();
    const { story, marketing } = await processDramaVideo(destVideoPath, fileName, settings.geminiApiKey);

    // Save to DB
    const stories = db.getStories();
    stories.unshift(story);
    db.saveStories(stories);

    const marketingItems = db.getMarketingItems();
    marketingItems.unshift(marketing);
    db.saveMarketingItems(marketingItems);

    console.log(`[Watcher] Video successfully processed & published to website: "${story.title}"`);
    return { story, marketing };
  } catch (err) {
    console.error(`[Watcher] Error processing video ${fileName}:`, err);
  }
}

function startFolderWatcher() {
  console.log(`[Watcher] Monitoring folder for new drama videos: ${INPUT_DIR}`);
  
  const watcher = chokidar.watch(INPUT_DIR, {
    ignored: /(^|[\/\\])\../, // ignore dotfiles
    persistent: true,
    awaitWriteFinish: {
      stabilityThreshold: 2000,
      pollInterval: 500
    }
  });

  watcher.on('add', (filePath) => {
    handleNewVideoFile(filePath);
  });

  return watcher;
}

// Manual trigger function for UI upload or "Scan Folder" button
async function scanAndProcessFolder() {
  const files = fs.readdirSync(INPUT_DIR);
  const results = [];
  for (const file of files) {
    const fullPath = path.join(INPUT_DIR, file);
    if (fs.statSync(fullPath).isFile()) {
      const res = await handleNewVideoFile(fullPath);
      if (res) results.push(res);
    }
  }
  return results;
}

module.exports = {
  startFolderWatcher,
  handleNewVideoFile,
  scanAndProcessFolder
};
