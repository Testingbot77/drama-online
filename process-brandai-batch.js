const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const VIDEO_DIR = 'C:/Users/HP/Downloads/TheBrandAI_Videos';
const OUT_DIR = path.join(__dirname, 'public', 'images', 'brandai_batch');

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

const files = fs.readdirSync(VIDEO_DIR).filter(f => /\.(mp4|mov|mkv|webm|avi)$/i.test(f)).sort();
console.log(`Found ${files.length} videos in ${VIDEO_DIR}:`);

const videoMetas = [];

files.forEach((file, idx) => {
  const fullPath = path.join(VIDEO_DIR, file);
  const stats = fs.statSync(fullPath);
  let duration = 0;
  try {
    const rawDur = execSync(`ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "${fullPath}"`).toString().trim();
    duration = parseFloat(rawDur) || 0;
  } catch(e) {
    duration = 30;
  }

  console.log(`[${idx+1}/${files.length}] ${file} (${(stats.size/(1024*1024)).toFixed(2)} MB, ${duration.toFixed(1)}s)`);

  const intervals = [
    Math.max(1, Math.floor(duration * 0.10)),
    Math.max(2, Math.floor(duration * 0.28)),
    Math.max(3, Math.floor(duration * 0.48)),
    Math.max(4, Math.floor(duration * 0.68)),
    Math.max(5, Math.floor(duration * 0.88))
  ];

  const frames = [];
  intervals.forEach((sec, fIdx) => {
    const frameName = `video_${idx+1}_frame_${fIdx+1}.jpg`;
    const framePath = path.join(OUT_DIR, frameName);
    try {
      execSync(`ffmpeg -y -ss ${sec} -i "${fullPath}" -vframes 1 -q:v 2 "${framePath}"`, { stdio: 'ignore' });
      if (fs.existsSync(framePath) && fs.statSync(framePath).size > 100) {
        frames.push({
          sec,
          frameName,
          framePath: `/images/brandai_batch/${frameName}`,
          fullPath: framePath
        });
      }
    } catch(e){}
  });

  console.log(`  Extracted ${frames.length} frames.`);
  videoMetas.push({
    index: idx + 1,
    filename: file,
    fullPath,
    sizeMb: (stats.size/(1024*1024)).toFixed(2),
    duration,
    frames
  });
});

fs.writeFileSync(path.join(__dirname, 'data', 'brandai_videos_meta.json'), JSON.stringify(videoMetas, null, 2), 'utf8');
console.log('Saved data/brandai_videos_meta.json successfully!');
