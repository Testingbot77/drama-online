const fs = require('fs');
const path = require('path');
const { generateSceneSVG } = require('./server/geminiEngine');

const imgDir = path.join(__dirname, 'public', 'images');
const vidDir = path.join(__dirname, 'public', 'videos');
const inputDir = path.join(__dirname, 'input_videos');

[imgDir, vidDir, inputDir].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

// Generate sample SVGs
fs.writeFileSync(path.join(imgDir, 'story1_cover.svg'), generateSceneSVG("The Discarded Heiress", "Billionaire's Secret Vow", 'cover', 'gold'), 'utf8');
fs.writeFileSync(path.join(imgDir, 'story1_scene1.svg'), generateSceneSVG("The Cruel Confrontation", "Julian hands Maya the separation contract in the rain", 'scene', 'crimson'), 'utf8');
fs.writeFileSync(path.join(imgDir, 'story1_scene2.svg'), generateSceneSVG("The Vance Convoy", "Six black Maybachs arrive to salute the supreme heiress", 'scene', 'gold'), 'utf8');

fs.writeFileSync(path.join(imgDir, 'story2_cover.svg'), generateSceneSVG("His Hidden Mafia Queen", "The Undercover Waitress", 'cover', 'crimson'), 'utf8');
fs.writeFileSync(path.join(imgDir, 'story2_scene1.svg'), generateSceneSVG("Diner Ambush Neutralized", "Elena disarms the five hitmen in twelve seconds", 'scene', 'cyan'), 'utf8');

console.log("Sample image assets generated successfully!");
