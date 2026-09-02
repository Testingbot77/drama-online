const fs = require('fs');
const path = require('path');
const db = require('./server/db');

const stories = db.getStories();

// Define Part 3 Grand Finale chapters for top flagship sagas
const PART_3_FINAL_CHAPTERS = [
  // 1. The Discarded Heiress - Part 3 Finale
  {
    id: "story-1-p3",
    title: "The Discarded Heiress (Part 3 - Grand Finale): The Vance Sovereign Gala",
    slug: "the-discarded-heiress-part-3-the-sovereign-gala",
    category: "Billionaire Drama",
    subcategory: "Sovereign Rebirth",
    tags: ["Billionaire", "Part3", "Finale", "Revenge", "Trending"],
    author: "Elena Vance",
    publicationDate: new Date(Date.now() - 86400000 * 0.5).toISOString(),
    status: "published",
    partNumber: 3,
    seriesId: "series-vance-heiress",
    previousPartSlug: "the-discarded-heiress-part-2-the-takeover",
    views: 35400,
    uniqueVisitors: 29800,
    avgReadTimeSeconds: 540,
    trendingScore: 99.9,
    readTime: "11 min read",
    coverImage: "/images/silent_wife_gala_revenge_1788342326260.jpg",
    hookSummary: "At the Metropolitan Museum Sovereign Gala, Julian worked as a disgraced valet attendant outside while Maya stepped onto the royal balcony as the newly crowned Matriarch of Vance Global.",
    paragraphs: [
      "[ THE METROPOLITAN MUSEUM OF ART, NEW YORK — 07:30 PM ]",
      "The Fifth Avenue entrance of the Metropolitan Museum was illuminated by thousands of golden luminescent lanterns. Red carpets cascaded down the grand stone staircases, flanked by hundreds of media correspondents from Bloomberg, Forbes, and the Wall Street Journal.",
      "In the bitter autumn wind at the edge of the street, Julian Crawford shivered in a cheap valet parking jacket. Having lost his company, his Greenwich mansion, and his reputation, he had been forced to take a minimum-wage service job just to pay his court-mandated legal fines.",
      "Beside him, Evelyn stood crying in a frayed coat, watching her former socialite friends arrive in chauffeured Bentleys and Rolls-Royces without acknowledging her existence.",
      "\"Julian... this is your fault!\" Evelyn sobbed bitterly. \"You threw away the Vance heiress for five minutes of pride!\"",
      "Julian stared down at his cracked shoes, the bitter reality of his foolishness burning in his chest like acid. He remembered how Maya had quietly cooked his dinners, packed his vitamins, and sustained his entire family while he treated her like a servant.",
      "Suddenly, the entire avenue fell into awed silence as twelve armored Rolls-Royce Phantoms with diplomatic escorts arrived in flawless formation.",
      "The door of the center vehicle opened. Maya stepped onto the red carpet in a bespoke sapphire velvet Dior couture gown, adorned with a hundred-carat family heirloom diamond tiara that sparkled like the northern stars.",
      "Flanked by the Vance Global Council of Governors, she ascended the grand stairs with unmatched aristocratic grace and sovereign majesty.",
      "As Maya reached the top landing, she paused and looked down at the crowd. For a brief split second, her emerald gaze met Julian’s hollow, broken eyes.",
      "There was no malice in her gaze, no anger—only the quiet, serene pity of a sovereign looking down upon a forgotten stranger.",
      "Maya turned, smiled at the welcoming applause of international heads of state, and walked through the gilded bronze museum doors into her destiny.",
      "The Crawford name was history. The Vance dynasty had taken the throne."
    ],
    scenes: [
      {
        caption: "Maya arrives at the Met Gala in sapphire velvet couture.",
        image: "/images/silent_wife_gala_revenge_1788342326260.jpg",
        insertAfterParagraph: 7
      },
      {
        caption: "Julian Crawford watches from the street in complete humiliation.",
        image: "/images/the-discarded-heiress-billionaires-secret-vow.jpg",
        insertAfterParagraph: 10
      }
    ]
  },

  // 2. The Shadow Billionaire Divorce - Part 3 Finale
  {
    id: "story-2-p3",
    title: "The Shadow Billionaire Divorce (Part 3 - Grand Finale): The Ares Mega-Merger",
    slug: "the-shadow-billionaire-divorce-part-3-the-merger",
    category: "Betrayal & Revenge",
    subcategory: "Wall Street Victory",
    tags: ["Betrayal", "Part3", "Finale", "Billionaire", "Trending"],
    author: "Marcus Vance",
    publicationDate: new Date(Date.now() - 86400000 * 0.5).toISOString(),
    status: "published",
    partNumber: 3,
    seriesId: "series-shadow-billionaire",
    previousPartSlug: "the-shadow-billionaire-divorce-part-2",
    views: 39100,
    uniqueVisitors: 32600,
    avgReadTimeSeconds: 530,
    trendingScore: 99.8,
    readTime: "10 min read",
    coverImage: "/images/contract_marriage_ceo_1788341951869.jpg",
    hookSummary: "Inside the Federal Reserve Grand Assembly, Victoria announced the multi-billion dollar acquisition of Manhattan's commercial waterfront, cementing her place as Wall Street's undisputed Queen.",
    paragraphs: [
      "[ FEDERAL RESERVE BANK OF NEW YORK — 11:00 AM ]",
      "The Great Hall of the Federal Reserve was filled to capacity with three hundred managing directors, sovereign wealth fund chairs, and federal regulators.",
      "Victoria stood at the podium in a tailored cream bespoke pantsuit, flanked by the Chairman of the SEC and the Governor of the Federal Reserve.",
      "\"Today, Ares Private Equity concludes the restructuring of the former Sterling Holdings portfolio. All employee pension funds have been fully restored with a twelve percent dividend guarantee, and sixty thousand jobs across North America have been saved.\"",
      "The entire assembly erupted into thunderous standing applause.",
      "In the back row, Damian’s father, the former patriarch of the Sterling family, approached Victoria with tears in his eyes, offering a deep, respectful bow.",
      "\"Victoria... on behalf of the Sterling elders, I beg your forgiveness. We allowed Damian’s arrogance to blind us to the guardian angel who protected this family for three years.\"",
      "Victoria smiled gently, placing a hand on the old man's shoulder. 'Do not despair, Elder Sterling. The past is forgiven, but the future belongs to those who build with integrity.'",
      "Victoria walked out onto Wall Street, looking up at the towering skyscrapers reflecting the clear blue sky.",
      "She had walked away with half the city, not through cruelty, but through unmatched courage and sovereign power."
    ],
    scenes: [
      {
        caption: "Victoria announces the successful restructuring at the Federal Reserve.",
        image: "/images/contract_marriage_ceo_1788341951869.jpg",
        insertAfterParagraph: 4
      }
    ]
  },

  // 3. His Hidden Mafia Queen - Part 3 Finale
  {
    id: "story-3-p3",
    title: "His Hidden Mafia Queen (Part 3 - Grand Finale): The Queen's Throne",
    slug: "his-hidden-mafia-queen-part-3-the-syndicate-coronation",
    category: "Mafia & Power",
    subcategory: "Underworld Peace",
    tags: ["Mafia", "Part3", "Finale", "Action", "Romance"],
    author: "Dominic Rossi",
    publicationDate: new Date(Date.now() - 86400000 * 0.5).toISOString(),
    status: "published",
    partNumber: 3,
    seriesId: "series-hidden-mafia-queen",
    previousPartSlug: "his-hidden-mafia-queen-part-2",
    views: 31200,
    uniqueVisitors: 25400,
    avgReadTimeSeconds: 510,
    trendingScore: 97.9,
    readTime: "10 min read",
    coverImage: "/images/dons_silent_guardian_1788342372385.jpg",
    hookSummary: "With the rival syndicates neutralized, Elena and Dante united the Five Families, forging an era of absolute loyalty and justice across the Eastern Seaboard.",
    paragraphs: [
      "[ THE ROSSI ESTATE, STATEN ISLAND — 09:00 PM ]",
      "The grand ballroom of the Rossi Estate was lined with seventy captains from all Five Families. Every underboss wore their formal dark suits and placed their signet rings upon the marble table in submission.",
      "At the head of the twin thrones sat Dante Rossi and Elena Vance, united by blood, battle, and unshakeable loyalty.",
      "Elena looked over the gathered captains, her voice quiet but carrying the authority of ten thousand soldiers: 'The era of treachery, extortion, and innocent bloodshed ends tonight. The Syndicate protects this city; it does not prey upon it.'",
      "All seventy captains dropped to one knee in unanimous allegiance: 'Long live the Queen! Long live Supreme Commander Elena!'",
      "Dante turned to Elena, taking her hand with deep tenderness. 'You started as a waitress in my diner, and you became the protector of my soul.'",
      "Elena smiled, her fierce eyes softening with profound love. 'I was never just a waitress, Dante. I was your destiny.'"
    ],
    scenes: [
      {
        caption: "The Five Families pledge loyalty to Elena and Dante at the Staten Island Estate.",
        image: "/images/dons_silent_guardian_1788342372385.jpg",
        insertAfterParagraph: 4
      }
    ]
  },

  // 4. The Contract Marriage - Part 3 Finale
  {
    id: "story-4-p3",
    title: "The Contract Marriage (Part 3 - Grand Finale): The Global Horizon Summit",
    slug: "the-contract-marriage-part-3-the-global-summit",
    category: "Marriage & Relationships",
    subcategory: "Billionaire Eternal Vows",
    tags: ["Marriage", "Part3", "Finale", "CEO", "Romance"],
    author: "Charlotte Hayes",
    publicationDate: new Date(Date.now() - 86400000 * 0.5).toISOString(),
    status: "published",
    partNumber: 3,
    seriesId: "series-crippled-ceo",
    previousPartSlug: "the-contract-marriage-part-2",
    views: 33400,
    uniqueVisitors: 27100,
    avgReadTimeSeconds: 520,
    trendingScore: 98.4,
    readTime: "10 min read",
    coverImage: "/images/contract_marriage_ceo_1788341951869.jpg",
    hookSummary: "At the Global Economic Summit in Geneva, Liam presented Hannah with a billion-dollar charitable foundation in her name, sealing their eternal love before the world.",
    paragraphs: [
      "[ PALAIS DES NATIONS, GENEVA — 02:00 PM ]",
      "The assembly hall in Geneva was filled with international leaders and global philanthropists for the announcement of the Horizon Foundation.",
      "Liam Montgomery stood at the grand lectern holding Hannah's hand. Three years after they signed their contract marriage in secret, they stood as the most admired couple in global enterprise.",
      "\"When I was broken and betrayed by my own blood, Hannah gave me courage. She did not marry me for billions; she married me when I was in a wheelchair with no hope.\"",
      "Liam turned to Hannah, presenting her with the master deed to the Hannah Montgomery Medical Trust, funded with two billion dollars to provide free pediatric surgical care worldwide.",
      "Tears filled Hannah's eyes as the entire assembly gave a five-minute standing ovation.",
      "Liam kissed her hand tenderly before the world's cameras. 'Our contract marriage is officially dissolved, Hannah. Today, I ask you to marry me for real, forever.'"
    ],
    scenes: [
      {
        caption: "Liam and Hannah announce the Horizon Foundation in Geneva.",
        image: "/images/contract_marriage_ceo_1788341951869.jpg",
        insertAfterParagraph: 4
      }
    ]
  }
];

// Update linkages for Part 2 stories so they point to Part 3
const s1p2 = stories.find(s => s.slug === "the-discarded-heiress-part-2-the-takeover");
if (s1p2) {
  s1p2.nextPartSlug = "the-discarded-heiress-part-3-the-sovereign-gala";
  s1p2.nextPartHook = "🔥 Read Chapter 3 (Grand Finale): The Vance Sovereign Gala at the Met!";
}

const s2p2 = stories.find(s => s.slug === "the-shadow-billionaire-divorce-part-2");
if (s2p2) {
  s2p2.nextPartSlug = "the-shadow-billionaire-divorce-part-3-the-merger";
  s2p2.nextPartHook = "🔥 Read Chapter 3 (Grand Finale): The Ares Mega-Merger at the Federal Reserve!";
}

const s3p2 = stories.find(s => s.slug === "his-hidden-mafia-queen-part-2");
if (s3p2) {
  s3p2.nextPartSlug = "his-hidden-mafia-queen-part-3-the-syndicate-coronation";
  s3p2.nextPartHook = "🔥 Read Chapter 3 (Grand Finale): The Queen's Throne and the Five Families!";
}

const s4p2 = stories.find(s => s.slug === "the-contract-marriage-part-2");
if (s4p2) {
  s4p2.nextPartSlug = "the-contract-marriage-part-3-the-global-summit";
  s4p2.nextPartHook = "🔥 Read Chapter 3 (Grand Finale): The Global Horizon Summit in Geneva!";
}

// Add Part 3 stories to master list
PART_3_FINAL_CHAPTERS.forEach(p3 => {
  const existingIdx = stories.findIndex(s => s.slug === p3.slug);
  if (existingIdx >= 0) {
    stories[existingIdx] = p3;
  } else {
    stories.push(p3);
  }
});

db.saveStories(stories);
console.log(`Master catalog finalized! Total published chapters: ${stories.length}`);
