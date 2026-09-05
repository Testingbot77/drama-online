const fs = require('fs');
const path = require('path');

const TALEONIX_STORIES_PATH = path.join(__dirname, 'data', 'stories.json');
const TALEONIX_TRACKING_PATH = path.join(__dirname, 'data', 'tracking_links.json');
const TALEONIX_MARKETING_PATH = path.join(__dirname, 'data', 'marketing_items.json');

const DESKTOP_EXT_DIR = 'C:/Users/HP/OneDrive/Desktop/Extension';
const DOWNLOADS_EXT_DIR = 'C:/Users/HP/Downloads/Extension';
const DOMAIN = 'https://drama-online.onrender.com';

const newSixStories = [
  {
    id: "story-20260906-10-coffee-shop-notification-alert",
    title: "THE COFFEE SHOP NOTIFICATION: HE WAS SMILING AT HIS PHONE UNTIL HER SCREEN LIT UP",
    slug: "the-coffee-shop-notification-secret-transfer",
    category: "Family Secrets",
    subcategory: "Financial Infidelity & Secret Accounts",
    tags: ["Financial Betrayal", "Coffee Shop Confrontation", "Secret Accounts", "American Drama", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date().toISOString(),
    status: "published",
    partNumber: 1,
    seriesId: "series-coffee-shop-nia-darius",
    nextPartSlug: "the-kitchen-confrontation-seventy-two-hours",
    nextPartHook: "🔥 Read Next: She Waited In The Kitchen For 72 Hours Before Saying A Word!",
    views: 0,
    uniqueVisitors: 0,
    avgReadTimeSeconds: 0,
    trendingScore: 99.8,
    readTime: "11 min read",
    coverImage: "/images/brandai_batch/video_1_frame_1.jpg",
    socialImage: "/images/brandai_batch/video_1_frame_1.jpg",
    hookSummary: "For six months, Darius claimed their joint mortgage down payment was locked in a high-yield CD. But on a sunny Tuesday morning at an artisanal cafe, while he sat grinning at his phone, Nia's banking app pinged with an instant $4,500 withdrawal to a luxury jewelry boutique.",
    paragraphs: [
      "[ ARTISANAL COFFEE SHOP, DOWNTOWN CHARLOTTE — 10:15 AM ]",
      "Morning sunlight poured through the floor-to-ceiling plate glass windows of the bustling downtown cafe, illuminating the polished oak table where thirty-two-year-old Nia sat stirring oat milk into her iced latte.",
      "Nia wore an oversized grey zip-up hoodie over a white t-shirt, her braided hair tied back into an immaculate low bun, her manicured nails tapping lightly against the condensation of her glass cup.",
      "Directly beside her, thirty-three-year-old Darius was slouched in his chair wearing a fitted black crewneck and a double layer of silver link chains, scrolling endlessly through his smartphone with an easy, untroubled smile stretching across his face.",
      "For three relentless years, Nia had worked fifty-hour weeks managing regional logistics accounts, diligently putting away thirty percent of every paycheck into what was supposed to be their shared home-buying escrow account.",
      "Whenever Nia asked why their credit union loan officer had not yet received the escrow verification letter, Darius had always offered the same reassuring, practiced answer: 'The four-month treasury certificate is earning five percent interest, baby. Let the yield compound until closing day.'",
      "Nia had believed him, trusting the man who had promised her a forever home with a wraparound porch in South Charlotte.",
      "Then, at exactly 10:18 AM, Nia's smartphone vibrated violently against the wooden tabletop.",
      "She picked it up casually, expecting a routine shipment dispatch confirmation from her warehouse supervisor.",
      "Instead, a high-priority push notification from First Citizens Bank flashed in bold white lettering across her lock screen: 'Alert: Instant Debit Card Authorization of $4,500.00 at Tiffany & Co. — SouthPark Mall.'",
      "Nia froze, the air leaving her lungs as her thumb instinctively swiped the notification open.",
      "The debit card listed on the transaction was the private secondary debit card linked exclusively to their joint down payment reserve—a card Darius had sworn was locked inside the fireproof safe in their hallway closet.",
      "Nia didn't scream. She didn't overturn the latte or make a dramatic scene in the middle of the crowded cafe.",
      "She turned her head slowly to look at Darius, whose eyes were still glued to his bright screen, chuckling quietly under his breath as he typed a rapid reply with both thumbs.",
      "'Darius,' Nia said, her voice dropping to a low, icy baritone that immediately cut through the hiss of the cafe espresso machine.",
      "Darius looked up, his grin still lingering at the corners of his lips. 'Yeah, babe? You ready to order that blueberry scone?'",
      "Nia slid her phone across the oak table until the edge of the case tapped against his knuckles.",
      "'You've been smiling at your screen for ten straight minutes,' Nia said, locking her gaze onto his. 'While First Citizens sent me an instant fraud alert for forty-five hundred dollars at SouthPark Mall.'",
      "The smile vanished from Darius's face so fast it looked as though someone had wiped it away with a cloth. His gaze dropped to the illuminated screen, his throat bobbing as he swallowed hard.",
      "'Nia, look... it's not what you think,' he stammered, pulling his hands back from the table as if the phone were scorching hot. 'I was setting up an anniversary surprise for you.'",
      "'Our anniversary was three months ago in June, Darius,' Nia answered with devastating calmness. 'And the shipping address on that transaction receipt isn't our apartment. It's an address in Uptown registered to your ex-fiancée.'",
      "Darius went completely pale, his double chains glinting under the morning sun as total, suffocating silence descended over their table.",
      "Nia picked up her iced latte, took one slow sip, and stood up from the booth without raising her voice a single decibel.",
      "'Keep the table, Darius,' Nia said quietly, pocketing her car keys. 'My attorney has already frozen the remaining funds, and the locksmith is on his way to our apartment right now.'"
    ],
    scenes: [
      {
        paragraphIndex: 3,
        imageUrl: "/images/brandai_batch/video_1_frame_1.jpg",
        caption: "Darius smiles at his phone while Nia checks her incoming messages at the cafe."
      },
      {
        paragraphIndex: 17,
        imageUrl: "/images/brandai_batch/video_1_frame_3.jpg",
        caption: "Nia turns to confront Darius across the wooden coffee shop table."
      }
    ]
  },
  {
    id: "story-20260906-11-kitchen-confrontation-seventy-two-hours",
    title: "THE KITCHEN CONFRONTATION: SHE KEPT SILENT FOR 72 HOURS BEFORE SAYING A SINGLE WORD",
    slug: "the-kitchen-confrontation-seventy-two-hours",
    category: "Family Secrets",
    subcategory: "Elder Care Betrayal & Stolen Inheritance",
    tags: ["Elder Care Secrets", "Kitchen Confrontation", "Sibling Betrayal", "American Drama", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date().toISOString(),
    status: "published",
    partNumber: 1,
    seriesId: "series-kitchen-corinne",
    nextPartSlug: "the-living-room-call-probate-secret",
    nextPartHook: "🔥 Read Next: The Phone Rang While She Was Sitting With Her Grandson!",
    views: 0,
    uniqueVisitors: 0,
    avgReadTimeSeconds: 0,
    trendingScore: 99.7,
    readTime: "11 min read",
    coverImage: "/images/brandai_batch/video_2_frame_1.jpg",
    socialImage: "/images/brandai_batch/video_2_frame_1.jpg",
    hookSummary: "Corinne stood alone in the kitchen with her arms crossed, watching the morning coffee brew. For three days, she had known that the family nursing home fund was empty—and she knew exactly whose name was on the unauthorized withdrawals.",
    paragraphs: [
      "[ MODERN SUBURBAN KITCHEN, ATLANTA — 07:45 AM ]",
      "The low hum of the stainless steel refrigerator filled the quiet kitchen as thirty-five-year-old Corinne stood rigid against the granite countertop.",
      "Corinne wore a light grey zip-up hoodie over a matching crewneck shirt, her cornrow braids gathered into an intricate crown at the back of her head, her dark eyes filled with quiet, smoldering resolution.",
      "Her arms were tightly crossed over her chest, her knuckles white against the fleece fabric as she stared toward the hallway entryway.",
      "Seventy-two hours ago, Corinne had received a confidential phone call from the admissions director at St. Jude's Assisted Living Pavilion, where their seventy-one-year-old mother had been receiving specialized stroke rehabilitation care.",
      "The administrator had informed her that the six-month advance residential balance of thirty-six thousand dollars had bounced due to insufficient funds.",
      "Corinne had spent the past three days conducting her own relentless investigation, pulling electronic wire ledgers, subpoenaing bank signature cards, and cross-referencing company disbursements.",
      "What she discovered shattered every remaining illusion of family loyalty.",
      "Her brother Marcus had secretly liquidated their mother's pension escrow account, redirecting twelve thousand dollars every single month into a speculative commercial real estate venture in downtown Savannah.",
      "Whenever Corinne had called him to discuss mom's physical therapy bills, Marcus had sounded exhausted and burdened, sighing heavily over the phone: 'Times are tough, Corinne. We all have to tighten our belts and make sacrifices for mama.'",
      "Now, the sound of heavy footsteps echoed from the hardwood hallway as Marcus strolled into the kitchen, wearing a pressed polo shirt and reaching casually toward the coffee pot.",
      "'Morning, Sis,' Marcus said, not noticing the suffocating chill in the room. 'Did you look over those hospice consent forms I emailed you?'",
      "Corinne didn't blink. She uncrossed her arms slowly and took one deliberate step forward.",
      "'I spent seventy-two hours looking at something far more interesting than your consent forms, Marcus,' Corinne said, her voice piercing the silence like a scalpel.",
      "Marcus stopped mid-reach, his hand hovering inches from the ceramic mug. He turned his head, frowning slightly. 'What are you talking about?'",
      "'You looked me in the eyes last Thanksgiving and swore Mama's pension ran dry,' Corinne continued, her tone steady and unflinching. 'You told our sisters that hospice was the only option because we couldn't afford twenty-four-hour memory care.'",
      "Marcus's jaw tightened defensively. 'I managed the estate according to her power of attorney, Corinne. I don't need you second-guessing my decisions.'",
      "'Her power of attorney required unanimous co-executor consent for any transfer exceeding five thousand dollars,' Corinne replied, stepping closer until she was standing toe-to-toe with him in the center of the kitchen.",
      "'The Fulton County Probate Court issued an emergency freeze on your commercial accounts at six o'clock this morning,' she added coldly. 'And Detective Wright from the financial crimes unit is parking in our driveway as we speak.'",
      "The color drained from Marcus's face, his hand dropping limply to his side as the gravel outside crunched under the tires of an approaching vehicle.",
      "He opened his mouth to plead, but Corinne simply turned her back and poured herself a fresh cup of water.",
      "'You had three years to do right by the woman who raised us, Marcus,' Corinne whispered without looking back. 'Now you can explain your investments to the state magistrate.'"
    ],
    scenes: [
      {
        paragraphIndex: 3,
        imageUrl: "/images/brandai_batch/video_2_frame_1.jpg",
        caption: "Corinne stands with arms crossed in the kitchen, waiting for the truth to be spoken."
      },
      {
        paragraphIndex: 13,
        imageUrl: "/images/brandai_batch/video_2_frame_3.jpg",
        caption: "Corinne delivers her calm, devastating verdict in the morning light."
      }
    ]
  },
  {
    id: "story-20260906-12-living-room-call-probate-secret",
    title: "THE LIVING ROOM CALL: 4 YEARS OF SILENCE BROKEN AFTER THE PROBATE JUDGE SIGNED",
    slug: "the-living-room-call-probate-secret",
    category: "Family Secrets",
    subcategory: "Abandoned Grandchild & Trust Fund Battle",
    tags: ["Grandmother Wisdom", "Inheritance Secrets", "Custody Victory", "American Drama", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date().toISOString(),
    status: "published",
    partNumber: 1,
    seriesId: "series-living-room-evelyn",
    nextPartSlug: "the-audit-receipt-five-year-statement",
    nextPartHook: "🔥 Read Next: She Found The Five-Year Hidden Statement In His Desk Drawer!",
    views: 0,
    uniqueVisitors: 0,
    avgReadTimeSeconds: 0,
    trendingScore: 99.9,
    readTime: "12 min read",
    coverImage: "/images/brandai_batch/video_3_frame_1.jpg",
    socialImage: "/images/brandai_batch/video_3_frame_1.jpg",
    hookSummary: "Sixty-five-year-old Evelyn sat on the couch with her six-year-old grandson Toby, helping him with his homework. When the phone on the coffee table began buzzing with an unfamiliar number, Evelyn knew exactly why her estranged son was finally calling.",
    paragraphs: [
      "[ COZY SUBURBAN LIVING ROOM, MEMPHIS — 06:30 PM ]",
      "A warm amber glow emanated from the vintage brass floor lamp in the corner of the quiet living room, casting soft shadows across the patterned floral sofa.",
      "Sixty-five-year-old Evelyn sat with sovereign, matriarchal poise, wearing an elegant floral-patterned button-up blouse, her silver curls framed softly around her face and a timeless gold band resting on her finger.",
      "Beside her on the couch sat six-year-old Toby in a light blue sweatshirt, focused intently on an educational puzzle game on his tablet, his small feet swinging gently above the carpet.",
      "For four long years, Evelyn had raised Toby entirely on her own, ever since her son Gregory had walked out of their lives following Toby's mother's tragic passing.",
      "Gregory had packed his bags for California, declaring that fatherhood was 'stifling his career' and leaving Evelyn to navigate pediatrician appointments, kindergarten tuition, and grief counseling on a retired teacher's modest pension.",
      "Not once in forty-eight months had Gregory sent a birthday card, a Christmas present, or a single dime of child support.",
      "Then, at 06:34 PM, Evelyn's smartphone began to buzz and illuminate against the dark mahogany coffee table.",
      "The screen displayed an incoming call from an area code in Los Angeles that Evelyn recognized immediately.",
      "Evelyn didn't rush to grab the phone. She gently patted Toby's shoulder, admiring the completed puzzle on his screen, before reaching down with measured grace to answer the call.",
      "She put the phone to her ear and spoke with calm, unhurried authority: 'Hello, Gregory.'",
      "On the other end of the line, Gregory's voice came through fast and agitated: 'Mama, why did I just get an email from the Shelby County Chancery Court claiming that Dad's commercial warehouse was deeded over to a minor's trust?'",
      "Evelyn looked over at little Toby, whose bright eyes looked up at her with pure, uncomplicated trust.",
      "'Your father worked thirty-five years to build that property, Gregory,' Evelyn replied, her voice steady and resonant. 'He wanted it to protect the child you abandoned on my doorstep four years ago.'",
      "'Mama, that property is worth eight hundred thousand dollars!' Gregory yelled into the receiver. 'I'm his only biological son. You can't just bypass me in probate!'",
      "'The probate judge signed the final decree at two o'clock this afternoon, Gregory,' Evelyn stated coldly. 'You signed a legally binding notarized waiver of estate administration when you walked out of this house four years ago so you wouldn't have to pay Toby's medical debts.'",
      "The line went dead quiet on Gregory's end as the realization crashed over him.",
      "'You forgot one fundamental truth, son,' Evelyn continued, her words carrying the immense weight of four years of solitary sacrifice. 'A man who refuses to be a father during the hard times doesn't get to show up as an heir when the harvest comes in.'",
      "Gregory began to stutter an apology, trying to claim he was planning a flight back to Memphis next week to see his boy.",
      "'Toby has everything he needs right here,' Evelyn said softly. 'Don't call this house again unless it's through our family attorney.'",
      "Evelyn tapped the red button, setting the phone back onto the coffee table with calm finality.",
      "Toby looked up from his tablet, smiling warmly as he pointed to the completed puzzle on the screen: 'Grandma, I finished the castle!'",
      "'You certainly did, baby,' Evelyn whispered, wrapping her arm around his shoulders. 'And this castle will always belong to you.'"
    ],
    scenes: [
      {
        paragraphIndex: 3,
        imageUrl: "/images/brandai_batch/video_3_frame_1.jpg",
        caption: "The phone rings on the coffee table as Evelyn sits peacefully with Toby."
      },
      {
        paragraphIndex: 12,
        imageUrl: "/images/brandai_batch/video_3_frame_3.jpg",
        caption: "Evelyn listens to the call with sovereign matriarchal strength."
      }
    ]
  },
  {
    id: "story-20260906-13-audit-receipt-five-year-statement",
    title: "THE AUDIT RECEIPT: SHE FOUND THE FIVE-YEAR STATEMENT HIDDEN IN THE OLD FILING CABINET",
    slug: "the-audit-receipt-five-year-statement",
    category: "Family Secrets",
    subcategory: "Embezzlement & Hidden Assets",
    tags: ["Financial Discovery", "Filing Cabinet Secrets", "Audit Standoff", "American Drama", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date().toISOString(),
    status: "published",
    partNumber: 1,
    seriesId: "series-audit-angela",
    nextPartSlug: "the-parking-lot-standoff-two-cars",
    nextPartHook: "🔥 Read Next: She Pointed At The Next Car Parked Ten Feet Away In The Lot!",
    views: 0,
    uniqueVisitors: 0,
    avgReadTimeSeconds: 0,
    trendingScore: 99.8,
    readTime: "11 min read",
    coverImage: "/images/brandai_batch/video_4_frame_1.jpg",
    socialImage: "/images/brandai_batch/video_4_frame_1.jpg",
    hookSummary: "Angela was cleaning out the metal filing cabinet in her home office when she discovered a misfiled bank audit statement from 2021. Holding the paper under the desk lamp, the numbers proved her business partner had stolen $140,000.",
    paragraphs: [
      "[ HOME OFFICE ARCHIVE, RALEIGH RESIDENCE — 02:20 PM ]",
      "The quiet hum of the desktop computer fan blended with the gentle rustle of old tax folders as thirty-four-year-old Angela sat behind her solid oak office desk.",
      "Angela wore a soft heather-grey knit cardigan over a clean white crewneck shirt, her braided hair pulled back neatly behind her ears, her brow furrowed in intense scrutiny.",
      "In her hands, she held a crisp, single-page printed bank reconciliation ledger that had been tucked behind the bottom drawer of an old beige filing cabinet.",
      "For five years, Angela and her business partner Jamal had run a regional medical logistics agency, generating seven-figure annual billings across North Carolina clinics.",
      "Yet despite record revenues, Jamal had consistently claimed that overhead margins were 'too narrow' to distribute partner dividends, forcing Angela to forego bonuses and work weekends without overtime pay.",
      "Angela had trusted Jamal's financial bookkeeping, assuming the economic climate and rising carrier insurance were genuinely straining the firm's balance sheet.",
      "Then she examined the third line item on the printed ledger resting in her hands.",
      "The statement, originating from First National Bank, detailed a series of recurring quarterly wire disbursements labeled 'Consulting Logistics Advisory LLC'—a shell corporation registered in Delaware under Jamal's personal home address.",
      "Over thirty-six months, Jamal had systematically siphoned one hundred and forty-two thousand dollars of company profit directly into his private offshore trading portfolio.",
      "As Angela stared at the black-and-white figures, the door to the office opened and Jamal stepped inside, holding a pair of presentation folders for their afternoon client meeting.",
      "'Angela, we need to leave for the Duke Health conference in twenty minutes,' Jamal announced briskly, checking his designer watch.",
      "Angela didn't stand up. She slowly lifted the printed bank ledger between two fingers, holding it directly up in front of his eyes.",
      "'Look at this document, Jamal,' Angela said, her voice dropping into a razor-sharp, chilling register.",
      "Jamal squinted at the paper, his smile instantly freezing as his eyes caught the account numbers and the Delaware LLC registration code.",
      "'Where... where did you find that?' Jamal asked, his voice losing all its executive confidence.",
      "'I found it filed under equipment depreciation from 2021,' Angela replied evenly. 'The same year you told me we had to lay off two junior dispatchers because we were running a deficit.'",
      "Jamal swallowed hard, taking an uneasy step backward toward the office door. 'Angela, listen... that was a tax shielding strategy designed to protect our corporate liquidity. Our CPA approved the entire structure.'",
      "'Our CPA didn't approve an offshore transfer to your personal brokerage account, Jamal,' Angela countered, tapping the paper with her index finger. 'I called our managing partner at Ernst & Young twenty minutes ago. They had never seen this ledger in their lives.'",
      "The silence in the office became suffocating as the reality of criminal embezzlement set in.",
      "'I gave five years of my life to build this company with you, Jamal,' Angela said, placing the document carefully into a manila legal envelope. 'And at three o'clock today, the state attorney general's corporate fraud division will have every single page.'",
      "Jamal reached out with trembling hands, pleading for a private buyout settlement, but Angela had already picked up her briefcase.",
      "'There is nothing left to negotiate,' Angela concluded coldly, walking past him through the doorway into the bright hall."
    ],
    scenes: [
      {
        paragraphIndex: 3,
        imageUrl: "/images/brandai_batch/video_4_frame_1.jpg",
        caption: "Angela inspects the five-year hidden audit receipt in her office."
      },
      {
        paragraphIndex: 13,
        imageUrl: "/images/brandai_batch/video_4_frame_3.jpg",
        caption: "Angela holds up the incriminating bank statement, demanding answers."
      }
    ]
  },
  {
    id: "story-20260906-14-parking-lot-standoff-two-cars",
    title: "THE PARKING LOT STANDOFF: HE THOUGHT HE COULD CORNER HER UNTIL SHE POINTED AT THE NEXT CAR",
    slug: "the-parking-lot-standoff-two-cars",
    category: "Family Secrets",
    subcategory: "Double Life Exposed & Child Custody",
    tags: ["Car Confrontation", "Double Life", "Parking Lot Drama", "American Drama", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date().toISOString(),
    status: "published",
    partNumber: 1,
    seriesId: "series-parking-lot-danielle",
    nextPartSlug: "the-seventy-thirty-agreement-kitchen-table",
    nextPartHook: "🔥 Read Next: She Placed The 70/30 Settlement Agreement On The Kitchen Table!",
    views: 0,
    uniqueVisitors: 0,
    avgReadTimeSeconds: 0,
    trendingScore: 99.8,
    readTime: "12 min read",
    coverImage: "/images/brandai_batch/video_5_frame_1.jpg",
    socialImage: "/images/brandai_batch/video_5_frame_1.jpg",
    hookSummary: "Terrence blocked Danielle inside his SUV in the academy parking lot, demanding she sign over her equity in their marital home. But Danielle didn't flinch—she simply pointed out the window at the silver sedan parked ten feet away.",
    paragraphs: [
      "[ SUBURBAN PRIVATE ACADEMY PARKING LOT, DALLAS — 04:45 PM ]",
      "Golden hour sunlight illuminated the rows of luxury vehicles parked outside the North Dallas Preparatory Academy as parents gathered for the afternoon dismissal bell.",
      "Inside a black full-size SUV parked along the northern curb, thirty-three-year-old Danielle sat in the passenger seat with icy composure, wearing an ivory silk collared blouse and small gold hoop earrings.",
      "Beside her behind the steering wheel, thirty-six-year-old Terrence was leaning forward aggressively, his hands gesturing with frantic, animated frustration.",
      "For eight months following their separation, Terrence had refused to sign the divorce decree, insisting that Danielle surrender her fifty percent equity in their four-bedroom Frisco home in exchange for 'amicable co-parenting.'",
      "Terrence had repeatedly claimed he was living alone in a modest one-bedroom apartment, struggling to make ends meet while maintaining child support for their eight-year-old daughter Maya.",
      "He had cornered Danielle in the academy parking lot today, locking the doors electronically and demanding an immediate settlement before Maya walked out of the school lobby.",
      "'Danielle, be reasonable for once in your life!' Terrence argued, slamming his palm against the steering wheel. 'If you force a court appraisal, the legal fees will bankrupt both of us. Just sign the deed over to me and let this go!'",
      "Danielle didn't raise her voice. She didn't flinch or look at the papers he shoved toward her lap.",
      "Instead, she slowly turned her head toward the passenger-side window and looked out across the narrow parking lane.",
      "Parked precisely ten feet away in the adjacent stall was a gleaming silver sedan with its windows rolled halfway down.",
      "Sitting behind the wheel of that sedan was a woman in a denim jacket, watching Terrence's heated gestures with wide, anxious eyes, while a young toddler in the backseat peered through the glass.",
      "'Terrence,' Danielle said in a quiet, chilling whisper that made him stop talking instantly.",
      "'What?' Terrence snapped, looking over at her with impatient irritation.",
      "'Lower your voice,' Danielle instructed smoothly, nodding her head toward the adjacent vehicle. 'And take a good look at stall number forty-two.'",
      "Terrence turned his head toward the side mirror, and every ounce of color evaporated from his face in a fraction of a second.",
      "The woman in the denim jacket was Monique—the woman Terrence had sworn to Danielle was just an administrative coworker, and who had given birth to Terrence's secret two-year-old son fourteen months before their marital separation.",
      "'Danielle... wait, that's not... she's just picking up her niece,' Terrence stammered, his fingers fumbling with the car keys in pure panic.",
      "'Monique's name is on the joint title for your new house in Plano, Terrence,' Danielle stated with ruthless, surgical precision. 'The private investigator I hired documented your entire domestic routine three weeks ago.'",
      "Terrence's jaw hung slack as he realized every lie he had constructed over the past two years had crumbled in broad daylight.",
      "'Now unlock these doors,' Danielle commanded, her hand already resting on the handle. 'My attorney is filing for maximum child support and full residential custody at nine o'clock tomorrow morning.'",
      "Terrence hit the unlock switch with a trembling finger, watching helplessly as Danielle stepped out into the warm afternoon breeze, heading toward the school steps to greet their daughter with an untroubled smile."
    ],
    scenes: [
      {
        paragraphIndex: 3,
        imageUrl: "/images/brandai_batch/video_5_frame_1.jpg",
        caption: "Danielle sits composed in the car as Terrence argues frantically at the wheel."
      },
      {
        paragraphIndex: 12,
        imageUrl: "/images/brandai_batch/video_5_frame_3.jpg",
        caption: "Danielle delivers her calm ultimatum as the truth is exposed."
      }
    ]
  },
  {
    id: "story-20260906-15-seventy-thirty-agreement-kitchen-table",
    title: "THE 70/30 AGREEMENT: HE TOLD HER SHE CONTRIBUTED NOTHING UNTIL THE AUDITOR SIGNED",
    slug: "the-seventy-thirty-agreement-kitchen-table",
    category: "Family Secrets",
    subcategory: "Divorce Settlement & Forensic Truth",
    tags: ["Divorce Settlement", "Forensic Accounting", "Kitchen Table Truth", "American Drama", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date().toISOString(),
    status: "published",
    partNumber: 1,
    seriesId: "series-settlement-rachel-malcolm",
    nextPartSlug: "the-coffee-shop-notification-secret-transfer",
    nextPartHook: "🔥 Read Next: She Saw What He Was Smiling At In The Coffee Shop!",
    views: 0,
    uniqueVisitors: 0,
    avgReadTimeSeconds: 0,
    trendingScore: 99.9,
    readTime: "11 min read",
    coverImage: "/images/brandai_batch/video_6_frame_1.jpg",
    socialImage: "/images/brandai_batch/video_6_frame_1.jpg",
    hookSummary: "For seven years, Malcolm told Rachel that her stay-at-home sacrifices held zero monetary value in a corporate marriage. But when they sat down at the kitchen table with the court-mandated forensic report, the final distribution shocked him to his core.",
    paragraphs: [
      "[ SUNLIT KITCHEN & DINING NOOK, HOUSTON — 11:30 AM ]",
      "Bright Texas sunlight illuminated the round wooden dining table where thirty-five-year-old Rachel sat in quiet, unshakable authority.",
      "Rachel wore a relaxed sage-green linen button-up shirt with rolled cuffs, her locs falling gracefully around her shoulders, her expression calm and unyielding as her index finger rested on a thick white legal document.",
      "Across from her sat thirty-four-year-old Malcolm, dressed in a grey polo shirt with his muscular arms crossed tightly over his chest, his head bowed in grim, uncomfortable silence.",
      "For seven long years, Malcolm had treated Rachel as a subordinate in their own marriage, constantly reminding her that since he was the corporate sales director earning two hundred and fifty thousand a year, every asset they owned belonged exclusively to him.",
      "When Rachel had sacrificed her career in graphic design to manage their home, raise their twin daughters, and support Malcolm through two relocations and an executive MBA, Malcolm had dismissed her contribution as 'basic room and board.'",
      "During their initial mediation conference, Malcolm had offered Rachel a insulting fifteen percent lump-sum settlement, laughing when her attorney insisted on an independent forensic valuation.",
      "Now, the final report from the Harris County Forensic Accounting Special Master lay between them on the table.",
      "Printed boldly across the summary conclusion on page twelve was the court's binding recommendation: a seventy-thirty asset split in Rachel's favor.",
      "Rachel tapped the header of the page with deliberate, rhythmic precision, breaking the heavy silence that hung over the kitchen.",
      "'Read line four, Malcolm,' Rachel said, her voice smooth and devoid of all malice.",
      "Malcolm didn't lift his head at first, his jaw clenching as he stared at the wood grain of the tabletop. 'I already had my lawyer look at it, Rachel. It's completely unreasonable.'",
      "'The special master didn't think it was unreasonable,' Rachel replied calmly. 'They calculated the seven years of uncompensated administrative management, the three hundred thousand dollars you drew from my premarital inheritance to launch your consulting LLC, and the twenty-four hidden crypto accounts you failed to disclose on your mandatory affidavit.'",
      "Malcolm looked up, his eyes wide with a mixture of shock and utter defeat as the full magnitude of his exposure hit him.",
      "'Rachel... we built this life together,' Malcolm muttered softly, his arrogance completely dissolving into desperation. 'If you take seventy percent of the liquid capital, I'll have to sell my partnership equity.'",
      "'You spent seven years telling me that I brought nothing to this table,' Rachel answered, looking him dead in the eye without flinching. 'Today, the law decided exactly what my seven years were worth.'",
      "She picked up a black ink pen and slid the final settlement agreement across the wooden table until it rested against Malcolm's forearms.",
      "'Sign the decree, Malcolm,' Rachel stated with finality. 'Or we proceed to a public jury trial on Tuesday morning, where the judge will review the criminal perjury penalties for hiding marital assets.'",
      "Malcolm stared at the document, his hands shaking slightly as he reached out and uncapped the pen.",
      "With a defeated sigh, he signed his name across the bottom line, knowing his era of financial control was forever extinguished.",
      "Rachel picked up the signed contract, blotted the ink with a paper napkin, and stood up from the dining table with effortless grace.",
      "'The movers will be here at eight tomorrow morning to pack your office,' Rachel said, walking toward the sunlit hallway. 'Have a good afternoon, Malcolm.'"
    ],
    scenes: [
      {
        paragraphIndex: 2,
        imageUrl: "/images/brandai_batch/video_6_frame_1.jpg",
        caption: "Rachel points to the 70/30 division document at the kitchen table."
      },
      {
        paragraphIndex: 12,
        imageUrl: "/images/brandai_batch/video_6_frame_3.jpg",
        caption: "Malcolm sits in silence as Rachel outlines the forensic auditor's findings."
      }
    ]
  }
];

// Load existing stories
let stories = [];
try {
  stories = JSON.parse(fs.readFileSync(TALEONIX_STORIES_PATH, 'utf8'));
} catch (e) {
  stories = [];
}

// Merge or update new stories at top
newSixStories.forEach(st => {
  const existingIdx = stories.findIndex(s => s.id === st.id || s.slug === st.slug);
  if (existingIdx >= 0) {
    stories[existingIdx] = st;
  } else {
    stories.unshift(st);
  }
});

fs.writeFileSync(TALEONIX_STORIES_PATH, JSON.stringify(stories, null, 2), 'utf8');
console.log(`✅ Taleonix stories updated successfully! Total stories: ${stories.length}`);

// Build Tracking Links and Reels Marketing Catalog
let trackingLinks = [];
try {
  trackingLinks = JSON.parse(fs.readFileSync(TALEONIX_TRACKING_PATH, 'utf8'));
} catch (e) {
  trackingLinks = [];
}

const reelsCatalog = [];

const reelMarketingKits = [
  {
    index: 10,
    filename: "04-09-2026_10.mp4",
    story: newSixStories[0],
    selectedTitle: "She Saw What He Was Smiling At In The Coffee Shop... 📱💔",
    titleVariations: [
      "Hook 1: She Saw What He Was Smiling At In The Coffee Shop... 📱💔",
      "Hook 2: He Was Smiling At His Phone Until Her Bank App Pinged! 🚨💸",
      "Hook 3: Would You Forgive Your Partner Siphoning The Down Payment? 🏦⚖️",
      "Hook 4: She Caught His Secret Transfer While Sipping Her Latte! ☕💥"
    ],
    description: "For three years, he swore their joint home down payment was locked in a safe high-yield CD. But on a sunny Tuesday at the cafe, while he sat smiling at his screen, her bank sent an instant $4,500 withdrawal alert to a luxury jewelry store! 📱💔 Would you confront him on the spot or freeze the accounts first?",
    hashtags: ["#FamilyDrama", "#Betrayal", "#AmericanDrama", "#ViralReels", "#FinancialSecrets"]
  },
  {
    index: 11,
    filename: "04-09-2026_11.mp4",
    story: newSixStories[1],
    selectedTitle: "She Waited In The Kitchen Until He Walked In... 🚪🔥",
    titleVariations: [
      "Hook 1: She Waited In The Kitchen Until He Walked In... 🚪🔥",
      "Hook 2: She Kept Silent For 72 Hours Before Saying A Single Word! 🤫⚡",
      "Hook 3: He Told Them Mom's Pension Ran Dry While Funding His Business! 💸👵",
      "Hook 4: The Truth About Her Brother's Secret Savannah Townhouse! 🏡⚖️"
    ],
    description: "For three days, Corinne stayed dead quiet after discovering their mother's nursing home fund was emptied by her own brother. When he strolled into the kitchen asking about hospice forms, she delivered a verdict that froze him mid-stride! 🚪🔥 What would you do if your sibling stole from your mother?",
    hashtags: ["#FamilyDrama", "#ElderCare", "#SiblingBetrayal", "#AmericanDrama", "#ViralReels"]
  },
  {
    index: 12,
    filename: "04-09-2026_12.mp4",
    story: newSixStories[2],
    selectedTitle: "The Phone Rang While She Was Sitting With Her Grandson... 📞👵",
    titleVariations: [
      "Hook 1: The Phone Rang While She Was Sitting With Her Grandson... 📞👵",
      "Hook 2: 4 Years Of Silence Broken The Second The Probate Judge Signed! ⚖️📜",
      "Hook 3: He Abandoned His Son For 4 Years Until The Inheritance Cleared! 👦💔",
      "Hook 4: Grandmother Evelyn Had The Ultimate Response To Her Estranged Son! 👑✨"
    ],
    description: "For four years, Evelyn raised little Toby alone after her son walked out to pursue his career without sending a dime. But the exact afternoon the probate judge deeded the $800K commercial property to the boy's trust, her son suddenly remembered her phone number! 📞👵 Who is in the right here?",
    hashtags: ["#FamilyDrama", "#GrandmotherWisdom", "#InheritanceDrama", "#AmericanDrama", "#ViralReels"]
  },
  {
    index: 13,
    filename: "04-09-2026_13.mp4",
    story: newSixStories[3],
    selectedTitle: "She Found The Hidden Statement In His Desk Drawer... 📄💥",
    titleVariations: [
      "Hook 1: She Found The Hidden Statement In His Desk Drawer... 📄💥",
      "Hook 2: He Claimed The Company Had No Money For 5 Years! 🚨📉",
      "Hook 3: She Unlocked A 5-Year Audit Paper Proving $140K Stolen! 💼⚖️",
      "Hook 4: Would You Report Your Longtime Business Partner To The State? 🏢🔍"
    ],
    description: "Angela spent five years skipping bonuses and working weekends because her business partner swore margins were too tight. But while cleaning the filing cabinet, she found a hidden bank statement showing $142,000 wired to his personal shell company! 📄💥 Would you settle quietly or call the attorney general?",
    hashtags: ["#FamilyDrama", "#Embezzlement", "#BusinessBetrayal", "#AmericanDrama", "#ViralReels"]
  },
  {
    index: 14,
    filename: "04-09-2026_14.mp4",
    story: newSixStories[4],
    selectedTitle: "She Sat In His Car Next To His New Family... 🚗👀",
    titleVariations: [
      "Hook 1: She Sat In His Car Next To His New Family... 🚗👀",
      "Hook 2: He Thought He Could Corner Her Until She Pointed Out The Window! 🚪❄️",
      "Hook 3: He Demanded Her House Equity While His Secret Family Watched! 🏠💔",
      "Hook 4: The Most Icy Parking Lot Confrontation You Will Ever See! 🚘🔥"
    ],
    description: "Terrence locked Danielle inside his SUV at their daughter's school, yelling and demanding she sign over all equity in their marital home. Danielle didn't yell back—she just pointed out the window at the silver car parked ten feet away with his secret girlfriend and child watching! 🚗👀 Was she right to walk away?",
    hashtags: ["#FamilyDrama", "#DoubleLife", "#ParkingLotDrama", "#AmericanDrama", "#ViralReels"]
  },
  {
    index: 15,
    filename: "04-09-2026_15.mp4",
    story: newSixStories[5],
    selectedTitle: "She Placed The 70/30 Agreement On The Kitchen Table... ⚖️📝",
    titleVariations: [
      "Hook 1: She Placed The 70/30 Agreement On The Kitchen Table... ⚖️📝",
      "Hook 2: He Told Her She Contributed Nothing To Their Marriage! 💸💔",
      "Hook 3: The Forensic Auditor Found 24 Hidden Crypto Accounts! 🔍💻",
      "Hook 4: When The Stay-At-Home Mother Wins The Entire Settlement! 👑✨"
    ],
    description: "For seven years, Malcolm told Rachel her stay-at-home sacrifices held zero monetary value in their marriage. But when the court's forensic auditor discovered twenty-four hidden crypto accounts and her stolen inheritance, the judge awarded her a 70/30 division! ⚖️📝 Did she get the justice she deserved?",
    hashtags: ["#FamilyDrama", "#DivorceSettlement", "#ForensicAudit", "#AmericanDrama", "#ViralReels"]
  }
];

reelMarketingKits.forEach(item => {
  const shortCode = 'r' + item.index;
  const shortUrl = `${DOMAIN}/s/${shortCode}`;
  const fullTrackedUrl = `${DOMAIN}/story/${item.story.slug}?utm_source=facebook&utm_medium=video&utm_campaign=${shortCode}`;
  const cta = `\n\n📖 Read Full Episode & Next Chapter 👉 ${shortUrl}\n`;
  const tagsStr = item.hashtags.join(' ');
  const formattedFullCaption = `${item.selectedTitle}\n\n${item.description}${cta}\n${tagsStr}`;

  const reelObj = {
    id: `reel_brandai_${item.index}`,
    filename: item.filename,
    filePath: `C:/Users/HP/Downloads/TheBrandAI_Videos/${item.filename}`,
    sizeMb: "28.00",
    duration: 30.0,
    title: item.selectedTitle,
    titleVariations: item.titleVariations,
    transcript: '',
    description: item.description + cta,
    aiDisclaimer: '',
    hashtags: item.hashtags,
    formattedFullCaption,
    contentMode: 'captions_only',
    captionStyle: 'viral',
    status: 'ready',
    createdAt: new Date().toISOString(),
    storySlug: item.story.slug,
    storyTitle: item.story.title,
    shortCode,
    shortUrl,
    fullTrackedUrl,
    taleonixSynced: true
  };

  reelsCatalog.push(reelObj);

  // Tracking link
  const linkObj = {
    id: `track-${shortCode}-brandai`,
    name: `${item.filename} (${item.selectedTitle})`,
    storySlug: item.story.slug,
    storyTitle: item.story.title,
    source: 'facebook',
    medium: 'video',
    campaign: shortCode,
    shortCode,
    shortUrl: `/s/${shortCode}`,
    fullShortUrl: shortUrl,
    trackedUrl: `/story/${item.story.slug}?utm_source=facebook&utm_medium=video&utm_campaign=${shortCode}`,
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
console.log(`✅ Tracking links updated for all 6 shortcodes (r10-r15).`);

// Save extension catalog
const catalogPayload = {
  watchedFolder: 'C:/Users/HP/Downloads/TheBrandAI_Videos',
  contentMode: 'captions_only',
  captionStyle: 'viral',
  userHashtags: ['#FamilyDrama', '#Betrayal', '#AmericanDrama', '#ViralReels'],
  reels: reelsCatalog
};

// Write to Desktop extension directory if exists
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

// Update server db
try {
  const db = require('./server/db');
  db.saveStories(stories);
  db.saveMarketingItems(reelsCatalog);
  console.log('✅ Server in-memory database successfully refreshed with live items!');
} catch(e) {
  console.log('Notice refreshing server db:', e.message);
}

// Save brandai analysis metadata
fs.writeFileSync(path.join(__dirname, 'data', 'brandai_videos_analyzed.json'), JSON.stringify(reelMarketingKits, null, 2), 'utf8');

console.log('\n===============================================================');
console.log('🎉 BRANDAI 6-VIDEO MASTER SYSTEM COMPLETE & DEPLOYED!');
console.log('===============================================================');
