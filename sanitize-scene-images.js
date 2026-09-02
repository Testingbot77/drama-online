const fs = require('fs');
const path = require('path');
const db = require('./server/db');

const stories = db.getStories();

// Exact Story to Character Artwork Match
const EXACT_MATCH_REGISTRY = {
  "the-discarded-heiress-billionaires-secret-vow": {
    cover: "/images/discarded_heiress_rain_1788341866704.jpg",
    scenes: [
      {
        caption: "Confrontation in the Rain: Julian hands Maya the cruel separation contract as the Maybach convoy arrives.",
        image: "/images/discarded_heiress_rain_1788341866704.jpg",
        insertAfterParagraph: 4
      },
      {
        caption: "The Sovereign Greeting: Senior Council Elder bows before Supreme Commander Maya at the gates.",
        image: "/images/vance_maybach_convoy_gates.jpg",
        insertAfterParagraph: 14
      }
    ]
  },
  "the-discarded-heiress-part-2-the-takeover": {
    cover: "/images/vance_maybach_convoy_gates.jpg",
    scenes: [
      {
        caption: "The Sovereign Return: Six armored diplomatic Maybachs escort Maya to Vance Global Tower.",
        image: "/images/vance_maybach_convoy_gates.jpg",
        insertAfterParagraph: 6
      }
    ]
  },
  "the-discarded-heiress-part-3-the-sovereign-gala": {
    cover: "/images/silent_wife_gala_revenge_1788342326260.jpg",
    scenes: [
      {
        caption: "The Grand Finale: Maya ascends the Metropolitan Museum steps as the crowned Matriarch of Vance Global.",
        image: "/images/silent_wife_gala_revenge_1788342326260.jpg",
        insertAfterParagraph: 7
      }
    ]
  },
  "the-shadow-billionaire-divorce-when-she-walked-away-with-half-the-city": {
    cover: "/images/shadow_billionaire_divorce_1788341891272.jpg",
    scenes: [
      {
        caption: "The 80th-Floor Climax: Damian tosses the $5M contract as Victoria activates Option Delta over satellite.",
        image: "/images/shadow_billionaire_divorce_1788341891272.jpg",
        insertAfterParagraph: 4
      }
    ]
  },
  "the-shadow-billionaire-divorce-part-2": {
    cover: "/images/shadow_billionaire_divorce_1788341891272.jpg",
    scenes: [
      {
        caption: "The Judicial Showdown: Victoria presides over the Federal Reconstruction Panel as Sterling Holdings collapses.",
        image: "/images/senate_hidden_daughter_1788342401697.jpg",
        insertAfterParagraph: 5
      }
    ]
  },
  "the-shadow-billionaire-divorce-part-3-the-merger": {
    cover: "/images/shadow_billionaire_divorce_1788341891272.jpg",
    scenes: [
      {
        caption: "The Queen of Wall Street: Victoria concludes the historic Ares acquisition at the Federal Reserve.",
        image: "/images/shadow_billionaire_divorce_1788341891272.jpg",
        insertAfterParagraph: 4
      }
    ]
  },
  "his-hidden-mafia-queen-the-undercover-waitress": {
    cover: "/images/hidden_mafia_queen_1788341914129.jpg",
    scenes: [
      {
        caption: "2 AM Diner Confrontation: Waitress Elena neutralizes armed syndicate hitmen to protect wounded boss Dante.",
        image: "/images/hidden_mafia_queen_1788341914129.jpg",
        insertAfterParagraph: 6
      }
    ]
  },
  "his-hidden-mafia-queen-part-2": {
    cover: "/images/hidden_mafia_queen_1788341914129.jpg",
    scenes: [
      {
        caption: "The Underworld Counter-Ambush: Elena and Dante deploy Ghost Syndicate forces at the naval shipyard.",
        image: "/images/hidden_mafia_queen_1788341914129.jpg",
        insertAfterParagraph: 5
      }
    ]
  },
  "his-hidden-mafia-queen-part-3-the-syndicate-coronation": {
    cover: "/images/dons_silent_guardian_1788342372385.jpg",
    scenes: [
      {
        caption: "The Five Families Coronation: Seventy captains pledge allegiance to Queen Elena at the Rossi Estate.",
        image: "/images/dons_silent_guardian_1788342372385.jpg",
        insertAfterParagraph: 4
      }
    ]
  },
  "the-contract-marriage-when-the-crippled-ceo-walked": {
    cover: "/images/contract_marriage_ceo_1788341951869.jpg",
    scenes: [
      {
        caption: "The Ballroom Miracle: Billionaire CEO Liam stands up from his wheelchair beside loyal wife Hannah.",
        image: "/images/contract_marriage_ceo_1788341951869.jpg",
        insertAfterParagraph: 4
      }
    ]
  },
  "the-contract-marriage-part-2": {
    cover: "/images/contract_marriage_ceo_1788341951869.jpg",
    scenes: [
      {
        caption: "The Horizon Boardroom Takeover: Liam and Hannah present federal wiretaps to arrest Uncle George.",
        image: "/images/contract_marriage_ceo_1788341951869.jpg",
        insertAfterParagraph: 6
      }
    ]
  },
  "the-contract-marriage-part-3-the-global-summit": {
    cover: "/images/contract_marriage_ceo_1788341951869.jpg",
    scenes: [
      {
        caption: "The Geneva Vow: Liam announces the $2 Billion Foundation in Hannah's honor before world leaders.",
        image: "/images/contract_marriage_ceo_1788341951869.jpg",
        insertAfterParagraph: 4
      }
    ]
  },
  "the-stolen-inheritance-the-billionaires-secret-will": {
    cover: "/images/stolen_inheritance_will_1788341971155.jpg",
    scenes: [
      {
        caption: "The True Will Revealed: London executor holds up Charles Blackwood's golden holographic testament.",
        image: "/images/stolen_inheritance_will_1788341971155.jpg",
        insertAfterParagraph: 7
      }
    ]
  },
  "the-stolen-inheritance-part-2": {
    cover: "/images/stolen_inheritance_will_1788341971155.jpg",
    scenes: [
      {
        caption: "The Geneva Vault Testimony: Clara views her late father's holographic video testament in Zurich.",
        image: "/images/stolen_inheritance_will_1788341971155.jpg",
        insertAfterParagraph: 4
      }
    ]
  },
  "shocking-secrets-the-dna-test-in-the-ballroom": {
    cover: "/images/gala_dna_secrets_1788342028243.jpg",
    scenes: [
      {
        caption: "The Plaza Gala Exposure: Certified Johns Hopkins genetic DNA forensic report projected before 500 guests.",
        image: "/images/gala_dna_secrets_1788342028243.jpg",
        insertAfterParagraph: 5
      }
    ]
  },
  "shocking-secrets-part-2": {
    cover: "/images/gala_dna_secrets_1788342028243.jpg",
    scenes: [
      {
        caption: "State Police Intervention: Attorney General serves arrest warrants to Governor Hayes at the podium.",
        image: "/images/gala_dna_secrets_1788342028243.jpg",
        insertAfterParagraph: 4
      }
    ]
  },
  "when-she-foreclosed-her-ex-husbands-hamptons-estate": {
    cover: "/images/hamptons_foreclosure_seizure_1788342064887.jpg",
    scenes: [
      {
        caption: "The Southampton Pool Seizure: Genevieve arrives with county sheriffs to seize the $40M estate.",
        image: "/images/hamptons_foreclosure_seizure_1788342064887.jpg",
        insertAfterParagraph: 4
      }
    ]
  },
  "when-she-foreclosed-part-2": {
    cover: "/images/hamptons_foreclosure_seizure_1788342064887.jpg",
    scenes: [
      {
        caption: "The Sotheby's Liquidation: Genevieve purchases Trevor's entire real estate portfolio for $20 Million.",
        image: "/images/hamptons_foreclosure_seizure_1788342064887.jpg",
        insertAfterParagraph: 4
      }
    ]
  },
  "the-undercover-janitor-at-vance-global": {
    cover: "/images/undercover_janitor_founder_1788342287393.jpg",
    scenes: [
      {
        caption: "The 90-Degree Bow: Global CEO Williams and twelve Board members bow before Janitor Ethan Vance.",
        image: "/images/undercover_janitor_founder_1788342287393.jpg",
        insertAfterParagraph: 8
      }
    ]
  },
  "undercover-janitor-part-2": {
    cover: "/images/undercover_janitor_founder_1788342287393.jpg",
    scenes: [
      {
        caption: "The Frontline Promotion: Founder Ethan appoints 60-year-old Marcus as Director of Employee Welfare.",
        image: "/images/undercover_janitor_founder_1788342287393.jpg",
        insertAfterParagraph: 7
      }
    ]
  },
  "the-dons-silent-guardian-the-10-year-debt": {
    cover: "/images/dons_silent_guardian_1788342372385.jpg",
    scenes: [
      {
        caption: "The Private Villa Defense: Gabriel neutralizes mutinous capos as Don Salvatore calmly finishes his wine.",
        image: "/images/dons_silent_guardian_1788342372385.jpg",
        insertAfterParagraph: 8
      }
    ]
  },
  "silent-guardian-part-2": {
    cover: "/images/dons_silent_guardian_1788342372385.jpg",
    scenes: [
      {
        caption: "Pier 42 Final Stand: Don Salvatore declares Gabriel a true son of the family at the Port of New York.",
        image: "/images/dons_silent_guardian_1788342372385.jpg",
        insertAfterParagraph: 4
      }
    ]
  },
  "the-5-year-silent-wife-hamptons-gala-revenge": {
    cover: "/images/silent_wife_gala_revenge_1788342326260.jpg",
    scenes: [
      {
        caption: "The Pierre Hotel Coronation: Vivian Sinclair arrives wearing the 30-carat royal sapphire necklace.",
        image: "/images/silent_wife_gala_revenge_1788342326260.jpg",
        insertAfterParagraph: 4
      }
    ]
  },
  "silent-wife-part-2": {
    cover: "/images/silent_wife_gala_revenge_1788342326260.jpg",
    scenes: [
      {
        caption: "The Prenuptial Forfeiture: Swiss legal team presents Carter's signed infidelity forfeiture agreement.",
        image: "/images/silent_wife_gala_revenge_1788342326260.jpg",
        insertAfterParagraph: 4
      }
    ]
  },
  "the-black-card-in-the-pawnshop": {
    cover: "/images/black_card_pawnshop_1788342348030.jpg",
    scenes: [
      {
        caption: "The Sovereign Black Card: Noah Vance places the Centurion Sovereign card on the pawnshop glass.",
        image: "/images/black_card_pawnshop_1788342348030.jpg",
        insertAfterParagraph: 6
      }
    ]
  },
  "black-card-pawnshop-part-2": {
    cover: "/images/black_card_pawnshop_1788342348030.jpg",
    scenes: [
      {
        caption: "The Executive Dispatch: J.P. Morgan Private Bank Chairman arrives to salute Supreme Commander Noah.",
        image: "/images/black_card_pawnshop_1788342348030.jpg",
        insertAfterParagraph: 4
      }
    ]
  },
  "the-governors-hidden-daughter-senate-hearing": {
    cover: "/images/senate_hidden_daughter_1788342401697.jpg",
    scenes: [
      {
        caption: "Exhibit 94 on Live Television: Maya presents certified genetic hospital affidavit at the Senate hearing.",
        image: "/images/senate_hidden_daughter_1788342401697.jpg",
        insertAfterParagraph: 5
      }
    ]
  },
  "senate-hearing-part-2": {
    cover: "/images/senate_hidden_daughter_1788342401697.jpg",
    scenes: [
      {
        caption: "The Capitol Steps Address: Maya addresses the national press corps following the Senate victory.",
        image: "/images/senate_hidden_daughter_1788342401697.jpg",
        insertAfterParagraph: 5
      }
    ]
  },
  "the-two-mothers-at-graduation": {
    cover: "/images/the-two-mothers-at-graduation-cover.jpg",
    scenes: [
      {
        caption: "The Valedictorian's Choice: Marcus crowns Mama Sarah with his Gold Medal in front of 500 spectators.",
        image: "/images/the-two-mothers-at-graduation-scene-1.jpg",
        insertAfterParagraph: 18
      }
    ]
  },
  "the-two-mothers-at-graduation-part-2-the-50-million-legacy": {
    cover: "/images/the-two-mothers-at-graduation-p2-cover.jpg",
    scenes: [
      {
        caption: "The Courthouse Victory: Mama Sarah and Marcus celebrate after Judge Harrison awards the $52M restitution.",
        image: "/images/the-two-mothers-at-graduation-scene-2.jpg",
        insertAfterParagraph: 18
      }
    ]
  }
};

stories.forEach(s => {
  const match = EXACT_MATCH_REGISTRY[s.slug];
  if (match) {
    s.coverImage = match.cover;
    s.scenes = match.scenes;
  }
});

db.saveStories(stories);
console.log("Successfully sanitized and mapped 100% exact character/scene-matched artwork to all stories!");
