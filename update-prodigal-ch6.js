const fs = require('fs');
const path = require('path');
const p = path.join(__dirname, 'data', 'stories.json');
let stories = JSON.parse(fs.readFileSync(p, 'utf8'));
const s = stories.find(x => x.id === 'story-prodigal-son-mega-ch6');
if (s) {
  s.paragraphs = [
    '[ HOMESTEAD MAIN LAWN — 09:30 PM ]',
    'Golden string lights hung between the ancient pecan trees, bathing the long wooden banquet tables in warm amber light.',
    'Plates of hickory-smoked brisket, savory barbecue ribs, garden collards, sweet potato casserole, and fresh cornbread were passed freely among sixty family members.',
    'There were no flimsy paper plates, no VIP corners, and no whispering behind closed doors—only the deep joy of an unbroken family.',
    'Derek laughed with his cousins as he refilled sweet tea pitchers, his designer posturing completely replaced with honest, hardworking humility.',
    'Aunt Shirley sat happily beside Big Mama, peeling fresh Georgia peaches for the homemade cobbler.',
    'On the front porch banister, the framed satisfaction of mortgage certificate caught the warm glow of the lanterns.',
    'Malcolm stood quietly at the edge of the lawn, his work boots planted firmly in the Georgia soil his ancestors had tilled for generations.',
    'Big Mama walked over, leaning gently on her polished wooden cane, and stood beside her grandson.',
    '\"You gave this family back its name today, Malcolm,\" Big Mama said softly, looking out over the laughing children.',
    '\"The land gave us our roots, Big Mama,\" Malcolm replied, putting an arm gently around her shoulders. \"I just made sure nobody could ever dig them up.\"',
    '\"Your daddy worked forty years on this dirt, Malcolm. He never had a bank account with six zeros, but he had honor in every knuckle.\"',
    '\"He taught me that true power is what you can protect, not what you can show off,\" Malcolm said.',
    'A cousin started playing an acoustic guitar by the firepit, leading the elders in a quiet, soulful harmony that drifted into the night.',
    'Derek walked over, holding two plates of warm peach cobbler, handing one to Malcolm with a respectful nod.',
    '\"Big brother... thank you for giving me a real job on Monday,\" Derek said quietly.',
    'Malcolm smiled, clapping his cousin on the shoulder. \"Be at the workshop at six sharp, Derek. We build together from now on.\"',
    'As the embers from the firepit danced into the southern sky, peace settled over the Jenkins homestead—unshakable, sovereign, and finally whole.',
    'The prodigal son had returned, not to claim a throne, but to ensure that everyone at the table ate as family.'
  ];
  s.readTime = '9 min read';
  s.avgReadTimeSeconds = 540;
  fs.writeFileSync(p, JSON.stringify(stories, null, 2), 'utf8');
  console.log('story-prodigal-son-mega-ch6 enriched successfully to', s.paragraphs.length, 'paragraphs!');
}
