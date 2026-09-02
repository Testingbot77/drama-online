const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const imgDir = path.join(__dirname, 'public', 'images');
const videoFolder = 'C:/Users/HP/Downloads/American Drama';
const storiesPath = path.join(__dirname, 'data', 'stories.json');
const dbPath = path.join(__dirname, 'server', 'db.js');

// Ensure all 10 cover images are cropped to 1200x800
const chapterImages = [
  { name: 'grad_saga_ch1.jpg', video: 'download (11).mp4', sec: '06', crop: 'crop=in_w:in_w*0.66:0:in_h*0.15' },
  { name: 'grad_saga_ch2.jpg', video: 'download (11).mp4', sec: '12', crop: 'crop=in_w:in_w*0.66:0:in_h*0.05' },
  { name: 'grad_saga_ch3.jpg', video: 'download (14).mp4', sec: '05', crop: 'crop=in_w:in_w*0.66:0:in_h*0.2' },
  { name: 'grad_saga_ch4.jpg', video: 'download (4).mp4', sec: '05', crop: 'crop=in_w:in_w*0.66:0:in_h*0.15' },
  { name: 'grad_saga_ch5.jpg', video: 'ZDola_15s_1787833810411_Dola_Video.mp4', sec: '04', crop: 'crop=in_w:in_w*0.66:0:in_h*0.1' },
  { name: 'grad_saga_ch6.jpg', video: 'download (15).mp4', sec: '04', crop: 'crop=in_w:in_w*0.66:0:in_h*0.25' },
  { name: 'grad_saga_ch7.jpg', video: 'download (10).mp4', sec: '06', crop: 'crop=in_w:in_w*0.66:0:in_h*0.25' },
  { name: 'grad_saga_ch8.jpg', video: 'download (10).mp4', sec: '12', crop: 'crop=in_w:in_w*0.66:0:in_h*0.35' },
  { name: 'grad_saga_ch9.jpg', video: 'Black american 1.mp4', sec: '04', crop: 'crop=in_w:in_w*0.66:0:in_h*0.15' },
  { name: 'grad_saga_ch10.jpg', video: 'black american 2.mp4', sec: '05', crop: 'crop=in_w:in_w*0.66:0:in_h*0.15' }
];

chapterImages.forEach(ci => {
  const vPath = path.join(videoFolder, ci.video);
  const outPath = path.join(imgDir, ci.name);
  try {
    execSync(`ffmpeg -y -ss 00:00:${ci.sec} -i "${vPath}" -vframes 1 -vf "${ci.crop},scale=1200:800" "${outPath}"`, { stdio: 'ignore' });
    console.log('Cropped cover:', ci.name);
  } catch(e) {
    console.error('Error on', ci.name, e.message);
  }
});

const seriesId = 'series-graduation-envelope-mega';
const seriesBaseSlug = 'the-graduation-envelope-mother-in-green';

const mega10Chapters = [
  // Chapter 1
  {
    id: "story-grad-mega-ch1",
    title: "The Graduation Envelope (Chapter 1): The Driveway Confrontation",
    slug: "the-graduation-envelope-mother-in-green",
    category: "Family Secrets",
    subcategory: "Motherhood & Redemption",
    tags: ["Graduation", "Motherhood", "Secrets", "Emotional", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date().toISOString(),
    status: "published",
    partNumber: 1,
    seriesId: seriesId,
    nextPartSlug: "the-graduation-envelope-chapter-2-the-hospital-confession",
    nextPartHook: "🔥 Read Chapter 2: The Secret Hospital Deal and 18 Years of Silence!",
    views: 68900,
    uniqueVisitors: 59100,
    avgReadTimeSeconds: 520,
    trendingScore: 100.0,
    readTime: "9 min read",
    coverImage: "/images/grad_saga_ch1.jpg",
    hookSummary: "Eighteen-year-old Kayla stood in her purple valedictorian graduation robe when an estranged woman in an emerald green dress stepped out of a sedan in their driveway.",
    paragraphs: [
      "[ SUBURBAN ATLANTA RESIDENCE — 06:15 PM ]",
      "The warm evening sun filtered through the pine trees, casting long amber shadows across the driveway.",
      "Eighteen-year-old Kayla stood proudly in her purple graduation gown, clutching her gold valedictorian honors tassel.",
      "Beside her was her father, David, a quiet, hardworking construction foreman wearing his favorite grey polo shirt.",
      "For nearly two decades, David had worked sixty-hour weeks to give his only daughter every opportunity in life.",
      "Watching her graduate at the top of her class was the proudest moment he had ever known.",
      "As they unloaded flowers and graduation gifts from the trunk of the car, the sharp click of a car door echoed down the quiet street.",
      "A black sedan was parked along the curb.",
      "Stepping onto the pavement was a striking woman dressed in a flowing emerald green silk wrap dress.",
      "Her hair was styled in neat box braids, and her gold hoop earrings shimmered under the fading sunlight.",
      "David froze. His grip tightened around the edge of the car trunk until his knuckles turned white.",
      "It was Monica—the woman who had walked out of their lives eighteen years ago when Kayla was barely six months old.",
      "Kayla noticed her father's rigid posture and looked toward the stranger in green. \"Dad... who is that?\"",
      "Monica walked slowly toward them, her hands trembling as she held a thick white parchment envelope.",
      "\"Kayla... my sweet girl,\" Monica's voice wavered with deep, unspoken pain.",
      "\"I know I have no right to stand here today. But I couldn't let you graduate without seeing you with my own eyes.\"",
      "David stepped between them, his voice low and defensive. \"Monica, you signed away your rights eighteen years ago. You don't get to show up now in designer silk.\"",
      "Monica didn't flinch. Tears welled in her eyes as she held out the heavy envelope.",
      "\"Inside this envelope is not an excuse, David. It is the deed to an unencumbered medical pavilion in Atlanta and a full four-year graduate trust fund at J.P. Morgan.\"",
      "David and Kayla stared at the documents in stunned silence.",
      "\"I don't expect forgiveness,\" Monica wept. \"I only ask for one evening to explain why I had to leave.\"",
      "Kayla looked at her father's weathered hands, then back at Monica. \"Come inside. It's time we heard the truth.\""
    ],
    scenes: []
  },

  // Chapter 2
  {
    id: "story-grad-mega-ch2",
    title: "The Graduation Envelope (Chapter 2): The Hospital Confession",
    slug: "the-graduation-envelope-chapter-2-the-hospital-confession",
    category: "Family Secrets",
    subcategory: "Emotional Drama",
    tags: ["Graduation", "Motherhood", "Sacrifice", "Secrets", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date().toISOString(),
    status: "published",
    partNumber: 2,
    seriesId: seriesId,
    previousPartSlug: "the-graduation-envelope-mother-in-green",
    nextPartSlug: "the-graduation-envelope-chapter-3-the-kitchen-table-revelation",
    nextPartHook: "🔥 Read Chapter 3: The Secret Safe Deposit Key and the Trust Fund Clause!",
    views: 61200,
    uniqueVisitors: 53400,
    avgReadTimeSeconds: 530,
    trendingScore: 99.4,
    readTime: "9 min read",
    coverImage: "/images/grad_saga_ch2.jpg",
    hookSummary: "Under the kitchen lights, Monica breaks down in tears, revealing the heartbreaking medical sacrifice that forced her to disappear.",
    paragraphs: [
      "[ DAVIS RESIDENCE KITCHEN — 07:00 PM ]",
      "The kitchen was quiet except for the low hum of the refrigerator and the steam rising from three ceramic mugs of tea.",
      "Monica sat at the edge of the kitchen chair, her fingers nervously tracing the rim of her cup.",
      "David stood against the counter with his arms crossed, staring down with eighteen years of guarded pain.",
      "\"Start from the beginning, Monica,\" David said quietly. \"Tell her why you vanished without a word.\"",
      "Monica closed her eyes, swallowing hard as memories from eighteen years ago flooded back.",
      "\"When Kayla was five months old, she developed severe pulmonary hypertension,\" Monica began, her voice cracking.",
      "\"The doctors at Atlanta Memorial told us she needed an experimental two-hundred-thousand-dollar surgery in Chicago to survive.\"",
      "David looked up in confusion. \"The hospital told me the surgery was funded by an anonymous charitable foundation!\"",
      "\"There was no foundation, David,\" Monica wept, looking directly into his eyes.",
      "\"My wealthy estranged family offered to pay for the entire medical procedure under one brutal condition.\"",
      "\"I had to sign over full sole custody to you, leave the state immediately, and work under their corporate firm in Chicago without contacting you until Kayla turned eighteen.\"",
      "Kayla gasped softly, her hand flying to her mouth as tears streamed down her cheeks.",
      "Monica hadn't left out of selfishness—she had surrendered her own motherhood so her daughter could take her next breath.",
      "\"Every single promotion, every late night in corporate finance was dedicated to building a future for Kayla,\" Monica said.",
      "\"I built that medical pavilion so no parent in Atlanta would ever have to choose between their child's life and their presence.\"",
      "David sank into the chair opposite her, burying his face in his hands as eighteen years of anger dissolved into profound sorrow.",
      "Kayla stood up from her chair, walked over to Monica, and wrapped her arms around her mother's trembling shoulders.",
      "\"Thank you for saving my life, Mom,\" Kayla whispered into her hair.",
      "The room was filled with quiet tears—the first step in healing a wounded family."
    ],
    scenes: []
  },

  // Chapter 3
  {
    id: "story-grad-mega-ch3",
    title: "The Graduation Envelope (Chapter 3): The Kitchen Table Keys",
    slug: "the-graduation-envelope-chapter-3-the-kitchen-table-revelation",
    category: "Family Secrets",
    subcategory: "Inheritance & Mystery",
    tags: ["Inheritance", "Secrets", "Family", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date().toISOString(),
    status: "published",
    partNumber: 3,
    seriesId: seriesId,
    previousPartSlug: "the-graduation-envelope-chapter-2-the-hospital-confession",
    nextPartSlug: "the-graduation-envelope-chapter-4-the-fathers-discovery",
    nextPartHook: "🔥 Read Chapter 4: David Uncovers the Corrupt Stepbrother's Shadow Company!",
    views: 57400,
    uniqueVisitors: 49800,
    avgReadTimeSeconds: 510,
    trendingScore: 98.8,
    readTime: "9 min read",
    coverImage: "/images/grad_saga_ch3.jpg",
    hookSummary: "Monica places a ring of heavy brass keys and a handwritten ledger on the table, revealing a multi-million-dollar endowment.",
    paragraphs: [
      "[ DAVIS RESIDENCE KITCHEN — 08:15 PM ]",
      "The tension in the kitchen had softened, replaced by a deep sense of mutual respect and curiosity.",
      "Monica reached into her leather portfolio and retrieved a ring of vintage brass keys and a spiral notebook.",
      "\"These keys belong to the safety vault at First National Bank on Peachtree Street,\" Monica explained.",
      "\"Inside vault box 714 is the master deed to fifty acres of prime medical commercial land in Fulton County.\"",
      "David leaned forward, examining the handwritten notations in the ledger.",
      "\"Monica, the land value along that highway corridor has skyrocketed over the last ten years,\" David observed.",
      "\"That parcel is worth at least forty-five million dollars today.\"",
      "Monica nodded. \"And that is why my corrupt stepbrother, Marcus Sterling, has spent the last six months trying to forge a foreclosure claim against it.\"",
      "\"He knows Kayla turned eighteen today, which means the irrevocable trust automatically transfers full ownership to her.\"",
      "\"Marcus will stop at nothing to intercept the title before we record it with the county probate clerk tomorrow morning.\"",
      "Kayla looked at the keys, her eyes steady and resolute. \"He won't take what my mother sacrificed eighteen years to build.\"",
      "David picked up the brass keys and placed them firmly in his daughter's hand.",
      "\"Tomorrow morning, we walk into the bank together as a family.\""
    ],
    scenes: []
  },

  // Chapter 4
  {
    id: "story-grad-mega-ch4",
    title: "The Graduation Envelope (Chapter 4): The Father's Discovery",
    slug: "the-graduation-envelope-chapter-4-the-fathers-discovery",
    category: "Family Feud",
    subcategory: "Corporate Betrayal",
    tags: ["Betrayal", "Family Feud", "Justice", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date().toISOString(),
    status: "published",
    partNumber: 4,
    seriesId: seriesId,
    previousPartSlug: "the-graduation-envelope-chapter-3-the-kitchen-table-revelation",
    nextPartSlug: "the-graduation-envelope-chapter-5-the-forgotten-living-room-safe",
    nextPartHook: "🔥 Read Chapter 5: The Hidden Floor Safe Behind the Ancestral Portrait!",
    views: 54200,
    uniqueVisitors: 46900,
    avgReadTimeSeconds: 520,
    trendingScore: 98.5,
    readTime: "9 min read",
    coverImage: "/images/grad_saga_ch4.jpg",
    hookSummary: "David reviews the bank records and uncovers Marcus's illegal shell company attempting to intercept the estate funds.",
    paragraphs: [
      "[ DAVID'S HOME STUDY — 10:00 PM ]",
      "Late into the night, David sat under the green desk lamp, reviewing the financial audit papers Monica had provided.",
      "As an experienced construction contractor, David knew how to read corporate balance sheets and land title registries.",
      "What he found made his blood boil.",
      "Marcus Sterling had created a fraudulent Delaware LLC to file a fictitious twenty-million-dollar mechanic's lien against the medical pavilion.",
      "The notary stamp on the lien was dated three days before the building permit was even issued.",
      "\"This is outright fraud,\" David muttered, his dark eyes narrowing with intense focus.",
      "He dialed his longtime friend, Marcus Holloway, a retired federal land inspector with decades of experience.",
      "\"Marcus, I need you to pull the Department of the Interior title filings for parcel 419 in Fulton County first thing in the morning.\"",
      "On the other end of the line, the retired inspector whistled softly. \"David, that parcel has sovereign trust protections attached to it. Anyone trying to lien that land is committing federal bank fraud.\"",
      "David closed the folder with a satisfied snap. \"That's exactly what I wanted to hear.\"",
      "Tomorrow, Marcus Sterling was walking straight into a legal trap."
    ],
    scenes: []
  },

  // Chapter 5
  {
    id: "story-grad-mega-ch5",
    title: "The Graduation Envelope (Chapter 5): The Living Room Portrait",
    slug: "the-graduation-envelope-chapter-5-the-forgotten-living-room-safe",
    category: "Shocking Secrets",
    subcategory: "Heirloom Mystery",
    tags: ["Mystery", "Inheritance", "Family Secrets", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date().toISOString(),
    status: "published",
    partNumber: 5,
    seriesId: seriesId,
    previousPartSlug: "the-graduation-envelope-chapter-4-the-fathers-discovery",
    nextPartSlug: "the-graduation-envelope-chapter-6-the-matriarchs-ledger",
    nextPartHook: "🔥 Read Chapter 6: Grandma Evelyn's Sovereign 1974 Land Patent Revealed!",
    views: 52100,
    uniqueVisitors: 44800,
    avgReadTimeSeconds: 500,
    trendingScore: 98.1,
    readTime: "8 min read",
    coverImage: "/images/grad_saga_ch5.jpg",
    hookSummary: "The family uncovers a sealed wax testament concealed behind the glass of an old gold-framed heirloom portrait.",
    paragraphs: [
      "[ DAVIS RESIDENCE LIVING ROOM — 07:30 AM ]",
      "Morning light flooded the living room as David, Monica, and Kayla gathered before the fireplace.",
      "Monica pointed to the heavy gilded portrait frame that had hung above the mantelpiece for generations.",
      "\"Before my father passed, he told me that the true bearer bonds were stored where no auditor would ever look.\"",
      "David carefully lifted the frame from the wall and turned it over on the coffee table.",
      "Using a small flathead screwdriver, he pried open the wooden backing.",
      "Tucked neatly between the velvet lining and the cardboard backing was a sealed vellum envelope bearing a crimson wax seal.",
      "Kayla broke the seal and unfolded the parchment inside.",
      "It was a certified declaration of trust signed by the former Chief Justice of the Georgia Supreme Court.",
      "The document confirmed that the land could never be transferred without the living heir's biometric verification at the county registry.",
      "\"Marcus's fake liens are completely useless against this document,\" Monica said, a smile finally brightening her face.",
      "\"Let's head to the bank.\""
    ],
    scenes: []
  },

  // Chapter 6
  {
    id: "story-grad-mega-ch6",
    title: "The Graduation Envelope (Chapter 6): The Matriarch's Ledger",
    slug: "the-graduation-envelope-chapter-6-the-matriarchs-ledger",
    category: "Money & Inheritance",
    subcategory: "Family Secrets",
    tags: ["Grandmother", "Inheritance", "Secrets", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date().toISOString(),
    status: "published",
    partNumber: 6,
    seriesId: seriesId,
    previousPartSlug: "the-graduation-envelope-chapter-5-the-forgotten-living-room-safe",
    nextPartSlug: "the-graduation-envelope-chapter-7-the-corrupt-managers-office",
    nextPartHook: "🔥 Read Chapter 7: The Showdown in the Property Management Boardroom!",
    views: 49800,
    uniqueVisitors: 42900,
    avgReadTimeSeconds: 510,
    trendingScore: 97.9,
    readTime: "9 min read",
    coverImage: "/images/grad_saga_ch6.jpg",
    hookSummary: "Grandma Evelyn joins the family at the bank, using her gold wedding rings and 1974 spiral journal to authorize the trust transfer.",
    paragraphs: [
      "[ FIRST NATIONAL VAULT ROOM, ATLANTA — 09:15 AM ]",
      "The heavy steel vault door of First National Bank swung open with a deep hydraulic hiss.",
      "Grandma Evelyn, dressed in her dignified blue silk blouse and gold cross, walked steadily beside Kayla.",
      "The senior vault manager greeted them with deep professional deference.",
      "\"Mrs. Holloway, it has been twenty years since this box was accessed.\"",
      "Grandma Evelyn smiled serenely, opening her worn spiral ledger to page forty-seven.",
      "\"My late husband, Thomas, always said that patience is the greatest fortress.\"",
      "The vault manager inserted the master key alongside Monica's brass key, sliding out safe deposit box 714.",
      "Inside was a pristine velvet portfolio containing forty-eight million dollars in negotiable bearer certificates and clean municipal land patents.",
      "\"Everything is in perfect legal order,\" the vault manager confirmed after scanning the federal registry barcodes.",
      "\"The entire estate is officially registered under Kayla Davis Holloway.\"",
      "Just then, the branch manager entered the vault room with a worried look on his face.",
      "\"Ms. Holloway... Marcus Sterling and his attorneys have just arrived in the lobby with a court injunction.\"",
      "Grandma Evelyn closed her notebook calmly. \"Tell Mr. Sterling to come right in. We have a surprise waiting for him.\""
    ],
    scenes: []
  },

  // Chapter 7
  {
    id: "story-grad-mega-ch7",
    title: "The Graduation Envelope (Chapter 7): The Boardroom Confrontation",
    slug: "the-graduation-envelope-chapter-7-the-corrupt-managers-office",
    category: "Courtroom & Justice",
    subcategory: "Legal Drama",
    tags: ["Showdown", "Legal Drama", "Justice", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date().toISOString(),
    status: "published",
    partNumber: 7,
    seriesId: seriesId,
    previousPartSlug: "the-graduation-envelope-chapter-6-the-matriarchs-ledger",
    nextPartSlug: "the-graduation-envelope-chapter-8-the-sovereign-title-defense",
    nextPartHook: "🔥 Read Chapter 8: Denise Drops the Federal Patent Deeds on the Table!",
    views: 48100,
    uniqueVisitors: 41400,
    avgReadTimeSeconds: 520,
    trendingScore: 98.2,
    readTime: "9 min read",
    coverImage: "/images/grad_saga_ch7.jpg",
    hookSummary: "Marcus Sterling struts into the executive boardroom waving a fake court order, only to find the family ready for him.",
    paragraphs: [
      "[ BANK EXECUTIVE BOARDROOM — 10:00 AM ]",
      "Marcus Sterling strode into the boardroom wearing an expensive designer suit and gold watch, radiating smug arrogance.",
      "Behind him were two corporate lawyers carrying leather briefcases.",
      "\"Monica, you should have stayed in Chicago,\" Marcus scoffed, slamming a court petition on the mahogany table.",
      "\"This emergency freeze prevents any disbursement of funds from box 714 until my probate claim is heard.\"",
      "Denise, the family's sharp civil litigator, leaned back in her chair with an amused smile.",
      "\"Marcus, did your lawyers bother reading paragraph four of the Fulton County Probate Code?\"",
      "Marcus frowned, glancing at his lead attorney.",
      "Denise slid the certified 1974 Supreme Court patent deed across the table.",
      "\"This trust is unencumbered and protected by sovereign immunity. Your alleged lien was issued by a state magistrate without federal jurisdiction.\"",
      "\"In fact,\" Denise added, \"the signature on your mechanic's lien was signed by an individual who passed away four years ago.\"",
      "The color drained completely from Marcus's face.",
      "His lead attorney quickly snapped his briefcase shut: \"Marcus... you told us this document was executed last month!\"",
      "\"You committed forgery on a federal banking document.\""
    ],
    scenes: []
  },

  // Chapter 8
  {
    id: "story-grad-mega-ch8",
    title: "The Graduation Envelope (Chapter 8): The Federal Arrest",
    slug: "the-graduation-envelope-chapter-8-the-sovereign-title-defense",
    category: "Courtroom & Justice",
    subcategory: "Justice & Retribution",
    tags: ["Arrest", "Justice", "Courtroom", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date().toISOString(),
    status: "published",
    partNumber: 8,
    seriesId: seriesId,
    previousPartSlug: "the-graduation-envelope-chapter-7-the-corrupt-managers-office",
    nextPartSlug: "the-graduation-envelope-chapter-9-the-backyard-celebration",
    nextPartHook: "🔥 Read Chapter 9: The $15 Million Community Gift and Backyard Reunion!",
    views: 46700,
    uniqueVisitors: 40100,
    avgReadTimeSeconds: 500,
    trendingScore: 98.0,
    readTime: "9 min read",
    coverImage: "/images/grad_saga_ch8.jpg",
    hookSummary: "Federal marshals enter the boardroom and place handcuffs on Marcus Sterling as his criminal syndicate collapses.",
    paragraphs: [
      "[ BANK EXECUTIVE BOARDROOM — 10:30 AM ]",
      "Before Marcus could gather his papers, the double doors of the boardroom clicked open once more.",
      "Two United States Marshals and a Special Agent from the Federal Bureau of Investigation stepped into the room.",
      "\"Marcus Sterling, you are under arrest for federal bank fraud, identity theft, and grand larceny.\"",
      "Marcus jumped to his feet in panic: \"Wait! This is a private civil dispute! You have no jurisdiction!\"",
      "The FBI agent produced an arrest warrant signed by Chief Judge Harrison.",
      "\"You forged the seal of the Department of the Interior on thirty-four fraudulent land filings across the state of Georgia.\"",
      "The marshals seized Marcus's arms and snapped heavy steel handcuffs around his wrists.",
      "\"Monica! Tell them! David, we're family!\" Marcus shouted as he was dragged out of the room in disgrace.",
      "David looked at him with quiet, unshakeable dignity: \"Family doesn't steal from their own children, Marcus.\"",
      "The boardroom fell silent as the door clicked shut behind the disgraced scammer.",
      "Kayla stood tall, holding the certified title to her future—untouchable, safe, and free."
    ],
    scenes: []
  },

  // Chapter 9
  {
    id: "story-grad-mega-ch9",
    title: "The Graduation Envelope (Chapter 9): The Backyard Celebration",
    slug: "the-graduation-envelope-chapter-9-the-backyard-celebration",
    category: "Redemption & Family",
    subcategory: "Family Reunion",
    tags: ["Celebration", "Redemption", "Family", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date().toISOString(),
    status: "published",
    partNumber: 9,
    seriesId: seriesId,
    previousPartSlug: "the-graduation-envelope-chapter-8-the-sovereign-title-defense",
    nextPartSlug: "the-graduation-envelope-chapter-10-grand-finale",
    nextPartHook: "🔥 Read Chapter 10 (Grand Finale): The Thanksgiving Harvest Table and Generational Peace!",
    views: 45200,
    uniqueVisitors: 38900,
    avgReadTimeSeconds: 510,
    trendingScore: 98.4,
    readTime: "9 min read",
    coverImage: "/images/grad_saga_ch9.jpg",
    hookSummary: "The entire community gathers in the sun-drenched backyard as Kayla announces the opening of the Children's Health Pavilion.",
    paragraphs: [
      "[ SUMMER HILLS BACKYARD LAWN — 04:30 PM ]",
      "Blue and white graduation balloons swayed gently in the warm Georgia breeze.",
      "Dozens of neighbors, teachers, and extended family members filled the backyard with laughter, music, and the delicious aroma of smoked barbecue.",
      "Kayla stood on the wooden deck beside her mother and father, holding a microphone.",
      "\"Today isn't just about graduating high school,\" Kayla addressed the crowd with radiant joy.",
      "\"It's about honoring the two people who sacrificed everything so I could stand here.\"",
      "She turned to David and Monica, taking their hands in hers.",
      "\"My father gave me eighteen years of daily love, discipline, and hard work.\"",
      "\"And my mother gave up eighteen years of her own happiness so that I could have a beating heart.\"",
      "\"Today, we are dedicating the fifty-million-dollar medical trust to build the Atlanta Children's Wellness Pavilion—free healthcare for every child in need!\"",
      "The entire backyard erupted into deafening cheers and applause as neighbors wiped away tears of profound respect.",
      "David and Monica looked at their daughter with pride that words could never capture."
    ],
    scenes: []
  },

  // Chapter 10 (Grand Finale)
  {
    id: "story-grad-mega-ch10",
    title: "The Graduation Envelope (Chapter 10 - Grand Finale): The Harvest Table",
    slug: "the-graduation-envelope-chapter-10-grand-finale",
    category: "Family Secrets",
    subcategory: "Grand Finale & Peace",
    tags: ["Grand Finale", "Family", "Love", "Redemption", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date().toISOString(),
    status: "published",
    partNumber: 10,
    seriesId: seriesId,
    previousPartSlug: "the-graduation-envelope-chapter-9-the-backyard-celebration",
    views: 58900,
    uniqueVisitors: 51200,
    avgReadTimeSeconds: 540,
    trendingScore: 99.9,
    readTime: "10 min read",
    coverImage: "/images/grad_saga_ch10.jpg",
    hookSummary: "The family gathers around a candlelit harvest dinner table in complete peace, celebrating the unbreakable triumph of love over adversity.",
    paragraphs: [
      "[ DAVIS FAMILY DINING ROOM — 07:30 PM ]",
      "Candlelight flickered warmly across the long oak dining table, illuminating a grand roasted turkey, bowls of roasted vegetables, and crystal glasses of cider.",
      "Grandma Evelyn sat at the head of the table, smiling through her spectacles as she carved the first slice for her grandchildren.",
      "David, Monica, and Kayla sat together, laughing and sharing stories of Kayla's childhood that Monica had missed, but was now catching up on with every breath.",
      "There were no more lawyers, no more courtrooms, and no more predatory debts.",
      "The past eighteen years of hardship had been heavy, but the harvest of their perseverance was sweet beyond measure.",
      "David raised his glass for a toast: \"To family. Not defined by distance or absence, but by the sacrifices we make and the love we keep.\"",
      "\"To family!\" everyone chimed in unison, their glasses clinking under the warm amber chandelier.",
      "Kayla looked around the table at the people who had protected her life and her future.",
      "She knew that no matter where her studies at Emory took her, the roots of her home were deep, unshakeable, and forever blessed.",
      "Outside, the stars shone brightly over Atlanta—a peaceful night for a family that had finally come whole."
    ],
    scenes: []
  }
];

// Combine with other existing stories (Series 2-10)
let currentStories = JSON.parse(fs.readFileSync(storiesPath, 'utf8'));
// Remove old versions of series 1
currentStories = currentStories.filter(s => s.seriesId !== seriesId && !s.slug.startsWith('the-graduation-envelope'));

// Insert the 10-chapter saga at the top
currentStories.unshift(...mega10Chapters);

// Save to data/stories.json
fs.writeFileSync(storiesPath, JSON.stringify(currentStories, null, 2), 'utf8');
console.log('Successfully saved 10-Chapter Mega Saga to data/stories.json!');

// Sync to server/db.js
let dbContent = fs.readFileSync(dbPath, 'utf8');
const startMarker = 'const INITIAL_STORIES = [';
const endMarker = 'const INITIAL_MARKETING = [';

const startIdx = dbContent.indexOf(startMarker);
const endIdx = dbContent.indexOf(endMarker);

if (startIdx !== -1 && endIdx !== -1) {
  const newInitialStoriesCode = `const INITIAL_STORIES = ${JSON.stringify(currentStories, null, 2)};\n\n`;
  const updatedDb = dbContent.slice(0, startIdx) + newInitialStoriesCode + dbContent.slice(endIdx);
  fs.writeFileSync(dbPath, updatedDb, 'utf8');
  console.log('Successfully synced 10-Chapter Mega Saga into server/db.js!');
}
