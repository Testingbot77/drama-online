const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const videoFolder = 'C:/Users/HP/Downloads/American Drama';
const imgDir = path.join(__dirname, 'public', 'images');

const storyVideos = [
  {
    prefix: 'the-graduation-envelope-mother-in-green',
    file: 'download (11).mp4',
    coverCrop: 'crop=in_w:in_w*0.66:0:in_h*0.15',
    coverSec: '06',
    sceneCrop: 'crop=in_w:in_w*0.66:0:in_h*0.05',
    sceneSec: '12'
  },
  {
    prefix: 'the-grandmothers-handwritten-ledger-inheritance',
    file: 'download (15).mp4',
    coverCrop: 'crop=in_w:in_w*0.66:0:in_h*0.25',
    coverSec: '04',
    sceneCrop: 'crop=in_w:in_w*0.66:0:in_h*0.45',
    sceneSec: '10'
  },
  {
    prefix: 'the-forgotten-portrait-family-will',
    file: 'ZDola_15s_1787833810411_Dola_Video.mp4',
    coverCrop: 'crop=in_w:in_w*0.66:0:in_h*0.1',
    coverSec: '04',
    sceneCrop: 'crop=in_w:in_w*0.66:0:in_h*0.15',
    sceneSec: '10'
  },
  {
    prefix: 'the-gold-framed-deed-refused-to-pack',
    file: 'ZDola_15s_1787833810221_Dola_Video.mp4',
    coverCrop: 'crop=in_w:in_w*0.66:0:in_h*0.12',
    coverSec: '06',
    sceneCrop: 'crop=in_w:in_w*0.66:0:in_h*0.28',
    sceneSec: '12'
  },
  {
    prefix: 'the-millionaire-sisters-kitchen-trash-quilt',
    file: 'download (2).mp4',
    coverCrop: 'crop=in_w:in_w*0.66:0:in_h*0.18',
    coverSec: '05',
    sceneCrop: 'crop=in_w:in_w*0.66:0:in_h*0.4',
    sceneSec: '12'
  },
  {
    prefix: 'the-landlords-fake-eviction-federal-deeds',
    file: 'download (10).mp4',
    coverCrop: 'crop=in_w:in_w*0.66:0:in_h*0.25',
    coverSec: '06',
    sceneCrop: 'crop=in_w:in_w*0.66:0:in_h*0.35',
    sceneSec: '12'
  },
  {
    prefix: 'the-kitchen-table-secret-foreclosure-truth',
    file: 'download (14).mp4',
    coverCrop: 'crop=in_w:in_w*0.66:0:in_h*0.2',
    coverSec: '05',
    sceneCrop: 'crop=in_w:in_w*0.66:0:in_h*0.35',
    sceneSec: '11'
  },
  {
    prefix: 'the-prodigal-son-backyard-reunion-gift',
    file: 'Black american 1.mp4',
    coverCrop: 'crop=in_w:in_w*0.66:0:in_h*0.15',
    coverSec: '04',
    sceneCrop: 'crop=in_w:in_w*0.66:0:in_h*0.1',
    sceneSec: '10'
  }
];

storyVideos.forEach((sv, i) => {
  const vPath = path.join(videoFolder, sv.file);
  const coverOut = path.join(imgDir, `${sv.prefix}-cover.jpg`);
  const sceneOut = path.join(imgDir, `${sv.prefix}-scene.jpg`);

  try {
    execSync(`ffmpeg -y -ss 00:00:${sv.coverSec} -i "${vPath}" -vframes 1 -vf "${sv.coverCrop},scale=1200:800" "${coverOut}"`, { stdio: 'ignore' });
    execSync(`ffmpeg -y -ss 00:00:${sv.sceneSec} -i "${vPath}" -vframes 1 -vf "${sv.sceneCrop},scale=1200:800" "${sceneOut}"`, { stdio: 'ignore' });
    console.log(`[${i+1}/8] Successfully cropped images for ${sv.prefix}`);
  } catch (err) {
    console.error(`Error on ${sv.file}:`, err.message);
  }
});
