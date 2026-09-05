const fs = require('fs');
const path = require('path');
const { GoogleGenerativeAI } = require('C:/Users/HP/Downloads/Extension/node_modules/@google/generative-ai');

const apiKey = '';
const genAI = new GoogleGenerativeAI(apiKey);

async function run() {
  const metaPath = path.join(__dirname, 'data', 'uploaded_videos_analyzed.json');
  const videos = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
  const v = videos.find(x => x.index === 3);
  if (!v) return;

  const parts = [];
  v.frames.forEach((f) => {
    const fullFramePath = path.join(__dirname, 'public', f.framePath);
    if (fs.existsSync(fullFramePath)) {
      const b64 = fs.readFileSync(fullFramePath).toString('base64');
      parts.push({ inlineData: { mimeType: 'image/jpeg', data: b64 } });
    }
  });

  parts.push(`You are an expert American family drama analyst, screenwriter, and Facebook Reels strategist.
Analyze these 4 sequential keyframes from the 30-second video "${v.filename}".

Provide a detailed structured analysis in JSON format strictly matching this schema:
{
  "characters": [
    {
      "name": "Character Name",
      "role": "Role (e.g. Mother, Daughter, Eldest Son, In-law)",
      "appearance": "Detailed visual description: age, hair, clothing, expression"
    }
  ],
  "setting": "Exact setting description (e.g. Living room, dining table, kitchen, office)",
  "evidenceObject": "The specific physical object, paper, deed, jewelry, box, keys, or phone involved",
  "conflict": "The core dramatic betrayal or emotional violation happening in these frames",
  "killerQuote": "A devastating, restrained one-liner spoken during the confrontation",
  "facebook": {
    "selectedTitle": "High-CTR, emotional curiosity hook with 1 emoji",
    "titleVariations": [
      "Hook 1 (Emotional shock angle)",
      "Hook 2 (Secret / Betrayal angle)",
      "Hook 3 (Question / Debate angle)",
      "Hook 4 (Dramatic reveal angle)"
    ],
    "description": "2-3 sentence gripping story caption explaining the emotional tension shown in the scenes. End with an engaging question for the comments.",
    "hashtags": ["#FamilyDrama", "#Betrayal", "#AmericanDrama", "#ViralReels", "#HeirloomSecrets"]
  }
}
Output ONLY raw JSON.`);

  const models = ['gemini-2.0-flash', 'gemini-1.5-flash', 'gemini-3.6-flash'];
  let success = false;
  for (const m of models) {
    if (success) break;
    try {
      console.log(`Trying model ${m}...`);
      const model = genAI.getGenerativeModel({ model: m });
      const res = await model.generateContent(parts);
      const txt = res.response.text().trim().replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/\s*```$/, '').trim();
      v.analysis = JSON.parse(txt);
      fs.writeFileSync(metaPath, JSON.stringify(videos, null, 2), 'utf8');
      console.log('Video 3 successfully analyzed:', v.analysis.facebook.selectedTitle);
      success = true;
    } catch (e) {
      console.warn(`Model ${m} failed:`, e.message);
      await new Promise(r => setTimeout(r, 2000));
    }
  }
}

run().catch(console.error);
