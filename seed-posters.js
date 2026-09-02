const fs = require('fs');
const path = require('path');
const db = require('./server/db');

const publicImagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}

function escapeXml(unsafe) {
  return String(unsafe || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/**
 * High-Impact Cinematic Poster SVG Generator with Category-Specific Art
 */
function createCinematicPosterSVG(title, subtitle, category, theme = 'gold') {
  const width = 1200;
  const height = 700;

  const colorPalettes = {
    billionaire: {
      bg1: '#0B0D1B',
      bg2: '#1A1835',
      bg3: '#2D1F47',
      accent1: '#FFD700',
      accent2: '#FFA500',
      accentGlow: 'rgba(255, 215, 0, 0.4)',
      badgeBg: '#FFD700',
      badgeText: '#0A0C14',
      icon: '👑',
      tag: 'BILLIONAIRE SAGA'
    },
    revenge: {
      bg1: '#140508',
      bg2: '#2B0A12',
      bg3: '#450D1D',
      accent1: '#FF3366',
      accent2: '#E60039',
      accentGlow: 'rgba(255, 51, 102, 0.45)',
      badgeBg: '#FF3366',
      badgeText: '#FFFFFF',
      icon: '🔥',
      tag: 'VIRAL REVENGE'
    },
    mafia: {
      bg1: '#05070D',
      bg2: '#0D1527',
      bg3: '#18243E',
      accent1: '#38BDF8',
      accent2: '#0284C7',
      accentGlow: 'rgba(56, 189, 248, 0.4)',
      badgeBg: '#38BDF8',
      badgeText: '#0A0C14',
      icon: '🕶️',
      tag: 'UNDERWORLD POWER'
    },
    marriage: {
      bg1: '#0F0918',
      bg2: '#241438',
      bg3: '#3B1E5C',
      accent1: '#C084FC',
      accent2: '#9333EA',
      accentGlow: 'rgba(192, 132, 252, 0.4)',
      badgeBg: '#C084FC',
      badgeText: '#0A0C14',
      icon: '💔',
      tag: 'MARRIAGE & DEVOTION'
    },
    inheritance: {
      bg1: '#04140D',
      bg2: '#0B291B',
      bg3: '#144630',
      accent1: '#34D399',
      accent2: '#059669',
      accentGlow: 'rgba(52, 211, 153, 0.4)',
      badgeBg: '#34D399',
      badgeText: '#0A0C14',
      icon: '💰',
      tag: 'SECRET INHERITANCE'
    },
    secrets: {
      bg1: '#180B14',
      bg2: '#35122B',
      bg3: '#521B42',
      accent1: '#F43F5E',
      accent2: '#BE123C',
      accentGlow: 'rgba(244, 63, 94, 0.4)',
      badgeBg: '#F43F5E',
      badgeText: '#FFFFFF',
      icon: '😱',
      tag: 'SHOCKING SCANDAL'
    }
  };

  const pal = colorPalettes[theme] || colorPalettes.billionaire;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="100%">
    <defs>
      <!-- Rich Dramatic Background Gradient -->
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${pal.bg1}" />
        <stop offset="45%" stop-color="${pal.bg2}" />
        <stop offset="85%" stop-color="${pal.bg3}" />
        <stop offset="100%" stop-color="#050608" />
      </linearGradient>

      <!-- Shimmering Text Gradient -->
      <linearGradient id="goldText" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="${pal.accent1}" />
        <stop offset="100%" stop-color="${pal.accent2}" />
      </linearGradient>

      <!-- Center Spotlight Glow -->
      <radialGradient id="spotlight" cx="50%" cy="38%" r="65%">
        <stop offset="0%" stop-color="${pal.accentGlow}" />
        <stop offset="55%" stop-color="rgba(0,0,0,0.2)" />
        <stop offset="100%" stop-color="transparent" />
      </radialGradient>

      <!-- Luxury Mesh Lines -->
      <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${pal.accent1}" stop-opacity="0.4" />
        <stop offset="100%" stop-color="transparent" />
      </linearGradient>

      <filter id="cinematicGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="16" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>

      <filter id="heavyShadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="10" stdDeviation="14" flood-color="#000000" flood-opacity="0.95"/>
      </filter>
    </defs>
    
    <!-- Base Background -->
    <rect width="${width}" height="${height}" fill="url(#bgGrad)"/>
    
    <!-- Radial Ambient Spotlight -->
    <rect width="${width}" height="${height}" fill="url(#spotlight)"/>

    <!-- Geometric Skyline & Ray Silhouettes -->
    <g opacity="0.22">
      <!-- Light rays radiating from top center -->
      <polygon points="600,0 200,700 350,700" fill="url(#lineGrad)"/>
      <polygon points="600,0 850,700 1000,700" fill="url(#lineGrad)"/>
      <polygon points="600,0 520,700 680,700" fill="${pal.accent1}" opacity="0.15"/>
      
      <!-- Architectural silhouettes -->
      <rect x="100" y="380" width="110" height="320" fill="${pal.accent1}" rx="4"/>
      <rect x="230" y="300" width="130" height="400" fill="${pal.accent1}" rx="4"/>
      <rect x="380" y="420" width="90" height="280" fill="${pal.accent1}" rx="4"/>
      <rect x="730" y="350" width="120" height="350" fill="${pal.accent1}" rx="4"/>
      <rect x="870" y="270" width="140" height="430" fill="${pal.accent1}" rx="4"/>
      <rect x="1030" y="400" width="90" height="300" fill="${pal.accent1}" rx="4"/>
    </g>

    <!-- Glowing Luxury Border Frame -->
    <rect x="28" y="28" width="${width - 56}" height="${height - 56}" fill="none" stroke="${pal.accent1}" stroke-width="2" stroke-opacity="0.4" rx="20"/>
    <rect x="36" y="36" width="${width - 72}" height="${height - 72}" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="1" rx="16"/>

    <!-- Corner Accents -->
    <path d="M 45 65 L 45 45 L 65 45" fill="none" stroke="${pal.accent1}" stroke-width="3"/>
    <path d="M 1155 65 L 1155 45 L 1135 45" fill="none" stroke="${pal.accent1}" stroke-width="3"/>
    <path d="M 45 635 L 45 655 L 65 655" fill="none" stroke="${pal.accent1}" stroke-width="3"/>
    <path d="M 1155 635 L 1155 655 L 1135 655" fill="none" stroke="${pal.accent1}" stroke-width="3"/>

    <!-- Top Badge Header -->
    <g transform="translate(60, 60)">
      <rect width="210" height="36" rx="18" fill="${pal.badgeBg}" />
      <text x="105" y="23" fill="${pal.badgeText}" font-family="'Outfit', sans-serif" font-size="13" font-weight="900" text-anchor="middle" letter-spacing="2">
        ${pal.icon} ${pal.tag}
      </text>
    </g>

    <!-- Top Right Series Tag -->
    <text x="${width - 60}" y="84" fill="#FFFFFF" font-family="'Outfit', sans-serif" font-size="15" font-weight="800" text-anchor="end" opacity="0.9" letter-spacing="1">
      TALEONIX ORIGINAL • EPISODE 1
    </text>

    <!-- Big Center Cinematic Typography -->
    <g filter="url(#heavyShadow)" text-anchor="middle">
      <!-- Ambient Backlight Circle -->
      <circle cx="${width/2}" cy="${height/2 - 20}" r="160" fill="${pal.accentGlow}" opacity="0.6" filter="url(#cinematicGlow)"/>

      <!-- Main Title -->
      <text x="${width/2}" y="${height/2 + 10}" fill="url(#goldText)" font-family="'Outfit', sans-serif" font-size="52" font-weight="900" letter-spacing="1.5">
        ${escapeXml(title)}
      </text>

      <!-- Subtitle / Hook -->
      <text x="${width/2}" y="${height/2 + 75}" fill="#F1F5F9" font-family="'Lora', Georgia, serif" font-size="22" font-style="italic" font-weight="500" opacity="0.95" letter-spacing="0.5">
        ${escapeXml(subtitle)}
      </text>
    </g>

    <!-- Bottom Metadata Bar -->
    <g transform="translate(60, ${height - 70})">
      <rect width="160" height="30" rx="6" fill="rgba(255, 255, 255, 0.08)" stroke="rgba(255, 255, 255, 0.15)" stroke-width="1"/>
      <text x="80" y="20" fill="${pal.accent1}" font-family="'Outfit', sans-serif" font-size="13" font-weight="700" text-anchor="middle">
        🔥 98.9% RETENTION
      </text>
    </g>

    <text x="${width - 60}" y="${height - 50}" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="14" font-weight="700" text-anchor="end" opacity="0.8">
      US Serialized Entertainment • Read Full Story →
    </text>
  </svg>`;
}

// Generate all 12 rich story covers
const storyConfigs = [
  {
    slug: "the-discarded-heiress-billionaires-secret-vow",
    title: "THE DISCARDED HEIRESS",
    subtitle: "When the $90 Billion Vance Matriarch Returned",
    theme: "billionaire"
  },
  {
    slug: "the-shadow-billionaire-divorce-when-she-walked-away-with-half-the-city",
    title: "SHADOW BILLIONAIRE DIVORCE",
    subtitle: "When She Walked Away with Half the City",
    theme: "revenge"
  },
  {
    slug: "his-hidden-mafia-queen-the-undercover-waitress",
    title: "HIS HIDDEN MAFIA QUEEN",
    subtitle: "The Undercover Waitress of Diner 54",
    theme: "mafia"
  },
  {
    slug: "the-contract-marriage-when-the-crippled-ceo-walked",
    title: "THE CONTRACT MARRIAGE",
    subtitle: "When the Crippled CEO Walked",
    theme: "marriage"
  },
  {
    slug: "the-stolen-inheritance-the-billionaires-secret-will",
    title: "THE STOLEN INHERITANCE",
    subtitle: "The Billionaire's Holographic Secret Will",
    theme: "inheritance"
  },
  {
    slug: "shocking-secrets-the-dna-test-in-the-ballroom",
    title: "SHOCKING SECRETS",
    subtitle: "The Gala DNA Test Revelation",
    theme: "secrets"
  },
  {
    slug: "when-she-foreclosed-her-ex-husbands-hamptons-estate",
    title: "HAMPTONS FORECLOSURE",
    subtitle: "When She Seized Her Ex-Husband's $40M Estate",
    theme: "revenge"
  },
  {
    slug: "the-undercover-janitor-at-vance-global",
    title: "THE UNDERCOVER JANITOR",
    subtitle: "The Secret Founder of Vance Global",
    theme: "billionaire"
  },
  {
    slug: "the-dons-silent-guardian-the-10-year-debt",
    title: "DON'S SILENT GUARDIAN",
    subtitle: "The 10-Year Underworld Blood Oath",
    theme: "mafia"
  },
  {
    slug: "the-5-year-silent-wife-hamptons-gala-revenge",
    title: "THE 5-YEAR SILENT WIFE",
    subtitle: "The Hamptons Gala Imperial Rebirth",
    theme: "marriage"
  },
  {
    slug: "the-black-card-in-the-pawnshop",
    title: "BLACK CARD IN THE PAWNSHOP",
    subtitle: "The Centurion Sovereign Reveal",
    theme: "inheritance"
  },
  {
    slug: "the-governors-hidden-daughter-senate-hearing",
    title: "GOVERNOR'S HIDDEN DAUGHTER",
    subtitle: "Exposed at the Senate Hearing",
    theme: "secrets"
  }
];

storyConfigs.forEach(s => {
  const filePath = path.join(publicImagesDir, `${s.slug}-cover.svg`);
  const svg = createCinematicPosterSVG(s.title, s.subtitle, s.theme, s.theme);
  fs.writeFileSync(filePath, svg, 'utf8');
  console.log(`Generated poster for: ${s.title}`);
});

console.log("All 12 story posters successfully generated in public/images/!");
