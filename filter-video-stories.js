const fs = require('fs');
const path = require('path');

const storiesPath = path.join(__dirname, 'data', 'stories.json');
const dbPath = path.join(__dirname, 'server', 'db.js');

let stories = JSON.parse(fs.readFileSync(storiesPath, 'utf8'));

// Retain only authentic video-based stories
const videoSlugs = new Set([
  'the-graduation-envelope-mother-in-green',
  'the-grandmothers-handwritten-ledger-inheritance',
  'the-forgotten-portrait-family-will',
  'the-gold-framed-deed-refused-to-pack',
  'the-millionaire-sisters-kitchen-trash-quilt',
  'the-landlords-fake-eviction-federal-deeds',
  'the-kitchen-table-secret-foreclosure-truth',
  'the-prodigal-son-backyard-reunion-gift',
  'the-grandmothers-secret-quilt',
  'the-grandmothers-secret-quilt-part-2-the-48-million-retribution',
  'the-two-mothers-at-graduation',
  'the-two-mothers-at-graduation-part-2-the-50-million-legacy'
]);

const videoOnlyStories = stories.filter(s => videoSlugs.has(s.slug));

console.log(`Filtering out non-video stories. Retaining ${videoOnlyStories.length} authentic video stories.`);
videoOnlyStories.forEach((s, idx) => console.log(`${idx+1}. ${s.title}`));

// Save to data/stories.json
fs.writeFileSync(storiesPath, JSON.stringify(videoOnlyStories, null, 2), 'utf8');

// Update db.js
let dbContent = fs.readFileSync(dbPath, 'utf8');
const startMarker = 'const INITIAL_STORIES = [';
const endMarker = 'const INITIAL_MARKETING = [';

const startIdx = dbContent.indexOf(startMarker);
const endIdx = dbContent.indexOf(endMarker);

if (startIdx !== -1 && endIdx !== -1) {
  const newInitialStoriesCode = `const INITIAL_STORIES = ${JSON.stringify(videoOnlyStories, null, 2)};\n\n`;
  const updatedDb = dbContent.slice(0, startIdx) + newInitialStoriesCode + dbContent.slice(endIdx);
  fs.writeFileSync(dbPath, updatedDb, 'utf8');
  console.log("Successfully synced video-only stories into server/db.js!");
}
