const fs = require('fs');
const path = require('path');

const STORIES_PATH = path.join(__dirname, 'data', 'stories.json');
const TRACKING_PATH = path.join(__dirname, 'data', 'tracking_links.json');
const DOMAIN = 'https://drama-online.onrender.com';

const newStories = [
  // 1. Reel 16 (16.mp4) - THE GARMENT BAG CONFRONTATION
  {
    id: "story-20260907-u16-garment-bag-stained-gown",
    title: "THE GARMENT BAG: SHE UNZIPPED HER SISTER'S $4,800 GOWN 3 HOURS BEFORE THE CEREMONY",
    slug: "the-garment-bag-stained-gown-chelsea",
    category: "Wedding Betrayals",
    subcategory: "Sister & Bridesmaid Sabotage",
    tags: ["Wedding Sabotage", "Sister Betrayal", "Bridal Drama", "American Drama", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date().toISOString(),
    status: "published",
    partNumber: 1,
    seriesId: "series-garment-bag-chelsea",
    nextPartSlug: "the-heirloom-recipe-bible-grandma-clara",
    nextPartHook: "🔥 Read Next: Grandma Handed The 70-Year-Old Secret Recipe Bible To The Sister Who Never Stepped In The Kitchen!",
    views: 0,
    uniqueVisitors: 0,
    avgReadTimeSeconds: 0,
    trendingScore: 99.9,
    readTime: "11 min read",
    coverImage: "/images/uploads_batch_0907/video_16_frame_3.jpg",
    socialImage: "/images/uploads_batch_0907/video_16_frame_3.jpg",
    hookSummary: "Three hours before walking down the aisle, Chelsea unzipped the bridal garment bag hanging in the hallway. Across the hand-embroidered French silk gown was a massive, dried dark coffee stain—while her maid-of-honor sister Maya stood behind her, casually holding a fresh latte with a smirk.",
    paragraphs: [
      "[ UPSTAIRS HALLWAY, MAGNOLIA GROVE BRIDAL SUITE — 11:15 AM ]",
      "The sunlit corridor of the historic Charleston plantation house was filled with the soft rustle of chiffon, the distant hum of hair dryers, and the sharp, unforgiving screech of a metal zipper being pulled down.",
      "Twenty-eight-year-old Chelsea stood frozen in front of the white garment bag, her tall braided bun trembling as the breath caught painfully in her throat.",
      "Her olive-green silk prep shirt felt suddenly tight across her shoulders, her golden hoop earrings catching the midday glare as her knuckles turned white against the vinyl edge.",
      "There, cascading from the hanger in what should have been flawless ivory perfection, was her custom $4,800 hand-beaded bridal gown.",
      "Only it was no longer ivory.",
      "A jagged, deep amber stain stretched across the delicate bodice, soaking straight through the triple-layered French silk and pooling into the floral embroidery like dried blood.",
      "It was lukewarm espresso.",
      "Standing three feet behind her in the doorway, leaning against the white molding with unhurried nonchalance, was her thirty-one-year-old older sister, Maya.",
      "Maya wore a vibrant lime-yellow crewneck and impeccably smoothed straight hair, casually nursing a steaming cardboard coffee cup in both hands.",
      "'Oh, sweetie,' Maya murmured, her voice dripping with that rehearsed, theatrical sympathy she had perfected since childhood.",
      "'I told the makeup assistant to be careful near the rack, but accidents happen when everyone is rushing under pressure.'",
      "Chelsea didn't flinch. She slowly turned around, her deep brown eyes narrowing into two icy slits of terrifying, silent composure.",
      "For six months, Maya had criticized every single wedding detail—from the venue deposit to Chelsea’s fiancé, Marcus, whom Maya had tried to flirt with at last Thanksgiving’s family brunch.",
      "When Chelsea named Maya as maid of honor despite her mother’s warnings, Maya had insisted on personally picking up the gown from the downtown boutique this morning.",
      "'Accidents happen when people lose control, Maya,' Chelsea said softly, her voice dropping into a razor-sharp, steady whisper that cut right through the hallway chatter.",
      "'But you didn't let anyone near this bag. You kept the boutique key in your handbag and carried it straight into this suite yourself.'",
      "Maya took a deliberate sip of her latte, her glossy lips curving into a subtle, defensive smirk that barely concealed a lifelong jealousy.",
      "'Are you actually accusing your own sister of ruining your wedding day over a cup of spilled roast? Marcus wouldn't appreciate seeing you act this unhinged before vows.'",
      "Chelsea reached into her back pocket, unlocked her phone without breaking eye contact, and pressed play on a muted video clip.",
      "The screen showed the boutique's rear parking lot security feed timestamped 9:42 AM—showing Maya unscrewing a plastic travel lid and pouring steaming espresso directly into the open top collar of the garment bag.",
      "Maya’s face instantly drained of all color, the cardboard cup suddenly trembling in her manicured fingers.",
      "'The owner is Marcus's godmother, Maya,' Chelsea stated with cold, immovable finality. 'You have five minutes to hand over the suite key and walk out to your car before I project this footage onto the reception screen.'"
    ],
    scenes: [
      {
        paragraphIndex: 4,
        imageUrl: "/images/uploads_batch_0907/video_16_frame_3.jpg",
        caption: "Chelsea stares in absolute disbelief at the coffee-soaked ivory bridal gown."
      },
      {
        paragraphIndex: 12,
        imageUrl: "/images/uploads_batch_0907/video_16_frame_4.jpg",
        caption: "Chelsea confronts Maya as the truth about the ruined dress is laid bare."
      }
    ]
  },

  // 2. Reel 18 (18.mp4) - THE HEIRLOOM RECIPE BIBLE
  {
    id: "story-20260907-u18-heirloom-recipe-bible",
    title: "THE HEIRLOOM RECIPE BIBLE: GRANDMA HANDED THE 70-YEAR-OLD SECRET BOOK TO THE SISTER WHO NEVER COOKED",
    slug: "the-heirloom-recipe-bible-grandma-clara",
    category: "Family Inheritance",
    subcategory: "Bakery Legacy & Betrayal",
    tags: ["Heirloom Betrayal", "Grandmother Secrets", "Family Bakery", "American Drama", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date().toISOString(),
    status: "published",
    partNumber: 1,
    seriesId: "series-heirloom-recipe-anaya",
    nextPartSlug: "the-leather-journal-confession-log-tasha",
    nextPartHook: "🔥 Read Next: She Laid Her Sister's Secret Confession Journal On The Dining Table In Front Of The Entire Family!",
    views: 0,
    uniqueVisitors: 0,
    avgReadTimeSeconds: 0,
    trendingScore: 99.8,
    readTime: "11 min read",
    coverImage: "/images/uploads_batch_0907/video_18_frame_1.jpg",
    socialImage: "/images/uploads_batch_0907/video_18_frame_1.jpg",
    hookSummary: "For eight exhausting years, Anaya woke up at 4:00 AM to keep her family's historic Savannah bakery from foreclosure. But during Sunday morning prep, seventy-six-year-old Grandma Clara walked into the kitchen and handed the sacred 1954 leather-bound recipe bible to her glamorous sister Kendra—who hadn't cracked an egg in ten years.",
    paragraphs: [
      "[ SOUTHERN SWEETS BAKERY KITCHEN, SAVANNAH HISTORIC DISTRICT — 06:45 AM ]",
      "The warm, buttery fragrance of slow-rising brioche and roasted pecans filled the humid morning air of the bakery kitchen.",
      "Thirty-year-old Anaya stood behind the butcher-block prep counter in her flour-dusted white linen shirt and mustard-yellow canvas apron, her side-braided hair tucked back as she kneaded fresh bourbon-pecan pie crust.",
      "Her arms ached with the bone-deep exhaustion of eight straight years spent reviving her family's legacy from a $140,000 commercial debt.",
      "Then the swinging wooden doors creaked open.",
      "In walked seventy-six-year-old Grandma Clara, wearing her signature lavender floral house-dress and round tortoiseshell spectacles, her silver curls framed by the warm dawn light.",
      "Beside her stood Kendra, Anaya's twenty-seven-year-old sister, dressed in an expensive champagne silk blouse and manicured almond nails that had never touched bread flour.",
      "Grandma Clara gently placed her weathered hands upon a thick, crumbling leather-bound volume with yellowed parchment edges—the 1954 Southern Sweets Family Formula Bible.",
      "It held four generations of proprietary crust ratios, praline secrets, and the multi-million dollar patented sweet potato glaze.",
      "'Kendra has decided to move back from Atlanta to take over executive operations,' Grandma Clara announced with a warm, serene smile that felt like a slap across Anaya's face.",
      "'A business needs polish and a forward-thinking face to secure bank expansion. I'm passing the legacy book to her hands.'",
      "Kendra cradled the heavy leather ledger against her chest, a smug, triumphant grin spreading across her smooth face.",
      "Anaya froze with her hands still sunk in the wooden mixing bowl.",
      "For eight years, while Kendra partied at rooftop lounges and posted luxury travel reels, Anaya had worked eighty-hour weeks, paid off the city tax liens, and earned the bakery a James Beard nomination.",
      "'You're giving her Mama Ruth's book, Grandma?' Anaya asked, her voice dropping into a low, terrifyingly calm rumble that made the kitchen timers sound like thumping heartbeats.",
      "'She doesn't even know the difference between baking powder and cream of tartar.'",
      "'Anaya, darling, you're the backbone of the kitchen,' Grandma Clara said dismissively, patting Kendra's shoulder. 'You make the dough. Kendra will own the brand. That way we keep everything under one roof.'",
      "Anaya slowly wiped the flour from her hands with a linen towel and untied her yellow apron, setting it squarely on top of the stainless steel counter.",
      "She reached into her canvas tote and produced the original corporate LLC registration documents signed during the 2020 bankruptcy restructuring.",
      "'You didn't read the restructuring papers you had me file four years ago, did you Grandma?' Anaya said softly.",
      "'The trademark, the ovens, and the lease aren't owned by Southern Sweets anymore. They belong to Anaya Vance LLC.'",
      "Grandma Clara’s smile vanished instantly, her silver eyebrows knitting into sudden, trembling alarm.",
      "'You have the recipe book, Kendra,' Anaya said quietly, picking up her car keys. 'Let's see if you can bake eighty pies by noon without me.'"
    ],
    scenes: [
      {
        paragraphIndex: 7,
        imageUrl: "/images/uploads_batch_0907/video_18_frame_1.jpg",
        caption: "Grandma Clara passes the sacred leather-bound recipe bible to Kendra as Anaya watches."
      },
      {
        paragraphIndex: 14,
        imageUrl: "/images/uploads_batch_0907/video_18_frame_3.jpg",
        caption: "Anaya confronts her grandmother and sister with the cold truth of the bakery's ownership."
      }
    ]
  },

  // 3. Reel 19 (19.mp4) - THE LEATHER JOURNAL LOG
  {
    id: "story-20260907-u19-leather-journal-confession",
    title: "THE LEATHER JOURNAL: SHE LAID HER SISTER'S SECRET LOG ON THE DINING TABLE AT SUNDAY DINNER",
    slug: "the-leather-journal-confession-log-tasha",
    category: "Family Secrets",
    subcategory: "Financial Betrayal & Stolen Trusts",
    tags: ["Secret Diary", "Sister Betrayal", "Stolen Inheritance", "American Drama", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date().toISOString(),
    status: "published",
    partNumber: 1,
    seriesId: "series-leather-journal-tasha",
    nextPartSlug: "the-garment-bag-stained-gown-chelsea",
    nextPartHook: "🔥 Read Next: She Unzipped Her Sister's $4,800 Wedding Gown 3 Hours Before The Ceremony!",
    views: 0,
    uniqueVisitors: 0,
    avgReadTimeSeconds: 0,
    trendingScore: 99.7,
    readTime: "11 min read",
    coverImage: "/images/uploads_batch_0907/video_19_frame_1.jpg",
    socialImage: "/images/uploads_batch_0907/video_19_frame_1.jpg",
    hookSummary: "After their mother passed, thirty-two-year-old Tasha noticed $78,000 missing from the family estate account. On Sunday afternoon, she opened an unassuming black journal in the study—only to find her younger sister Courtney's daily handwritten logs detailing every falsified signature and secret wire transfer.",
    paragraphs: [
      "[ FORMAL DINING ROOM, SUBURBAN ATLANTA HOME — 04:30 PM ]",
      "The amber glow of the dining room chandelier fell across the polished mahogany table, reflecting off crystal water glasses and an open hardbound notebook filled with neat, blue cursive handwriting.",
      "Thirty-two-year-old Tasha sat at the head of the table, her golden-tipped twist dreadlocks resting across an olive-green fleece sweatshirt.",
      "Her fingers pressed flat against the lined paper, pinning down dates, dollar amounts, and routing numbers that proved five months of systematic embezzlement.",
      "Across from her sat twenty-five-year-old Courtney, clutching her coral-colored top with trembling hands as silent tears streamed down her cheeks.",
      "For nearly six months following their mother’s sudden illness, Courtney had volunteered to manage hospice payments, pharmacy runs, and household utility bills.",
      "Whenever Tasha asked about estate lawyer fees or property taxes, Courtney had claimed their mother’s medical treatments had drained every liquid dollar down to the last penny.",
      "Then Tasha went to clear out the credenza in the home office.",
      "Tucked behind an old tax binder was this private ledger, titled 'New Horizon Logistics — Private Capital Log.'",
      "On page fourteen, Courtney had meticulously logged every unauthorized withdrawal: $15,000 for her boyfriend’s recording studio equipment, $22,000 for luxury condo down payments, and $41,000 wired to an offshore crypto broker.",
      "'Look at me, Courtney,' Tasha said, her voice dropping into a quiet, restrained tremor that held more fury than screaming ever could.",
      "'While Mom was lying in room 412 receiving end-of-life comfort care, you were sitting in the hospital lobby balancing this journal like a personal venture capitalist.'",
      "Courtney broke down into jagged, breathless sobs, her dark eyes red with panic and shame.",
      "'Tasha, please... Marcus promised we would double the money in sixty days and put it all back before probate opened! I was trying to build something for our future!'",
      "'Our future?' Tasha repeated softly, tapping the embossed bank seal on the page.",
      "'You let Mom's favorite church choir get canceled at her memorial service because you said we couldn't afford the $800 honorarium.'",
      "Courtney reached across the table to grab Tasha's wrist, pleading with desperation.",
      "'If you take this to the probate attorney, they'll charge me with grand larceny! It'll ruin my life!'",
      "Tasha slowly pulled her arm away, closed the black journal with a crisp, final thud, and slid it into her leather briefcase.",
      "'You didn't think about Mom's life, and you didn't think about mine,' Tasha said, standing up from the table.",
      "'The estate hearing is tomorrow at nine. Be in court with your lawyer, or be ready when the sheriff knocks on your door.'"
    ],
    scenes: [
      {
        paragraphIndex: 3,
        imageUrl: "/images/uploads_batch_0907/video_19_frame_1.jpg",
        caption: "Tasha pins down the incriminating handwritten financial entries across the table."
      },
      {
        paragraphIndex: 12,
        imageUrl: "/images/uploads_batch_0907/video_19_frame_4.jpg",
        caption: "Courtney breaks down in tears as the reality of her betrayal is confronted."
      }
    ]
  }
];

// Load existing stories
let stories = [];
if (fs.existsSync(STORIES_PATH)) {
  stories = JSON.parse(fs.readFileSync(STORIES_PATH, 'utf8'));
}

// Remove any prior versions if exist, then prepend
const newIds = new Set(newStories.map(s => s.id));
stories = stories.filter(s => !newIds.has(s.id));
stories.unshift(...newStories);

fs.writeFileSync(STORIES_PATH, JSON.stringify(stories, null, 2), 'utf8');
console.log(`Updated ${STORIES_PATH} with ${newStories.length} new stories! Total now: ${stories.length}`);

// Update tracking links
let trackingLinks = {};
if (fs.existsSync(TRACKING_PATH)) {
  try {
    trackingLinks = JSON.parse(fs.readFileSync(TRACKING_PATH, 'utf8'));
  } catch(e){}
}

newStories.forEach(s => {
  trackingLinks[s.slug] = `${DOMAIN}/story/${s.slug}`;
});
fs.writeFileSync(TRACKING_PATH, JSON.stringify(trackingLinks, null, 2), 'utf8');
console.log('Updated tracking links in data/tracking_links.json');

// Sync to server/db.js
const dbFile = path.join(__dirname, 'server', 'db.js');
if (fs.existsSync(dbFile)) {
  let dbContent = fs.readFileSync(dbFile, 'utf8');
  const startMarker = 'const INITIAL_STORIES = [';
  const endMarker = '];\n\nconst INITIAL_MARKETING = [';
  const startIndex = dbContent.indexOf(startMarker);
  const endIndex = dbContent.indexOf(endMarker);

  if (startIndex !== -1 && endIndex !== -1) {
    const newInitial = `const INITIAL_STORIES = ${JSON.stringify(stories, null, 2)}`;
    dbContent = dbContent.substring(0, startIndex) + newInitial + dbContent.substring(endIndex + 1);
    fs.writeFileSync(dbFile, dbContent, 'utf8');
    console.log('Successfully synced INITIAL_STORIES in server/db.js!');
  }
}
