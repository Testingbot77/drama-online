const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const dir = 'C:/Users/HP/Downloads/American Drama';
const testFiles = ['download (3).mp4', 'download (4).mp4', 'black american 2.mp4'];
const outDir = path.join(__dirname, 'public', 'images', 'individual_stories');

testFiles.forEach(f => {
  const p = path.join(dir, f);
  if (fs.existsSync(p)) {
    const out = path.join(outDir, f.replace(/[^a-zA-Z0-9]/g, '_') + '.jpg');
    try {
      execSync(`ffmpeg -y -ss 00:00:05 -i "${p}" -vframes 1 -q:v 2 "${out}"`, { stdio: 'ignore' });
      console.log('Extracted frame for:', f);
    } catch(e) {
      console.error(e);
    }
  }
});
