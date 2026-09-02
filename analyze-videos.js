const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const videoFolder = 'C:/Users/HP/Downloads/American Drama';
const videoFiles = [
  'download (11).mp4',
  'download (15).mp4',
  'ZDola_15s_1787833810411_Dola_Video.mp4',
  'ZDola_15s_1787833810221_Dola_Video.mp4',
  'download (2).mp4',
  'download (10).mp4',
  'download (14).mp4'
];

const analysisDir = path.join(__dirname, 'input_videos', 'analysis');
if (!fs.existsSync(analysisDir)) fs.mkdirSync(analysisDir, { recursive: true });

videoFiles.forEach((file, i) => {
  const filePath = path.join(videoFolder, file);
  if (!fs.existsSync(filePath)) return;
  
  // Extract audio to wav
  const wavPath = path.join(analysisDir, `audio_${i+1}.wav`);
  try {
    execSync(`ffmpeg -y -i "${filePath}" -ar 16000 -ac 1 "${wavPath}"`, { stdio: 'ignore' });
  } catch (e) {}

  // Get duration
  let duration = 'unknown';
  try {
    duration = execSync(`ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "${filePath}"`).toString().trim();
  } catch (e) {}

  console.log(`Video [${i+1}] ${file}: duration=${duration}s`);
});
