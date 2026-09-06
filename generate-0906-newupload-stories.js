const fs = require('fs');
const path = require('path');

const STORIES_PATH = path.join(__dirname, 'data', 'stories.json');
const TRACKING_PATH = path.join(__dirname, 'data', 'tracking_links.json');
const DOMAIN = 'https://drama-online.onrender.com';

const newStories = [
  // 1. Reel 7 (7.mp4)
  {
    id: "story-20260906-u07-living-room-probate-letter",
    title: "THE LIVING ROOM LETTER: SHE DISCOVERED WHAT HER MOTHER HID IN THE BUREAU FOR 7 YEARS",
    slug: "the-living-room-probate-letter-evelyn",
    category: "Family Secrets",
    subcategory: "Inheritance & Mother Betrayal",
    tags: ["Mother Betrayal", "Inheritance Secrets", "Probate Deed", "American Drama", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date().toISOString(),
    status: "published",
    partNumber: 1,
    seriesId: "series-living-room-letter-talia",
    nextPartSlug: "the-bathroom-cosmetic-formula-brielle",
    nextPartHook: "🔥 Read Next: She Caught Her Sister In The Master Bathroom At 8 AM With Her Clinic Bottles!",
    views: 0,
    uniqueVisitors: 0,
    avgReadTimeSeconds: 0,
    trendingScore: 99.9,
    readTime: "11 min read",
    coverImage: "/images/uploads_batch_0906/video_7_frame_1.jpg",
    socialImage: "/images/uploads_batch_0906/video_7_frame_1.jpg",
    hookSummary: "For seven years, Talia believed her late father died broke and in debt. But while dusting her mother's antique mahogany bureau on Sunday morning, she uncovered an unrecorded probate deed proving a $450,000 trust was forged into her stepfather's trucking account.",
    paragraphs: [
      "[ SUNLIT LIVING ROOM, BUCKHEAD FAMILY HOME — 02:15 PM ]",
      "The heavy afternoon silence in the parlor was broken only by the rhythmic hum of the ceiling fan and the sharp, dry crackle of cream parchment trembling in Talia's manicured hands.",
      "Twenty-nine-year-old Talia sat motionless on the damask sofa, her neatly pinned dreadlocks framing high cheekbones drained of all color, her silk button-down blouse feeling suddenly suffocating.",
      "Tears burned behind her eyelids, but her jaw remained clenched with the cold, immovable restraint of a woman whose entire reality had just collapsed across three legal pages.",
      "For seven long years following her father's sudden heart attack, Talia had worked twelve-hour shifts at an Atlanta architectural firm while paying off $68,000 in student loans she believed he couldn't cover.",
      "Every Thanksgiving and Christmas, she had listened to her mother, Evelyn, preach about humble sacrifices, austerity, and how 'your father passed before he could leave us any real security.'",
      "Then Talia found the locked cedar tin in the bottom drawer of the antique bureau.",
      "Inside rested an original Fulton County Probate Court decree with an embossed red notary seal dated four months after her father's burial.",
      "The document clearly named Talia as the sole primary beneficiary of a $450,000 irrevocable real estate trust, alongside the deed to four commercial rental parcels along Peachtree Industrial Boulevard.",
      "Stapled directly beneath it was a fraudulent quitclaim transfer, bearing Talia's forged twenty-two-year-old signature, releasing the entire balance to Evelyn's new husband, Raymond, to finance his interstate logistics company.",
      "Standing by the mahogany sideboard in the background, sixty-three-year-old Evelyn stood with her arms tightly folded across her floral print blouse, her silver hair catching the amber sunlight as her posture stiffened into defensive defiance.",
      "'Put those papers back where you found them, Talia,' Evelyn commanded, her voice pitched with the fragile authority of a parent trying to outrun a seven-year lie.",
      "'Raymond's trucking business was about to go under, and this house would have been foreclosed on. A family survives together.'",
      "Talia slowly stood up, holding the embossed deed directly at eye level as a single tear escaped down her left cheek.",
      "'You let me take extra night shifts for four years while eating microwave oatmeal in a drafty studio apartment, Mom,' Talia said, her voice dropping into a terrifyingly quiet, measured baritone.",
      "'You watched me break down crying at my kitchen table when my credit card got declined for dental surgery, and you sat there telling me God tests the humble.'",
      "Evelyn shifted uncomfortably, her eyes darting toward the heavy mahogany door, listening for the sound of Raymond's pickup truck in the gravel driveway.",
      "'You were twenty-two, Talia! You wouldn't have known how to manage half a million dollars without squandering it on frivolous nonsense!'",
      "'You didn't protect the family, Mom,' Talia said softly, stepping closer until the embossed seal was inches from her mother's chest. 'You protected your new husband's pride with my future.'",
      "She folded the official decree in half with deliberate precision and slid it smoothly into her leather tote bag.",
      "'What are you doing?' Evelyn whispered, panic finally cracking through her matriarchal composure. 'Those are family records!'",
      "'The Fulton County District Attorney's fraud division opens at eight-thirty tomorrow morning,' Talia replied without blinking. 'Tell Raymond he has until midnight to park the trucks.'"
    ],
    scenes: [
      {
        paragraphIndex: 2,
        imageUrl: "/images/uploads_batch_0906/video_7_frame_1.jpg",
        caption: "Talia stares at the forged probate document as seven years of sacrifices unravel."
      },
      {
        paragraphIndex: 10,
        imageUrl: "/images/uploads_batch_0906/video_7_frame_3.jpg",
        caption: "Evelyn stands defensively by the sideboard as Talia speaks the cold, undeniable truth."
      }
    ]
  },

  // 2. Reel 8 (8.mp4)
  {
    id: "story-20260906-u08-bathroom-cosmetic-formula",
    title: "THE BATHROOM CONFRONTATION: SHE CAUGHT HER SISTER DILUTING HER $12,000 CLINIC FORMULA",
    slug: "the-bathroom-cosmetic-formula-brielle",
    category: "Family Secrets",
    subcategory: "Sibling Betrayal & Theft",
    tags: ["Sister Betrayal", "Clinic Theft", "Luxury Townhouse", "American Drama", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date().toISOString(),
    status: "published",
    partNumber: 1,
    seriesId: "series-bathroom-formula-kendra",
    nextPartSlug: "the-garage-leather-jacket-simone",
    nextPartHook: "🔥 Read Next: She Cleaned Out The Garage And Shook Out Her Husband's Leather Jacket!",
    views: 0,
    uniqueVisitors: 0,
    avgReadTimeSeconds: 0,
    trendingScore: 99.8,
    readTime: "11 min read",
    coverImage: "/images/uploads_batch_0906/video_8_frame_1.jpg",
    socialImage: "/images/uploads_batch_0906/video_8_frame_1.jpg",
    hookSummary: "Kendra welcomed her sister Brielle into her luxury Charlotte townhouse after Brielle's salon shut down. But when Kendra stepped into the master bathroom at 8:45 AM, she found Brielle standing in a pink robe, systematically diluting $12,000 in clinical dermatology formulas.",
    paragraphs: [
      "[ MARBLE MASTER BATHROOM, CHARLOTTE TOWNHOUSE — 08:45 AM ]",
      "The sweet, heavy scent of pharmaceutical peptide serum hung thick in the warm steam of the high-ceilinged marble bathroom.",
      "Thirty-two-year-old Kendra stood rigid in the doorway, dressed in her grey waffle-knit robe and lounge joggers, her high braided ponytail pulled tight over sharp, calculating eyes.",
      "In her right hand, Kendra held a frosted dispenser bottle filled with a cloudy, watered-down liquid that smelled of cheap supermarket witch hazel instead of her clinic's signature clinical active.",
      "Leaning against the painted white doorframe stood her twenty-six-year-old sister, Brielle, wrapped in a vibrant fuchsia silk robe with her slick hair secured by a tortoiseshell claw clip.",
      "Brielle wore a practiced, disarming grin that had smoothed over every reckless mistake she had made since high school.",
      "For three months, Kendra had opened her home, paid for groceries, and given Brielle the top-floor guest suite after Brielle claimed her downtown beauty lounge went bankrupt due to 'greedy landlords.'",
      "Kendra had even given her spare master keys so Brielle could receive delivery packages while Kendra managed her dermatology practice across town.",
      "Then three clinic clients called on Friday afternoon complaining that their $450 prescription rejuvenation vials smelled like tap water and caused burning rashes.",
      "When Kendra checked the locked inventory cabinet in the hallway closet this morning, forty sealed glass vials were unboxed, their serial seals sliced open with surgical precision.",
      "And sitting inside Brielle's vanity tote was a batch of two hundred printed labels reading 'Brielle Luxe Glow Drops — Limited Drop.'",
      "'Explain why my medical-grade peptide bottles are being drained into your vanity kit, Brielle,' Kendra said, her voice dropping to a flat, ice-cold whisper.",
      "Brielle let out a light, dismissive chuckle, waving her manicured hand as if swatting away a trivial misunderstanding.",
      "'Oh please, Kendra! You make hundreds of thousands from wealthy uptown housewives. You won't even notice ten ounces of base serum!'",
      "'I'm launching my online e-commerce line so I can finally move out. As my older sister, you're supposed to support my empire, not micromanage my hustle.'",
      "Kendra didn't raise her voice. She stepped into the bathroom, held the bottle directly in front of the vanity mirror, and poured the cloudy liquid into the white porcelain sink.",
      "'You're not staying in my spare room because you're healing from burnout, Brielle,' Kendra said, her eyes boring into her sister's reflection.",
      "'You're staying here because my inventory doesn't have security cameras, and you thought family loyalty meant I'd never call the state licensing board.'",
      "Brielle's smile vanished instantly, replaced by a sullen, panicked scowl as she watched forty dollars a drop swirl down the chrome drain.",
      "'You wouldn't dare ruin my credit score over some lotion, Kendra!'",
      "'By noon today, the locks are changed, your luggage is on the front porch, and the batch tracking numbers are on the Charlotte Police fraud desk,' Kendra replied calmly.",
      "'Have fun explaining your empire to the state prosecutor.'"
    ],
    scenes: [
      {
        paragraphIndex: 2,
        imageUrl: "/images/uploads_batch_0906/video_8_frame_1.jpg",
        caption: "Kendra confronts Brielle in the master bathroom holding the diluted formula bottle."
      },
      {
        paragraphIndex: 11,
        imageUrl: "/images/uploads_batch_0906/video_8_frame_3.jpg",
        caption: "Brielle tries to laugh off the betrayal as Kendra exposes the counterfeit cosmetics scheme."
      }
    ]
  },

  // 3. Reel 9 (9.mp4)
  {
    id: "story-20260906-u09-garage-leather-jacket-secret",
    title: "THE GARAGE DISCOVERY: SHE SHOOK OUT HER HUSBAND'S OLD LEATHER JACKET AND THE TRUTH FELL OUT",
    slug: "the-garage-leather-jacket-simone",
    category: "Marriage & Betrayal",
    subcategory: "Double Life & Hidden Assets",
    tags: ["Husband Betrayal", "Hidden Assets", "Garage Discovery", "American Drama", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date().toISOString(),
    status: "published",
    partNumber: 1,
    seriesId: "series-garage-jacket-simone",
    nextPartSlug: "the-kitchen-countertop-car-keys-nia",
    nextPartHook: "🔥 Read Next: She Put The SUV Keys On The Kitchen Island And Revoked The Title!",
    views: 0,
    uniqueVisitors: 0,
    avgReadTimeSeconds: 0,
    trendingScore: 99.8,
    readTime: "12 min read",
    coverImage: "/images/uploads_batch_0906/video_9_frame_3.jpg",
    socialImage: "/images/uploads_batch_0906/video_9_frame_3.jpg",
    hookSummary: "Simone spent six years penny-pinching every household grocery bill to keep their Memphis mortgage afloat while her husband claimed his contracting business was barely breaking even. But while clearing out the garage on Saturday morning, a heavy zip in his old leather jacket unraveled a five-year secret life.",
    paragraphs: [
      "[ OPEN SUBURBAN GARAGE & DRIVEWAY, MEMPHIS — 11:30 AM ]",
      "The bright mid-morning sun cast long shadows across the concrete driveway as Simone stood near the edge of the open garage door, her chest heaving with disbelief.",
      "Thirty-four-year-old Simone wore a burnt terracotta cardigan over a simple tan tee, her dreadlocks tied back, her fingers clutching the worn collar of a heavy vintage oilskin leather jacket.",
      "Her husband, Darnell, had claimed for five years that this jacket was a sentimental keepsake from his late father, stored safely in an old military footlocker behind the lawnmower.",
      "For those same five years, Simone had driven a 2011 sedan with a failing transmission and skipped family vacations, believing Darnell's constant refrain that 'the market is slow and the crew needs to be paid first.'",
      "This morning, while packing boxes for the neighborhood spring charity drive, Simone lifted the heavy jacket and heard a strange, dense rustle from inside the quilted thermal lining.",
      "When she inspected the seams, she found a concealed zipper stitched beneath the inner armpit.",
      "Inside rested a waterproof pouch containing a second key fob for a 2024 Mercedes coupe, a lease agreement for a luxury riverside condo in Nashville, and five uncashed certified cashier's checks totaling $65,000 made out to Darnell's personal holding company.",
      "Darnell walked into the driveway from the house holding a mug of black coffee, freezing in his tracks the instant he saw what Simone was gripping in both hands.",
      "'Simone, baby... why are you digging through my private storage boxes?' Darnell asked, trying to summon his usual easygoing southern charm, though his eyes darted nervously to the leather pouch.",
      "Simone gripped the heavy jacket in both fists, her teeth gritted with the raw fury of half a decade of stolen sacrifices.",
      "'I spent six years clipping coupons, Darnell!' Simone shouted, her voice echoing off the brick driveway. 'I didn't buy myself a new winter coat for four years because you said our mortgage was two weeks from default!'",
      "'Explain to me why there's a two-year lease for a penthouse on Broadway in Nashville inside your daddy's jacket!'",
      "Darnell set his coffee mug down onto the hood of his truck, holding both hands up in a desperate attempt to de-escalate.",
      "'It's an investment property for our retirement, Simone! I was going to surprise you once the equity cleared!'",
      "'An investment property with only one master tenant listed under your name and a second set of diamond anniversary bands in the pocket?' Simone retorted, her voice dropping into a deadly, composed whisper.",
      "'You didn't stash this jacket behind the lawnmower because it was sentimental, Darnell. You hid it here because you thought I was too stupid and too tired to ever look past the grass clippings.'",
      "She turned on her heel and walked directly toward her sedan parked at the curb.",
      "'Where are you going with my papers?' Darnell yelled, jogging after her with genuine terror in his eyes.",
      "'To the Shelby County Family Court and the forensic accounting office,' Simone said, locking the driver's door. 'Let's see how much your Nashville surprise is worth in divorce court.'"
    ],
    scenes: [
      {
        paragraphIndex: 1,
        imageUrl: "/images/uploads_batch_0906/video_9_frame_1.jpg",
        caption: "Simone clutches the heavy leather jacket in shock as the hidden zipper reveals the truth."
      },
      {
        paragraphIndex: 10,
        imageUrl: "/images/uploads_batch_0906/video_9_frame_3.jpg",
        caption: "The explosive driveway confrontation as Simone exposes Darnell's hidden double life."
      }
    ]
  },

  // 4. Reel 10 (10.mp4)
  {
    id: "story-20260906-u10-kitchen-countertop-car-keys",
    title: "THE KITCHEN KEYS: SHE LAID THE TITLE PAPERS ON THE COUNTER AND TOLD HIM TO WALK",
    slug: "the-kitchen-countertop-car-keys-nia",
    category: "Family Secrets",
    subcategory: "Financial Fraud & Entitlement",
    tags: ["Ex Confrontation", "Car Title", "Financial Fraud", "American Drama", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date().toISOString(),
    status: "published",
    partNumber: 1,
    seriesId: "series-kitchen-keys-nia",
    nextPartSlug: "the-patio-dinner-custody-maya",
    nextPartHook: "🔥 Read Next: He Handed Her A Plate At Family Dinner While Plotting To Take Her Baby!",
    views: 0,
    uniqueVisitors: 0,
    avgReadTimeSeconds: 0,
    trendingScore: 99.8,
    readTime: "11 min read",
    coverImage: "/images/uploads_batch_0906/video_10_frame_3.jpg",
    socialImage: "/images/uploads_batch_0906/video_10_frame_3.jpg",
    hookSummary: "Nia cosigned a luxury Cadillac SUV for her ex-partner Malcolm eighteen months ago to help him launch his consulting firm. But when she received a final default notice and discovered he was subleasing the vehicle on peer-to-peer rental apps for pure profit, she laid the title on the kitchen counter.",
    paragraphs: [
      "[ KITCHEN ISLAND & HARDWOOD DINING AREA, DALLAS — 04:45 PM ]",
      "The polished quartz countertop in Nia's suburban kitchen gleamed under the warm pendant lights, reflecting the black electronic key fob resting inches from a certified repossession letter.",
      "Thirty-one-year-old Nia stood tall on the hardwood floor, dressed in a mustard-yellow collared blouse and high-waisted denim, her gold hoop earrings glinting as she held a crisp legal document in both hands.",
      "Her face was a masterclass in calm, unshakeable resolution.",
      "Eighteen months ago, Malcolm had sat on that very barstool, holding her hands and pleading for help after a bad investment wrecked his commercial credit.",
      "Because they had been together for four years and shared dreams of buying a home, Nia put the $78,000 Cadillac Escalade solely in her name, with Malcolm swearing on his mother's health to transfer the monthly $1,150 payments on the first of every month.",
      "For the past four months, Malcolm claimed business was tight and promised the wire transfers were 'processing through his escrow agent.'",
      "Yesterday morning, a repo agent from the auto finance corporation showed up at Nia's corporate office to seize her personal bank account over $4,600 in arrears.",
      "When Nia investigated the vehicle's GPS toll records, she discovered Malcolm had been renting the Escalade out on Turo for $280 a day, pocketing over $25,000 in untaxed profit while letting the loan default on her name.",
      "Malcolm walked in through the garage door, tossing his sunglasses onto the counter and flashing an easy, cocky smile.",
      "'Hey Nia, I need the spare key fob from the drawer. Client wants to do a walkthrough in Frisco tonight.'",
      "Nia didn't look up from the quartz counter. She slid the white repossession order and the official title release form directly in front of him.",
      "'The keys stay on this island, Malcolm,' Nia said evenly, her voice steady and immovable.",
      "Malcolm frowned, his brow furrowing as he reached for the fob. 'What are you talking about? I have a client meeting in forty minutes!'",
      "'Your client meeting is a rental booking through your secret Turo profile,' Nia said, locking her gaze onto him with icy clarity.",
      "'You pocketed twenty-five thousand dollars over eighteen months while my credit score dropped ninety points from your deliberate non-payments.'",
      "Malcolm's face flushed deep crimson as he snatched the keys, trying to shove them into his pocket. 'I put the down payment on that truck! You can't just take it!'",
      "Nia reached into her pocket and placed the Dallas County Sheriff's voluntary surrender manifest and the tow truck dispatcher's receipt on top of the counter.",
      "'Your name was never on the title, Malcolm. And as of four o'clock today, the vehicle was legally surrendered and towed to the impound lot.'",
      "Malcolm stared out the kitchen window in horror, watching the empty driveway where the Escalade had sat ten minutes ago.",
      "'You have fifteen minutes to gather your luggage from the guest room before the locksmith arrives,' Nia said softly, picking up her phone. 'Start walking.'"
    ],
    scenes: [
      {
        paragraphIndex: 1,
        imageUrl: "/images/uploads_batch_0906/video_10_frame_1.jpg",
        caption: "Nia holds the vehicle surrender paperwork above the keys on the kitchen counter."
      },
      {
        paragraphIndex: 12,
        imageUrl: "/images/uploads_batch_0906/video_10_frame_3.jpg",
        caption: "The calm, resolute showdown as Nia revokes Malcolm's access permanently."
      }
    ]
  },

  // 5. Reel 12 (12.mp4)
  {
    id: "story-20260906-u12-patio-dinner-custody-secret",
    title: "THE PATIO DINNER: HE SERVED PASTA TO THE FAMILY WHILE PLOTTING TO TAKE HER DAUGHTER",
    slug: "the-patio-dinner-custody-maya",
    category: "Family Secrets",
    subcategory: "Parental Betrayal & Custody",
    tags: ["Custody Battle", "Family Dinner", "Backyard Confrontation", "American Drama", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date().toISOString(),
    status: "published",
    partNumber: 1,
    seriesId: "series-patio-dinner-maya",
    nextPartSlug: "the-twin-sisters-office-contract-jordan",
    nextPartHook: "🔥 Read Next: Two Identical Sisters In Matching Silk Shirts... But One Forged The Contract!",
    views: 0,
    uniqueVisitors: 0,
    avgReadTimeSeconds: 0,
    trendingScore: 99.9,
    readTime: "12 min read",
    coverImage: "/images/uploads_batch_0906/video_12_frame_3.jpg",
    socialImage: "/images/uploads_batch_0906/video_12_frame_3.jpg",
    hookSummary: "Julian showed up at Mama Corinne's Sunday backyard dinner with smiles, charm, and plates of homemade pasta for the family. But as he stepped onto the deck, Maya pulled three-year-old Chloe close to her chest and revealed the interstate custody relocation petition hidden beneath the napkin.",
    paragraphs: [
      "[ WOODEN PATIO DECK & BACKYARD STRING LIGHTS, HOUSTON — 07:15 PM ]",
      "The golden sunset filtered through the towering oak trees, illuminating the warm fairy lights strung across Mama Corinne's wooden patio deck.",
      "Thirty-year-old Maya sat beside the cedar dining table in a dusty mauve dress, holding her three-year-old daughter, Chloe, securely in her lap.",
      "Chloe, dressed in a sunny yellow cotton frock with her braided hair adorned in colorful turquoise beads, looked up with wide, innocent eyes as the adults gathered around the Sunday dinner spread.",
      "Seated at the head of the table was Mama Corinne, her silver curls catching the evening glow as she folded her hands over a floral blouse, ready to say the family blessing.",
      "Then Julian stepped onto the deck carrying two steaming ceramic plates of garlic shrimp pasta, wearing a navy button-down shirt and a beaming, charismatic smile meant to charm the entire backyard.",
      "For six months following their separation, Julian had played the penitent, devoted co-parent, showing up to Sunday dinners, praising Maya's mothering, and claiming he only wanted peaceful 50/50 mediation.",
      "Maya had almost believed him — until three hours ago, when a courier mistakenly delivered an expedited court packet to her doorstep intended for Julian's attorney.",
      "Inside was an ex-parte emergency petition for sole physical custody, alleging Maya was an 'unstable and unfit caregiver,' alongside a signed one-way moving contract to relocate Chloe to Denver on Friday morning.",
      "Julian approached Maya with a warm smile, extending a plate toward her. 'Here you go, Maya. Fresh pasta for the best mother in Texas.'",
      "Maya didn't reach for the plate. She shifted Chloe gently to her left shoulder and looked straight up into Julian's eyes with terrifying, unblinking calm.",
      "'Keep the plate, Julian,' Maya said, her voice cutting through the ambient crickets and patio chatter like a blade.",
      "Mama Corinne paused mid-prayer, looking up with sudden concern. 'Maya, child, what's the matter? Julian made this special for all of us.'",
      "'Before anyone takes a bite, Mama Corinne,' Maya continued, never breaking eye contact with Julian, 'ask Julian why there's a two-ton moving van scheduled to back into our driveway this Friday at dawn.'",
      "Julian's smile froze. The two heavy porcelain plates trembled slightly in his grip as the color drained from his face.",
      "'Maya, this is family dinner. Don't do this here,' Julian whispered under his breath, leaning closer to try and quiet her.",
      "'No, let's do it in front of the grandmother who raised our girl,' Maya replied, standing up with Chloe securely in her arms.",
      "'Tell your mother why you filed an emergency petition claiming I neglect Chloe, while you smiled in her face and ate her Sunday cobbler every weekend.'",
      "Mama Corinne slowly stood up from the head of the table, her silver-framed glasses coming off as she stared at her son with disbelief and righteous indignation.",
      "'Julian Marcus,' Mama Corinne said, her voice trembling with heartbreak. 'Is what Maya saying true?'",
      "Julian lowered the pasta plates onto the railing, his mouth opening and closing with no words left to defend his calculated betrayal.",
      "'Chloe stays in Houston with her mother,' Maya said firmly, kissing her daughter's forehead as she stepped off the patio deck. 'I'll see you in Judge Harrison's courtroom on Friday morning.'"
    ],
    scenes: [
      {
        paragraphIndex: 5,
        imageUrl: "/images/uploads_batch_0906/video_12_frame_1.jpg",
        caption: "Julian serves pasta with a charming smile, unaware that Maya has intercepted his custody plot."
      },
      {
        paragraphIndex: 10,
        imageUrl: "/images/uploads_batch_0906/video_12_frame_3.jpg",
        caption: "Maya holds little Chloe tight as she confronts Julian in front of Mama Corinne."
      }
    ]
  },

  // 6. Reel 13 (13.mp4)
  {
    id: "story-20260906-u13-twin-sisters-office-contract",
    title: "THE TWIN SISTERS' OFFICE CONTRACT: SHE FOUND THE $85,000 CONTRACT HER SISTER FORGED",
    slug: "the-twin-sisters-office-contract-jordan",
    category: "Family Secrets",
    subcategory: "Sibling Betrayal & Business Fraud",
    tags: ["Twin Sisters", "Business Betrayal", "Forged Contract", "American Drama", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date().toISOString(),
    status: "published",
    partNumber: 1,
    seriesId: "series-twin-office-jordan",
    nextPartSlug: "the-living-room-probate-letter-evelyn",
    nextPartHook: "🔥 Read Next: She Found The Hidden Probate Deed Inside Her Mother's Bureau After 7 Years!",
    views: 0,
    uniqueVisitors: 0,
    avgReadTimeSeconds: 0,
    trendingScore: 99.9,
    readTime: "12 min read",
    coverImage: "/images/uploads_batch_0906/video_13_frame_3.jpg",
    socialImage: "/images/uploads_batch_0906/video_13_frame_3.jpg",
    hookSummary: "Jordan and Lauren were identical twin sisters who shared the same face, wore matching copper silk blouses, and co-ran their late father's Baltimore logistics firm. But when Jordan ran the third-quarter audit, she found an $85,000 forged subcontract redirecting payroll to Lauren's husband.",
    paragraphs: [
      "[ HOME OFFICE & LIVING WORKSPACE, BALTIMORE — 03:00 PM ]",
      "The hum of the desktop computer monitor and the quiet scratching of colored markers at the wooden kitchen table were the only sounds in the sunlit open-concept office.",
      "In the background, eight-year-old Aiden sat quietly coloring his workbook, oblivious to the storm gathering across the wooden executive desk.",
      "Thirty-three-year-old Jordan stood with her palms pressed against the polished desk surface, clutching a multipage state tax audit report with a trembling grip.",
      "Facing her barely twelve inches away stood her identical twin sister, Lauren.",
      "Both sisters wore matching tailored copper satin blouses and dark pressed trousers, their dreadlock crowns styled in identical buns — the visual embodiment of the unified corporate brand they had built since their father passed away in 2021.",
      "Standing by the bookcase doorway in the background was Lauren's husband, Marcus, with his arms defensively crossed over a black crewneck shirt, watching the twins like a hawk.",
      "For three grueling years, Jordan had handled the freight logistics, client contracts, and 5:00 AM dispatch calls, while Lauren handled bookkeeping and vendor accounts.",
      "Every month, Lauren claimed profit margins were too tight to distribute dividends, insisting they needed to reinvest every dollar into company reserves.",
      "Then yesterday, the Maryland Comptroller sent an audit notification flagging an unverified $85,000 vendor expenditure to an entity named 'Apex Horizon Consulting LLC.'",
      "When Jordan subpoenaed the bank routing records this morning, she found Apex Horizon was a dummy LLC registered to Marcus's private address, signed with a forged replica of Jordan's corporate signature.",
      "'Look at me in the face, Lauren,' Jordan said, her voice dropping to a low, quivering baritone that shook with betrayal.",
      "'We shared a womb. We wore the same clothes to Daddy's funeral. And you put your husband's fake consulting firm on our company payroll for eighty-five thousand dollars?'",
      "Lauren didn't flinch, but her eyes darkened with stubborn, entitled resentment as she leaned into Jordan's face.",
      "'Marcus built our website and advised on client acquisition, Jordan! He deserved fair market compensation!'",
      "'He deserved compensation without my knowledge, without a board vote, and with my signature forged on a corporate resolution?' Jordan snapped, holding the contract inches from Lauren's nose.",
      "Marcus took a step forward from the doorway, raising his voice. 'Hey, watch how you talk to my wife in front of our kid!'",
      "Jordan spun on Marcus with the fury of three years of uncompensated labor. 'Take one more step toward this desk, Marcus, and the Baltimore County Sheriff will escort you out in handcuffs!'",
      "She turned back to her twin, sliding the certified corporate freeze notice and police complaint across the desk.",
      "'We share the exact same face, Lauren,' Jordan whispered, her eyes burning through her sister's facade.",
      "'But starting at five o'clock today, all company bank accounts are frozen, the partnership is formally dissolved, and you don't share a single dollar of Daddy's legacy.'",
      "Lauren stared down at the legal summons, realizing the sister who had shielded her all her life was finally done being exploited."
    ],
    scenes: [
      {
        paragraphIndex: 3,
        imageUrl: "/images/uploads_batch_0906/video_13_frame_1.jpg",
        caption: "Jordan reviews the Maryland Comptroller audit documents at the office computer desk."
      },
      {
        paragraphIndex: 11,
        imageUrl: "/images/uploads_batch_0906/video_13_frame_3.jpg",
        caption: "The intense face-to-face showdown between identical twins over the forged $85,000 contract."
      }
    ]
  }
];

// Tracking links for Facebook Reels
const newTrackingLinks = [
  {
    id: "track-u07-reel",
    name: "09-06_7.mp4 (She Found The Hidden Probate Letter Inside Her Mother's Bureau... 📄)",
    storySlug: "the-living-room-probate-letter-evelyn",
    storyTitle: "THE LIVING ROOM LETTER: SHE DISCOVERED WHAT HER MOTHER HID IN THE BUREAU FOR 7 YEARS",
    source: "facebook",
    medium: "video",
    campaign: "u07",
    shortCode: "u07",
    shortUrl: "/s/u07",
    fullShortUrl: `${DOMAIN}/s/u07`,
    trackedUrl: "/story/the-living-room-probate-letter-evelyn?utm_source=facebook&utm_medium=video&utm_campaign=u07",
    fullTrackedUrl: `${DOMAIN}/story/the-living-room-probate-letter-evelyn?utm_source=facebook&utm_medium=video&utm_campaign=u07`,
    clicks: 0,
    uniqueReaders: 0,
    usPercentage: 92,
    createdAt: new Date().toISOString()
  },
  {
    id: "track-u08-reel",
    name: "09-06_8.mp4 (She Caught Her Sister In The Master Bathroom At 8 AM... 🧴)",
    storySlug: "the-bathroom-cosmetic-formula-brielle",
    storyTitle: "THE BATHROOM CONFRONTATION: SHE CAUGHT HER SISTER DILUTING HER $12,000 CLINIC FORMULA",
    source: "facebook",
    medium: "video",
    campaign: "u08",
    shortCode: "u08",
    shortUrl: "/s/u08",
    fullShortUrl: `${DOMAIN}/s/u08`,
    trackedUrl: "/story/the-bathroom-cosmetic-formula-brielle?utm_source=facebook&utm_medium=video&utm_campaign=u08",
    fullTrackedUrl: `${DOMAIN}/story/the-bathroom-cosmetic-formula-brielle?utm_source=facebook&utm_medium=video&utm_campaign=u08`,
    clicks: 0,
    uniqueReaders: 0,
    usPercentage: 90,
    createdAt: new Date().toISOString()
  },
  {
    id: "track-u09-reel",
    name: "09-06_9.mp4 (She Found What Was Stitched Inside His Old Leather Jacket... 🧥)",
    storySlug: "the-garage-leather-jacket-simone",
    storyTitle: "THE GARAGE DISCOVERY: SHE SHOOK OUT HER HUSBAND'S OLD LEATHER JACKET AND THE TRUTH FELL OUT",
    source: "facebook",
    medium: "video",
    campaign: "u09",
    shortCode: "u09",
    shortUrl: "/s/u09",
    fullShortUrl: `${DOMAIN}/s/u09`,
    trackedUrl: "/story/the-garage-leather-jacket-simone?utm_source=facebook&utm_medium=video&utm_campaign=u09",
    fullTrackedUrl: `${DOMAIN}/story/the-garage-leather-jacket-simone?utm_source=facebook&utm_medium=video&utm_campaign=u09`,
    clicks: 0,
    uniqueReaders: 0,
    usPercentage: 93,
    createdAt: new Date().toISOString()
  },
  {
    id: "track-u10-reel",
    name: "09-06_10.mp4 (She Put The Car Keys On The Counter And Showed Him The Title Deed... 🔑)",
    storySlug: "the-kitchen-countertop-car-keys-nia",
    storyTitle: "THE KITCHEN KEYS: SHE LAID THE TITLE PAPERS ON THE COUNTER AND TOLD HIM TO WALK",
    source: "facebook",
    medium: "video",
    campaign: "u10",
    shortCode: "u10",
    shortUrl: "/s/u10",
    fullShortUrl: `${DOMAIN}/s/u10`,
    trackedUrl: "/story/the-kitchen-countertop-car-keys-nia?utm_source=facebook&utm_medium=video&utm_campaign=u10",
    fullTrackedUrl: `${DOMAIN}/story/the-kitchen-countertop-car-keys-nia?utm_source=facebook&utm_medium=video&utm_campaign=u10`,
    clicks: 0,
    uniqueReaders: 0,
    usPercentage: 91,
    createdAt: new Date().toISOString()
  },
  {
    id: "track-u12-reel",
    name: "09-06_12.mp4 (He Handed Her A Plate At The Family Dinner, But She Knew The Truth... 🍝)",
    storySlug: "the-patio-dinner-custody-maya",
    storyTitle: "THE PATIO DINNER: HE SERVED PASTA TO THE FAMILY WHILE PLOTTING TO TAKE HER DAUGHTER",
    source: "facebook",
    medium: "video",
    campaign: "u12",
    shortCode: "u12",
    shortUrl: "/s/u12",
    fullShortUrl: `${DOMAIN}/s/u12`,
    trackedUrl: "/story/the-patio-dinner-custody-maya?utm_source=facebook&utm_medium=video&utm_campaign=u12",
    fullTrackedUrl: `${DOMAIN}/story/the-patio-dinner-custody-maya?utm_source=facebook&utm_medium=video&utm_campaign=u12`,
    clicks: 0,
    uniqueReaders: 0,
    usPercentage: 94,
    createdAt: new Date().toISOString()
  },
  {
    id: "track-u13-reel",
    name: "09-06_13.mp4 (Two Sisters In Matching Silk Shirts... But One Forged The Contract 📋)",
    storySlug: "the-twin-sisters-office-contract-jordan",
    storyTitle: "THE TWIN SISTERS' OFFICE CONTRACT: SHE FOUND THE $85,000 CONTRACT HER SISTER FORGED",
    source: "facebook",
    medium: "video",
    campaign: "u13",
    shortCode: "u13",
    shortUrl: "/s/u13",
    fullShortUrl: `${DOMAIN}/s/u13`,
    trackedUrl: "/story/the-twin-sisters-office-contract-jordan?utm_source=facebook&utm_medium=video&utm_campaign=u13",
    fullTrackedUrl: `${DOMAIN}/story/the-twin-sisters-office-contract-jordan?utm_source=facebook&utm_medium=video&utm_campaign=u13`,
    clicks: 0,
    uniqueReaders: 0,
    usPercentage: 91,
    createdAt: new Date().toISOString()
  }
];

// 1. Update data/stories.json
const existingStories = JSON.parse(fs.readFileSync(STORIES_PATH, 'utf8'));
// Filter out any duplicates if rerun
const newStoryIds = new Set(newStories.map(s => s.id));
const filteredExistingStories = existingStories.filter(s => !newStoryIds.has(s.id));
const combinedStories = [...newStories, ...filteredExistingStories];
fs.writeFileSync(STORIES_PATH, JSON.stringify(combinedStories, null, 2), 'utf8');
console.log(`✅ stories.json updated: Total stories = ${combinedStories.length} (Added ${newStories.length} new stories)`);

// 2. Update data/tracking_links.json
let existingTracking = [];
if (fs.existsSync(TRACKING_PATH)) {
  existingTracking = JSON.parse(fs.readFileSync(TRACKING_PATH, 'utf8'));
}
const newLinkIds = new Set(newTrackingLinks.map(l => l.id));
const filteredExistingTracking = existingTracking.filter(l => !newLinkIds.has(l.id));
const combinedTracking = [...newTrackingLinks, ...filteredExistingTracking];
fs.writeFileSync(TRACKING_PATH, JSON.stringify(combinedTracking, null, 2), 'utf8');
console.log(`✅ tracking_links.json updated: Total links = ${combinedTracking.length} (Added ${newTrackingLinks.length} new links)`);

// 3. Save Facebook Posting Kit for the user
const facebookKit = [
  {
    videoFile: "7.mp4",
    shortUrl: "https://drama-online.onrender.com/s/u07",
    fullStoryUrl: "https://drama-online.onrender.com/story/the-living-room-probate-letter-evelyn",
    selectedTitle: "She Found The Hidden Probate Letter Inside Her Mother's Bureau... 📄",
    titleVariations: [
      "1. She Read Her Father's Real Will In Front Of Her Mother... 📄",
      "2. 'You Signed My Name On This Deed Seven Years Ago?' 💔",
      "3. Her Mother Kept A $450,000 Secret Until Today... ⚖️",
      "4. She Confronted Her Mother In The Living Room With The Stamped Court Paper 🏛️"
    ],
    caption: "Talia thought her late father left them with nothing when he passed. But when she found the certified probate deed stamped seven years ago, the silence in her mother's living room turned deafening. Would you forgive a mother who chose her new husband over her daughter's future? 👇 Full story in bio & comment link!",
    hashtags: "#FamilySecrets #Betrayal #InheritanceDrama #AmericanDrama #ViralReels #TrendingStories"
  },
  {
    videoFile: "8.mp4",
    shortUrl: "https://drama-online.onrender.com/s/u08",
    fullStoryUrl: "https://drama-online.onrender.com/story/the-bathroom-cosmetic-formula-brielle",
    selectedTitle: "She Caught Her Sister In The Master Bathroom At 8 AM... 🧴",
    titleVariations: [
      "1. 'Explain Why My Clinic Bottles Are In Your Suitcase, Brielle.' 💄",
      "2. She Let Her Sister Stay Rent-Free Until She Checked The Vanity 🚨",
      "3. The Counterfeit Serum Secret Her Sister Kept In The Bathroom 🧴",
      "4. She Cornered Her Sister In The Hallway With The Lab Bottle ⚖️"
    ],
    caption: "Kendra gave her younger sister an open door and free room after her salon closed. But when Kendra found her clinical formulas drained into online resale bottles, the truth came out in the hallway mirror. What would you do if family used your generosity to rob your business? 👇 Read full episode link below!",
    hashtags: "#SisterBetrayal #FamilyDrama #CosmeticSecrets #AmericanDrama #ViralReels"
  },
  {
    videoFile: "9.mp4",
    shortUrl: "https://drama-online.onrender.com/s/u09",
    fullStoryUrl: "https://drama-online.onrender.com/story/the-garage-leather-jacket-simone",
    selectedTitle: "She Found What Was Stitched Inside His Old Leather Jacket... 🧥",
    titleVariations: [
      "1. 'Whose Apartment Key Is Inside Your Garage Jacket, Darnell?' 🔑",
      "2. She Cleaned Out The Garage And Found His Hidden Five-Year Secret 📦",
      "3. The Driveway Confrontation Over A Stashed Leather Jacket 🚗",
      "4. What Fell Out Of Her Husband's Jacket In The Garage Ended Their Marriage 💔"
    ],
    caption: "Simone spent six years budgeting every dollar to keep their mortgage afloat while her husband claimed business was broke. But while cleaning the back of the garage on Saturday morning, a heavy zip in his old jacket revealed a secret condo and $65,000 in uncashed checks. Would you call the police or pack your bags? 👇 Read full story now!",
    hashtags: "#HusbandBetrayal #DoubleLife #HiddenAssets #AmericanDrama #ViralReels"
  },
  {
    videoFile: "10.mp4",
    shortUrl: "https://drama-online.onrender.com/s/u10",
    fullStoryUrl: "https://drama-online.onrender.com/story/the-kitchen-countertop-car-keys-nia",
    selectedTitle: "She Put The Car Keys On The Counter And Showed Him The Title Deed... 🔑",
    titleVariations: [
      "1. 'You Have 10 Minutes To Hand Over Those Keys, Malcolm.' 📄",
      "2. She Bought The Car In Her Name, But Today She Took It Back 🚗",
      "3. The Countertop Paperwork That Ended His 18-Month Free Ride 💥",
      "4. She Revoked His Luxury SUV Access Right In Front Of The Family ⚖️"
    ],
    caption: "Nia risked her credit score to help Malcolm get back on his feet with a luxury SUV. But after discovering he was pocketing thousands renting it out while letting the loan default on her name, she put the vehicle title on the kitchen counter and called the tow truck. Did Nia do the right thing? 👇 Full episode link below!",
    hashtags: "#FinancialBetrayal #CarRepossession #FamilyDrama #AmericanDrama #Trending"
  },
  {
    videoFile: "12.mp4",
    shortUrl: "https://drama-online.onrender.com/s/u12",
    fullStoryUrl: "https://drama-online.onrender.com/story/the-patio-dinner-custody-maya",
    selectedTitle: "He Handed Her A Plate At The Family Dinner, But She Knew The Truth... 🍝",
    titleVariations: [
      "1. 'Tell Mama Corinne What's Booked For Friday Morning, Julian.' 👧",
      "2. She Held Her Daughter Tight Across The Sunday Dinner Table 🍷",
      "3. The Secret Relocation Plan Exposed In Front Of The Whole Family 🏡",
      "4. She Exposed Her Ex-Husband's Custody Plot Before Dinner Was Served ⚖️"
    ],
    caption: "Julian thought he could smile his way through Sunday patio dinner with the family while secretly filing for sole emergency custody to move their 3-year-old daughter across state lines. But when Maya stood up holding their baby girl, the entire table went dead silent. Who is wrong here? 👇 Read full story in bio!",
    hashtags: "#CustodyBattle #FamilySecrets #SundayDinnerDrama #AmericanDrama #ViralReels"
  },
  {
    videoFile: "13.mp4",
    shortUrl: "https://drama-online.onrender.com/s/u13",
    fullStoryUrl: "https://drama-online.onrender.com/story/the-twin-sisters-office-contract-jordan",
    selectedTitle: "Two Sisters In Matching Silk Shirts... But One Forged The Contract 📋",
    titleVariations: [
      "1. 'You Put Your Husband On My Payroll Without My Signature?' 💼",
      "2. The Twin Sisters' Office Battle Over Their Late Father's Firm 🏛️",
      "3. She Cornered Her Sister Across The Desk With The Stolen Audit ⚖️",
      "4. The $85,000 Secret Siphoned From Their Family Business 💥"
    ],
    caption: "Jordan and Lauren wore the same clothes, shared the same face, and co-owned their father's logistics company. But when Jordan uncovered an $85,000 unauthorized wire transfer to her sister's husband, the loyalty between twins snapped forever. Would you take your own twin sister to court? 👇 Read the full finale now!",
    hashtags: "#TwinDrama #BusinessBetrayal #SisterRivalry #AmericanDrama #ViralReels"
  }
];

fs.writeFileSync(path.join(__dirname, 'data', 'facebook_posting_kit_0906.json'), JSON.stringify(facebookKit, null, 2), 'utf8');
console.log('✅ Facebook Posting Kit generated at data/facebook_posting_kit_0906.json');
