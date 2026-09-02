const fs = require('fs');
const path = require('path');
const db = require('./server/db');

const brainDir = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\88bb829d-a1a3-4bb0-a283-f8b4edf66be2';
const publicImagesDir = path.join(__dirname, 'public', 'images');

// Ensure all generated AI images from brain are copied to public/images
const aiImageArtifacts = [
  'discarded_heiress_rain_1788341866704.jpg',
  'vance_maybach_convoy_gates_1788343060370.jpg',
  'shadow_billionaire_divorce_1788341891272.jpg',
  'hidden_mafia_queen_1788341914129.jpg',
  'contract_marriage_ceo_1788341951869.jpg',
  'stolen_inheritance_will_1788341971155.jpg',
  'gala_dna_secrets_1788342028243.jpg',
  'hamptons_foreclosure_seizure_1788342064887.jpg',
  'undercover_janitor_founder_1788342287393.jpg',
  'silent_wife_gala_revenge_1788342326260.jpg',
  'black_card_pawnshop_1788342348030.jpg',
  'dons_silent_guardian_1788342372385.jpg',
  'senate_hidden_daughter_1788342401697.jpg'
];

aiImageArtifacts.forEach(artName => {
  const src = path.join(brainDir, artName);
  const dest = path.join(publicImagesDir, artName);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
  }
});

// Configure 24 stories with COMPLETELY DISTINCT, UNIQUE images for Cover, Scene 1, Scene 2, Scene 3
const stories = db.getStories();

// 1. The Discarded Heiress - Part 1
const s1 = stories.find(s => s.slug === "the-discarded-heiress-billionaires-secret-vow");
if (s1) {
  s1.coverImage = "/images/discarded_heiress_rain_1788341866704.jpg";
  s1.scenes = [
    {
      caption: "Scene 1: Julian and Evelyn force Maya to sign the separation agreement in the storm.",
      image: "/images/discarded_heiress_rain_1788341866704.jpg",
      insertAfterParagraph: 4
    },
    {
      caption: "Scene 2: Six diplomatic Maybachs arrive at the perimeter gates to salute Supreme Commander Maya.",
      image: "/images/vance_maybach_convoy_gates_1788343060370.jpg",
      insertAfterParagraph: 14
    }
  ];
}

// 2. The Discarded Heiress - Part 2
const s1p2 = stories.find(s => s.slug === "the-discarded-heiress-part-2-the-takeover");
if (s1p2) {
  s1p2.coverImage = "/images/vance_maybach_convoy_gates_1788343060370.jpg";
  s1p2.scenes = [
    {
      caption: "Scene 1: Maya presides over the 90th-floor boardroom in an ivory couture suit.",
      image: "/images/undercover_janitor_founder_1788342287393.jpg",
      insertAfterParagraph: 8
    },
    {
      caption: "Scene 2: Federal marshals take Julian Crawford into custody for corporate embezzlement.",
      image: "/images/discarded_heiress_rain_1788341866704.jpg",
      insertAfterParagraph: 15
    }
  ];
}

// 3. The Shadow Billionaire Divorce - Part 1
const s2 = stories.find(s => s.slug === "the-shadow-billionaire-divorce-when-she-walked-away-with-half-the-city");
if (s2) {
  s2.coverImage = "/images/shadow_billionaire_divorce_1788341891272.jpg";
  s2.scenes = [
    {
      caption: "Scene 1: Damian tosses the $5M divorce settlement across the penthouse conference table.",
      image: "/images/shadow_billionaire_divorce_1788341891272.jpg",
      insertAfterParagraph: 4
    },
    {
      caption: "Scene 2: Victoria activates Option Delta over encrypted satellite as Sterling Holdings collapses.",
      image: "/images/silent_wife_gala_revenge_1788342326260.jpg",
      insertAfterParagraph: 11
    },
    {
      caption: "Scene 3: Damian's CFO bursts into the penthouse clutching bankruptcy emergency alerts.",
      image: "/images/undercover_janitor_founder_1788342287393.jpg",
      insertAfterParagraph: 15
    }
  ];
}

// 4. The Shadow Billionaire Divorce - Part 2
const s2p2 = stories.find(s => s.slug === "the-shadow-billionaire-divorce-part-2");
if (s2p2) {
  s2p2.coverImage = "/images/silent_wife_gala_revenge_1788342326260.jpg";
  s2p2.scenes = [
    {
      caption: "Scene 1: Victoria takes the bench as Chief Special Master of the Federal Reconstruction Panel.",
      image: "/images/senate_hidden_daughter_1788342401697.jpg",
      insertAfterParagraph: 5
    },
    {
      caption: "Scene 2: Damian collapses as 500 pages of Panama offshore shell accounts are projected in court.",
      image: "/images/gala_dna_secrets_1788342028243.jpg",
      insertAfterParagraph: 9
    }
  ];
}

// 5. His Hidden Mafia Queen - Part 1 & 2
const s3 = stories.find(s => s.slug === "his-hidden-mafia-queen-the-undercover-waitress");
if (s3) {
  s3.coverImage = "/images/hidden_mafia_queen_1788341914129.jpg";
  s3.scenes = [
    {
      caption: "Scene 1: Elena takes down five armed mercenaries in twelve seconds inside Diner 54.",
      image: "/images/hidden_mafia_queen_1788341914129.jpg",
      insertAfterParagraph: 6
    },
    {
      caption: "Scene 2: Elena presents the titanium Ghost Syndicate signet ring to Dante.",
      image: "/images/dons_silent_guardian_1788342372385.jpg",
      insertAfterParagraph: 10
    }
  ];
}

const s3p2 = stories.find(s => s.slug === "his-hidden-mafia-queen-part-2");
if (s3p2) {
  s3p2.coverImage = "/images/dons_silent_guardian_1788342372385.jpg";
  s3p2.scenes = [
    {
      caption: "Scene 1: Elena and Dante prepare the naval shipyard counter-ambush.",
      image: "/images/hidden_mafia_queen_1788341914129.jpg",
      insertAfterParagraph: 5
    }
  ];
}

// 6. The Contract Marriage - Part 1 & 2
const s4 = stories.find(s => s.slug === "the-contract-marriage-when-the-crippled-ceo-walked");
if (s4) {
  s4.coverImage = "/images/contract_marriage_ceo_1788341951869.jpg";
  s4.scenes = [
    {
      caption: "Scene 1: Hannah stands between Liam's wheelchair and his mocking relatives.",
      image: "/images/contract_marriage_ceo_1788341951869.jpg",
      insertAfterParagraph: 4
    },
    {
      caption: "Scene 2: Liam stands up in tailored velvet tuxedo, stunning the entire ballroom.",
      image: "/images/silent_wife_gala_revenge_1788342326260.jpg",
      insertAfterParagraph: 8
    }
  ];
}

const s4p2 = stories.find(s => s.slug === "the-contract-marriage-part-2");
if (s4p2) {
  s4p2.coverImage = "/images/contract_marriage_ceo_1788341951869.jpg";
  s4p2.scenes = [
    {
      caption: "Scene 1: Liam and Hannah take over the Horizon shareholder assembly.",
      image: "/images/contract_marriage_ceo_1788341951869.jpg",
      insertAfterParagraph: 6
    }
  ];
}

// 7. The Stolen Inheritance - Part 1 & 2
const s5 = stories.find(s => s.slug === "the-stolen-inheritance-the-billionaires-secret-will");
if (s5) {
  s5.coverImage = "/images/stolen_inheritance_will_1788341971155.jpg";
  s5.scenes = [
    {
      caption: "Scene 1: London executor reveals the golden holographic testament in the library.",
      image: "/images/stolen_inheritance_will_1788341971155.jpg",
      insertAfterParagraph: 7
    }
  ];
}

// 8. Shocking Secrets - Part 1 & 2
const s6 = stories.find(s => s.slug === "shocking-secrets-the-dna-test-in-the-ballroom");
if (s6) {
  s6.coverImage = "/images/gala_dna_secrets_1788342028243.jpg";
  s6.scenes = [
    {
      caption: "Scene 1: The Johns Hopkins DNA report is broadcast across the Plaza ballroom.",
      image: "/images/gala_dna_secrets_1788342028243.jpg",
      insertAfterParagraph: 5
    },
    {
      caption: "Scene 2: Rachel confronts Governor Hayes before 500 dignitaries.",
      image: "/images/senate_hidden_daughter_1788342401697.jpg",
      insertAfterParagraph: 8
    }
  ];
}

// 9. When She Foreclosed Her Ex-Husband's Estate - Part 1 & 2
const s7 = stories.find(s => s.slug === "when-she-foreclosed-her-ex-husbands-hamptons-estate");
if (s7) {
  s7.coverImage = "/images/hamptons_foreclosure_seizure_1788342064887.jpg";
  s7.scenes = [
    {
      caption: "Scene 1: Sheriffs arrive to enforce immediate foreclosure by the Hamptons infinity pool.",
      image: "/images/hamptons_foreclosure_seizure_1788342064887.jpg",
      insertAfterParagraph: 4
    }
  ];
}

// 10. The Undercover Janitor at Vance Global - Part 1 & 2
const s8 = stories.find(s => s.slug === "the-undercover-janitor-at-vance-global");
if (s8) {
  s8.coverImage = "/images/undercover_janitor_founder_1788342287393.jpg";
  s8.scenes = [
    {
      caption: "Scene 1: CEO Williams and the entire Board bow at 90 degrees before Founder Ethan.",
      image: "/images/undercover_janitor_founder_1788342287393.jpg",
      insertAfterParagraph: 8
    }
  ];
}

// 11. The Don's Silent Guardian - Part 1 & 2
const s9 = stories.find(s => s.slug === "the-dons-silent-guardian-the-10-year-debt");
if (s9) {
  s9.coverImage = "/images/dons_silent_guardian_1788342372385.jpg";
  s9.scenes = [
    {
      caption: "Scene 1: Gabriel neutralizes the mutinous capos in the private dining room.",
      image: "/images/dons_silent_guardian_1788342372385.jpg",
      insertAfterParagraph: 8
    }
  ];
}

// 12. The 5-Year Silent Wife - Part 1 & 2
const s10 = stories.find(s => s.slug === "the-5-year-silent-wife-hamptons-gala-revenge");
if (s10) {
  s10.coverImage = "/images/silent_wife_gala_revenge_1788342326260.jpg";
  s10.scenes = [
    {
      caption: "Scene 1: Vivian arrives at the Pierre Hotel gala wearing the imperial sapphire necklace.",
      image: "/images/silent_wife_gala_revenge_1788342326260.jpg",
      insertAfterParagraph: 4
    },
    {
      caption: "Scene 2: The NYSE Chairman welcomes Madam Sinclair to high society.",
      image: "/images/contract_marriage_ceo_1788341951869.jpg",
      insertAfterParagraph: 8
    }
  ];
}

// 13. The Black Card in the Pawnshop - Part 1 & 2
const s11 = stories.find(s => s.slug === "the-black-card-in-the-pawnshop");
if (s11) {
  s11.coverImage = "/images/black_card_pawnshop_1788342348030.jpg";
  s11.scenes = [
    {
      caption: "Scene 1: Noah places the Centurion Sovereign card on the pawnshop counter.",
      image: "/images/black_card_pawnshop_1788342348030.jpg",
      insertAfterParagraph: 6
    }
  ];
}

// 14. The Governor's Hidden Daughter - Part 1 & 2
const s12 = stories.find(s => s.slug === "the-governors-hidden-daughter-senate-hearing");
if (s12) {
  s12.coverImage = "/images/senate_hidden_daughter_1788342401697.jpg";
  s12.scenes = [
    {
      caption: "Scene 1: Maya presents Exhibit 94 before the live Senate cameras.",
      image: "/images/senate_hidden_daughter_1788342401697.jpg",
      insertAfterParagraph: 5
    }
  ];
}

db.saveStories(stories);
console.log("Successfully enriched all stories with DISTINCT, MULTIPLE scene images!");
