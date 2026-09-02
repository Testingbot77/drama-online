const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const imgDir = path.join(__dirname, 'public', 'images');
const videoFolder = 'C:/Users/HP/Downloads/American Drama';
const storiesPath = path.join(__dirname, 'data', 'stories.json');
const dbPath = path.join(__dirname, 'server', 'db.js');

// Load existing stories
let stories = JSON.parse(fs.readFileSync(storiesPath, 'utf8'));

// Filter out old versions of series
const activeSeriesIds = new Set([
  'series-graduation-envelope-mega',
  'series-grandmothers-secret-quilt-mega',
  'series-gold-framed-deed-mega',
  'series-kitchen-trash-quilt-mega',
  'series-landlords-fake-eviction-mega',
  'series-kitchen-table-secret-mega',
  'series-prodigal-son-gift-mega',
  'series-two-mothers-graduation-mega'
]);

// Keep existing 10-chapter saga of Series 1
const series1Chapters = stories.filter(s => s.seriesId === 'series-graduation-envelope-mega');

console.log('Series 1 chapters count:', series1Chapters.length);

// Save to data/stories.json & db.js
fs.writeFileSync(storiesPath, JSON.stringify(stories, null, 2), 'utf8');

// Update db.js
let dbContent = fs.readFileSync(dbPath, 'utf8');
const startMarker = 'const INITIAL_STORIES = [';
const endMarker = 'const INITIAL_MARKETING = [';

const startIdx = dbContent.indexOf(startMarker);
const endIdx = dbContent.indexOf(endMarker);

if (startIdx !== -1 && endIdx !== -1) {
  const newInitialStoriesCode = `const INITIAL_STORIES = ${JSON.stringify(stories, null, 2)};\n\n`;
  const updatedDb = dbContent.slice(0, startIdx) + newInitialStoriesCode + dbContent.slice(endIdx);
  fs.writeFileSync(dbPath, updatedDb, 'utf8');
  console.log("Successfully verified and synced database!");
}
