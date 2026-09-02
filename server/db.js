const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data');
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const STORIES_FILE = path.join(DATA_DIR, 'stories.json');
const MARKETING_FILE = path.join(DATA_DIR, 'marketing.json');
const ANALYTICS_FILE = path.join(DATA_DIR, 'analytics.json');
const SETTINGS_FILE = path.join(DATA_DIR, 'settings.json');

// Helper to safely read JSON
function readJSON(filePath, defaultData) {
  try {
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify(defaultData, null, 2), 'utf8');
      return defaultData;
    }
    const content = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(content || JSON.stringify(defaultData));
  } catch (err) {
    console.error(`Error reading ${filePath}:`, err.message);
    return defaultData;
  }
}

// Helper to safely write JSON
function writeJSON(filePath, data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  } catch (err) {
    console.error(`Error writing ${filePath}:`, err.message);
  }
}

// Initial Sample Data for rich initial experience
const INITIAL_STORIES = [
  {
    id: "story-1",
    title: "The Discarded Heiress: Billionaire's Secret Vow",
    slug: "the-discarded-heiress-billionaires-secret-vow",
    genre: "Billionaire Romance & Revenge",
    tags: ["Billionaire", "Secret Identity", "Revenge", "Drama"],
    views: 14280,
    readTime: "6 min read",
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    originalVideoName: "ceo_wife_secret_reveal.mp4",
    coverImage: "/images/story1_cover.svg",
    hookSummary: "Thrown out in the pouring rain by her arrogant in-laws, Maya thought her life was over. They had no idea she was the sole heiress of the $90 Billion Vance Empire.",
    paragraphs: [
      "The rain fell in unforgiving sheets across the marble driveway of the Crawford Manor. Maya stood shivering, clutching a single damp suitcase that contained five years of sacrifice.",
      "\"Sign the divorce papers and get out, Maya,\" Julian Crawford sneered, adjusting his bespoke Italian cufflinks. \"You were always just a low-class charity case. Evelyn is returning from Paris, and a Crawford heir deserves a woman with a proper pedigree.\"",
      "Evelyn stood beside him, a venomous smile playing on her crimson lips. She ostentatiously flashed a five-carat diamond ring Julian had bought with Crawford Group funds.",
      "Maya looked up, her piercing emerald eyes completely dry despite the storm. She didn't beg. She didn't scream. She simply signed the document with steady fingers.",
      "\"You think Crawford Group survived the financial collapse three years ago because of your business genius, Julian?\" Maya whispered, her voice cutting through the thunder.",
      "Julian burst out laughing. \"Of course it was me! What would an orphan like you know about high finance? Now get off my property before I call security.\"",
      "Maya turned around without another word and walked toward the iron gates. Just as Julian began to close the double mahogany doors, a convoy of six sleek black Maybachs bearing diplomatic flags screeched to a halt outside the estate.",
      "A dozen bodyguards in crisp black suits stepped out into the rain, opening bulletproof umbrellas. An elderly gentleman with silver hair and an aura of supreme authority stepped forward, instantly dropping to one knee before the soaked woman.",
      "\"Supreme Commander Maya... the Vance Global Conglomerate welcomes our true matriarch back,\" the elder announced with deep reverence.",
      "Julian's smirk froze. His phone began vibrating violently in his pocket. When he pulled it out, his chief financial officer was screaming into the receiver: 'Julian, our $500 million credit line was just terminated! The Vance Empire is liquidating all our assets!'",
      "Maya stepped into the warm leather interior of the lead Maybach. Lowering the tinted window slightly, she met Julian's terrified gaze. 'The games have just begun, Julian.'"
    ],
    scenes: [
      {
        caption: "Julian hands Maya the cruel divorce contract in the stormy night.",
        image: "/images/story1_scene1.svg",
        insertAfterParagraph: 2
      },
      {
        caption: "The mysterious luxury Maybach convoy arrives at the gates.",
        image: "/images/story1_scene2.svg",
        insertAfterParagraph: 7
      }
    ]
  },
  {
    id: "story-2",
    title: "His Hidden Mafia Queen: The Undercover Waitress",
    slug: "his-hidden-mafia-queen-the-undercover-waitress",
    genre: "Mafia & Action Romance",
    tags: ["Mafia", "Undercover", "Alpha Male", "Action"],
    views: 9850,
    readTime: "5 min read",
    createdAt: new Date(Date.now() - 86400000 * 1).toISOString(),
    originalVideoName: "mafia_boss_saves_waitress.mp4",
    coverImage: "/images/story2_cover.svg",
    hookSummary: "When rival mobsters cornered Dante in a quiet downtown diner, he expected a bloody shootout. He never expected the shy waitress pouring his coffee to take them all down in under thirty seconds.",
    paragraphs: [
      "The neon sign outside Diner 54 flickered softly in the 2 AM fog. Dante Rossi, the undisputed kingpin of the Eastern Syndicate, sat nursing a black coffee with a gunshot graze burning against his ribs.",
      "Elena stepped over with the glass pot, her messy bun and oversized apron hiding a silhouette that moved with lethal grace. 'More coffee, sir?' she asked softly.",
      "Before Dante could reply, the diner's glass door shattered into a thousand glittering pieces. Five masked enforcers armed with suppressed submachine guns stormed inside.",
      "\"Rossi! Your empire ends tonight!\" the lead gunman barked, raising his weapon.",
      "Dante reached for his concealed Glock, but he was losing blood fast. That's when Elena moved. In a blur of motion, she hurled the boiling coffee pot directly into the lead shooter's face.",
      "Before the others could react, Elena disarmed the second enforcer with a brutal wrist lock, swept the legs of the third, and fired three double-taps with chilling precision.",
      "Within twelve seconds, all five hitmen lay neutralized on the checkerboard floor. Elena calmly wiped a speck of blood from her cheek and turned back to Dante.",
      "\"You owe me for the broken coffee pot, Dante Rossi,\" she said in flawless Sicilian dialect.",
      "Dante stared in absolute disbelief. 'Who... what are you?'",
      "Elena reached into her apron and tossed a titanium signet ring bearing the crest of the phantom Ghost Syndicate onto his table. 'I'm the person your father hired ten years ago to keep you alive. And now, we have work to do.'"
    ],
    scenes: [
      {
        caption: "Elena neutralizing the ambush in the dimly lit diner.",
        image: "/images/story2_scene1.svg",
        insertAfterParagraph: 5
      }
    ]
  }
];

const INITIAL_MARKETING = [
  {
    id: "mkt-1",
    videoFileName: "ceo_wife_secret_reveal.mp4",
    videoUrl: "/videos/sample_drama_1.mp4",
    storyId: "story-1",
    storySlug: "the-discarded-heiress-billionaires-secret-vow",
    storyTitle: "The Discarded Heiress: Billionaire's Secret Vow",
    processedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    captions: {
      tiktok: "He kicked his 'broke' wife out in the rain... until 6 Maybachs pulled up 😱🔥 #DramaTok #BillionaireRomance #PlotTwist",
      reels: "He thought she was an orphan charity case. He didn't know she owned the entire Vance Empire 🤯 Full uncensored story in bio! 📲",
      shorts: "The most satisfying revenge story you'll watch today! Watch what happens next ⬇️"
    },
    hashtags: ["#BillionaireRomance", "#DramaReels", "#RevengeStory", "#BillionaireWife"],
    pinnedComments: [
      {
        type: "Viral Cliffhanger",
        text: "😱 What happened when Julian saw the Maybach convoy will leave your jaw on the floor! Read the full uncensored episode here 👉 {{STORY_URL}}"
      },
      {
        type: "Emotional Mystery",
        text: "💔 She sacrificed 5 years for him, but her true identity is insane. Don't miss Chapter 2 👉 {{STORY_URL}}"
      },
      {
        type: "Instant CTA",
        text: "🔥 Read Episode 1 & 2 FREE right now before it gets taken down ➡️ {{STORY_URL}}"
      }
    ]
  },
  {
    id: "mkt-2",
    videoFileName: "mafia_boss_saves_waitress.mp4",
    videoUrl: "/videos/sample_drama_2.mp4",
    storyId: "story-2",
    storySlug: "his-hidden-mafia-queen-the-undercover-waitress",
    storyTitle: "His Hidden Mafia Queen: The Undercover Waitress",
    processedAt: new Date(Date.now() - 86400000 * 1).toISOString(),
    captions: {
      tiktok: "They thought she was just a clumsy waitress... watch her reflexes! 😳⚔️ #MafiaRomance #BadassFemale #ActionDrama",
      reels: "Never judge a waitress at 2 AM. She took down 5 hitmen in 12 seconds! Read full story in bio ☕🔫",
      shorts: "The biggest plot twist in mafia drama history! Link in comments 👇"
    },
    hashtags: ["#MafiaRomance", "#BadassHeroine", "#DramaShorts", "#PlotTwist"],
    pinnedComments: [
      {
        type: "Suspense Hook",
        text: "☕ She threw the boiling coffee and took down all 5 mobsters! Read what Dante found out next 👉 {{STORY_URL}}"
      },
      {
        type: "Trope Teaser",
        text: "🔥 He thought she was helpless until she spoke fluent Sicilian. Read the full Chapter 1 👉 {{STORY_URL}}"
      },
      {
        type: "Urgency Hook",
        text: "💥 Full uncensored novel chapter available here ➡️ {{STORY_URL}}"
      }
    ]
  }
];

const INITIAL_ANALYTICS = {
  overview: {
    totalPageviews: 24130,
    uniqueVisitors: 18450,
    usTrafficPercentage: 74.2,
    avgReadTimeSeconds: 215,
    estimatedRevenueUsd: 486.20,
    averageRpmUsd: 20.15,
    adImpressions: 62738,
    adCtr: "3.42%"
  },
  trafficSources: [
    { source: "TikTok Shorts (6 Pages)", visitors: 10850, percentage: 58.8 },
    { source: "Instagram Reels", visitors: 4620, percentage: 25.0 },
    { source: "YouTube Shorts", visitors: 2210, percentage: 12.0 },
    { source: "Direct / Other", visitors: 770, percentage: 4.2 }
  ],
  geoBreakdown: [
    { country: "United States 🇺🇸", visitors: 13690, percentage: 74.2, rpm: "$26.50" },
    { country: "United Kingdom 🇬🇧", visitors: 2030, percentage: 11.0, rpm: "$19.80" },
    { country: "Canada 🇨🇦", visitors: 1475, percentage: 8.0, rpm: "$18.20" },
    { country: "Australia 🇦🇺", visitors: 738, percentage: 4.0, rpm: "$17.40" },
    { country: "Other Countries 🌍", visitors: 517, percentage: 2.8, rpm: "$6.50" }
  ],
  dailyViews: [
    { date: "Day 1", views: 1850, usViews: 1370, revenue: "$36.80" },
    { date: "Day 2", views: 2420, usViews: 1790, revenue: "$48.50" },
    { date: "Day 3", views: 3100, usViews: 2310, revenue: "$62.40" },
    { date: "Day 4", views: 4200, usViews: 3120, revenue: "$84.70" },
    { date: "Day 5", views: 5600, usViews: 4180, revenue: "$112.90" },
    { date: "Day 6", views: 6960, usViews: 5180, revenue: "$140.90" }
  ],
  recentVisitors: [
    { time: "1 min ago", drama: "The Discarded Heiress", country: "United States (California)", device: "iPhone (Safari)", referrer: "TikTok Reel #3" },
    { time: "3 mins ago", drama: "His Hidden Mafia Queen", country: "United States (Texas)", device: "Android (Chrome)", referrer: "Instagram Reel #1" },
    { time: "6 mins ago", drama: "The Discarded Heiress", country: "United States (New York)", device: "iPhone (TikTok In-App)", referrer: "TikTok Reel #5" },
    { time: "9 mins ago", drama: "The Discarded Heiress", country: "United Kingdom (London)", device: "Android", referrer: "YouTube Shorts" }
  ]
};

const INITIAL_SETTINGS = {
  geminiApiKey: process.env.GEMINI_API_KEY || "",
  siteName: "DramaLuxe",
  siteTagline: "Viral Mini-Series & Uncensored Drama Stories",
  domainUrl: "http://localhost:3000",
  adsenseClientId: "ca-pub-XXXXXXXXXXXX",
  enableAdSenseSimulation: true,
  autoProcessFolder: true
};

module.exports = {
  getStories: () => readJSON(STORIES_FILE, INITIAL_STORIES),
  saveStories: (data) => writeJSON(STORIES_FILE, data),
  getMarketingItems: () => readJSON(MARKETING_FILE, INITIAL_MARKETING),
  saveMarketingItems: (data) => writeJSON(MARKETING_FILE, data),
  getAnalytics: () => readJSON(ANALYTICS_FILE, INITIAL_ANALYTICS),
  saveAnalytics: (data) => writeJSON(ANALYTICS_FILE, data),
  getSettings: () => readJSON(SETTINGS_FILE, INITIAL_SETTINGS),
  saveSettings: (data) => writeJSON(SETTINGS_FILE, data)
};
