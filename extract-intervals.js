const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

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

clips.forEach((c, idx) => {
  const p = path.join('C:/Users/HP/Downloads/American Drama', c);
  [2, 6, 10, 14, 18, 22, 26].forEach(sec => {
    const sStr = sec < 10 ? '0' + sec : '' + sec;
    const out = path.join(outDir, `c${idx+1}_s${sStr}.jpg`);
    try {
      execSync(`ffmpeg -y -ss 00:00:${sStr} -i "${p}" -vframes 1 -q:v 2 "${out}"`, { stdio: 'ignore' });
    } catch(e) {}
  });
});
console.log('Finished extracting detailed keyframes');
