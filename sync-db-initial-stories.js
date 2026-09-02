const fs = require('fs');
const path = require('path');

const storiesPath = path.join(__dirname, 'data', 'stories.json');
const dbPath = path.join(__dirname, 'server', 'db.js');

const stories = JSON.parse(fs.readFileSync(storiesPath, 'utf8'));
const dbContent = fs.readFileSync(dbPath, 'utf8');

// Replace INITIAL_STORIES array in db.js with the master 28 stories
const startMarker = 'const INITIAL_STORIES = [';
const endMarker = 'const INITIAL_MARKETING = [';

const startIdx = dbContent.indexOf(startMarker);
const endIdx = dbContent.indexOf(endMarker);

if (startIdx !== -1 && endIdx !== -1) {
  const newInitialStoriesCode = `const INITIAL_STORIES = ${JSON.stringify(stories, null, 2)};\n\n`;
  const updatedDb = dbContent.slice(0, startIdx) + newInitialStoriesCode + dbContent.slice(endIdx);
  fs.writeFileSync(dbPath, updatedDb, 'utf8');
  console.log("Successfully embedded full 28 master stories with exact HD images into server/db.js!");
} else {
  console.error("Could not find markers in server/db.js");
}
