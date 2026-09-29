/**
 * 🎬 Taleonix 30-Second Combined AI Video Generation Prompt Engine
 * Converts stories into single continuous 30s timeline prompts for Kling, Runway Gen-3, Sora, Hailuo, Luma, Minimax
 */

const fs = require('fs');
const path = require('path');
const db = require('./server/db');

const stories = db.getStories();
console.log(`[30s Prompt Engine] Processing ${stories.length} stories for 30s single-prompt generation...`);

const generatedBatches = [];

stories.forEach((s, idx) => {
  const paragraphs = s.paragraphs || [];
  const hookSummary = s.hookSummary || s.synopsis || '';
  
  // Extract location marker if present
  let locationTag = 'Suburban American Home — Evening';
  const locMatch = paragraphs.find(p => p.startsWith('[') && p.endsWith(']'));
  if (locMatch) {
    locationTag = locMatch.replace(/[\[\]]/g, '').trim();
  }

  // Identify core evidence item
  let evidenceItem = 'a certified legal document proving the betrayal';
  const lowerSummary = (s.title + ' ' + hookSummary + ' ' + (paragraphs[0] || '')).toLowerCase();
  if (lowerSummary.includes('duffel')) evidenceItem = 'unzipping a heavy canvas duffel bag filled with certified financial records and returned checks';
  else if (lowerSummary.includes('envelope')) evidenceItem = 'breaking open a sealed official envelope revealing hidden adoption and paternity papers';
  else if (lowerSummary.includes('lunchbox') || lowerSummary.includes('note')) evidenceItem = 'sliding open a child backpack lunchbox revealing a folded purple-ink secret note';
  else if (lowerSummary.includes('badge') || lowerSummary.includes('ribbon')) evidenceItem = 'holding up a gold-trimmed Best Mom award ribbon with trembling pride';
  else if (lowerSummary.includes('ledger')) evidenceItem = 'opening an old leather-bound handwritten ledger showing the true inheritance distribution';
  else if (lowerSummary.includes('phone') || lowerSummary.includes('message')) evidenceItem = 'turning a smartphone screen revealing undeniable photographic evidence';
  else if (lowerSummary.includes('check') || lowerSummary.includes('bank')) evidenceItem = 'sliding a signed cashier check and bank statement across the wooden table';

  // Construct the Master 30s Single Combined Prompt
  const master30sPrompt = `[STYLE & CINEMATOGRAPHY]: Cinematic photorealistic 8K drama, shot on 35mm Arri Alexa lens, shallow depth of field, natural evening golden-hour rim lighting, smooth steadycam tracking push-in, Hollywood prestige family drama aesthetic.

[CHARACTERS & WARDROBE]: Black American female protagonist (age 32-38, refined braids, elegant knit sweater/cardigan) facing arrogant Black American antagonist (age 35-45, designer fitted wardrobe) in ${locationTag}.

[0:00-0:06 HOOK OPENING]: Camera glides smoothly forward into the high-tension confrontation. The protagonist stands with rigid, unwavering posture and calm defiance while the antagonist gestures arrogantly, attempting to dominate the space.

[0:06-0:14 THE EVIDENCE REVEAL]: In one continuous smooth motion, the protagonist slowly and deliberately reveals ${evidenceItem}. Extreme close-up on the physical evidence object as the antagonist suddenly freezes in guilty realization.

[0:15-0:23 THE CONFRONTATION & SHOCK]: The antagonist stumbles back half a step, hands trembling, smug confidence completely shattering. The protagonist speaks with calm, razor-sharp authority, locking unflinching eye contact.

[0:23-0:30 CLIFFHANGER RESOLUTION]: The protagonist takes a decisive step back, turns around without hesitation, and firmly closes the solid front door / walks away into the evening light, leaving the antagonist completely isolated and humiliated. Masterpiece, ultra-realistic facial micro-expressions, fluid continuous motion, no distortion, no text, no watermark.`;

  generatedBatches.push({
    index: idx + 1,
    id: s.id,
    slug: s.slug,
    title: s.title,
    category: s.category,
    evidenceItem,
    locationTag,
    master30sPrompt
  });
});

const outJsonPath = path.join(__dirname, 'data', '30s_video_prompts.json');
fs.writeFileSync(outJsonPath, JSON.stringify(generatedBatches, null, 2), 'utf8');

console.log(`✅ [30s Prompt Engine] Successfully generated ${generatedBatches.length} continuous 30s video prompts in: data/30s_video_prompts.json`);
