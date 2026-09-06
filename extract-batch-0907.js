const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const UPLOADS_DIR = 'C:/Users/HP/Downloads/New upload';
const OUTPUT_FRAMES_DIR = path.join(__dirname, 'public', 'images', 'uploads_batch_0907');

if (!fs.existsSync(OUTPUT_FRAMES_DIR)) {
  fs.mkdirSync(OUTPUT_FRAMES_DIR, { recursive: true });
}

const files = fs.readdirSync(UPLOADS_DIR)
  .filter(f => /\.(mp4|mov|mkv|webm|avi)$/i.test(f))
  .sort((a, b) => {
    const numA = parseInt(a) || 0;
    const numB = parseInt(b) || 0;
    return numA - numB;
  });

console.log('Found video files in upload dir:', files);

const results = [];

files.forEach((file, index) => {
  const fullPath = path.join(UPLOADS_DIR, file);
  const stats = fs.statSync(fullPath);
  let duration = 0;
  try {
    const rawDur = execSync(`ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "${fullPath}"`).toString().trim();
    duration = parseFloat(rawDur) || 0;
  } catch(e) {}

  console.log(`\n================== [${index+1}/${files.length}] ${file} ==================`);
  console.log(`Size: ${(stats.size / (1024*1024)).toFixed(2)} MB | Duration: ${duration.toFixed(1)}s`);

  // Extract 6 keyframes
  const timestamps = [
    Math.max(0.5, Math.floor(duration * 0.08)),
    Math.max(1.5, Math.floor(duration * 0.25)),
    Math.max(2.5, Math.floor(duration * 0.45)),
    Math.max(3.5, Math.floor(duration * 0.65)),
    Math.max(4.5, Math.floor(duration * 0.80)),
    Math.max(5.5, Math.floor(duration * 0.95))
  ];

  const frames = [];
  timestamps.forEach((sec, idx) => {
    const outName = `video_${file.replace(/\.[^/.]+$/, "")}_frame_${idx+1}.jpg`;
    const outPath = path.join(OUTPUT_FRAMES_DIR, outName);
    try {
      execSync(`ffmpeg -y -ss ${sec} -i "${fullPath}" -vframes 1 -q:v 2 "${outPath}"`, { stdio: 'ignore' });
      if (fs.existsSync(outPath) && fs.statSync(outPath).size > 100) {
        frames.push({
          timestamp: sec,
          frameName: outName,
          webPath: `/images/uploads_batch_0907/${outName}`,
          localPath: outPath
        });
      }
    } catch(e) {}
  });

  console.log(`Extracted ${frames.length} frames.`);

  results.push({
    file,
    duration,
    sizeMb: (stats.size / (1024*1024)).toFixed(2),
    frames
  });
});

fs.writeFileSync(path.join(__dirname, 'data', 'uploaded_videos_meta_0907.json'), JSON.stringify(results, null, 2));
console.log('\nAll frames extracted successfully!');
