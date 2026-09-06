const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const dir = 'C:/Users/HP/Downloads/New upload';
const files = ['7.mp4', '8.mp4', '9.mp4', '10.mp4', '12.mp4', '13.mp4'];

files.forEach(f => {
  const p = path.join(dir, f);
  try {
    const audioInfo = execSync(`ffprobe -v error -select_streams a:0 -show_entries stream=codec_name,channels,sample_rate -of default=noprint_wrappers=1:nokey=1 "${p}"`).toString().trim();
    console.log(`\nFile: ${f}`);
    console.log(`Audio info: ${audioInfo}`);
  } catch (e) {
    console.log(`File: ${f} (No audio or probe error)`);
  }
});
