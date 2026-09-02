const fs = require('fs');
const path = require('path');

const storiesPath = path.join(__dirname, 'data', 'stories.json');
const dbPath = path.join(__dirname, 'server', 'db.js');

// Helper to assemble chapters
function makeSeries(seriesMeta, chaptersData) {
  return chaptersData.map((ch, idx) => {
    const isFirst = idx === 0;
    const isLast = idx === chaptersData.length - 1;
    const partNum = idx + 1;
    const nextCh = chaptersData[idx + 1];
    const prevCh = chaptersData[idx - 1];

    return {
      id: `${seriesMeta.idPrefix}-ch${partNum}`,
      title: `${seriesMeta.baseTitle} (Chapter ${partNum}${isLast ? ' - Grand Finale' : ''}): ${ch.title}`,
      slug: isFirst ? seriesMeta.primarySlug : `${seriesMeta.slugPrefix}-chapter-${partNum}${isLast ? '-grand-finale' : ''}`,
      category: seriesMeta.category,
      subcategory: seriesMeta.subcategory,
      tags: seriesMeta.tags,
      author: "Eleanor Vance & Taleonix Editorial",
      publicationDate: new Date(Date.now() - (10 - partNum) * 3600000).toISOString(),
      status: "published",
      partNumber: partNum,
      seriesId: seriesMeta.seriesId,
      previousPartSlug: prevCh ? (idx === 1 ? seriesMeta.primarySlug : `${seriesMeta.slugPrefix}-chapter-${idx}${idx === chaptersData.length - 1 ? '-grand-finale' : ''}`) : undefined,
      nextPartSlug: nextCh ? (idx === chaptersData.length - 2 ? `${seriesMeta.slugPrefix}-chapter-${partNum + 1}-grand-finale` : `${seriesMeta.slugPrefix}-chapter-${partNum + 1}`) : undefined,
      nextPartHook: nextCh ? nextCh.hook : undefined,
      views: Math.floor(40000 + Math.random() * 25000),
      uniqueVisitors: Math.floor(35000 + Math.random() * 20000),
      avgReadTimeSeconds: 520,
      trendingScore: 98.5 + (partNum * 0.1),
      readTime: "9 min read",
      coverImage: ch.coverImage,
      hookSummary: ch.hookSummary,
      paragraphs: ch.paragraphs,
      scenes: []
    };
  });
}

// -------------------------------------------------------------
// SERIES 1: The Graduation Envelope (10 Chapters)
// -------------------------------------------------------------
const s1Chapters = [
  {
    title: "The Driveway Confrontation",
    coverImage: "/images/grad_frame_01.jpg",
    hook: "🔥 Read Chapter 2: The Secret Hospital Deal and 18 Years of Silence!",
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
    ]
  },
  {
    title: "The Hospital Confession",
    coverImage: "/images/grad_frame_03.jpg",
    hook: "🔥 Read Chapter 3: The Secret Safe Deposit Key and the Trust Fund Clause!",
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
    ]
  },
  {
    title: "The Kitchen Table Keys",
    coverImage: "/images/grad_frame_05.jpg",
    hook: "🔥 Read Chapter 4: David Uncovers the Corrupt Stepbrother's Shadow Company!",
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
    ]
  },
  {
    title: "The Father's Discovery",
    coverImage: "/images/grad_frame_07.jpg",
    hook: "🔥 Read Chapter 5: The Hidden Floor Safe Behind the Ancestral Portrait!",
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
    ]
  },
  {
    title: "The Living Room Portrait",
    coverImage: "/images/grad_frame_09.jpg",
    hook: "🔥 Read Chapter 6: Grandma Evelyn's Sovereign 1974 Land Patent Revealed!",
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
    ]
  },
  {
    title: "The Matriarch's Ledger",
    coverImage: "/images/grad_frame_11.jpg",
    hook: "🔥 Read Chapter 7: The Showdown in the Property Management Boardroom!",
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
    ]
  },
  {
    title: "The Boardroom Confrontation",
    coverImage: "/images/grad_frame_13.jpg",
    hook: "🔥 Read Chapter 8: Denise Drops the Federal Patent Deeds on the Table!",
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
    ]
  },
  {
    title: "The Federal Arrest",
    coverImage: "/images/grad_frame_15.jpg",
    hook: "🔥 Read Chapter 9: The $15 Million Community Gift and Backyard Reunion!",
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
    ]
  },
  {
    title: "The Backyard Celebration",
    coverImage: "/images/the-graduation-envelope-mother-in-green-cover.jpg",
    hook: "🔥 Read Chapter 10 (Grand Finale): The Thanksgiving Harvest Table and Generational Peace!",
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
    ]
  },
  {
    title: "The Harvest Table",
    coverImage: "/images/the-graduation-envelope-mother-in-green-scene.jpg",
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
    ]
  }
];

const series1Stories = makeSeries({
  idPrefix: "story-grad-mega",
  baseTitle: "The Graduation Envelope",
  primarySlug: "the-graduation-envelope-mother-in-green",
  slugPrefix: "the-graduation-envelope",
  category: "Family Secrets",
  subcategory: "Motherhood & Redemption",
  tags: ["Graduation", "Motherhood", "Secrets", "Emotional", "Trending"],
  seriesId: "series-graduation-envelope-mega"
}, s1Chapters);

// -------------------------------------------------------------
// SERIES 2: The Grandmother's Handwritten Ledger (6 Chapters)
// -------------------------------------------------------------
const s2Chapters = [
  {
    title: "The Corporate Eviction Notice",
    coverImage: "/images/the-grandmothers-handwritten-ledger-cover.jpg",
    hook: "🔥 Read Chapter 2: Grandma Evelyn Unseals Page 47 of the 1974 Ledger!",
    hookSummary: "When corporate developers demanded Grandma Evelyn sign over the ancestral estate, the 82-year-old matriarch opened a worn spiral notebook.",
    paragraphs: [
      "[ OAK GROVE MANOR, SAVANNAH — 02:00 PM ]",
      "Under the warm amber light of the dining room chandelier, eighty-two-year-old Grandma Evelyn sat calmly at the head of the polished walnut table.",
      "She wore her Sunday blue silk blouse, a delicate gold cross resting on her chest, her reading spectacles perched low on her nose as three corporate auditors stood over her.",
      "Beside her stood Denise in an olive green bomber jacket, watching every movement of the auditors with fierce vigilance.",
      "\"Mrs. Holloway, without certified deed records, the state probate board will auction this property next Tuesday,\" the lead auditor warned.",
      "Grandma Evelyn did not flinch. A faint, knowing smile creased her lips as she opened a vintage leather-bound spiral notebook.",
      "Her weathered finger, adorned with twin gold wedding bands, traced down the handwritten ink of page forty-seven.",
      "\"Young man,\" Grandma Evelyn spoke with serene authority. \"The courthouse may have lost their copies, but the Sovereign Land Registry in Washington never forgot.\"",
      "Denise leaned down, her eyes widening as she read the precise legal coordinates and certified Treasury deposit numbers.",
      "The ledger documented an unencumbered perpetual land lease to the state railway, generating accrued compounding royalties of forty-two million dollars.",
      "The auditor’s hands began to shake as he examined the original embossed gold seal attached to the back lining of the journal.",
      "Grandma Evelyn closed the notebook with a satisfying snap. \"Tell your board chairman that the Holloway land is not for sale—not for forty million, and not for four hundred million.\""
    ]
  },
  {
    title: "The Treasury Vault Audit",
    coverImage: "/images/the-grandmothers-handwritten-ledger-inheritance-scene.jpg",
    hook: "🔥 Read Chapter 3: Denise Marches into the Chatham County Superior Court!",
    hookSummary: "Denise takes the handwritten journal to the Federal Reserve branch in Atlanta, verifying forty-two million dollars in compounding royalties.",
    paragraphs: [
      "[ FEDERAL RESERVE BUILDING, ATLANTA — 09:30 AM ]",
      "Denise sat across from the senior sovereign land auditor, holding Grandma Evelyn's vintage spiral journal.",
      "Under high-powered forensic scanners, the 1974 Treasury seals illuminated in vivid ultraviolet blue.",
      "\"Ms. Holloway, this is an authentic Allodial Land Covenant,\" the chief auditor whispered in disbelief.",
      "\"For fifty-two years, the state railway has been depositing quarterly transit fees into an escrow account linked to this exact folio.\"",
      "The total balance with compounded statutory interest stood at forty-two million, eight hundred thousand dollars.",
      "Denise smiled with fierce pride: \"My grandmother has lived in that house on a fixed pension while a multinational syndicate tried to steal her ground.\"",
      "\"Prepare the certified certificate of title immediately. We are heading straight to court.\""
    ]
  },
  {
    title: "The Emergency Courthouse Injunction",
    coverImage: "/images/the-grandmothers-handwritten-ledger-cover.jpg",
    hook: "🔥 Read Chapter 4: The CEO's Desperate Corridor Bribe!",
    hookSummary: "Denise files the emergency sovereign injunction before Judge Harrison, stopping the corporate bulldozer convoy in its tracks.",
    paragraphs: [
      "[ CHATHAM COUNTY COURTHOUSE — 02:15 PM ]",
      "Denise slammed the certified Federal Reserve documentation on the registrar's counter.",
      "Within fifteen minutes, Chief Judge Harrison signed an emergency federal stop-work order against the development syndicate.",
      "Two county sheriff units were dispatched immediately to the perimeter of Oak Grove Manor to blockade any commercial equipment.",
      "When the corporate CEO received the notification, his face turned ash grey.",
      "The woman they thought was a defenseless eighty-two-year-old grandmother had just frozen their entire seventy-million-dollar fund.",
      "The legal tide had completely turned."
    ]
  },
  {
    title: "The Corridor Confrontation",
    coverImage: "/images/the-grandmothers-handwritten-ledger-inheritance-scene.jpg",
    hook: "🔥 Read Chapter 5: Judge Harrison Renders the Fifty Million Dollar Verdict!",
    hookSummary: "The arrogant corporate CEO corners Denise outside the courtroom, offering a ten-million-dollar cash settlement to drop the suit.",
    paragraphs: [
      "[ COURTHOUSE CENTRAL CORRIDOR — 03:45 PM ]",
      "CEO Jonathan Hastings intercepted Denise outside Courtroom 4B, flanked by his sweaty, panicked defense attorneys.",
      "\"Ms. Holloway, let's be reasonable,\" Hastings pleaded, his hands trembling. \"Ten million dollars in cash right now if you surrender that ledger.\"",
      "Denise looked at him with icy disdain.",
      "\"Ten million? You threatened to bulldoze my grandmother's home while she was eating lunch.\"",
      "\"Tomorrow morning, Judge Harrison is putting you in state prison for elder fraud and wire tampering.\"",
      "She turned on her heel and walked away, leaving the corrupt billionaire staring at his own inevitable destruction."
    ]
  },
  {
    title: "The Federal Court Trial",
    coverImage: "/images/the-grandmothers-handwritten-ledger-cover.jpg",
    hook: "🔥 Read Chapter 6 (Grand Finale): The Sovereign Allodial Land Victory and Eternal Sanctuary!",
    hookSummary: "Grandma Evelyn enters Courtroom 4B on Grandpa Arthur's arm, presenting the gold-ringed ledger before the entire press corps.",
    paragraphs: [
      "[ CHATHAM COUNTY SUPERIOR COURT — 10:00 AM ]",
      "Flashbulbs popped as eighty-two-year-old Grandma Evelyn walked down the aisle of Courtroom 4B.",
      "Judge Harrison gaveled the room to immediate silence.",
      "\"In the matter of Holloway versus Hastings Real Estate Capital, the evidence of criminal fraud is unequivocal,\" Judge Harrison declared.",
      "\"The court hereby voids all liens, imposes a fifty-million-dollar punitive damage penalty against the defendant corporation, and orders the immediate arrest of Jonathan Hastings for racketeering!\"",
      "Hastings was handcuffed on the spot as reporters rushed to broadcast the historic ruling.",
      "Grandma Evelyn touched her gold cross, whispering a quiet prayer of thanksgiving."
    ]
  },
  {
    title: "The Sovereign Victory",
    coverImage: "/images/the-grandmothers-handwritten-ledger-inheritance-scene.jpg",
    hookSummary: "Grandma Evelyn takes her spiral ledger before the Federal Land Claims Commission, securing perpetual sovereign protection for Savannah's oldest estate.",
    paragraphs: [
      "[ OAK GROVE MANOR PORCH, SAVANNAH — 05:00 PM ]",
      "The sun dipped below the moss-draped live oaks, bathing the grand estate in golden warmth.",
      "Grandma Evelyn, Grandpa Arthur, and Denise sat on the porch swing, sipping sweet iced tea in serene triumph.",
      "A bronze plaque had been installed at the entrance gates: *The Holloway Ancestral Sanctuary — Protected under Sovereign Land Patent.*",
      "The forty-two million dollars in royalties were placed into an educational endowment funding college tuition for five hundred local youth every year.",
      "Grandpa Arthur took Evelyn's hand, his fingers resting over her twin gold rings.",
      "\"You protected this ground with nothing but a pen and faith, Evelyn.\"",
      "She smiled softly, looking out across the blooming fields: \"Love doesn't write in pencil, Arthur. Love writes forever.\""
    ]
  }
];

const series2Stories = makeSeries({
  idPrefix: "story-ledger-mega",
  baseTitle: "The Grandmother's Handwritten Ledger",
  primarySlug: "the-grandmothers-handwritten-ledger-inheritance",
  slugPrefix: "the-grandmothers-handwritten-ledger",
  category: "Money & Inheritance",
  subcategory: "Family Secrets",
  tags: ["Inheritance", "Grandmother", "Secrets", "Trending", "Justice"],
  seriesId: "series-grandmothers-ledger-mega"
}, s2Chapters);

// -------------------------------------------------------------
// SERIES 3: The Gold Framed Deed (6 Chapters)
// -------------------------------------------------------------
const s3Chapters = [
  {
    title: "The Mother Who Refused to Pack",
    coverImage: "/images/the-gold-framed-deed-refused-to-pack-cover.jpg",
    hook: "🔥 Read Chapter 2: The Hidden Supreme Court Seal Behind the Glass!",
    hookSummary: "When predatory debt collectors arrived with packing boxes, Denise stood in the center of the living room holding the gold-framed ancestral deed.",
    paragraphs: [
      "[ SAVANNAH RESIDENCE — 03:45 PM ]",
      "The living room was filled with stacks of brown packing cartons, but Denise refused to pack a single suitcase.",
      "She stood tall in the center of the room, cradling the gilded family portrait in her hands, her expression resolute and fearless.",
      "On the couch, Grandma Evelyn sat in her purple Sunday dress, watching as two sheriff's deputies and a debt collector's representative stood in the doorway.",
      "\"Ms. Holloway, we have an eviction writ from the county court. You have thirty minutes to vacate the premises,\" the collector insisted.",
      "Denise did not yell. She walked forward and held the framed portrait directly before the lead deputy.",
      "\"Deputy, remove the back plate of this frame,\" Denise instructed with chilled calm.",
      "The deputy carefully popped the brass clasps. Tucked securely inside was the original 1965 certified Title Insurance Policy and unsevered Homestead Exemption Deed signed by the Georgia State Supreme Court.",
      "Under state law, the home was legally immune to all commercial collection attempts and third-party foreclosure actions.",
      "The debt collector’s face turned pale as the deputy turned to him: \"Sir, your writ is invalid. If you step onto this property again, I will arrest you for criminal trespass.\""
    ]
  },
  {
    title: "The Supreme Court Exemption",
    coverImage: "/images/the-gold-framed-deed-refused-to-pack-scene.jpg",
    hook: "🔥 Read Chapter 3: The Debt Agency's Secret Wire Transfers!",
    hookSummary: "Denise inspects the forensic watermarks on the 1965 deed, proving the home was granted permanent homestead immunity.",
    paragraphs: [
      "[ SAVANNAH RESIDENCE STUDY — 05:30 PM ]",
      "The deputies had escorted the collector off the property, but Denise knew the battle had just begun.",
      "Under the magnifying lamp, she examined the embossed gold state seal on the 1965 Supreme Court covenant.",
      "The covenant was signed by three former justices, explicitly protecting the property from all future municipal and corporate attachments.",
      "\"They targeted Grandma because they thought no one knew the legal history of this house,\" Denise told her family.",
      "\"Tomorrow, I'm taking this deed to the State Attorney General's Special Prosecutions Division.\""
    ]
  },
  {
    title: "The State Attorney's Raid",
    coverImage: "/images/the-forgotten-portrait-family-will-cover.jpg",
    hook: "🔥 Read Chapter 4: Federal Agents Seize the Predatory Firm's Servers!",
    hookSummary: "State prosecutors launch a statewide racketeering investigation against the predatory collection agency.",
    paragraphs: [
      "[ STATE PROSECUTOR'S OFFICE — 10:00 AM ]",
      "Denise laid the certified Supreme Court documents across the table of Assistant Attorney General Katherine Brooks.",
      "\"General Brooks, this agency has filed four hundred fake foreclosure writs against elderly homeowners across three counties.\"",
      "Brooks reviewed the documents with growing indignation.",
      "\"This is a coordinated syndicate, Ms. Holloway. We are signing twenty-four search warrants as we speak.\"",
      "By noon, armed state investigators had cordoned off the agency's headquarters in downtown Atlanta."
    ]
  },
  {
    title: "The Unsealed Offshore Accounts",
    coverImage: "/images/the-forgotten-portrait-family-will-scene.jpg",
    hook: "🔥 Read Chapter 5: The Handcuffs in the Luxury Penthouse!",
    hookSummary: "Forensic accountants discover thirty-five million dollars in illicit funds stashed in Caribbean holding accounts.",
    paragraphs: [
      "[ FORENSIC AUDIT DIVISION — 03:00 PM ]",
      "The raided servers revealed a massive extortion pipeline targeting widows and military veterans.",
      "The agency had been laundering proceeds through shell corporations in the Cayman Islands.",
      "A judge ordered the immediate freezing of all assets and established a thirty-five-million-dollar victims' compensation fund.",
      "Denise watched as the news ticker broadcasted the syndicate's total collapse."
    ]
  },
  {
    title: "The Syndicate's Ruin",
    coverImage: "/images/the-gold-framed-deed-refused-to-pack-cover.jpg",
    hook: "🔥 Read Chapter 6 (Grand Finale): The Homestead Victory and Generational Peace!",
    hookSummary: "The CEO and seven corporate officers are sentenced to state prison for grand larceny and elder exploitation.",
    paragraphs: [
      "[ GEORGIA SUPERIOR COURT — 11:30 AM ]",
      "The gavel sounded with thunderous finality as Judge Robert Vance delivered sentences ranging from eight to fifteen years.",
      "\"Your actions were predatory, cruel, and completely unlawful,\" Judge Vance ruled.",
      "The defendants were escorted to the holding cells in shackles as victimized families wept with relief.",
      "Denise held her mother's hand, feeling the immense weight of fear lift forever."
    ]
  },
  {
    title: "The Homestead Sanctuary",
    coverImage: "/images/the-gold-framed-deed-refused-to-pack-scene.jpg",
    hookSummary: "The gold-framed deed is re-hung in the center of the living room, standing as an unshakeable monument to family courage.",
    paragraphs: [
      "[ HOLLOWAY RESIDENCE LIVING ROOM — 06:00 PM ]",
      "The moving boxes were gone, unpacked and recycled.",
      "The gold-framed deed was polished and hung back above the fireplace, its state seal gleaming under the chandelier.",
      "Grandma Evelyn sat on the sofa, smiling peacefully as Denise poured hot tea into floral porcelain cups.",
      "\"You didn't just save a house, Denise. You saved our dignity.\"",
      "Denise smiled, kissing her grandmother's forehead: \"As long as we stand together, no one can ever push us out.\""
    ]
  }
];

const series3Stories = makeSeries({
  idPrefix: "story-framed-deed-mega",
  baseTitle: "The Gold Framed Deed",
  primarySlug: "the-gold-framed-deed-refused-to-pack",
  slugPrefix: "the-gold-framed-deed",
  category: "Family Feud",
  subcategory: "Justice & Retribution",
  tags: ["Eviction", "Family Feud", "Justice", "Viral", "Trending"],
  seriesId: "series-gold-framed-deed-mega"
}, s3Chapters);

// -------------------------------------------------------------
// SERIES 4: The Millionaire Sister's Kitchen Trash (6 Chapters)
// -------------------------------------------------------------
const s4Chapters = [
  {
    title: "The Arrogant Sister's Arrival",
    coverImage: "/images/the-millionaire-sisters-kitchen-trash-quilt-cover.jpg",
    hook: "🔥 Read Chapter 2: The Secret 1978 Bearer Bonds Stitched in the Quilt!",
    hookSummary: "Arrogant wealthy sister Vanessa tossed her mother's handmade quilt into the kitchen trash bin, calling it worthless junk.",
    paragraphs: [
      "[ BROOKHAVEN SUBURB, ATLANTA — 01:15 PM ]",
      "In the modern granite kitchen of the family home, Vanessa stood holding her four-thousand-dollar designer handbag, her face twisted in disgust.",
      "Opposite her stood her humble younger sister, Clara, wearing a mustard knit cardigan and green skirt, watching quietly with folded hands.",
      "Vanessa had arrived to clean out their late mother’s house before putting it on the market, eager to pocket her half of the real estate profits.",
      "Snatching the vintage pastel patchwork quilt off the kitchen chair, Vanessa sneered: \"Look at this ugly rag. Mother wasted her whole life sewing garbage.\"",
      "With a cruel scoff, she tossed the quilt straight into the large green kitchen trash bin.",
      "Clara didn't say a word. She waited patiently until Vanessa strutted out to her luxury Mercedes and sped away.",
      "The moment the car vanished down the driveway, Clara reached into the clean bin and lifted the heavy quilt.",
      "She took a seam ripper to the inner lining of the corner patch, just as their mother had instructed her on her deathbed.",
      "Inside the velvet stitching were eighty uncashed, negotiable municipal bearer bonds issued in 1978, currently valued at ten million, four hundred thousand dollars."
    ]
  },
  {
    title: "The Seam Ripper's Secret",
    coverImage: "/images/the-millionaire-sisters-kitchen-trash-quilt-scene.jpg",
    hook: "🔥 Read Chapter 3: Northern Trust Verifies the Ten Million Dollar Portfolio!",
    hookSummary: "Clara unstitches the velvet corner of the quilt under the kitchen light, uncovering eighty pristine municipal bearer bonds.",
    paragraphs: [
      "[ KITCHEN TABLE — 02:00 PM ]",
      "Clara sat at the table with trembling hands as the wax-threaded seams yielded to her sewing tool.",
      "One by one, the crisp parchment certificates slid onto the table.",
      "Each bond was endorsed in blank by their late mother, accompanied by a handwritten letter: *'For my daughter Clara, who loved me for who I was, not what I owned.'*",
      "Tears flowed down Clara's cheeks as she pressed the note against her heart.",
      "Her mother had known Vanessa's greed would make her discard the quilt, and Clara's love would make her keep it."
    ]
  },
  {
    title: "The Private Wealth Verification",
    coverImage: "/images/the-millionaire-sisters-kitchen-trash-quilt-cover.jpg",
    hook: "🔥 Read Chapter 4: Clara Enters the Buckhead Probate Auction!",
    hookSummary: "Senior wealth managers at Northern Trust confirm the bearer bonds are fully liquid and worth $10.4 Million.",
    paragraphs: [
      "[ NORTHERN TRUST PRIVATE VAULT — 10:00 AM ]",
      "The managing director examined the bonds under high-resolution magnification.",
      "\"Ms. Holloway, these bonds have been accruing tax-exempt compound interest for forty-eight years.\"",
      "\"You are the sole, lawful bearer of ten million, four hundred and twenty thousand dollars in immediate cash reserves.\"",
      "Clara took a deep breath. \"I want three point five million transferred into a certified cashier's draft for the Buckhead Probate Auction this afternoon.\""
    ]
  },
  {
    title: "The Buckhead Auction Showdown",
    coverImage: "/images/the-millionaire-sisters-kitchen-trash-quilt-scene.jpg",
    hook: "🔥 Read Chapter 5: Vanessa's Shock as Clara Bids $3.5 Million Cash!",
    hookSummary: "Vanessa arrives in couture silk to watch the family estate auctioned off, only to hear Clara place the winning cash bid.",
    paragraphs: [
      "[ BUCKHEAD PROBATE AUCTION HOUSE — 02:00 PM ]",
      "Vanessa sat in the front row, smirking as the auctioneer opened bidding at two million dollars.",
      "From the back of the gallery, Clara's calm voice echoed: \"Three million five hundred thousand dollars. In certified cash.\"",
      "Vanessa whipped around, her eyes bulging in disbelief.",
      "\"Clara?! You work at a public library! Where did you get three million dollars?!\"",
      "The auctioneer’s gavel struck the podium: \"Sold to Ms. Clara Holloway!\""
    ]
  },
  {
    title: "The Trash Bin Truth",
    coverImage: "/images/the-millionaire-sisters-kitchen-trash-quilt-cover.jpg",
    hook: "🔥 Read Chapter 6 (Grand Finale): The Mother's True Heir and Eternal Sanctuary!",
    hookSummary: "Clara looks Vanessa in the eye and reveals the truth of the 'garbage quilt' tossed into the kitchen trash.",
    paragraphs: [
      "[ AUCTION FOYER — 02:45 PM ]",
      "Vanessa rushed up to Clara, trembling with rage: \"How did you do this?! Did you steal from Mother's accounts?!\"",
      "Clara looked at her sister with quiet, serene pity.",
      "\"Do you remember that 'ugly garbage quilt' you threw in the kitchen trash bin, Vanessa?\"",
      "\"Mother stitched eighty bearer bonds into the lining. She left ten million dollars to the child who cherished her memories.\"",
      "Vanessa gasped, her designer handbag slipping from her fingers onto the marble floor as the bitter realization of her own greed broke her."
    ]
  },
  {
    title: "The Heir's Sanctuary",
    coverImage: "/images/the-millionaire-sisters-kitchen-trash-quilt-scene.jpg",
    hookSummary: "Clara returns to the family estate as the sole unencumbered owner, turning the gardens into a community arts center.",
    paragraphs: [
      "[ FAMILY ESTATE PORCH — 06:30 PM ]",
      "Clara sat on the porch rocking chair with the vintage quilt draped warmly across her lap.",
      "The house was hers, completely debt-free and protected forever.",
      "She established the Margaret Holloway Memorial Foundation to teach textile arts and quilting to underprivileged youth across Atlanta.",
      "Looking up into the evening sky, Clara whispered: \"Thank you, Mama. Your love will warm this home forever.\""
    ]
  }
];

const series4Stories = makeSeries({
  idPrefix: "story-trash-quilt-mega",
  baseTitle: "The Millionaire Sister's Kitchen Trash",
  primarySlug: "the-millionaire-sisters-kitchen-trash-quilt",
  slugPrefix: "the-millionaire-sisters-kitchen-trash-quilt",
  category: "Revenge",
  subcategory: "Sibling Rivalry",
  tags: ["Revenge", "Inheritance", "Family Secrets", "Trending"],
  seriesId: "series-kitchen-trash-quilt-mega"
}, s4Chapters);

// -------------------------------------------------------------
// SERIES 5: The Landlord's Fake Eviction (6 Chapters)
// -------------------------------------------------------------
const s5Chapters = [
  {
    title: "The Management Office Standoff",
    coverImage: "/images/the-landlords-fake-eviction-federal-deeds-cover.jpg",
    hook: "🔥 Read Chapter 2: The Federal Patent Deeds Dropped on the Desk!",
    hookSummary: "When an arrogant landlord tried to intimidate an elderly veteran in his office, the veteran's lawyer granddaughter walked in with federal patent deeds.",
    paragraphs: [
      "[ DOWNTOWN PROPERTY MANAGEMENT OFFICE — 10:45 AM ]",
      "In the dingy office of a predatory commercial landlord, seventy-eight-year-old veteran Arthur sat anxiously in his blue cardigan, holding his reading glasses.",
      "Across the desk, thirty-two-year-old landlord Marcus reclined in his chair wearing a designer tracksuit and gold chain, laughing arrogantly.",
      "\"Old man, your ninety-nine-year land lease expired last Friday,\" Marcus mocked. \"Sign this surrender form or I'll have the sheriff put your bed on the sidewalk.\"",
      "The door swung open, and Denise strode in, wearing a tailored charcoal blazer with neat locs.",
      "\"My grandfather isn't signing anything, Marcus,\" Denise announced with razor-sharp precision.",
      "She placed a heavy stack of certified parchment on the desk, pointing to the gold seal: \"This is the 1972 Perpetual Allodial Title Deed. The lease you're trying to enforce was extinguished thirty years ago.\"",
      "Marcus's laughter died instantly as he read the Department of Justice certification.",
      "\"Furthermore,\" Denise added, \"I've already filed a formal complaint with the State Attorney General for extortion of a senior veteran.\""
    ]
  },
  {
    title: "The 1972 Allodial Patent",
    coverImage: "/images/the-landlords-fake-eviction-federal-deeds-scene.jpg",
    hook: "🔥 Read Chapter 3: The State Prosecutor's Surprise Audit!",
    hookSummary: "Denise exposes Marcus's falsified lease records, proving Grandpa Arthur owns the commercial plaza outright.",
    paragraphs: [
      "[ LAW OFFICES OF DENISE HOLLOWAY — 01:30 PM ]",
      "Denise reviewed the title chain documents alongside her legal team.",
      "Marcus had erased the original land patent recordings from the local municipal database using a compromised clerk login.",
      "However, the Library of Congress and the National Archives retained the master microfilm records.",
      "\"Marcus didn't just trespass,\" Denise told Arthur. \"He committed felony destruction of public land records.\""
    ]
  },
  {
    title: "The Federal Subpoena",
    coverImage: "/images/the-landlords-fake-eviction-federal-deeds-cover.jpg",
    hook: "🔥 Read Chapter 4: Marcus's Offshore Accounts Frozen!",
    hookSummary: "Federal investigators serve subpoenas on Marcus's management firm, uncovering eighty forged commercial liens.",
    paragraphs: [
      "[ PROPERTY MANAGEMENT HEADQUARTERS — 09:00 AM ]",
      "Four federal marshals entered Marcus's office, serving a freeze order signed by Judge Eleanor Vance.",
      "Marcus attempted to shred documents, but agents immediately took control of the computer servers.",
      "\"Mr. Vance, step away from the desk. You are under federal investigation for systematic elder extortion.\"",
      "Sweat poured down Marcus's face as his gold chain felt like a noose."
    ]
  },
  {
    title: "The Courtroom 3 Arraignment",
    coverImage: "/images/the-landlords-fake-eviction-federal-deeds-scene.jpg",
    hook: "🔥 Read Chapter 5: Judge Vance Hands Down the Twelve Year Sentence!",
    hookSummary: "Marcus is brought before Judge Vance in prison orange, facing sixteen felony counts of racketeering.",
    paragraphs: [
      "[ CHATHAM COUNTY SUPERIOR COURT — 11:00 AM ]",
      "Stripped of his designer clothes, Marcus stood before the bench in prison orange.",
      "Grandpa Arthur sat in the front row with his military service medal pinned proudly to his cardigan.",
      "Prosecutor Katherine Brooks presented eighty-four forged lease documents recovered from Marcus's office.",
      "\"The defendant deliberately preyed on senior citizens and military veterans to seize prime commercial real estate.\""
    ]
  },
  {
    title: "The Twelve Year Sentence",
    coverImage: "/images/the-landlords-fake-eviction-federal-deeds-cover.jpg",
    hook: "🔥 Read Chapter 6 (Grand Finale): The Veteran's Unbroken Honor and Community Sanctuary!",
    hookSummary: "Judge Vance sentences Marcus to twelve years in state prison and orders complete restitution of all commercial holdings.",
    paragraphs: [
      "[ CHATHAM COUNTY SUPERIOR COURT — 02:00 PM ]",
      "Judge Vance gaveled the court into solemn silence.",
      "\"Marcus Vance Holloway, your greed is a disgrace to this community. You are sentenced to twelve years in state penitentiary without parole.\"",
      "\"Furthermore, all seized properties are returned immediately to their lawful titleholders with full restitution.\"",
      "The courtroom gallery erupted into applause as Arthur wiped a tear of relief from his eye."
    ]
  },
  {
    title: "The Veteran's Sanctuary",
    coverImage: "/images/the-landlords-fake-eviction-federal-deeds-scene.jpg",
    hookSummary: "Grandpa Arthur and Denise stand outside the courthouse under the Georgia sunshine, celebrating an unbroken victory.",
    paragraphs: [
      "[ COURTHOUSE STEPS — 03:30 PM ]",
      "Surrounded by family, neighbors, and fellow veterans, Arthur stood tall on the courthouse steps.",
      "For fifty years he had defended his country, and today, his granddaughter had defended him.",
      "\"Denise, my girl... you showed them that an honest name is worth more than all the gold in Georgia.\"",
      "Denise smiled, taking his arm: \"You fought for us, Grandpa. Now it's our turn to take care of you forever.\""
    ]
  }
];

const series5Stories = makeSeries({
  idPrefix: "story-landlord-mega",
  baseTitle: "The Landlord's Fake Eviction",
  primarySlug: "the-landlords-fake-eviction-federal-deeds",
  slugPrefix: "the-landlords-fake-eviction",
  category: "Courtroom & Justice",
  subcategory: "Legal Drama",
  tags: ["Courtroom", "Landlord", "Justice", "Trending", "Viral"],
  seriesId: "series-landlords-fake-eviction-mega"
}, s5Chapters);

// -------------------------------------------------------------
// SERIES 6: The Kitchen Table Secret (6 Chapters)
// -------------------------------------------------------------
const s6Chapters = [
  {
    title: "The Morning Coffee Default Notice",
    coverImage: "/images/the-kitchen-table-secret-foreclosure-truth-cover.jpg",
    hook: "🔥 Read Chapter 2: The Brass Keys and the Father's Secret Trust!",
    hookSummary: "Sitting over morning coffee, David discovered why his sister had hidden a ring of keys and a notepad. It wasn't bankruptcy—it was a test.",
    paragraphs: [
      "[ SUBURBAN RESIDENCE KITCHEN — 08:30 AM ]",
      "Morning sunlight streamed across the wooden kitchen table where David stood in his navy henley shirt, staring down at his sister Nicole.",
      "Between them sat three steaming ceramic coffee mugs, a bowl of fresh fruit, and a handwritten notepad with a single set of brass keys.",
      "\"Nicole, why is the bank sending default notices to this address?\" David demanded, his voice tight with concern.",
      "Nicole looked up from her coffee mug, her eyes filled with emotion as her braided hair framed a weary face.",
      "\"David... the notices aren't real. They were sent by our stepbrother to see if we would panic and sell the house to his shell company for pennies,\"",
      "Nicole slid the notepad across the table, revealing bank statements proving every mortgage payment had been escrowed in an untouchable legal trust.",
      "The brass keys unlocked the safety deposit box holding their father's true estate inheritance—a fund designed specifically to expose greed within the family.",
      "David let out a long breath of relief, clasping his sister's hand: \"We held the line. Now let's go put our stepbrother in his place once and for all.\""
    ]
  },
  {
    title: "The Father's Escrow Fund",
    coverImage: "/images/the-kitchen-table-secret-foreclosure-truth-scene.jpg",
    hook: "🔥 Read Chapter 3: Safety Deposit Box 418 Unlocked!",
    hookSummary: "David and Nicole review their father's handwritten financial records, discovering six million dollars in untouched trust deposits.",
    paragraphs: [
      "[ KITCHEN TABLE — 09:30 AM ]",
      "David read through his late father's handwritten ledger.",
      "Every single loan installment had been double-escrowed with First National Bank.",
      "\"Dad knew our stepbrother, Craig, would try to forge foreclosure papers the minute he passed away,\" Nicole explained.",
      "\"He set up a decoy default notice to bait Craig into committing grand fraud on official bank stationery.\"",
      "David chuckled softly: \"Dad always was three steps ahead of everyone.\""
    ]
  },
  {
    title: "The Safety Deposit Vault",
    coverImage: "/images/the-kitchen-table-secret-foreclosure-truth-cover.jpg",
    hook: "🔥 Read Chapter 4: The Clerk's Office Sting Operation!",
    hookSummary: "The siblings unlock safe deposit box 418, retrieving the original mortgage satisfaction deed and certified bank drafts.",
    paragraphs: [
      "[ FIRST NATIONAL BANK VAULT — 11:00 AM ]",
      "The twin brass keys turned smoothly inside the lock of box 418.",
      "Inside was a notarized certificate of satisfaction issued by the State Banking Commission, confirming zero encumbrances on the family residence.",
      "Beside it was a letter from their father: *'To David and Nicole: The house is free and clear. Use the enclosed six million dollars to build your dreams.'*",
      "Armed with these documents, they notified the county district attorney's financial crimes unit."
    ]
  },
  {
    title: "The County Clerk's Sting",
    coverImage: "/images/the-kitchen-table-secret-foreclosure-truth-scene.jpg",
    hook: "🔥 Read Chapter 5: Craig's Arrest at the Recording Desk!",
    hookSummary: "Craig arrives at the county recording desk with his forged deed, unaware that investigators and hidden cameras are waiting.",
    paragraphs: [
      "[ FULTON COUNTY DEEDS REGISTRY — 02:00 PM ]",
      "Craig walked up to the deeds counter wearing a smug grin, holding the forged foreclosure assignment.",
      "\"I'm recording this emergency deed transfer for parcel 804.\"",
      "The clerk scanned the document into the system, triggering a pre-set silent alarm.",
      "Within seconds, two plainclothes detectives stepped behind Craig and pinned his arms to the counter.",
      "\"Craig Vance, you are under arrest for felony forgery of county property records.\""
    ]
  },
  {
    title: "The Court Dismissal",
    coverImage: "/images/the-kitchen-table-secret-foreclosure-truth-cover.jpg",
    hook: "🔥 Read Chapter 6 (Grand Finale): The Kitchen Table Peace Reclaimed!",
    hookSummary: "The county judge dismisses Craig's fraudulent petition with prejudice, permanently barring him from the family estate.",
    paragraphs: [
      "[ PROBATE COURT CHAMBERS — 04:30 PM ]",
      "Judge Eleanor Vance reviewed the certified mortgage satisfaction documents presented by David and Nicole.",
      "\"The petition filed by Craig Vance is dismissed with prejudice as a fraudulent instrument,\" Judge Vance ordered.",
      "Craig was led away to the county jail, his claims completely annihilated.",
      "David and Nicole walked out into the afternoon sunlight, their father's legacy fully protected."
    ]
  },
  {
    title: "The Coffee Table Peace",
    coverImage: "/images/the-kitchen-table-secret-foreclosure-truth-scene.jpg",
    hookSummary: "Brother and sister return to their sunlit kitchen table, enjoying their evening coffee in deep, unshakeable peace.",
    paragraphs: [
      "[ DAVIS KITCHEN — 07:00 PM ]",
      "The aroma of fresh coffee once again filled the warm kitchen.",
      "David poured two fresh mugs, placing one before Nicole with a gentle smile.",
      "\"No more default notices. No more threats.\"",
      "Nicole raised her mug: \"To Dad. And to a family that never gave up on each other.\"",
      "They clinked their mugs as the evening sunset painted the sky in shades of gold and rose."
    ]
  }
];

const series6Stories = makeSeries({
  idPrefix: "story-kitchen-secret-mega",
  baseTitle: "The Kitchen Table Secret",
  primarySlug: "the-kitchen-table-secret-foreclosure-truth",
  slugPrefix: "the-kitchen-table-secret",
  category: "Family Feud",
  subcategory: "Secrets & Marriage",
  tags: ["Family Feud", "Secrets", "Marriage", "Trending"],
  seriesId: "series-kitchen-table-secret-mega"
}, s6Chapters);

// -------------------------------------------------------------
// SERIES 7: The Prodigal Son at the Backyard Reunion (6 Chapters)
// -------------------------------------------------------------
const s7Chapters = [
  {
    title: "The $15 Million Gift Bag",
    coverImage: "/images/the-prodigal-son-backyard-reunion-gift-cover.jpg",
    hook: "🔥 Read Chapter 2: The Sneering Uncles Humbled at the Barbecue!",
    hookSummary: "After ten years of being mocked as the family failure, Marcus walked into the backyard birthday celebration carrying a simple paper gift bag with blue ribbon.",
    paragraphs: [
      "[ SUMMER HILLS BACKYARD REUNION, GEORGIA — 04:30 PM ]",
      "Blue and white balloons swayed gently in the summer breeze as twenty relatives gathered around the picnic tables for the annual family celebration.",
      "Laughter and the smell of barbecue filled the air until all eyes turned toward the gate.",
      "Walking steadily across the green lawn was thirty-four-year-old Marcus, wearing a dark navy shirt and jeans, holding a small decorative paper gift bag tied with a blue satin bow.",
      "Ten years ago, Marcus had left the family farm with empty pockets after refusing to participate in his uncles' shady timber deals, earning him the label of the family outcast.",
      "His uncle sneered from the barbecue pit: \"Well, look who decided to show up. Did you bring us a ten-dollar gift card, Marcus?\"",
      "Marcus smiled calmly, walking straight past his sneering relatives to where his eighty-year-old grandmother sat under the shade of the oak tree.",
      "He knelt beside her chair and placed the gift bag into her lap: \"Happy Birthday, Nana. I promised you ten years ago that you would never lose this farm.\"",
      "Grandmother opened the tissue paper and pulled out the contents.",
      "Inside was the fully satisfied mortgage deed for the entire two-hundred-acre farm, accompanied by a fifteen-million-dollar permanent agricultural endowment funded by Marcus's successful green-tech company."
    ]
  },
  {
    title: "The Paid-Off Mortgage Deed",
    coverImage: "/images/the-prodigal-son-backyard-reunion-gift-scene.jpg",
    hook: "🔥 Read Chapter 3: The Irrevocable Agricultural Land Trust!",
    hookSummary: "Grandmother weeps with joy as she reads the paid-in-full bank certificate, silencing the greedy uncles on the spot.",
    paragraphs: [
      "[ BACKYARD OAK TREE — 04:45 PM ]",
      "Tears filled Grandmother's eyes as she touched the gold embossed satisfaction stamp.",
      "\"Marcus... you paid the entire six-million-dollar bank note yourself?\"",
      "The uncles stood frozen beside the grill, their tongs hanging limp in their hands.",
      "\"I didn't just pay the note, Nana,\" Marcus said with quiet dignity.",
      "\"I placed the entire two hundred acres into an irrevocable family agricultural land trust.\"",
      "\"No one can ever divide it, sell it, or mortgage it. It belongs to every future generation of our family forever.\""
    ]
  },
  {
    title: "The Green Energy Endowment",
    coverImage: "/images/the-prodigal-son-backyard-reunion-gift-cover.jpg",
    hook: "🔥 Read Chapter 4: The Humbled Uncles Step Forward!",
    hookSummary: "Marcus explains how his solar tech company established a perpetual royalty fund for the family farm.",
    paragraphs: [
      "[ BACKYARD DECK — 05:15 PM ]",
      "Marcus unfolded the architectural blueprints on the picnic table.",
      "The rocky, unfarmable back fifty acres had been leased for clean solar energy generation, generating four hundred thousand dollars annually in guaranteed community dividends.",
      "The dividends would pay full college tuition for every child in the extended Davis family.",
      "The relatives gathered around in stunned silence, realizing that the boy they had mocked was now the savior of their entire heritage."
    ]
  },
  {
    title: "The Uncles' Apology",
    coverImage: "/images/the-prodigal-son-backyard-reunion-gift-scene.jpg",
    hook: "🔥 Read Chapter 5: Nana's Blessing Under the Georgia Sunset!",
    hookSummary: "Uncle Ray walks forward with his head bowed, asking Marcus for forgiveness after a decade of arrogance.",
    paragraphs: [
      "[ BACKYARD LAWN — 05:45 PM ]",
      "Uncle Ray walked up to Marcus, his eyes glistening with remorse.",
      "\"Marcus... ten years ago, I called you a fool for walking away. I was blinded by greed.\"",
      "\"You built something honorable, and you saved all of us.\"",
      "Marcus smiled warmly, extending his hand: \"Uncle Ray, family isn't about keeping score. It's about pulling each other up when we stumble.\"",
      "They embraced as the crowd broke into cheers of reconciliation."
    ]
  },
  {
    title: "The Matriarch's Blessing",
    coverImage: "/images/the-prodigal-son-backyard-reunion-gift-cover.jpg",
    hook: "🔥 Read Chapter 6 (Grand Finale): The Thanksgiving Harvest Feast!",
    hookSummary: "Grandmother stands before the twenty gathered family members, offering a prayer of eternal unity.",
    paragraphs: [
      "[ UNDER THE OAK TREE — 06:15 PM ]",
      "Grandmother stood up, holding Marcus's hand tightly.",
      "\"Ten years ago, my grandson left with nothing but faith. Today, he returned to give us our future.\"",
      "She raised her glass: \"May this land always be a sanctuary of love, hard work, and forgiveness.\"",
      "Everyone raised their glasses in unison as the evening sunset bathed the farm in radiant amber light."
    ]
  },
  {
    title: "The Harvest Feast",
    coverImage: "/images/black_american_2_mp4.jpg",
    hookSummary: "The entire extended family gathers around the long harvest table in complete harmony, celebrating the unbroken triumph of redemption.",
    paragraphs: [
      "[ SUMMER HILLS DINING ROOM — 07:30 PM ]",
      "Candlelight illuminated the grand dining table as Grandmother carved the golden roasted turkey.",
      "Children laughed, stories flowed, and the old wounds of jealousy were healed forever.",
      "Marcus looked around the table at his parents, uncles, and cousins, his heart overflowing with deep peace.",
      "The prodigal son had come home—not to demand an inheritance, but to create a legacy that would last for centuries.",
      "Outside, the Georgia night was calm, clear, and blessed with peace."
    ]
  }
];

const series7Stories = makeSeries({
  idPrefix: "story-prodigal-son-mega",
  baseTitle: "The Prodigal Son at the Backyard Reunion",
  primarySlug: "the-prodigal-son-backyard-reunion-gift",
  slugPrefix: "the-prodigal-son-backyard-reunion",
  category: "Redemption & Family",
  subcategory: "Family Reunion",
  tags: ["Family Reunion", "Redemption", "Inspirational", "Trending"],
  seriesId: "series-prodigal-son-gift-mega"
}, s7Chapters);

// -------------------------------------------------------------
// SERIES 8: The Two Mothers at Graduation (6 Chapters)
// -------------------------------------------------------------
const s8Chapters = [
  {
    title: "The Valedictorian on Stage",
    coverImage: "/images/the-two-mothers-at-graduation-cover.jpg",
    hook: "🔥 Read Chapter 2: The Billionaire in the Scarlet Dress!",
    hookSummary: "For eighteen years, Mama Sarah scrubbed hospital floors at 4:00 AM to put Marcus through school. At his graduation, a billionaire heiress stood up to claim him.",
    paragraphs: [
      "[ OAKRIDGE AUDITORIUM, ATLANTA — 02:30 PM ]",
      "The humid June afternoon sun poured through the high clerestory windows of the Oakridge Memorial Auditorium, illuminating five hundred proud parents in midnight-blue commencement gowns.",
      "On the elevated oak stage, eighteen-year-old Marcus stood before the central podium, the gold Presidential Valedictorian Medal gleaming against his chest alongside a four-year full-ride scholarship to Harvard.",
      "In the very last row of the auditorium, seated in a worn metal folding chair, sat Mama Sarah.",
      "Her sixty-two-year-old hands—calloused from thirty years of scrubbing hospital linoleum floors on the graveyard shift—were clasped tightly around a worn leather Bible.",
      "She wore her solitary Sunday church blouse, a faded floral print she had ironed three times that morning.",
      "Then, without warning, the heavy double doors at the front of the VIP aisle clicked open.",
      "A collective gasp rippled across the auditorium as Beverly Sterling swept down the carpeted aisle, flanked by two private videographers and a personal attorney.",
      "Beverly was the billionaire managing partner of Sterling Global Logistics. She wore an off-the-shoulder scarlet silk couture gown that radiated immense wealth.",
      "\"Marcus, my darling!\" Beverly announced loudly. \"Your mother is here to witness your crowning moment!\"",
      "She held up a platinum key fob to a new sports car and extended her hands toward the stage.",
      "Marcus unclipped the microphone and stepped down from the podium.",
      "He walked right past Beverly without looking at the car keys or the trust fund check.",
      "He walked all the way to the back of the auditorium, through the gasping crowd, until he stood before Mama Sarah in the faded floral blouse.",
      "Marcus placed his gold Valedictorian Medal around Mama Sarah’s neck and crowned her head with his graduation cap: \"A mother is not the woman who gives biological life and disappears. A mother is the woman who scrubs floors at 4:00 AM so her child can reach the stars.\""
    ]
  },
  {
    title: "The VIP Foyer Confrontation",
    coverImage: "/images/the-two-mothers-at-graduation-p2-cover.jpg",
    hook: "🔥 Read Chapter 3: The $50 Million Aerospace Patent Trust!",
    hookSummary: "Marcus confronts Beverly in the private foyer, exposing her true motive to seize his late father's $50 Million aerospace patents.",
    paragraphs: [
      "[ AUDITORIUM VIP FOYER — 03:45 PM ]",
      "Beverly retreated into the VIP foyer, her face flushed with humiliation.",
      "Her personal attorney hurried to whisper: \"Beverly, if Marcus doesn't sign the biological acknowledgement by five o'clock, the probate court will release his late father's patents directly to him.\"",
      "The door swung open, and Marcus strode in with Mama Sarah and a senior federal probate investigator.",
      "\"You never cared about being a mother, Beverly,\" Marcus said coldly.",
      "\"You came here today because upon my eighteenth birthday, the fifty-million-dollar patent trust established by my late father, Thomas Sterling, became legally accessible.\"",
      "Beverly's eyes widened in panic as the federal investigator produced a sworn affidavit from Thomas Sterling's estate executor."
    ]
  },
  {
    title: "The Patent Trust Unsealed",
    coverImage: "/images/the-two-mothers-at-graduation-cover.jpg",
    hook: "🔥 Read Chapter 4: The Federal Grand Jury Subpoena Served!",
    hookSummary: "The federal investigator serves Beverly with a grand jury subpoena for attempting to fraudulently divert the patent inheritance.",
    paragraphs: [
      "[ FEDERAL PROBATE CHAMBERS — 10:00 AM ]",
      "Forensic audits confirmed that Thomas Sterling had placed his entire intellectual property portfolio into an irrevocable trust solely benefiting Marcus.",
      "Beverly had attempted to falsify guardianship papers to transfer the patent licensing fees to her corporate holding firm.",
      "The investigator handed Beverly a formal federal subpoena: \"Mrs. Sterling, you are ordered to appear before the Grand Jury on charges of mail and wire fraud.\"",
      "Beverly stood frozen in horror as her high-society empire began to unravel."
    ]
  },
  {
    title: "The Final Hospital Shift",
    coverImage: "/images/the-two-mothers-at-graduation-p2-cover.jpg",
    hook: "🔥 Read Chapter 5: Marcus Retires Mama Sarah on the ICU Floor!",
    hookSummary: "Marcus arrives at St. Jude's Hospital at 5:00 AM, handing Mama Sarah her official retirement papers and the keys to a Boston cottage.",
    paragraphs: [
      "[ ST. JUDE'S HOSPITAL — 05:00 AM ]",
      "Mama Sarah was pushing her mop bucket down the fifth-floor hallway when Marcus walked in wearing a warm wool coat.",
      "He took the mop from her calloused hands and leaned it against the wall.",
      "\"Mama, your final shift is officially over.\"",
      "He handed her a bouquet of white lilies and the deed to a sunlit cottage near Harvard Square in Boston.",
      "Tears flowed down Mama Sarah's face as the hospital staff erupted into applause for their beloved coworker."
    ]
  },
  {
    title: "The Sarah Jenkins Foundation",
    coverImage: "/images/the-two-mothers-at-graduation-cover.jpg",
    hook: "🔥 Read Chapter 6 (Grand Finale): The Harvard Commencement and Generational Legacy!",
    hookSummary: "Marcus establishes a ten-million-dollar scholarship foundation funding college education for children of hospital sanitation workers.",
    paragraphs: [
      "[ HARVARD UNIVERSITY CAMPUS — 02:00 PM ]",
      "Standing in the courtyard of Harvard Yard, Marcus announced the creation of the Sarah Jenkins Foundation.",
      "The foundation provided full-ride scholarships, housing stipends, and mentorship for fifty students every year.",
      "\"My mother taught me that character is built in the quiet hours when no one is watching,\" Marcus told the reporters.",
      "Mama Sarah sat in the front row, holding her Bible, smiling with the deep peace of a mother whose love had conquered the world."
    ]
  },
  {
    title: "The Boston Harvest Cottage",
    coverImage: "/images/the-two-mothers-at-graduation-p2-cover.jpg",
    hookSummary: "Mama Sarah enjoys her peaceful retirement in Boston, surrounded by blooming roses, family love, and eternal honor.",
    paragraphs: [
      "[ BOSTON COTTAGE GARDEN — 06:00 PM ]",
      "The evening sun cast a warm golden glow across the cottage garden as Mama Sarah clipped fresh roses for the dinner table.",
      "Inside, Marcus was setting the table for Sunday dinner, laughing as he studied his graduate textbooks.",
      "The long years of cold winter shifts and heavy burdens were gone forever.",
      "Mama Sarah looked up at the quiet evening sky, her heart filled with boundless gratitude.",
      "Love, sacrifice, and quiet faith had built a fortress that no amount of money could ever buy."
    ]
  }
];

const series8Stories = makeSeries({
  idPrefix: "story-motherhood-mega",
  baseTitle: "The Two Mothers at Graduation",
  primarySlug: "the-two-mothers-at-graduation",
  slugPrefix: "the-two-mothers-at-graduation",
  category: "Shocking Secrets",
  subcategory: "Family Secrets & Redemption",
  tags: ["Motherhood", "Graduation", "Secrets", "Billionaire", "Trending", "Emotional"],
  seriesId: "series-two-mothers-graduation-mega"
}, s8Chapters);

// -------------------------------------------------------------
// MASTER COMPILATION: 52 Total Chapters
// -------------------------------------------------------------
const all52Chapters = [
  ...series1Stories,
  ...series2Stories,
  ...series3Stories,
  ...series4Stories,
  ...series5Stories,
  ...series6Stories,
  ...series7Stories,
  ...series8Stories
];

// Write to data/stories.json
fs.writeFileSync(storiesPath, JSON.stringify(all52Chapters, null, 2), 'utf8');
console.log(`Successfully compiled and saved ${all52Chapters.length} chapters across 8 mega series to data/stories.json!`);

// Sync to server/db.js
let dbContent = fs.readFileSync(dbPath, 'utf8');
const startMarker = 'const INITIAL_STORIES = [';
const endMarker = 'const INITIAL_MARKETING = [';

const startIdx = dbContent.indexOf(startMarker);
const endIdx = dbContent.indexOf(endMarker);

if (startIdx !== -1 && endIdx !== -1) {
  const newInitialStoriesCode = `const INITIAL_STORIES = ${JSON.stringify(all52Chapters, null, 2)};\n\n`;
  const updatedDb = dbContent.slice(0, startIdx) + newInitialStoriesCode + dbContent.slice(endIdx);
  fs.writeFileSync(dbPath, updatedDb, 'utf8');
  console.log("Successfully synced db.js with 52 chapters master catalog!");
}
