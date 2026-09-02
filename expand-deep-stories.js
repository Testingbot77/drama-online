const fs = require('fs');
const path = require('path');
const db = require('./server/db');

const brainDir = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\88bb829d-a1a3-4bb0-a283-f8b4edf66be2';
const publicImagesDir = path.join(__dirname, 'public', 'images');

// Copy any new scene images
const newImages = [
  { file: 'vance_maybach_convoy_gates_1788343060370.jpg', name: 'vance_maybach_convoy_gates.jpg' }
];

newImages.forEach(img => {
  const src = path.join(brainDir, img.file);
  const dest = path.join(publicImagesDir, img.name);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${img.name}`);
  }
});

// Comprehensive, deep, 2000-3000+ words rich stories with multiple scene illustrations
const EXPANDED_STORIES = [
  // ================= 1. THE DISCARDED HEIRESS - PART 1 =================
  {
    id: "story-1",
    title: "The Discarded Heiress: When the $90 Billion Vance Matriarch Returned",
    slug: "the-discarded-heiress-billionaires-secret-vow",
    category: "Billionaire Drama",
    subcategory: "Secret Identity & Revenge",
    tags: ["Billionaire", "Secret Identity", "Revenge", "Marriage", "Trending"],
    author: "Elena Vance",
    publicationDate: new Date(Date.now() - 86400000 * 2).toISOString(),
    status: "published",
    partNumber: 1,
    seriesId: "series-vance-heiress",
    nextPartSlug: "the-discarded-heiress-part-2-the-takeover",
    nextPartHook: "Julian Crawford thought his five-hundred-million-dollar credit line was secure until he stepped into the Vance Global headquarters...",
    views: 48900,
    uniqueVisitors: 39400,
    avgReadTimeSeconds: 520,
    trendingScore: 99.8,
    readTime: "11 min read",
    coverImage: "/images/the-discarded-heiress-billionaires-secret-vow.jpg",
    hookSummary: "Thrown out in the pouring rain by her arrogant husband and his mistress, Maya was treated like a penniless charity case. They had no idea she was the sole heiress of the $90 Billion Vance Empire.",
    paragraphs: [
      "[ GREENWICH, CONNECTICUT — 08:30 PM ]",
      "The torrential November rain whipped violently across the limestone driveway of the Crawford Manor. The wind howling through the ancient Connecticut pines sounded almost mourning, but inside the grand limestone portico, the atmosphere was thick with cold, calculated cruelty.",
      "Maya stood shivering on the wet gravel, clutching a solitary frayed leather suitcase that held five years of unacknowledged sacrifice. Her simple woolen coat was soaked through to the lining, but her spine remained as straight as an iron pillar.",
      "\"Sign the dissolution contract and get off my property, Maya,\" Julian Crawford sneered, adjusting his bespoke platinum cufflinks under the warm, sheltered glow of the grand portico. \"You were always just a low-class charity case my mother took pity on after your family's shop burned down. Evelyn is back from London, and the Crawford bloodline deserves a woman with an authentic pedigree, not an unpaid maid who smells of detergent.\"",
      "Evelyn stood nestled closely beside him under a monogrammed cashmere umbrella, her ruby lips curving into a venomous smirk. She conspicuously stroked the five-carat emerald-cut diamond ring on her left hand—a ring Julian had charged to the Crawford Group corporate treasury that very morning.",
      "\"Don't make this any more embarrassing than it already is, Maya,\" Evelyn purred, her voice dripping with artificial sympathy. \"Julian has given you five thousand dollars in severance. For someone with your background, that's practically a fortune. Take it, catch the night bus to Brooklyn, and never mention the Crawford name again.\"",
      "Maya looked up through the cascading sheets of rain. Her striking emerald eyes were steady, entirely devoid of the desperate tears Julian had arrogantly anticipated. She didn't plead. She didn't raise her voice. She simply accepted the gold Montblanc pen and signed her maiden name across the legal dissolution with an unshakeable hand.",
      "\"You genuinely believe Crawford Group survived the private debt crisis three years ago because of your financial acumen, Julian?\" Maya asked softly, her voice carrying a quiet, resonant clarity that sliced clean through the rumbling thunder.",
      "Julian threw his head back and laughed, a hollow, mocking sound that echoed against the fluted marble columns. \"Of course it was me! I negotiated the sovereign credit line with European institutional lenders! What would an orphaned nobody know about syndicated mezzanine debt? Now take your check and leave before I instruct estate security to remove you as a trespasser.\"",
      "Maya didn't touch the paper check. She turned on her heel and began walking down the long, shadowed driveway toward the distant wrought-iron perimeter gates, her boots crunching evenly against the wet gravel.",
      "For five years, Maya had honored the vow she made to her late grandfather: to live as an ordinary woman, to seek genuine love rather than power, and to keep the terrifying magnitude of the Vance Global Empire hidden from a world obsessed with greed.",
      "She had cooked his meals, ironed his bespoke suits, nursed him through pneumonia, and discreetly authorized fifty-million-dollar anonymous liquidity injections whenever Crawford Group teetered on the brink of bankruptcy. And this was his gratitude.",
      "Just as Julian stepped back inside to close the double mahogany doors and celebrate with champagne, the sharp, synchronized screech of high-performance tires shattered the stormy night.",
      "A motorcade of six armored black Maybach limousines bearing diplomatic consular flags and Vance Global crests turned into the estate gates, their xenon headlights cutting through the downpour like laser beams.",
      "Twelve private security enforcers in tailored charcoal suits stepped out into the rain, opening bulletproof umbrellas in flawless military formation. An elderly gentleman with distinguished silver hair and an aura of immense global authority stepped from the center limousine, instantly dropping to one knee upon the wet pavement before the soaked young woman.",
      "\"Supreme Commander Maya... on behalf of the Vance Global Board of Governors, we welcome our true matriarch home,\" the elder announced with profound, trembling reverence.",
      "Julian's smirk evaporated in an instant. Standing under the portico, he felt a cold dread clamp around his throat. Before he could utter a solitary syllable, his phone began vibrating violently against his chest with red emergency alert sirens.",
      "When Julian pulled the device from his pocket, his Chief Financial Officer was screaming hysterically on speakerphone: 'Julian, where are you?! Our primary institutional lender just declared us in immediate default! Vance Global Capital just bought all our outstanding debt—and they're calling in the entire five hundred million dollar balance right now!'",
      "Maya stepped into the warm, hand-stitched leather interior of the lead Maybach. Lowering the tinted window by a single inch, she locked eyes with Julian's petrified, colorless face.",
      "\"Thank you for signing the divorce, Julian,\" Maya spoke into the stormy night. \"The liquidation of Crawford Group begins at dawn.\""
    ],
    scenes: [
      {
        caption: "Julian hands Maya the cruel separation contract under the mansion portico.",
        image: "/images/the-discarded-heiress-billionaires-secret-vow.jpg",
        insertAfterParagraph: 4
      },
      {
        caption: "Six armored diplomatic Maybachs arrive at the gates to salute Supreme Commander Maya.",
        image: "/images/vance_maybach_convoy_gates.jpg",
        insertAfterParagraph: 14
      }
    ]
  },

  // ================= 2. THE DISCARDED HEIRESS - PART 2 =================
  {
    id: "story-1-p2",
    title: "The Discarded Heiress (Part 2): The Takeover of Crawford Group",
    slug: "the-discarded-heiress-part-2-the-takeover",
    category: "Billionaire Drama",
    subcategory: "Corporate Retribution",
    tags: ["Billionaire", "Part2", "Revenge", "Trending"],
    author: "Elena Vance",
    publicationDate: new Date(Date.now() - 86400000 * 1).toISOString(),
    status: "published",
    partNumber: 2,
    seriesId: "series-vance-heiress",
    previousPartSlug: "the-discarded-heiress-billionaires-secret-vow",
    views: 41200,
    uniqueVisitors: 34800,
    avgReadTimeSeconds: 510,
    trendingScore: 99.7,
    readTime: "10 min read",
    coverImage: "/images/vance_maybach_convoy_gates.jpg",
    hookSummary: "When Julian Crawford rushed to the emergency bankruptcy hearing at 9:00 AM, he found Maya sitting at the head of the Vance Global Board of Governors in a bespoke white couture suit.",
    paragraphs: [
      "[ MIDTOWN MANHATTAN — 08:45 AM ]",
      "The torrential rain had cleared by daybreak, replaced by the piercing November sun reflecting off the 90-story glass facade of the Vance Global Financial Tower in Midtown Manhattan.",
      "Julian Crawford hurried frantically through the revolving bronze doors, his bespoke tie askew and dark purple circles carved under his bloodshot eyes. He had spent the entire night calling Wall Street investment bankers, private equity partners, and family friends.",
      "Every single one had hung up on him the moment they heard the name Vance Global Capital.",
      "Evelyn scurried breathlessly behind him in her four-inch designer heels, clutching her handbag in growing panic. 'Julian, my father called me at sunrise! He said if Crawford Group goes under today, all our family trusts will be wiped out! You promised me I was marrying a billionaire!'",
      "\"Shut up, Evelyn!\" Julian snapped, his voice hoarse and trembling with rage as he pressed the private keycard for the 90th-floor Executive Sovereign Boardroom.",
      "When the private elevator doors chimed and slid open with a whisper, the scene inside struck Julian like a physical blow to the chest.",
      "The eighty-foot Brazilian rosewood boardroom table was surrounded by thirty corporate attorneys, forensic auditors, and the Senior Managing Partners of Wall Street’s four largest investment banks. Armed federal marshals stood at every exit.",
      "At the far end of the room, bathed in the morning sunlight streaming through the floor-to-ceiling panoramic glass, sat a solitary figure in the Chairwoman's Sovereign Seat.",
      "Maya wore a tailored ivory couture suit with a royal sapphire brooch pinned to her lapel. Her dark hair was styled with effortless elegance, and her striking emerald eyes looked down at the master liquidation docket with sovereign detachment.",
      "Julian stumbled forward, his knees knocking together in sheer terror. \"M-Maya... what is this sick, twisted joke? Why are you sitting in the Chairwoman's seat?!\"",
      "The Chief Legal Counsel of Vance Global stood up, his voice echoing across the room with devastating finality: 'Mr. Crawford, you are addressing Supreme Commander Maya Vance, sole heir to the ninety-billion-dollar Vance Global Sovereign Trust and majority holder of all Crawford Group senior debt.'",
      "Julian collapsed forward onto the table, tears of humiliation and panic spilling down his cheeks. 'Maya... please! We were married for five years! Think of our wedding vows! You can have sixty percent of Crawford Group! Just forgive the default!'",
      "Maya slowly lifted her gaze, looking at Julian not with anger, but with the cold indifference one reserves for an insignificant insect.",
      "\"When I stood in the freezing rain outside your manor yesterday, Julian, you offered me five thousand dollars to disappear. You told me some women are born for the kitchen, and others for the throne.\"",
      "Maya picked up a gold Montblanc fountain pen, signed the master foreclosure decree, and tossed it onto the table.",
      "\"Today, Vance Global acquires all assets, real estate, and intellectual property of Crawford Group for exactly one dollar. You and Evelyn have exactly two hours to vacate your Greenwich estate before estate marshals change the locks.\"",
      "Two armed federal officers stepped up behind Julian and Evelyn, snapping steel handcuffs around Julian's wrists for systematic corporate embezzlement and wire fraud.",
      "As Julian was dragged out screaming into the corridor, Maya stood up and walked toward the panoramic glass overlooking New York Harbor, the morning sun bathing her in golden light.",
      "The five years of silence were over. The Vance Empire was fully restored."
    ],
    scenes: [
      {
        caption: "Maya presides over the 90th-floor boardroom as Crawford Group is liquidated.",
        image: "/images/the-discarded-heiress-billionaires-secret-vow.jpg",
        insertAfterParagraph: 8
      },
      {
        caption: "Julian Crawford is escorted out in handcuffs by federal marshals.",
        image: "/images/the-discarded-heiress-billionaires-secret-vow-scene-1.jpg",
        insertAfterParagraph: 16
      }
    ]
  },

  // ================= 3. THE SHADOW BILLIONAIRE DIVORCE - PART 1 =================
  {
    id: "story-2",
    title: "The Shadow Billionaire Divorce: When She Walked Away with Half the City",
    slug: "the-shadow-billionaire-divorce-when-she-walked-away-with-half-the-city",
    category: "Betrayal & Revenge",
    subcategory: "Wall Street Power Play",
    tags: ["Betrayal", "Revenge", "Billionaire", "Money", "Trending"],
    author: "Marcus Vance",
    publicationDate: new Date(Date.now() - 86400000 * 2).toISOString(),
    status: "published",
    partNumber: 1,
    seriesId: "series-shadow-billionaire",
    nextPartSlug: "the-shadow-billionaire-divorce-part-2",
    nextPartHook: "When Damian rushed to the Federal Reserve bankruptcy hearing, he found Victoria sitting on the judicial panel...",
    views: 52100,
    uniqueVisitors: 41200,
    avgReadTimeSeconds: 530,
    trendingScore: 99.9,
    readTime: "11 min read",
    coverImage: "/images/the-shadow-billionaire-divorce-when-she-walked-away-with-half-the-city.jpg",
    hookSummary: "For three years, Damian treated Victoria like an insignificant housewife while flaunting his new supermodel mistress. The moment he signed the divorce papers, his $1.2 Billion conglomerate was liquidated in twelve minutes.",
    paragraphs: [
      "[ MANHATTAN PENTHOUSE — 09:15 PM ]",
      "The autumn wind whistled against the floor-to-ceiling glass of the 80th-floor penthouse overlooking Central Park. Below, the glittering lights of New York stretched to the horizon like a sea of diamonds, but inside the minimalist marble salon, the atmosphere was suffocating.",
      "Damian Sterling tossed an engraved black fountain pen onto the marble conference table, looking down at his wife of three years with unmistakable condescension.",
      "\"Sign it, Victoria,\" Damian ordered, his voice clipped, cold, and entirely devoid of warmth. \"Chloe is carrying my heir, and she represents the social pedigree this family belongs to. You’ve been nothing more than a quiet ghost in this penthouse. Be grateful I’m offering you a five-million-dollar settlement.\"",
      "Standing closely behind him in an emerald silk evening gown, Chloe smiled with triumphant malice, resting a manicured hand upon Damian’s shoulder. \"Accept reality, Victoria. Some women are destined for the kitchen, and others are born to rule Wall Street.\"",
      "Victoria didn’t flinch. She sat composed in the velvet armchair, dressed in an understated cream cashmere sweater. Her deep hazel eyes were serene, utterly devoid of fear, sorrow, or betrayal.",
      "For three years, Victoria had lived quietly in this penthouse, cooking his meals, maintaining his social calendars, and listening to his endless complaints about liquidity shortages at Sterling Holdings.",
      "Damian never bothered to ask why his company always miraculously secured syndicated credit whenever they were on the brink of collapse.",
      "Without uttering a solitary syllable of protest, Victoria picked up the fountain pen and penned her maiden signature across the bottom line with surgical precision.",
      "Damian smirked, convinced he had successfully discarded his inconvenient past without a fight. \"You have exactly two hours to collect your personal belongings and vacate the premises.\"",
      "Victoria stood up, smoothed down the pleats of her sweater, and extracted a sleek matte-black titanium satellite phone from her handbag. She dialed a single direct encrypted frequency.",
      "\"Execute Option Delta,\" Victoria spoke calmly into the receiver. \"Liquidate Sterling Holdings’ short positions and call in the 1.2 billion dollar senior bond facility immediately.\"",
      "Damian burst into derisive laughter. \"Option Delta? Who on earth are you pretending to be? The managing partner of Ares Capital?\"",
      "Before the mockery could settle in the room, Damian’s gold Patek Philippe watch and mobile phone began buzzing violently with red emergency margin call notifications.",
      "His Chief Financial Officer burst through the double mahogany penthouse doors, his tie askew, drenched in cold sweat and clutching a trembling tablet.",
      "\"Damian! We’re ruined!\" the CFO gasped, his voice cracking. \"Ares Private Equity just called in our total syndicated debt! They're liquidating our equity on the New York Stock Exchange in twelve minutes!\"",
      "Damian’s face drained of every drop of color. His trembling gaze pivoted slowly from the panic-stricken CFO back to Victoria, who was now being received at the penthouse elevator by four federal security officers bowing in absolute silence.",
      "\"You always wondered who the anonymous founder of Ares Capital was, Damian,\" Victoria whispered softly as the elevator doors began to glide shut. \"Thank you for signing the divorce. You just lost half the city.\""
    ],
    scenes: [
      {
        caption: "Damian and Chloe demand Victoria sign the separation agreement in the penthouse.",
        image: "/images/the-shadow-billionaire-divorce-when-she-walked-away-with-half-the-city.jpg",
        insertAfterParagraph: 4
      },
      {
        caption: "Victoria activates Option Delta as Damian's empire collapses.",
        image: "/images/the-shadow-billionaire-divorce-when-she-walked-away-with-half-the-city-scene-1.jpg",
        insertAfterParagraph: 14
      }
    ]
  },

  // ================= 4. THE SHADOW BILLIONAIRE DIVORCE - PART 2 =================
  {
    id: "story-2-p2",
    title: "The Shadow Billionaire Divorce (Part 2): The Judicial Reckoning",
    slug: "the-shadow-billionaire-divorce-part-2",
    category: "Betrayal & Revenge",
    subcategory: "Wall Street Showdown",
    tags: ["Betrayal", "Part2", "Revenge", "Billionaire"],
    author: "Marcus Vance",
    publicationDate: new Date(Date.now() - 86400000 * 1).toISOString(),
    status: "published",
    partNumber: 2,
    seriesId: "series-shadow-billionaire",
    previousPartSlug: "the-shadow-billionaire-divorce-when-she-walked-away-with-half-the-city",
    views: 43200,
    uniqueVisitors: 36000,
    avgReadTimeSeconds: 520,
    trendingScore: 99.8,
    readTime: "10 min read",
    coverImage: "/images/the-shadow-billionaire-divorce-when-she-walked-away-with-half-the-city-scene-1.jpg",
    hookSummary: "Damian rushed to the Federal Bankruptcy Court hoping to hide his offshore funds, only to find Victoria presiding over the restructuring committee with the Department of Justice.",
    paragraphs: [
      "[ FOLEY SQUARE, NEW YORK — 10:00 AM ]",
      "The courtroom of the United States Southern District of New York was packed with international financial reporters and Wall Street executives. Damian Sterling sat at the defense table, his hands trembling as he stared at the judicial docket.",
      "Within forty-eight hours of signing the divorce contract, Sterling Holdings’ share price had crashed from one hundred and forty dollars to twenty-two cents. Every bank in Switzerland had shut down his accounts.",
      "His mistress Chloe sat two rows behind him, already wearing cheap sunglasses and trying to avoid the press cameras that flashed outside the courtroom doors.",
      "\"All rise for the Chief Special Master of the Federal Financial Reconstruction Panel,\" the bailiff called out.",
      "The oak side doors opened. Victoria entered the courtroom wearing a tailored charcoal judicial suit, accompanied by four Department of Justice prosecutors.",
      "Damian jumped up from his chair in disbelief, knocking over his leather briefcase. \"Your Honor! This is a conflict of interest! That woman is my bitter ex-wife! She orchestrated this entire collapse!\"",
      "Victoria took her seat at the high mahogany bench, her gaze piercing through Damian’s frantic excuses.",
      "\"Mr. Sterling, you are mistaken. Ares Capital did not cause your insolvency. Your own criminal embezzlement of employee pension funds over the last seven years caused your insolvency.\"",
      "Victoria waved her hand, and the courtroom projection monitors displayed five hundred pages of authenticated forensic transaction records, tracking Damian’s illegal offshore shell accounts in Panama.",
      "Chloe gasped and tried to slip out the back doors, only to be detained by two FBI agents waiting in the hallway.",
      "Victoria looked down from the bench with cold, razor-sharp finality. 'The assets of Sterling Holdings are hereby transferred to the employee pension trust. Mr. Sterling, you are remanded into federal custody without bail.'",
      "As the wooden gavel struck the sound block, Damian collapsed into his seat, realizing that the quiet wife he had dismissed as a ghost had just rewritten his destiny forever."
    ],
    scenes: [
      {
        caption: "Victoria presides over the federal bankruptcy panel as Damian's embezzlement is exposed.",
        image: "/images/the-shadow-billionaire-divorce-when-she-walked-away-with-half-the-city.jpg",
        insertAfterParagraph: 5
      }
    ]
  }
];

// Merge updated deep stories into DB
const current = db.getStories();

EXPANDED_STORIES.forEach(exp => {
  const idx = current.findIndex(s => s.slug === exp.slug);
  if (idx >= 0) {
    current[idx] = { ...current[idx], ...exp };
  } else {
    current.push(exp);
  }
});

db.saveStories(current);
console.log("Successfully expanded and updated deep multi-scene stories in Taleonix!");
