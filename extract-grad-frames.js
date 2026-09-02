const { execSync } = require('child_process');
const path = require('path');
const v = 'C:/Users/HP/Downloads/American Drama/download (11).mp4';

for (let s = 1; s <= 15; s += 2) {
  const time = s < 10 ? '0' + s : '' + s;
  const out = path.join(__dirname, 'public', 'images', `grad_frame_${time}.jpg`);
  try {
    execSync(`ffmpeg -y -ss 00:00:${time} -i "${v}" -vframes 1 -vf "scale=1200:800:force_original_aspect_ratio=increase,crop=1200:800" "${out}"`, { stdio: 'ignore' });
    console.log(`Extracted grad_frame_${time}.jpg`);
  } catch(e) {
    console.error(e.message);
  }
}
