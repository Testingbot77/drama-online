const fs = require('fs');
const path = require('path');

const storiesPath = path.join(__dirname, 'data', 'stories.json');
let stories = JSON.parse(fs.readFileSync(storiesPath, 'utf8'));

// Helper to expand paragraphs to 18-25 paragraphs with deep emotional dialogue and sensory details
const enrichments = {
  // Grad Ch 7
  "story-grad-mega-ch7": [
    "[ VANCE COMMERCIAL REALTY HEADQUARTERS — 11:15 AM ]",
    "Blue federal seal tape was slapped across the frosted glass entrance doors of the executive suite on Peachtree Road.",
    "Three state forensic investigators loaded heavy bankers boxes labeled 'Escrow Accounts 2010–2024' onto heavy rolling carts.",
    "Arthur Vance sat behind his polished Brazilian walnut desk, his hands visibly shaking as he watched his empire get boxed into cardboard containers.",
    "The air in the corner office was thick with the scent of expensive cigar smoke and cold dread.",
    "David walked into the office, his heavy work boots squeaking against the pristine marble flooring.",
    "He carried a single weathered manila folder under his left arm, his posture completely upright and unhurried.",
    "\"You came to gloat, Davis?\" Arthur spat, refusing to look up from his trembling fingers.",
    "\"I don't gloat over broken men, Arthur,\" David said, pulling up a leather guest chair and sitting down without asking.",
    "David placed the folder flat on the desk, sliding it across the wood until it rested against Arthur's gold pen holder.",
    "Inside was a certified copy of the receipt for Kayla's first pediatric surgery bill—stamped 'Paid in Full by Surrender of Maternal Rights' in red ink dated October 2008.",
    "\"I kept this copy inside the lid of my toolbox for eighteen years,\" David said, his voice flat and quiet as a winter frost.",
    "\"Every time my back gave out on a construction site, every time I worked thirty-six hours straight through Christmas Eve, I looked at this stamp.\"",
    "\"I thought Monica threw us away because she wanted a luxury high-rise life in Chicago.\"",
    "Arthur looked down at the yellowed paper, a flicker of genuine unease crossing his arrogant features.",
    "\"You made me carry eighteen years of bitterness while you used my daughter's Social Security number to evade thirty million dollars in municipal taxes,\" David continued.",
    "\"The investigators didn't come because Monica called them. They came because Kayla turned over the ledger with her own signature at eight o'clock this morning.\"",
    "Arthur leaned back in his leather executive chair, his voice dropping into a desperate plea. \"David... she's my granddaughter. She carries my blood. Convince her to withdraw the state audit.\"",
    "David stood up slowly, adjusting the cuffs of his dark work jacket.",
    "\"She carries my work ethic and her mother's courage, Arthur,\" David said, taking two slow steps toward the door.",
    "\"The blood you gave her almost killed her in that incubator. The love we gave her is what's putting you out of business.\"",
    "He walked out of the suite without looking back, leaving Arthur alone in the hollow quiet of his empty corporate throne."
  ],

  // Ledger Ch 2
  "story-ledger-mega-ch2": [
    "[ WEST END RESIDENCE UPPER HALLWAY — 05:00 PM ]",
    "Marcus stepped into the narrow hallway, blocking Evelyn's path to the master study with his broad frame.",
    "The antique floorboards groaned beneath his weight as the late afternoon sun slanted through the amber stained-glass window.",
    "\"Give me the book, Evelyn,\" Marcus whispered, his smile completely gone, replaced by a raw, predatory desperation.",
    "\"You're playing a dangerous game with family money, little niece.\"",
    "Evelyn held the brass-bound leather ledger tight against her ribs. She didn't step back an inch.",
    "\"You call it family money, Uncle Marcus?\" Evelyn asked, her eyes steady and unblinking.",
    "\"The only money you ever put in this house was the twenty dollars you dropped in mama's birthday card in 2018.\"",
    "Marcus reached out a hand toward the leather binding. \"I'm the designated executor on the 2015 draft will! The probate judge knows my firm!\"",
    "\"The 2015 draft that Grandmother Clara formally revoked when you tried to take a second lien on her garage for your failed nightclub?\" Evelyn asked calmly.",
    "She opened the back flap of the ledger, displaying a certified copy of the county clerk's revocation certificate stamped in blue indelible ink.",
    "\"Grandmother Clara had the revocation witnessed by two retired county judges at the Cascade United Methodist Church,\" Evelyn said.",
    "Marcus's hand froze in mid-air. His eyes darted from the blue seal to Evelyn's resolute face.",
    "\"She never told us about that,\" Marcus stammered, sweat beading along his hairline.",
    "\"Because she knew you'd try to pressure her before the ink was dry,\" Evelyn replied.",
    "Brenda appeared at the bottom of the stairs, shouting up with frantic fury. \"Marcus! Don't let her leave that room! Call our lawyer! Tell him we're filing an emergency restraining order!\"",
    "Evelyn looked down the stairwell at her aunt with cold, unshakable composure.",
    "\"File whatever you want, Aunt Brenda. But when the judge asks why you owe the estate forty-five thousand dollars in back interest, make sure you bring your checkbook.\"",
    "She brushed past Marcus's shoulder, her head held high as she walked into Clara's study and turned the brass deadbolt.",
    "Behind her, the hallway fell into a heavy, defeated silence."
  ],

  // Ledger Ch 4
  "story-ledger-mega-ch4": [
    "[ FULTON COUNTY COURTHOUSE CORRIDOR — 11:30 AM ]",
    "The marble floors of the courthouse hallway clicked loudly as Brenda rushed after Evelyn, her anger barely concealed behind trembling lips.",
    "\"Evelyn! Stop walking away from me!\" Brenda shouted, grabbing Evelyn's wool coat sleeve near the water fountain.",
    "Evelyn stopped in her tracks and turned around slowly, looking down at Brenda's manicured hand until her aunt let go in humiliation.",
    "\"You think you won something in that courtroom today?\" Brenda hissed, her face flushed red. \"You stole my mother's legacy! I'm her eldest flesh and blood!\"",
    "\"You spent the last fifteen years treating mama like an automated teller machine, Brenda,\" Evelyn said, her voice dropping into quiet authority.",
    "\"When mama was in physical therapy for three months after her hip replacement, how many times did you drive down to visit her?\"",
    "Brenda hesitated, looking away toward the crowded elevator bank. \"I had business in Charlotte... my boutique had inventory shipments—\"",
    "\"Zero times, Brenda. You sent a group text on Thanksgiving asking if her social security direct deposit had cleared into the joint account.\"",
    "Marcus caught up, out of breath, trying to play the reasonable mediator. \"Evelyn, let's at least divide the antique furniture and mama's jewelry box. We don't have to be enemies over wood and silver.\"",
    "Evelyn opened the black ledger to the final inscribed page, holding it up so both of them could see Clara's clean, elegant cursive hand.",
    "\"'To my daughter Brenda and son Marcus: I forgive your absence,'\" Evelyn read aloud, her voice ringing through the marble corridor.",
    "\"'But my house, my memories, and my work belong to the child who held my hand in the dark.'\"",
    "Marcus bowed his head, staring down at his polished dress shoes, unable to meet his niece's gaze.",
    "Brenda clutched her designer purse against her stomach, the fire of greed snuffed out by the sheer weight of Clara's written truth.",
    "\"The house is staying in the family, Marcus,\" Evelyn said gently, closing the ledger with a quiet snap.",
    "\"It's just staying with the family that cared enough to show up when there was no money on the table.\"",
    "She turned toward the courthouse double doors, stepping out into the bright Atlanta sunshine as an independent woman."
  ],

  // Ledger Ch 5
  "story-ledger-mega-ch5": [
    "[ CLARA'S WEST END HOME LIVING ROOM — 02:00 PM ]",
    "Sunlight poured through the freshly cleaned stained-glass transom above the front door, illuminating the polished oak floors.",
    "Ten neighborhood elders from the West End Community Council sat in a warm circle of restored wingback chairs, holding glasses of freshly brewed sweet tea.",
    "On the mantlepiece above the red brick fireplace rested Clara's framed portrait, illuminated by the soft glow of two brass wall sconces.",
    "Beside the portrait lay the black leather ledger, open to the page listing the original 1964 land grant.",
    "Mr. Henderson, seventy-eight, who had lived across the street since 1970, raised his crystal glass into the sunlight.",
    "\"When developers started buying up this block three years ago, we thought Miss Clara's house was going to be knocked down for luxury townhomes,\" he said, his voice heavy with emotion.",
    "\"We thought our history was going to be paved over just like the rest of the avenue.\"",
    "Evelyn stepped to the center of the living room, wearing her grandmother's silver locket, smiling warmly at the neighbors who had watched her grow up.",
    "\"Grandmother Clara always told me that land is the only thing God isn't making any more of,\" Evelyn said.",
    "\"This house will never be sold to private developers. Starting next month, the ground floor will host the West End Youth Literacy and Heritage Program.\"",
    "\"Every dollar from the estate's commercial rental properties will go toward free tutoring, college prep, and senior advocacy for this neighborhood.\"",
    "The room filled with soft murmurs of approval and warm applause from the elders.",
    "Mrs. Jenkins, Clara's lifelong church sister, stood up slowly and wrapped her arms around Evelyn.",
    "\"Your grandmother is smiling down on this living room today, child. You did exactly what she prayed for.\"",
    "Evelyn looked up at Clara's portrait, feeling the deep, abiding presence of the matriarch who had built this sanctuary with her own hands.",
    "The house was no longer a battleground of family greed—it was an enduring fortress of community strength."
  ],

  // Ledger Ch 6
  "story-ledger-mega-ch6": [
    "[ WEST END HOMESTEAD FRONT PORCH — 06:00 PM ]",
    "The cool autumn breeze carried the sweet scent of burning oak wood and dry leaves across the wide front porch.",
    "Evelyn sat in Clara's old wooden rocking chair, watching the neighborhood children walk home from the afternoon tutoring session inside.",
    "A familiar silver sedan pulled up to the curb, parking under the shade of the grand pecan tree.",
    "Uncle Marcus stepped out of the car, wearing a simple button-up work shirt without the flashy jewelry or arrogant swagger.",
    "He walked up the front steps slowly, holding a thick white bank envelope in both hands.",
    "\"Evelyn,\" Marcus said quietly, stopping at the top step with his head slightly bowed.",
    "\"Uncle Marcus,\" Evelyn replied, gesturing toward the adjacent wooden rocking chair. \"Have a seat.\"",
    "Marcus sat down, looking out over the quiet street where he had played stickball as a boy fifty years ago.",
    "\"I came to bring this,\" Marcus said, setting the white envelope on the small wrought-iron side table.",
    "\"It's the first five thousand dollars toward what I borrowed from mama in 2015. I set up an automatic bank transfer to the youth foundation for five hundred dollars every month until it's zeroed out.\"",
    "Evelyn looked at the envelope, then at her uncle's humbled, weary face.",
    "\"What made you change your mind, Uncle Marcus?\"",
    "\"I drove past my old elementary school last week, and I realized I spent thirty years chasing money that didn't love me back,\" Marcus said, his voice cracking with genuine remorse.",
    "\"Mama wasn't punishing us with that ledger, Evelyn. She was trying to teach us what a family is actually worth.\"",
    "Evelyn reached across the space between their chairs and placed her hand over his trembling fingers.",
    "\"She always left the front door unlocked for you, Marcus. You just had to come in as her son, not her creditor.\"",
    "As the sun dipped below the Atlanta skyline, painting the West End in rich shades of amber and gold, peace settled over Clara's house—sovereign, unshakeable, and finally whole."
  ],

  // Framed Deed Ch 2
  "story-framed-deed-mega-ch2": [
    "[ CASCADE HOMESTEAD FRONT PERIMETER — 11:00 AM ]",
    "A yellow sixty-ton hydraulic bulldozer roared to life at the edge of the driveway, its steel tracks tearing into the concrete curb.",
    "Julian Sterling stood beside the machine, shouting into his cell phone while fifty neighborhood residents gathered along the sidewalk in silent, watchful solidarity.",
    "Mrs. Patricia stood at the top of her porch steps, holding the gold-framed 1948 deed against her chest like a breastplate.",
    "The siren of a Fulton County Sheriff's cruiser wailed in the distance, cutting off the bulldozer's diesel roar as two black-and-white cruisers screeched to a halt at the curb.",
    "Stepping out of the lead vehicle was Detective Marcus Harris, accompanied by Assistant State Attorney Cynthia Ward.",
    "\"Cut that engine immediately!\" Detective Harris shouted, flashing his gold badge at the bulldozer operator.",
    "The operator cut the ignition, and the heavy diesel silence rushed over the street.",
    "Julian rushed forward, his face flushed with irritation. \"Detective, I have a lawful municipal demolition permit! You're interfering with a city-sponsored infrastructure project!\"",
    "Assistant State Attorney Ward opened a leather legal binder with deliberate calm. \"Mr. Sterling, the municipal permit you're holding was signed by Commissioner Bradley, who was arrested by federal marshals two hours ago on commercial bribery charges.\"",
    "Julian's mouth dropped open. \"What does Bradley's arrest have to do with my private development parcel?\"",
    "\"Everything,\" Attorney Ward replied, stepping past him to look up at Mrs. Washington on the porch.",
    "\"The state attorney's office conducted an emergency title search on this four-acre tract. The 1948 allodial patent is fully intact and registered in the state archives under the Georgia Veterans Land Act.\"",
    "\"Any attempt to disturb this parcel constitutes criminal trespass and malicious property destruction under federal statute.\"",
    "Patricia walked down the porch steps slowly, her expression steady and composed.",
    "\"You thought an old woman standing on a porch was alone, Julian,\" Patricia said quietly, holding up the gold frame.",
    "\"You forgot that the foundation of this house was laid with blood and service, not dirty city contracts. Back your machines off my grass before the sheriff takes your keys.\"",
    "Julian looked at the surrounding crowd of neighbors and the sheriff's deputies, his corporate arrogance completely shattered.",
    "He signaled the operator to load the bulldozer onto the transport truck, retreating into his luxury sedan in total defeat."
  ],

  // Framed Deed Ch 3
  "story-framed-deed-mega-ch3": [
    "[ STATE REGULATORY HEARINGS CHAMBER — 02:30 PM ]",
    "A panel of five state financial regulators sat behind the curved wooden bench, reviewing digital transaction records projected onto the courtroom wall.",
    "Julian Sterling sat at the defense table between two high-priced corporate defense attorneys, his tie loosened, dark shadows under his eyes.",
    "Detective Harris took the witness stand, placing a stack of seized emails from Sterling Holdings' corporate servers into evidence.",
    "\"Detective Harris, what did the digital subpoena uncover regarding the Cascade property?\" the state prosecutor asked.",
    "\"The records reveal a systematic pattern by Sterling Holdings to manufacture false property tax delinquency notices against elderly Black homeowners along the proposed transit corridor.\"",
    "\"They paid corrupt municipal clerks five thousand dollars per parcel to alter property tax records and file premature foreclosure liens.\"",
    "Patricia Washington sat in the front row of the public gallery, her hands resting quietly on her leather purse, watching the proceedings with steady composure.",
    "The prosecutor turned to the bench. \"Your Honor, Mrs. Washington's property taxes were paid five years in advance through her veteran husband's survivor escrow account.\"",
    "\"Sterling Holdings knowingly submitted fraudulent affidavits of service to obtain default demolition orders.\"",
    "The chief administrative judge slammed his gavel down with a sharp crack that echoed off the mahogany paneling.",
    "\"All foreclosure and demolition certificates issued under Sterling Holdings in Fulton County over the past seven years are immediately revoked.\"",
    "\"Mr. Sterling, you are remanded to the custody of state marshals pending formal grand jury indictment for commercial racketeering.\"",
    "As two state marshals stepped forward to place handcuffs on Julian's wrists, he turned to look back at Patricia in the gallery.",
    "Patricia met his gaze without malice, only the deep, unshakable dignity of a woman who knew truth was patient.",
    "\"You can buy buildings with stolen money, Julian,\" Patricia said softly as he was led away. \"But you cannot buy the soul of a community.\"",
    "The gallery broke into soft murmurs of relief as justice was recorded in the state ledger."
  ],

  // Framed Deed Ch 4
  "story-framed-deed-mega-ch4": [
    "[ WASHINGTON HOMESTEAD WRAP-AROUND PORCH — 04:00 PM ]",
    "The wrap-around porch was filled with twenty elderly neighbors holding manila folders, tax receipts, and family Bibles.",
    "Assistant State Attorney Ward and three pro-bono civil rights attorneys sat at foldout tables, reviewing land records one by one.",
    "Patricia poured large glass pitchers of iced sweet tea, serving lemon pound cake she had baked that morning from scratch.",
    "Mr. Arthur Davis, eighty-one, sat with his hands trembling as an attorney stamped his property title 'Cleared of All Sterling Liens'.",
    "\"Miss Patricia,\" Mr. Davis said, tears welling in his eyes. \"They told me last month I had to be out by the fifteenth or they'd put my furniture on the curb.\"",
    "Patricia rested her warm hand gently on his shoulder, squeezing with reassuring strength.",
    "\"Nobody is putting you on the curb, Arthur,\" Patricia said, her voice rich with comfort.",
    "\"Our parents worked sixty years cleaning hospital floors, laying interstate asphalt, and fighting in foreign wars to give us these homes.\"",
    "\"As long as we stand together, no developer with a slick suit and a forged deed will ever run us off our land.\"",
    "The front yard buzzed with the sound of laughter, shared stories, and relieved tears as family after family received their cleared deed certificates.",
    "Detective Harris walked up the wooden steps, holding a cup of sweet tea, watching the community rebuild its security.",
    "\"You started a revolution on this porch, Mrs. Washington,\" Detective Harris noted with genuine respect.",
    "Patricia smiled, looking at the gold-framed deed hanging proudly inside the front hallway.",
    "\"My father always said: 'A deed is only as strong as the person willing to defend it.' We're just honoring the contract.\"",
    "The afternoon sun cast a warm golden blanket over the porch, sealing a triumph of collective courage."
  ],

  // Framed Deed Ch 5
  "story-framed-deed-mega-ch5": [
    "[ FULTON COUNTY SUPERIOR COURT ROOM 601 — 10:00 AM ]",
    "The grand courtroom was packed to standing room only with Cascade residents, community leaders, and local advocates.",
    "Judge Reynolds sat at the bench, reviewing the final consent decree signed by the state court-appointed receiver.",
    "\"In the matter of the State of Georgia v. Sterling Commercial Holdings, the court accepts the complete liquidation of the defendant's commercial assets.\"",
    "\"A twelve-million-dollar restitution and preservation fund is hereby established under the direct oversight of the Cascade Community Land Trust.\"",
    "The judge looked down from the bench at Patricia Washington, who sat in the center of the courtroom surrounded by her children and grandchildren.",
    "\"Mrs. Washington, the court officially names you and Attorney Ward as co-chairs of the permanent preservation board.\"",
    "\"No commercial development or rezoning may proceed within this four-mile historical district without unanimous approval from the neighborhood council.\"",
    "The entire courtroom erupted into sustained, thunderous applause, neighbors hugging and wiping away tears of profound relief.",
    "Patricia stood up with quiet grace, nodding respectfully to the bench and the state prosecutors.",
    "\"Thank you, Your Honor. Justice took seventy-six years to be recognized on this land, but it arrived right on time.\"",
    "She walked out of the courtroom surrounded by three generations of family, holding her husband's memory in her heart.",
    "The battle for the land was won, and the future of the neighborhood was sealed forever."
  ],

  // Framed Deed Ch 6
  "story-framed-deed-mega-ch6": [
    "[ WASHINGTON HOMESTEAD BACKYARD — 05:30 PM ]",
    "Long wooden banquet tables covered in red checkered tablecloths stretched beneath the towering branches of the eighty-year-old oak tree.",
    "Smoke from deep barbecue pits drifted into the clear evening sky, carrying the rich aroma of smoked brisket, collard greens, and golden cornbread.",
    "Children played tag across the lush green grass, their laughter echoing across the four acres that had almost been paved into a transit terminal.",
    "Patricia stood at the head of the table, surrounded by her children, grandchildren, and great-grandchildren.",
    "On a wooden easel beside her rested the 1948 gold-framed deed, cleaned, polished, and catching the golden rays of the setting sun.",
    "Her eldest son, Robert Jr., raised his glass of fresh lemonade into the air.",
    "\"To Mama. Who held the line when the bulldozers were at the gate and taught us what courage looks like.\"",
    "\"To the foundation that can never be broken!\" the entire gathering echoed in joyous unison.",
    "Patricia looked out over her family, her heart full of peace, dignity, and quiet gratitude.",
    "She knew the fight for respect and heritage was an eternal duty, but on this ground, in this home, the roots ran deeper than any machine could ever dig.",
    "The deed was safe. The home was whole. The legacy belonged to the generations yet to come."
  ],

  // Trash Quilt Ch 2
  "story-trash-quilt-mega-ch2": [
    "[ BIG MAMA'S BACK BEDROOM — 03:00 PM ]",
    "The back bedroom was quiet except for the rhythmic ticking of the brass mantle clock and the gentle hum of the ceiling fan.",
    "Maya sat on the edge of the cedar mattress, holding a small silver seam ripper she had retrieved from Big Mama's sewing basket.",
    "She carefully slid the fine steel point under the heavy navy blue stitching along the quilt's thick bottom hem.",
    "With a soft, crisp snip, the thread parted, revealing a tight inner layer of waterproof oilcloth wrapped in protective wax paper.",
    "Maya's breath hitched in her throat as she slid out the first bundle from within the denim squares.",
    "Inside were ten pristine 1974 United States Treasury Bearer Bonds, each bearing a face value of twenty-five thousand dollars.",
    "Accompanying the bonds was a handwritten letter on faded yellow legal paper in Big Mama's familiar, elegant cursive hand:",
    "\"'My dearest Maya: If you are reading this, it means you took my old quilt when everyone else was searching for gold.'\"",
    "\"'True wealth is not what you show the world. It is what you carry in your hands when no one is watching.'\"",
    "\"'The house belongs to the child who stayed by my side. The original 1968 deed is registered in safe deposit box 402 at First Savannah Bank.'\"",
    "Tears spilled over Maya's eyelashes, splashing softly onto the wax paper.",
    "For four long years, while Vanessa called her a failure for staying behind in Savannah, Big Mama had been quietly preparing her freedom.",
    "There was a sharp, impatient knock on the bedroom door. Vanessa's voice cut through the wood:",
    "\"Maya! Grab your coat! The probate attorney's office won't wait for your sentimental crying!\"",
    "Maya wiped her cheeks, carefully folded the oilcloth back into the quilt hem, and wrapped the blanket securely around her shoulders.",
    "\"Coming, Vanessa,\" Maya said quietly, standing up with unshakable resolve. \"I'm ready.\""
  ],

  // Trash Quilt Ch 4
  "story-trash-quilt-mega-ch4": [
    "[ FIRST SAVANNAH BANK PRIVATE CLIENT VAULT — 09:30 AM ]",
    "The heavy steel vault door stood swung wide, revealing gleaming rows of brass deposit boxes under bright fluorescent lights.",
    "Maya sat at the private review table with Senior Trust Officer Marcus Bradley and Attorney Henderson.",
    "On the polished mahogany table lay the ten United States Treasury Bearer Bonds alongside the original 1968 hand-inked deed to the Savannah cottage.",
    "Officer Bradley ran the bonds through a digital spectral authenticator, watching the green verification lights flash across the terminal.",
    "\"Every single bond is fully registered, matured, and carrying accumulated sovereign interest,\" Officer Bradley announced with a warm smile.",
    "\"Total liquidity value is three hundred and twelve thousand, four hundred and fifty dollars, available immediately in cash or treasury securities.\"",
    "Attorney Henderson placed the official county title transfer certificate next to the cashier's check.",
    "\"The property is completely unencumbered, Maya. No back taxes, no municipal liens, and no developer options.\"",
    "Maya touched the cool brass key to Box 402, feeling the weight of her grandmother's foresight.",
    "\"Big Mama never spent a single dollar on luxury for herself, did she?\" Maya asked softly.",
    "\"Your grandmother understood that true security is quiet,\" Attorney Henderson said gently.",
    "\"She watched people take from her family for generations. She made sure that the one who stayed by her side would never have to ask anyone for permission again.\"",
    "Maya looked down at the patchwork quilt resting beside her on the leather chair.",
    "\"We're going to fix the roof, open the community sewing guild, and keep Big Mama's front porch light burning every single night.\""
  ],

  // Trash Quilt Ch 5
  "story-trash-quilt-mega-ch5": [
    "[ SAVANNAH COTTAGE SCREENED PORCH — 03:00 PM ]",
    "The afternoon rain tapped rhythmically against the corrugated tin roof of the screened porch.",
    "Maya sat in Big Mama's old wooden swing, sipping sweet tea from a mason jar, watching the rain wash over the blooming purple hydrangeas.",
    "A black luxury SUV pulled up to the curb. Vanessa stepped out, but her crisp corporate swagger was completely gone.",
    "Her hair was damp from the rain, her mascara slightly smeared, and she carried no designer bags—only a manila folder of debt default notices.",
    "She walked up the front steps slowly, stopping at the screen door without pulling the handle.",
    "\"Maya... can I come in?\" Vanessa asked, her voice cracking with raw vulnerability.",
    "Maya set her tea down on the wooden side table. \"Sit down, Vanessa.\"",
    "Vanessa sank into the wicker chair opposite the swing, burying her face in her trembling hands.",
    "\"My agency in Atlanta is underwater, Maya,\" Vanessa sobbed. \"We lost our two biggest corporate accounts in January. I owed sixty thousand dollars in commercial lease penalties.\"",
    "\"I needed that house appraisal to secure an emergency bridge loan from the bank. I was drowning, and I couldn't let anyone see me fail.\"",
    "Maya looked at her sister with quiet, unflinching honesty.",
    "\"You thought being rich meant treating everyone who had less like they were invisible, Vanessa.\"",
    "\"You walked into this house and treated Big Mama's life like garbage because you couldn't post it on social media.\"",
    "Vanessa looked up, tears streaming down her cheeks. \"I'm sorry, Maya. I am so sorry. I threw away the only thing that mattered.\"",
    "Maya stood up, walked over to the hallway closet, and brought out the patchwork quilt, draping it gently over her sister's shivering shoulders.",
    "\"Big Mama's quilt keeps everyone warm, Vanessa,\" Maya said softly. \"Even the ones who threw it away.\""
  ],

  // Trash Quilt Ch 6
  "story-trash-quilt-mega-ch6": [
    "[ SAVANNAH HISTORIC DISTRICT COMMUNITY CENTER — 05:00 PM ]",
    "The grand community room was filled with colorful bolts of fabric, vintage sewing machines, and twelve young neighborhood girls learning traditional quilting.",
    "At the center work table sat Maya, guiding an eight-year-old girl's hand as she threaded a navy needle through cotton batting.",
    "Beside her, wearing a simple linen dress and no designer jewelry, Vanessa was neatly measuring calico squares with a wooden yardstick.",
    "Over the last six months, Maya had paid off her sister's business penalties through a zero-interest family loan, on the condition that Vanessa returned to Savannah every weekend to manage the foundation's accounting.",
    "Hanging on the center wall in a custom museum-grade glass shadowbox was Big Mama's 1950s patchwork quilt.",
    "Uncle Raymond walked in, carrying fresh warm peach cobbler from the bakery down the avenue.",
    "\"Look at this room,\" Raymond said, smiling with immense pride. \"Miss Hattie's sewing circle is back in business for a new generation.\"",
    "Vanessa looked at Maya, her eyes bright with genuine peace and humility.",
    "\"Thank you for not giving up on me, Maya,\" Vanessa whispered.",
    "Maya smiled, tying off a clean navy knot on the young girl's practice square.",
    "\"Big Mama always told us that family is like a quilt: sometimes it gets torn, but with enough patience and strong thread, it ends up warmer than it was before.\"",
    "The laughter of the children filled the room, weaving a new legacy of love, redemption, and unbreakable family honor."
  ],

  // Landlord Ch 2
  "story-landlord-mega-ch2": [
    "[ COMMUNITY LEGAL AID CLINIC, DOWNTOWN — 11:30 AM ]",
    "Attorney Kendra Washington laid out three bound legal volumes under the brass desk lamp.",
    "Pop Miller sat across from her, wearing his pressed khaki veteran jacket, holding a weathered steel lockbox on his lap.",
    "Inside the lockbox were fifty-two years of carbon-copy rent payment receipts, each signed by the original building owner, Colonel Arthur Reynolds.",
    "\"Pop, look at Clause 12 of the 1972 master covenant,\" Kendra said, pointing to the original yellowed parchment.",
    "\"'In consideration of heroic military service and lifetime property maintenance, Unit 4B is granted as an irrevocable lifetime tenancy at the fixed rate of one hundred and eighty dollars per month.'\"",
    "\"'This covenant runs with the land and binds all future purchasers, assigns, and corporate successors in perpetuity.'\"",
    "Kendra smiled, looking up at the veteran. \"Sterling's corporate management group didn't do a full title search before purchasing the property for six million dollars.\"",
    "\"They assumed they could bully all the long-term seniors out with forged default notices and double the rent for tech workers.\"",
    "Pop nodded slowly. \"Victor served notices to Mrs. Jenkins in 2A and Mr. Jackson in 3C. They're terrified they'll be homeless by the weekend.\"",
    "\"Not on our watch,\" Kendra said, pulling out a state emergency injunction petition.",
    "\"We're not just defending your unit, Pop. We're filing a class-action civil racketeering lawsuit against Sterling Management on behalf of every tenant in the building.\"",
    "Pop placed his hand over the 1972 lease document. \"Arthur Reynolds gave his word on paper. And in this country, a man's word on paper still counts for something.\"",
    "Together, they finalized the emergency filing to present before Superior Court Judge Vance."
  ],

  // Landlord Ch 3
  "story-landlord-mega-ch3": [
    "[ OAKRIDGE APARTMENTS 4TH FLOOR HALLWAY — 09:00 AM ]",
    "The heavy footsteps of four private security guards echoed up the concrete stairwell, accompanied by the metallic clink of crowbars and industrial drill bits.",
    "Victor Sterling led the way, holding a set of master lock cylinders and a blue legal clipboard.",
    "\"Unit 4B first! Drill the deadbolt and stack the furniture in the parking lot!\" Victor ordered his crew.",
    "He turned the corner of the fourth-floor corridor and came to a dead stop.",
    "Standing in front of Unit 4B was Pop Miller, flanked by twelve retired military veterans in full uniform, standing at attention with their arms folded.",
    "Beside Pop stood Attorney Kendra Washington, holding a certified emergency stay signed by Fulton County Superior Court Chief Judge Vance.",
    "\"Step back, Mr. Sterling,\" Kendra announced, her voice echoing clearly down the hallway.",
    "\"You are served with an immediate Emergency Temporary Restraining Order, Docket Number 2024-CV-8841.\"",
    "Victor's face flushed with anger. \"That stay is invalid! I filed a commercial possession action!\"",
    "Two Fulton County Sheriff's deputies stepped out from Unit 4A, gold badges shining on their protective vests.",
    "\"The stay is signed by Judge Vance, Mr. Sterling,\" the senior deputy said, resting his hand on his duty belt.",
    "\"If your private guards touch that door or any tenant property, I will place all four of them in handcuffs for felony criminal trespass.\"",
    "The private security guards immediately lowered their tools, stepping away from Victor in haste.",
    "Pop Miller looked at Victor with calm, unshakable veteran discipline.",
    "\"You wanted a fight on Friday, Victor,\" Pop said quietly. \"Welcome to the front line.\"",
    "Victor snatched his clipboard and retreated down the stairs as the hallway erupted in quiet cheers from the watching seniors."
  ],

  // Landlord Ch 4
  "story-landlord-mega-ch4": [
    "[ FULTON COUNTY SUPERIOR COURT ROOM 304 — 02:00 PM ]",
    "The courtroom was packed to capacity with elderly Oakridge tenants and local news cameras.",
    "Victor Sterling sat at the respondent's table, his high-priced corporate defense attorneys sweating under the stern glare of Judge Vance.",
    "Kendra stood at the podium, projecting the building's financial ledgers onto the courtroom monitors.",
    "\"Mr. Sterling,\" Kendra questioned, \"did your management company intentionally alter the lease records of forty-eight senior citizens to manufacture default judgments?\"",
    "Victor cleared his throat nervously, looking at his legal team. \"We transitioned to a modern automated billing software. There were administrative discrepancies—\"",
    "\"Administrative discrepancies?\" Judge Vance interrupted, his voice booming from the bench.",
    "\"You levied four hundred thousand dollars in bogus fees and attempted an illegal lockout of a decorated military veteran holding a recorded deed covenant!\"",
    "Judge Vance slammed his palm on the desk with force. \"I find Sterling Management in direct civil and criminal contempt of this court.\"",
    "\"The court orders an immediate freeze on all eviction proceedings across all eighteen properties owned by the defendant.\"",
    "\"Furthermore, an independent forensic monitor is appointed to review all tenant accounts at the defendant's sole expense.\"",
    "The gallery erupted into cheers, elderly neighbors embracing and crying tears of profound relief.",
    "Pop Miller stood up, saluting the bench with quiet dignity.",
    "Justice was not just served; it was delivered to the front door of every resident in need."
  ],

  // Landlord Ch 5
  "story-landlord-mega-ch5": [
    "[ OAKRIDGE APARTMENTS COMMUNITY REC ROOM — 06:00 PM ]",
    "The community room was filled with folding tables laden with homemade soul food, potato salad, fried chicken, and sweet tea.",
    "Pop Miller stood at the podium beside Kendra, presenting the framed charter of the Oakridge Resident Housing Cooperative.",
    "\"As part of the federal court settlement,\" Kendra announced to thunderous cheers, \"Sterling Management was forced to surrender ownership to the Tenant Cooperative Trust.\"",
    "\"Every tenant in this building is now a partial owner of their home, with rent permanently capped at thirty percent of income!\"",
    "Mrs. Jenkins, eighty-four, wiped tears from her eyes as she held her new lifetime ownership certificate.",
    "\"Pop, you saved all our lives,\" she said, kissing his weathered cheek.",
    "Pop smiled warmly, holding up his glass of sweet tea to the gathered families.",
    "\"We saved each other because we refused to be divided by a bully with a clipboard,\" Pop said.",
    "\"This building was built on community, and as long as we stand united, nobody will ever take it from us again.\"",
    "The celebration lasted late into the evening, celebrating an unprecedented victory for tenant power."
  ],

  // Landlord Ch 6
  "story-landlord-mega-ch6": [
    "[ OAKRIDGE APARTMENTS UNIT 4B — 05:30 PM ]",
    "The warm afternoon sun illuminated the freshly painted hallway of the historic apartment complex.",
    "Pop Miller stood outside Unit 4B with a screwdriver, fastening a polished brass plaque over the spot where Victor had pinned the orange notice.",
    "The plaque read: 'Unit 4B — Dedicated to Pop Miller & The Guardians of Oakridge, Established 1972.'",
    "Kendra walked down the hallway, carrying a fresh cup of coffee for her client and mentor.",
    "\"How does it feel, Pop?\" she asked, smiling with genuine affection.",
    "Pop stepped back, admiring the gleaming brass under the hallway lights.",
    "\"It feels like home, Kendra,\" Pop said, taking a sip of his coffee.",
    "\"A house is just bricks and mortar. But when people stand together for what is right, it becomes an unshakeable fortress.\"",
    "The sound of children playing in the courtyard below and the laughter of neighbors filled the hallway—a testament to courage, justice, and the power of unity."
  ],

  // Kitchen Secret Ch 2
  "story-kitchen-secret-mega-ch2": [
    "[ COOPER HOMESTEAD ATTIC — 10:30 AM ]",
    "Dust motes danced in the single beam of sunlight filtering through the attic dormer window.",
    "Denise knelt before her late father's heavy cedar chest, holding a small brass skeleton key she had retrieved from his old tackle box.",
    "The heavy lid creaked open, releasing the rich scent of cedarwood, dried lavender, and aged paper.",
    "Beneath his folded army dress uniform rested a sealed leather pouch labeled: 'In Case of Emergency — For Denise Only.'",
    "Denise opened the pouch with trembling fingers.",
    "Inside was a certified bank register from Atlanta Federal Savings, showing an active escrow account holding two hundred and fifty thousand dollars in insured municipal bonds.",
    "Attached was a handwritten letter from her father, Robert Cooper, dated two months before his passing in 2014:",
    "\"'My darling Denise: If you are reading this, Greg has done exactly what I prayed he wouldn't do—leveraged your mother's kindness for his own vanity.'\"",
    "\"'I love your brother, but he has always mistaken luck for wisdom. This escrow account requires your sole signature and cannot be touched by any power of attorney.'\"",
    "\"'Pay the house note, protect your mother, and make Greg face the work he has run from his entire life.'\"",
    "Denise pressed her father's letter against her heart, a single tear cutting through the dust on her cheek.",
    "Daddy had known. He had built a fortress around them before he closed his eyes.",
    "She folded the bank register into her pocket and headed down the wooden attic stairs with newfound purpose."
  ],

  // Kitchen Secret Ch 3
  "story-kitchen-secret-mega-ch3": [
    "[ COOPER LIVING ROOM — 02:00 PM ]",
    "The doorbell chimed with sharp persistence.",
    "Private lender Marcus Kane—fifty, dressed in an immaculate grey three-piece suit with a gold pocket watch—stood in the foyer.",
    "Greg sat on the living room sofa with his head in his hands, trembling with anxiety.",
    "\"Mr. Cooper,\" Kane said smoothly, holding open a leather foreclosure folder. \"As agreed, if the two hundred and ten thousand dollar principal is not wired by three o'clock, the deed transfers to Kane Capital LLC.\"",
    "Denise walked into the foyer, carrying a certified bank draft from Atlanta Federal Savings.",
    "\"Mr. Kane,\" Denise said, her voice commanding the entire room. \"Here is the certified cashier's draft for two hundred and ten thousand dollars, plus four hundred dollars in statutory filing fees.\"",
    "Kane's confident smile vanished. He took the check, scrutinizing the watermarked seal.",
    "\"Where did this liquidity come from? Greg told me this property had no other financial guarantors.\"",
    "\"My father guaranteed this house before you even started your predatory lending company, Mr. Kane,\" Denise said coldly.",
    "\"Sign the full release of mortgage and satisfaction of lien right now, or my attorney will file a predatory lending complaint with the State Banking Commission.\"",
    "Kane looked at the certified funds, realized his takeover scheme was dead, and signed the satisfaction document with a tight scowl.",
    "\"Satisfaction confirmed,\" Kane muttered, handing over the stamped deed before exiting into the rain.",
    "Greg looked up from the sofa, his eyes wide with disbelief. \"Dee... how did you do that? Where did you get that money?\"",
    "Denise turned to her brother with cold, unyielding authority.",
    "\"Daddy paid your debt, Greg. But starting today, you owe every single hour of your life to this house.\""
  ],

  // Kitchen Secret Ch 4
  "story-kitchen-secret-mega-ch4": [
    "[ COOPER BACKYARD & WORKSHOP — 08:00 AM ]",
    "The morning sun beat down on the backyard as Greg hauled heavy wooden fence posts across the grass, his designer clothes replaced with worn jeans and work boots.",
    "Denise sat on the back porch with a ledger notebook, tracking every hour of labor and every payment receipt.",
    "Greg wiped the sweat from his forehead with the back of his forearm, setting the post down with a heavy thud.",
    "\"Dee... I've been working eight hours every Saturday for three months,\" Greg said, leaning against the fence.",
    "Denise looked up from her ledger. \"You put twenty years of Mama's peace on the auction block, Greg. Three months of honest sweat is just the down payment on your character.\"",
    "Greg walked up to the porch, his posture humbled, the flashy arrogance completely stripped away.",
    "\"I was so obsessed with looking successful, Dee,\" Greg confessed, his voice breaking. \"I wanted everyone to think I was a big-time entrepreneur, and I almost destroyed everything that mattered.\"",
    "Denise handed him a cold glass of lemonade. \"Daddy didn't leave that money to punish you, Greg. He left it to give you a chance to become a real man.\"",
    "Greg took the glass, his eyes wet with genuine gratitude.",
    "\"I'm going to pay back every dime, Dee. Even if it takes me ten years.\"",
    "\"Good,\" Denise said softly. \"Because family doesn't give up on each other. But family doesn't tolerate thieves either. Back to work.\""
  ],

  // Kitchen Secret Ch 5
  "story-kitchen-secret-mega-ch5": [
    "[ COOPER DINING ROOM — 03:00 PM ]",
    "The dining table was laden with Sunday dinner: roasted chicken, macaroni and cheese, collard greens, sweet potato pie, and warm cornbread.",
    "Mama Evelyn sat at the head of the table, looking at Denise and Greg sitting together with genuine mutual respect.",
    "She reached out and took both of their hands in her warm, weathered palms.",
    "\"Children, let us bless this food,\" Mama Evelyn said softly.",
    "After the prayer, Mama looked directly at Greg, whose eyes welled with emotion.",
    "\"Greg, baby,\" Mama said gently. \"I saw that red envelope in your gym bag back in November.\"",
    "Greg froze, his fork trembling in his hand. \"Mama... you knew?\"",
    "\"A mother always knows when her child is drowning, Gregory,\" Mama Evelyn said with immense tenderness.",
    "\"I prayed every night that your father's wisdom and your sister's strength would guide you back to dry land.\"",
    "\"You made a terrible mistake, but you didn't run away. You stayed, you worked, and you rebuilt what you broke.\"",
    "Greg broke down into silent, cleansing tears, burying his face in his mother's shoulder.",
    "Denise smiled through her own tears, holding her mother's other hand.",
    "The house was safe, the secret was healed, and the family was restored."
  ],

  // Kitchen Secret Ch 6
  "story-kitchen-secret-mega-ch6": [
    "[ COOPER KITCHEN — 07:00 AM ]",
    "One year later, the morning sun poured through the clean kitchen curtains, illuminating a fresh pot of coffee.",
    "Denise sat at the table, sipping her coffee in quiet serenity.",
    "Greg walked in, dressed in clean work overalls for his newly established, debt-free carpentry business.",
    "He set a white envelope on the yellow formica table beside her mug.",
    "Inside was the final monthly installment check for five thousand dollars, completing the full reimbursement of their father's escrow fund.",
    "\"Paid in full, Dee,\" Greg said with a broad, honest smile.",
    "Denise looked at the check, then picked up the envelope and tore it into neat confetti squares, tossing them into the recycling bin.",
    "\"The debt is paid, Greg. But more importantly, my brother is back.\"",
    "They hugged in the warm kitchen as Mama Evelyn hummed her morning hymn by the stove.",
    "The kitchen table was no longer a place of hidden secrets—it was the altar of their family's enduring love and redemption."
  ],

  // Prodigal Son Ch 3
  "story-prodigal-son-mega-ch3": [
    "[ FARM WORKSHOP PAVILION — 05:15 PM ]",
    "Malcolm spread large architectural blueprints across a workbench in the farm pavilion.",
    "Dozens of young cousins, aunts, and uncles gathered around, listening intently to every detail.",
    "\"The back thirty acres of fallow land will house the Jenkins Solar Cooperative,\" Malcolm explained.",
    "\"It will generate clean power for five thousand homes in Macon and yield fifty thousand dollars every month directly into the family education endowment.\"",
    "\"Every child in this family who maintains a 3.0 GPA will have four years of college tuition paid in full, zero debt.\"",
    "The young cousins erupted into joyous applause, hugging each other in excitement.",
    "Derek stepped up to the edge of the table, his head bowed.",
    "\"Malcolm... I'm sorry for how I acted earlier. I've been drowning in lease payments on that car, trying to impress people who don't care about me.\"",
    "Malcolm looked at his younger cousin with firm compassion.",
    "\"Sell the car, Derek. Stop performing for social media and come work on the installation crew next month.\"",
    "\"I'll pay you a fair wage, but you'll learn how to build something real with your hands.\"",
    "Derek wiped a tear from his eye and nodded vigorously. \"I'll be there on Monday, Malcolm. I promise.\""
  ],

  // Prodigal Son Ch 4
  "story-prodigal-son-mega-ch4": [
    "[ BEHIND THE OLD SMOKEHOUSE — 06:30 PM ]",
    "The setting sun cast long amber rays across the peach orchard.",
    "Aunt Shirley sat on an overturned wooden crate, wiping her running mascara with a paper napkin.",
    "Malcolm walked over, holding two cold bottles of water, and handed one to his aunt.",
    "\"Shirley,\" Malcolm said softly, sitting on the adjacent bench.",
    "Shirley took a shuddering breath. \"When your father died in 1998, Malcolm, we didn't have five hundred dollars for the burial.\"",
    "\"I spent the last twenty-five years terrified of being poor again. I thought if I wore gold and shouted loud, nobody would ever see how scared I was.\"",
    "Malcolm looked out over the orchard his father had planted.",
    "\"Fear makes people cruel, Aunt Shirley. But you don't have to be afraid anymore.\"",
    "\"The farm is secure. The family is protected. You can put down the armor now.\"",
    "Shirley reached out and embraced her nephew, weeping tears of deep, long-overdue healing.",
    "\"Your daddy would be so proud of the man you became, Malcolm.\"",
    "\"He built the foundation, Aunt Shirley,\" Malcolm said softly. \"I just put up the walls.\""
  ],

  // Prodigal Son Ch 5
  "story-prodigal-son-mega-ch5": [
    "[ HOMESTEAD FIREPIT — 08:00 PM ]",
    "The crackle of cedar logs sent bright golden embers dancing into the twilight sky.",
    "All sixty family members sat in a vast circle of lawn chairs around the warm fire.",
    "Big Mama held the ancient Jenkins Family Bible, its leather cover worn smooth by seventy years of prayer.",
    "She placed the Bible directly onto Malcolm's lap.",
    "\"In 1875, our great-grandparents bought the first five acres of this dirt with twelve silver dollars,\" Big Mama spoke, her voice carrying clear through the still Georgia night.",
    "\"Many tried to take it, many tried to divide us. But love and honor always bring the right child home.\"",
    "\"Malcolm, you hold the book now. Guide this family with wisdom, keep the doors open for the lost, and never forget where your roots were planted.\"",
    "Malcolm placed his hand over the Bible, looking around the circle of loving faces.",
    "\"I will protect this land and this family with everything God gives me,\" Malcolm swore with quiet reverence.",
    "A chorus of 'Amen' echoed through the trees, sealing a new era of prosperity and unity."
  ],

  // Prodigal Son Ch 6
  "story-prodigal-son-mega-ch6": [
    "[ HOMESTEAD MAIN LAWN — 09:30 PM ]",
    "String lights hung between the pecan trees, bathing the long banquet tables in warm golden light.",
    "Plates of fresh smoked meats, garden vegetables, peach cobbler, and sweet tea were shared freely among all four generations.",
    "There were no paper plates, no VIP tables, and no division—only the joy of an unbroken family.",
    "Derek laughed with his cousins as he served brisket, while Aunt Shirley sat happily beside Big Mama.",
    "Malcolm stood on the back porch, watching his family celebrate under the southern stars.",
    "He had traveled three thousand miles and built a fortune, but standing on his family's free land was the greatest victory of his life.",
    "The prodigal son had returned, not to be served, but to set his people free.",
    "The music from the acoustic guitar drifted across the cotton fields as the Jenkins family celebrated their eternal bond."
  ],

  // Motherhood Ch 2
  "story-motherhood-mega-ch2": [
    "[ SYMPHONY HALL MAIN AUDITORIUM — 02:30 PM ]",
    "The grand auditorium was bathed in warm golden spotlights as over a thousand attendees took their seats.",
    "In the second row, Sarah sat proudly, holding Nia's bouquet of purple orchids.",
    "In the upper balcony box, Catherine sat with her arms crossed, stewing in furious humiliation.",
    "Nia stepped up to the podium, her valedictorian medal gleaming against her purple honor cords.",
    "\"Distinguished faculty, fellow graduates, and families,\" Nia began, her voice ringing clear and steady through the hall.",
    "\"In society, we are often told that success is about pedigree, wealth, and the prestigious names behind us.\"",
    "\"When I was an infant, the woman who gave birth to me decided that a corporate career in London was more important than raising a sick baby.\"",
    "A collective gasp rippled through the audience as Catherine stiffened in her balcony seat.",
    "\"She left me with a woman who had no biological obligation, no wealth, and nothing to offer except an unbreakable heart.\"",
    "Nia looked down directly into Sarah's tear-filled eyes.",
    "\"My mother, Sarah Jenkins, worked thirteen-hour night shifts at Boston General Hospital, wearing worn nursing shoes so I could have textbooks, piano lessons, and prep school tuition.\"",
    "\"She taught me that motherhood is not an entitlement earned by birth—it is a covenant earned by sacrifice.\"",
    "Nia lifted her gold valedictorian medal from her neck, holding it high for the entire auditorium to see.",
    "\"This medal doesn't belong to me. It belongs to the woman who stayed in the dark so I could shine in the light.\"",
    "The entire auditorium rose in a thunderous, standing ovation, cheering and wiping away tears as Sarah covered her face in overwhelming pride.",
    "In the balcony, Catherine stood up silently and hurried toward the exit, defeated by the undeniable truth of real love."
  ],

  // Motherhood Ch 3
  "story-motherhood-mega-ch3": [
    "[ THEATER EXTERIOR PLAZA — 04:00 PM ]",
    "The afternoon sunlight bathed the stone plaza where graduates were taking family photos.",
    "Catherine waited by the bronze fountain, holding a sleek black leather checkbook.",
    "As Sarah and Nia walked toward the family car, Catherine stepped into their path.",
    "\"Nia, wait!\" Catherine pleaded, her designer facade cracking under genuine desperation.",
    "\"I set up a five-hundred-thousand-dollar graduate trust for you at Barclays London. You can attend Oxford or Cambridge without ever taking out a student loan!\"",
    "Catherine pulled out a signed check for fifty thousand dollars and held it out toward Sarah.",
    "\"And this is for you, Sarah. For your years of caretaking. Take it as a severance settlement.\"",
    "Sarah didn't look at the check. She looked at Catherine with profound, dignified sorrow.",
    "\"Catherine, you still think every relationship has an invoice attached to it,\" Sarah said quietly.",
    "Nia stepped between them, took the fifty-thousand-dollar check from Catherine's hand, and tore it cleanly into four pieces, letting the scraps fall into the fountain water.",
    "\"Mom didn't caretake me for a severance package, Catherine,\" Nia said, her voice dropping into icy resolve.",
    "\"She raised me as her daughter. I was awarded a full presidential scholarship to Harvard Medical School this morning on my own academic merit.\"",
    "\"I don't need your Barclays money, and I don't need your conditional love. Keep your London fortune.\"",
    "Catherine stared at the floating paper scraps, her hands trembling as she realized she had lost her daughter forever.",
    "Nia took Sarah's arm, and together they walked to their modest family car, leaving the past behind for good."
  ],

  // Motherhood Ch 4
  "story-motherhood-mega-ch4": [
    "[ HARVARD MEDICAL SCHOOL ATRIUM — 10:00 AM ]",
    "The grand granite atrium of Harvard Medical School was filled with incoming doctoral scholars and department chairs.",
    "Dean Richardson stood at the podium with Nia and Sarah by his side.",
    "\"Every year, the Department of Pediatric Surgery awards one fully funded research fellowship to a scholar who exemplifies extraordinary resilience and ethical leadership.\"",
    "\"This year, the committee unanimously awards the Chancellor's Fellowship to Nia Jenkins.\"",
    "Dean Richardson turned to Sarah with deep professional respect.",
    "\"Nurse Jenkins, your thirty years of exemplary service in pediatric triage has been recognized by the Boston Medical Board.\"",
    "\"The medical school has named the new community triage lab the Sarah Jenkins Pediatric Care Center in your honor.\"",
    "Sarah wiped tears of joyful disbelief from her eyes as the faculty erupted into applause.",
    "Nia hugged her mother tight. \"You spent thirty years helping other people's children, Mom. Now your name will be on the door forever.\""
  ],

  // Motherhood Ch 5
  "story-motherhood-mega-ch5": [
    "[ CATHERINE'S LONDON PENTHOUSE — 08:00 PM ]",
    "The rain fell heavily against the floor-to-ceiling glass overlooking the River Thames.",
    "Catherine sat alone on an Italian leather sofa in her multimillion-dollar penthouse, holding a glass of vintage wine.",
    "On her tablet screen was the Boston Globe feature article: 'Harvard Medical Valedictorian Honors Nurse Mother at Graduation.'",
    "She zoomed in on the photograph of Nia smiling radiantly, holding Sarah's hand on the stage.",
    "Her husband walked into the room, checking his diamond wristwatch. \"Catherine, the board dinner starts in twenty minutes. Are you ready?\"",
    "Catherine didn't answer. A single tear rolled down her cheek, dripping onto her silk dress.",
    "She had won the corporate titles, the luxury penthouses, and the international prestige.",
    "But as she looked at her empty living room, she realized she was the poorest woman in the world.",
    "She had traded her only child for an empire of cold stone, and there was no check in the world that could buy back eighteen lost years."
  ],

  // Motherhood Ch 6
  "story-motherhood-mega-ch6": [
    "[ SEASIDE COTTAGE, CAPE COD — 06:00 PM ]",
    "The golden evening sun cast a warm amber glow over the porch of the newly purchased Cape Cod cottage.",
    "Sarah sat in a comfortable rocking chair, watching the ocean waves roll gently onto the sandy shore.",
    "Dr. Nia Jenkins—now a chief pediatric surgical resident at Boston Children's Hospital—walked onto the porch carrying two cups of warm herbal tea.",
    "She handed one to Sarah and sat on the wooden railing beside her.",
    "\"Remember when you used to wake up at four-thirty in the morning to pack my school lunches, Mom?\" Nia asked with a soft smile.",
    "Sarah took a sip of her tea, smiling with deep, peaceful contentment.",
    "\"I'd do every single day over again in a heartbeat, baby.\"",
    "Nia reached over and held her mother's hand—the same hand that had guided her through thirty years of struggle and triumph.",
    "\"We made it, Mom. Together.\"",
    "As the sun dipped into the Atlantic, wrapping the cottage in peace and quiet majesty, the two women sat in serene gratitude—a testament that the truest bond of motherhood is not born of biology, but forged in sacrificial love."
  ]
};

// Apply updates
stories = stories.map(s => {
  if (enrichments[s.id]) {
    s.paragraphs = enrichments[s.id];
    s.readTime = Math.ceil(s.paragraphs.length * 0.5) + " min read";
    s.avgReadTimeSeconds = s.paragraphs.length * 30;
  }
  return s;
});

fs.writeFileSync(storiesPath, JSON.stringify(stories, null, 2), 'utf8');
console.log('Enrichment pass completed!');
