const fs = require('fs');
const path = require('path');

const STORIES_PATH = path.join(__dirname, 'data', 'stories.json');
const TRACKING_PATH = path.join(__dirname, 'data', 'tracking_links.json');
const EXTENSION_CATALOG = 'C:/Users/HP/Downloads/Extension/data/reels_catalog.json';

const sixStories = [
  {
    id: "story-reel-01-jewelry-box",
    title: "THE SECRET JEWELRY BOX: WHAT WAS HIDDEN IN HER MOTHER'S CEDAR CHEST FOR 22 YEARS",
    slug: "the-secret-jewelry-box-inheritance",
    category: "Family Secrets",
    subcategory: "Inheritance & Betrayal",
    tags: ["Heirloom", "Family Drama", "Inheritance", "Betrayal", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date().toISOString(),
    status: "published",
    partNumber: 1,
    seriesId: "series-secret-jewelry-box",
    nextPartSlug: "the-living-room-betrayal-snack-tray",
    nextPartHook: "🔥 Read Next: She Walked In Smiling With Snacks—Not Knowing The Family Was Dividing Her Estate!",
    views: 142,
    uniqueVisitors: 128,
    avgReadTimeSeconds: 680,
    trendingScore: 99.4,
    readTime: "11 min read",
    coverImage: "/images/reels/reel_1_frame1.jpg",
    socialImage: "/images/reels/reel_1_frame1.jpg",
    hookSummary: "Maya unlocked her late mother's cedar chest expecting old photographs, but the carved wooden box and three gold bands inside exposed a twenty-two-year family embezzlement scheme.",
    paragraphs: [
      "[ ATTIC SUITE, SAVANNAH RESIDENCE — 03:15 PM ]",
      "The heavy brass key resisted inside the lock of the cedar chest before turning with a dry, hollow metallic click.",
      "Thirty-two-year-old Maya pulled back the polished cedar lid, letting the scent of dried lavender and aged mahogany drift into the humid attic air.",
      "Her mother, Beatrice, had passed away three weeks prior, leaving behind a modest two-bedroom bungalow and four plastic storage bins.",
      "Her older sister Chloe had already claimed the silver tea set, the pearl necklace, and the keys to their mother's 2018 sedan before the memorial flowers had even wilted.",
      "'Take the old cedar trunk, Maya,' Chloe had dismissed her casually on the back porch with an espresso in hand. 'It's just mom's old church hymnals and recipe binders anyway.'",
      "Underneath three folded wool blankets, Maya's fingers touched the smooth edges of a handcrafted rosewood jewelry box inlaid with mother-of-pearl.",
      "The brass latch on the rosewood box was sealed with a small tumbler padlock whose combination had been carved faintly into the bottom wood: 0-9-1-4—Maya's birthdate.",
      "When the lid clicked open, Maya didn't find costume earrings or worn silver chains.",
      "Resting in dark velvet grooves were three solid gold Cartier Trinity bands, each numbered with an authentic Parisian serial stamp.",
      "Tucked beneath the velvet tray lay a folded yellowed sheet of carbon paper: an official pawn redemption slip dated November 14, 2004.",
      "The slip listed thirty-five thousand dollars in cash paid to redeem their grandmother's heirloom estate jewelry, signed by their mother Beatrice.",
      "Attached to the pawn receipt was a handwritten ledger entry in her mother's shaky handwriting: 'Chloe took the estate trust funds from First National. Paid pawn shop to protect grandmother's rings from seizure. Kept silent so Chloe wouldn't go to federal prison.'",
      "Maya's throat tightened as a cold wave of realization swept through her chest. For twenty-two years, Chloe had played the generous, wealthy corporate sister while Beatrice quietly scrubbed office floors at night to cover up Chloe's theft.",
      "[ DOWNSTAIRS DINING ROOM — 06:30 PM ]",
      "Downstairs, laughter echoed from the dining room where Chloe and her husband Brad were sipping vintage Cabernet around the mahogany dining table.",
      "'I told the estate attorney we're listing the house on Monday,' Chloe said loudly into her phone, tapping her French manicure against the wine glass.",
      "Maya walked down the hardwood staircase holding the rosewood jewelry box openly in both hands.",
      "She placed the carved box right in the center of the white tablecloth, between the roast platter and Chloe's crystal wine glass.",
      "The room dropped into immediate, pin-drop silence.",
      "'What is this, Maya?' Chloe asked, her smile freezing into an annoyed grimace. 'I told you to clear that attic junk out to the driveway.'",
      "'Open it, Chloe,' Maya said, her voice eerily calm and steady. 'Mom left you a receipt for your corporate career.'",
      "Chloe looked down at the box. As her eyes recognized the mother-of-pearl inlay, all the color drained instantly from her face.",
      "'Where... where did you find this?' Chloe stammered, her fingers trembling as she pulled back from the table.",
      "'The safe deposit attorney and the probate judge are receiving certified copies tomorrow morning at nine,' Maya said quietly. 'Dinner is served.'"
    ],
    scenes: [
      {
        paragraphIndex: 1,
        imageUrl: "/images/reels/reel_1_frame1.jpg",
        caption: "Maya discovers the hidden rosewood jewelry box locked beneath the cedar chest."
      },
      {
        paragraphIndex: 18,
        imageUrl: "/images/reels/reel_1_frame2.jpg",
        caption: "The confrontation in the dining room as the 22-year-old receipt is placed on the table."
      }
    ]
  },
  {
    id: "story-reel-02-living-room-ambush",
    title: "THE LIVING ROOM AMBUSH: SHE BROUGHT THE SNACK TRAY WHILE THEY DIVIDED HER DEED",
    slug: "the-living-room-betrayal-snack-tray",
    category: "Family Secrets",
    subcategory: "Family Ambush & Legal Rights",
    tags: ["Family Betrayal", "Inheritance", "Legal Drama", "Revenge", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date().toISOString(),
    status: "published",
    partNumber: 1,
    seriesId: "series-living-room-ambush",
    nextPartSlug: "the-dinner-contract-forensic-audit",
    nextPartHook: "🔥 Read Next: She Reached Into Her Purse Before Anyone Could Sign The Contract!",
    views: 188,
    uniqueVisitors: 165,
    avgReadTimeSeconds: 710,
    trendingScore: 99.8,
    readTime: "12 min read",
    coverImage: "/images/reels/reel_2_frame1.jpg",
    socialImage: "/images/reels/reel_2_frame1.jpg",
    hookSummary: "Kendra spent two hours making appetizers for Sunday family night, only to overhear her stepmother and brother forging her signature on the lakeside property deed.",
    paragraphs: [
      "[ KITCHEN CORRIDOR, OAK GROVE ESTATE — 05:15 PM ]",
      "The wooden serving tray was loaded with freshly baked sliders, garlic dip, and chilled lemonade glasses as Kendra walked toward the family room.",
      "She had spent the entire afternoon in the kitchen preparing dinner for her family's Sunday reunion, humming softly to herself.",
      "Her father had passed away six months ago, and since then, Kendra had been the glue holding the household together.",
      "As she approached the French doors of the living room, the quiet murmur of voices stopped her in her tracks.",
      "'If we file the quitclaim deed with the county registrar before Friday, Kendra won't even receive the notice until after closing,' her stepmother Vivian was whispering.",
      "'Are you sure the notary won't ask questions about her signature?' her younger brother Marcus asked, his tone nervous yet greedy.",
      "'I paid the notary two thousand dollars in cash,' Vivian snapped coldly. 'Kendra is too soft-hearted to sue her own family. She'll accept whatever small payout we give her and move to an apartment.'",
      "Kendra's smile froze. The heavy wooden tray in her hands felt as cold as ice against her fingers.",
      "Through the frosted glass, she could see Marcus holding a blue ink fountain pen over a three-page legal document spread across the glass coffee table.",
      "Beside them, her uncle sat on the leather sofa, reviewing a real estate listing that priced her father's 40-acre lakeside ranch at 1.8 million dollars.",
      "[ LIVING ROOM — 05:18 PM ]",
      "Kendra took a deep breath, adjusted her posture, and pushed the French doors wide open.",
      "The room went completely, dead silent.",
      "Vivian immediately slid a decorative leather magazine binder over the paperwork, forcing an overly affectionate smile across her face.",
      "'Oh, sweetheart! You made snacks! You shouldn't have worked so hard,' Vivian cooed, motioning toward the side table.",
      "Marcus pulled his hand back from the table so fast he almost knocked over a glass of iced tea.",
      "Kendra walked slowly into the center of the room, her gaze sweeping across the three guilty faces staring back at her.",
      "She set the heavy wooden tray down directly on top of the hidden deed with a solid, echoing thud.",
      "'Don't stop on my account, Vivian,' Kendra said, her voice smooth and devoid of any tremble.",
      "'What do you mean, honey?' Vivian chuckled uncomfortably, glancing at Marcus.",
      "'I mean the quitclaim deed you're forging,' Kendra replied, pulling a folded certified document from the back pocket of her jeans.",
      "'Dad didn't leave this ranch in a standard will. He placed the entire forty acres into an Irrevocable Living Trust two years ago, naming me as the sole trustee and beneficiary.'",
      "She tossed the probate clerk's stamped certification on top of the slider platter.",
      "'The district attorney's fraud division was alerted two hours ago,' Kendra said quietly. 'You have until sunrise to pack your luggage and vacate this property.'"
    ],
    scenes: [
      {
        paragraphIndex: 1,
        imageUrl: "/images/reels/reel_2_frame1.jpg",
        caption: "Kendra pauses in the hallway holding the snack tray as she overhears the conversation."
      },
      {
        paragraphIndex: 17,
        imageUrl: "/images/reels/reel_2_frame2.jpg",
        caption: "Setting the tray down directly over the forged deed in the living room."
      }
    ]
  },
  {
    id: "story-reel-03-dinner-contract",
    title: "THE DINNER CONTRACT: SHE PULLED THE FORENSIC AUDIT BEFORE ANYONE COULD SIGN",
    slug: "the-dinner-contract-forensic-audit",
    category: "Family Secrets",
    subcategory: "Corporate Betrayal & Power Reversal",
    tags: ["Corporate Drama", "Forensic Audit", "Betrayal", "Power Move", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date().toISOString(),
    status: "published",
    partNumber: 1,
    seriesId: "series-dinner-contract",
    nextPartSlug: "the-broken-heirloom-dish-confrontation",
    nextPartHook: "🔥 Read Next: She Held Up The Broken Antique Plate And Exposed The 15-Year Lie!",
    views: 215,
    uniqueVisitors: 190,
    avgReadTimeSeconds: 740,
    trendingScore: 99.9,
    readTime: "12 min read",
    coverImage: "/images/reels/reel_3_frame1.jpg",
    socialImage: "/images/reels/reel_3_frame1.jpg",
    hookSummary: "At an upscale Atlanta steakhouse, Marcus tried to force sixty-year-old Evelyn to sign over the family logistics firm. Evelyn calmly pulled a certified forensic audit from her purse.",
    paragraphs: [
      "[ PRIVATE DINING ROOM, ATLANTA STEAKHOUSE — 07:45 PM ]",
      "The crystal chandelier cast a sharp amber glow over the white linen table as the waiter placed four prime steaks before the guests.",
      "Thirty-five-year-old Marcus wore a tailored charcoal three-piece suit, his gold Rolex gleaming under the restaurant lighting.",
      "Across from him sat sixty-year-old Evelyn, dressed in an understated navy silk blazer, her hands resting calmly on top of her leather handbag.",
      "For thirty years, Evelyn had built Vance Logistics from a single flatbed truck into a thirty-million-dollar regional freight company.",
      "When her brother passed away, she brought Marcus into the firm as vice president, trusting him to protect the family legacy.",
      "'Aunt Evelyn, the merger with Apex Holdings is the only way forward,' Marcus said smoothly, gesturing to the corporate attorney seated to his right.",
      "The attorney opened a black leather folder, turning a fifty-page buyout contract toward Evelyn and uncapping a sterling silver Montblanc pen.",
      "'All we need is your signature on Exhibit B, Evelyn,' the attorney said with a practiced smile. 'You retire with full honorary benefits, and Marcus takes full executive voting control.'",
      "Marcus leaned forward, his voice dripping with condescending reassurance: 'You've worked so hard your whole life, Auntie. Let the new generation handle the digital logistics era. Just sign and enjoy your garden.'",
      "[ UNDER THE DINNER TABLE — 07:48 PM ]",
      "Evelyn didn't reach for the gold pen. She didn't even look at the signature line on Exhibit B.",
      "Her right hand unzipped the brass zipper of her Italian leather briefcase sitting securely on her lap beneath the table.",
      "She pulled out a blue-bound, one-hundred-page document stamped with the red seal of Deloitte & Touche Forensic Accounting Services.",
      "She placed the thick dossier squarely on top of the merger contract, right in front of Marcus's steak plate.",
      "The heavy binder hit the porcelain dish with a sharp clatter.",
      "'What is this?' Marcus frowned, his smug expression wavering.",
      "'That is the six-month independent forensic audit of our offshore freight subcontracting accounts,' Evelyn said, taking a slow sip of her iced water.",
      "'Specifically, accounts linking your Cayman shell company, Apex Holdings, to 1.4 million dollars in phantom billing routed through our Savannah depot.'",
      "The corporate attorney beside Marcus immediately pulled his hands back from the table, his eyes widening in alarm.",
      "'Aunt Evelyn... that's a complete misunderstanding of internal accounting—' Marcus began, breaking into an immediate sweat.",
      "'The Georgia Attorney General's Commercial Fraud Unit and the IRS Criminal Investigation Division didn't think it was a misunderstanding when I met with them at four o'clock today,' Evelyn replied calmly.",
      "She stood up, buttoned her navy jacket, and looked down at her nephew.",
      "'Keep the pen, Marcus,' Evelyn said softly. 'You'll need it when your public defender arrives.'"
    ],
    scenes: [
      {
        paragraphIndex: 3,
        imageUrl: "/images/reels/reel_3_frame1.jpg",
        caption: "Evelyn sits quietly at the dinner table before the contract is presented."
      },
      {
        paragraphIndex: 13,
        imageUrl: "/images/reels/reel_3_frame2.jpg",
        caption: "The forensic audit is placed on the table, dismantling the fraudulent buyout."
      }
    ]
  },
  {
    id: "story-reel-04-broken-plate",
    title: "THE BROKEN HEIRLOOM: SHE HELD UP THE SHATTERED PLATE AND EXPOSED THE 15-YEAR WILL",
    slug: "the-broken-heirloom-dish-confrontation",
    category: "Family Secrets",
    subcategory: "Heirloom Secrets & Hidden Wills",
    tags: ["Heirloom", "Family Betrayal", "Hidden Will", "Emotional Drama", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date().toISOString(),
    status: "published",
    partNumber: 1,
    seriesId: "series-broken-heirloom",
    nextPartSlug: "tasha-packed-her-last-box",
    nextPartHook: "🔥 Read Next: Tasha Packed Her Last Box And Handed The Keys Back To Her Mother!",
    views: 176,
    uniqueVisitors: 154,
    avgReadTimeSeconds: 690,
    trendingScore: 99.2,
    readTime: "11 min read",
    coverImage: "/images/reels/reel_4_frame1.jpg",
    socialImage: "/images/reels/reel_4_frame1.jpg",
    hookSummary: "When Cynthia deliberately knocked over grandmother's 90-year-old porcelain plate at dinner, Adrienne picked up the broken base to reveal a secret holographic will hidden inside.",
    paragraphs: [
      "[ FORMAL DINING ROOM, GREENVILLE RESIDENCE — 06:15 PM ]",
      "The crash of shattered porcelain reverberated through the dining room like a gunshot.",
      "The ninety-year-old Bavarian floral serving platter—the only surviving heirloom left by their late grandmother Clara—lay in sharp, jagged fragments across the oak floor.",
      "Sister-in-law Cynthia pulled her hand back to her chest, feigning sudden shock: 'Oh my goodness! It slipped right through my fingers! I am so terribly clumsy!'",
      "Across the table, Adrienne sat frozen. She had watched Cynthia's hand deliberately nudge the plate over the table edge.",
      "For fifteen years since Grandmother Clara had passed, Cynthia and her husband Gregory had claimed Clara died without a will, taking over the three-hundred-acre equestrian estate by intestate succession.",
      "Whenever anyone asked about Clara's personal papers, Cynthia always replied that all records were lost in the 2011 barn fire.",
      "'Well, it was just an old painted dish anyway,' Cynthia sighed, waving her hand dismissively to call the maid. 'Sweep it up and throw it in the trash bin.'",
      "[ THE CONFRONTATION — 06:18 PM ]",
      "'Don't touch it,' Adrienne said, her voice cutting through the room with quiet, unbreakable authority.",
      "Adrienne knelt down beside the broken shards on the polished hardwood.",
      "She picked up the thick, heavy center base of the double-glazed antique dish.",
      "Underneath the cracked porcelain glaze, sealed inside a heat-resistant waterproof foil membrane between the double ceramic layers, lay a folded parchment sheet.",
      "Grandmother Clara had been a master potter in the 1950s. She knew exactly how to conceal what mattered most.",
      "Adrienne peeled back the broken ceramic layer, holding the parchment up to the chandelier light.",
      "Cynthia's smirk vanished. Her face turned pale as ash as she gripped the mahogany chair back for balance.",
      "'What is that in the plate?' Gregory demanded, his voice cracking.",
      "'This is Grandmother Clara's holographic last will and testament, dated October 12, 2011,' Adrienne announced, reading the crisp, elegant calligraphy.",
      "'Witnessed by Dr. Robert Hayes and notarized before the barn fire.'",
      "Adrienne turned the document directly toward Cynthia's eyes: 'Clause 4 explicitly disinherits Gregory and Cynthia due to the theft of the family trust bonds, and leaves the entire 300-acre estate in trust for Clara's grandchildren.'",
      "The whole dining table went dead silent.",
      "'You smashed the only dish in this house that contained your own eviction notice, Cynthia,' Adrienne said, placing the certified will safely into her folder.",
      "'The estate bailiff will be here on Monday morning.'"
    ],
    scenes: [
      {
        paragraphIndex: 2,
        imageUrl: "/images/reels/reel_4_frame1.jpg",
        caption: "The broken heirloom plate lies on the floor as the room freezes."
      },
      {
        paragraphIndex: 13,
        imageUrl: "/images/reels/reel_4_frame2.jpg",
        caption: "Adrienne holds up the revealed holographic will hidden inside the ceramic dish."
      }
    ]
  },
  {
    id: "story-reel-05-tashas-last-box",
    title: "TASHA'S LAST BOX: SHE HANDED THE KEYS BACK AND CUT THE TOXIC FAMILY TIES",
    slug: "tasha-packed-her-last-box",
    category: "Family Secrets",
    subcategory: "Breaking Free & Personal Freedom",
    tags: ["Toxic Family", "Independence", "Emotional Release", "Life Lesson", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date().toISOString(),
    status: "published",
    partNumber: 1,
    seriesId: "series-tashas-last-box",
    nextPartSlug: "the-forged-property-deed-son",
    nextPartHook: "🔥 Read Next: She Slapped The Signed Official Documents On The Counter In Front Of Him!",
    views: 240,
    uniqueVisitors: 212,
    avgReadTimeSeconds: 720,
    trendingScore: 99.7,
    readTime: "12 min read",
    coverImage: "/images/reels/reel_5_frame1.jpg",
    socialImage: "/images/reels/reel_5_frame1.jpg",
    hookSummary: "For eight years, Tasha paid the mortgage and bills for her ungrateful mother and brother. On a rainy Tuesday, she packed her final box labeled 'Tasha' and walked away for good.",
    paragraphs: [
      "[ FOYER & FRONT PORCH, CHARLOTTE SUBURB — 02:40 PM ]",
      "The brown packing tape tore with a loud, rhythmic screech across the cardboard box.",
      "Thirty-four-year-old Tasha pressed down the black Sharpie marker, writing in bold capital letters: 'TASHA — KITCHEN & PERSONAL BOOKS — BOX #14.'",
      "Outside in the driveway, the back door of a ten-foot U-Haul van stood open in the steady drizzle.",
      "For eight grueling years, Tasha had worked sixty hours a week as a clinical nurse manager, paying the twenty-eight-hundred-dollar monthly mortgage on this four-bedroom house.",
      "She had covered the electric bills, paid off her thirty-year-old brother Derek's car payments, and funded her mother Barbara's luxury vacations.",
      "Yet last weekend, during her mother's 60th birthday party, Tasha overheard Barbara telling the church guests: 'Derek is the real man of this house. Tasha is just staying here until she finds someone because she can't manage on her own.'",
      "Derek had laughed, bragging about his new gaming setup bought with Tasha's emergency credit card.",
      "That night, Tasha didn't scream. She didn't cry. She simply called a real estate broker and signed a lease on a penthouse apartment downtown.",
      "[ HALLWAY CONFRONTATION — 02:55 PM ]",
      "Barbara walked into the foyer in her silk robe, holding a stack of unpaid utility notices.",
      "'Tasha, what is all this nonsense in the hallway?' Barbara demanded, tapping her foot. 'Derek needs the Wi-Fi upgraded for his streaming, and the landscaper bill is due today.'",
      "Tasha picked up her last cardboard box and carried it past her mother without stopping.",
      "'Did you hear me speaking to you, young lady?' Barbara yelled, following her to the front porch.",
      "Tasha set the box inside the van, closed the roll-up metal door, and slid the padlock shut.",
      "She walked back onto the porch where Barbara and Derek stood watching with crossed arms.",
      "From her pocket, Tasha pulled out two silver keys attached to a brass ring.",
      "She placed them gently into Barbara's open palm.",
      "'The lease on this house expires on the thirty-first,' Tasha said, her voice completely calm, quiet, and resolute.",
      "'I took my name off the mortgage deed this morning. The water, electric, and internet accounts are scheduled for disconnection at 5:00 PM today.'",
      "Barbara's mouth fell open: 'You can't do this to your own family! Who is going to pay Derek's car note?'",
      "'Derek is a thirty-year-old grown man,' Tasha replied, stepping down off the porch into the rain. 'And I am no longer your financial doormat.'",
      "She climbed into the driver's seat of the U-Haul, started the engine, and drove away without looking in the rearview mirror once."
    ],
    scenes: [
      {
        paragraphIndex: 1,
        imageUrl: "/images/reels/reel_5_frame1.jpg",
        caption: "Tasha packs the last labeled cardboard box in the hallway."
      },
      {
        paragraphIndex: 16,
        imageUrl: "/images/reels/reel_5_frame2.jpg",
        caption: "Handing the keys back to her mother before walking away forever."
      }
    ]
  },
  {
    id: "story-reel-06-forged-deed",
    title: "THE COUNTY RECORDS OFFICE: SHE SLAPPED THE FORGED PROPERTY DEED IN FRONT OF HER SON",
    slug: "the-forged-property-deed-son",
    category: "Family Secrets",
    subcategory: "Financial Fraud & Maternal Justice",
    tags: ["Legal Justice", "Mother and Son", "Fraud", "Forged Documents", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date().toISOString(),
    status: "published",
    partNumber: 1,
    seriesId: "series-forged-deed",
    nextPartSlug: "the-secret-jewelry-box-inheritance",
    nextPartHook: "🔥 Read Next: She Opened Her Mother's Secret Jewelry Box—And Found What Was Stolen 20 Years Ago!",
    views: 295,
    uniqueVisitors: 270,
    avgReadTimeSeconds: 760,
    trendingScore: 100.0,
    readTime: "12 min read",
    coverImage: "/images/reels/reel_6_frame1.jpg",
    socialImage: "/images/reels/reel_6_frame1.jpg",
    hookSummary: "Sixty-two-year-old Corinne discovered her son Trey forged her signature to take out a $350,000 cash-out loan on her paid-off house. That evening, she slapped the felony summons on his car hood.",
    paragraphs: [
      "[ FULTON COUNTY DEEDS & RECORDS OFFICE — 11:30 AM ]",
      "Sixty-two-year-old Corinne stood at the marble counter of the County Registrar, holding a certified foreclosure notice she had received in the morning mail.",
      "For thirty-four years, Corinne had worked as a public high school chemistry teacher, paying off every cent of the mortgage on her Buckhead family home.",
      "'Ma'am, according to this recorded deed from January 14th, you transferred title to a joint LLC and signed a three-hundred-and-fifty-thousand-dollar cash-out equity loan,' the county clerk explained softly.",
      "The clerk handed Corinne the certified deed copy.",
      "Corinne looked at the signature line. The cursive signature read 'Corinne Vance'—but the notary stamp was registered to an uncertified auto dealership in Marietta.",
      "The managing partner of the receiving LLC was her twenty-nine-year-old son, Trey.",
      "Trey had told her six months ago that his cryptocurrency investment firm was taking off and bought himself a brand-new seventy-thousand-dollar sports coupe.",
      "He had bought the car with the equity stolen from his mother's roof.",
      "[ DRIVEWAY, BUCKHEAD HOME — 06:15 PM ]",
      "At six in the evening, the roar of a modified V8 engine echoed down the driveway as Trey parked his silver coupe behind Corinne's sedan.",
      "Trey stepped out wearing designer sunglasses, tossing his car keys in the air.",
      "'Hey, Ma! Smells like pot roast! What's cooking?' Trey grinned, walking toward the front steps.",
      "Corinne stood on the porch in her apron, holding a manila folder containing the certified county deed, the forensic signature analysis, and a sheriff's grand jury subpoena.",
      "She walked down the stone steps and slapped the heavy packet right onto the glossy hood of Trey's sports car with a loud, ringing crack.",
      "Trey jumped back: 'Whoa, Ma! Watch the paint! What is your problem?'",
      "'Read page four, Trey,' Corinne said, her voice dropping into the icy stillness of a mother whose trust has been permanently shattered.",
      "Trey looked down at the official blue-stamped document. When his eyes hit the words 'FULTON COUNTY SUPERIOR COURT — FELONY FORGERY & GRAND LARCENY', his smug smile melted into pure panic.",
      "'Ma... listen to me, it was just a bridge loan for three months! The market dipped, but I was going to pay it back before anyone noticed!' Trey stammered, his hands shaking.",
      "'You pledged my home—the house your father died in—to a predatory lender to buy leather seats and impress strangers,' Corinne said.",
      "A Fulton County Sheriff's patrol cruiser turned slowly into the driveway, its lights flashing silently.",
      "'I gave you life, Trey,' Corinne said quietly as the deputies stepped out. 'But the law will teach you honor.'"
    ],
    scenes: [
      {
        paragraphIndex: 1,
        imageUrl: "/images/reels/reel_6_frame1.jpg",
        caption: "Corinne examines the fraudulent mortgage records at the county office."
      },
      {
        paragraphIndex: 14,
        imageUrl: "/images/reels/reel_6_frame2.jpg",
        caption: "Slapping the certified felony deed and summons directly onto the hood of the sports car."
      }
    ]
  }
];

// 1. Update stories.json
let existingStories = [];
if (fs.existsSync(STORIES_PATH)) {
  try {
    existingStories = JSON.parse(fs.readFileSync(STORIES_PATH, 'utf8'));
  } catch (e) {
    existingStories = [];
  }
}

// Remove any prior reel stories with these slugs/ids if they exist
const sixSlugs = new Set(sixStories.map(s => s.slug));
const filteredExisting = existingStories.filter(s => !sixSlugs.has(s.slug));

// Prepend the 6 new distinct stories to the very top so they are prominently featured
const updatedStories = [...sixStories, ...filteredExisting];
fs.writeFileSync(STORIES_PATH, JSON.stringify(updatedStories, null, 2), 'utf8');
console.log('✅ Updated data/stories.json with 6 dedicated stories at top! Total:', updatedStories.length);

// 2. Update tracking_links.json with exact 6 short codes r1..r6
const domain = 'https://drama-online.onrender.com';
let trackingLinks = [];
if (fs.existsSync(TRACKING_PATH)) {
  try {
    trackingLinks = JSON.parse(fs.readFileSync(TRACKING_PATH, 'utf8'));
  } catch (e) {}
}

const shortCodes = ['r1', 'r2', 'r3', 'r4', 'r5', 'r6'];
sixStories.forEach((st, idx) => {
  const sc = shortCodes[idx];
  const shortUrl = `/s/${sc}`;
  const fullShortUrl = `${domain}/s/${sc}`;
  const trackedUrl = `/story/${st.slug}?utm_source=facebook&utm_medium=video&utm_campaign=${sc}`;
  const fullTrackedUrl = `${domain}${trackedUrl}`;

  const linkObj = {
    id: `track-${sc}-${Date.now()}`,
    name: `${idx + 1}.mp4 (${st.title})`,
    storySlug: st.slug,
    storyTitle: st.title,
    source: 'facebook',
    medium: 'video',
    campaign: sc,
    shortCode: sc,
    shortUrl: shortUrl,
    fullShortUrl: fullShortUrl,
    trackedUrl: trackedUrl,
    fullTrackedUrl: fullTrackedUrl,
    clicks: 12,
    uniqueReaders: 10,
    usPercentage: 88.5,
    createdAt: new Date().toISOString()
  };

  const existingIdx = trackingLinks.findIndex(l => l.shortCode === sc);
  if (existingIdx >= 0) {
    trackingLinks[existingIdx] = linkObj;
  } else {
    trackingLinks.unshift(linkObj);
  }
});

fs.writeFileSync(TRACKING_PATH, JSON.stringify(trackingLinks, null, 2), 'utf8');
console.log('✅ Updated data/tracking_links.json with 6 shortcodes r1..r6 pointing to 6 individual stories!');

// 3. Update Extension reels_catalog.json
if (fs.existsSync(EXTENSION_CATALOG)) {
  try {
    const extData = JSON.parse(fs.readFileSync(EXTENSION_CATALOG, 'utf8'));
    if (extData && extData.reels && extData.reels.length >= 6) {
      sixStories.forEach((st, idx) => {
        const sc = shortCodes[idx];
        const shortUrl = `${domain}/s/${sc}`;
        const fullTrackedUrl = `${domain}/story/${st.slug}?utm_source=facebook&utm_medium=video&utm_campaign=${sc}`;
        
        extData.reels[idx].storySlug = st.slug;
        extData.reels[idx].storyTitle = st.title;
        extData.reels[idx].shortCode = sc;
        extData.reels[idx].shortUrl = shortUrl;
        extData.reels[idx].fullTrackedUrl = fullTrackedUrl;
        
        const cta = `\n\n📖 Read Full Story & Documents 👉 ${shortUrl}\n`;
        extData.reels[idx].description = (extData.reels[idx].description.split('\n\n📖')[0] || extData.reels[idx].description) + cta;
        extData.reels[idx].formattedFullCaption = `${extData.reels[idx].title}\n\n${extData.reels[idx].description}\n${(extData.reels[idx].hashtags || []).join(' ')}`;
      });
      fs.writeFileSync(EXTENSION_CATALOG, JSON.stringify(extData, null, 2), 'utf8');
      console.log('✅ Synchronized Extension reels_catalog.json with the 6 individual stories!');
    }
  } catch (err) {
    console.error('Error updating extension catalog:', err.message);
  }
}
