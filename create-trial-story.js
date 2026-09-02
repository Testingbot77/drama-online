const db = require('./server/db');
const { generateSceneSVG } = require('./server/geminiEngine');
const fs = require('fs');
const path = require('path');

const storyTitle = "The Shadow Billionaire Divorce: When She Walked Away with Half the City";
const slug = "the-shadow-billionaire-divorce-when-she-walked-away-with-half-the-city";
const genre = "Billionaire Betrayal & High Revenge";

const imgDir = path.join(__dirname, 'public', 'images');
const coverName = `${slug}-cover.svg`;
const scene1Name = `${slug}-scene1.svg`;
const scene2Name = `${slug}-scene2.svg`;

fs.writeFileSync(path.join(imgDir, coverName), generateSceneSVG("The Shadow Billionaire Divorce", "When She Walked Away with Half the City", "cover", "gold"), 'utf8');
fs.writeFileSync(path.join(imgDir, scene1Name), generateSceneSVG("The Cruel Confrontation", "Damian hands Victoria the separation contract", "scene", "crimson"), 'utf8');
fs.writeFileSync(path.join(imgDir, scene2Name), generateSceneSVG("The Wall Street Takeover", "Victoria acquires Damian Enterprise at the auction", "scene", "cyan"), 'utf8');

const newStory = {
  id: "story-trial-" + Date.now(),
  title: storyTitle,
  slug: slug,
  genre: genre,
  tags: ["Billionaire", "Divorce", "Revenge", "SecretIdentity"],
  views: 18920,
  readTime: "7 min read",
  createdAt: new Date().toISOString(),
  originalVideoName: "billionaire_silent_divorce_climax.mp4",
  coverImage: "/images/" + coverName,
  hookSummary: "For three years, Damian treated Victoria like a quiet, worthless trophy wife while flaunting his new supermodel mistress. The moment he signed the divorce papers, he discovered Victoria was the chairperson of the private equity giant holding 90% of his company debt.",
  paragraphs: [
    "The cold wind blew through the floor-to-ceiling windows of the 80th-floor penthouse in Manhattan. Damian Sterling tossed a black fountain pen onto the glass desk, looking down at his wife of three years with pure condescension.",
    "\"Sign it, Victoria,\" Damian ordered, his voice cold and emotionless. \"Chloe is expecting my child, and she belongs to high society. You've been nothing more than a quiet ghost in this penthouse. Be grateful I'm giving you a five-million-dollar settlement.\"",
    "Standing behind him in an haute couture red gown, Chloe smiled victoriously, resting a manicured hand on Damian's shoulder. \"Accept reality, Victoria. Some women are born for the kitchen, and others are born for the throne.\"",
    "Victoria didn't flinch. She sat in the velvet armchair, dressed in a simple cashmere sweater. Her posture was relaxed, her deep hazel eyes completely untroubled.",
    "Without saying a single word of protest, Victoria picked up the pen and signed her maiden name across the bottom line with absolute precision.",
    "Damian smirked, believing he had finally gotten rid of his dead weight. \"You have two hours to pack your things and vacate the premises.\"",
    "Victoria stood up, smoothed down her sweater, and pulled a sleek matte-black titanium phone from her handbag. She dialed a single direct line.",
    "\"Execute Option Delta,\" Victoria spoke calmly into the receiver. \"Liquidate Sterling Holdings' short positions and call in the 1.2 billion dollar bond debt immediately.\"",
    "Damian burst into arrogant laughter. \"Option Delta? Who do you think you're pretending to be? The CEO of Citadel?\"",
    "Before the sentence could leave his mouth, Damian's gold watch began vibrating hysterically. His CFO burst through the double mahogany penthouse doors, gasping for air, clutching a stack of emergency liquidation notices.",
    "\"Damian! We're ruined!\" the CFO screamed in pure panic. \"Ares Private Equity just called in our entire senior debt facility! We're being liquidated in twelve minutes!\"",
    "Damian's face drained of all color. His gaze slowly moved from the trembling CFO back to Victoria, who was now being greeted at the door by four secret service bodyguards bowing at a ninety-degree angle.",
    "\"You always wondered who the anonymous founder of Ares Equity was, Damian,\" Victoria whispered as she walked past him toward the private elevator. \"Thank you for signing the divorce. You just lost half the city.\""
  ],
  scenes: [
    { caption: "Damian and Chloe demanding Victoria sign the five-million-dollar divorce.", insertAfterParagraph: 2, image: "/images/" + scene1Name },
    { caption: "Victoria activates Ares Private Equity as Damian's empire collapses in minutes.", insertAfterParagraph: 9, image: "/images/" + scene2Name }
  ]
};

const newMarketing = {
  id: "mkt-trial-" + Date.now(),
  videoFileName: "billionaire_silent_divorce_climax.mp4",
  videoUrl: "/videos/sample_drama_1.mp4",
  storyId: newStory.id,
  storySlug: slug,
  storyTitle: storyTitle,
  processedAt: new Date().toISOString(),
  captions: {
    tiktok: "He divorced his quiet wife for a supermodel... 12 minutes later his $1.2B empire was liquidated 😱🔥 #BillionaireRevenge #DramaTok #PlotTwist",
    reels: "He offered her $5M to leave. He didn't know she owns the fund controlling his entire company! Read what happened next in bio 📲",
    shorts: "The most satisfying billionaire revenge ending! Watch what happens next ⬇️",
    facebook: "He threw her out, but she owned half the city!"
  },
  hashtags: ["#BillionaireRevenge", "#DramaShorts", "#PlotTwist", "#RevengeDrama"],
  pinnedComments: [
    {
      type: "Shock Cliffhanger Hook",
      text: "😱 When the CFO burst in screaming that Ares Equity liquidated everything... Read the full uncensored episode here 👉 {{STORY_URL}}"
    },
    {
      type: "Boss Energy Hook",
      text: "👑 He thought she was helpless until she called Option Delta! Read Chapter 1 & 2 FREE right now 👉 {{STORY_URL}}"
    },
    {
      type: "Direct CTA Urgency",
      text: "🔥 Full uncensored story live on DramaLuxe free today ➡️ {{STORY_URL}}"
    }
  ]
};

const stories = db.getStories();
stories.unshift(newStory);
db.saveStories(stories);

const marketing = db.getMarketingItems();
marketing.unshift(newMarketing);
db.saveMarketingItems(marketing);

console.log("Trial Story and Marketing Kit successfully inserted!");
