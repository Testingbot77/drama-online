const fs = require('fs');
const path = require('path');

const storiesFile = path.join(__dirname, 'data', 'stories.json');
const dbFile = path.join(__dirname, 'server', 'db.js');

const stories = JSON.parse(fs.readFileSync(storiesFile, 'utf8'));
let dbContent = fs.readFileSync(dbFile, 'utf8');

// Replace the INITIAL_STORIES array in db.js
const startMarker = 'const INITIAL_STORIES = [';
const endMarker = '];\n\nconst INITIAL_MARKETING = [';

const startIndex = dbContent.indexOf(startMarker);
const endIndex = dbContent.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
  const newInitial = `const INITIAL_STORIES = ${JSON.stringify(stories, null, 2)}`;
  dbContent = dbContent.substring(0, startIndex) + newInitial + dbContent.substring(endIndex + 1);
  fs.writeFileSync(dbFile, dbContent, 'utf8');
  console.log('Successfully synced INITIAL_STORIES in server/db.js!');
} else {
  console.log('Markers not found, checking alternative replacement...');
}
