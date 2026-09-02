const fs = require('fs');
const path = require('path');

const storiesPath = path.join(__dirname, 'data', 'stories.json');
const dbPath = path.join(__dirname, 'server', 'db.js');

let stories = JSON.parse(fs.readFileSync(storiesPath, 'utf8'));

// Update all chapters of Graduation Envelope to use ONLY download (11).mp4 frames
const gradFrames = [
  '/images/grad_frame_01.jpg',
  '/images/grad_frame_03.jpg',
  '/images/grad_frame_05.jpg',
  '/images/grad_frame_07.jpg',
  '/images/grad_frame_09.jpg',
  '/images/grad_frame_11.jpg',
  '/images/grad_frame_13.jpg',
  '/images/grad_frame_15.jpg',
  '/images/the-graduation-envelope-mother-in-green-cover.jpg',
  '/images/the-graduation-envelope-mother-in-green-scene.jpg'
];

let gradIdx = 0;
stories.forEach(s => {
  if (s.seriesId === 'series-graduation-envelope-mega' || s.slug.startsWith('the-graduation-envelope')) {
    s.coverImage = gradFrames[gradIdx % gradFrames.length];
    gradIdx++;
  }
});

fs.writeFileSync(storiesPath, JSON.stringify(stories, null, 2), 'utf8');
console.log('Successfully updated Graduation Envelope chapters with 100% exclusive video-matched character frames!');

// Sync to db.js
let dbContent = fs.readFileSync(dbPath, 'utf8');
const startMarker = 'const INITIAL_STORIES = [';
const endMarker = 'const INITIAL_MARKETING = [';

const startIdx = dbContent.indexOf(startMarker);
const endIdx = dbContent.indexOf(endMarker);

if (startIdx !== -1 && endIdx !== -1) {
  const newInitialStoriesCode = `const INITIAL_STORIES = ${JSON.stringify(stories, null, 2)};\n\n`;
  const updatedDb = dbContent.slice(0, startIdx) + newInitialStoriesCode + dbContent.slice(endIdx);
  fs.writeFileSync(dbPath, updatedDb, 'utf8');
  console.log('Successfully synced db.js!');
}
