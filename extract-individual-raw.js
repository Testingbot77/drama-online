const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const videoFolder = 'C:/Users/HP/Downloads/American Drama';
const targetVideos = [
  { id: 'download_11', file: 'download (11).mp4' },
  { id: 'download_15', file: 'download (15).mp4' },
  { id: 'zdola_411', file: 'ZDola_15s_1787833810411_Dola_Video.mp4' },
  { id: 'zdola_221', file: 'ZDola_15s_1787833810221_Dola_Video.mp4' },
  { id: 'download_2', file: 'download (2).mp4' },
  { id: 'download_10', file: 'download (10).mp4' },
  { id: 'download_14', file: 'download (14).mp4' },
  { id: 'black_american_1', file: 'Black american 1.mp4' }
];

const inspectDir = path.join(__dirname, 'public', 'images', 'individual_stories');
if (!fs.existsSync(inspectDir)) fs.mkdirSync(inspectDir, { recursive: true });

targetVideos.forEach((tv, idx) => {
  const vPath = path.join(videoFolder, tv.file);
  if (!fs.existsSync(vPath)) {
    console.log('Missing:', tv.file);
    return;
  }
  
  // Extract 3 snapshot intervals for analysis
  [3, 8, 14].forEach((sec, sIdx) => {
    const outName = `${tv.id}_raw_${sIdx+1}.jpg`;
    try {
      execSync(`ffmpeg -y -ss 00:00:0${sec} -i "${vPath}" -vframes 1 -q:v 2 "${path.join(inspectDir, outName)}"`, { stdio: 'ignore' });
    } catch (e) {}
  });
  console.log(`Extracted raw frames for [${idx+1}] ${tv.file}`);
});
