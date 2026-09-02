const { execSync } = require('child_process');
const path = require('path');

const imgDir = path.join(__dirname, 'public', 'images');

// Part 2 Climax: Perfectly framed with Denise face + gold photo frame + Grandma in purple dress
execSync(`ffmpeg -y -i "public/images/new_drama/clip4_t10.jpg" -vf "crop=in_w:in_w*0.66:0:in_h*0.08,scale=1200:800" "${path.join(imgDir, 'the-grandmothers-secret-quilt-scene-2.jpg')}"`, { stdio: 'ignore' });

// Part 2 Cover: Perfectly framed with daughter, father, mother outside
execSync(`ffmpeg -y -i "public/images/new_drama/clip1_t6.jpg" -vf "crop=in_w:in_w*0.66:0:in_h*0.12,scale=1200:800" "${path.join(imgDir, 'the-grandmothers-secret-quilt-p2-cover.jpg')}"`, { stdio: 'ignore' });

console.log('Done framing Part 2 scene 2 & cover');
