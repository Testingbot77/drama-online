const { execSync } = require('child_process');
const path = require('path');

const imgDir = path.join(__dirname, 'public', 'images');

// Part 2 Cover: Emotionally centered on daughter & mother/father
execSync(`ffmpeg -y -i "public/images/new_drama/clip1_t6.jpg" -vf "crop=in_w:in_w*0.66:0:in_h*0.32,scale=1200:800" "${path.join(imgDir, 'the-grandmothers-secret-quilt-p2-cover.jpg')}"`, { stdio: 'ignore' });

console.log('Done adjusting Part 2 Cover');
