const fs = require('fs');
const path = require('path');
const db = require('./server/db');

const currentStories = db.getStories();

// Create Part 2 stories for all 12 series
const PART_2_STORIES = [
  // 1. The Discarded Heiress - Part 2
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
    views: 29400,
    uniqueVisitors: 24100,
    avgReadTimeSeconds: 320,
    trendingScore: 99.1,
    readTime: "7 min read",
    coverImage: "/images/the-discarded-heiress-billionaires-secret-vow.jpg",
    hookSummary: "When Julian Crawford rushed to the emergency bankruptcy hearing at 9:00 AM, he found Maya sitting at the head of the Vance Global Board of Governors in a bespoke white couture suit.",
    paragraphs: [
      "The torrential rain had cleared by daybreak, replaced by the piercing November sun reflecting off the glass facade of the Vance Global Financial Tower in Midtown Manhattan.",
      "Julian Crawford hurried through the double security revolving doors, his bespoke tie askew and dark circles carved under his bloodshot eyes. He had spent the entire night frantically calling Wall Street investment banks, only to find that every credit line in North America had been frozen solid by order of Vance Global Capital.",
      "Evelyn scurried behind him in her high heels, clutching her designer handbag in growing panic. 'Julian, my father said if the Crawford Group defaults today, our engagement is officially over!'",
      "\"Shut up, Evelyn!\" Julian snapped, wiping cold sweat from his brow as the high-speed elevator shot up to the 90th-floor Executive Sovereign Suite.",
      "When the gold elevator doors slid open with a whisper, twenty corporate attorneys and forensic auditors turned to look at him with cold detachment.",
      "At the end of the eighty-foot Brazilian rosewood boardroom table sat a solitary figure surrounded by six bodyguards. Maya was clad in a tailored ivory couture suit, her dark hair pinned in a regal updo, holding a master liquidation docket with a diamond-encrusted pen.",
      "Julian's knees nearly gave out beneath him. \"M-Maya... what is this sick joke? Why are you sitting in the Chairwoman's seat?!\"",
      "The Chief Legal Officer of Vance Global stepped forward, his voice echoing with absolute authority: 'Mr. Crawford, you are addressing Supreme Commander Maya Vance, sole beneficiary of the ninety-billion-dollar Vance Family Trust and ninety-eight percent majority shareholder of your debt.'",
      "Julian stumbled forward, pleading with outstretched hands. 'Maya... please! We were married for five years! Think of the memories! You can have fifty percent of Crawford Group!'",
      "Maya placed the gold pen down and looked at him with icy calm. 'When I asked you for basic human dignity in the rain yesterday, Julian, you gave me a five-thousand-dollar severance check. Today, Vance Global is acquiring Crawford Group for exactly one dollar.'",
      "Two armed federal marshals stepped up behind Julian and Evelyn, presenting formal arrest warrants for corporate embezzlement and tax evasion.",
      "As Julian was escorted out in handcuffs, Maya turned back to the panoramic window overlooking New York Harbor, whispering softly to the morning horizon: 'The debt is paid.'"
    ],
    scenes: [
      { caption: "Maya receives Julian in the 90th-floor boardroom as Crawford Group is liquidated.", image: "/images/the-discarded-heiress-billionaires-secret-vow-scene-1.jpg", insertAfterParagraph: 5 }
    ]
  },

  // 2. The Shadow Billionaire Divorce - Part 2
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
    views: 38200,
    uniqueVisitors: 31000,
    avgReadTimeSeconds: 335,
    trendingScore: 99.5,
    readTime: "8 min read",
    coverImage: "/images/the-shadow-billionaire-divorce-when-she-walked-away-with-half-the-city.jpg",
    hookSummary: "Damian rushed to the Federal Bankruptcy Court hoping to hide his offshore funds, only to find Victoria presiding over the restructuring committee with the Department of Justice.",
    paragraphs: [
      "The courtroom of the United States Southern District of New York was packed with international financial reporters and Wall Street executives. Damian Sterling sat at the defense table, his hands trembling as he stared at the judicial docket.",
      "Within forty-eight hours of signing the divorce contract, Sterling Holdings’ share price had crashed from one hundred and forty dollars to twenty-two cents. Every bank in Switzerland had shut down his accounts.",
      "His mistress Chloe sat two rows behind him, already wearing cheap sunglasses and trying to avoid the press cameras that flashed outside the courtroom doors.",
      "\"All rise for the Chief Special Master of the Federal Financial Reconstruction Panel,\" the bailiff called out.",
      "The oak side doors opened. Victoria entered the courtroom wearing a tailored charcoal judicial suit, accompanied by four Department of Justice prosecutors.",
      "Damian jumped up from his chair in disbelief, knocking over his leather briefcase. \"Your Honor! This is a conflict of interest! That woman is my bitter ex-wife! She orchestrated this entire collapse!\"",
      "Victoria took her seat at the high mahogany bench, her gaze piercing through Damian’s frantic excuses. 'Mr. Sterling, you are mistaken. Ares Capital did not cause your insolvency. Your own criminal embezzlement of employee pension funds over the last seven years caused your insolvency.'",
      "Victoria waved her hand, and the courtroom projection monitors displayed five hundred pages of authenticated forensic transaction records, tracking Damian’s illegal offshore shell accounts in Panama.",
      "Chloe gasped and tried to slip out the back doors, only to be detained by two FBI agents waiting in the hallway.",
      "Victoria looked down from the bench with cold, razor-sharp finality. 'The assets of Sterling Holdings are hereby transferred to the employee pension trust. Mr. Sterling, you are remanded into federal custody without bail.'",
      "As the wooden gavel struck the sound block, Damian collapsed into his seat, realizing that the quiet wife he had dismissed as a ghost had just rewritten his destiny forever."
    ],
    scenes: [
      { caption: "Victoria presides over the federal bankruptcy restructuring panel.", image: "/images/the-shadow-billionaire-divorce-when-she-walked-away-with-half-the-city-scene-1.jpg", insertAfterParagraph: 4 }
    ]
  },

  // 3. His Hidden Mafia Queen - Part 2
  {
    id: "story-3-p2",
    title: "His Hidden Mafia Queen (Part 2): The Syndicate Crown",
    slug: "his-hidden-mafia-queen-part-2",
    category: "Mafia & Power",
    subcategory: "Underworld Coronation",
    tags: ["Mafia", "Part2", "Action", "Romance"],
    author: "Dominic Rossi",
    publicationDate: new Date(Date.now() - 86400000 * 2).toISOString(),
    status: "published",
    partNumber: 2,
    seriesId: "series-hidden-mafia-queen",
    previousPartSlug: "his-hidden-mafia-queen-the-undercover-waitress",
    views: 24500,
    uniqueVisitors: 19800,
    avgReadTimeSeconds: 290,
    trendingScore: 96.2,
    readTime: "7 min read",
    coverImage: "/images/his-hidden-mafia-queen-the-undercover-waitress.jpg",
    hookSummary: "Dante woke up in an underground armored bunker to find Elena loading tactical rifles as seventy syndicate soldiers bowed before her imperial crest.",
    paragraphs: [
      "The sterile underground medical bunker beneath Queens hummed with the steady beep of heart rate monitors. Dante Rossi opened his eyes, feeling the tight bandages strapped across his ribs.",
      "Beside the stainless-steel gun racks, Elena had shed her diner apron, now clad in combat leather and loading specialized armor-piercing magazines into a suppressed tactical rifle.",
      "\"You should be resting, Dante,\" Elena said without looking back, her voice crisp and tactical.",
      "Dante sat up slowly, staring at the titanium Ghost Syndicate signet ring resting on the steel bedside table. 'My father died three months ago. He told me the Ghost Syndicate was a myth... a legend to keep rival families from attacking our docks.'",
      "Elena chambered a round with a smooth, metallic snap and turned around. Her eyes were piercing and fierce. 'Your father hired my bloodline twenty years ago when the traitorous Moretti family tried to execute your entire lineage.'",
      "The heavy reinforced steel blast doors hissed open. Sixty elite syndicate soldiers clad in black tactical uniforms filed in, standing at rigid attention before dropping to one knee.",
      "\"Supreme Commander Elena... the Moretti family convoy has arrived at the abandoned naval shipyard. They believe Dante is dead and have come to claim the city,\" the point commander announced.",
      "Elena picked up her trench coat, stepped over to Dante, and handed him a custom pearl-handled Beretta. 'Are you ready to claim your birthright, Dante? Or do you plan on hiding in a corner booth forever?'",
      "Dante smiled, gripping the sidearm as adrenaline surged through his veins. 'Let’s finish what they started.'",
      "Together, they walked out through the blast doors into the foggy Manhattan night to end the underworld war once and for all."
    ],
    scenes: [
      { caption: "Elena and Dante prepare the counter-ambush at the naval shipyard.", image: "/images/his-hidden-mafia-queen-the-undercover-waitress-scene-1.jpg", insertAfterParagraph: 5 }
    ]
  },

  // 4. The Contract Marriage - Part 2
  {
    id: "story-4-p2",
    title: "The Contract Marriage (Part 2): The Horizon Assembly",
    slug: "the-contract-marriage-part-2",
    category: "Marriage & Relationships",
    subcategory: "Billionaire Coronation",
    tags: ["Marriage", "Part2", "CEO", "Romance"],
    author: "Charlotte Hayes",
    publicationDate: new Date(Date.now() - 86400000 * 1).toISOString(),
    status: "published",
    partNumber: 2,
    seriesId: "series-crippled-ceo",
    previousPartSlug: "the-contract-marriage-when-the-crippled-ceo-walked",
    views: 28100,
    uniqueVisitors: 22400,
    avgReadTimeSeconds: 310,
    trendingScore: 97.8,
    readTime: "7 min read",
    coverImage: "/images/the-contract-marriage-when-the-crippled-ceo-walked.jpg",
    hookSummary: "When Uncle George tried to lock the board assembly doors and declare himself CEO, Liam and Hannah stepped onto the auditorium stage flanked by federal investigators.",
    paragraphs: [
      "The Grand Auditorium at Horizon Tower was packed with five hundred institutional shareholders and financial reporters for the emergency leadership vote.",
      "Uncle George stood at the main podium, pounding his fist against the mahogany stand. \"Liam Montgomery is medically incapacitated! As senior director, I officially declare myself Chief Executive Officer and Chairman of Horizon Group!\"",
      "His treacherous daughter Grace stood to the side, already preparing her victory speech.",
      "Suddenly, the heavy double auditorium doors flew open with a resounding boom.",
      "Liam walked down the center carpeted aisle with commanding athletic strides, holding Hannah’s hand in his own. He was dressed in an impeccable three-piece charcoal Savile Row suit, radiating unmatched corporate majesty.",
      "The entire auditorium erupted into absolute chaos. Shareholders leaped to their feet, and hundreds of press cameras flashed in blinding unison.",
      "\"George Montgomery,\" Liam’s deep voice resonated across the public address speakers. \"You orchestrated the sabotage of my private aircraft three years ago and attempted to forge board resolutions to steal Horizon Group.\"",
      "Behind Liam, the Director of the Federal Bureau of Investigation stepped onto the stage, holding authenticated audio wiretaps and forensic flight data recorder transcripts.",
      "George collapsed against the podium, clutching his chest as federal agents surrounded the stage to place handcuffs around his wrists.",
      "Liam stepped to the podium, put his arm tenderly around Hannah's waist, and smiled before the cameras of the world. 'My wife protected me when the world thought I was broken. Today, she is named Co-Chairwoman of Horizon Group with absolute executive authority.'",
      "The auditorium erupted into thunderous standing ovations as Hannah shed tears of profound joy, knowing their trials were finally over."
    ],
    scenes: [
      { caption: "Liam and Hannah take the podium as Uncle George is arrested.", image: "/images/the-contract-marriage-when-the-crippled-ceo-walked-scene-1.jpg", insertAfterParagraph: 6 }
    ]
  },

  // 5. The Stolen Inheritance - Part 2
  {
    id: "story-5-p2",
    title: "The Stolen Inheritance (Part 2): The Geneva Vault",
    slug: "the-stolen-inheritance-part-2",
    category: "Money & Inheritance",
    subcategory: "Global Wealth Legacy",
    tags: ["Inheritance", "Part2", "Money", "Justice"],
    author: "Arthur Blackwood",
    publicationDate: new Date(Date.now() - 86400000 * 2).toISOString(),
    status: "published",
    partNumber: 2,
    seriesId: "series-stolen-inheritance",
    previousPartSlug: "the-stolen-inheritance-the-billionaires-secret-will",
    views: 19800,
    uniqueVisitors: 15900,
    avgReadTimeSeconds: 280,
    trendingScore: 92.5,
    readTime: "6 min read",
    coverImage: "/images/the-stolen-inheritance-the-billionaires-secret-will.jpg",
    hookSummary: "When Clara unlocked her late father's master safe deposit vault in Zurich, she uncovered a recorded video testament that sent her corrupt stepfamily to federal prison.",
    paragraphs: [
      "The subterranean security vault of Banque Privée de Genève was guarded by biometric iris scanners and three-foot-thick solid titanium blast doors.",
      "Clara stepped into the private viewing salon accompanied by London executor Arthur Blackwood and the Swiss bank’s Chief Managing Director.",
      "The vault technician placed Master Safe Deposit Box #001 upon the polished mahogany table and turned the dual cryptographic keys.",
      "Inside the velvet-lined box lay a high-resolution holographic crystal drive and the master deeds to forty international shipping fleets.",
      "When the drive was slotted into the console, late patriarch Charles Blackwood's holographic recording flickered to life in the room.",
      "\"Clara, my beloved daughter... if you are watching this, Richard and Beatrice have attempted to forge my testament just as I anticipated,\" the late patriarch’s voice resonated with warmth and razor-sharp intellect.",
      "The video displayed undeniable audio-visual recordings of Richard and Beatrice negotiating with a fraudulent notary to forge signatures while Charles was in the hospital.",
      "Executor Blackwood closed the case with a satisfied nod. 'This evidence has already been forwarded to the High Court of Justice in London and the Crown Prosecution Service.'",
      "Within forty-eight hours, Richard and Beatrice were arrested at Heathrow Airport trying to flee to Dubai on forged passports.",
      "Clara stood on the balcony overlooking Lake Geneva, holding her father's vintage fountain pen, ready to lead Blackwood International into a new era of honor and integrity."
    ],
    scenes: [
      { caption: "Clara views Charles Blackwood's holographic video testament in the Geneva vault.", image: "/images/the-stolen-inheritance-the-billionaires-secret-will-scene-1.jpg", insertAfterParagraph: 4 }
    ]
  },

  // 6. Shocking Secrets - Part 2
  {
    id: "story-6-p2",
    title: "Shocking Secrets (Part 2): The Governor's Downfall",
    slug: "shocking-secrets-part-2",
    category: "Shocking Secrets",
    subcategory: "High Society Retribution",
    tags: ["Secrets", "Part2", "Scandal", "Trending"],
    author: "Clarissa Hayes",
    publicationDate: new Date(Date.now() - 86400000 * 3).toISOString(),
    status: "published",
    partNumber: 2,
    seriesId: "series-dna-ballroom",
    previousPartSlug: "shocking-secrets-the-dna-test-in-the-ballroom",
    views: 22300,
    uniqueVisitors: 17800,
    avgReadTimeSeconds: 295,
    trendingScore: 94.2,
    readTime: "6 min read",
    coverImage: "/images/shocking-secrets-the-dna-test-in-the-ballroom.jpg",
    hookSummary: "After Rachel exposed Governor Hayes live at the gala, the Attorney General opened an emergency criminal investigation into twenty years of high-society extortion.",
    paragraphs: [
      "The flashbulbs in the Grand Ballroom at the Plaza showed no signs of stopping. Governor Thomas Hayes leaned heavily against the wooden podium, clutching his chest as security struggled to hold back the press corps.",
      "Rachel stepped onto the stage, holding the antique sapphire locket up to the camera lenses. Inside the locket was a faded photograph of her late mother holding a newborn baby with the exact birthmark Rachel bore on her collarbone.",
      "Bradley, the governor's fraudulent adopted heir, attempted to shout over the commotion: 'This is slander! She’s an opportunistic journalist looking for a payday!'",
      "Rachel turned to him, her eyes calm and cold as steel. 'Bradley, your real name is Kevin Miller. You were planted by Hayes’ political donors twenty years ago to manage off-the-books campaign slush funds.'",
      "The heavy oak doors at the back of the ballroom opened, and the New York State Attorney General entered with a detachment of state police investigators.",
      "\"Governor Thomas Hayes, by order of the State Supreme Court, we are serving warrants for campaign fraud, child abandonment, and criminal obstruction of justice.\"",
      "Thomas looked into Rachel's eyes, whispering with broken regret: 'Rachel... please, forgive me. Everything I did was for the family name.'",
      "Rachel stepped past him without a word. 'The family name never belonged to you, Governor. It belonged to the mother you discarded.'",
      "As Hayes and Bradley were escorted into awaiting police cruisers, Rachel stepped into the crisp Manhattan air, finally at peace knowing her mother’s name had been fully vindicated."
    ],
    scenes: [
      { caption: "State police serve arrest warrants to Governor Hayes at the gala.", image: "/images/shocking-secrets-the-dna-test-in-the-ballroom-scene-1.jpg", insertAfterParagraph: 4 }
    ]
  },

  // 7. When She Foreclosed Her Ex-Husband's Estate - Part 2
  {
    id: "story-7-p2",
    title: "When She Foreclosed Her Ex-Husband's Estate (Part 2): The Final Auction",
    slug: "when-she-foreclosed-part-2",
    category: "Betrayal & Revenge",
    subcategory: "Hamptons Auction Showdown",
    tags: ["Revenge", "Part2", "RealEstate", "Billionaire"],
    author: "Genevieve Thorne",
    publicationDate: new Date(Date.now() - 86400000 * 1).toISOString(),
    status: "published",
    partNumber: 2,
    seriesId: "series-hamptons-foreclosure",
    previousPartSlug: "when-she-foreclosed-her-ex-husbands-hamptons-estate",
    views: 18400,
    uniqueVisitors: 14700,
    avgReadTimeSeconds: 285,
    trendingScore: 93.4,
    readTime: "6 min read",
    coverImage: "/images/when-she-foreclosed-her-ex-husbands-hamptons-estate.jpg",
    hookSummary: "At the court-ordered bankruptcy auction in Southampton, Trevor watched in despair as Genevieve bought his entire real estate portfolio for pennies on the dollar.",
    paragraphs: [
      "The private auction hall at Sotheby’s in New York was standing-room only as the court-mandated liquidation of Caldwell Holdings got underway.",
      "Trevor sat in the front row in a crumpled suit, praying that his old Wall Street fraternity buddies would bid up his properties so he could salvage a few million dollars.",
      "The auctioneer cleared his throat: 'Lot #1: The Meadow Lane Oceanfront Estate in Southampton, appraised at forty-two million dollars. Opening bid at twenty million.'",
      "The room remained dead silent. None of Trevor’s former friends raised their paddles; everyone knew Thorne International controlled all creditor claims.",
      "Genevieve raised paddle #01 from the back row. 'Twenty million.'",
      "\"Twenty million going once... twice... SOLD to Madam Genevieve Thorne!\"",
      "Trevor turned around, his face pale and eyes wild with desperation. 'Genevieve! You took my house, my cars, my reputation! What more do you want?!'",
      "Genevieve stood up, smoothed down her tailored navy blazer, and looked down at him with serene composure.",
      "\"I don't want anything from you, Trevor. I simply came to collect what you stole from my father’s trust seven years ago. Have a good life.\"",
      "Genevieve walked out into the Manhattan sunshine, leaving Trevor alone with his empty promises and ruined pride."
    ],
    scenes: [
      { caption: "Genevieve wins the final auction bid at Sotheby's.", image: "/images/when-she-foreclosed-her-ex-husbands-hamptons-estate-scene-1.jpg", insertAfterParagraph: 4 }
    ]
  },

  // 8. The Undercover Janitor at Vance Global - Part 2
  {
    id: "story-8-p2",
    title: "The Undercover Janitor at Vance Global (Part 2): The Executive Purge",
    slug: "undercover-janitor-part-2",
    category: "Billionaire Drama",
    subcategory: "Corporate Retribution",
    tags: ["Billionaire", "Part2", "Undercover", "Justice"],
    author: "Julian Vance",
    publicationDate: new Date(Date.now() - 86400000 * 1).toISOString(),
    status: "published",
    partNumber: 2,
    seriesId: "series-undercover-janitor",
    previousPartSlug: "the-undercover-janitor-at-vance-global",
    views: 26100,
    uniqueVisitors: 21300,
    avgReadTimeSeconds: 310,
    trendingScore: 96.8,
    readTime: "7 min read",
    coverImage: "/images/the-undercover-janitor-at-vance-global.jpg",
    hookSummary: "When Bradley Stone fell to his knees begging Founder Ethan for mercy, Ethan promoted the humble maintenance staff and fired the entire corrupt regional executive team.",
    paragraphs: [
      "The grand marble lobby of the Vance Global Tower remained in dead silence as Bradley Stone trembled violently on his knees before Founder Ethan Vance.",
      "\"Founder Vance... please! I didn't know it was you! I was just stressed about quarterly earnings!\" Bradley blabbered hysterically, sweat dripping down his designer lapels.",
      "His fiancée Camilla tried to pull him up, but her hands were shaking so hard she could barely breathe.",
      "Ethan calmly set the mop against the marble wall, dusted off his maintenance uniform, and looked at Global CEO Williams.",
      "\"Williams,\" Ethan's voice was quiet but carried absolute sovereign authority. \"How many employees at this branch have been threatened with termination by Mr. Stone over the last six months?\"",
      "CEO Williams pulled out a tablet: 'Forty-two frontline employees, sir. Including elderly custodial staff and night security guards.'",
      "Ethan nodded. 'Bradley Stone and his entire management circle are terminated effective immediately with zero severance and full criminal referral for harassment and wage theft.'",
      "Ethan then turned to Marcus, the sixty-year-old night janitor who had shared his thermos of coffee with Ethan earlier that morning.",
      "\"Marcus... starting today, you are the Director of Employee Welfare for Vance Global Midwest, reporting directly to the Board with a salary of three hundred thousand dollars.\"",
      "Marcus stared in disbelief, tears welling in his eyes as the entire lobby erupted into cheers and applause from hundreds of watching office workers.",
      "Ethan smiled, buttoned his maintenance jacket, and walked into the executive elevator to begin the global corporate audit."
    ],
    scenes: [
      { caption: "Founder Ethan appoints Marcus as Director of Employee Welfare.", image: "/images/the-undercover-janitor-at-vance-global-scene-1.jpg", insertAfterParagraph: 7 }
    ]
  },

  // 9. The Don's Silent Guardian - Part 2
  {
    id: "story-9-p2",
    title: "The Don's Silent Guardian (Part 2): The Port of New York",
    slug: "silent-guardian-part-2",
    category: "Mafia & Power",
    subcategory: "Underworld Final Stand",
    tags: ["Mafia", "Part2", "Action", "Drama"],
    author: "Matteo Corvo",
    publicationDate: new Date(Date.now() - 86400000 * 2).toISOString(),
    status: "published",
    partNumber: 2,
    seriesId: "series-silent-guardian",
    previousPartSlug: "the-dons-silent-guardian-the-10-year-debt",
    views: 16800,
    uniqueVisitors: 13400,
    avgReadTimeSeconds: 275,
    trendingScore: 92.1,
    readTime: "6 min read",
    coverImage: "/images/the-dons-silent-guardian-the-10-year-debt.jpg",
    hookSummary: "Gabriel and Don Salvatore arrived at Pier 42 to confront the rival cartel bosses, ending twenty years of underworld treachery with tactical precision.",
    paragraphs: [
      "The midnight fog hung thick over Pier 42 at the Port of New York. The rival cartel leaders stood surrounded by forty armed guards beside shipping containers loaded with illicit contraband.",
      "\"Salvatore’s empire is finished!\" the cartel boss laughed, raising a cigar in the damp air.",
      "Suddenly, the port floodlights were blown out with sniper precision. Darkness engulfed the entire pier.",
      "Through the swirling fog, a solitary pair of headlights cut through the night. Gabriel stepped out from the armored sedan, his silhouette steady and deadly.",
      "Within forty seconds of precision tactical maneuvers, the cartel enforcers were neutralized, their weapons clattering uselessly against the wet asphalt.",
      "Don Salvatore stepped from the car with his silver-tipped cane, looking down at the defeated cartel leaders.",
      "\"The Port of New York has belonged to the Corvo family for fifty years,\" Salvatore remarked in cold Sicilian dialect. \"And it will remain with my family forever.\"",
      "Gabriel holstered his sidearm, walked up to the old Don, and nodded respectfully. 'Your debt is fulfilled, Salvatore. My sister is safe, and your family is secure.'",
      "Don Salvatore placed a hand on Gabriel’s shoulder. 'You are no longer a bodyguard, Gabriel. You are a son of this family.'",
      "Together, they drove into the sunrise as peace was finally restored to the city's docks."
    ],
    scenes: [
      { caption: "Gabriel and Don Salvatore secure Pier 42.", image: "/images/the-dons-silent-guardian-the-10-year-debt-scene-1.jpg", insertAfterParagraph: 4 }
    ]
  },

  // 10. The 5-Year Silent Wife - Part 2
  {
    id: "story-10-p2",
    title: "The 5-Year Silent Wife (Part 2): The Sinclair Empire",
    slug: "silent-wife-part-2",
    category: "Marriage & Relationships",
    subcategory: "Imperial Rebirth",
    tags: ["Marriage", "Part2", "Revenge", "Billionaire"],
    author: "Vivian Sinclair",
    publicationDate: new Date(Date.now() - 86400000 * 1).toISOString(),
    status: "published",
    partNumber: 2,
    seriesId: "series-silent-wife-revenge",
    previousPartSlug: "the-5-year-silent-wife-hamptons-gala-revenge",
    views: 24800,
    uniqueVisitors: 19900,
    avgReadTimeSeconds: 300,
    trendingScore: 95.6,
    readTime: "7 min read",
    coverImage: "/images/the-5-year-silent-wife-hamptons-gala-revenge.jpg",
    hookSummary: "When Carter tried to sue Vivian for his liquidated real estate holdings, her Swiss legal team presented proof that he had signed away everything in their prenuptial agreement.",
    paragraphs: [
      "The executive boardroom of Sinclair Capital on Wall Street overlooked the Statue of Liberty in brilliant morning sunlight.",
      "Carter sat across the table with three expensive trial lawyers, slamming his fists down in fury. \"Vivian! You conned me! I am entitled to fifty percent of Sinclair Capital under New York marital law!\"",
      "Vivian sat at the head of the table in an emerald silk blouse and pearls, sipping Earl Grey tea with serene elegance.",
      "Her lead Swiss attorney, Dr. Weber, slid an ironclad document across the table. 'Mr. Carter, five years ago, you forced Vivian to sign a draconian prenuptial agreement stating that any spouse guilty of infidelity would forfeit one hundred percent of marital and corporate assets.'",
      "The monitor in the boardroom flickered on, displaying certified photographs, hotel receipts, and bank wire records documenting Carter's dozens of illicit affairs across Manhattan over five years.",
      "Carter’s attorneys quickly closed their briefcases and stood up. 'Mr. Carter, we are resigning as your counsel immediately. You have no legal standing.'",
      "Carter looked at Vivian in sheer horror. 'Vivian... please... I gave you five years of my life!'",
      "Vivian stood up and looked him dead in the eyes. 'You gave me five years of silence, Carter. And today, I gave you your answer.'",
      "Security escorted Carter out onto Wall Street, penniless and disgraced, as Vivian led Sinclair Capital into its most profitable quarter in history."
    ],
    scenes: [
      { caption: "Dr. Weber presents the ironclad prenuptial agreement.", image: "/images/the-5-year-silent-wife-hamptons-gala-revenge-scene-1.jpg", insertAfterParagraph: 4 }
    ]
  },

  // 11. The Black Card in the Pawnshop - Part 2
  {
    id: "story-11-p2",
    title: "The Black Card in the Pawnshop (Part 2): The Sovereign Honor",
    slug: "black-card-pawnshop-part-2",
    category: "Money & Inheritance",
    subcategory: "Sovereign Justice",
    tags: ["Money", "Part2", "SecretBillionaire", "Trending"],
    author: "Austin Reed",
    publicationDate: new Date(Date.now() - 86400000 * 1).toISOString(),
    status: "published",
    partNumber: 2,
    seriesId: "series-black-card-pawnshop",
    previousPartSlug: "the-black-card-in-the-pawnshop",
    views: 23400,
    uniqueVisitors: 18900,
    avgReadTimeSeconds: 280,
    trendingScore: 94.5,
    readTime: "6 min read",
    coverImage: "/images/the-black-card-in-the-pawnshop.jpg",
    hookSummary: "When the regional bank CEO arrived with the Chief of Police, the crooked pawnbrokers were arrested and Noah's daughter was admitted to the nation's premier medical facility.",
    paragraphs: [
      "The sirens wailed outside the neon-lit pawnshop as twelve federal cruisers and black executive Suburbans surrounded the building.",
      "The regional Chairman of J.P. Morgan Private Bank rushed through the front door alongside the Police Commissioner.",
      "\"Supreme Commander Noah Vance!\" the Chairman called out in deep relief, bowing respectfully. \"We received your emergency dispatch override! Are you unharmed?\"",
      "Lenny, the crooked pawnshop owner, collapsed behind the counter, trembling so hard his teeth chattered. 'C-Commander Vance?! The war hero who donated forty hospitals to veterans?!'",
      "Noah looked down at Lenny with quiet, unshakeable dignity. 'Where is my grandmother’s silver watch, Lenny?'",
      "Lenny frantically scrambled into the trash bin, retrieved the antique silver watch with shaking hands, wiped it clean with his shirt, and handed it back with tears streaming down his face.",
      "The Police Commissioner stepped forward: 'Officers, arrest Lenny and his enforcers for illegal weapons trafficking, extortion, and armed robbery.'",
      "The Chairman handed Noah an encrypted medical tablet: 'Commander, your daughter has already been admitted to Johns Hopkins Pediatric Specialty Unit via medical helicopter. The finest specialists in the world are waiting for her.'",
      "Noah placed his grandmother’s watch into his pocket, gripped the Chairman’s hand with gratitude, and stepped into the awaiting motorcade, ready to be by his daughter’s side."
    ],
    scenes: [
      { caption: "The J.P. Morgan Chairman arrives to salute Supreme Commander Noah.", image: "/images/the-black-card-in-the-pawnshop-scene-1.jpg", insertAfterParagraph: 4 }
    ]
  },

  // 12. The Governor's Hidden Daughter - Part 2
  {
    id: "story-12-p2",
    title: "The Governor's Hidden Daughter (Part 2): The Senate Victory",
    slug: "senate-hearing-part-2",
    category: "Shocking Secrets",
    subcategory: "Senate Climax",
    tags: ["Secrets", "Part2", "Politics", "Drama"],
    author: "Clarissa Hayes",
    publicationDate: new Date(Date.now() - 86400000 * 2).toISOString(),
    status: "published",
    partNumber: 2,
    seriesId: "series-senate-hearing-daughter",
    previousPartSlug: "the-governors-hidden-daughter-senate-hearing",
    views: 19400,
    uniqueVisitors: 15600,
    avgReadTimeSeconds: 290,
    trendingScore: 93.1,
    readTime: "6 min read",
    coverImage: "/images/the-governors-hidden-daughter-senate-hearing.jpg",
    hookSummary: "Live on national television, the Senate Judiciary Committee voted unanimously to reject Harrison's nomination and appointed Maya as special counsel to investigate political corruption.",
    paragraphs: [
      "The Senate Judiciary Committee hearing chamber was charged with unprecedented tension as Chairman Miller hammered the gavel three times.",
      "\"In light of the indisputable genetic evidence and financial documentation presented in Exhibit 94, this committee hereby terminates Governor Donald Harrison’s confirmation process and refers the matter to the Department of Justice for criminal prosecution.\"",
      "Harrison covered his face with trembling hands as media photographers captured the historic downfall of a political dynasty.",
      "Maya stood tall at the podium, her poise and composure radiating dignity that captured the hearts of thirty million American viewers watching live at home.",
      "Senator Miller addressed her directly: 'Counselor Maya... your courage in uncovering twenty-four years of buried truth has set a standard for public service in this country.'",
      "Outside on the Capitol steps, hundreds of journalists and supporters gathered to applaud as Maya walked out into the afternoon sun.",
      "When a reporter asked what she planned to do next, Maya touched her mother's silver locket and smiled with quiet confidence.",
      "\"I will continue fighting for every person who was told their voice doesn't matter. The truth always wins.\""
    ],
    scenes: [
      { caption: "Maya speaks to the national press corps on the Capitol steps.", image: "/images/the-governors-hidden-daughter-senate-hearing-scene-1.jpg", insertAfterParagraph: 5 }
    ]
  }
];

// Merge and update all stories
const allStories = [...currentStories];

PART_2_STORIES.forEach(p2 => {
  const existingIdx = allStories.findIndex(s => s.slug === p2.slug);
  if (existingIdx >= 0) {
    allStories[existingIdx] = p2;
  } else {
    allStories.push(p2);
  }
});

db.saveStories(allStories);
console.log(`Successfully added/updated Part 2 chapters! Total stories in Taleonix: ${allStories.length}`);
