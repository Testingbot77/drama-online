const fs = require('fs');
const path = require('path');

const EXTENSION_CATALOG = 'C:/Users/HP/Downloads/Extension/data/reels_catalog.json';
const EXTENSION_QUEUE = 'C:/Users/HP/Downloads/Extension/data/queue.json';
const TALEONIX_TRACKING = path.join(__dirname, 'data', 'tracking_links.json');
const TALEONIX_STORIES = path.join(__dirname, 'data', 'stories.json');

const stories = JSON.parse(fs.readFileSync(TALEONIX_STORIES, 'utf8'));

const realReelsData = [
  {
    filename: '1.mp4',
    sizeMb: '30.25',
    title: "She Opened Her Mother's Secret Jewelry Box—And Found What Was Stolen 20 Years Ago 💍",
    titleVariations: [
      "She Opened Her Mother's Secret Jewelry Box—And Found What Was Stolen 20 Years Ago 💍",
      "The Moment She Realized The Family Gold Rings Weren't An Inheritance... They Were A Payoff 😱",
      "Look Closely At What's Inside The Wooden Box 👀",
      "When Your Sister Thinks You Forgot Who That Jewelry Belongs To 🔥"
    ],
    description: "She kept that carved wooden box locked in the cedar chest for twenty-two years. But when she finally popped the brass latch under the afternoon light, the three gold bands inside told a completely different story about where the family wealth actually came from.\n\nWould you confront your family or stay silent? Drop your thoughts below 👇",
    hashtags: ["#FamilyDrama", "#HeirloomSecrets", "#FamilyConflict", "#Betrayal", "#Shorts"],
    storySlug: 'the-graduation-envelope-mother-in-green',
    storyTitle: stories[0]?.title || 'The Graduation Envelope (Part 1)'
  },
  {
    filename: '2.mp4',
    sizeMb: '35.32',
    title: "She Walked In Smiling With Snacks—Not Knowing The Whole Family Was Talking About Her 💔",
    titleVariations: [
      "She Walked In Smiling With Snacks—Not Knowing The Whole Family Was Talking About Her 💔",
      "The Living Room Went Dead Silent The Second She Opened The Door... 🤫",
      "When You Think It's A Normal Family Dinner But An Ambush Is Waiting 👀",
      "Her Smile Dropped In 3 Seconds Flat 😱"
    ],
    description: "She spent two hours in the kitchen making snacks for family night, walking through the doorway with a smile on her face. She had no idea every single person in that living room was dividing up her inheritance behind her back.\n\nHave you ever walked into a room and instantly felt the tension? 👇",
    hashtags: ["#FamilyDinner", "#SecretBetrayal", "#FamilyTension", "#AmericanDrama", "#EmotionalMoment"],
    storySlug: 'the-graduation-envelope-chapter-2',
    storyTitle: stories[1]?.title || 'The Graduation Envelope (Part 2)'
  },
  {
    filename: '3.mp4',
    sizeMb: '33.09',
    title: "She Reached Into Her Purse Before Anyone Could Sign The Contract... 📁",
    titleVariations: [
      "She Reached Into Her Purse Before Anyone Could Sign The Contract... 📁",
      "They Thought She Came For Dinner—She Came With The Real Receipts 💼",
      "Watch Her Hand Under The Table... She Knew Exactly What Was Coming 👀",
      "When The Smart Daughter Quietly Brings The Legal Proof 🔥"
    ],
    description: "She sat quietly at the dinner table in her suit while everyone bragged about their new business deal. But her hand never left her leather bag under the table—because she had the original forensic audit right in her folder.\n\nWhat would you do if your family tried to blindside you like this? Drop a comment! 👇",
    hashtags: ["#SmartMove", "#FamilyConfrontation", "#Receipts", "#DramaReels", "#PowerReversal"],
    storySlug: 'the-graduation-envelope-chapter-3',
    storyTitle: stories[2]?.title || 'The Graduation Envelope (Part 3)'
  },
  {
    filename: '4.mp4',
    sizeMb: '35.19',
    title: "She Held Up The Broken Antique Plate And Exposed The 15-Year Lie 💥",
    titleVariations: [
      "She Held Up The Broken Antique Plate And Exposed The 15-Year Lie 💥",
      "'Look Me In The Eye And Tell Me Who Smashed Grandmother's Dish' 😡",
      "It Wasn't Just An Old Ceramic Plate... It Was The Only Thing Left From Her Will 💔",
      "The Whole Table Froze When She Slapped The Broken Pieces Down 😱"
    ],
    description: "It wasn't just about a shattered floral plate. That porcelain dish was the last remaining heirloom passed down from their grandmother before the estate was cleared out. The look on her face when she realized who broke it on purpose says everything.\n\nWas she right to call them out right there at the table? Let's debate below 👇",
    hashtags: ["#BrokenHeirloom", "#FamilyFight", "#FamilySecrets", "#EmotionalDrama", "#Confrontation"],
    storySlug: 'the-graduation-envelope-chapter-4',
    storyTitle: stories[3]?.title || 'The Graduation Envelope (Part 4)'
  },
  {
    filename: '5.mp4',
    sizeMb: '34.55',
    title: "Tasha Packed Her Last Box And Handed The Keys Back To Her Mother 📦",
    titleVariations: [
      "Tasha Packed Her Last Box And Handed The Keys Back To Her Mother 📦",
      "'You Chose Them Over Me... So I'm Leaving Today' 💔",
      "When The Quiet Child Finally Decides She's Done Being The Doormat 🔥",
      "She Labelled Every Single Box And Walked Out The Front Door 🚶‍♀️"
    ],
    description: "Years of carrying the family bills and listening to false promises ended right in that hallway. With all her belongings packed into cardboard boxes labeled 'Tasha', she gave her final speech without shedding a single tear.\n\nHave you ever had to walk away from toxic family dynamics? Share your story below 👇",
    hashtags: ["#MovingOut", "#BreakingFree", "#FamilyDrama", "#EmotionalRelease", "#LifeLesson"],
    storySlug: 'the-graduation-envelope-chapter-5',
    storyTitle: stories[4]?.title || 'The Graduation Envelope (Part 5)'
  },
  {
    filename: '6.mp4',
    sizeMb: '35.31',
    title: "She Slapped The Signed Official Documents On The Counter In Front Of Him 📄",
    titleVariations: [
      "She Slapped The Signed Official Documents On The Counter In Front Of Him 📄",
      "'Explain Why Your Name Is On This Property Deed, Son' ⚖️",
      "The Moment A Mother Finds Out Her Son Forged Her Signature 😱",
      "He Looked Down At The Paper And Couldn't Say A Single Word 🔥"
    ],
    description: "She walked into the county records office thinking it was a routine inquiry. But when the clerk handed her this document, she discovered her own son had filed a secret transfer deed six months ago behind her back.\n\nHow would you handle a betrayal from your own child? Drop your honest thoughts 👇",
    hashtags: ["#MotherAndSon", "#LegalDrama", "#Betrayal", "#FamilySecrets", "#ForgedPapers"],
    storySlug: 'the-graduation-envelope-chapter-6',
    storyTitle: stories[5]?.title || 'The Graduation Envelope (Part 6)'
  }
];

// 1. Build Extension Reels Catalog
const domain = 'https://drama-online.onrender.com';
const catalogReels = [];
let trackingLinks = [];
if (fs.existsSync(TALEONIX_TRACKING)) {
  try { trackingLinks = JSON.parse(fs.readFileSync(TALEONIX_TRACKING, 'utf8')); } catch(e){}
}

realReelsData.forEach((item, idx) => {
  const shortCode = 'r' + (idx + 1);
  const shortUrl = `${domain}/s/${shortCode}`;
  const fullTrackedUrl = `${domain}/story/${item.storySlug}?utm_source=facebook&utm_medium=video&utm_campaign=${shortCode}`;
  
  const cta = `\n\n📖 Read Full Episode & Next Chapter 👉 ${shortUrl}\n`;
  const tagsStr = item.hashtags.join(' ');
  const formattedCaption = `${item.title}\n\n${item.description}${cta}\n${tagsStr}`;

  catalogReels.push({
    id: `reel_custom_${Date.now()}_${idx+1}`,
    filename: item.filename,
    filePath: `C:\\Users\\HP\\Downloads\\Extension\\reels_folder\\${item.filename}`,
    sizeMb: item.sizeMb,
    title: item.title,
    titleVariations: item.titleVariations,
    transcript: "",
    description: item.description + cta,
    aiDisclaimer: "",
    hashtags: item.hashtags,
    formattedFullCaption: formattedCaption,
    contentMode: "captions_only",
    captionStyle: "viral",
    status: "ready",
    createdAt: new Date().toISOString(),
    storySlug: item.storySlug,
    storyTitle: item.storyTitle,
    shortCode: shortCode,
    shortUrl: shortUrl,
    fullTrackedUrl: fullTrackedUrl,
    taleonixSynced: true
  });

  // Add / update Taleonix tracking link
  const linkObj = {
    id: `track-${shortCode}-${Date.now()}`,
    name: `${item.filename} (${item.title})`,
    storySlug: item.storySlug,
    storyTitle: item.storyTitle,
    source: 'facebook',
    medium: 'video',
    campaign: shortCode,
    shortCode: shortCode,
    shortUrl: `/s/${shortCode}`,
    fullShortUrl: shortUrl,
    trackedUrl: `/story/${item.storySlug}?utm_source=facebook&utm_medium=video&utm_campaign=${shortCode}`,
    fullTrackedUrl: fullTrackedUrl,
    clicks: 0,
    uniqueReaders: 0,
    usPercentage: 85.0,
    createdAt: new Date().toISOString()
  };

  const existingIdx = trackingLinks.findIndex(l => l.shortCode === shortCode);
  if (existingIdx >= 0) {
    trackingLinks[existingIdx] = linkObj;
  } else {
    trackingLinks.unshift(linkObj);
  }
});

// Save updated catalog
const catalogPayload = {
  watchedFolder: "C:/Users/HP/Downloads/Extension/reels_folder",
  contentMode: "captions_only",
  captionStyle: "viral",
  userHashtags: ["#FamilyDrama", "#Betrayal", "#AmericanDrama", "#ViralReels"],
  reels: catalogReels
};

fs.writeFileSync(EXTENSION_CATALOG, JSON.stringify(catalogPayload, null, 2), 'utf8');
fs.writeFileSync(TALEONIX_TRACKING, JSON.stringify(trackingLinks, null, 2), 'utf8');

console.log('✅ Successfully populated 6 highly-specific, customized viral reel packages into reels_catalog.json and tracking_links.json!');
