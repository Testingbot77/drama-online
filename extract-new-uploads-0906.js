const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const UPLOADS_DIR = 'C:/Users/HP/Downloads/New upload';
const OUTPUT_FRAMES_DIR = path.join(__dirname, 'public', 'images', 'uploads_batch_0906');

if (!fs.existsSync(OUTPUT_FRAMES_DIR)) {
  fs.mkdirSync(OUTPUT_FRAMES_DIR, { recursive: true });
}

if (!fs.existsSync(UPLOADS_DIR)) {
  console.error('Uploads dir not found:', UPLOADS_DIR);
  process.exit(1);
}

const files = fs.readdirSync(UPLOADS_DIR)
  .filter(f => /\.(mp4|mov|mkv|webm|avi)$/i.test(f))
  .sort((a, b) => {
    const numA = parseInt(a) || 0;
    const numB = parseInt(b) || 0;
    return numA - numB;
  });

console.log(`Found ${files.length} video files in ${UPLOADS_DIR}:`, files);

const videoInfo = [];

files.forEach((file, i) => {
  const fullPath = path.join(UPLOADS_DIR, file);
  const stats = fs.statSync(fullPath);
  let duration = 0;
  try {
    const rawDur = execSync(`ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "${fullPath}"`).toString().trim();
    duration = parseFloat(rawDur) || 0;
  } catch(e){}

  console.log(`\n================== [${i+1}/${files.length}] ${file} ==================`);
  console.log(`Size: ${(stats.size / (1024*1024)).toFixed(2)} MB | Duration: ${duration.toFixed(1)}s`);

  // Extract 6 keyframes at intervals across duration for detailed visual analysis
  const frameIntervals = [
    Math.max(1, Math.floor(duration * 0.10)),
    Math.max(2, Math.floor(duration * 0.25)),
    Math.max(3, Math.floor(duration * 0.45)),
    Math.max(4, Math.floor(duration * 0.65)),
    Math.max(5, Math.floor(duration * 0.80)),
    Math.max(6, Math.floor(duration * 0.95))
  ];

  const extractedFrames = [];
  frameIntervals.forEach((sec, fIdx) => {
    const frameName = `video_${file.replace(/\.[^/.]+$/, "")}_frame_${fIdx+1}.jpg`;
    const framePath = path.join(OUTPUT_FRAMES_DIR, frameName);
    try {
      execSync(`ffmpeg -y -ss ${sec} -i "${fullPath}" -vframes 1 -q:v 2 "${framePath}"`, { stdio: 'ignore' });
      if (fs.existsSync(framePath) && fs.statSync(framePath).size > 100) {
        extractedFrames.push({
          sec,
          frameName,
          framePath: `/images/uploads_batch_0906/${frameName}`
        });
      }
    } catch(e){}
  });

  console.log(`Extracted ${extractedFrames.length} frames.`);
  videoInfo.push({
    index: i + 1,
    filename: file,
    fullPath,
    sizeMb: (stats.size / (1024*1024)).toFixed(2),
    duration,
    frames: extractedFrames
  });
});

fs.writeFileSync(path.join(__dirname, 'data', 'uploaded_videos_meta_0906.json'), JSON.stringify(videoInfo, null, 2), 'utf8');
console.log('\nMetadata and frames saved successfully to data/uploaded_videos_meta_0906.json!');
