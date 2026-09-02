const https = require('https');
const fs = require('fs');
const path = require('path');

const publicImagesDir = path.join(__dirname, 'public', 'images');

const CURATED_MOTHERHOOD_PHOTOS = [
  {
    fileName: 'the-two-mothers-at-graduation-cover.jpg',
    url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1280&auto=format&fit=crop'
  },
  {
    fileName: 'the-two-mothers-at-graduation-scene-1.jpg',
    url: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1280&auto=format&fit=crop'
  },
  {
    fileName: 'the-two-mothers-at-graduation-scene-2.jpg',
    url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1280&auto=format&fit=crop'
  },
  {
    fileName: 'the-two-mothers-at-graduation-p2-cover.jpg',
    url: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1280&auto=format&fit=crop'
  }
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed with status ${res.statusCode}`));
      }
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close(resolve);
      });
    }).on('error', reject);
  });
}

async function run() {
  for (const item of CURATED_MOTHERHOOD_PHOTOS) {
    const dest = path.join(publicImagesDir, item.fileName);
    try {
      await downloadFile(item.url, dest);
      console.log(`Downloaded professional HD photo for: ${item.fileName}`);
    } catch (err) {
      console.error(`Failed to download ${item.fileName}:`, err.message);
    }
  }
  console.log("All Motherhood story photos upgraded to cinematic HD photography!");
}

run();
