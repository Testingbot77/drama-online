const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const dir = path.join(__dirname, 'input_videos', 'analysis');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const videoFolder = 'C:/Users/HP/Downloads/American Drama';
const videoFiles = fs.readdirSync(videoFolder).filter(f => f.endsWith('.mp4'));

console.log('Found video files:', videoFiles);

videoFiles.forEach((v, idx) => {
  const fullPath = path.join(videoFolder, v);
  const prefix = `clip_${idx + 1}`;
  
  try {
    execSync(`ffmpeg -y -ss 00:00:02 -i "${fullPath}" -vframes 1 "${path.join(dir, prefix + '_shot1.jpg')}"`, { stdio: 'ignore' });
    execSync(`ffmpeg -y -ss 00:00:07 -i "${fullPath}" -vframes 1 "${path.join(dir, prefix + '_shot2.jpg')}"`, { stdio: 'ignore' });
    execSync(`ffmpeg -y -ss 00:00:12 -i "${fullPath}" -vframes 1 "${path.join(dir, prefix + '_shot3.jpg')}"`, { stdio: 'ignore' });
    console.log(`Extracted frames for [${idx + 1}] ${v}`);
  } catch (err) {
    console.error(`Failed on ${v}:`, err.message);
  }
});
