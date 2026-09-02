const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Let's create a detailed inspection of all video frames and subtitles
const videoFolder = 'C:/Users/HP/Downloads/American Drama';
const clips = [
  'download (11).mp4',
  'download (15).mp4',
  'ZDola_15s_1787833810411_Dola_Video.mp4',
  'ZDola_15s_1787833810221_Dola_Video.mp4',
  'download (2).mp4',
  'download (10).mp4',
  'download (14).mp4'
];

const outDir = path.join(__dirname, 'public', 'images', 'new_drama');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

clips.forEach((c, i) => {
  const videoPath = path.join(videoFolder, c);
  for (let t = 2; t <= 26; t += 4) {
    const frameName = `clip${i+1}_t${t}.jpg`;
    try {
      execSync(`ffmpeg -y -ss 00:00:${t < 10 ? '0' + t : t} -i "${videoPath}" -vf "scale=1200:-1" -vframes 1 "${path.join(outDir, frameName)}"`, { stdio: 'ignore' });
    } catch (e) {}
  }
});

console.log('Extracted rich frames to public/images/new_drama');
