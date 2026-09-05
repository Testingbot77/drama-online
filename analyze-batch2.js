const fs = require('fs');
const path = require('path');
const { GoogleGenerativeAI } = require('C:/Users/HP/Downloads/Extension/node_modules/@google/generative-ai');

let apiKey = '';
const EXTENSION_SETTINGS = 'C:/Users/HP/Downloads/Extension/data/settings.json';
if (fs.existsSync(EXTENSION_SETTINGS)) {
  try {
    const s = JSON.parse(fs.readFileSync(EXTENSION_SETTINGS, 'utf8'));
    if (s.geminiApiKey) apiKey = s.geminiApiKey;
  } catch(e){}
}

const genAI = new GoogleGenerativeAI(apiKey);

async function runAnalysis() {
  const metaPath = path.join(__dirname, 'data', 'uploaded_videos_meta_batch2.json');
  const videos = JSON.parse(fs.readFileSync(metaPath, 'utf8'));

  for (const v of videos) {
    console.log(`\n================ Analyzing Video ${v.index}: ${v.filename} ================`);
    const parts = [];
    v.frames.forEach((f) => {
      const fullPath = path.join(__dirname, 'public', f.framePath);
      if (fs.existsSync(fullPath)) {
        const b64 = fs.readFileSync(fullPath).toString('base64');
        parts.push({
          inlineData: {
            mimeType: 'image/jpeg',
            data: b64
          }
        });
      }
    });

    parts.push(`You are an expert American family drama analyst, screenwriter, and Facebook Reels strategist for Taleonix (US readers age 45-65).
Analyze these 4 sequential keyframes from the 30-second reel "${v.filename}".

Provide a thorough, precise structured analysis in JSON format:
{
  "premise": "Relationship + betrayal/violation in one sharp line",
  "characters": [
    {
      "name": "Character Name",
      "role": "Role (e.g. Mother, Eldest Son, Estranged Sister, Mother-in-Law)",
      "appearance": "Visual description: estimated age, Black American / ethnicity, hairstyle, exact clothing & colors, expressions across frames"
    }
  ],
  "setting": "Exact location details (room type, decor, lighting, time of day)",
  "evidenceObject": "The specific physical item/object proving betrayal (envelope, keys, paperwork, phone, ring box, bag, etc.)",
  "conflict": "The core dramatic betrayal, secret, or confrontation occurring",
  "killerQuote": "A devastating, restrained one-liner spoken during the confrontation",
  "moralDebate": "Who is wrong / open moral question for readers",
  "facebook": {
    "selectedTitle": "High-CTR, emotional curiosity hook with 1 emoji (e.g. She Opened His Secret Safe At 2 AM... 🔑)",
    "titleVariations": [
      "Hook 1 (Emotional shock angle)",
      "Hook 2 (Secret / Betrayal angle)",
      "Hook 3 (Question / Moral debate angle)",
      "Hook 4 (Dramatic reveal angle)"
    ],
    "description": "2-3 sentence gripping story caption explaining the emotional tension shown in the scenes. End with an engaging question for comments.",
    "hashtags": ["#FamilyDrama", "#Betrayal", "#AmericanDrama", "#ViralReels", "#TrendingStory"]
  }
}
Output ONLY raw JSON.`);

    const model = genAI.getGenerativeModel({ model: 'gemini-3.6-flash' });
    try {
      const res = await model.generateContent(parts);
      const txt = res.response.text().trim().replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/\s*```$/, '').trim();
      const parsed = JSON.parse(txt);
      console.log(`Title: ${parsed.facebook?.selectedTitle}`);
      console.log(`Conflict: ${parsed.conflict}`);
      console.log(`Evidence: ${parsed.evidenceObject}`);
      v.analysis = parsed;
    } catch (e) {
      console.error(`Gemini Error on video ${v.index}:`, e.message);
    }
  }

  fs.writeFileSync(path.join(__dirname, 'data', 'uploaded_videos_analyzed_batch2.json'), JSON.stringify(videos, null, 2), 'utf8');
  console.log('\nAll 3 batch 2 videos successfully analyzed and saved to data/uploaded_videos_analyzed_batch2.json');
}

runAnalysis().catch(console.error);
