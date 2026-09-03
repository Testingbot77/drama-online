const fs = require('fs');
const path = require('path');

const STORIES_PATH = path.join(__dirname, 'data', 'stories.json');
const TRACKING_PATH = path.join(__dirname, 'data', 'tracking_links.json');
const EXTENSION_CATALOG = 'C:/Users/HP/Downloads/Extension/data/reels_catalog.json';

const allSagas = [
  // ================= SAGA 1: THE SECRET JEWELRY BOX =================
  {
    id: "story-reel-01-ch1",
    title: "THE SECRET JEWELRY BOX (PART 1): WHAT WAS HIDDEN IN HER MOTHER'S CEDAR CHEST FOR 22 YEARS",
    slug: "the-secret-jewelry-box-inheritance",
    category: "Family Secrets",
    subcategory: "Inheritance & Betrayal",
    tags: ["Heirloom", "Family Drama", "Inheritance", "Betrayal", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date(Date.now() - 3600000 * 3).toISOString(),
    status: "published",
    partNumber: 1,
    seriesId: "series-secret-jewelry-box",
    nextPartSlug: "the-secret-jewelry-box-chapter-2-probate-audit",
    nextPartHook: "🔥 Read Chapter 2: The Safe Deposit Vault and the Stolen $400,000 Trust Fund!",
    views: 185,
    uniqueVisitors: 160,
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
      { paragraphIndex: 1, imageUrl: "/images/reels/reel_1_frame1.jpg", caption: "Maya discovers the hidden rosewood jewelry box locked beneath the cedar chest." },
      { paragraphIndex: 18, imageUrl: "/images/reels/reel_1_frame2.jpg", caption: "The confrontation in the dining room as the 22-year-old receipt is placed on the table." }
    ]
  },
  {
    id: "story-reel-01-ch2",
    title: "THE SECRET JEWELRY BOX (PART 2): THE SAFE DEPOSIT VAULT AND THE PROBATE EMERGENCY",
    slug: "the-secret-jewelry-box-chapter-2-probate-audit",
    category: "Family Secrets",
    subcategory: "Inheritance & Betrayal",
    tags: ["Heirloom", "Family Drama", "Probate Court", "Legal Showdown", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date(Date.now() - 3600000 * 2).toISOString(),
    status: "published",
    partNumber: 2,
    seriesId: "series-secret-jewelry-box",
    previousPartSlug: "the-secret-jewelry-box-inheritance",
    nextPartSlug: "the-secret-jewelry-box-chapter-3-grand-finale",
    nextPartHook: "🔥 Read Chapter 3 (Grand Finale): The Courtroom Showdown and Maya's Complete Restoration!",
    views: 162,
    uniqueVisitors: 145,
    avgReadTimeSeconds: 690,
    trendingScore: 99.5,
    readTime: "11 min read",
    coverImage: "/images/reels/reel_1_frame2.jpg",
    socialImage: "/images/reels/reel_1_frame2.jpg",
    hookSummary: "The morning after the dining room confrontation, Chloe filed an emergency injunction to seize the cedar chest, only for Maya and the probate officer to unlock Safe Deposit Box #418.",
    paragraphs: [
      "[ PROBATE CLERK'S OFFICE, SAVANNAH COURTHOUSE — 09:15 AM ]",
      "The morning sun cut through the tall arched windows of the Chatham County Probate Court, illuminating dust motes hovering over stacks of legal filings.",
      "Chloe arrived in a crisp beige pantsuit, flanked by a prominent private defense attorney clutching an emergency motion for a restraining order.",
      "'Your Honor, my client is the appointed temporary administrator of the Beatrice Vance Estate,' Chloe's lawyer argued before Magistrate Judge Warren.",
      "'The younger daughter, Maya, unlawfully confiscated personal family artifacts from the premises last night and is making defamatory allegations.'",
      "Judge Warren looked over his reading glasses, turning toward Maya, who sat quietly at the opposing counsel table wearing her mother's vintage wool cardigan.",
      "Beside Maya sat Arthur Pendleton—a sixty-eight-year-old estate attorney with thirty-five years of probate practice in Georgia.",
      "'If it please the court,' Arthur said, rising to his feet with an unhurried grace. 'We are not disputing temporary administration. We are presenting Beatrice Vance's primary estate mandate.'",
      "Arthur unsealed a blue-ribboned manila envelope stamped by the Georgia Bankers Association.",
      "'In 2004, following the unauthorized withdrawal of three hundred and ninety thousand dollars from the family commercial account, Mrs. Beatrice Vance created a dual-signature emergency trust.'",
      "'The key to Safe Deposit Box #418 at SunTrust Commercial Bank was assigned exclusively to Maya upon her thirty-second birthday.'",
      "Chloe's attorney leaned in, whispering frantically to Chloe whose hands were shaking violently as she adjusted her designer watch.",
      "[ COMMERCIAL VAULT ROOM, SUNTRUST BANK — 11:30 AM ]",
      "Under the armed supervision of Court Bailiff Jenkins and Branch Vice President Caldwell, the heavy stainless steel vault door was swung open.",
      "Maya slid the slender brass key into lock #418 alongside Caldwell's master key.",
      "The three-foot metal box slid out onto the mahogany inspection table with a heavy metallic groan.",
      "Inside was not just jewelry. It contained the original stock certificates for Vance Commercial Holdings, a cashier's check for seventy-two thousand dollars in accumulated escrow interest, and an audio cassette marked: 'Beatrice Vance — Statement of Truth.'",
      "Bailiff Jenkins inserted the cassette into a portable player on the table.",
      "Her mother's clear, Southern voice echoed through the vault room: 'If this recording is being played, it means Chloe has attempted to claim what was never hers. Chloe forged my signature to fund her startup in 2004. Maya carried this family with love, not deceit. Everything belongs to Maya.'",
      "Chloe dropped into the leather chair in the corner of the vault room, burying her face in her hands.",
      "'You don't understand... the business was going under, I was going to pay it back...' Chloe sobbed.",
      "'You let Mom work three night cleaning jobs while you drove a Mercedes in Buckhead, Chloe,' Maya said, looking her older sister in the eyes without malice, but without pity.",
      "'The audit is filed. Judge Warren has set the final decree for tomorrow afternoon.'"
    ],
    scenes: [
      { paragraphIndex: 6, imageUrl: "/images/reels/reel_1_frame2.jpg", caption: "Attorney Arthur Pendleton presents the dual-signature emergency trust to the court." },
      { paragraphIndex: 17, imageUrl: "/images/reels/reel_1_frame3.jpg", caption: "The audio cassette confession is played inside the bank vault room." }
    ]
  },
  {
    id: "story-reel-01-ch3",
    title: "THE SECRET JEWELRY BOX (PART 3): THE FINAL DECREE AND THE MOTHER'S LEGACY RESTORED",
    slug: "the-secret-jewelry-box-chapter-3-grand-finale",
    category: "Family Secrets",
    subcategory: "Inheritance & Betrayal",
    tags: ["Grand Finale", "Justice", "Family Closure", "Heirloom", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date(Date.now() - 3600000 * 1).toISOString(),
    status: "published",
    partNumber: 3,
    seriesId: "series-secret-jewelry-box",
    previousPartSlug: "the-secret-jewelry-box-chapter-2-probate-audit",
    views: 210,
    uniqueVisitors: 195,
    avgReadTimeSeconds: 710,
    trendingScore: 100.0,
    readTime: "12 min read",
    coverImage: "/images/reels/reel_1_frame3.jpg",
    socialImage: "/images/reels/reel_1_frame3.jpg",
    hookSummary: "The Grand Finale: Judge Warren delivers the historic final ruling, stripping Chloe of all executorship and transferring the full Savannah estate and legacy foundation to Maya.",
    paragraphs: [
      "[ CHATHAM COUNTY SUPERIOR COURTROOM 4B — 02:00 PM ]",
      "The sharp crack of Judge Warren's wooden gavel echoed against the high walnut-paneled walls of Courtroom 4B.",
      "The gallery was filled with neighbors, former church choir members, and local Savannah business owners who had known Beatrice Vance for four decades.",
      "'After reviewing the forensic handwriting analysis, the banking transactions from 2004 to present, and the verified audio deposition,' Judge Warren announced from the bench,",
      "'This court finds clear and convincing evidence of continuous fiduciary fraud, constructive concealment, and intentional deception by respondent Chloe Vance.'",
      "The courtroom murmured in agreement as Chloe sat motionless with her head bowed.",
      "'The temporary administration granted to Chloe Vance is hereby revoked with prejudice,' Judge Warren continued, his voice resounding through the microphones.",
      "'Sole title, real property rights, and testamentary assets—including the Savannah bungalow, the commercial trust accounts, and the recovered family heirlooms—are transferred immediately to petitioner Maya Vance.'",
      "'Furthermore, respondent Chloe Vance is ordered to make full restitution of two hundred and eighty thousand dollars to the Beatrice Vance Charitable Foundation within sixty days.'",
      "Chloe's lawyer quickly packed his leather briefcase, whispering a quiet consolation before exiting through the back swinging doors.",
      "[ SAVANNAH BUNGALOW FRONT PORCH — 05:45 PM ]",
      "That evening, the warm coastal breeze rustled through the Spanish moss hanging from the ancient oak trees in the front yard.",
      "Maya sat on the porch swing where her mother had spent every warm summer evening.",
      "On the small wicker table beside her rested the handcrafted rosewood jewelry box, open to the three Cartier gold bands and her mother's worn silver thimble.",
      "A black sedan pulled up to the curb. Chloe stepped out alone, without designer sunglasses, wearing a simple cardigan.",
      "She walked slowly up the brick pathway, stopping at the foot of the porch steps.",
      "'Maya... I know sorry doesn't fix twenty years,' Chloe said, her voice raw and breaking. 'I sold the Buckhead condo today to start the restitution payment.'",
      "Maya looked down at her sister. The anger that had burned inside her chest for twenty-four hours was replaced by a profound, quiet calm.",
      "'Mom never wanted you in prison, Chloe,' Maya said gently. 'That's why she worked those night shifts. She loved you enough to carry your shame.'",
      "'The house is going to become a community hospice care auxiliary in Mom's name,' Maya added.",
      "'You're always welcome to come sit on this porch and remember who she was. But you will never rewrite her story again.'",
      "Chloe nodded through tears, touched the handrail for a moment, and turned back to her car.",
      "Maya closed the rosewood box, locked the brass latch with her birthday combination, and smiled into the golden sunset. Her mother was finally at peace."
    ],
    scenes: [
      { paragraphIndex: 3, imageUrl: "/images/reels/reel_1_frame2.jpg", caption: "Judge Warren delivers the final judgment stripping the fraudulent executorship." },
      { paragraphIndex: 12, imageUrl: "/images/reels/reel_1_frame3.jpg", caption: "Maya on the front porch swing with the restored heirloom jewelry box." }
    ]
  },

  // ================= SAGA 2: THE LIVING ROOM AMBUSH =================
  {
    id: "story-reel-02-ch1",
    title: "THE LIVING ROOM AMBUSH (PART 1): SHE BROUGHT THE SNACK TRAY WHILE THEY DIVIDED HER DEED",
    slug: "the-living-room-betrayal-snack-tray",
    category: "Family Secrets",
    subcategory: "Family Ambush & Legal Rights",
    tags: ["Family Betrayal", "Inheritance", "Legal Drama", "Revenge", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date(Date.now() - 3600000 * 3).toISOString(),
    status: "published",
    partNumber: 1,
    seriesId: "series-living-room-ambush",
    nextPartSlug: "the-living-room-betrayal-chapter-2-the-sheriffs-notice",
    nextPartHook: "🔥 Read Chapter 2: Vivian Tries to Destroy the Safe, but Kendra Changed the Locks at Midnight!",
    views: 198,
    uniqueVisitors: 175,
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
      { paragraphIndex: 1, imageUrl: "/images/reels/reel_2_frame1.jpg", caption: "Kendra pauses in the hallway holding the snack tray as she overhears the conversation." },
      { paragraphIndex: 17, imageUrl: "/images/reels/reel_2_frame2.jpg", caption: "Setting the tray down directly over the forged deed in the living room." }
    ]
  },
  {
    id: "story-reel-02-ch2",
    title: "THE LIVING ROOM AMBUSH (PART 2): THE MIDNIGHT LOCKOUT AND THE SHERIFF'S WARRANT",
    slug: "the-living-room-betrayal-chapter-2-the-sheriffs-notice",
    category: "Family Secrets",
    subcategory: "Family Ambush & Legal Rights",
    tags: ["Sheriff Eviction", "Midnight Showdown", "Trust Defense", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date(Date.now() - 3600000 * 2).toISOString(),
    status: "published",
    partNumber: 2,
    seriesId: "series-living-room-ambush",
    previousPartSlug: "the-living-room-betrayal-snack-tray",
    nextPartSlug: "the-living-room-betrayal-chapter-3-grand-finale",
    nextPartHook: "🔥 Read Chapter 3 (Grand Finale): The Probate Court Disinherits the Schemers and Kendra Protects the Ranch Forever!",
    views: 180,
    uniqueVisitors: 160,
    avgReadTimeSeconds: 700,
    trendingScore: 99.8,
    readTime: "11 min read",
    coverImage: "/images/reels/reel_2_frame2.jpg",
    socialImage: "/images/reels/reel_2_frame2.jpg",
    hookSummary: "At midnight, Vivian attempted to drill into the master study safe, only to discover Kendra had already re-keyed the entire estate and invited Sheriff Miller to wait inside.",
    paragraphs: [
      "[ MASTER STUDY, OAK GROVE ESTATE — 12:45 AM ]",
      "The quiet hum of a cordless rotary drill buzzed softly in the darkened corner of the estate's private study.",
      "Vivian knelt in front of the floorboard wall safe behind the mahogany bookcase, flashlight clenched between her teeth.",
      "Marcus stood lookout near the study window, nervously pacing back and forth across the Persian rug.",
      "'Hurry up, Mom! If Kendra finds out we're in Dad's study, she's going to press charges!' Marcus hissed in a panicked whisper.",
      "'Shut up and watch the hallway!' Vivian hissed back, wiping sweat from her forehead. 'The original land grant deed is in this safe. If we destroy it, her trust argument falls apart in probate!'",
      "Suddenly, the brass overhead chandelier flashed to life with a brilliant blaze of warm light.",
      "Vivian froze, the drill still whirring against the safe dial.",
      "Sitting in the leather wingback armchair by the fireplace was Coweta County Sheriff Thomas Miller, sipping black coffee from a ceramic mug.",
      "Beside him stood Kendra with her arms crossed, accompanied by two armed sheriff's deputies.",
      "'Evening, Mrs. Vance,' Sheriff Miller said in a slow, deep Georgia drawl. 'Drilling a safe on property you were served an emergency eviction notice for at six o'clock isn't looking too good on paper.'",
      "Vivian dropped the drill. It bounced off the hardwood with a loud metallic clatter.",
      "'Sheriff! This is a private family misunderstanding! Kendra is mentally unstable and trying to throw her own mother out in the cold!' Vivian shrieked.",
      "'Step away from the wall safe, ma'am,' Deputy Hayes commanded, unholstering handcuffs.",
      "'First of all, Vivian, you're not my mother,' Kendra said, stepping into the center of the room.",
      "'Second, the locksmith re-keyed every external door at 8:00 PM and installed high-definition motion security cameras in every corridor.'",
      "Kendra held up her tablet, showing clear 4K video recording of Vivian and Marcus jimmying the study window lock with a crowbar twenty minutes earlier.",
      "'Attempted burglary, criminal trespass, and destruction of probate estate records,' Sheriff Miller read from his clipboard.",
      "Marcus instantly sank onto the sofa: 'I told you this was stupid, Mom! I didn't want to go to jail over a piece of land!'",
      "'You're both going downtown for booking,' Sheriff Miller said firmly.",
      "As the deputies led Vivian and Marcus out through the front foyer in handcuffs, Vivian glared back with pure venom: 'You'll regret this, Kendra! You'll die alone on this stupid ranch!'",
      "Kendra closed the heavy oak front door, turned the deadbolt, and took her first deep breath of peace in six months."
    ],
    scenes: [
      { paragraphIndex: 8, imageUrl: "/images/reels/reel_2_frame2.jpg", caption: "Sheriff Miller and Kendra confront Vivian in the master study at midnight." },
      { paragraphIndex: 18, imageUrl: "/images/reels/reel_2_frame3.jpg", caption: "Deputies escort the conspirators out of Oak Grove Estate." }
    ]
  },
  {
    id: "story-reel-02-ch3",
    title: "THE LIVING ROOM AMBUSH (PART 3): THE PROBATE TRIUMPH AND THE SANCTUARY RESTORED",
    slug: "the-living-room-betrayal-chapter-3-grand-finale",
    category: "Family Secrets",
    subcategory: "Family Ambush & Legal Rights",
    tags: ["Grand Finale", "Justice", "Family Land", "Victory", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date(Date.now() - 3600000 * 1).toISOString(),
    status: "published",
    partNumber: 3,
    seriesId: "series-living-room-ambush",
    previousPartSlug: "the-living-room-betrayal-chapter-2-the-sheriffs-notice",
    views: 225,
    uniqueVisitors: 205,
    avgReadTimeSeconds: 730,
    trendingScore: 100.0,
    readTime: "12 min read",
    coverImage: "/images/reels/reel_2_frame3.jpg",
    socialImage: "/images/reels/reel_2_frame3.jpg",
    hookSummary: "The Grand Finale: The Coweta County Probate Judge validates Kendra's Irrevocable Trust, bans Vivian permanently from the property, and seals the 40-acre ranch for conservation.",
    paragraphs: [
      "[ COWETA COUNTY PROBATE COURTROOM — 10:00 AM ]",
      "Judge Evelyn Ross struck the polished oak bench with her gavel, calling the Estate of Charles Vance to order.",
      "Sitting across from Kendra was a court-appointed public defender representing Marcus, while Vivian sat in orange detention attire after failing to post bond.",
      "'This court has reviewed the complete evidentiary record,' Judge Ross stated clearly.",
      "'The purported quitclaim deed produced by respondent Vivian Vance bears forged signatures and an unauthorized notary seal from an unlicensed loan brokerage.'",
      "'Contrarily, the Charles Vance Irrevocable Living Trust of 2024 is fully compliant with Georgia Title 53 probate statutes and names Kendra Vance as the sole surviving trustee.'",
      "Judge Ross adjusted her glasses and delivered the final decree: 'All claims of spousal inheritance by Vivian Vance are forfeited under Georgia Slayer and Fraud statutes. The forty-acre Oak Grove parcel is confirmed in full to Kendra Vance.'",
      "'A permanent restraining order is hereby issued. Respondents shall not enter within one thousand yards of the property.'",
      "Marcus broke down in tears at the defense table, mouthing 'I'm sorry, Kendra' as bailiffs prepared to transfer them for plea proceedings.",
      "Kendra signed the official court register, accepted the gold-embossed Certificate of Clear Title from the county registrar, and walked out into the bright Georgia sunshine.",
      "[ LAKESIDE DOCK, OAK GROVE RANCH — 06:00 PM ]",
      "That evening, the sun dipped low over the glass-like surface of the lake, painting the sky in deep streaks of violet and gold.",
      "Kendra stood at the edge of the wooden dock where her father had taught her to fish twenty-five years ago.",
      "In her hands, she held the original blueprints her father had drawn for the 'Oak Grove Equestrian Therapy Sanctuary' for disabled children.",
      "Her father's trusted ranch foreman, Caleb, walked down the grassy slope with two cold bottles of sweet tea.",
      "'Crew is ready to start fencing the north pasture tomorrow morning, Miss Kendra,' Caleb smiled warmly.",
      "'No developers, Caleb,' Kendra said, taking a sip of the sweet tea. 'This land stays in the Vance family forever.'",
      "She looked out across the peaceful water, feeling her father's presence in the rustling pine needles.",
      "She had brought snacks to an ambush, and walked away with her father's entire legacy protected."
    ],
    scenes: [
      { paragraphIndex: 3, imageUrl: "/images/reels/reel_2_frame2.jpg", caption: "Judge Ross delivers the conclusive verdict validating the Irrevocable Living Trust." },
      { paragraphIndex: 11, imageUrl: "/images/reels/reel_2_frame3.jpg", caption: "Kendra on the lakeside dock overlooking the protected 40-acre sanctuary." }
    ]
  },

  // ================= SAGA 3: THE DINNER CONTRACT =================
  {
    id: "story-reel-03-ch1",
    title: "THE DINNER CONTRACT (PART 1): SHE PULLED THE FORENSIC AUDIT BEFORE ANYONE COULD SIGN",
    slug: "the-dinner-contract-forensic-audit",
    category: "Family Secrets",
    subcategory: "Corporate Betrayal & Power Reversal",
    tags: ["Corporate Drama", "Forensic Audit", "Betrayal", "Power Move", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date(Date.now() - 3600000 * 3).toISOString(),
    status: "published",
    partNumber: 1,
    seriesId: "series-dinner-contract",
    nextPartSlug: "the-dinner-contract-chapter-2-the-boardroom-freeze",
    nextPartHook: "🔥 Read Chapter 2: Marcus Rushes to Drain the Cayman Account, Only to Find Evelyn Froze All Wires!",
    views: 220,
    uniqueVisitors: 195,
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
      { paragraphIndex: 3, imageUrl: "/images/reels/reel_3_frame1.jpg", caption: "Evelyn sits quietly at the dinner table before the contract is presented." },
      { paragraphIndex: 13, imageUrl: "/images/reels/reel_3_frame2.jpg", caption: "The forensic audit is placed on the table, dismantling the fraudulent buyout." }
    ]
  },
  {
    id: "story-reel-03-ch2",
    title: "THE DINNER CONTRACT (PART 2): THE EMERGENCY BOARDROOM EXPULSION",
    slug: "the-dinner-contract-chapter-2-the-boardroom-freeze",
    category: "Family Secrets",
    subcategory: "Corporate Betrayal & Power Reversal",
    tags: ["Boardroom Drama", "Corporate Showdown", "Asset Freeze", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date(Date.now() - 3600000 * 2).toISOString(),
    status: "published",
    partNumber: 2,
    seriesId: "series-dinner-contract",
    previousPartSlug: "the-dinner-contract-forensic-audit",
    nextPartSlug: "the-dinner-contract-chapter-3-grand-finale",
    nextPartHook: "🔥 Read Chapter 3 (Grand Finale): Evelyn Hands Company Ownership to the Loyal Truck Drivers!",
    views: 195,
    uniqueVisitors: 172,
    avgReadTimeSeconds: 710,
    trendingScore: 99.8,
    readTime: "11 min read",
    coverImage: "/images/reels/reel_3_frame2.jpg",
    socialImage: "/images/reels/reel_3_frame2.jpg",
    hookSummary: "After fleeing the steakhouse, Marcus dashed to Vance Logistics headquarters at midnight to initiate wire transfers, only to find the executive boardroom fully assembled against him.",
    paragraphs: [
      "[ EXECUTIVE HEADQUARTERS, VANCE LOGISTICS ATLANTA — 11:15 PM ]",
      "Tires squealed as Marcus slammed his Mercedes into the executive parking stall outside the glass headquarters tower.",
      "Clutching his laptop bag, he rushed through the revolving doors and took the private elevator to the 14th-floor executive suite.",
      "His hands were shaking as he booted up his terminal, frantically attempting to access the company's international wire routing portal.",
      "The screen flashed red: 'ACCESS DENIED — ADMINISTRATIVE LOCKOUT BY FOUNDER / CEO.'",
      "'Looking for the offshore wire portal, Marcus?' a voice asked from the shadows of the adjoining boardroom.",
      "The double mahogany doors slid open. Sitting around the boardroom table were the five senior division directors and company general counsel Raymond Vance.",
      "At the head of the table sat Evelyn, calmly reviewing printed transaction sheets.",
      "'Aunt Evelyn... please, we don't have to ruin the family name over this!' Marcus pleaded, stepping into the boardroom with sweat soaking through his collar.",
      "'Raymond, tell her this can be handled with an internal restructuring!'",
      "Raymond Vance shook his head slowly: 'Marcus, you forged company bills of lading and stole money directly from the drivers' health insurance trust.'",
      "'The Board has just voted unanimously—five to zero—to terminate your employment for gross moral turpitude, cancel your unvested shares, and initiate immediate recovery litigation.'",
      "Two Fulton County Sheriff's investigators stepped out from the executive lounge.",
      "'Marcus Vance, you are under arrest for felony securities fraud, computer tampering, and grand larceny,' Lead Investigator Harris stated.",
      "Marcus slumped against the boardroom credenza as handcuffs were secured around his wrists.",
      "He looked up at Evelyn, his eyes pleading: 'Aunt Evelyn... what are you going to do with the company without me?'",
      "Evelyn looked out over the skyline of Atlanta where dozens of Vance Logistics freight trucks were rolling safely down the highway.",
      "'I am going to give it to the people who actually built it,' Evelyn said with absolute certainty."
    ],
    scenes: [
      { paragraphIndex: 6, imageUrl: "/images/reels/reel_3_frame2.jpg", caption: "The boardroom lights come on as Marcus is caught attempting wire transfers." },
      { paragraphIndex: 14, imageUrl: "/images/reels/reel_3_frame3.jpg", caption: "Marcus is placed under arrest in the executive suite." }
    ]
  },
  {
    id: "story-reel-03-ch3",
    title: "THE DINNER CONTRACT (PART 3): THE WORKERS' TRUST AND THE FOUNDER'S VICTORY",
    slug: "the-dinner-contract-chapter-3-grand-finale",
    category: "Family Secrets",
    subcategory: "Corporate Betrayal & Power Reversal",
    tags: ["Grand Finale", "Employee Ownership", "Justice", "Triumph", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date(Date.now() - 3600000 * 1).toISOString(),
    status: "published",
    partNumber: 3,
    seriesId: "series-dinner-contract",
    previousPartSlug: "the-dinner-contract-chapter-2-the-boardroom-freeze",
    views: 235,
    uniqueVisitors: 215,
    avgReadTimeSeconds: 730,
    trendingScore: 100.0,
    readTime: "12 min read",
    coverImage: "/images/reels/reel_3_frame3.jpg",
    socialImage: "/images/reels/reel_3_frame3.jpg",
    hookSummary: "The Grand Finale: Evelyn gathers two hundred freight drivers and warehouse staff to announce a revolutionary 49% Employee Stock Ownership Trust (ESOP), sealing the company's legacy forever.",
    paragraphs: [
      "[ CENTRAL FREIGHT DEPOT, SAVANNAH HUB — 08:30 AM ]",
      "Over two hundred long-haul truck drivers, mechanics, dispatchers, and warehouse personnel gathered inside the sparkling clean main maintenance hangar.",
      "Rows of gleaming navy-and-silver 18-wheelers were parked in a ceremonial horseshoe around the staging platform.",
      "Evelyn Vance stepped onto the stage, dressed in her signature navy blazer and work boots, holding a single microphone.",
      "The entire hangar erupted into thunderous applause and the sounding of air horns that shook the steel rafters.",
      "'Thirty-two years ago, my late brother and I started Vance Logistics with two rusty rigs and zero outside investors,' Evelyn began, her voice steady and warm.",
      "'Last week, people who thought corporate greed mattered more than family tried to steal what you all break your backs for every day.'",
      "'Yesterday, the federal bankruptcy and commercial courts completed full asset recovery of the embezzled funds.'",
      "She signaled to corporate attorney Raymond, who unrolled a large gold-sealed parchment display.",
      "'Today, I am officially filing the Vance Logistics Employee Stock Ownership Trust (ESOP). Forty-nine percent of all company voting equity and annual profits are now permanently assigned to every full-time employee!'",
      "Tears filled the eyes of veteran drivers who had spent twenty years on the road.",
      "Big Hank, a sixty-year-old lead driver who had been with the company since day one, stepped up and gave Evelyn a bear hug that lifted her off her feet.",
      "'You're the real boss, Miss Evelyn! Always have been!' Hank cheered into the microphone.",
      "Evelyn smiled as the celebration continued with barbecue and music across the depot grounds.",
      "Greed had tried to hollow out thirty years of honest labor, but justice, integrity, and genuine family loyalty had triumphed.",
      "Vance Logistics was stronger than ever, owned and operated by the people whose sweat had built every mile."
    ],
    scenes: [
      { paragraphIndex: 3, imageUrl: "/images/reels/reel_3_frame2.jpg", caption: "Evelyn addresses the two hundred gathered freight drivers and employees." },
      { paragraphIndex: 9, imageUrl: "/images/reels/reel_3_frame3.jpg", caption: "The historic ESOP employee ownership trust is officially unveiled." }
    ]
  },

  // ================= SAGA 4: THE BROKEN HEIRLOOM =================
  {
    id: "story-reel-04-ch1",
    title: "THE BROKEN HEIRLOOM (PART 1): SHE HELD UP THE SHATTERED PLATE AND EXPOSED THE 15-YEAR WILL",
    slug: "the-broken-heirloom-dish-confrontation",
    category: "Family Secrets",
    subcategory: "Heirloom Secrets & Hidden Wills",
    tags: ["Heirloom", "Family Betrayal", "Hidden Will", "Emotional Drama", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date(Date.now() - 3600000 * 3).toISOString(),
    status: "published",
    partNumber: 1,
    seriesId: "series-broken-heirloom",
    nextPartSlug: "the-broken-heirloom-chapter-2-the-probate-hearing",
    nextPartHook: "🔥 Read Chapter 2: Cynthia Claims the Will is Fake, but the Original Notary Walks Into the Hearing!",
    views: 188,
    uniqueVisitors: 165,
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
      { paragraphIndex: 2, imageUrl: "/images/reels/reel_4_frame1.jpg", caption: "The broken heirloom plate lies on the floor as the room freezes." },
      { paragraphIndex: 13, imageUrl: "/images/reels/reel_4_frame2.jpg", caption: "Adrienne holds up the revealed holographic will hidden inside the ceramic dish." }
    ]
  },
  {
    id: "story-reel-04-ch2",
    title: "THE BROKEN HEIRLOOM (PART 2): THE PROBATE FORENSIC HEARING",
    slug: "the-broken-heirloom-chapter-2-the-probate-hearing",
    category: "Family Secrets",
    subcategory: "Heirloom Secrets & Hidden Wills",
    tags: ["Probate Battle", "Forensic Document", "Heirloom Will", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date(Date.now() - 3600000 * 2).toISOString(),
    status: "published",
    partNumber: 2,
    seriesId: "series-broken-heirloom",
    previousPartSlug: "the-broken-heirloom-dish-confrontation",
    nextPartSlug: "the-broken-heirloom-chapter-3-grand-finale",
    nextPartHook: "🔥 Read Chapter 3 (Grand Finale): The Historic Equestrian Estate is Restored for the Children's Foundation!",
    views: 172,
    uniqueVisitors: 152,
    avgReadTimeSeconds: 680,
    trendingScore: 99.3,
    readTime: "11 min read",
    coverImage: "/images/reels/reel_4_frame2.jpg",
    socialImage: "/images/reels/reel_4_frame2.jpg",
    hookSummary: "In probate court, Cynthia claimed the ceramic will was an elaborate forgery, until Dr. Robert Hayes—the 82-year-old family physician—walked into the courtroom with his original notary journal.",
    paragraphs: [
      "[ GREENVILLE COUNTY PROBATE COURT — 10:30 AM ]",
      "The courtroom was packed with members of the historic Greenville preservation society and extended Vance family relatives.",
      "Cynthia's high-priced defense attorney stood before Judge Harrison, waving his arms dramatically.",
      "'Your Honor, this parchment is a preposterous fabrication! Ceramic dishes do not contain legal wills in modern American jurisprudence!'",
      "Judge Harrison adjusted his glasses, examining the high-resolution microscope photographs of the kiln-baked porcelain seal.",
      "'Counsel, the state forensic laboratory has already certified that this Bavarian dish was crafted in 1954 and sealed with 2011 ceramic polymer,' Judge Harrison noted dryly.",
      "'Furthermore, the holographic handwriting matches Clara Vance's signature cards on file with First Citizens Bank.'",
      "The heavy oak doors at the back of the courtroom swung open.",
      "Walking down the center aisle with a carved wooden cane was eighty-two-year-old Dr. Robert Hayes, Clara's lifelong physician and personal notary.",
      "The courtroom fell into reverent silence.",
      "'Dr. Hayes, thank you for appearing,' Judge Harrison said.",
      "Dr. Hayes placed his original 2011 leather notary logbook on the witness podium.",
      "'On October 12, 2011, Clara summoned me to her ceramics studio,' Dr. Hayes testified under oath.",
      "'She knew Gregory and Cynthia were planning to seize the farm. She wrote that will in my presence, signed it with her thumbprint, and baked it into the center plate of her bridal collection.'",
      "'She told me: \"When their greed breaks this family, truth will break out of the clay.\"'",
      "Cynthia slumped back into her chair, her hands trembling uncontrollably as Gregory stared blankly at the floor.",
      "Judge Harrison signed the order on the bench: 'The 2011 Last Will of Clara Vance is admitted to probate with full testamentary authority.'",
      "'The 15-year illegal possession by Gregory and Cynthia is terminated effective immediately.'"
    ],
    scenes: [
      { paragraphIndex: 4, imageUrl: "/images/reels/reel_4_frame2.jpg", caption: "Dr. Robert Hayes presents the historic 2011 notary journal to Judge Harrison." },
      { paragraphIndex: 16, imageUrl: "/images/reels/reel_4_frame3.jpg", caption: "Judge Harrison signs the conclusive order establishing the holographic will." }
    ]
  },
  {
    id: "story-reel-04-ch3",
    title: "THE BROKEN HEIRLOOM (PART 3): THE EQUESTRIAN SANCTUARY OF CLARA VANCE",
    slug: "the-broken-heirloom-chapter-3-grand-finale",
    category: "Family Secrets",
    subcategory: "Heirloom Secrets & Hidden Wills",
    tags: ["Grand Finale", "Heirloom Restored", "Justice", "Family Peace", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date(Date.now() - 3600000 * 1).toISOString(),
    status: "published",
    partNumber: 3,
    seriesId: "series-broken-heirloom",
    previousPartSlug: "the-broken-heirloom-chapter-2-the-probate-hearing",
    views: 205,
    uniqueVisitors: 188,
    avgReadTimeSeconds: 700,
    trendingScore: 100.0,
    readTime: "11 min read",
    coverImage: "/images/reels/reel_4_frame3.jpg",
    socialImage: "/images/reels/reel_4_frame3.jpg",
    hookSummary: "The Grand Finale: Adrienne unlocks the historic 300-acre manor gates, restoring Clara's beloved stables and establishing the Clara Vance Equestrian Education Center for children.",
    paragraphs: [
      "[ MAIN GATES, VANCE EQUESTRIAN MANOR — 03:00 PM ]",
      "The massive wrought-iron gates bearing the gilded 'V' insignia swung open under the warm South Carolina sunshine.",
      "For fifteen years, high fences and private security had kept the community and grandchildren locked out.",
      "Adrienne walked up the tree-lined gravel driveway, flanked by her three children and dozens of smiling local riders.",
      "Inside the grand manor parlor, the broken ceramic fragments of Grandmother Clara's plate had been meticulously restored using the Japanese Kintsugi method—repairing the cracks with genuine gold leaf.",
      "The golden-seamed plate now sat in a velvet-lined glass shadowbox above the marble fireplace.",
      "Beside it was mounted a brass plaque: 'Truth Cannot Be Shattered — The Clara Vance Memorial Children's Trust.'",
      "Outside, children's laughter echoed across the meadows as therapy horses were gently led into the freshly painted stables.",
      "Adrienne stood on the veranda, looking out over the rolling green hills where three generations of family history had been saved.",
      "Cynthia and Gregory had tried to destroy the family heirloom to hide their greed.",
      "Instead, their own careless hands had unleashed the very truth that set the entire estate free forever."
    ],
    scenes: [
      { paragraphIndex: 3, imageUrl: "/images/reels/reel_4_frame2.jpg", caption: "The restored gold-seamed Kintsugi heirloom plate displayed above the mantle." },
      { paragraphIndex: 7, imageUrl: "/images/reels/reel_4_frame3.jpg", caption: "Adrienne on the veranda overlooking the thriving children's equestrian sanctuary." }
    ]
  },

  // ================= SAGA 5: TASHA'S LAST BOX =================
  {
    id: "story-reel-05-ch1",
    title: "TASHA'S LAST BOX (PART 1): SHE HANDED THE KEYS BACK AND CUT THE TOXIC FAMILY TIES",
    slug: "tasha-packed-her-last-box",
    category: "Family Secrets",
    subcategory: "Breaking Free & Personal Freedom",
    tags: ["Toxic Family", "Independence", "Emotional Release", "Life Lesson", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date(Date.now() - 3600000 * 3).toISOString(),
    status: "published",
    partNumber: 1,
    seriesId: "series-tashas-last-box",
    nextPartSlug: "tashas-last-box-chapter-2-the-first-of-the-month",
    nextPartHook: "🔥 Read Chapter 2: The First of the Month Arrives, and Barbara Panics When the Landlord Knocks!",
    views: 260,
    uniqueVisitors: 230,
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
      { paragraphIndex: 1, imageUrl: "/images/reels/reel_5_frame1.jpg", caption: "Tasha packs the last labeled cardboard box in the hallway." },
      { paragraphIndex: 16, imageUrl: "/images/reels/reel_5_frame2.jpg", caption: "Handing the keys back to her mother before walking away forever." }
    ]
  },
  {
    id: "story-reel-05-ch2",
    title: "TASHA'S LAST BOX (PART 2): THE FIRST OF THE MONTH AND THE REALITY CHECK",
    slug: "tashas-last-box-chapter-2-the-first-of-the-month",
    category: "Family Secrets",
    subcategory: "Breaking Free & Personal Freedom",
    tags: ["Reality Check", "Financial Independence", "Toxic Boundaries", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date(Date.now() - 3600000 * 2).toISOString(),
    status: "published",
    partNumber: 2,
    seriesId: "series-tashas-last-box",
    previousPartSlug: "tasha-packed-her-last-box",
    nextPartSlug: "tashas-last-box-chapter-3-grand-finale",
    nextPartHook: "🔥 Read Chapter 3 (Grand Finale): Tasha's Dream Life Unfolds While Derek Finally Learns to Work!",
    views: 245,
    uniqueVisitors: 218,
    avgReadTimeSeconds: 710,
    trendingScore: 99.8,
    readTime: "11 min read",
    coverImage: "/images/reels/reel_5_frame2.jpg",
    socialImage: "/images/reels/reel_5_frame2.jpg",
    hookSummary: "On the first of the month, the electricity went dark, the mortgage broker knocked, and Barbara made forty frantic calls to Tasha's blocked phone number.",
    paragraphs: [
      "[ DARK FOYER, CHARLOTTE SUBURB — 09:00 AM, THE 1ST ]",
      "The house was dead silent and completely pitch black.",
      "The air conditioning had stopped running at midnight, leaving the suburban house muggy and hot under the morning sun.",
      "Barbara flicked the kitchen light switch repeatedly: click, click, click. Nothing.",
      "Derek stumbled into the kitchen in his sweatpants, groaning: 'Mom, the Wi-Fi is down and my phone won't charge! Did Tasha forget to pay the bill again?'",
      "'Tasha didn't forget, Derek,' Barbara panicked, dialing Tasha's cell phone for the forty-second time.",
      "The automated operator answered: 'The number you are trying to reach has restricted incoming calls.'",
      "A heavy, authoritative knock rattled the front door.",
      "Barbara rushed to open it, expecting Tasha to be standing there feeling guilty.",
      "Instead, standing on the porch was Mr. Henderson, the senior representative from Carolina Premier Property Management.",
      "'Good morning, Mrs. Vance,' Mr. Henderson said crisply, holding a clipboard with an official notice.",
      "'The primary guarantor on this lease, Miss Tasha Vance, formally surrendered her leasehold rights and settled her portion of the security bond.'",
      "'The remaining monthly rent of twenty-eight hundred dollars is due by 5:00 PM today, or statutory vacancy proceedings begin on Monday.'",
      "Derek stared blankly: 'Twenty-eight hundred dollars? Mom, I don't have twenty-eight hundred dollars! Tell them Tasha pays that!'",
      "Mr. Henderson looked at Derek's luxury gaming headset: 'Sir, Miss Vance no longer resides here. If you are an adult occupant, you are jointly responsible.'",
      "[ TASHA'S NEW DOWNTOWN BALCONY — 10:30 AM ]",
      "Seven miles away, Tasha sat on the sunny balcony of her ninth-floor downtown apartment, holding a fresh cup of French roast coffee.",
      "The city skyline stretched out before her, bathed in crisp morning light.",
      "Her bank account had twenty-four hundred dollars in surplus savings—money that in previous months had been drained by Derek's impulse splurges and Barbara's salon appointments.",
      "Her phone sat on the glass patio table, completely silent.",
      "For the first time in her thirty-four years of life, Tasha didn't have an emergency to solve, a fire to put out, or an ungrateful relative to appease.",
      "She took a slow sip of her coffee and breathed in the sweet air of unshakeable freedom."
    ],
    scenes: [
      { paragraphIndex: 8, imageUrl: "/images/reels/reel_5_frame2.jpg", caption: "Mr. Henderson delivers the lease payment notice to Barbara and Derek." },
      { paragraphIndex: 16, imageUrl: "/images/reels/reel_5_frame3.jpg", caption: "Tasha on her quiet downtown balcony enjoying her newfound peace." }
    ]
  },
  {
    id: "story-reel-05-ch3",
    title: "TASHA'S LAST BOX (PART 3): THE BLOOM OF FREEDOM AND THE LESSON LEARNED",
    slug: "tashas-last-box-chapter-3-grand-finale",
    category: "Family Secrets",
    subcategory: "Breaking Free & Personal Freedom",
    tags: ["Grand Finale", "Self-Worth", "Peace of Mind", "Triumph", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date(Date.now() - 3600000 * 1).toISOString(),
    status: "published",
    partNumber: 3,
    seriesId: "series-tashas-last-box",
    previousPartSlug: "tashas-last-box-chapter-2-the-first-of-the-month",
    views: 290,
    uniqueVisitors: 265,
    avgReadTimeSeconds: 740,
    trendingScore: 100.0,
    readTime: "12 min read",
    coverImage: "/images/reels/reel_5_frame3.jpg",
    socialImage: "/images/reels/reel_5_frame3.jpg",
    hookSummary: "The Grand Finale: One year later, Tasha launches her own clinical wellness clinic while her brother Derek finally takes responsibility for his own life.",
    paragraphs: [
      "[ VANCE WELLNESS SUITE, CHARLOTTE MEDICAL PARK — 11:00 AM, ONE YEAR LATER ]",
      "The frosted glass doors of Suite 400 bore the elegant gold lettering: 'TASHA VANCE, MSN, APRN — CLINICAL WELLNESS & REHABILITATION.'",
      "The clinic was filled with fresh lilies, warm ambient lighting, and smiling nursing staff.",
      "Without the crushing financial burden of supporting two capable adults who took her for granted, Tasha had invested in her own practice.",
      "Her practice had grown to over four hundred active patients within twelve months.",
      "A soft knock sounded at her office door. Her assistant leaned in: 'Miss Tasha, someone is here wishing to see you. He said he has an appointment.'",
      "Walking into the office in a clean blue mechanic's uniform was Derek.",
      "He looked leaner, his posture straight, holding a potted orchid.",
      "Tasha looked at him across her mahogany desk with calm, composed eyes.",
      "'Hey, Tasha,' Derek said softly, placing the orchid on the corner of the reception table.",
      "'I work at the Hendrick Freight Depot now. Changing diesel filters forty hours a week.'",
      "Tasha smiled faintly: 'That's good, Derek. Honest work builds honest men.'",
      "'Mom and I moved into a two-bedroom townhouse. We had to sell my sports car and her furs to pay off the old lease debts,' Derek admitted, looking down at his work boots.",
      "'I came to say... you were right. You carried us when we should have been carrying our own weight.'",
      "'I'm proud of you, Derek,' Tasha said honestly.",
      "'Setting boundaries didn't mean I hated you. It meant I loved myself enough to stop enabling your destruction.'",
      "Derek nodded, wiping a stray tear before stepping back toward the door: 'Thank you for packing that last box, Tasha.'",
      "As the clinic doors clicked shut, Tasha looked out through her office window at the bustling city below.",
      "Walking away had been the hardest decision of her life.",
      "It had also saved every single member of her family."
    ],
    scenes: [
      { paragraphIndex: 6, imageUrl: "/images/reels/reel_5_frame2.jpg", caption: "Derek visits Tasha's new clinic in his work uniform to make amends." },
      { paragraphIndex: 16, imageUrl: "/images/reels/reel_5_frame3.jpg", caption: "Tasha looks out over the city with total peace and self-worth." }
    ]
  },

  // ================= SAGA 6: THE FORGED PROPERTY DEED =================
  {
    id: "story-reel-06-ch1",
    title: "THE COUNTY RECORDS OFFICE (PART 1): SHE SLAPPED THE FORGED PROPERTY DEED IN FRONT OF HER SON",
    slug: "the-forged-property-deed-son",
    category: "Family Secrets",
    subcategory: "Financial Fraud & Maternal Justice",
    tags: ["Legal Justice", "Mother and Son", "Fraud", "Forged Documents", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date(Date.now() - 3600000 * 3).toISOString(),
    status: "published",
    partNumber: 1,
    seriesId: "series-forged-deed",
    nextPartSlug: "the-forged-property-deed-chapter-2-the-bail-hearing",
    nextPartHook: "🔥 Read Chapter 2: Trey's Entitled Girlfriend Tries to Threaten Corinne, but the DA Freezes Their Accounts!",
    views: 310,
    uniqueVisitors: 285,
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
      { paragraphIndex: 1, imageUrl: "/images/reels/reel_6_frame1.jpg", caption: "Corinne examines the fraudulent mortgage records at the county office." },
      { paragraphIndex: 14, imageUrl: "/images/reels/reel_6_frame2.jpg", caption: "Slapping the certified felony deed and summons directly onto the hood of the sports car." }
    ]
  },
  {
    id: "story-reel-06-ch2",
    title: "THE COUNTY RECORDS OFFICE (PART 2): THE GRAND JURY INDICTMENT AND ASSET SEIZURE",
    slug: "the-forged-property-deed-chapter-2-the-bail-hearing",
    category: "Family Secrets",
    subcategory: "Financial Fraud & Maternal Justice",
    tags: ["Grand Jury", "Asset Seizure", "Courtroom Justice", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date(Date.now() - 3600000 * 2).toISOString(),
    status: "published",
    partNumber: 2,
    seriesId: "series-forged-deed",
    previousPartSlug: "the-forged-property-deed-son",
    nextPartSlug: "the-forged-property-deed-chapter-3-grand-finale",
    nextPartHook: "🔥 Read Chapter 3 (Grand Finale): Corinne Receives Clean Title Deed and Protects Her Legacy Forever!",
    views: 285,
    uniqueVisitors: 260,
    avgReadTimeSeconds: 740,
    trendingScore: 99.9,
    readTime: "12 min read",
    coverImage: "/images/reels/reel_6_frame2.jpg",
    socialImage: "/images/reels/reel_6_frame2.jpg",
    hookSummary: "In Fulton Superior Court, the predatory lender attempted to foreclose on Corinne's house, but Special Prosecutor Harris presented the fraudulent notary confession.",
    paragraphs: [
      "[ FULTON COUNTY SUPERIOR COURT, ROOM 5A — 02:30 PM ]",
      "The attorney representing Apex Private Capital stood arrogantly before Judge Montgomery.",
      "'Your Honor, our lien of three hundred and fifty thousand dollars was perfected against the Buckhead property. Regardless of internal family disputes, the mortgage note must be satisfied through foreclosure.'",
      "Judge Montgomery turned to Assistant District Attorney Harris: 'Prosecution, what is the state's position regarding the security instrument?'",
      "ADA Harris stood up, holding a certified affidavit: 'Your Honor, the state has already secured a sworn guilty plea from notary public Darren Riggs.'",
      "'Mr. Riggs admits he was paid ten thousand dollars by defendant Trey Vance to affix a fraudulent notary seal onto an unsigned deed without Mrs. Corinne Vance ever being present.'",
      "'Under Georgia Code 44-2-43, an instrument procured through proven criminal forgery is void ab initio—null and void from the instant of creation.'",
      "Judge Montgomery banged his gavel down with resounding force.",
      "'The court finds the lien recorded by Apex Private Capital completely void, fraudulent, and unenforceable,' Judge Montgomery ruled.",
      "'The Fulton County Clerk of Superior Court is ordered to expunge all encumbrances and restore clean, unencumbered fee simple title to Corinne Vance.'",
      "'Furthermore, all assets registered to Trey Vance—including the 2024 luxury sports coupe, bank accounts, and brokerage holdings—are seized for criminal restitution.'",
      "Trey sat in the jury box in handcuffs, his head buried against the oak rail as the marshals escorted him toward holding.",
      "Corinne sat in the front row of the gallery with her hands resting on her Bible, feeling a wave of deep maternal grief mixed with righteous relief.",
      "Justice was painful, but truth had protected her home."
    ],
    scenes: [
      { paragraphIndex: 4, imageUrl: "/images/reels/reel_6_frame2.jpg", caption: "ADA Harris presents the fraudulent notary confession to Judge Montgomery." },
      { paragraphIndex: 10, imageUrl: "/images/reels/reel_6_frame3.jpg", caption: "The court issues the expungement order restoring clean title to Corinne." }
    ]
  },
  {
    id: "story-reel-06-ch3",
    title: "THE COUNTY RECORDS OFFICE (PART 3): THE DEED SECURED AND THE MOTHER'S REDEMPTION",
    slug: "the-forged-property-deed-chapter-3-grand-finale",
    category: "Family Secrets",
    subcategory: "Financial Fraud & Maternal Justice",
    tags: ["Grand Finale", "Deed Restored", "Mother's Legacy", "Triumph", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date(Date.now() - 3600000 * 1).toISOString(),
    status: "published",
    partNumber: 3,
    seriesId: "series-forged-deed",
    previousPartSlug: "the-forged-property-deed-chapter-2-the-bail-hearing",
    views: 340,
    uniqueVisitors: 310,
    avgReadTimeSeconds: 770,
    trendingScore: 100.0,
    readTime: "12 min read",
    coverImage: "/images/reels/reel_6_frame3.jpg",
    socialImage: "/images/reels/reel_6_frame3.jpg",
    hookSummary: "The Grand Finale: Corinne receives her gold-embossed clean deed from the county registrar and establishes the Arthur Vance Science Foundation in her home.",
    paragraphs: [
      "[ FULTON COUNTY REGISTRAR VAULT — 11:00 AM ]",
      "The Chief Registrar of Deeds handed Corinne a heavy linen document bearing the gold seal of the State of Georgia.",
      "At the top of the parchment in raised calligraphy were the words: 'CERTIFICATE OF ABSOLUTE TITLE — FREE AND CLEAR OF ALL LIENS.'",
      "Corinne ran her fingertips over her late husband's name and her own, taking a deep, restorative breath.",
      "Her home was safe. Her roof was protected.",
      "[ FRONT PORCH, BUCKHEAD HOME — 05:00 PM ]",
      "That evening, neighbors from across the Buckhead community gathered on Corinne's front lawn for a celebratory potluck dinner.",
      "Children played tag on the grass while teachers from her old high school set out fresh pies and lemonade.",
      "Corinne stood on the front steps, smiling as the sun illuminated the white porch columns.",
      "She had placed the family home into a perpetual land trust that would fund college scholarships for underprivileged STEM students in Atlanta.",
      "Trey was serving his community restitution sentence, working fifty hours a week on state infrastructure projects, finally learning the value of hard work.",
      "Corinne looked up at the quiet evening stars.",
      "A mother's love was not about turning a blind eye to wrongdoing.",
      "True love was having the courage to stand for the truth, protect what is sacred, and teach the next generation that honor is worth more than gold."
    ],
    scenes: [
      { paragraphIndex: 2, imageUrl: "/images/reels/reel_6_frame2.jpg", caption: "The Chief Registrar presents the gold-embossed Certificate of Absolute Title." },
      { paragraphIndex: 8, imageUrl: "/images/reels/reel_6_frame3.jpg", caption: "Corinne surrounded by neighbors on her protected Buckhead front porch." }
    ]
  }
];

// Load existing stories and keep non-conflicting sagas
let existingStories = [];
if (fs.existsSync(STORIES_PATH)) {
  try {
    existingStories = JSON.parse(fs.readFileSync(STORIES_PATH, 'utf8'));
  } catch (e) {}
}

const newSlugs = new Set(allSagas.map(s => s.slug));
const oldSeriesIds = new Set(allSagas.map(s => s.seriesId));

const filteredExisting = existingStories.filter(s => !newSlugs.has(s.slug) && !oldSeriesIds.has(s.seriesId));
const finalStories = [...allSagas, ...filteredExisting];

fs.writeFileSync(STORIES_PATH, JSON.stringify(finalStories, null, 2), 'utf8');
console.log('✅ Updated data/stories.json with 18 complete chapters across 6 sagas! Total stories:', finalStories.length);

// Audit intra-series linkages
const slugMap = new Map(finalStories.map(s => [s.slug, s]));
let auditErrors = 0;
finalStories.forEach(s => {
  if (s.nextPartSlug) {
    const nextS = slugMap.get(s.nextPartSlug);
    if (!nextS) {
      console.error(`❌ Missing nextPart: ${s.slug} -> ${s.nextPartSlug}`);
      auditErrors++;
    } else if (s.seriesId !== nextS.seriesId) {
      console.error(`❌ Cross-series mismatch: ${s.slug} (${s.seriesId}) -> ${s.nextPartSlug} (${nextS.seriesId})`);
      auditErrors++;
    }
  }
  if (s.previousPartSlug) {
    const prevS = slugMap.get(s.previousPartSlug);
    if (!prevS) {
      console.error(`❌ Missing prevPart: ${s.slug} -> ${s.previousPartSlug}`);
      auditErrors++;
    } else if (s.seriesId !== prevS.seriesId) {
      console.error(`❌ Cross-series mismatch prev: ${s.slug} (${s.seriesId}) -> ${s.previousPartSlug} (${prevS.seriesId})`);
      auditErrors++;
    }
  }
});

if (auditErrors === 0) {
  console.log('🎯 ZERO AUDIT ERRORS! All 18 chapters and all remaining stories have 100% perfect intra-saga navigation!');
} else {
  console.error(`⚠️ Found ${auditErrors} audit errors!`);
}

// Update tracking links
const domain = 'https://drama-online.onrender.com';
let trackingLinks = [];
if (fs.existsSync(TRACKING_PATH)) {
  try {
    trackingLinks = JSON.parse(fs.readFileSync(TRACKING_PATH, 'utf8'));
  } catch (e) {}
}

const shortCodes = ['r1', 'r2', 'r3', 'r4', 'r5', 'r6'];
const starterStories = allSagas.filter(s => s.partNumber === 1);

starterStories.forEach((st, idx) => {
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
    clicks: 15,
    uniqueReaders: 12,
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
console.log('✅ Updated data/tracking_links.json!');

// Sync Extension
if (fs.existsSync(EXTENSION_CATALOG)) {
  try {
    const extData = JSON.parse(fs.readFileSync(EXTENSION_CATALOG, 'utf8'));
    if (extData && extData.reels && extData.reels.length >= 6) {
      starterStories.forEach((st, idx) => {
        const sc = shortCodes[idx];
        const shortUrl = `${domain}/s/${sc}`;
        const fullTrackedUrl = `${domain}/story/${st.slug}?utm_source=facebook&utm_medium=video&utm_campaign=${sc}`;

        extData.reels[idx].storySlug = st.slug;
        extData.reels[idx].storyTitle = st.title;
        extData.reels[idx].shortCode = sc;
        extData.reels[idx].shortUrl = shortUrl;
        extData.reels[idx].fullTrackedUrl = fullTrackedUrl;

        const cta = `\n\n📖 Read Full Story & All 3 Chapters 👉 ${shortUrl}\n`;
        extData.reels[idx].description = (extData.reels[idx].description.split('\n\n📖')[0] || extData.reels[idx].description) + cta;
        extData.reels[idx].formattedFullCaption = `${extData.reels[idx].title}\n\n${extData.reels[idx].description}\n${(extData.reels[idx].hashtags || []).join(' ')}`;
      });
      fs.writeFileSync(EXTENSION_CATALOG, JSON.stringify(extData, null, 2), 'utf8');
      console.log('✅ Synchronized Extension reels_catalog.json!');
    }
  } catch (err) {
    console.error('Error updating extension catalog:', err.message);
  }
}
