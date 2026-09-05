const fs = require('fs');

const code = `const { GoogleGenerativeAI } = require('@google/generative-ai');
const queueService = require('./queueService');
const { GEMINI_API_KEY } = require('../config');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AiService {
  getApiKey() {
    const settings = queueService.getSettings();
    return settings.geminiApiKey || GEMINI_API_KEY || process.env.GEMINI_API_KEY || '';
  }

  getMimeType(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    switch (ext) {
      case '.mp4': return 'video/mp4';
      case '.mov': return 'video/quicktime';
      case '.mkv': return 'video/x-matroska';
      case '.webm': return 'video/webm';
      case '.avi': return 'video/x-msvideo';
      default: return 'video/mp4';
    }
  }

  async generateContent({
    videoPath,
    filename,
    contentMode = 'captions_only',
    captionStyle = 'viral',
    userHashtags = ['#reels', '#viral', '#trending'],
    hashtagMode = 'ai_only',
    includeDisclaimer = null,
    customPrompt = '',
    onLog = console.log
  }) {
    const cleanFilename = filename
      ? filename.replace(/\\.[^/.]+$/, '').replace(/[-_]/g, ' ')
      : 'Video';

    const apiKey = this.getApiKey();

    const styleInstructions = {
      viral: 'High-energy curiosity hooks, cliffhangers, and suspenseful phrasing that stops viewers from scrolling.',
      storytelling: 'Deep emotional narrative arc, relatable human conflict, drama, and emotional storytelling.',
      educational: 'Clear step-by-step takeaways, structured bullet points, how-to value, and practical lessons.',
      minimalist: 'Ultra-short 1-2 lines, clean, punchy, high-impact aesthetic spacing without clutter.',
      debate: 'Provocative open questions, polls, and debate triggers asking "What would you do? Agree or disagree?".',
      professional: 'Polished brand voice, authoritative tone, professional insight, and clear call-to-action.'
    };

    const chosenStyleDescription = styleInstructions[captionStyle] || styleInstructions.viral;
    const includeSubtitles = contentMode === 'caption_subtitle' || contentMode === 'full_pack';
    const shouldIncludeDisclaimer = includeDisclaimer !== null
      ? Boolean(includeDisclaimer)
      : (contentMode === 'caption_disclaimer' || contentMode === 'full_pack');

    if (apiKey) {
      try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const modelNames = ['gemini-3.6-flash'];
        let contentParts = [];

        if (videoPath && fs.existsSync(videoPath) && fs.statSync(videoPath).size > 1024) {
          try {
            const tempDir = path.join(path.dirname(videoPath), '.temp_frames');
            if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

            onLog('[Gemini Vision] Extracting visual frames for scene analysis...');
            const timestamps = ['00:00:02.000', '00:00:10.000', '00:00:20.000'];
            timestamps.forEach((ts, idx) => {
              const framePath = path.join(tempDir, 'frame_' + idx + '.jpg');
              try {
                execSync('ffmpeg -y -ss ' + ts + ' -i "' + videoPath + '" -vframes 1 -q:v 2 "' + framePath + '"', { stdio: 'ignore', timeout: 3000 });
                if (fs.existsSync(framePath) && fs.statSync(framePath).size > 100) {
                  const base64Data = fs.readFileSync(framePath).toString('base64');
                  contentParts.push({
                    inlineData: {
                      mimeType: 'image/jpeg',
                      data: base64Data
                    }
                  });
                  fs.unlinkSync(framePath);
                }
              } catch (e) {}
            });
            if (fs.existsSync(tempDir)) {
              try { fs.rmdirSync(tempDir); } catch(e){}
            }
          } catch (frameErr) {
            onLog('[Frame Notice] ' + frameErr.message);
          }
        }

        const promptText = \`You are a world-class Facebook Reels strategist and copywriter.

TASK:
Analyze these visual frames from the video "\` + cleanFilename + \`".

CONFIGURATION:
- Caption Tone & Style: \` + captionStyle.toUpperCase() + \` - \` + chosenStyleDescription + \`
- Content Mode: \` + contentMode.toUpperCase() + \`
- Include Spoken Subtitles/Transcript: \` + (includeSubtitles ? 'YES' : 'NO') + \`
- Include AI Disclaimer: \` + (shouldIncludeDisclaimer ? 'YES' : 'NO') + \`
\` + (customPrompt ? '- Creator Note: ' + customPrompt : '') + \`

Generate JSON response:
{
  "selectedTitle": "The single best title/hook for this video matching the \` + captionStyle + \` style",
  "titles": [
    "Hook Option 1 (\` + captionStyle + \` style)",
    "Hook Option 2 (Alternative emotional angle)",
    "Hook Option 3 (Question / Debate angle)",
    "Hook Option 4 (Surprise / Reveal angle)"
  ],
  "transcript": "",
  "description": "Rich, engaging post caption written in \` + captionStyle + \` style, tailored specifically to this video's visual content. End with an engaging question/CTA.",
  "hashtags": [
    "#specificTopicTag1",
    "#specificTopicTag2",
    "#specificTopicTag3"
  ],
  "disclaimer": ""
}

CRITICAL RULES:
- Generate 3 to 5 SPECIFIC, RELEVANT hashtags directly related to what you see in the images.
- Description must accurately describe the scenes shown in the images with high emotional engagement.
- Output ONLY valid raw JSON without markdown wrapping.\`;

        contentParts.push(promptText);

        let result = null;
        let lastError = null;

        for (const m of modelNames) {
          try {
            onLog('[Gemini] Generating with model: ' + m + '...');
            const model = genAI.getGenerativeModel({ model: m });
            
            const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Gemini API timeout')), 8000));
            result = await Promise.race([
              model.generateContent(contentParts),
              timeoutPromise
            ]);

            if (result && result.response) {
              onLog('[Gemini] Success with model: ' + m + '!', 'success');
              break;
            }
          } catch (modelErr) {
            lastError = modelErr;
            onLog('[Gemini Notice] Model ' + m + ' error: ' + modelErr.message + '. Trying fallback...', 'warning');
          }
        }

        if (result && result.response) {
          const text = result.response.text().trim();
          const cleanedText = text
            .replace(/^\`\`\`json\\s*/i, '')
            .replace(/^\`\`\`\\s*/i, '')
            .replace(/\\s*\`\`\`$/, '')
            .trim();

          const parsed = JSON.parse(cleanedText);

          const aiTags = Array.isArray(parsed.hashtags) && parsed.hashtags.length > 0
            ? parsed.hashtags.map(t => t.startsWith('#') ? t : '#' + t)
            : ['#reels', '#viral', '#trending'];

          let finalHashtags = [];
          if (hashtagMode === 'ai_only') {
            finalHashtags = aiTags.slice(0, 4);
          } else if (hashtagMode === 'fixed_only') {
            finalHashtags = (userHashtags || ['#reels', '#viral', '#trending']).slice(0, 4);
          } else if (hashtagMode === 'both') {
            const combined = Array.from(new Set([...aiTags, ...(userHashtags || [])]));
            finalHashtags = combined.slice(0, 6);
          } else if (hashtagMode === 'none') {
            finalHashtags = [];
          } else {
            finalHashtags = aiTags.slice(0, 4);
          }

          const finalDisclaimer = shouldIncludeDisclaimer ? (parsed.disclaimer || 'AI Disclosure: This video contains AI-assisted/generated elements & creative editing (#MadeWithAI).') : '';

          const tagsStr = finalHashtags.join(' ');
          let formattedFullCaption = (parsed.selectedTitle || cleanFilename) + '\\n\\n' + (parsed.description || '');
          if (tagsStr) {
            formattedFullCaption += '\\n\\n' + tagsStr;
          }

          if (finalDisclaimer) {
            formattedFullCaption += '\\n\\n' + finalDisclaimer;
          }

          return {
            titles: parsed.titles || [cleanFilename],
            selectedTitle: parsed.selectedTitle || parsed.titles?.[0] || cleanFilename,
            transcript: parsed.transcript || '',
            description: parsed.description || 'Watch till the end! Drop your thoughts below',
            hashtags: finalHashtags,
            disclaimer: finalDisclaimer,
            formattedFullCaption: formattedFullCaption.trim()
          };
        }

      } catch (err) {
        onLog('[AI Notice] Gemini analysis error: ' + err.message + '. Falling back to smart template.', 'warning');
      }
    } else {
      onLog('[AI Notice] No Gemini API Key configured in Settings. Using local smart generator.', 'info');
    }

    return this.generateTemplateFallback(cleanFilename, contentMode, captionStyle, userHashtags, hashtagMode, shouldIncludeDisclaimer);
  }

  generateTemplateFallback(
    titleBase,
    contentMode = 'captions_only',
    captionStyle = 'viral',
    userHashtags = ['#reels', '#viral', '#trending'],
    hashtagMode = 'ai_only',
    shouldIncludeDisclaimer = false
  ) {
    const hooks = [
      'Wait For The Ending! (' + titleBase + ')',
      "You Won't Believe What Happened Here!",
      'This Changed Everything I Knew!',
      'Watch What Happens Next!'
    ];
    const selectedTitle = hooks[0];
    const topicTag = ('#' + titleBase.toLowerCase().replace(/[^a-z0-9]/g, '')).slice(0, 20);
    const aiTags = topicTag.length > 3 ? [topicTag, '#trending', '#reels'] : ['#reels', '#viral', '#trending'];
    const finalHashtags = aiTags.slice(0, 3);
    const tagsStr = finalHashtags.join(' ');
    const description = 'Check out this incredible video! What do you think about this? Drop your thoughts below!';

    return {
      titles: hooks,
      selectedTitle,
      transcript: '',
      description,
      hashtags: finalHashtags,
      disclaimer: '',
      formattedFullCaption: (selectedTitle + '\\n\\n' + description + '\\n\\n' + tagsStr).trim()
    };
  }
}

module.exports = new AiService();
`;

fs.writeFileSync('C:/Users/HP/Downloads/Extension/server/services/aiService.js', code, 'utf8');
console.log('Successfully written aiService.js with timeout safeguard!');
