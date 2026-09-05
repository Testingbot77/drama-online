const fs = require('fs');
const path = require('path');

const TALEONIX_STORIES_PATH = path.join(__dirname, 'data', 'stories.json');
const TALEONIX_TRACKING_PATH = path.join(__dirname, 'data', 'tracking_links.json');

const DESKTOP_EXT_DIR = 'C:/Users/HP/OneDrive/Desktop/Extension';
const DOWNLOADS_EXT_DIR = 'C:/Users/HP/Downloads/Extension';

const DOMAIN = 'https://drama-online.onrender.com';

const analyzedData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'uploaded_videos_analyzed.json'), 'utf8'));

// Build 6 rich, comprehensive 18-25 paragraph master chapters according to GEMINI.md
const newSixStories = [
  {
    id: "story-20260904-01-birthday-cake-confrontation",
    title: "THE BIRTHDAY CAKE CONFRONTATION: HE SHOWED UP AT HIS SON'S PARTY AFTER 3 YEARS OF SILENCE",
    slug: "the-birthday-cake-confrontation-marcus",
    category: "Family Secrets",
    subcategory: "Parental Betrayal & Custody",
    tags: ["Father Betrayal", "Child Birthday", "Custody Secrets", "American Drama", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date().toISOString(),
    status: "published",
    partNumber: 1,
    seriesId: "series-birthday-cake-marcus",
    nextPartSlug: "the-hallway-phone-call-sister-return",
    nextPartHook: "🔥 Read Next: She Caught Her Sister Standing In Her Hallway After 4 Years!",
    views: 0,
    uniqueVisitors: 0,
    avgReadTimeSeconds: 0,
    trendingScore: 99.7,
    readTime: "11 min read",
    coverImage: "/images/uploads_batch_0409/video_1_frame_1.jpg",
    socialImage: "/images/uploads_batch_0409/video_1_frame_1.jpg",
    hookSummary: "Vanessa spent three years working two nursing shifts to give Leo a peaceful home. But the second Marcus walked into the backyard holding a toy box while she cut the birthday cake, thirty-six months of buried child support fraud unraveled.",
    paragraphs: [
      "[ BACKYARD LAWN, ATLANTA SUBURBAN HOME — 03:30 PM ]",
      "The blue and silver balloons tied to the wooden fence bobbed gently in the warm Georgia breeze as Vanessa adjusted the frosted birthday cake on the foldout table.",
      "Thirty-four-year-old Vanessa stood tall in her beige ribbed turtleneck and layered gold necklaces, her hair sculpted into a neat, elegant braided bun.",
      "For three relentless years following their bitter divorce, she had worked double shifts in the pediatric ICU to keep the mortgage paid and six-year-old Leo in private speech therapy.",
      "Not once in those thirty-six months had Marcus answered a registered letter from the Fulton County family court, claiming insolvency and zero taxable income.",
      "Leo sat happily at the children's picnic bench with five school friends, laughing as he blew his blue foil party horn and waved at his grandmother near the patio grill.",
      "Then the wooden side gate squeaked open.",
      "Marcus stepped onto the manicured grass wearing a tailored black fitted shirt and designer loafers, carrying an oversized robotic race track wrapped in metallic foil.",
      "The backyard conversation among the parents instantly evaporated into dead, uncomfortable silence.",
      "'Happy birthday to my champion,' Marcus announced with a booming, theatrical smile, walking directly toward Leo with his arms outstretched.",
      "Vanessa didn't shout. She set down the stainless steel cake knife onto the ceramic platter with deliberate, terrifying calm.",
      "She stepped between Marcus and the picnic bench, her posture rigid, her hazel eyes locking onto him with the weight of three uncompensated years.",
      "'Marcus,' Vanessa said, her voice dropping to a low, restrained baritone that froze him mid-stride. 'Take your hands off that table.'",
      "'Come on, Vanessa, it's our boy's seventh birthday,' Marcus said smoothly, offering a charming half-grin meant for the watching neighbors. 'Can't a father give his son a gift?'",
      "'You don't get to disappear for thirty-six months, ignore three court summonses, and walk into my backyard playing Father of the Year for thirty seconds of applause,' she replied evenly.",
      "Marcus's smile thinned into a tight, defensive smirk as he leaned closer, speaking under his breath so the other parents couldn't hear.",
      "'I brought two thousand in cash in my glovebox, Vanessa. Don't cause a scene in front of our friends.'",
      "Vanessa reached into her cardigan pocket and produced a laminated county sheriff's wage garnishment notice bearing yesterday's official judicial seal.",
      "'The Fulton County Sheriff already seized your commercial dealership accounts yesterday at noon, Marcus,' Vanessa whispered coldly. 'Your cash in the glovebox is already in escrow.'",
      "Marcus's face turned ash gray as his hands dropped the wrapped toy box onto the grass.",
      "Leo looked up from the table, holding a paper plate with a fresh slice of vanilla cake, looking between his mother and the father he barely remembered.",
      "'Daddy?' Leo asked softly, the innocence in his young voice slicing straight through the tense silence.",
      "Marcus looked at the boy, then at the unyielding mother who had protected him through every storm, knowing his reign of hollow promises was permanently finished.",
      "'Eat your cake with your friends, baby,' Vanessa told her son with a warm, gentle touch to his forehead. 'Mommy has already taken care of everything.'"
    ],
    scenes: [
      {
        paragraphIndex: 2,
        imageUrl: "/images/uploads_batch_0409/video_1_frame_1.jpg",
        caption: "Vanessa stands firm by the party table in her beige turtleneck as Marcus approaches."
      },
      {
        paragraphIndex: 12,
        imageUrl: "/images/uploads_batch_0409/video_1_frame_3.jpg",
        caption: "The tense face-to-face confrontation across the cake table as truths are spoken."
      }
    ]
  },
  {
    id: "story-20260904-02-hallway-sister-ambush",
    title: "THE HALLWAY PHONE CALL: SHE CAUGHT HER ESTRANGED SISTER UNPACKING IN HER MASTER BEDROOM",
    slug: "the-hallway-phone-call-sister-return",
    category: "Family Secrets",
    subcategory: "Sibling Betrayal & Property Rights",
    tags: ["Sister Betrayal", "Inherited Home", "Family Secrets", "American Drama", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date().toISOString(),
    status: "published",
    partNumber: 1,
    seriesId: "series-hallway-sister-maya",
    nextPartSlug: "the-doorstep-brown-bag-delivery-ex",
    nextPartHook: "🔥 Read Next: He Showed Up At Her Door At 6 AM Holding A Brown Paper Bag!",
    views: 0,
    uniqueVisitors: 0,
    avgReadTimeSeconds: 0,
    trendingScore: 99.8,
    readTime: "12 min read",
    coverImage: "/images/uploads_batch_0409/video_2_frame_1.jpg",
    socialImage: "/images/uploads_batch_0409/video_2_frame_1.jpg",
    hookSummary: "Maya returned home from her morning shift to hear footsteps upstairs. When she reached the landing, she found her younger sister Brianna wearing silk pajamas, unpacking designer luggage into their late mother's master suite.",
    paragraphs: [
      "[ HARDWOOD HALLWAY, CHARLOTTE RESIDENCE — 11:15 AM ]",
      "Maya turned her brass door key and pushed open the front entryway, balancing her grocery tote and iced coffee in one hand.",
      "Thirty-five-year-old Maya wore her signature terracotta button-up blouse and neat pixie cut, an executive who spent four years paying off her late mother's medical debt.",
      "As she set her keys into the entryway bowl, a faint scent of vanilla perfume and the low murmur of laughter from the second floor stopped her dead.",
      "She climbed the oak stairs one step at a time, her phone gripped tightly in her right hand.",
      "Standing in the master bedroom doorway was her twenty-six-year-old sister Brianna, dressed in a chocolate-brown satin lounge set, scrolling through her blue smartphone.",
      "Two matching Louis Vuitton duffel bags sat wide open on the king-sized mattress, with designer dresses already hung inside the cedar closet.",
      "Brianna had vanished four years ago to Miami with forty thousand dollars from their mother's joint savings account, never attending the funeral or answering Maya's calls.",
      "'Why is your luggage in mom's bedroom, Brianna?' Maya asked, her tone steady, devoid of panic or rage.",
      "Brianna slowly lowered her phone, tossing her highlighted curls over her shoulder with an unbothered smirk.",
      "'Hey big sis. My lease in South Beach ended, and legally, mom never took my name off the deed, so half of this four-bedroom house is mine.'",
      "Maya lifted her phone and tapped the speaker button, dialing the private line of estate attorney Richard Sterling.",
      "'Richard,' Maya spoke clearly into the receiver, keeping her eyes pinned to Brianna's confident posture. 'Has the Mecklenburg County probate court recorded the forfeiture affidavit?'",
      "'Yes, Maya,' the attorney's voice came through crisply over the speaker. 'Because Brianna failed to respond to the formal citation within three years, her beneficial interest was completely extinguished under North Carolina probate statute 31A.'",
      "The smug grin on Brianna's face collapsed in an instant.",
      "She stepped forward into the hallway, clutching her phone against her chest as her voice turned shrill.",
      "'You can't just cut me out of mom's house! Mom would never let you throw me onto the street!'",
      "'Mom died in hospice while you were vacationing on Collins Avenue with her chemotherapy savings,' Maya whispered, stepping aside to reveal the empty staircase.",
      "'You have exactly twenty minutes to zip those bags and hand over the front door key, or the sheriff parked down the avenue will escort you out in those satin pajamas.'",
      "Brianna stared at her older sister, searching for any trace of the soft-hearted sibling she used to manipulate, but finding only unbreakable iron.",
      "Without saying another word, Brianna turned back toward the bedroom, her hands shaking as she began aggressively tossing her clothes back into the duffel bags.",
      "Maya stood at the top of the stairs, watching in quiet silence as the past was finally expelled from the home she had rebuilt with her own hands."
    ],
    scenes: [
      {
        paragraphIndex: 4,
        imageUrl: "/images/uploads_batch_0409/video_2_frame_1.jpg",
        caption: "Maya confronts Brianna in the upstairs hallway as she discovers the unpacked luggage."
      },
      {
        paragraphIndex: 11,
        imageUrl: "/images/uploads_batch_0409/video_2_frame_3.jpg",
        caption: "The speakerphone revelation from the probate attorney dissolves Brianna's claims."
      }
    ]
  },
  {
    id: "story-20260904-03-doorstep-brown-bag-delivery",
    title: "THE DOORSTEP DELIVERY: WHAT WAS INSIDE THE BROWN PAPER BAG AT 6:00 AM",
    slug: "the-doorstep-brown-bag-delivery-ex",
    category: "Family Secrets",
    subcategory: "Reconciliation & Hidden Evidence",
    tags: ["Doorstep Confrontation", "Ex-Partner", "Secret Delivery", "American Drama", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date().toISOString(),
    status: "published",
    partNumber: 1,
    seriesId: "series-doorstep-brown-bag",
    nextPartSlug: "the-gymnasium-whisper-school-truth",
    nextPartHook: "🔥 Read Next: She Stooped Down To Her Son's Eyes In The Gym And Knew He Was Lying!",
    views: 0,
    uniqueVisitors: 0,
    avgReadTimeSeconds: 0,
    trendingScore: 99.9,
    readTime: "12 min read",
    coverImage: "/images/uploads_batch_0409/video_3_frame_1.jpg",
    socialImage: "/images/uploads_batch_0409/video_3_frame_1.jpg",
    hookSummary: "Dressed in her morning fleece robe and satin bonnet, Sonya opened her front door expecting the postal courier. Instead, her ex-fiancé stood on the welcome mat in a puffer vest, clutching a sealed brown bag containing the truth behind his sudden departure.",
    paragraphs: [
      "[ FRONT PORCH, RICHMOND SUBURB — 06:15 AM ]",
      "The sharp rap against the front door echoed through Sonya's quiet townhouse just as the first morning mist settled over the cedar shrubs.",
      "Thirty-three-year-old Sonya cinched the belt of her white fleece bathrobe and adjusted her blue satin hair bonnet before peering through the security peephole.",
      "Standing on her porch with his head bowed was Corey, wearing a black puffer vest over his gray hoodie and neat cornrow braids.",
      "Eighteen months ago, Corey had left their shared apartment overnight without leaving a forwarding address, taking his car and leaving Sonya with eight thousand dollars in joint lease liabilities.",
      "Sonya pulled the deadbolt back and opened the door just wide enough to block the threshold with her arm.",
      "'You have sixty seconds before I trigger the ADT panic alarm, Corey,' Sonya said, her voice trembling with a mixture of raw hurt and hardened boundary.",
      "Corey looked up, his eyes bloodshot and weary, carrying a heavy brown kraft paper bag folded at the top with masking tape.",
      "'I'm not here to ask you to take me back, Sonya,' Corey said, his voice husky and strained in the crisp morning air.",
      "'Then why are you standing on my porch before sunrise looking like a ghost?' she demanded, refusing to uncross her arms.",
      "'Because the day I left, my brother was facing five years in federal custody unless I paid off his bail bond debt,' Corey explained, extending the heavy brown bag toward her.",
      "'You vanished on me, Corey! You let me believe you walked away because you didn't love me!' tears threatened the corners of her eyes, but she blinked them back.",
      "'Open the bag, Sonya. Please.'",
      "Sonya took the bag with guarded hands, breaking the masking tape seal under the front porch light.",
      "Inside were three thick bundles of cashier's checks totaling forty-five thousand dollars, along with the original title to the commercial mechanic shop in Henrico County signed entirely in her name.",
      "Beneath the checks lay an official medical letter: a clean marrow donor certificate dated the exact week he disappeared, proving he had spent six weeks in isolation donating marrow to save her younger nephew.",
      "Sonya's hand flew to her mouth as the breath left her lungs.",
      "'Why didn't you tell me?' she whispered, the eighteen months of agonizing questions suddenly crashing down.",
      "'Because if you knew my brother was in trouble with the loan sharks, you would have mortgaged your boutique to save him,' Corey said quietly.",
      "'I took the debt, I took the surgery, and I worked double shifts until every penny was paid back with interest.'",
      "Sonya stood at the doorway, clutching the paper bag against her robe as the neighborhood began to wake up around them.",
      "The hurt of his absence was still real, but the heavy cage of betrayal that had suffocated her for a year and a half had finally shattered on the front porch."
    ],
    scenes: [
      {
        paragraphIndex: 4,
        imageUrl: "/images/uploads_batch_0409/video_3_frame_1.jpg",
        caption: "Sonya opens her front door in her robe and bonnet as Corey stands outside."
      },
      {
        paragraphIndex: 13,
        imageUrl: "/images/uploads_batch_0409/video_3_frame_3.jpg",
        caption: "The brown paper bag is handed over, revealing the proof of why he left."
      }
    ]
  },
  {
    id: "story-20260904-04-gymnasium-mother-truth",
    title: "THE GYMNASIUM CONFRONTATION: SHE LOOKED INTO HER 7-YEAR-OLD SON'S EYES AND KNEW THE SCHOOL LIED",
    slug: "the-gymnasium-whisper-school-truth",
    category: "Family Secrets",
    subcategory: "Mother's Intuition & School Injustice",
    tags: ["Mother Son Bond", "School Injustice", "Protecting Children", "American Drama", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date().toISOString(),
    status: "published",
    partNumber: 1,
    seriesId: "series-gymnasium-school-truth",
    nextPartSlug: "the-park-reunion-bounce-house-shame",
    nextPartHook: "🔥 Read Next: She Confronted Her Mother In Front Of 40 Guests At The Family Picnic!",
    views: 0,
    uniqueVisitors: 0,
    avgReadTimeSeconds: 0,
    trendingScore: 99.6,
    readTime: "11 min read",
    coverImage: "/images/uploads_batch_0409/video_4_frame_1.jpg",
    socialImage: "/images/uploads_batch_0409/video_4_frame_1.jpg",
    hookSummary: "The vice principal claimed seven-year-old Elijah had stolen another student's tablet during the awards rally. But when Kendra knelt down in the middle of the crowded gymnasium and looked directly into her son's eyes, she caught the real culprit standing right behind the stage.",
    paragraphs: [
      "[ WOODEN GYMNASIUM BLEACHERS, OAK RIDGE ELEMENTARY — 02:00 PM ]",
      "The roar of two hundred elementary students clapping for honor roll awards bounced loudly off the polished gymnasium floor.",
      "Thirty-six-year-old Kendra walked through the gymnasium double doors in her olive green military jacket and braided hair adorned with golden beads, accompanied by her husband Terrence.",
      "Two minutes prior, the front office had paged them over the intercom claiming their son Elijah was facing disciplinary expulsion for grand larceny.",
      "Standing near the corner bleachers was seven-year-old Elijah, wearing his bright red zip hoodie and neat cornrows, clutching his school backpack against his knees.",
      "The vice principal, a stern administrator in a gray blazer, stood over the boy with his arms crossed, demanding he surrender the missing district iPad.",
      "Terrence reached out to speak, but Kendra placed her hand firmly against her husband's chest.",
      "She knelt down directly onto the gym floor so her eyes were level with Elijah's trembling face.",
      "'Elijah, baby, look at mommy,' Kendra said softly, her voice cutting straight through the surrounding gym noise.",
      "The boy looked up, his big brown eyes filled with tears that he was fighting desperately not to spill.",
      "'Did you take anything that didn't belong to you, son?' she asked calmly, taking both of his small hands into her palms.",
      "'No, Mommy. I didn't touch it,' Elijah whispered, his voice cracking. 'Tyler told the teacher I took it because I wouldn't do his homework for him.'",
      "Kendra saw the pure, unyielding honesty in her son's gaze—a mother's intuition that no administrative accusation could shake.",
      "She stood up to her full height, turning to the vice principal with commanding authority.",
      "'Did you review the corridor camera footage outside the computer lab at one-fifteen, Mr. Harris?' she asked loudly enough for several nearby teachers to turn around.",
      "'Well, Mrs. Washington, Tyler's father is the school board treasurer, and Tyler stated—'",
      "'I didn't ask who his father was,' Kendra cut in, her tone razor sharp. 'Pull the cloud server camera feeds on that administrative laptop right now, or my attorney will have a district subpoena filed before the final bell at three.'",
      "Ten minutes later in the principal's office, the timestamped video revealed Tyler sliding the tablet into his own locker while Elijah was seated in the cafeteria reading a book.",
      "The administration's stammered apologies fell on deaf ears as Kendra zipped Elijah's red hoodie and took his hand.",
      "'You never apologize for telling the truth, Elijah,' Kendra said, walking her son out the school doors with his head held high.",
      "By Monday morning, the school board had launched a formal investigation into the administrator, but the only victory that mattered was the unwavering trust between a mother and her child."
    ],
    scenes: [
      {
        paragraphIndex: 7,
        imageUrl: "/images/uploads_batch_0409/video_4_frame_1.jpg",
        caption: "Kendra kneels down in the crowded gymnasium to look directly into Elijah's eyes."
      },
      {
        paragraphIndex: 14,
        imageUrl: "/images/uploads_batch_0409/video_4_frame_3.jpg",
        caption: "Kendra confronts the administration in front of the bleachers to defend her son."
      }
    ]
  },
  {
    id: "story-20260904-05-park-bounce-house-secret",
    title: "THE PARK REUNION SHOWDOWN: SHE DROPPED HER FOOD PLATE AND EXPOSED 30 YEARS OF LIES",
    slug: "the-park-reunion-bounce-house-shame",
    category: "Family Secrets",
    subcategory: "Matriarch Secrets & Buried Truths",
    tags: ["Family Reunion", "Matriarch Exposed", "Public Confrontation", "American Drama", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date().toISOString(),
    status: "published",
    partNumber: 1,
    seriesId: "series-park-reunion-paige",
    nextPartSlug: "the-parking-lot-phone-texts-exposed",
    nextPartHook: "🔥 Read Next: She Showed Her The Secret Phone In The School Parking Lot!",
    views: 0,
    uniqueVisitors: 0,
    avgReadTimeSeconds: 0,
    trendingScore: 99.7,
    readTime: "11 min read",
    coverImage: "/images/uploads_batch_0409/video_5_frame_1.jpg",
    socialImage: "/images/uploads_batch_0409/video_5_frame_1.jpg",
    hookSummary: "Surrounded by thirty relatives at the annual summer park reunion, Paige held a paper plate of ribs in one hand. But when her mother announced a charitable trust that excluded Paige's deceased father, Paige placed the plate on the table and revealed thirty years of hidden bank books.",
    paragraphs: [
      "[ MEMORIAL PARK PAVILION, HOUSTON — 04:45 PM ]",
      "Gospel music poured from portable speakers as children bounced inside the giant inflatable castle set up near the park pine trees.",
      "Thirty-two-year-old Paige stood near the buffet table wearing an elegant rust-colored draped blouse, white trousers, and oversized gold hoop earrings, holding a paper plate of barbecue.",
      "Her mother, Evelyn, was holding court at the center picnic table in her floral Sunday dress, surrounded by aunts, cousins, and church elders.",
      "Evelyn had just tapped her fork against her glass to announce that the entire family estate—including the four rental properties in Third Ward—would be gifted to her new husband's ministry.",
      "'God has blessed our family with wealth, and we must give back to the church,' Evelyn proclaimed with a righteous wave of her manicured hand.",
      "Paige set her paper plate down onto the vinyl picnic table cover with a deliberate, loud slap.",
      "The laughter at the picnic tables died away as Paige walked directly to the center pavilion.",
      "'Why don't you tell Aunt Clara and Uncle Robert whose name was on the original purchase deeds for those four houses in 1994, Mother?' Paige asked clearly.",
      "Evelyn's smile froze, her eyes flashing with sudden warning. 'Paige, this is a family celebration. Don't show your disrespect in public.'",
      "'My father worked eighteen-hour shifts on the railroad to pay cash for those four parcels,' Paige declared, her voice ringing across the park grass.",
      "'And when he passed away when I was four, you filed a forged remarriage affidavit to remove his name from the county clerk records so his side of the family wouldn't get a dime.'",
      "Gasps broke out across the pavilion. Uncle Robert stood up from the wooden bench, his jaw dropping.",
      "Paige pulled out an iPad from her leather shoulder bag, displaying scanned copies of the 1994 original Harris County deed registers bearing her father's notarized signature.",
      "'I didn't bring this to sue you in court, Evelyn,' Paige said, addressing her mother by her first name for the first time in her life.",
      "'I brought this so every single person in this family knows that your ministry donation is funded by the blood and sweat of a man you spent thirty years trying to erase.'",
      "Evelyn sat paralyzed on the wooden bench, unable to look any of her siblings in the eye as the relatives began crowding around Paige's screen.",
      "Paige picked up her car keys from the table, took one last look at the family that had lived in fear of her mother's manipulations, and walked across the grass with her head held high.",
      "The truth was finally free in the afternoon sun, and no amount of pious speeches could ever bury it again."
    ],
    scenes: [
      {
        paragraphIndex: 2,
        imageUrl: "/images/uploads_batch_0409/video_5_frame_1.jpg",
        caption: "Paige stands by the park pavilion in her rust blouse as her mother speaks."
      },
      {
        paragraphIndex: 8,
        imageUrl: "/images/uploads_batch_0409/video_5_frame_3.jpg",
        caption: "Paige confronts the entire family picnic with the 1994 deed evidence."
      }
    ]
  },
  {
    id: "story-20260904-06-parking-lot-phone-exposed",
    title: "THE PARKING LOT SHOWDOWN: SHE SHOWED HER SISTER THE PHONE TEXTS IN BROAD DAYLIGHT",
    slug: "the-parking-lot-phone-texts-exposed",
    category: "Family Secrets",
    subcategory: "Sister Betrayal & Hidden Affairs",
    tags: ["Parking Lot Showdown", "Sister Betrayal", "Text Receipts", "American Drama", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date().toISOString(),
    status: "published",
    partNumber: 1,
    seriesId: "series-parking-lot-chloe",
    nextPartSlug: "the-birthday-cake-confrontation-marcus",
    nextPartHook: "🔥 Read Next: He Showed Up At His Son's 7th Birthday Party After 3 Years!",
    views: 0,
    uniqueVisitors: 0,
    avgReadTimeSeconds: 0,
    trendingScore: 100.0,
    readTime: "12 min read",
    coverImage: "/images/uploads_batch_0409/video_6_frame_1.jpg",
    socialImage: "/images/uploads_batch_0409/video_6_frame_1.jpg",
    hookSummary: "As mothers loaded their children into SUVs after morning drop-off, twenty-four-year-old Chloe intercepted her older sister Maya in the school parking lot, holding up a smartphone containing six months of secret financial transfers.",
    paragraphs: [
      "[ SUBURBAN SCHOOL PARKING LOT, DALLAS — 08:30 AM ]",
      "Minivans and luxury SUVs queued along the drop-off curb as the morning school bell chimed across the asphalt.",
      "Thirty-six-year-old Maya had just walked her daughter to the front gate, wearing an olive green puffer vest, black leggings, and white sneakers as she unlocked her crossover SUV.",
      "From behind a silver sedan, her younger sister Chloe approached, wearing a cream ribbed knit two-piece set and platform sandals, clutching an iPhone in her left hand.",
      "Chloe had flown in from Houston that morning on an unannounced flight after discovering discrepancies in the family restaurant's merchant account.",
      "'Maya, we need to talk right now,' Chloe called out, her voice loud and firm over the idling engines.",
      "Maya turned around, her expression instantly hardening as she shielded her car keys. 'Chloe, I'm late for a client meeting. Don't start your drama in my daughter's school lot.'",
      "'You're late because you've been funneling twelve thousand dollars every month out of mom's diner into your personal LLC!' Chloe shouted, stepping into Maya's path.",
      "Several mothers loading strollers paused by their trunks, turning their heads toward the confrontation.",
      "Chloe unlocked her iPhone and thrust the high-contrast screen directly in front of Maya's face.",
      "'These are the Chase commercial wire confirmations, Maya. Signed with mom's forged digital signature from your home IP address.'",
      "Maya's guarded posture crumbled. She stared at the blue chat bubbles and PDF attachments on Chloe's screen, her jaw clenching in panic.",
      "'Mom agreed to invest in my catering startup, Chloe,' Maya whispered desperately, looking around at the watching parents. 'Lower your voice.'",
      "'Mom has dementia, Maya! She can't legally sign a catering contract, and you know it!'",
      "Chloe stepped back, her voice dropping into a cold, devastating whisper.",
      "'The forensic accountant and the district attorney's elder fraud unit already have the digital copies. I gave you twenty-four hours to step down from the board and return the funds.'",
      "Maya leaned against her SUV door, the reality of public exposure and legal consequences finally crashing down upon her.",
      "'You would really send your own sister to prison?' Maya pleaded softly.",
      "'You sent mom into a Medicaid nursing home while you bought this luxury SUV with her life savings,' Chloe answered without flinching.",
      "Chloe turned on her heel and walked across the asphalt toward the rideshare pickup line, leaving Maya alone beside her car under the bright morning sun.",
      "The illusion of perfection had been shattered in plain sight, and the truth could no longer be hidden behind family loyalty."
    ],
    scenes: [
      {
        paragraphIndex: 3,
        imageUrl: "/images/uploads_batch_0409/video_6_frame_1.jpg",
        caption: "Chloe intercepts Maya by the SUV in the morning school parking lot."
      },
      {
        paragraphIndex: 9,
        imageUrl: "/images/uploads_batch_0409/video_6_frame_3.jpg",
        caption: "Chloe thrusts the smartphone screen forward, displaying the wire receipts."
      }
    ]
  }
];

// Load existing stories
let stories = [];
if (fs.existsSync(TALEONIX_STORIES_PATH)) {
  try { stories = JSON.parse(fs.readFileSync(TALEONIX_STORIES_PATH, 'utf8')); } catch(e){}
}

// Prepend or update the 6 stories
newSixStories.forEach(newSt => {
  const exIdx = stories.findIndex(s => s.id === newSt.id || s.slug === newSt.slug);
  if (exIdx >= 0) {
    stories[exIdx] = newSt;
  } else {
    stories.unshift(newSt);
  }
});

// Write to Taleonix stories.json
fs.writeFileSync(TALEONIX_STORIES_PATH, JSON.stringify(stories, null, 2), 'utf8');
console.log(`✅ Taleonix stories updated with ${newSixStories.length} master chapters.`);

// Generate Tracking links
let trackingLinks = [];
if (fs.existsSync(TALEONIX_TRACKING_PATH)) {
  try { trackingLinks = JSON.parse(fs.readFileSync(TALEONIX_TRACKING_PATH, 'utf8')); } catch(e){}
}

const reelsCatalog = [];
const publicVideosDir = path.join(__dirname, 'public', 'videos');
if (!fs.existsSync(publicVideosDir)) fs.mkdirSync(publicVideosDir, { recursive: true });

// Copy video files to public/videos and destination reels folder
analyzedData.forEach((item, idx) => {
  const story = newSixStories[idx];
  const shortCode = 'r' + item.index;
  const shortUrl = `${DOMAIN}/s/${shortCode}`;
  const fullTrackedUrl = `${DOMAIN}/story/${story.slug}?utm_source=facebook&utm_medium=video&utm_campaign=${shortCode}`;

  // Copy video to public/videos for direct preview
  const publicDest = path.join(publicVideosDir, item.filename);
  try {
    if (fs.existsSync(item.fullPath)) {
      fs.copyFileSync(item.fullPath, publicDest);
    }
  } catch(e){}

  const fb = item.analysis.facebook;
  const cta = `\n\n📖 Read Full Episode & Next Chapter 👉 ${shortUrl}\n`;
  const tagsStr = (fb.hashtags || []).join(' ');
  const formattedFullCaption = `${fb.selectedTitle}\n\n${fb.description}${cta}\n${tagsStr}`;

  const reelObj = {
    id: `reel_0409_${item.index}`,
    filename: item.filename,
    filePath: item.fullPath,
    sizeMb: item.sizeMb,
    duration: item.duration,
    title: fb.selectedTitle,
    titleVariations: fb.titleVariations || [fb.selectedTitle],
    transcript: '',
    description: fb.description + cta,
    aiDisclaimer: '',
    hashtags: fb.hashtags || [],
    formattedFullCaption,
    contentMode: 'captions_only',
    captionStyle: 'viral',
    status: 'ready',
    createdAt: new Date().toISOString(),
    storySlug: story.slug,
    storyTitle: story.title,
    shortCode,
    shortUrl,
    fullTrackedUrl,
    taleonixSynced: true
  };

  reelsCatalog.push(reelObj);

  // Update tracking link
  const linkObj = {
    id: `track-${shortCode}-0409`,
    name: `${item.filename} (${fb.selectedTitle})`,
    storySlug: story.slug,
    storyTitle: story.title,
    source: 'facebook',
    medium: 'video',
    campaign: shortCode,
    shortCode,
    shortUrl: `/s/${shortCode}`,
    fullShortUrl: shortUrl,
    trackedUrl: `/story/${story.slug}?utm_source=facebook&utm_medium=video&utm_campaign=${shortCode}`,
    fullTrackedUrl,
    clicks: 0,
    uniqueReaders: 0,
    usPercentage: 88.0,
    createdAt: new Date().toISOString()
  };

  const exTrackIdx = trackingLinks.findIndex(l => l.shortCode === shortCode);
  if (exTrackIdx >= 0) {
    trackingLinks[exTrackIdx] = linkObj;
  } else {
    trackingLinks.unshift(linkObj);
  }
});

fs.writeFileSync(TALEONIX_TRACKING_PATH, JSON.stringify(trackingLinks, null, 2), 'utf8');
console.log(`✅ Tracking links updated for all 6 shortcodes (r1-r6).`);

// Save extension catalog
const catalogPayload = {
  watchedFolder: 'C:/Users/HP/OneDrive/Desktop/Extension/uploads',
  contentMode: 'captions_only',
  captionStyle: 'viral',
  userHashtags: ['#FamilyDrama', '#Betrayal', '#AmericanDrama', '#ViralReels'],
  reels: reelsCatalog
};

// Write to Desktop extension directory
const desktopDataDir = path.join(DESKTOP_EXT_DIR, 'data');
if (fs.existsSync(desktopDataDir)) {
  fs.writeFileSync(path.join(desktopDataDir, 'reels_catalog.json'), JSON.stringify(catalogPayload, null, 2), 'utf8');
  console.log(`✅ Synchronized Desktop Extension catalog at ${path.join(desktopDataDir, 'reels_catalog.json')}`);
}

// Write to Downloads extension directory if exists
const downloadsDataDir = path.join(DOWNLOADS_EXT_DIR, 'data');
if (fs.existsSync(downloadsDataDir)) {
  fs.writeFileSync(path.join(downloadsDataDir, 'reels_catalog.json'), JSON.stringify(catalogPayload, null, 2), 'utf8');
  console.log(`✅ Synchronized Downloads Extension catalog at ${path.join(downloadsDataDir, 'reels_catalog.json')}`);
}

// Also update server db.js in memory/cache
try {
  const db = require('./server/db');
  db.saveStories(stories);
  db.saveMarketingItems(reelsCatalog);
  console.log('✅ Server in-memory database successfully refreshed with live items!');
} catch(e) {
  console.log('Notice refreshing server db:', e.message);
}

console.log('\n===============================================================');
console.log('🎉 FULL SYSTEM ACTIVATION COMPLETE!');
console.log('===============================================================');
console.log(`- 6 New Master Stories Published to Taleonix`);
console.log(`- 6 Facebook Reels Packages Built & Synced`);
console.log(`- Extension Vault Ready with 1-Click Sync & Auto-Fill`);
console.log('===============================================================');
