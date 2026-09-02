const fs = require('fs');
const path = require('path');

const storiesPath = path.join(__dirname, 'data', 'stories.json');
let stories = JSON.parse(fs.readFileSync(storiesPath, 'utf8'));

const newStoryPart1 = {
  id: "story-grandmothers-secret-quilt-p1",
  title: "The Grandmother's Secret Quilt: When the Greedy Nephew Evicted Her, He Threw Away a $48 Million Fortune",
  slug: "the-grandmothers-secret-quilt",
  category: "Money & Inheritance",
  subcategory: "Family Secrets & Retribution",
  tags: [
    "Inheritance",
    "Family Secrets",
    "Grandmother",
    "Revenge",
    "Viral Drama",
    "Trending"
  ],
  author: "Elena Vance & Taleonix Editorial Staff",
  publicationDate: new Date().toISOString(),
  status: "published",
  partNumber: 1,
  seriesId: "series-grandmothers-secret-quilt",
  nextPartSlug: "the-grandmothers-secret-quilt-part-2-the-48-million-retribution",
  nextPartHook: "🔥 Read Chapter 2 (Grand Finale): The Courtroom Truth, the Federal Arrest, and the $48.5M Legacy!",
  views: 64120,
  uniqueVisitors: 53900,
  avgReadTimeSeconds: 610,
  trendingScore: 100.0,
  readTime: "12 min read",
  coverImage: "/images/the-grandmothers-secret-quilt-cover.jpg",
  hookSummary: "When arrogant nephew Trevon showed up with fake foreclosure papers to evict 82-year-old Grandma Evelyn, he dragged her old handmade quilt to the curb and tossed it into the trash. He didn't know what was sewn inside the lining.",
  paragraphs: [
    "[ HOLLOWAY FAMILY RESIDENCE, SAVANNAH, GEORGIA — 04:15 PM ]",
    "The humid afternoon breeze carried the sweet scent of blooming magnolias across the wrap-around porch of the old Holloway estate on the outskirts of Savannah.",
    "For forty-five years, eighty-two-year-old Grandma Evelyn had sat on that porch, humming old gospel hymns while her delicate, arthritic fingers stitched together scrap pieces of flannel, velvet, and calico into heavy heirloom quilts.",
    "Beside her on the porch swing sat her seventy-eight-year-old husband, Arthur. He wore his favorite faded blue knit cardigan, his spectacles resting low on his nose as he watched their eighteen-year-old granddaughter, Maya, preparing for her high school valedictorian commencement.",
    "The quiet serenity was shattered by the aggressive roar of a modified Dodge Charger screeching up the gravel driveway, kicking up a cloud of white dust.",
    "Out stepped thirty-two-year-old Trevon, wearing a grey designer tracksuit, a thick gold Cuban link chain, and an arrogant grin that reeked of malice.",
    "Trevon was Arthur's estranged nephew—a ruthless real estate flipper who had spent five years trying to intimidate the elders into selling their three-hundred-acre coastal tract to an offshore commercial development syndicate.",
    "He slammed the car door, holding a stack of laminated legal notices in his hand, accompanied by two private eviction movers carrying crowbars.",
    "\"Pack your bags, old folks!\" Trevon yelled, marching up the wooden steps without removing his sunglasses. \"The bank called the note on this broken-down shack. By six o'clock tonight, the locks are changed, and the bulldozers are rolling in.\"",
    "Grandpa Arthur stood up with trembling dignity, his hands shaking against his cardigan. \"Trevon, this house has been in the Holloway family for three generations. We paid off the original mortgage in 1982. You have no legal right to step foot on this porch.\"",
    "Trevon laughed mockingly, waving a predatory mezzanine loan document his shady syndicate had fraudulently registered through a corrupt county probate clerk.",
    "\"The law says whatever is on this paper, Uncle Arthur,\" Trevon sneered. \"And this paper says I own every nail, every beam, and every square inch of dirt. Everything inside is trash, and it's going straight to the curb.\"",
    "Pushing past Arthur, Trevon snatched Grandma Evelyn's vintage patchwork quilt right off her lap. The quilt was heavy, dense, and patterned with intricate geometric stitching dating back to the late 1960s.",
    "\"Look at this dusty rag,\" Trevon mocked, holding the heirloom by one corner. \"Smells like mothballs and failure.\" With a careless flick of his wrists, he tossed the quilt straight into the giant green municipal trash bin sitting at the edge of the driveway.",
    "Tears welled in Grandma Evelyn’s eyes, but she did not scream. She simply adjusted her gold wire-rimmed glasses, touched the small gold cross resting over her blue silk blouse, and looked at her nephew with calm, unshakeable pity.",
    "Before Trevon's movers could force open the front door, a black sedan pulled into the driveway at high speed.",
    "Out stepped Denise Holloway—Arthur's daughter and one of Atlanta’s fiercest civil trial attorneys. Dressed in a sharp charcoal blazer with neat box braids, her gaze was like chilled steel.",
    "\"Take your hands off that door, Trevon, or you will leave this property in handcuffs,\" Denise commanded, producing an emergency judicial injunction signed by the Chief Judge of the Chatham County Superior Court.",
    "Trevon’s smile faltered, but his arrogance remained brazen. \"Enjoy your little stay of execution, Auntie Denise. We go before Judge Harrison tomorrow morning at nine. You have no money, no leverage, and no deed. Tomorrow, I'm throwing you all into the street.\"",
    "With a vulgar laugh, Trevon jumped back into his Charger and sped away down the gravel road.",
    "Denise didn't waste a second. She walked straight to the green trash bin, carefully lifted Grandma Evelyn’s handmade quilt from the top of the garbage, and brought it inside the house.",
    "Under the warm amber light of the kitchen dining table, Grandpa Arthur sat with his head in his hands, terrified of losing the home he had spent his entire life protecting.",
    "Grandma Evelyn sat at the head of the table in her vibrant blue blouse. A serene, enigmatic smile played across her lips as she opened a weathered spiral-bound journal filled with handwritten land records.",
    "\"Denise, my sweet child,\" Grandma Evelyn said softly, pointing toward the heavy golden velvet patch stitched into the center of the quilt. \"Go fetch my sewing scissors. It is time the Holloway family claims what was buried in secret fifty years ago.\"",
    "Denise carefully cut through the thick wax-threaded seam. The fabric parted—and what slid out onto the dining table made every jaw in the room drop in stunned disbelief.",
    "Tightly sealed inside waterproof oilcloth were the original, unrecorded 1974 Sovereign Bearer Land Patents and Perpetual Natural Gas Mineral Deeds for all three hundred acres—duly registered with the Department of the Interior and legally appraised at forty-eight million, five hundred thousand dollars.",
    "Grandma Evelyn looked up at Denise with quiet triumph in her eyes: \"Tomorrow morning, baby... we aren't just saving this house. We are taking everything Trevon has ever touched.\""
  ],
  scenes: [
    {
      caption: "The Grandmother's Secret: Grandma Evelyn reveals the hidden $48.5 Million oil deeds sewn inside her quilt.",
      image: "/images/the-grandmothers-secret-quilt-scene-1.jpg",
      insertAfterParagraph: 18
    }
  ]
};

const newStoryPart2 = {
  id: "story-grandmothers-secret-quilt-p2",
  title: "The Grandmother's Secret Quilt (Part 2 - Grand Finale): The Courtroom Truth & The Heir's Retribution",
  slug: "the-grandmothers-secret-quilt-part-2-the-48-million-retribution",
  category: "Money & Inheritance",
  subcategory: "Grand Finale & Justice",
  tags: [
    "Inheritance",
    "Grand Finale",
    "Courtroom Drama",
    "Family Secrets",
    "Revenge",
    "Billionaire"
  ],
  author: "Elena Vance & Taleonix Editorial Staff",
  publicationDate: new Date().toISOString(),
  status: "published",
  partNumber: 2,
  seriesId: "series-grandmothers-secret-quilt",
  prevPartSlug: "the-grandmothers-secret-quilt",
  views: 59340,
  uniqueVisitors: 51200,
  avgReadTimeSeconds: 620,
  trendingScore: 99.8,
  readTime: "12 min read",
  coverImage: "/images/the-grandmothers-secret-quilt-p2-cover.jpg",
  hookSummary: "Trevon walked into Courtroom 4B grinning with his corporate lawyers, certain he was seizing the 300-acre Holloway estate. Then Denise placed Grandma Evelyn's 1974 Bearer Deed on the judge's bench.",
  paragraphs: [
    "[ CHATHAM COUNTY SUPERIOR COURTHOUSE, SAVANNAH — 09:30 AM ]",
    "The polished mahogany double doors of Courtroom 4B swung open as thirty-two-year-old Trevon strode down the central aisle, radiating insufferable confidence.",
    "He wore an expensive charcoal tailored suit, flanked by two high-priced corporate defense attorneys from Atlanta who carried matching leather briefcases embossed with gold monogrammed latches.",
    "In Trevon's mind, today was nothing more than a formal execution. The predatory lien he had fraudulently recorded was designed to strip his elderly aunt and uncle of their three-hundred-acre coastal estate, allowing his syndicate to flip the land to an international energy conglomerate for an eighty-million-dollar windfall.",
    "On the opposite side of the courtroom aisle, seated quietly at the plaintiff's table, sat Denise Holloway.",
    "Beside Denise sat seventy-eight-year-old Grandpa Arthur, his hands resting composed upon the defense table, and eighteen-year-old Maya, dressed in her purple valedictorian commencement honors gown with its shimmering gold tassel.",
    "Trevon leaned over the wooden railing, whispering with venomous mockery: \"Look at you all dressed up for graduation day. You should have packed your moving boxes instead. By noon today, the sheriff is clearing that land.\"",
    "Denise didn't even look up from her legal notepad. \"Sit down, Trevon. Before you embarrass whatever soul you have left.\"",
    "The bailiff’s voice rang through the high-ceilinged chamber: \"All rise for the Honorable Judge Marcus Harrison.\"",
    "Judge Harrison, a veteran jurist with thirty years of federal and state trial experience, adjusted his half-moon reading spectacles as he took his seat at the elevated bench.",
    "\"Case 2026-CV-4912, Coastal Development Syndicate versus Arthur and Evelyn Holloway,\" the judge announced. \"Counsel for the plaintiff, state your petition.\"",
    "Trevon's lead attorney stood up with theatrical poise. \"Your Honor, my client holds a legally executed twenty-four-million-dollar commercial lien against the three hundred acres of the Oak Ridge tract. The defendants have failed to cure the default, and we petition for an immediate, unappealable writ of foreclosure and writ of possession.\"",
    "Judge Harrison nodded grimly, glancing across the bench. \"Ms. Holloway, as counsel for the defendants, how does the defense respond to this certified debt instrument?\"",
    "Denise rose to her feet with commanding elegance. She unclasped her leather portfolio and withdrew three heavy, parchment-bound documents bearing the original 1974 gold wax seal of the Georgia State Land Registry and the United States Department of the Interior.",
    "\"Your Honor,\" Denise’s voice resonated through every corner of the courtroom, steady, clear, and razor-sharp. \"The defense responds by proving that the plaintiff’s alleged lien is an act of criminal forgery, predatory elder exploitation, and federal wire fraud.\"",
    "A collective gasp rippled across the gallery. Trevon’s attorneys jumped to their feet in frantic objection, but Judge Harrison held up a commanding hand. \"Approach the bench with your evidence, Ms. Holloway.\"",
    "Denise stepped forward and placed the unencumbered Bearer Patent Deeds directly before the judge.",
    "\"These are the original Sovereign Land Patents issued to my grandfather in 1974, accompanied by perpetual, unsevered subsurface mineral rights and sovereign immunity easements,\" Denise explained. \"Under Georgia Real Property Code Section 44-2-1, this land was placed into an irrevocable ancestral land trust that prohibits any third-party encumbrance or commercial assignment without the unanimous written consent of all living heirs.\"",
    "Judge Harrison examined the historical watermarks, the embossed state seal, and the unrecorded Department of the Interior registration numbers under a forensic UV lens.",
    "The judge's face turned from curiosity to profound, thunderous fury.",
    "He looked up over his spectacles directly at Trevon and his legal team. \"Counselor... did you perform even the most basic title search before filing this predatory petition?\"",
    "Trevon's lawyer stammered, his face draining of all color: \"Your Honor, our client assured us the title chain was broken—\"",
    "\"This title chain is pristine!\" Judge Harrison roared, slamming his wooden gavel down with enough force to echo down the courthouse corridors. \"Not only is this foreclosure petition dismissed with extreme prejudice, but this court finds that the plaintiff, Trevon Vance Holloway, engaged in fraudulent recordation of commercial liens against vulnerable seniors!\"",
    "Judge Harrison turned to the bailiffs stationed at the exit doors. \"Bailiffs, take Trevon Vance Holloway into immediate federal custody on charges of grand larceny, elder exploitation, and falsification of public land records. Bail is denied pending federal grand jury indictment!\"",
    "Trevon’s jaw hung open in horror as two armed bailiffs stepped forward, seized his arms, and snapped steel handcuffs around his wrists. \"Wait! No! Uncle Arthur, tell them! Denise, please! It was just business!\"",
    "Neither Arthur nor Denise looked back as Trevon was dragged out of Courtroom 4B, screaming and weeping in total ruin.",
    "Outside the courthouse steps in the brilliant Savannah sunshine, Grandma Evelyn stood waiting, surrounded by framed family portraits, smiling with the deep peace of a woman who had defended her legacy through faith and quiet sacrifice.",
    "The multi-billion-dollar energy conglomerate was forced to pay the Holloway family forty-eight million, five hundred thousand dollars in unencumbered royalties to lease their coastal transmission corridor.",
    "That evening, Maya stood on the front lawn in her purple graduation gown, embraced by her proud parents and grandparents. The old home was safe forever—a testament that the quiet stitches of love and family truth will always tear down the arrogant towers of greed."
  ],
  scenes: [
    {
      caption: "Generational Triumph: Denise and Grandma Evelyn hold the family portrait after saving the $48.5M estate.",
      image: "/images/the-grandmothers-secret-quilt-scene-2.jpg",
      insertAfterParagraph: 18
    }
  ]
};

// Insert at the beginning of the catalog
stories.unshift(newStoryPart2);
stories.unshift(newStoryPart1);

// Write to stories.json
fs.writeFileSync(storiesPath, JSON.stringify(stories, null, 2), 'utf8');
console.log('Successfully added Part 1 and Part 2 to data/stories.json');
