const fs = require('fs');
const path = require('path');
const https = require('https');
const db = require('./server/db');

const imagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });

const REAL_DRAMA_IMAGES = [
  {
    slug: "the-discarded-heiress-billionaires-secret-vow",
    url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80", // Glamorous intense woman
    fallbackUrl: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "the-shadow-billionaire-divorce-when-she-walked-away-with-half-the-city",
    url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80", // Female billionaire CEO
    fallbackUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "his-hidden-mafia-queen-the-undercover-waitress",
    url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80", // Undercover action heroine
    fallbackUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "the-contract-marriage-when-the-crippled-ceo-walked",
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80", // Handsome CEO in suit
    fallbackUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "the-stolen-inheritance-the-billionaires-secret-will",
    url: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80", // Wealthy estate / legal drama
    fallbackUrl: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "shocking-secrets-the-dna-test-in-the-ballroom",
    url: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80", // Society Gala Ballroom
    fallbackUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "when-she-foreclosed-her-ex-husbands-hamptons-estate",
    url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80", // Luxury Hamptons mansion
    fallbackUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "the-undercover-janitor-at-vance-global",
    url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80", // Vance Global Skyscraper
    fallbackUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "the-dons-silent-guardian-the-10-year-debt",
    url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80", // Mafia Guardian in rain
    fallbackUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "the-5-year-silent-wife-hamptons-gala-revenge",
    url: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=1200&q=80", // Glamorous gala revenge
    fallbackUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "the-black-card-in-the-pawnshop",
    url: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80", // Secret Centurion Card / wealth
    fallbackUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "the-governors-hidden-daughter-senate-hearing",
    url: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80", // Woman lawyer at Senate hearing
    fallbackUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80"
  }
];

function downloadImage(url, destPath) {
  return new Promise((resolve) => {
    const file = fs.createWriteStream(destPath);
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve(true);
        });
      } else if (response.statusCode === 302 || response.statusCode === 301) {
        // Handle redirect
        https.get(response.headers.location, (redirRes) => {
          redirRes.pipe(file);
          file.on('finish', () => {
            file.close();
            resolve(true);
          });
        }).on('error', () => resolve(false));
      } else {
        file.close();
        resolve(false);
      }
    }).on('error', () => {
      file.close();
      resolve(false);
    });
  });
}

async function run() {
  console.log("Downloading real cinematic drama photography...");
  const stories = db.getStories();

  for (const item of REAL_DRAMA_IMAGES) {
    const fileName = `${item.slug}.jpg`;
    const destPath = path.join(imagesDir, fileName);
    
    console.log(`Downloading for: ${item.slug}...`);
    const success = await downloadImage(item.url, destPath);
    
    // Update story object in database
    const matchedStory = stories.find(s => s.slug === item.slug);
    if (matchedStory) {
      if (success) {
        matchedStory.coverImage = `/images/${fileName}`;
      } else {
        matchedStory.coverImage = item.url; // Direct CDN URL
      }
    }
  }

  db.saveStories(stories);
  console.log("Successfully attached real cinematic drama photos to all stories!");
}

run();
