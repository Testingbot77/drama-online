const fs = require('fs');
const path = require('path');

const files = [
  'analyze-batch2.js',
  'analyze-v3.js',
  'sync-reels-pipeline.js',
  'test-gemini-vision-0409.js',
  'update-aiservice.js'
];

files.forEach(f => {
  const p = path.join(__dirname, f);
  if (fs.existsSync(p)) {
    let text = fs.readFileSync(p, 'utf8');
    text = text.replace(/AQ\.Ab8RN6Jx7WTNjwRH71awxcJuCxcjUwHYMThbjWGkd_MOQMopyw/g, '');
    fs.writeFileSync(p, text, 'utf8');
    console.log('Sanitized:', f);
  }
});
