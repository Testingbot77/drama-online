const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const REELS_DIR = 'C:/Users/HP/OneDrive/Desktop/Extension/reels_folder';
const OUTPUT_IMG_DIR = path.join(__dirname, 'public', 'images', 'uploads_batch_0409_part2');

if (!fs.existsSync(OUTPUT_IMG_DIR)) {
  fs.mkdirSync(OUTPUT_IMG_DIR, { recursive: true });
}

const targetVideos = ['04-09-2026_7.mp4', '04-09-2026_8.mp4', '04-09-2026_9.mp4'];

const videoMeta = [];

targetVideos.forEach((filename, idx) => {
  const videoIndex = idx + 7;
  const filePath = path.join(REELS_DIR, filename);
  
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    return;
  }

  // Get duration using ffprobe
  let duration = 30;
  try {
    const probeOutput = execSync(`ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "${filePath}"`).toString().trim();
    duration = parseFloat(probeOutput) || 30;
  } catch (e) {
    console.warn(`Could not probe duration for ${filename}, defaulting to 30s`);
  }

  console.log(`Video ${videoIndex}: ${filename} (Duration: ${duration.toFixed(1)}s)`);

  const timestamps = [
    (duration * 0.15).toFixed(1),
    (duration * 0.40).toFixed(1),
    (duration * 0.65).toFixed(1),
    (duration * 0.88).toFixed(1)
  ];

  const frames = [];
  timestamps.forEach((ts, frameIdx) => {
    const frameFilename = `video_${videoIndex}_frame_${frameIdx + 1}.jpg`;
    const frameDiskPath = path.join(OUTPUT_IMG_DIR, frameFilename);
    const webPath = `/images/uploads_batch_0409_part2/${frameFilename}`;

    try {
      execSync(`ffmpeg -y -ss ${ts} -i "${filePath}" -vframes 1 -q:v 2 "${frameDiskPath}"`, { stdio: 'ignore' });
      if (fs.existsSync(frameDiskPath) && fs.statSync(frameDiskPath).size > 500) {
        frames.push({
          frameIndex: frameIdx + 1,
          timestamp: ts,
          framePath: webPath,
          diskPath: frameDiskPath
        });
        console.log(`  Extracted Frame ${frameIdx + 1} at ${ts}s -> ${frameFilename}`);
      }
    } catch (e) {
      console.error(`  Failed to extract frame ${frameIdx + 1}:`, e.message);
    }
  });

  videoMeta.push({
    index: videoIndex,
    filename: filename,
    filePath: filePath,
    duration: duration,
    frames: frames
  });
});

fs.writeFileSync(path.join(__dirname, 'data', 'uploaded_videos_meta_batch2.json'), JSON.stringify(videoMeta, null, 2), 'utf8');
console.log('Saved meta to data/uploaded_videos_meta_batch2.json');
