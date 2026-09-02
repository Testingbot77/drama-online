const { execSync } = require('child_process');
const path = require('path');

const imgDir = path.join(__dirname, 'public', 'images');

// Part 2 Cover: Framed on Maya & parents outside
execSync(`ffmpeg -y -i "public/images/new_drama/c1_s06.jpg" -vf "crop=in_w*0.95:in_w*0.64:0:in_h*0.2,scale=1200:800" "${path.join(imgDir, 'the-grandmothers-secret-quilt-p2-cover.jpg')}"`, { stdio: 'ignore' });

// Part 2 Climax: Mother holding family portrait in living room
execSync(`ffmpeg -y -i "public/images/new_drama/clip4_t10.jpg" -vf "crop=in_w:in_w*0.66:0:in_h*0.25,scale=1200:800" "${path.join(imgDir, 'the-grandmothers-secret-quilt-scene-2.jpg')}"`, { stdio: 'ignore' });

console.log('Refined Part 2 images');
