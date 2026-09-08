const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const videoDir = "C:/Users/HP/Downloads/New upload";
const outDir = path.join(__dirname, "public", "images", "uploads_batch_0908");
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const files = fs.readdirSync(videoDir).filter(f => f.endsWith(".mp4"));
console.log("Found videos:", files);

files.forEach((file, idx) => {
  const fullPath = path.join(videoDir, file);
  const durStr = execSync(`ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "${fullPath}"`).toString().trim();
  const dur = parseFloat(durStr) || 30;
  console.log(`Extracting frames for [Video ${idx+1}] ${file}...`);
  for (let i = 1; i <= 6; i++) {
    const time = (dur / 7) * i;
    const outImg = path.join(outDir, `v${idx+1}_frame${i}.jpg`);
    try {
      execSync(`ffmpeg -y -ss ${time.toFixed(2)} -i "${fullPath}" -vf "scale=720:1280" -vframes 1 -q:v 2 "${outImg}"`, { stdio: "ignore" });
    } catch(e) {
      console.error(e.message);
    }
  }
});
console.log("All keyframes extracted successfully to uploads_batch_0908!");
