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

// Rich Initial Editorial Stories for Taleonix
const INITIAL_STORIES = [
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
    views: 24890,
    uniqueVisitors: 19320,
    avgReadTimeSeconds: 310,
    trendingScore: 98.4,
    readTime: "7 min read",
    originalVideoName: "ceo_wife_secret_reveal.mp4",
    coverImage: "/images/story1_cover.svg",
    hookSummary: "Thrown out in the pouring rain by her arrogant husband and his mistress, Maya was treated like a penniless charity case. They had no idea she was the sole heiress of the $90 Billion Vance Empire.",
    seoTitle: "The Discarded Heiress: Billionaire's Secret Vow | Taleonix Drama",
    seoDescription: "Read the viral story of Maya, who was discarded in the rain by her arrogant husband only for six diplomatic Maybachs to salute her true identity.",
    socialTitle: "He kicked his 'broke' wife out in the rain... until 6 Maybachs pulled up 😱🔥",
    socialDescription: "She endured 5 years of humiliation before the true Vance Empire arrived. Read the full story on Taleonix.",
    paragraphs: [
      "The torrential November rain whipped across the limestone driveway of the Crawford Manor in Greenwich, Connecticut. Maya stood shivering on the wet gravel, clutching a solitary frayed suitcase that held five years of unacknowledged sacrifice.",
      "\"Sign the dissolution contract and get off my property, Maya,\" Julian Crawford sneered, adjusting his bespoke platinum cufflinks under the shelter of the grand portico. \"You were always just a low-class charity case my mother took pity on. Evelyn is back from London, and the Crawford bloodline deserves a woman with an authentic pedigree.\"",
      "Evelyn stood nestled beside him under a cashmere umbrella, her ruby lips curving into a venomous smirk. She conspicuously stroked the five-carat emerald-cut diamond ring on her left hand—a ring Julian had charged to the Crawford Group corporate account that very morning.",
      "Maya looked up through the rain. Her striking emerald eyes were steady, entirely devoid of the tears Julian anticipated. She didn't plead. She didn't raise her voice. She simply accepted the gold Montblanc pen and signed her maiden name across the document with an unshakeable hand.",
      "\"You genuinely believe Crawford Group survived the private debt crisis three years ago because of your financial acumen, Julian?\" Maya asked softly, her voice carrying a quiet resonance that sliced clean through the rumbling thunder.",
      "Julian threw his head back and laughed, a hollow sound echoing against the marble pillars. \"Of course it was me! What would an orphaned nobody know about syndicated mezzanine debt? Now take your five thousand dollar severance check and leave before I instruct estate security to remove you as a trespasser.\"",
      "Maya didn't touch the check. She turned on her heel and began walking down the long, shadowed driveway toward the wrought-iron perimeter gates.",
      "Just as Julian stepped back inside to close the double mahogany doors, the sharp screech of high-performance tires shattered the stormy night. A motorcade of six armored black Maybachs bearing diplomatic consular flags turned into the gates, headlights cutting through the downpour like laser beams.",
      "Twelve private security enforcers in tailored charcoal suits stepped out into the rain, opening bulletproof umbrellas in unison. An elderly gentleman with silver hair and an aura of immense global authority stepped from the center limousine, instantly dropping to one knee before the soaked young woman.",
      "\"Supreme Commander Maya... on behalf of the Vance Global Board of Governors, we welcome our true matriarch home,\" the elder announced with profound reverence.",
      "Julian's smirk evaporated. Before he could speak, his phone began vibrating violently against his chest. When he pulled it from his pocket, his chief financial officer was screaming hysterically on speakerphone: 'Julian, our primary institutional lender just declared us in default! Vance Global Capital just bought all our outstanding debt—and they're calling in the entire five hundred million dollar balance right now!'",
      "Maya stepped into the warm leather interior of the lead Maybach. Lowering the tinted window by a single inch, she locked eyes with Julian's petrified gaze. 'Thank you for signing, Julian. The real liquidation begins at dawn.'"
    ],
    scenes: [
      {
        caption: "Julian hands Maya the cruel separation contract during the storm.",
        image: "/images/story1_scene1.svg",
        insertAfterParagraph: 2
      },
      {
        caption: "The Vance diplomatic convoy arrives at the gates to salute their matriarch.",
        image: "/images/story1_scene2.svg",
        insertAfterParagraph: 8
      }
    ]
  },
  {
    id: "story-2",
    title: "The Shadow Billionaire Divorce: When She Walked Away with Half the City",
    slug: "the-shadow-billionaire-divorce-when-she-walked-away-with-half-the-city",
    category: "Betrayal & Revenge",
    subcategory: "Wall Street Power Play",
    tags: ["Betrayal", "Revenge", "Billionaire", "Money", "Trending"],
    author: "Marcus Vance",
    publicationDate: new Date(Date.now() - 86400000 * 1).toISOString(),
    status: "published",
    partNumber: 1,
    seriesId: "series-shadow-billionaire",
    nextPartSlug: "the-shadow-billionaire-divorce-part-2",
    nextPartHook: "When Damian rushed to the Federal Reserve bankruptcy hearing, he found Victoria sitting on the judicial panel...",
    views: 31200,
    uniqueVisitors: 24150,
    avgReadTimeSeconds: 345,
    trendingScore: 99.2,
    readTime: "8 min read",
    originalVideoName: "billionaire_silent_divorce_climax.mp4",
    coverImage: "/images/the-shadow-billionaire-divorce-when-she-walked-away-with-half-the-city-cover.svg",
    hookSummary: "For three years, Damian treated Victoria like an insignificant housewife while flaunting his new supermodel mistress. The moment he signed the divorce papers, his $1.2 Billion conglomerate was liquidated in twelve minutes.",
    seoTitle: "The Shadow Billionaire Divorce: When She Walked Away with Half the City | Taleonix",
    seoDescription: "Read the dramatic story of Victoria, who quietly signed her divorce papers and called in a 1.2 billion dollar debt that dismantled her ex-husband's empire.",
    socialTitle: "He offered his quiet wife $5M to leave... 12 minutes later his $1.2B empire was liquidated 😱🔥",
    socialDescription: "She was the anonymous chairwoman of Wall Street's largest private equity fund. Read the full story on Taleonix.",
    paragraphs: [
      "The autumn wind whistled against the floor-to-ceiling glass of the 80th-floor penthouse overlooking Central Park. Damian Sterling tossed an engraved black fountain pen onto the marble conference table, looking down at his wife of three years with unmistakable condescension.",
      "\"Sign it, Victoria,\" Damian ordered, his voice clipped and devoid of warmth. \"Chloe is carrying my heir, and she represents the social elite this family belongs to. You’ve been nothing more than a quiet ghost in this penthouse. Be grateful I’m offering you a five-million-dollar settlement.\"",
      "Standing behind him in an haute couture crimson gown, Chloe smiled with triumphant malice, resting a manicured hand upon Damian’s shoulder. \"Accept reality, Victoria. Some women are destined for the kitchen, and others are born for the throne.\"",
      "Victoria didn’t flinch. She sat composed in the velvet armchair, dressed in an understated cream cashmere sweater. Her deep hazel eyes were serene, utterly devoid of fear or sorrow.",
      "Without uttering a solitary syllable of protest, Victoria picked up the fountain pen and penned her maiden signature across the bottom line with surgical precision.",
      "Damian smirked, convinced he had successfully discarded his inconvenient past. \"You have exactly two hours to collect your personal belongings and vacate the premises.\"",
      "Victoria stood up, smoothed down the pleats of her sweater, and extracted a sleek matte-black titanium satellite phone from her handbag. She dialed a single direct encrypted frequency.",
      "\"Execute Option Delta,\" Victoria spoke calmly into the receiver. \"Liquidate Sterling Holdings’ short positions and call in the 1.2 billion dollar senior bond facility immediately.\"",
      "Damian burst into derisive laughter. \"Option Delta? Who on earth are you pretending to be? The managing partner of Ares Capital?\"",
      "Before the mockery could settle in the room, Damian’s gold Patek Philippe watch and mobile phone began buzzing violently. His chief financial officer burst through the double mahogany penthouse doors, his tie askew, drenched in cold sweat.",
      "\"Damian! We’re ruined!\" the CFO gasped, clutching an emergency margin call notice. \"Ares Private Equity just called in our total syndicated debt! They're liquidating our equity on the New York Stock Exchange in twelve minutes!\"",
      "Damian’s face drained of every drop of color. His trembling gaze pivoted slowly from the panic-stricken CFO back to Victoria, who was now being received at the penthouse elevator by four federal security officers bowing in absolute silence.",
      "\"You always wondered who the anonymous founder of Ares Capital was, Damian,\" Victoria whispered softly as the elevator doors began to glide shut. \"Thank you for signing the divorce. You just lost half the city.\""
    ],
    scenes: [
      {
        caption: "Damian and Chloe demanding Victoria sign the five-million-dollar separation.",
        image: "/images/the-shadow-billionaire-divorce-when-she-walked-away-with-half-the-city-scene1.svg",
        insertAfterParagraph: 2
      },
      {
        caption: "Victoria activates Ares Private Equity as Damian’s empire collapses.",
        image: "/images/the-shadow-billionaire-divorce-when-she-walked-away-with-half-the-city-scene2.svg",
        insertAfterParagraph: 8
      }
    ]
  },
  {
    id: "story-3",
    title: "His Hidden Mafia Queen: The Undercover Waitress of Diner 54",
    slug: "his-hidden-mafia-queen-the-undercover-waitress",
    category: "Mafia & Power",
    subcategory: "Undercover Action Romance",
    tags: ["Mafia", "Undercover", "Action", "Romance", "Trending"],
    author: "Dominic Rossi",
    publicationDate: new Date(Date.now() - 86400000 * 3).toISOString(),
    status: "published",
    partNumber: 1,
    seriesId: "series-hidden-mafia-queen",
    nextPartSlug: "his-hidden-mafia-queen-part-2",
    nextPartHook: "Dante woke up in an underground medical bunker to find Elena loading a sniper rifle...",
    views: 18450,
    uniqueVisitors: 14890,
    avgReadTimeSeconds: 280,
    trendingScore: 94.1,
    readTime: "6 min read",
    originalVideoName: "mafia_boss_saves_waitress.mp4",
    coverImage: "/images/story2_cover.svg",
    hookSummary: "When rival hitmen ambushed mafia kingpin Dante in a 2 AM downtown diner, he expected a bloody end. He never anticipated the shy waitress pouring his coffee would neutralize five armed enforcers in twelve seconds.",
    seoTitle: "His Hidden Mafia Queen: The Undercover Waitress | Taleonix Action",
    seoDescription: "Read the story of Elena, a quiet waitress who took down an entire hit squad to protect syndicate heir Dante Rossi.",
    socialTitle: "They thought she was just a clumsy waitress at 2 AM... watch her reflexes! 😳⚔️",
    socialDescription: "She took down 5 armed hitmen in under 12 seconds. Read the full uncensored episode on Taleonix.",
    paragraphs: [
      "The flickering neon sign outside Diner 54 hummed softly in the damp 2 AM Manhattan fog. Dante Rossi, the undisputed heir to the Eastern Syndicate, sat nursing a black coffee in a corner booth, pressing a cloth against a fresh gunshot graze along his ribs.",
      "Elena approached with the glass coffee pot, her oversized diner apron and loose hair concealing a silhouette that moved with lethal fluidity. 'More coffee, Mr. Rossi?' she asked in a quiet, unassuming voice.",
      "Before Dante could answer, the glass front doors of the diner shattered into thousands of glittering shards. Five masked mercenaries clad in tactical gear and armed with suppressed automatic weapons stormed into the dining room.",
      "\"Rossi! Your bloodline ends tonight!\" the point gunman barked, raising his weapon to Dante's chest.",
      "Dante reached for his concealed sidearm, but his reaction was slowed by loss of blood. In that exact fraction of a second, Elena moved.",
      "In a blinding blur of athletic motion, Elena hurled the boiling glass coffee pot directly into the lead shooter's visor, shattering his tactical goggles and blinding him instantly.",
      "Before the second enforcer could acquire his target, Elena vaulted across the booth table, delivered a devastating roundhouse kick that snapped his collarbone, disarmed his rifle mid-air, and fired three double-taps with terrifying precision.",
      "Within twelve seconds, all five assassins lay neutralized upon the checkerboard floor. Elena calmly ejected the rifle magazine, stepped over the unconscious lead gunman, and wiped a small smudge of coffee from her apron.",
      "\"You owe this diner forty-five dollars for the broken glass pot, Dante Rossi,\" Elena remarked in flawless, aristocratic Sicilian dialect.",
      "Dante stared at her in stunned disbelief, his gun half-drawn. 'Who... who the hell are you?'",
      "Elena reached into her apron pocket and tossed a solid titanium signet ring bearing the crest of the phantom Ghost Syndicate onto his table. 'I’m the guardian your father contracted ten years ago to make sure you lived to take the throne. Now get up—their secondary squad is two minutes out.'"
    ],
    scenes: [
      {
        caption: "Elena neutralizing the tactical ambush in Diner 54.",
        image: "/images/story2_scene1.svg",
        insertAfterParagraph: 6
      }
    ]
  },
  {
    id: "story-4",
    title: "The Undercover Heiress in the Boardroom",
    slug: "the-undercover-heiress-in-the-boardroom",
    category: "Marriage & Relationships",
    subcategory: "Corporate Betrayal",
    tags: ["Marriage", "Corporate", "SecretHeiress", "Betrayal"],
    author: "Sophia Sterling",
    publicationDate: new Date(Date.now() - 86400000 * 4).toISOString(),
    status: "published",
    partNumber: 1,
    seriesId: "series-boardroom-heiress",
    nextPartSlug: "the-undercover-heiress-part-2",
    nextPartHook: "Marcus tried to escape the country via private jet, only to find Sophia standing on the runway...",
    views: 15600,
    uniqueVisitors: 12100,
    avgReadTimeSeconds: 260,
    trendingScore: 91.5,
    readTime: "6 min read",
    originalVideoName: "undercover_heiress_boardroom.mp4",
    coverImage: "/images/the-undercover-heiress-in-the-boardroom-4581-cover.svg",
    hookSummary: "Sent to the company's lowest department as an intern, Sophia discovered her fiancé was embezzling forty million dollars with her treacherous stepsister.",
    seoTitle: "The Undercover Heiress in the Boardroom | Taleonix Drama",
    seoDescription: "Read the story of Sophia, who posed as an intern in her father's empire to expose her treacherous fiancé and stepsister.",
    socialTitle: "She acted like a weak intern until she exposed her fiancé in the boardroom 🤯💼",
    socialDescription: "The most satisfying corporate revenge of the year. Read on Taleonix.",
    paragraphs: [
      "Sophia stood discreetly in the corner of the 50th-floor boardroom, holding a stack of freshly printed financial reports. Her plain horn-rimmed glasses and oversized grey cardigan masked the reality that she owned sixty-five percent of the conglomerate’s voting shares.",
      "\"Intern Sophia, why are these coffee cups still on the table?\" her stepsister Victoria barked loudly, deliberately tossing a binder at Sophia's feet to humiliate her before the executive board.",
      "Her fiancé, Marcus, sat in the executive chairman's seat with a smug smile. 'Victoria is our newly appointed Executive Director, Sophia. Learn your place in this organization.'",
      "Sophia didn't show the slightest hint of anger. She quietly picked up the binder, stepped over to the main projection console, and slotted an encrypted flash drive into the master system.",
      "The massive 8K display screen flickered to life. Instead of quarterly sales summaries, it displayed forensic bank statements detailing forty million dollars in illicit transfers from corporate accounts into offshore Cayman holding companies owned by Marcus and Victoria.",
      "The board members erupted into immediate chaos. Marcus leaped from his chair, knocking his leather seat backward. 'Turn that off right now! Security, arrest this intern for corporate espionage!'",
      "The heavy double doors of the boardroom swung open with sudden force. The chief of the Federal Financial Crimes Division entered, flanked by armed marshals and Sophia's personal legal counsel.",
      "Sophia took off her glasses, letting her dark hair fall over her shoulders as she stood tall with regal authority. 'You won't be arresting the intern today, Marcus. You're arresting my embezzlers.'"
    ],
    scenes: [
      {
        caption: "Sophia reveals the incriminating financial records across the boardroom screen.",
        image: "/images/the-undercover-heiress-in-the-boardroom-4581-scene-1.svg",
        insertAfterParagraph: 4
      }
    ]
  },
  {
    id: "story-5",
    title: "The Stolen Inheritance: The Billionaire's Secret Will",
    slug: "the-stolen-inheritance-the-billionaires-secret-will",
    category: "Money & Inheritance",
    subcategory: "Family Power Struggle",
    tags: ["Inheritance", "Money", "Family", "Drama"],
    author: "Arthur Blackwood",
    publicationDate: new Date(Date.now() - 86400000 * 5).toISOString(),
    status: "published",
    partNumber: 1,
    seriesId: "series-stolen-inheritance",
    nextPartSlug: "the-stolen-inheritance-part-2",
    nextPartHook: "When the safe deposit box was opened in Geneva, the family discovered a second video recording...",
    views: 12400,
    uniqueVisitors: 9800,
    avgReadTimeSeconds: 275,
    trendingScore: 89.2,
    readTime: "5 min read",
    originalVideoName: "stolen_inheritance_reveal.mp4",
    coverImage: "/images/the-shadow-billionaire-divorce-when-she-walked-away-with-half-the-city-cover.svg",
    hookSummary: "After billionaire patriarch Charles passed away, his greedy stepchildren locked out his biological daughter, claiming she was written out of the will. Then the true executor arrived.",
    seoTitle: "The Stolen Inheritance: The Billionaire's Secret Will | Taleonix",
    seoDescription: "Read the story of how the true heiress reclaimed her father's billion-dollar legacy from her deceitful stepfamily.",
    socialTitle: "They threw her out of the funeral claiming she got $0... until the true executor spoke 😱",
    socialDescription: "A gripping tale of justice and legacy. Read the full chapter on Taleonix.",
    paragraphs: [
      "The mahogany reading room at the Blackwood Estate fell dead silent as the family gathered for the official reading of late patriarch Charles Blackwood's last will and testament.",
      "His eldest stepson, Richard, adjusted his silk tie with arrogant confidence, smirking at Charles’s biological daughter, Clara, who sat quietly in the back row wearing a modest black dress.",
      "\"Clara, there is no need for you to be here,\" Richard sneered loudly. \"Father realized before his passing that the Blackwood shipping empire belongs in capable hands, not with an ungrateful artist.\"",
      "Richard’s mother, Beatrice, dabbed dry eyes with a lace handkerchief, nodding in theatrical agreement. 'We have graciously set aside fifty thousand dollars for your relocation expenses, Clara.'",
      "Clara remained motionless, her gaze calm and steady.",
      "At precisely 10:00 AM, the estate doors swung open. Rather than the local family attorney Richard had bribed, the senior partner of London's oldest international trust firm stepped into the room, accompanied by two armed couriers carrying a sealed steel dispatch case.",
      "\"The document Mr. Richard holds is a fraudulent draft revoked eighteen months ago,\" the senior partner announced, his voice echoing with absolute legal finality.",
      "The attorney unlocked the dispatch case and withdrew the authenticated master testament bearing Charles Blackwood's holographic seal. \"To my daughter Clara, I bequeath the entire ninety-two percent voting interest in Blackwood International, all overseas real estate holdings, and the master keys to the family trust. To my stepfamily... I leave exactly one dollar each, provided they vacate the estate within twenty-four hours.\"",
      "Beatrice gasped and collapsed into her chair. Richard lunged forward in disbelief: 'This is impossible! He told me I was his heir!'",
      "Clara stood up and buttoned her tailored black overcoat. 'Father knew you were stealing from the shipyard accounts, Richard. The forensic audit begins this afternoon.'"
    ],
    scenes: [
      {
        caption: "The London executor reveals the authentic holographic will to the stunned family.",
        image: "/images/story1_scene2.svg",
        insertAfterParagraph: 7
      }
    ]
  },
  {
    id: "story-6",
    title: "Shocking Secrets: The DNA Test in the Ballroom",
    slug: "shocking-secrets-the-dna-test-in-the-ballroom",
    category: "Shocking Secrets",
    subcategory: "High Society Scandals",
    tags: ["Secrets", "Family", "Scandal", "Trending"],
    author: "Clarissa Hayes",
    publicationDate: new Date(Date.now() - 86400000 * 6).toISOString(),
    status: "published",
    partNumber: 1,
    seriesId: "series-dna-ballroom",
    nextPartSlug: "shocking-secrets-part-2",
    nextPartHook: "The governor stepped up to the microphone, but his microphone had been routed to the district attorney's recording...",
    views: 14900,
    uniqueVisitors: 11800,
    avgReadTimeSeconds: 290,
    trendingScore: 92.8,
    readTime: "6 min read",
    originalVideoName: "dna_test_ballroom_reveal.mp4",
    coverImage: "/images/story2_cover.svg",
    hookSummary: "At the prestigious annual charity gala, the high-society governor announced his adoptive son as the sole heir—until an anonymous guest projected certified genetic records across the crystal hall.",
    seoTitle: "Shocking Secrets: The DNA Test in the Ballroom | Taleonix",
    seoDescription: "Read the dramatic confrontation at the society gala that unraveled twenty years of high-society deception.",
    socialTitle: "The Governor announced his heir at the gala... until the projection screen turned on 😳🔥",
    socialDescription: "Twenty years of secrets exposed in front of 500 guests. Read on Taleonix.",
    paragraphs: [
      "The Grand Ballroom at the Plaza was filled with over five hundred dignitaries, governors, and Fortune 500 executives for the prestigious annual Hayes Foundation Charity Gala.",
      "Governor Thomas Hayes took the podium beneath the crystal chandeliers, raising a champagne flute to his adopted son, Bradley. \"Tonight, I proudly name Bradley as the future chairman of Hayes Holdings and the sole steward of our family foundation.\"",
      "Bradley stood beside him, beaming with smug triumph, raising his glass toward the applauding high-society crowd.",
      "Suddenly, the grand orchestral music abruptly cut out. The colossal 4K projection screens on both sides of the stage flickered with static.",
      "Instead of the foundation tribute video, a certified genetic forensic report from Johns Hopkins appeared in razor-sharp detail across every screen in the hall.",
      "The audience gasped in unison. The document clearly proved that Bradley had zero biological relation to the family—and revealed an encrypted offshore trust fund established twenty-two years ago under the name of the true, missing Hayes daughter.",
      "A young investigative journalist in the third row, Rachel, stood up and walked steadily toward the stage, clutching her mother’s antique sapphire locket.",
      "\"Governor Hayes,\" Rachel's voice resonated through the wireless microphone system. \"Perhaps you should explain to your donors why you sent your real daughter to an orphanage twenty-two years ago to protect your political campaign.\"",
      "Thomas turned ashen white, clutching the podium as the media press photographers unleashed a barrage of camera flashes that illuminated the room like lightning."
    ],
    scenes: [
      {
        caption: "Rachel confronts Governor Hayes as the genetic records display across the ballroom.",
        image: "/images/story1_scene1.svg",
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
    storyTitle: "The Discarded Heiress: When the $90 Billion Vance Matriarch Returned",
    processedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    facebookAssets: {
      caption: "He kicked his 'broke' wife out in the pouring rain... until 6 diplomatic Maybachs pulled up outside the gates 😱🔥 Full uncensored story here 👇",
      pinnedComment: "The full story — including what happened when Julian saw the $500M default notice — is here 👇\n{{STORY_URL}}",
      shortCta: "Read Full Story → {{STORY_URL}}"
    },
    captions: {
      facebook: "He thought she was just a penniless charity case... until the Vance Empire arrived at his gates! 😱 Full story below.",
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
    videoFileName: "billionaire_silent_divorce_climax.mp4",
    videoUrl: "/videos/sample_drama_1.mp4",
    storyId: "story-2",
    storySlug: "the-shadow-billionaire-divorce-when-she-walked-away-with-half-the-city",
    storyTitle: "The Shadow Billionaire Divorce: When She Walked Away with Half the City",
    processedAt: new Date(Date.now() - 86400000 * 1).toISOString(),
    facebookAssets: {
      caption: "He offered his quiet wife $5M to leave for a supermodel... 12 minutes later his $1.2B empire was liquidated 😱🔥 Read the full confrontation below 👇",
      pinnedComment: "The full story — including what Victoria said when his CFO burst through the door — is here 👇\n{{STORY_URL}}",
      shortCta: "Read Full Story → {{STORY_URL}}"
    },
    captions: {
      facebook: "He divorced his quiet wife for a supermodel... 12 minutes later his $1.2B empire was liquidated 😱🔥",
      tiktok: "He divorced his quiet wife for a supermodel... 12 minutes later his $1.2B empire was liquidated 😱🔥 #BillionaireRevenge #DramaTok #PlotTwist",
      reels: "He offered her $5M to leave. He didn't know she owns the fund controlling his entire company! Read what happened next in bio 📲",
      shorts: "The most satisfying billionaire revenge ending! Watch what happens next ⬇️"
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
        text: "🔥 Full uncensored story live on Taleonix free today ➡️ {{STORY_URL}}"
      }
    ]
  }
];

const INITIAL_ANALYTICS = {
  overview: {
    totalPageviews: 48920,
    uniqueVisitors: 36410,
    usTrafficPercentage: 76.8,
    avgReadTimeSeconds: 295,
    pagesPerSession: 2.84,
    estimatedAdSenseRevenueUsd: 842.50,
    actualConnectedRevenueUsd: 0.00,
    averageRpmUsd: 22.40,
    adImpressions: 138920,
    adCtr: "3.65%"
  },
  facebookCampaigns: [
    { campaign: "fb_page_1_billionaire", name: "Page 1: Billionaire Reels", visitors: 14200, pageviews: 28400, pagesPerSession: 2.9, usShare: "78.4%", avgTime: "4m 12s" },
    { campaign: "fb_page_2_revenge", name: "Page 2: Revenge Stories", visitors: 9800, pageviews: 18600, pagesPerSession: 2.7, usShare: "75.2%", avgTime: "3m 48s" },
    { campaign: "fb_page_3_mafia", name: "Page 3: Mafia Romance", visitors: 6400, pageviews: 12200, pagesPerSession: 2.6, usShare: "74.1%", avgTime: "3m 22s" },
    { campaign: "fb_page_4_secrets", name: "Page 4: Shocking Secrets", visitors: 4100, pageviews: 7800, pagesPerSession: 2.5, usShare: "76.0%", avgTime: "3m 05s" },
    { campaign: "fb_page_5_family", name: "Page 5: Family Drama", visitors: 2800, pageviews: 5100, pagesPerSession: 2.4, usShare: "72.8%", avgTime: "2m 55s" },
    { campaign: "fb_page_6_general", name: "Page 6: Viral Shorts", visitors: 1950, pageviews: 3400, pagesPerSession: 2.3, usShare: "70.5%", avgTime: "2m 40s" }
  ],
  trafficSources: [
    { source: "Facebook Network (10-15 Pages)", visitors: 26850, percentage: 73.7 },
    { source: "TikTok Shorts", visitors: 4820, percentage: 13.2 },
    { source: "Instagram Reels", visitors: 3210, percentage: 8.8 },
    { source: "Organic Search & Direct", visitors: 1530, percentage: 4.3 }
  ],
  geoBreakdown: [
    { country: "United States 🇺🇸", visitors: 27960, percentage: 76.8, rpm: "$28.40" },
    { country: "United Kingdom 🇬🇧", visitors: 3780, percentage: 10.4, rpm: "$21.10" },
    { country: "Canada 🇨🇦", visitors: 2840, percentage: 7.8, rpm: "$19.50" },
    { country: "Australia 🇦🇺", visitors: 1240, percentage: 3.4, rpm: "$18.20" },
    { country: "Other Countries 🌍", visitors: 590, percentage: 1.6, rpm: "$6.80" }
  ],
  dailyViews: [
    { date: "Mon", views: 4850, usViews: 3720, revenue: "$98.20" },
    { date: "Tue", views: 6420, usViews: 4940, revenue: "$132.50" },
    { date: "Wed", views: 7900, usViews: 6080, revenue: "$164.40" },
    { date: "Thu", views: 9200, usViews: 7120, revenue: "$192.70" },
    { date: "Fri", views: 10600, usViews: 8180, revenue: "$221.90" },
    { date: "Sat", views: 12460, usViews: 9580, revenue: "$264.90" }
  ],
  recentVisitors: [
    { time: "1 min ago", drama: "The Shadow Billionaire Divorce", country: "United States (California)", device: "iPhone (Safari)", referrer: "Facebook Page 1 (Reel #12)", campaign: "fb_page_1_billionaire" },
    { time: "2 mins ago", drama: "The Discarded Heiress", country: "United States (Texas)", device: "Android (Facebook App)", referrer: "Facebook Page 2 (Pinned Link)", campaign: "fb_page_2_revenge" },
    { time: "4 mins ago", drama: "His Hidden Mafia Queen", country: "United States (New York)", device: "iPhone (Safari)", referrer: "Facebook Page 3 (Reel #4)", campaign: "fb_page_3_mafia" },
    { time: "7 mins ago", drama: "The Undercover Heiress", country: "United States (Florida)", device: "Android (Chrome)", referrer: "Facebook Page 1 (Story #8)", campaign: "fb_page_1_billionaire" },
    { time: "9 mins ago", drama: "The Stolen Inheritance", country: "United Kingdom (London)", device: "iPhone", referrer: "Facebook Page 4", campaign: "fb_page_4_secrets" }
  ]
};

const INITIAL_SETTINGS = {
  geminiApiKey: process.env.GEMINI_API_KEY || "",
  adminPasswordHash: "1234",
  siteName: "Taleonix",
  siteTagline: "US Drama Stories & High-Retention Digital Publication",
  domainUrl: "https://drama-online.onrender.com",
  adsenseClientId: "ca-pub-3806896432302528",
  enableAdSenseSimulation: true,
  autoProcessFolder: true,
  wpUrl: "",
  wpUsername: "",
  wpAppPassword: ""
};

// High-Throughput In-Memory Caches for 1M+ Readers
let memoryStories = null;
let memoryMarketing = null;
let memoryAnalytics = null;
let memorySettings = null;

module.exports = {
  getStories: () => {
    if (!memoryStories) memoryStories = readJSON(STORIES_FILE, INITIAL_STORIES);
    return memoryStories;
  },
  saveStories: (data) => {
    memoryStories = data;
    writeJSON(STORIES_FILE, data);
  },
  getMarketingItems: () => {
    if (!memoryMarketing) memoryMarketing = readJSON(MARKETING_FILE, INITIAL_MARKETING);
    return memoryMarketing;
  },
  saveMarketingItems: (data) => {
    memoryMarketing = data;
    writeJSON(MARKETING_FILE, data);
  },
  getAnalytics: () => {
    if (!memoryAnalytics) memoryAnalytics = readJSON(ANALYTICS_FILE, INITIAL_ANALYTICS);
    return memoryAnalytics;
  },
  saveAnalytics: (data) => {
    memoryAnalytics = data;
    writeJSON(ANALYTICS_FILE, data);
  },
  getSettings: () => {
    if (!memorySettings) memorySettings = readJSON(SETTINGS_FILE, INITIAL_SETTINGS);
    return memorySettings;
  },
  saveSettings: (data) => {
    memorySettings = data;
    writeJSON(SETTINGS_FILE, data);
  }
};
