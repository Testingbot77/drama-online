const fs = require('fs');

const stories = JSON.parse(fs.readFileSync('data/stories.json', 'utf8'));
console.log(`TOTAL STORIES: ${stories.length}`);

stories.forEach((s, idx) => {
  console.log(`[${idx+1}] ${s.slug} | Cover: ${s.coverImage}`);
  if (s.scenes) {
    s.scenes.forEach((sc, sidx) => {
      console.log(`    Scene ${sidx+1}: ${sc.image} | ${sc.caption}`);
    });
  }
});
