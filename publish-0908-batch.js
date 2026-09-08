const fs = require("fs");
const path = require("path");

const STORIES_PATH = path.join(__dirname, "data", "stories.json");
const TRACKING_PATH = path.join(__dirname, "data", "tracking_links.json");
const DOMAIN = "https://drama-online.onrender.com";

const newStories = [
  // 1. Top Story 1 (Video 1) - THE EMPTY DUFFEL BAG ON THE PORCH
  {
    id: "story-20260908-v1-empty-duffel-porch",
    title: "THE EMPTY DUFFEL: HER EX-HUSBAND BROUGHT HIS NEW FIANCÉE TO CLAIM CUSTODY, BUT SHE UNZIPPED THE BAG ON THE FRONT PORCH",
    slug: "the-empty-duffel-bag-custody-porch-showdown",
    category: "Custody Battles & Motherhood",
    subcategory: "Parental Betrayal & Family Boundaries",
    tags: ["Custody Battle", "Motherhood", "Betrayal", "American Drama", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date().toISOString(),
    status: "published",
    partNumber: 1,
    seriesId: "series-duffel-bag-kendra",
    nextPartSlug: "the-secret-envelope-on-the-comforter",
    nextPartHook: "👉 Read Next: She Found The Unopened Manilla Envelope Left On Her Son's Bed Before Sunrise!",
    views: 0,
    uniqueVisitors: 0,
    avgReadTimeSeconds: 0,
    trendingScore: 99.9,
    readTime: "12 min read",
    coverImage: "/images/uploads_batch_0908/v1_frame2.jpg",
    socialImage: "/images/uploads_batch_0908/v1_frame2.jpg",
    hookSummary: "When Marcus arrived on Kendra's doorstep with his twenty-five-year-old fiancée demanding to take six-year-old Cameron for the entire summer, Kendra calmly unzipped a heavy canvas duffel bag right in front of them. What lay inside wasn't clothes—it was four years of unopened child support checks Marcus claimed he never had the money to pay.",
    paragraphs: [
      "[ FRONT PORCH, SUBURBAN ATLANTA — 06:15 PM ]",
      "The humid Georgia evening air was thick with the scent of freshly cut grass, but on Kendra's front porch, the atmosphere had turned cold enough to crack glass.",
      "Thirty-five-year-old Kendra stood squarely in the threshold of her two-story craftsman home, wearing her rose-knit cardigan over a fitted taupe shirt, her braided hair pulled into a neat, severe knot at the nape of her neck.",
      "Directly in front of her stood Marcus, her ex-husband of four years, clad in an immaculate black fitted t-shirt, standing with the arrogant posture of a man who believed money and charm could rewrite history.",
      "Hovering just half a step behind Marcus was his twenty-five-year-old fiancée, Bianca, dressed in an ivory trench coat, arms crossed with an entitled smirk playing on her lips.",
      "Between them stood six-year-old Cameron, clutching the hem of Kendra's cardigan in his grey-and-blue hoodie, his wide brown eyes darting anxiously between his parents.",
      "'We’re taking Cameron now, Kendra,' Marcus said, his voice smooth, calculated, and loud enough for the neighbors across the cul-de-sac to hear. 'We booked the villa in Hilton Head for six weeks. Bianca already bought him a whole designer summer wardrobe. Let him go get his suitcase.'",
      "Bianca chimed in, tossing her highlighted hair over her shoulder. 'Yeah Kendra, don't make this ugly for the boy. Marcus has court rights too, even if you like playing the martyr.'",
      "Kendra didn't blink. She didn't shout, she didn't curse, and she didn't lose her composure.",
      "Instead, she reached down beside the doorway and lifted a heavy, beige-and-brown canvas travel duffel bag with both hands.",
      "With slow, deliberate precision, Kendra pulled the bronze zipper completely open, spreading the mouth of the bag wide under the amber porch light.",
      "'You want to talk about court rights, Marcus?' Kendra's voice was low, measured, and razor-sharp. 'You told Judge Holloway you couldn't afford four hundred dollars a month because your consulting business went bankrupt.'",
      "Marcus’s confident expression faltered slightly as he glanced down into the gaping opening of the duffel bag.",
      "Inside the bag lay ninety-six certified bank statements, dozens of returned registered mail receipts, and Marcus’s own signed financial affidavits alongside glossy printouts from Bianca’s Instagram showing luxury European vacations and a ninety-thousand-dollar sportscar.",
      "'You haven't spent four hours with your son in twelve months,' Kendra continued, staring straight into Marcus's widening eyes. 'You didn't come to his kindergarten graduation, you missed his asthma treatment appointments, and you haven't bought a single pair of sneakers.'",
      "Bianca took a startled step back, whispering urgently to Marcus. 'Marcus... what is all that? You said she was the one refusing visitation!'",
      "Marcus turned red, his hands trembling as he reached toward Cameron. 'Kendra, stop this theatrical nonsense right now!'",
      "'Don't you reach for him,' Kendra said, stepping forward with the weight of four years of single motherhood behind her words. 'You brought your new fiancée here to look like Father of the Year. But tomorrow morning at nine, my attorney is filing for emergency full custody and criminal non-support.'",
      "Cameron looked up at his father and softly said, 'Daddy, why did you tell the lady I didn't need you?'",
      "Marcus stood frozen on the concrete walkway, completely stripped of his rehearsed defense, as Kendra took Cameron's hand and stepped back inside.",
      "Before closing the solid oak door, Kendra looked Marcus dead in the eyes and whispered: 'Enjoy Hilton Head, Marcus. Because your freedom ends on Monday.'"
    ],
    scenes: [
      {
        paragraphIndex: 10,
        imageUrl: "/images/uploads_batch_0908/v1_frame2.jpg",
        caption: "Kendra unzips the heavy duffel bag on the front porch as Marcus and Bianca realize their bluff has failed."
      },
      {
        paragraphIndex: 17,
        imageUrl: "/images/uploads_batch_0908/v1_frame3.jpg",
        caption: "Kendra delivers her final ultimatum while Cameron watches his father's arrogant facade shatter."
      }
    ]
  },

  // 2. Top Story 2 (Video 2) - THE UNOPENED ENVELOPE ON THE COMFORTER
  {
    id: "story-20260908-v2-envelope-bed-secret",
    title: "THE UNOPENED ENVELOPE: HER MOTHER-IN-LAW LEFT A SEALED LETTER ON HER 5-YEAR-OLD'S BED, BUT SHE READ IT BEFORE SUNRISE",
    slug: "the-secret-envelope-on-the-comforter",
    category: "Family Secrets & In-Law Betrayal",
    subcategory: "Hidden DNA & Domestic Conspiracy",
    tags: ["In-Law Drama", "Secret Letter", "Motherhood", "American Drama", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date().toISOString(),
    status: "published",
    partNumber: 1,
    seriesId: "series-secret-envelope-lori",
    nextPartSlug: "the-empty-duffel-bag-custody-porch-showdown",
    nextPartHook: "👉 Read Next: She Confronted Her Ex On The Front Porch With The Duffel Bag He Never Expected Her To Open!",
    views: 0,
    uniqueVisitors: 0,
    avgReadTimeSeconds: 0,
    trendingScore: 99.8,
    readTime: "11 min read",
    coverImage: "/images/uploads_batch_0908/v2_frame2.jpg",
    socialImage: "/images/uploads_batch_0908/v2_frame2.jpg",
    hookSummary: "While tucking in her five-year-old son Aiden, thirty-two-year-old Lori spotted an unsealed white heavy-stock envelope resting squarely in the center of the bedspread. Written on the front in her mother-in-law's familiar cursive was: 'For Malcolm Only — Read Before The Adoption Hearing.'",
    paragraphs: [
      "[ MASTER BEDROOM, OAKLAND HILLS — 08:30 PM ]",
      "The warm golden glow from the bedside lamp cast long shadows across the ivory linen duvet, highlighting a crisp, heavy-stock white envelope resting directly in the center of the mattress.",
      "Thirty-two-year-old Lori stood beside the oak chest of drawers in her mauve cardigan and dark denim, her hair styled in high micro-braids as her five-year-old son Aiden leaned against her hip in his bright red fleece hoodie.",
      "Lori's fingers rested flat against the envelope, her pulse thumping rhythmically in her throat.",
      "Standing in the bedroom doorway was her sister-in-law, Tiffany, dressed in a bright fuchsia sweater, her eyes wide with nervous guilt as she tried to block the hallway.",
      "'Lori, please... just don't open that,' Tiffany stammered, wringing her hands. 'My mother said that letter is private. It’s between her and Malcolm.'",
      "Lori didn't move her hand. Her gaze shifted from the neat cursive handwriting on the front of the envelope to Tiffany's anxious face.",
      "The envelope was addressed in elegant black ink: 'To My Son Malcolm — The Truth You Must Know Before Signing The Final Papers.'",
      "For three years, Lori and her husband Malcolm had been fighting through California's complex legal bureaucracy to formalize Malcolm's legal adoption of Aiden, whom Malcolm had raised since infancy.",
      "The final court confirmation hearing was scheduled for the following morning at ten o'clock downtown.",
      "Yet just twenty minutes earlier, Malcolm’s mother, Evelyn, had 'stopped by to drop off groceries' and secretly slipped upstairs into Aiden's room while Lori was downstairs in the pantry.",
      "'Tiffany,' Lori said, her voice dropping into a calm, unnerving silence. 'Your mother hasn't stepped foot in this house for six months. Why did she sneak upstairs to leave a letter on my baby’s bed?'",
      "Aiden looked up at his mother, his little hand gripping Lori’s fingers tightly. 'Mommy, grandma said that paper was a surprise for daddy so he wouldn't sign.'",
      "Those innocent words from a five-year-old boy felt like ice water down Lori's spine.",
      "Lori slowly turned the envelope over, broke the wax seal with her thumb, and slid out the two folded pages inside.",
      "Attached to the handwritten letter was a notarized paternity document dated six years ago—one that Evelyn had hidden in her safe deposit box since the day Aiden was born.",
      "The document proved beyond any doubt that Malcolm was indeed Aiden's biological father, a fact Evelyn had maliciously lied about for years to prevent Malcolm from marrying Lori.",
      "Evelyn had kept the truth secret to control her son's trust fund, intending to blackmail Lori on the eve of the adoption hearing.",
      "Just then, the front door downstairs clicked open, and Malcolm called out enthusiastically from the foyer: 'Lori! Aiden! I picked up the celebration cake!'",
      "Lori tucked the document safely into her cardigan pocket, looked Tiffany right in the eyes, and said softly: 'Go tell your mother she better be in court tomorrow. Because her secrets are officially over.'"
    ],
    scenes: [
      {
        paragraphIndex: 3,
        imageUrl: "/images/uploads_batch_0908/v2_frame2.jpg",
        caption: "Lori places her hand on the secret envelope on Aiden's bed as Tiffany tries to explain Evelyn's intrusion."
      },
      {
        paragraphIndex: 14,
        imageUrl: "/images/uploads_batch_0908/v2_frame4.jpg",
        caption: "Lori unfolds the hidden paternity document, unraveling years of mother-in-law deception before the adoption hearing."
      }
    ]
  }
];

// Load existing stories
let stories = [];
if (fs.existsSync(STORIES_PATH)) {
  stories = JSON.parse(fs.readFileSync(STORIES_PATH, "utf8"));
}

// Remove prior copies if any, and unshift new ones
const newIds = new Set(newStories.map(s => s.id));
stories = stories.filter(s => !newIds.has(s.id));
stories.unshift(...newStories);

fs.writeFileSync(STORIES_PATH, JSON.stringify(stories, null, 2), "utf8");
console.log(`Updated ${STORIES_PATH} with ${newStories.length} new stories! Total stories: ${stories.length}`);

// Update tracking links
let trackingLinks = {};
if (fs.existsSync(TRACKING_PATH)) {
  try {
    trackingLinks = JSON.parse(fs.readFileSync(TRACKING_PATH, "utf8"));
  } catch(e) {}
}

newStories.forEach(s => {
  trackingLinks[s.slug] = `${DOMAIN}/story/${s.slug}`;
});
fs.writeFileSync(TRACKING_PATH, JSON.stringify(trackingLinks, null, 2), "utf8");
console.log("Updated tracking links in data/tracking_links.json");

// Sync to server/db.js
const dbFile = path.join(__dirname, "server", "db.js");
if (fs.existsSync(dbFile)) {
  let dbContent = fs.readFileSync(dbFile, "utf8");
  const startMarker = "const INITIAL_STORIES = [";
  const endMarker = "];\n\nconst INITIAL_MARKETING = [";
  const startIndex = dbContent.indexOf(startMarker);
  const endIndex = dbContent.indexOf(endMarker);

  if (startIndex !== -1 && endIndex !== -1) {
    const newInitial = `const INITIAL_STORIES = ${JSON.stringify(stories, null, 2)}`;
    dbContent = dbContent.substring(0, startIndex) + newInitial + dbContent.substring(endIndex + 1);
    fs.writeFileSync(dbFile, dbContent, "utf8");
    console.log("Successfully synced INITIAL_STORIES in server/db.js!");
  }
}

console.log("Batch 0908 published successfully!");
