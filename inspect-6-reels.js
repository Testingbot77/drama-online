const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const folder = 'C:/Users/HP/Downloads/Extension/reels_folder';
const files = ['1.mp4', '2.mp4', '3.mp4', '4.mp4', '5.mp4', '6.mp4'];

const tempDir = path.join(__dirname, 'reels_inspection');
if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

files.forEach((file, idx) => {
  const filePath = path.join(folder, file);
  if (!fs.existsSync(filePath)) return;

  const outJpg1 = path.join(tempDir, `reel_${idx+1}_frame1.jpg`);
  const outJpg2 = path.join(tempDir, `reel_${idx+1}_frame2.jpg`);
  const outJpg3 = path.join(tempDir, `reel_${idx+1}_frame3.jpg`);
  
  try {
    execSync(`ffmpeg -y -ss 00:00:03.000 -i "${filePath}" -vframes 1 -q:v 2 "${outJpg1}"`, { stdio: 'ignore' });
    execSync(`ffmpeg -y -ss 00:00:12.000 -i "${filePath}" -vframes 1 -q:v 2 "${outJpg2}"`, { stdio: 'ignore' });
    execSync(`ffmpeg -y -ss 00:00:22.000 -i "${filePath}" -vframes 1 -q:v 2 "${outJpg3}"`, { stdio: 'ignore' });
  } catch (e) {}

  const sizeMB = (fs.statSync(filePath).size / (1024*1024)).toFixed(2);
  let dur = '0';
  try {
    dur = execSync(`ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "${filePath}"`).toString().trim();
  } catch(e){}

  console.log(`Video [${idx+1}] ${file}: Size=${sizeMB}MB, Duration=${dur}s`);
});
