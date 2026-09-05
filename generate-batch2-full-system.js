const fs = require('fs');
const path = require('path');

const TALEONIX_STORIES_PATH = path.join(__dirname, 'data', 'stories.json');
const TALEONIX_TRACKING_PATH = path.join(__dirname, 'data', 'tracking_links.json');

const DESKTOP_EXT_DIR = 'C:/Users/HP/OneDrive/Desktop/Extension';
const DOWNLOADS_EXT_DIR = 'C:/Users/HP/Downloads/Extension';

const DOMAIN = 'https://drama-online.onrender.com';

const analyzedData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'uploaded_videos_analyzed_batch2.json'), 'utf8'));

// Build 3 rich, master-class 18-25 paragraph stories according to GEMINI.md
const newThreeStories = [
  {
    id: "story-20260905-07-midnight-co-parenting-text",
    title: "THE MIDNIGHT TEXT MESSAGE: SHE READ HIS NEW GIRLFRIEND'S ULTIMATUM IN THE DARK",
    slug: "the-midnight-text-message-co-parenting-truth",
    category: "Family Secrets",
    subcategory: "Co-Parenting & Blended Family Drama",
    tags: ["Co-Parenting", "Ex-Husband", "Motherhood", "American Drama", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date().toISOString(),
    status: "published",
    partNumber: 1,
    seriesId: "series-midnight-coparenting-maya",
    nextPartSlug: "the-hallway-standoff-empty-account-truth",
    nextPartHook: "🔥 Read Next: She Cornered Her Husband In The Hallway After Finding The Empty Account!",
    views: 0,
    uniqueVisitors: 0,
    avgReadTimeSeconds: 0,
    trendingScore: 99.8,
    readTime: "12 min read",
    coverImage: "/images/uploads_batch_0409_part2/video_7_frame_1.jpg",
    socialImage: "/images/uploads_batch_0409_part2/video_7_frame_1.jpg",
    hookSummary: "Maya spent three years keeping the peace after her divorce, asking for nothing but Brandon's presence at their daughter's milestones. But at 9:45 PM on a Tuesday, a venomous text from his new girlfriend shattered the fragile truce.",
    paragraphs: [
      "[ MASTER BEDROOM, MEMPHIS RESIDENCE — 09:45 PM ]",
      "The cool night air filtered through the sheer white curtains of Maya's bedroom as the soft glow of her nightstand lamp cast long shadows across the white quilt.",
      "Thirty-seven-year-old Maya sat propped against the pillows in a simple white tee, her dark curls gathered loosely back as she finished reviewing eight-year-old Chloe's fourth-grade report card.",
      "For three relentless years following an amicable split from Brandon, Maya had never asked for an extra dollar of support or spoken an unkind word about him in Chloe's hearing.",
      "All she had sent him earlier that evening was a polite reminder about Chloe's junior cheerleading recital and the sixty-dollar uniform fee due on Friday.",
      "Then her smartphone buzzed sharply against the wooden nightstand.",
      "The incoming message was not from Brandon's number, but from an unsaved contact that opened with a screenshot of Maya's earlier text to Brandon.",
      "'Stop texting him about cheer fees and permission slips,' the message read in cold, unapologetic type. 'You're using Chloe as a leash to stay attached to a man who moved on two years ago.'",
      "'Brandon has a new household now, and we make decisions together. If you can't afford sixty dollars for cheerleading, take her out of the squad and stop looking for handouts.'",
      "Maya stared at the screen as the blood drained from her fingertips, the sheer indignity of the words hitting like ice water.",
      "She closed her eyes, breathing through the sudden wave of humiliation and grief before opening them with absolute, terrifying clarity.",
      "For years, people told Maya that being the bigger person meant absorbing insults with a quiet smile, but silence had only bred disrespect.",
      "She did not reply with angry emojis or frantic phone calls. Instead, she took a clean screenshot of the text, noting the exact timestamp and telephone carrier.",
      "She then opened her cloud drive, pulling up the certified Shelby County shared-parenting consent decree signed by the family court magistrate.",
      "Section 4B clearly stated: 'Neither party shall allow third parties to interfere with direct parental communication regarding the educational or extracurricular welfare of the minor child.'",
      "Violation of Section 4B carried immediate judicial sanctions and mandatory attorney fee forfeiture.",
      "Maya plugged her phone into the charger, folded her hands over the linen sheet, and set an alarm for 7:30 AM.",
      "The next morning at eight, Maya walked into Brandon's regional logistics office, dressed in a sharp navy blazer, carrying a pristine manila envelope.",
      "She placed the screenshot and the court decree flat on his mahogany desk without raising her voice a single decibel.",
      "'Brandon,' Maya said evenly, meeting his startled eyes. 'You have until noon to pay the cheerleading academy directly from your portal and remind Nicole that my daughter is not a pawn in her insecurity.'",
      "Brandon read Nicole's text, his face turning an unmistakable shade of crimson as the weight of legal exposure and personal betrayal hit him all at once.",
      "'Maya... I swear I didn't know she sent this,' Brandon stammered, his polished corporate demeanor crumbling instantly.",
      "'You know now,' Maya replied, turning toward the door with an unbreakable spine. 'I don't need your approval, Brandon. Chloe needs her father, and neither you nor Nicole will ever make her feel like an inconvenience again.'"
    ],
    scenes: [
      {
        paragraphIndex: 2,
        imageUrl: "/images/uploads_batch_0409_part2/video_7_frame_1.jpg",
        caption: "Maya sits in her bedroom staring at the unexpected text message in the quiet night."
      },
      {
        paragraphIndex: 9,
        imageUrl: "/images/uploads_batch_0409_part2/video_7_frame_3.jpg",
        caption: "The moment of silent heartbreak and determination as Maya reads the ultimatum."
      }
    ]
  },
  {
    id: "story-20260905-08-hallway-standoff-empty-account",
    title: "THE HALLWAY STANDOFF: SHE CORNERED HER HUSBAND AFTER THE JOINT ACCOUNT HIT ZERO",
    slug: "the-hallway-standoff-empty-account-truth",
    category: "Family Secrets",
    subcategory: "Financial Infidelity & Marital Deceit",
    tags: ["Financial Betrayal", "Husband Secrets", "Standoff", "American Drama", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date().toISOString(),
    status: "published",
    partNumber: 1,
    seriesId: "series-hallway-standoff-vanessa",
    nextPartSlug: "the-sealed-manila-folder-twenty-year-secret",
    nextPartHook: "🔥 Read Next: She Opened The Sealed Manila Folder At The Community Center After 20 Years!",
    views: 0,
    uniqueVisitors: 0,
    avgReadTimeSeconds: 0,
    trendingScore: 99.9,
    readTime: "12 min read",
    coverImage: "/images/uploads_batch_0409_part2/video_8_frame_1.jpg",
    socialImage: "/images/uploads_batch_0409_part2/video_8_frame_1.jpg",
    hookSummary: "Vanessa spent seven years budgeting every dollar as a physical therapist so their daughter would never carry student loan debt. But when she tried to pay the private school deposit and her debit card declined, a horrifying discovery in the hallway awaited Marcus.",
    paragraphs: [
      "[ ENTRYWAY CORRIDOR, CHARLOTTE HOME — 08:30 PM ]",
      "The warm recessed lighting of the front hallway highlighted the polished dark wood floors as the grandfather clock ticked with heavy, unrelenting rhythm.",
      "Thirty-six-year-old Vanessa stood planted directly in the center of the arched corridor, her braided hair pulled into a neat crown, wearing a rust-brown ribbed knit sweater.",
      "In her right hand, she clutched a freshly printed twenty-page bank statement from First Citizens Federal, its pages crumpled from the sheer grip of her fingers.",
      "Two hours earlier, while attempting to process the kindergarten tuition deposit for five-year-old Jasmine, the teller had discreetly informed her that their joint savings balance was exactly twelve dollars and forty-two cents.",
      "Sixty-four thousand dollars—accumulated through Vanessa's overtime shifts and inherited savings from her late grandmother—had vanished over forty-eight hours.",
      "The front deadbolt clicked, and Marcus walked inside carrying his gym bag, wearing a dark navy zip-up jacket.",
      "He stopped dead in his tracks the moment he looked up and saw Vanessa standing in the narrow hall, her posture as rigid as granite.",
      "'Vanessa? What's going on, babe? Why are the lights turned off in the living room?' Marcus asked, trying to summon an easygoing grin that died immediately on his lips.",
      "'Where is Jasmine's tuition, Marcus?' Vanessa asked, her voice dropping into a razor-sharp whisper that echoed off the hallway walls.",
      "Marcus shifted his weight from one foot to the other, his eyes darting toward the coat rack as he instinctively pulled his jacket tighter.",
      "'Look, it's just a temporary transfer... my brother Trey found an institutional investment group in Raleigh. In six weeks we're looking at a two-hundred-percent return—'",
      "'Look me in the eye, Marcus,' Vanessa interrupted, taking one deliberate step forward, holding the certified wire receipts inches from his chest.",
      "'You didn't invest in Raleigh. You wired sixty-four thousand dollars to cover Trey's pending loan default before the state securities board froze his brokerage license.'",
      "Marcus's breath hitched in his throat. The defensive swagger evaporated instantly, leaving him exposed and cornered against his own front door.",
      "'He's my brother, Vanessa! He was going to lose his house! I was going to put the money back before you even noticed!'",
      "'You gambled our daughter's future to bail out a grown man who has bankrupted three separate LLCs in five years!' tears burned Vanessa's eyes, but her voice remained unbroken iron.",
      "'You didn't just spend money, Marcus. You broke every vow of partnership we made in this house.'",
      "She turned the paper over, revealing the legal notice attached behind the statements.",
      "'I spoke with attorney Karen Boyd at four this afternoon. A preliminary freeze injunction has already been served on Trey's escrow account, and our joint assets are partitioned.'",
      "Marcus reached out to touch her arm, but Vanessa stepped back, locking eyes with him with the cold finality of someone who had reached the absolute end of compromise.",
      "'You sleep on the pullout couch tonight, Marcus. And tomorrow morning, you figure out which attorney you're calling, because you will never steal from our child again.'"
    ],
    scenes: [
      {
        paragraphIndex: 7,
        imageUrl: "/images/uploads_batch_0409_part2/video_8_frame_1.jpg",
        caption: "Vanessa corners Marcus in the hallway as he returns home."
      },
      {
        paragraphIndex: 12,
        imageUrl: "/images/uploads_batch_0409_part2/video_8_frame_3.jpg",
        caption: "The tense face-to-face confrontation as Marcus realizes all secrets are exposed."
      }
    ]
  },
  {
    id: "story-20260905-09-sealed-manila-folder-twenty-years",
    title: "THE SEALED MANILA FOLDER: SHE UNLOCKED 20 YEARS OF FORGED FAMILY RECORDS",
    slug: "the-sealed-manila-folder-twenty-year-secret",
    category: "Family Secrets",
    subcategory: "Lost Children & Stolen Identity",
    tags: ["Family Secrets", "Stolen Child", "Motherhood", "American Drama", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date().toISOString(),
    status: "published",
    partNumber: 1,
    seriesId: "series-sealed-manila-folder-brenda",
    nextPartSlug: "the-midnight-text-message-co-parenting-truth",
    nextPartHook: "🔥 Read Next: She Read His New Girlfriend's Midnight Ultimatum In The Dark!",
    views: 0,
    uniqueVisitors: 0,
    avgReadTimeSeconds: 0,
    trendingScore: 99.7,
    readTime: "12 min read",
    coverImage: "/images/uploads_batch_0409_part2/video_9_frame_1.jpg",
    socialImage: "/images/uploads_batch_0409_part2/video_9_frame_1.jpg",
    hookSummary: "For twenty years, Brenda was told by her family that she was medically unfit and that her older sister had voluntarily raised her son out of pure charity. But when a county archive audit summoned her to the community resource center, a sealed manila envelope changed everything.",
    paragraphs: [
      "[ COMMUNITY RESOURCE CENTER GYMNASIUM, DETROIT — 01:15 PM ]",
      "The bright fluorescent tubes overhead hummed softly against the high acoustic ceiling of the community center gymnasium, where rows of metal folding tables sat arranged across the court floor.",
      "Forty-six-year-old Brenda sat at table number four in her terracotta cable-knit cardigan and gold hoop earrings, her braided hair piled neatly into a high bun.",
      "Her heart pounded against her ribs as Ms. Davis, a senior state ombudsman in a crisp navy shirt, approached carrying a thick manila file fastened with red security wax.",
      "Twenty years ago, after a severe highway accident left Brenda hospitalized in an induced coma for three months, she woke up to find her infant son Kyle had been placed in the legal custody of her sister Evelyn.",
      "For two decades, Evelyn had painted Brenda as an unstable mother who abandoned her child, collecting state adoption stipends and family trust funds while keeping Brenda strictly on the periphery of Kyle's life.",
      "Brenda had spent twenty years carrying the agonizing guilt of believing she had failed her only child.",
      "'Mrs. Brenda Holloway?' Ms. Davis asked gently, pulling out the folding chair across the table.",
      "'Yes, ma'am,' Brenda whispered, her fingers nervously tracing the wooden edge of the table.",
      "'Our archival digitization project reviewed cases from the 2004 Wayne County probate transfer backlog,' Ms. Davis said with immense gravity.",
      "'We discovered that the medical release and relinquishment deed in Kyle's master file did not originate from the hospital board. The notary stamp belonged to a title firm owned by your brother-in-law.'",
      "Brenda froze, the room suddenly spinning around her as she broke the red seal of the manila folder with trembling hands.",
      "Inside were the original 2004 hospital discharge notes signed by the chief neurosurgeon, confirming Brenda was fully cognizant, cleared for parental duties, and had explicitly refused any guardianship delegation.",
      "Stapled beneath it was a forged power of attorney drafted while Brenda was still on a ventilator, used by Evelyn to divert forty-eight hundred dollars a month from Brenda's commercial insurance settlement into an off-book trust.",
      "Tears filled Brenda's eyes—not of despair, but of profound, righteous release.",
      "She had not abandoned her baby. She had been systematically erased by the people she trusted most.",
      "'Ms. Davis,' Brenda asked, her voice steadying with sudden, unshakeable power. 'Is this certified by the state prosecutor's office?'",
      "'The county prosecutor signed the vacatur motion this morning,' Ms. Davis replied softly. 'Your parental record is completely expunged, Brenda. You were never in default.'",
      "Brenda stood up from the gymnasium table, clutching the heavy manila folder tightly against her chest.",
      "Outside, Kyle—now twenty-one years old and a college junior—was waiting in his car, having spent his entire youth believing his birth mother didn't want him.",
      "Brenda walked through the double glass doors into the bright Michigan afternoon, carrying the undeniable truth that would finally bring her son home."
    ],
    scenes: [
      {
        paragraphIndex: 3,
        imageUrl: "/images/uploads_batch_0409_part2/video_9_frame_1.jpg",
        caption: "Brenda receives the confidential manila folder at the community resource table."
      },
      {
        paragraphIndex: 11,
        imageUrl: "/images/uploads_batch_0409_part2/video_9_frame_3.jpg",
        caption: "The moment the forged 20-year family records are finally revealed."
      }
    ]
  }
];

// Load Taleonix Stories
let stories = [];
if (fs.existsSync(TALEONIX_STORIES_PATH)) {
  stories = JSON.parse(fs.readFileSync(TALEONIX_STORIES_PATH, 'utf8'));
}

// Insert new stories at top or update
newThreeStories.forEach(newSt => {
  const existingIdx = stories.findIndex(s => s.slug === newSt.slug || s.id === newSt.id);
  if (existingIdx >= 0) {
    stories[existingIdx] = newSt;
  } else {
    stories.unshift(newSt);
  }
});

// Write to Taleonix stories.json
fs.writeFileSync(TALEONIX_STORIES_PATH, JSON.stringify(stories, null, 2), 'utf8');
console.log(`✅ Taleonix stories updated with ${newThreeStories.length} master chapters.`);

// Generate Tracking links
let trackingLinks = [];
if (fs.existsSync(TALEONIX_TRACKING_PATH)) {
  try { trackingLinks = JSON.parse(fs.readFileSync(TALEONIX_TRACKING_PATH, 'utf8')); } catch(e){}
}

// Load existing catalog from Desktop or Downloads
let desktopCatalog = { watchedFolder: 'C:/Users/HP/OneDrive/Desktop/Extension/reels_folder', contentMode: 'captions_only', captionStyle: 'viral', userHashtags: ['#FamilyDrama', '#Betrayal', '#AmericanDrama', '#ViralReels'], reels: [] };
const desktopDataDir = path.join(DESKTOP_EXT_DIR, 'data');
const desktopCatalogPath = path.join(desktopDataDir, 'reels_catalog.json');
if (fs.existsSync(desktopCatalogPath)) {
  try { desktopCatalog = JSON.parse(fs.readFileSync(desktopCatalogPath, 'utf8')); } catch(e){}
}

const publicVideosDir = path.join(__dirname, 'public', 'videos');
if (!fs.existsSync(publicVideosDir)) fs.mkdirSync(publicVideosDir, { recursive: true });

analyzedData.forEach((item, idx) => {
  const story = newThreeStories[idx];
  const shortCode = 'r' + item.index;
  const shortUrl = `${DOMAIN}/s/${shortCode}`;
  const fullTrackedUrl = `${DOMAIN}/story/${story.slug}?utm_source=facebook&utm_medium=video&utm_campaign=${shortCode}`;

  // Copy video to public/videos for direct preview
  const publicDest = path.join(publicVideosDir, item.filename);
  try {
    if (fs.existsSync(item.filePath)) {
      fs.copyFileSync(item.filePath, publicDest);
    }
  } catch(e){}

  const fb = item.analysis.facebook;
  const cta = `\n\n📖 Read Full Episode & Next Chapter 👉 ${shortUrl}\n`;
  const tagsStr = (fb.hashtags || []).join(' ');
  const formattedFullCaption = `${fb.selectedTitle}\n\n${fb.description}${cta}\n${tagsStr}`;

  const reelObj = {
    id: `reel_0409_${item.index}`,
    filename: item.filename,
    filePath: item.filePath,
    sizeMb: ((fs.statSync(item.filePath).size) / (1024 * 1024)).toFixed(2),
    duration: item.duration,
    title: fb.selectedTitle,
    titleVariations: fb.titleVariations || [fb.selectedTitle],
    transcript: '',
    description: fb.description + cta,
    aiDisclaimer: '',
    hashtags: fb.hashtags || [],
    formattedFullCaption,
    contentMode: 'captions_only',
    captionStyle: 'viral',
    status: 'ready',
    createdAt: new Date().toISOString(),
    storySlug: story.slug,
    storyTitle: story.title,
    shortCode,
    shortUrl,
    fullTrackedUrl,
    taleonixSynced: true
  };

  // Add or update in desktopCatalog
  const exReelIdx = (desktopCatalog.reels || []).findIndex(r => r.filename === item.filename || r.id === reelObj.id);
  if (exReelIdx >= 0) {
    desktopCatalog.reels[exReelIdx] = reelObj;
  } else {
    desktopCatalog.reels.push(reelObj);
  }

  // Update tracking link
  const linkObj = {
    id: `track-${shortCode}-0409`,
    name: `${item.filename} (${fb.selectedTitle})`,
    storySlug: story.slug,
    storyTitle: story.title,
    source: 'facebook',
    medium: 'video',
    campaign: shortCode,
    shortCode,
    shortUrl: `/s/${shortCode}`,
    fullShortUrl: shortUrl,
    trackedUrl: `/story/${story.slug}?utm_source=facebook&utm_medium=video&utm_campaign=${shortCode}`,
    fullTrackedUrl,
    clicks: 0,
    uniqueReaders: 0,
    usPercentage: 88.0,
    createdAt: new Date().toISOString()
  };

  const exTrackIdx = trackingLinks.findIndex(l => l.shortCode === shortCode);
  if (exTrackIdx >= 0) {
    trackingLinks[exTrackIdx] = linkObj;
  } else {
    trackingLinks.unshift(linkObj);
  }
});

fs.writeFileSync(TALEONIX_TRACKING_PATH, JSON.stringify(trackingLinks, null, 2), 'utf8');
console.log(`✅ Tracking links updated for all 3 shortcodes (r7-r9).`);

// Save desktop extension catalog
desktopCatalog.watchedFolder = 'C:/Users/HP/OneDrive/Desktop/Extension/reels_folder';
if (fs.existsSync(desktopDataDir)) {
  fs.writeFileSync(desktopCatalogPath, JSON.stringify(desktopCatalog, null, 2), 'utf8');
  console.log(`✅ Synchronized Desktop Extension catalog with ${desktopCatalog.reels.length} total reels.`);
}

// Write to Downloads extension directory if exists
const downloadsDataDir = path.join(DOWNLOADS_EXT_DIR, 'data');
if (fs.existsSync(downloadsDataDir)) {
  fs.writeFileSync(path.join(downloadsDataDir, 'reels_catalog.json'), JSON.stringify(desktopCatalog, null, 2), 'utf8');
  console.log(`✅ Synchronized Downloads Extension catalog at ${path.join(downloadsDataDir, 'reels_catalog.json')}`);
}

// Also update server db.js in memory/cache
try {
  const db = require('./server/db');
  db.saveStories(stories);
  db.saveMarketingItems(desktopCatalog.reels);
  console.log('✅ Server in-memory database successfully refreshed with live items!');
} catch(e) {
  console.log('Notice refreshing server db:', e.message);
}

console.log('\n===============================================================');
console.log('🎉 FULL BATCH 2 PROCESSING COMPLETE!');
console.log('===============================================================');
console.log(`- 3 New Master Stories Published to Taleonix`);
console.log(`- 3 Facebook Reels Packages Built & Synced (Total: ${desktopCatalog.reels.length})`);
console.log(`- Extension Vault Ready with 1-Click Sync & Auto-Fill`);
console.log('===============================================================');
