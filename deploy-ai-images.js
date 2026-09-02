const fs = require('fs');
const path = require('path');
const db = require('./server/db');

const brainDir = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\88bb829d-a1a3-4bb0-a283-f8b4edf66be2';
const publicImagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(publicImagesDir)) fs.mkdirSync(publicImagesDir, { recursive: true });

// Mapping of AI generated artifact images to story slugs
const AI_IMAGE_MAPPING = {
  "the-discarded-heiress-billionaires-secret-vow": "discarded_heiress_rain_1788341866704.jpg",
  "the-shadow-billionaire-divorce-when-she-walked-away-with-half-the-city": "shadow_billionaire_divorce_1788341891272.jpg",
  "his-hidden-mafia-queen-the-undercover-waitress": "hidden_mafia_queen_1788341914129.jpg",
  "the-contract-marriage-when-the-crippled-ceo-walked": "contract_marriage_ceo_1788341951869.jpg",
  "the-stolen-inheritance-the-billionaires-secret-will": "stolen_inheritance_will_1788341971155.jpg",
  "shocking-secrets-the-dna-test-in-the-ballroom": "gala_dna_secrets_1788342028243.jpg",
  "when-she-foreclosed-her-ex-husbands-hamptons-estate": "hamptons_foreclosure_seizure_1788342064887.jpg",
  "the-undercover-janitor-at-vance-global": "undercover_janitor_founder_1788342287393.jpg",
  "the-dons-silent-guardian-the-10-year-debt": "dons_silent_guardian_1788342372385.jpg",
  "the-5-year-silent-wife-hamptons-gala-revenge": "silent_wife_gala_revenge_1788342326260.jpg",
  "the-black-card-in-the-pawnshop": "black_card_pawnshop_1788342348030.jpg",
  "the-governors-hidden-daughter-senate-hearing": "senate_hidden_daughter_1788342401697.jpg"
};

const stories = db.getStories();

for (const [slug, fileName] of Object.entries(AI_IMAGE_MAPPING)) {
  const srcPath = path.join(brainDir, fileName);
  const destCoverName = `${slug}.jpg`;
  const destCoverPath = path.join(publicImagesDir, destCoverName);

  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destCoverPath);
    console.log(`Copied AI cover for: ${slug}`);

    // Also copy as scene 1 illustration
    const destScene1Name = `${slug}-scene-1.jpg`;
    const destScene1Path = path.join(publicImagesDir, destScene1Name);
    fs.copyFileSync(srcPath, destScene1Path);

    // Update story in DB
    const story = stories.find(s => s.slug === slug);
    if (story) {
      story.coverImage = `/images/${destCoverName}`;
      story.scenes = [
        {
          caption: story.paragraphs[2] ? `Dramatic moment: ${story.paragraphs[2].slice(0, 90)}...` : `Scene confrontation from ${story.title}`,
          image: `/images/${destScene1Name}`,
          insertAfterParagraph: 2
        }
      ];
    }
  } else {
    console.warn(`Source image missing: ${srcPath}`);
  }
}

db.saveStories(stories);
console.log("All stories updated with photorealistic AI-generated drama artwork!");
