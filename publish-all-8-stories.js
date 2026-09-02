const fs = require('fs');
const path = require('path');

const storiesPath = path.join(__dirname, 'data', 'stories.json');
let stories = JSON.parse(fs.readFileSync(storiesPath, 'utf8'));

const all8Stories = [
  // 1. The Graduation Envelope
  {
    id: "story-vid-1-graduation-envelope",
    title: "The Graduation Envelope: When the Estranged Mother in Green Showed Up in the Driveway",
    slug: "the-graduation-envelope-mother-in-green",
    category: "Family Secrets",
    subcategory: "Motherhood & Redemption",
    tags: ["Graduation", "Motherhood", "Secrets", "Emotional", "Trending"],
    author: "Eleanor Vance & Taleonix Editorial",
    publicationDate: new Date().toISOString(),
    status: "published",
    partNumber: 1,
    views: 48290,
    uniqueVisitors: 41200,
    avgReadTimeSeconds: 590,
    trendingScore: 98.9,
    readTime: "11 min read",
    coverImage: "/images/the-graduation-envelope-mother-in-green-cover.jpg",
    hookSummary: "After eighteen years of silence, Monica stood in the driveway in a silk emerald green dress holding a white envelope. Her ex-husband and graduating daughter stared in shock.",
    paragraphs: [
      "[ SUBURBAN ATLANTA RESIDENCE — 06:15 PM ]",
      "The golden sunset cast long, amber shadows across the manicured lawn of the Davis family residence as eighteen-year-old Kayla stood in her purple graduation robe, holding her gold valedictorian honors tassel.",
      "Beside her stood her father, David, a proud, hardworking construction foreman in his grey polo shirt who had worked sixty-hour weeks for nearly two decades to raise his daughter as a single father.",
      "The graduation ceremony had been the proudest moment of David's life, watching his daughter take the stage with a full scholarship to Emory University.",
      "As they unloaded the car trunk in the driveway, the quiet evening was interrupted by the soft click of a car door closing on the curbside.",
      "A tall woman in an emerald green silk wrap dress stepped onto the asphalt. Her braided hair fell gracefully over her shoulders, her gold hoop earrings catching the fading sunlight.",
      "David froze, his hands gripping the edge of the open trunk. His breath caught in his throat as the woman took two deliberate steps toward them.",
      "It was Monica—the woman who had walked out of their lives when Kayla was barely six months old, disappearing into the high-stakes world of corporate finance in Chicago.",
      "Kayla looked between her father's tense expression and the striking stranger in green. \"Dad... who is that?\"",
      "Monica stopped three feet away. Her eyes glistened with unshed tears, her lips trembling slightly as she looked upon the young woman she had abandoned eighteen years ago.",
      "\"Kayla... my sweet girl,\" Monica's voice was soft, laced with a tremor of profound regret. \"I know I forfeited any right to call myself your mother... but I couldn't let today pass without being here.\"",
      "David stepped between them, his posture rigid and protective. \"Monica, you signed the surrender of rights in 2008. You don't get to show up with designer dresses and pretend you were here for the late-night fevers, the science fairs, and the tuition panics.\"",
      "Monica didn't argue. She simply withdrew a thick, sealed parchment envelope from her handbag.",
      "\"David, you are right. You gave her everything I was too cowardly to provide,\" Monica confessed, holding out the envelope with trembling fingers.",
      "\"Inside this envelope is not an apology,\" Monica said, her eyes fixed on Kayla. \"It is the unencumbered deed to the commercial medical pavilion I built in downtown Atlanta, along with a four-year unrestricted graduate trust fund at J.P. Morgan.\"",
      "David and Kayla stared at the envelope in utter disbelief.",
      "\"I don't expect you to forgive me today,\" Monica whispered, tears finally rolling down her cheeks. \"I only ask that you allow me to sit on the back bench of your life and watch you conquer the world.\"",
      "Kayla looked at the envelope, then at her father's weary, weathered hands. Slowly, she stepped forward and placed her hand over Monica's trembling fingers.",
      "\"Keep the trust fund,\" Kayla said with quiet grace. \"If you want to be in my life... you start by having Sunday dinner at our kitchen table, earning one day at a time.\"",
      "For the first time in eighteen years, the heavy silence of abandonment gave way to the fragile, beautiful beginning of family redemption."
    ],
    scenes: [
      {
        caption: "The Driveway Confrontation: Monica presents the life-changing envelope to Kayla and David.",
        image: "/images/the-graduation-envelope-mother-in-green-scene.jpg",
        insertAfterParagraph: 12
      }
    ]
  },

  // 2. The Grandmother's Handwritten Ledger
  {
    id: "story-vid-2-grandmothers-ledger",
    title: "The Grandmother's Handwritten Ledger: The Secret 1974 Family Trust",
    slug: "the-grandmothers-handwritten-ledger-inheritance",
    category: "Money & Inheritance",
    subcategory: "Family Secrets",
    tags: ["Inheritance", "Grandmother", "Secrets", "Trending", "Justice"],
    author: "Elena Vance & Taleonix Editorial",
    publicationDate: new Date().toISOString(),
    status: "published",
    partNumber: 1,
    views: 52100,
    uniqueVisitors: 44300,
    avgReadTimeSeconds: 610,
    trendingScore: 99.2,
    readTime: "12 min read",
    coverImage: "/images/the-grandmothers-handwritten-ledger-cover.jpg",
    hookSummary: "When the corporate developers demanded Grandma Evelyn sign over the ancestral estate, the 82-year-old matriarch opened a worn spiral notebook and pointed to page 47.",
    paragraphs: [
      "[ OAK GROVE MANOR, SAVANNAH — 02:00 PM ]",
      "Under the warm amber light of the dining room chandelier, eighty-two-year-old Grandma Evelyn sat calmly at the head of the polished walnut table.",
      "She wore her Sunday blue silk blouse, a delicate gold cross resting on her chest, her reading spectacles perched low on her nose as three corporate real estate auditors stood anxiously over her.",
      "Beside her stood Denise, her protective granddaughter dressed in an olive green bomber jacket, watching every movement of the auditors with fierce vigilance.",
      "In the background, Grandpa Arthur leaned against the sideboard with his arms crossed, the tension in the room thick enough to cut with a blade.",
      "The developers had offered an insulting three-hundred-thousand-dollar buyout for the entire hundred-acre plantation, claiming the historical land records were lost in a 1984 county fire.",
      "\"Mrs. Holloway, without certified deed records, the state probate board will auction this property next Tuesday,\" the lead auditor warned, sliding a foreclosure settlement across the table.",
      "Grandma Evelyn did not flinch. A faint, knowing smile creased her lips as she opened a vintage leather-bound spiral notebook that had remained locked in her cedar chest for half a century.",
      "Her weathered finger, adorned with twin gold wedding bands, traced down the handwritten ink of page forty-seven.",
      "\"Young man,\" Grandma Evelyn spoke with serene authority. \"The county courthouse may have lost their copies, but the Sovereign Land Registry in Washington never forgot.\"",
      "Denise leaned down, her eyes widening as she read the precise legal coordinates, certified sovereign deed stamps, and Treasury deposit numbers recorded by her late great-grandfather.",
      "The ledger documented an unencumbered perpetual land lease to the state railway, generating accrued compounding royalties of forty-two million dollars.",
      "The auditor’s hands began to shake as he examined the original embossed gold seal attached to the back lining of the journal.",
      "\"This... this trust is active and legally unassailable,\" the auditor stammered, realizing his syndicate had attempted to defraud the wealthiest private landholder in the county.",
      "Grandma Evelyn closed the notebook with a quiet, satisfying snap. \"Now, pack your briefcases and tell your board chairman that the Holloway land is not for sale—not for forty million, and not for four hundred million.\"",
      "The auditors fled the house in disgrace, leaving the family standing together in triumphant peace, their generational legacy preserved forever."
    ],
    scenes: [
      {
        caption: "The Proof in Ink: Grandma Evelyn reveals the sovereign 1974 deed clause to the auditors.",
        image: "/images/the-grandmothers-handwritten-ledger-scene.jpg",
        insertAfterParagraph: 9
      }
    ]
  },

  // 3. The Forgotten Portrait
  {
    id: "story-vid-3-forgotten-portrait",
    title: "The Forgotten Portrait: The Hidden Truth Behind the Family Will",
    slug: "the-forgotten-portrait-family-will",
    category: "Shocking Secrets",
    subcategory: "Family Secrets",
    tags: ["Family Secrets", "Inheritance", "Mystery", "Trending"],
    author: "Marcus Sterling & Taleonix Editorial",
    publicationDate: new Date().toISOString(),
    status: "published",
    partNumber: 1,
    views: 45900,
    uniqueVisitors: 39100,
    avgReadTimeSeconds: 570,
    trendingScore: 97.8,
    readTime: "11 min read",
    coverImage: "/images/the-forgotten-portrait-family-will-cover.jpg",
    hookSummary: "As the movers packed up the living room, Denise noticed something strange behind the glass of a 1985 family portrait. The cardboard backing concealed a secret testament.",
    paragraphs: [
      "[ MAGNOLIA MEADOWS LIVING ROOM — 11:30 AM ]",
      "Cardboard moving boxes lined the hardwood floor of the old Victorian living room as the Holloway family prepared for an unwanted relocation.",
      "Denise stood in her terracotta button-up dress, holding a heavy gold-framed family portrait from 1985 that had hung above the fireplace for four decades.",
      "On the sofa sat Grandma Rose in her royal purple dress and pearl necklace, watching with sorrow as sixty years of memories were boxed away.",
      "\"Denise, be careful with that frame,\" Grandma Rose said softly. \"Your grandfather built that wooden backing with his own hands the week before he passed.\"",
      "As Denise turned the frame over, she noticed the brass tacks on the back were unusually loose, revealing the edge of a thick vellum envelope sealed with burgundy wax.",
      "With trembling fingers, Denise eased the sealed envelope from behind the portrait glass.",
      "Grandma Rose gasped, her hands trembling as Denise broke the wax seal and read the handwritten testament inside.",
      "It was the true last will and testament of patriarch James Holloway—a document that the estranged relatives had claimed never existed.",
      "The will explicitly bequeathed the entire family estate and two million dollars in municipal bonds directly to Grandma Rose and her daughters, rendering the cousin's eviction notice completely null and void.",
      "Tears flowed freely as Denise held up the portrait: \"Grandma... we aren't moving anywhere. Grandfather protected us all along.\""
    ],
    scenes: [
      {
        caption: "The Hidden Testament: Denise uncovers the secret will sealed behind the heirloom frame.",
        image: "/images/the-forgotten-portrait-family-will-scene.jpg",
        insertAfterParagraph: 6
      }
    ]
  },

  // 4. The Gold Framed Deed
  {
    id: "story-vid-4-gold-framed-deed",
    title: "The Gold Framed Deed: The Mother Who Refused to Pack",
    slug: "the-gold-framed-deed-refused-to-pack",
    category: "Family Feud",
    subcategory: "Justice & Retribution",
    tags: ["Eviction", "Family Feud", "Justice", "Viral", "Trending"],
    author: "Elena Vance & Taleonix Editorial",
    publicationDate: new Date().toISOString(),
    status: "published",
    partNumber: 1,
    views: 47800,
    uniqueVisitors: 40500,
    avgReadTimeSeconds: 580,
    trendingScore: 98.4,
    readTime: "11 min read",
    coverImage: "/images/the-gold-framed-deed-refused-to-pack-cover.jpg",
    hookSummary: "When predatory debt collectors arrived with packing boxes, Denise stood in the center of the living room holding the gold-framed ancestral deed.",
    paragraphs: [
      "[ SAVANNAH RESIDENCE — 03:45 PM ]",
      "The living room was filled with stacks of brown packing cartons, but Denise refused to pack a single suitcase.",
      "She stood tall in the center of the room, cradling the gilded family portrait in her hands, her expression resolute and fearless.",
      "On the couch, Grandma Evelyn sat in her purple Sunday dress, watching as two sheriff's deputies and a debt collector's representative stood in the doorway.",
      "\"Ms. Holloway, we have an eviction writ from the county court. You have thirty minutes to vacate the premises,\" the collector insisted, tapping his clipboard.",
      "Denise did not yell. She walked forward and held the framed portrait directly before the lead deputy.",
      "\"Deputy, remove the back plate of this frame,\" Denise instructed with chilled calm.",
      "The deputy carefully popped the brass clasps. Tucked securely inside was the original 1965 certified Title Insurance Policy and unsevered Homestead Exemption Deed signed by the Georgia State Supreme Court.",
      "Under state law, the home was legally immune to all commercial collection attempts and third-party foreclosure actions.",
      "The debt collector’s face turned pale as the deputy examined the embossed state seal and turned to the collector: \"Sir, your writ is invalid. If you step onto this property again, I will arrest you for criminal trespass.\"",
      "Denise smiled as the collector scrambled out of the house, proving that truth and courage are stronger than any bully's threats."
    ],
    scenes: [
      {
        caption: "Standing Her Ground: Denise displays the certified title deed hidden in the frame.",
        image: "/images/the-gold-framed-deed-refused-to-pack-scene.jpg",
        insertAfterParagraph: 6
      }
    ]
  },

  // 5. The Millionaire Sister's Kitchen Trash
  {
    id: "story-vid-5-kitchen-trash-quilt",
    title: "The Millionaire Sister's Kitchen Trash: When She Threw Away the $10 Million Quilt",
    slug: "the-millionaire-sisters-kitchen-trash-quilt",
    category: "Revenge",
    subcategory: "Sibling Rivalry",
    tags: ["Revenge", "Inheritance", "Family Secrets", "Trending"],
    author: "Sarah Jenkins & Taleonix Editorial",
    publicationDate: new Date().toISOString(),
    status: "published",
    partNumber: 1,
    views: 54300,
    uniqueVisitors: 46700,
    avgReadTimeSeconds: 600,
    trendingScore: 99.5,
    readTime: "12 min read",
    coverImage: "/images/the-millionaire-sisters-kitchen-trash-quilt-cover.jpg",
    hookSummary: "Arrogant wealthy sister Vanessa tossed her mother's handmade quilt into the kitchen trash bin, calling it worthless junk. She didn't know what was stitched inside.",
    paragraphs: [
      "[ BROOKHAVEN SUBURB, ATLANTA — 01:15 PM ]",
      "In the modern granite kitchen of the family home, Vanessa stood holding her four-thousand-dollar designer handbag, her face twisted in disgust.",
      "Opposite her stood her humble younger sister, Clara, wearing a mustard knit cardigan and green skirt, watching quietly with folded hands.",
      "Vanessa had arrived to clean out their late mother’s house before putting it on the market, eager to pocket her half of the real estate profits.",
      "Snatching the vintage pastel patchwork quilt off the kitchen chair, Vanessa sneered: \"Look at this ugly rag. Mother wasted her whole life sewing garbage.\" With a cruel scoff, she tossed the quilt straight into the large green kitchen trash bin.",
      "Clara didn't say a word. She waited patiently until Vanessa strutted out to her luxury Mercedes and sped away.",
      "The moment the car vanished down the driveway, Clara reached into the clean bin and lifted the heavy quilt.",
      "She took a seam ripper to the inner lining of the corner patch, just as their mother had instructed her on her deathbed.",
      "Inside the velvet stitching were eighty uncashed, negotiable municipal bearer bonds issued in 1978, currently valued with interest at ten million, four hundred thousand dollars—bequeathed solely to the daughter who valued love over greed.",
      "Clara smiled with quiet peace, holding the warm quilt to her chest as justice had silently been served."
    ],
    scenes: [
      {
        caption: "The Arrogant Sister's Mistake: Vanessa tosses the multi-million-dollar heirloom into the trash.",
        image: "/images/the-millionaire-sisters-kitchen-trash-quilt-scene.jpg",
        insertAfterParagraph: 5
      }
    ]
  },

  // 6. The Landlord's Fake Eviction
  {
    id: "story-vid-6-landlords-fake-eviction",
    title: "The Landlord's Fake Eviction: When the Granddaughter Brought Federal Deeds",
    slug: "the-landlords-fake-eviction-federal-deeds",
    category: "Courtroom & Justice",
    subcategory: "Legal Drama",
    tags: ["Courtroom", "Landlord", "Justice", "Trending", "Viral"],
    author: "Elena Vance & Taleonix Editorial",
    publicationDate: new Date().toISOString(),
    status: "published",
    partNumber: 1,
    views: 51200,
    uniqueVisitors: 43800,
    avgReadTimeSeconds: 610,
    trendingScore: 99.1,
    readTime: "12 min read",
    coverImage: "/images/the-landlords-fake-eviction-federal-deeds-cover.jpg",
    hookSummary: "When an arrogant real estate flipper tried to intimidate an elderly veteran in his office, the veteran's lawyer granddaughter walked in with certified federal patent deeds.",
    paragraphs: [
      "[ DOWNTOWN PROPERTY MANAGEMENT OFFICE — 10:45 AM ]",
      "In the dingy office of a predatory commercial landlord, seventy-eight-year-old veteran Arthur sat anxiously in his blue cardigan, holding his reading glasses with trembling hands.",
      "Across the desk, thirty-two-year-old landlord Marcus reclined in his office chair wearing a designer tracksuit and gold chain, laughing arrogantly.",
      "\"Old man, your ninety-nine-year land lease expired last Friday,\" Marcus mocked. \"Sign this surrender form and I'll give you five thousand cash to find a nursing home.\"",
      "The door swung open, and Denise strode in. Dressed in a tailored charcoal blazer with neat locs, she placed a steaming cup of coffee on the desk alongside a heavy stack of certified legal parchment.",
      "\"My grandfather isn't signing anything, Marcus,\" Denise announced with razor-sharp precision.",
      "Denise pointed to the gold-embossed seal at the bottom of the lead page: \"This is the 1972 Perpetual Allodial Title Deed, executed under Federal Land Patent laws. The lease you're trying to enforce was legally extinguished thirty years ago.\"",
      "Marcus's arrogant laughter died instantly. He looked at the Department of Justice stamps and realization hit him like a physical blow.",
      "\"Furthermore,\" Denise added, \"I've already filed a formal complaint with the State Attorney General for predatory extortion of a senior veteran.\"",
      "Within thirty seconds, Marcus was begging for mercy, offering full public apologies and dropping all unlawful claims against the family property."
    ],
    scenes: [
      {
        caption: "Turning the Tables: Denise confronts the greedy landlord with undeniable federal deeds.",
        image: "/images/the-landlords-fake-eviction-federal-deeds-scene.jpg",
        insertAfterParagraph: 5
      }
    ]
  },

  // 7. The Kitchen Table Secret
  {
    id: "story-vid-7-kitchen-table-secret",
    title: "The Kitchen Table Secret: The Truth Behind the Foreclosure Notice",
    slug: "the-kitchen-table-secret-foreclosure-truth",
    category: "Family Feud",
    subcategory: "Secrets & Marriage",
    tags: ["Family Feud", "Secrets", "Marriage", "Trending"],
    author: "Sarah Jenkins & Taleonix Editorial",
    publicationDate: new Date().toISOString(),
    status: "published",
    partNumber: 1,
    views: 43200,
    uniqueVisitors: 36800,
    avgReadTimeSeconds: 560,
    trendingScore: 96.9,
    readTime: "11 min read",
    coverImage: "/images/the-kitchen-table-secret-foreclosure-truth-cover.jpg",
    hookSummary: "Sitting over morning coffee, David discovered why his sister had hidden a ring of keys and a notepad. It wasn't bankruptcy—it was a test.",
    paragraphs: [
      "[ SUBURBAN RESIDENCE KITCHEN — 08:30 AM ]",
      "Morning sunlight streamed across the wooden kitchen table where David stood in his navy henley shirt, staring down at his sister Nicole.",
      "Between them sat three steaming ceramic coffee mugs, a bowl of fresh fruit, and a handwritten notepad with a single set of brass keys.",
      "\"Nicole, why is the bank sending default notices to this address?\" David demanded, his voice tight with concern. \"We paid off the mortgage six months ago.\"",
      "Nicole looked up from her coffee mug, her eyes filled with emotion as her braided hair framed a weary face.",
      "\"David... the notices aren't real. They were sent by our stepbrother to see if we would panic and sell the house to his shell company for pennies,\"",
      "Nicole slid the notepad across the table, revealing bank statements proving every single mortgage payment had been escrowed in an untouchable legal trust.",
      "The brass keys unlocked the safety deposit box holding their father's true estate inheritance—a fund designed specifically to expose greed within the family.",
      "David let out a long breath of relief, clasping his sister's hand across the table: \"We held the line. Now let's go put our stepbrother in his place once and for all.\""
    ],
    scenes: [
      {
        caption: "The Kitchen Truth: Nicole reveals the fake foreclosure plot to her brother David.",
        image: "/images/the-kitchen-table-secret-foreclosure-truth-scene.jpg",
        insertAfterParagraph: 4
      }
    ]
  },

  // 8. The Prodigal Son at the Backyard Reunion
  {
    id: "story-vid-8-prodigal-son-gift",
    title: "The Prodigal Son at the Backyard Reunion: The $15 Million Gift Bag",
    slug: "the-prodigal-son-backyard-reunion-gift",
    category: "Redemption & Family",
    subcategory: "Family Reunion",
    tags: ["Family Reunion", "Redemption", "Inspirational", "Trending"],
    author: "Marcus Sterling & Taleonix Editorial",
    publicationDate: new Date().toISOString(),
    status: "published",
    partNumber: 1,
    views: 57800,
    uniqueVisitors: 49400,
    avgReadTimeSeconds: 610,
    trendingScore: 99.7,
    readTime: "12 min read",
    coverImage: "/images/the-prodigal-son-backyard-reunion-gift-cover.jpg",
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
      "Inside was the fully satisfied mortgage deed for the entire two-hundred-acre farm, accompanied by a fifteen-million-dollar permanent agricultural endowment funded by Marcus's successful green-tech company.",
      "The backyard fell into stunned, breathless silence as tears flowed down Grandmother's cheeks, and the uncles hung their heads in humbled shame."
    ],
    scenes: [
      {
        caption: "The Return of the Son: Marcus approaches the family reunion with the transformative gift.",
        image: "/images/the-prodigal-son-backyard-reunion-gift-scene.jpg",
        insertAfterParagraph: 5
      }
    ]
  }
];

// Prepend all 8 stories to catalog
all8Stories.reverse().forEach(s => {
  // Check if exists
  const idx = stories.findIndex(item => item.slug === s.slug);
  if (idx >= 0) {
    stories[idx] = s;
  } else {
    stories.unshift(s);
  }
});

// Write to stories.json
fs.writeFileSync(storiesPath, JSON.stringify(stories, null, 2), 'utf8');
console.log('Successfully published all 8 distinct American Drama stories to data/stories.json!');
