const fs = require('fs');
const path = require('path');

const STORIES_PATH = path.join(__dirname, 'data', 'stories.json');
const TRACKING_PATH = path.join(__dirname, 'data', 'tracking_links.json');
const ANALYTICS_PATH = path.join(__dirname, 'data', 'analytics.json');

// 1. Reset the 6 latest uploaded stories to start at 0 clean views
const cleanStoryIds = [
  'story-20260904-01-birthday-cake-confrontation',
  'story-20260904-02-hallway-sister-ambush',
  'story-20260904-03-doorstep-brown-bag-delivery',
  'story-20260904-04-gymnasium-mother-truth',
  'story-20260904-05-park-bounce-house-secret',
  'story-20260904-06-parking-lot-phone-exposed'
];

if (fs.existsSync(STORIES_PATH)) {
  const stories = JSON.parse(fs.readFileSync(STORIES_PATH, 'utf8'));
  stories.forEach(s => {
    if (cleanStoryIds.includes(s.id)) {
      s.views = 0;
      s.uniqueVisitors = 0;
      s.avgReadTimeSeconds = 0;
    }
  });
  fs.writeFileSync(STORIES_PATH, JSON.stringify(stories, null, 2), 'utf8');
  console.log('✅ Reset 6 newly uploaded stories to 0 clean views.');
}

// 2. Reset tracking links for r1-r6
if (fs.existsSync(TRACKING_PATH)) {
  const trackingLinks = JSON.parse(fs.readFileSync(TRACKING_PATH, 'utf8'));
  trackingLinks.forEach(l => {
    if (['r1', 'r2', 'r3', 'r4', 'r5', 'r6'].includes(l.shortCode)) {
      l.clicks = 0;
      l.uniqueReaders = 0;
      l.estimatedRevenueUsd = 0;
    }
  });
  fs.writeFileSync(TRACKING_PATH, JSON.stringify(trackingLinks, null, 2), 'utf8');
  console.log('✅ Reset tracking links r1-r6 to 0 clicks/unique readers.');
}

// 3. Update server in-memory database
try {
  const db = require('./server/db');
  if (fs.existsSync(STORIES_PATH)) {
    db.saveStories(JSON.parse(fs.readFileSync(STORIES_PATH, 'utf8')));
  }
  if (fs.existsSync(TRACKING_PATH)) {
    db.saveTrackingLinks(JSON.parse(fs.readFileSync(TRACKING_PATH, 'utf8')));
  }
  console.log('✅ Synchronized server in-memory database.');
} catch(e) {
  console.log('DB sync notice:', e.message);
}

// 4. Also update generate-0409-full-system.js so it never inserts hardcoded views in the future
const genScriptPath = path.join(__dirname, 'generate-0409-full-system.js');
if (fs.existsSync(genScriptPath)) {
  let code = fs.readFileSync(genScriptPath, 'utf8');
  code = code.replace(/views:\s*\d+/g, 'views: 0');
  code = code.replace(/uniqueVisitors:\s*\d+/g, 'uniqueVisitors: 0');
  code = code.replace(/avgReadTimeSeconds:\s*\d+/g, 'avgReadTimeSeconds: 0');
  code = code.replace(/clicks:\s*\d+/g, 'clicks: 0');
  code = code.replace(/uniqueReaders:\s*\d+/g, 'uniqueReaders: 0');
  fs.writeFileSync(genScriptPath, code, 'utf8');
  console.log('✅ Cleaned generate-0409-full-system.js to ensure 0 default views for all future runs.');
}

console.log('\n🎉 VIEW TRACKING CLEANUP COMPLETE & SAFEGUARDED!');
