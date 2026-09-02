const { execSync } = require('child_process');
const path = require('path');

const imgDir = path.join(__dirname, 'public', 'images');

// Part 1 Cover
execSync(`ffmpeg -y -i "public/images/new_drama/clip6_t14.jpg" -vf "crop=in_w:in_w*0.66:0:in_h*0.25,scale=1200:800" "${path.join(imgDir, 'the-grandmothers-secret-quilt-cover.jpg')}"`, { stdio: 'inherit' });

// Part 1 Climax
execSync(`ffmpeg -y -i "public/images/new_drama/clip2_t10.jpg" -vf "crop=in_w:in_w*0.66:0:in_h*0.25,scale=1200:800" "${path.join(imgDir, 'the-grandmothers-secret-quilt-scene-1.jpg')}"`, { stdio: 'inherit' });

// Part 2 Cover
execSync(`ffmpeg -y -i "public/images/new_drama/clip1_t6.jpg" -vf "crop=in_w:in_w*0.66:0:in_h*0.22,scale=1200:800" "${path.join(imgDir, 'the-grandmothers-secret-quilt-p2-cover.jpg')}"`, { stdio: 'inherit' });

// Part 2 Climax
execSync(`ffmpeg -y -i "public/images/new_drama/clip4_t10.jpg" -vf "crop=in_w:in_w*0.66:0:in_h*0.25,scale=1200:800" "${path.join(imgDir, 'the-grandmothers-secret-quilt-scene-2.jpg')}"`, { stdio: 'inherit' });

console.log('All 4 images cropped and scaled successfully!');
