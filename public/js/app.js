/**
 * Taleonix • Premier US Drama Stories & Digital Media Network
 * Frictionless Netflix Streaming Homepage & Kindle Reading Architecture
 */

let allPubStories = [];
let currentViewingStory = null;
let activeSpeechUtterance = null;
let isNarrating = false;

document.addEventListener('DOMContentLoaded', () => {
  initPubPreferences();
  setupReadingProgress();
  handleClientRouting();
  loadPublicStories();
  window.addEventListener('popstate', handleClientRouting);
});

// ================= READING PROGRESS BAR =================
function setupReadingProgress() {
  window.addEventListener('scroll', () => {
    const readerView = document.getElementById('page-story-reader');
    const progressBar = document.getElementById('readingProgressBar');
    if (!readerView || !progressBar) return;

    if (readerView.classList.contains('active')) {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      progressBar.style.width = Math.min(100, Math.max(0, scrolled)) + '%';
    } else {
      progressBar.style.width = '0%';
    }
  });
}

// ================= HORIZONTAL CAROUSEL SCROLLER =================
function scrollTrack(trackId, direction) {
  const track = document.getElementById(trackId);
  if (track) {
    const scrollAmount = track.clientWidth * 0.75;
    track.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  }
}

function scrollToRows() {
  const target = document.getElementById('sectionTrending');
  if (target) target.scrollIntoView({ behavior: 'smooth' });
}

// ================= CLIENT ROUTING =================
function handleClientRouting() {
  const path = window.location.pathname;

  if (path.startsWith('/story/')) {
    const slug = path.replace('/story/', '').split('?')[0];
    showStoryReader(slug);
  } else if (path.startsWith('/category/')) {
    const cat = path.replace('/category/', '').split('?')[0];
    showCategoryArchive(cat);
  } else if (path === '/trending') {
    showCategoryArchive('trending');
  } else if (['/about', '/contact', '/privacy-policy', '/terms', '/disclaimer'].includes(path)) {
    showLegalPage(path.replace('/', ''));
  } else {
    showHomePage();
  }
}

function handleNavClick(e, path) {
  if (e) e.preventDefault();
  if (path !== window.location.pathname) {
    window.history.pushState({}, '', path);
  }
  handleClientRouting();
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Close mobile drawer if open
  const drawer = document.getElementById('mobileDrawer');
  if (drawer) drawer.classList.remove('open');
}

function toggleMobileNav() {
  const drawer = document.getElementById('mobileDrawer');
  if (drawer) drawer.classList.toggle('open');
}

// ================= DATA FETCHING =================
async function loadPublicStories() {
  try {
    const res = await fetch('/api/stories');
    const data = await res.json();
    if (data.success && data.stories) {
      allPubStories = data.stories;
      renderHomePage(allPubStories);
    }
  } catch (err) {
    console.error('Error loading stories:', err);
  }
}

// ================= NETFLIX-STYLE HOMEPAGE =================
function renderHomePage(stories) {
  if (!stories || stories.length === 0) return;

  // Group chapters into distinct sagas / series
  const seenSeries = new Set();
  const seriesStarters = [];

  stories.forEach(s => {
    const sid = s.seriesId || s.slug.replace(/-chapter-\d+|-part-\d+/g, '');
    if (!seenSeries.has(sid)) {
      seenSeries.add(sid);
      const chCount = stories.filter(st => (st.seriesId || st.slug.replace(/-chapter-\d+|-part-\d+/g, '')) === sid).length;
      seriesStarters.push({ ...s, totalChapters: Math.max(chCount, s.totalChapters || 6) });
    }
  });

  // 1. Resume Reading Banner (If reader has previous progress)
  checkResumeReading(stories);

  // 2. Cinematic Hero Spotlight (Featured #1 Saga)
  const heroStory = seriesStarters[0] || stories[0];
  const heroContainer = document.getElementById('heroSpotlight');
  if (heroContainer) {
    const heroImg = heroStory.coverImage || `/images/grad_envelope_confrontation_1788366860533.jpg`;
    heroContainer.innerHTML = `
      <img src="${heroImg}" alt="${heroStory.title}" class="hero-backdrop">
      <div class="hero-inner">
        <div class="hero-text-content">
          <div class="hero-pill-row">
            <span class="badge-gold"><i class="fa-solid fa-crown"></i> ${heroStory.totalChapters || 10}-PART MEGA SAGA</span>
            <span class="badge-cat">${heroStory.category || 'Family Secrets'}</span>
            <span class="badge-cat" style="color:#4ade80;"><i class="fa-solid fa-circle" style="font-size:0.5rem;"></i> 100% Free Complete</span>
          </div>
          <h1 class="hero-title">${heroStory.title}</h1>
          <p class="hero-synopsis">${heroStory.hookSummary || ''}</p>
          <div class="hero-meta-row">
            <span><i class="fa-regular fa-clock"></i> ${heroStory.readTime || '9 min read'}</span>
            <span><i class="fa-solid fa-book-open"></i> Full ${heroStory.totalChapters || 10} Chapters</span>
            <span><i class="fa-solid fa-fire text-gold"></i> #1 Top Trending in US</span>
          </div>
          <div class="hero-actions-row">
            <a href="/story/${heroStory.slug}" class="btn-hero-primary" onclick="handleNavClick(event, '/story/${heroStory.slug}')">
              <i class="fa-solid fa-play"></i> START CHAPTER 1 FREE
            </a>
            <button class="btn-hero-share" onclick="copyStoryShareLinkCustom('${heroStory.slug}')">
              <i class="fa-solid fa-share-nodes"></i> Share
            </button>
          </div>
        </div>
        <div class="hero-poster-wrap">
          <img src="${heroImg}" alt="${heroStory.title}" loading="lazy">
        </div>
      </div>
    `;
  }

  // 3. Populate Netflix-Style Horizontal Tracks
  renderNetflixTrack('rowTrending', seriesStarters);

  const familySagas = seriesStarters.filter(s => matchCat(s, 'family') || matchCat(s, 'secrets') || matchCat(s, 'mother') || matchCat(s, 'sister') || matchCat(s, 'graduation'));
  renderNetflixTrack('rowFamily', familySagas.length ? familySagas : seriesStarters);

  const billionaireSagas = seriesStarters.filter(s => matchCat(s, 'billionaire') || matchCat(s, 'revenge') || matchCat(s, 'prodigal') || matchCat(s, 'eviction'));
  renderNetflixTrack('rowBillionaire', billionaireSagas.length ? billionaireSagas : seriesStarters.slice().reverse());

  const inheritanceSagas = seriesStarters.filter(s => matchCat(s, 'inheritance') || matchCat(s, 'ledger') || matchCat(s, 'deed') || matchCat(s, 'kitchen') || matchCat(s, 'trash'));
  renderNetflixTrack('rowInheritance', inheritanceSagas.length ? inheritanceSagas : seriesStarters);
}

function renderNetflixTrack(trackId, sagasList) {
  const track = document.getElementById(trackId);
  if (!track) return;
  track.innerHTML = '';

  sagasList.forEach((s, idx) => {
    const card = document.createElement('a');
    card.className = 'netflix-card';
    card.href = `/story/${s.slug}`;
    card.onclick = (e) => handleNavClick(e, `/story/${s.slug}`);

    const coverSrc = s.coverImage || `/images/grad_frame_01.jpg`;
    const chapterBadge = s.totalChapters ? `${s.totalChapters} CHAPTERS` : (s.partNumber ? `CHAPTER ${s.partNumber}` : 'FULL STORY');

    card.innerHTML = `
      <div class="card-poster-frame">
        <img src="${coverSrc}" alt="${s.title}" loading="lazy" onerror="this.src='/images/the-graduation-envelope-mother-in-green-cover.jpg'">
        <span class="card-badge-top"><i class="fa-solid fa-crown text-gold"></i> ${chapterBadge}</span>
      </div>
      <div class="card-content">
        <span class="card-saga-category">${s.category || 'Family Drama'}</span>
        <h3 class="card-title">${s.title}</h3>
        <p class="card-hook">${s.hookSummary || ''}</p>
        <div class="card-footer-meta">
          <span><i class="fa-regular fa-clock"></i> ${s.readTime || '8 min read'}</span>
          <span class="card-cta-btn">Read Free →</span>
        </div>
      </div>
    `;
    track.appendChild(card);
  });
}

function checkResumeReading(stories) {
  const lastReadJson = localStorage.getItem('taleonix_last_read');
  const bar = document.getElementById('resumeReadingBar');
  if (!bar) return;

  if (lastReadJson) {
    try {
      const lastRead = JSON.parse(lastReadJson);
      const matched = stories.find(s => s.slug === lastRead.slug);
      if (matched) {
        bar.style.display = 'flex';
        bar.className = 'resume-reading-bar';
        bar.innerHTML = `
          <div class="resume-info">
            <div class="resume-icon"><i class="fa-solid fa-bookmark"></i></div>
            <div>
              <div class="resume-title">Resume Reading: ${matched.title}</div>
              <div class="resume-sub">Chapter ${matched.partNumber || 1} of ${matched.totalChapters || 6} • Click to pick up right where you left off</div>
            </div>
          </div>
          <a href="/story/${matched.slug}" class="btn-resume" onclick="handleNavClick(event, '/story/${matched.slug}')">
            Continue Reading <i class="fa-solid fa-arrow-right"></i>
          </a>
        `;
        return;
      }
    } catch(e) {}
  }
  bar.style.display = 'none';
}

function matchCat(story, keyword) {
  const str = `${story.category || ''} ${story.subcategory || ''} ${story.title || ''} ${(story.tags || []).join(' ')}`.toLowerCase();
  return str.includes(keyword.toLowerCase());
}

// ================= SINGLE STORY READING EXPERIENCE =================
async function showStoryReader(slug) {
  document.querySelectorAll('.pub-view').forEach(v => v.classList.remove('active'));
  document.getElementById('page-story-reader').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  try {
    const res = await fetch(`/api/stories/${slug}`);
    const data = await res.json();
    if (!data.success || !data.story) {
      showToast('Story not found');
      handleNavClick(null, '/');
      return;
    }

    const story = data.story;
    currentViewingStory = story;

    // Save reading progress to LocalStorage for "Resume Reading"
    localStorage.setItem('taleonix_last_read', JSON.stringify({
      slug: story.slug,
      title: story.title,
      partNumber: story.partNumber || 1,
      timestamp: Date.now()
    }));

    // Record view analytics
    const urlParams = new URLSearchParams(window.location.search);
    const utmCampaign = urlParams.get('utm_campaign') || 'direct';
    const utmSource = urlParams.get('utm_source') || (document.referrer.includes('facebook') ? 'facebook' : 'direct');

    fetch(`/api/stories/${slug}/view`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        utm_campaign: utmCampaign,
        utm_source: utmSource,
        referrer: document.referrer || (utmSource === 'facebook' ? 'Facebook Feed' : 'Direct Link'),
        device: navigator.userAgent.includes('Mobile') ? 'Mobile (iOS/Android)' : 'Desktop'
      })
    });

    document.getElementById('readerTitle').innerText = story.title;
    document.getElementById('readerSynopsis').innerText = story.hookSummary || '';
    document.getElementById('readerCategory').innerText = story.category || 'Billionaire Drama';
    document.getElementById('readerReadTime').innerText = story.readTime || '8 min read';
    document.getElementById('readerDate').innerText = new Date(story.publicationDate || Date.now()).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    document.getElementById('readerAuthor').innerText = story.author || 'Elena Vance';
    document.getElementById('readerCoverImg').src = story.coverImage || `/images/the-graduation-envelope-mother-in-green-cover.jpg`;

    const bodyEl = document.getElementById('readerBody');
    bodyEl.innerHTML = '';

    const paragraphs = story.paragraphs || [];
    let isFirstParagraph = true;

    paragraphs.forEach((pText, idx) => {
      // Check for Location Header Marker e.g. [ OAKRIDGE DRIVEWAY — 4:15 PM ]
      if (pText.startsWith('[') && pText.endsWith(']')) {
        const locMarker = document.createElement('div');
        locMarker.className = 'location-marker';
        locMarker.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${pText.replace(/[\[\]]/g, '').trim()}`;
        bodyEl.appendChild(locMarker);
        return;
      }

      const p = document.createElement('p');

      // Add Dropcap to first narrative paragraph
      if (isFirstParagraph && pText.length > 20) {
        const firstLetter = pText.charAt(0);
        const restOfText = pText.slice(1);
        p.innerHTML = `<span class="dropcap">${firstLetter}</span>${restOfText}`;
        isFirstParagraph = false;
      } else {
        p.innerText = pText;
      }

      bodyEl.appendChild(p);
    });

    // PART CONTINUATION & PREVIOUS EPISODE SYSTEM
    const part2Box = document.getElementById('partContinuationCard');
    const partBadge = document.getElementById('partCardBadge') || part2Box.querySelector('.part-card-badge');
    const partDesc = document.getElementById('partCardDesc') || part2Box.querySelector('.part-card-desc');
    const nextPartHook = document.getElementById('nextPartHook');
    const btnReadPart2 = document.getElementById('btnReadPart2');
    const btnReadPrevPart = document.getElementById('btnReadPrevPart');

    // Top Quick Access Previous Episode Banner
    const prevBanner = document.getElementById('prevEpisodeTopBanner');
    const btnTopReadPrev = document.getElementById('btnTopReadPrev');
    const prevChapterNum = document.getElementById('prevChapterNum');

    if (story.previousPartSlug) {
      const prevNum = Math.max(1, (story.partNumber || 2) - 1);
      if (prevBanner) {
        prevBanner.style.display = 'flex';
        if (prevChapterNum) prevChapterNum.innerText = prevNum;
        if (btnTopReadPrev) {
          btnTopReadPrev.href = `/story/${story.previousPartSlug}`;
          btnTopReadPrev.onclick = (e) => handleNavClick(e, `/story/${story.previousPartSlug}`);
        }
      }
      if (btnReadPrevPart) {
        btnReadPrevPart.style.display = 'inline-flex';
        btnReadPrevPart.innerHTML = `<i class="fa-solid fa-arrow-left"></i> ← READ CHAPTER ${prevNum}`;
        btnReadPrevPart.href = `/story/${story.previousPartSlug}`;
        btnReadPrevPart.onclick = (e) => handleNavClick(e, `/story/${story.previousPartSlug}`);
      }
    } else {
      if (prevBanner) prevBanner.style.display = 'none';
      if (btnReadPrevPart) btnReadPrevPart.style.display = 'none';
    }

    if (story.nextPartSlug) {
      part2Box.style.display = 'block';
      const currentPartNum = story.partNumber || 1;
      const nextPartNum = currentPartNum + 1;
      const isGrandFinale = story.nextPartSlug.includes('grand-finale') || story.nextPartSlug.includes('final');

      if (partBadge) {
        partBadge.innerHTML = isGrandFinale
          ? `<i class="fa-solid fa-crown"></i> CHAPTER ${nextPartNum} (GRAND FINALE) READY`
          : `<i class="fa-solid fa-fire"></i> CHAPTER ${nextPartNum} READY`;
      }

      nextPartHook.innerText = story.nextPartHook || `What happened in Chapter ${nextPartNum} shook the entire family...`;

      if (partDesc) {
        partDesc.innerText = isGrandFinale
          ? 'Experience the shocking conclusion, justice, and emotional climax in the Grand Finale.'
          : `Continue the story right now in Chapter ${nextPartNum} without interruption.`;
      }

      btnReadPart2.innerHTML = isGrandFinale
        ? `🔥 CONTINUE TO GRAND FINALE (CHAPTER ${nextPartNum}) →`
        : `🔥 CONTINUE TO CHAPTER ${nextPartNum} →`;

      btnReadPart2.href = `/story/${story.nextPartSlug}`;
      btnReadPart2.onclick = (e) => handleNavClick(e, `/story/${story.nextPartSlug}`);
    } else if (story.previousPartSlug) {
      part2Box.style.display = 'block';
      if (partBadge) {
        partBadge.innerHTML = '<i class="fa-solid fa-trophy"></i> SERIES CLIMAX COMPLETED';
      }
      nextPartHook.innerText = 'You have completed this entire drama saga!';
      if (partDesc) {
        partDesc.innerText = 'Binge another bestselling viral drama series from our trending collection.';
      }
      btnReadPart2.innerHTML = 'BINGE NEXT VIRAL SAGA →';
      btnReadPart2.href = '/trending';
      btnReadPart2.onclick = (e) => handleNavClick(e, '/trending');
    } else {
      part2Box.style.display = 'block';
      if (partBadge) {
        partBadge.innerHTML = '<i class="fa-solid fa-book-open"></i> NEXT EPISODE COMING SOON';
      }
      nextPartHook.innerText = '⚡ Next chapter is currently in editorial production.';
      if (partDesc) {
        partDesc.innerText = 'Explore our top trending serialized stories while the next chapter is prepared.';
      }
      btnReadPart2.innerHTML = 'EXPLORE MORE STORIES →';
      btnReadPart2.href = '/trending';
      btnReadPart2.onclick = (e) => handleNavClick(e, '/trending');
    }

    // Related Stories
    const relatedContainer = document.getElementById('relatedStoriesGrid');
    if (relatedContainer) {
      relatedContainer.innerHTML = '';
      const related = data.relatedStories || [];
      related.forEach(r => {
        const item = document.createElement('a');
        item.className = 'netflix-card';
        item.href = `/story/${r.slug}`;
        item.onclick = (e) => handleNavClick(e, `/story/${r.slug}`);
        item.innerHTML = `
          <div class="card-poster-frame">
            <img src="${r.coverImage || `/images/the-graduation-envelope-mother-in-green-cover.jpg`}" alt="${r.title}" loading="lazy">
          </div>
          <div class="card-content">
            <span class="card-saga-category">${r.category || 'Drama'}</span>
            <h4 class="card-title">${r.title}</h4>
            <div class="card-footer-meta">
              <span>Read Free →</span>
            </div>
          </div>
        `;
        relatedContainer.appendChild(item);
      });
    }

  } catch (err) {
    console.error('Error loading story:', err);
  }
}

// ================= CATEGORY ARCHIVE =================
function showCategoryArchive(category) {
  document.querySelectorAll('.pub-view').forEach(v => v.classList.remove('active'));
  document.getElementById('page-category').classList.add('active');

  const titleEl = document.getElementById('archiveTitle');
  const badgeEl = document.getElementById('archiveCatBadge');
  const descEl = document.getElementById('archiveDesc');

  badgeEl.innerText = category.toUpperCase();
  titleEl.innerText = category === 'trending' ? '🔥 Top Trending Sagas' : `${category.charAt(0).toUpperCase() + category.slice(1)} Drama Series`;
  descEl.innerText = `Binge all serialized episodes in this collection. Completely free for US readers.`;

  let filtered = allPubStories;
  if (category !== 'trending') {
    filtered = allPubStories.filter(s => matchCat(s, category));
  }
  renderCardGrid('archiveGrid', filtered.length ? filtered : allPubStories);
}

function showHomePage() {
  document.querySelectorAll('.pub-view').forEach(v => v.classList.remove('active'));
  document.getElementById('page-home').classList.add('active');
  if (allPubStories.length > 0) renderHomePage(allPubStories);
}

function renderCardGrid(elementId, storiesList) {
  const container = document.getElementById(elementId);
  if (!container) return;
  container.innerHTML = '';

  storiesList.forEach(s => {
    const card = document.createElement('a');
    card.className = 'netflix-card';
    card.href = `/story/${s.slug}`;
    card.onclick = (e) => handleNavClick(e, `/story/${s.slug}`);
    
    const coverSrc = s.coverImage || `/images/the-graduation-envelope-mother-in-green-cover.jpg`;
    const chapterBadge = s.totalChapters ? `${s.totalChapters} CHAPTERS` : (s.partNumber ? `CHAPTER ${s.partNumber}` : 'FULL STORY');

    card.innerHTML = `
      <div class="card-poster-frame">
        <img src="${coverSrc}" alt="${s.title}" loading="lazy">
        <span class="card-badge-top">${chapterBadge}</span>
      </div>
      <div class="card-content">
        <span class="card-saga-category">${s.category || 'Drama'}</span>
        <h3 class="card-title">${s.title}</h3>
        <p class="card-hook">${s.hookSummary || ''}</p>
        <div class="card-footer-meta">
          <span>${s.readTime || '8 min read'}</span>
          <span class="card-cta-btn">Read Free →</span>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// ================= ACCESSIBILITY & READING PREFERENCES =================
function initPubPreferences() {
  const savedScale = localStorage.getItem('taleonix_font_scale') || 'large';
  const savedTheme = localStorage.getItem('taleonix_theme') || 'dark';
  setFontScale(savedScale, false);
  setReadingTheme(savedTheme, false);
}

function setFontScale(scale, save = true) {
  const bodyEl = document.getElementById('readerBody');
  if (bodyEl) {
    if (scale === 'normal') {
      bodyEl.style.setProperty('--reader-font-size', '1.1rem');
      bodyEl.style.setProperty('--reader-line-height', '1.75');
    } else if (scale === 'large') {
      bodyEl.style.setProperty('--reader-font-size', '1.25rem');
      bodyEl.style.setProperty('--reader-line-height', '1.85');
    } else if (scale === 'xlarge') {
      bodyEl.style.setProperty('--reader-font-size', '1.45rem');
      bodyEl.style.setProperty('--reader-line-height', '1.95');
    }
  }
  document.querySelectorAll('.tool-btn').forEach(b => {
    if (b.id && b.id.includes('Scale')) b.classList.remove('active');
  });
  const activeBtn = document.getElementById(scale === 'normal' ? 'btnScaleNormal' : scale === 'large' ? 'btnScaleLarge' : 'btnScaleXLarge');
  if (activeBtn) activeBtn.classList.add('active');
  if (save) localStorage.setItem('taleonix_font_scale', scale);
}

function setReadingTheme(theme, save = true) {
  document.body.classList.remove('theme-dark', 'theme-sepia', 'theme-light');
  document.body.classList.add(`theme-${theme}`);

  document.querySelectorAll('.tool-btn').forEach(b => {
    if (b.id && b.id.includes('Theme')) b.classList.remove('active');
  });
  const activeBtn = document.getElementById(theme === 'dark' ? 'btnThemeDark' : theme === 'sepia' ? 'btnThemeSepia' : 'btnThemeLight');
  if (activeBtn) activeBtn.classList.add('active');
  if (save) localStorage.setItem('taleonix_theme', theme);
}

// ================= AUDIO SPEECH SYNTHESIS =================
function toggleSpeechNarration() {
  const btn = document.getElementById('btnAudioPlayer');
  if (!('speechSynthesis' in window)) {
    showToast('Speech narration is not supported in this browser.');
    return;
  }

  if (isNarrating) {
    window.speechSynthesis.cancel();
    isNarrating = false;
    if (btn) btn.innerHTML = '<i class="fa-solid fa-circle-play"></i> <span>Listen</span>';
    showToast('Audio narration paused');
  } else {
    const bodyEl = document.getElementById('readerBody');
    if (!bodyEl) return;
    const textToRead = (currentViewingStory ? currentViewingStory.title + '. ' : '') + bodyEl.innerText;
    
    activeSpeechUtterance = new SpeechSynthesisUtterance(textToRead);
    activeSpeechUtterance.rate = 0.95;
    activeSpeechUtterance.pitch = 1.0;

    activeSpeechUtterance.onend = () => {
      isNarrating = false;
      if (btn) btn.innerHTML = '<i class="fa-solid fa-circle-play"></i> <span>Listen</span>';
    };

    window.speechSynthesis.speak(activeSpeechUtterance);
    isNarrating = true;
    if (btn) btn.innerHTML = '<i class="fa-solid fa-circle-pause"></i> <span>Pause</span>';
    showToast('Playing audio narration 🎙️');
  }
}

// ================= UTILITIES & TOASTS =================
function copyStoryShareLink() {
  let url = window.location.href;
  if (url.includes('localhost')) {
    url = url.replace(/https?:\/\/localhost:\d+/, 'https://drama-online.onrender.com');
  }
  navigator.clipboard.writeText(url);
  showToast('Story link copied to clipboard! Ready to share 🎉');
}

function copyStoryShareLinkCustom(slug) {
  const url = `https://drama-online.onrender.com/story/${slug}`;
  navigator.clipboard.writeText(url);
  showToast('Saga link copied to clipboard! 🎉');
}

function copyStoryLink() {
  copyStoryShareLink();
}

function shareSocial(network) {
  let url = window.location.href;
  if (url.includes('localhost')) url = url.replace(/https?:\/\/localhost:\d+/, 'https://drama-online.onrender.com');
  if (network === 'facebook') {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
  }
}

function showToast(msg) {
  let toast = document.getElementById('publicToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'publicToast';
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }
  toast.innerText = msg;
  toast.style.display = 'block';
  setTimeout(() => { toast.style.display = 'none'; }, 3000);
}

function handleEmailSubscription(e) {
  e.preventDefault();
  const input = document.getElementById('inputReaderEmail');
  if (!input || !input.value) return;

  fetch('/api/subscribers', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: input.value, storySlug: currentViewingStory ? currentViewingStory.slug : 'general' })
  })
  .then(r => r.json())
  .then(() => {
    input.value = '';
    showToast('Subscribed! You will receive episode alerts for new chapters 🎉');
  })
  .catch(() => {
    input.value = '';
    showToast('Thank you for subscribing! 🎉');
  });
}

// ================= LEGAL & TRUST PAGES RENDERER =================
function showLegalPage(pageKey) {
  // Hide all views, activate #page-legal
  document.querySelectorAll('.pub-view').forEach(v => v.classList.remove('active'));
  const legalView = document.getElementById('page-legal');
  if (legalView) legalView.classList.add('active');

  // Update active state in sidebar
  document.querySelectorAll('.legal-nav-item').forEach(item => {
    item.classList.remove('active');
  });
  const activeNav = document.getElementById(`nav-${pageKey}`);
  if (activeNav) activeNav.classList.add('active');

  const container = document.getElementById('legalArticleContent');
  if (!container) return;

  // Stop any active speech narration
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  isNarrating = false;

  const pages = {
    'privacy-policy': {
      title: 'Privacy Policy',
      badge: 'Data Protection & Cookies',
      meta: 'Last Updated: September 2026 • Compliant with Google AdSense, GDPR & CCPA',
      content: `
        <div class="legal-body-content">
          <p>At <strong>Taleonix</strong> (accessible from <a href="/">taleonix.com</a> or our affiliated network domains), the privacy of our visitors is of paramount importance to us. This Privacy Policy document outlines the types of personal information that is collected and recorded by Taleonix and how we utilize and protect it.</p>

          <div class="legal-highlight-box">
            <strong>Key Summary:</strong> We respect your digital privacy. We do not sell your personal data. We use standard web analytics and industry-standard third-party advertising partners (such as Google AdSense) to keep our serialized stories 100% free to read.
          </div>

          <h2>1. Information We Collect</h2>
          <p>Like most modern websites, Taleonix follows standard procedures for utilizing log files and basic telemetry. The information collected includes:</p>
          <ul>
            <li>Internet Protocol (IP) addresses and geographic country estimates</li>
            <li>Browser type, device classification (iOS, Android, Desktop), and Operating System</li>
            <li>Internet Service Provider (ISP)</li>
            <li>Date and time stamps of page visits</li>
            <li>Referring/exit pages and reader navigation progression</li>
            <li>Voluntarily submitted contact details (e.g., email addresses for chapter release alerts)</li>
          </ul>

          <h2 id="cookies">2. Google AdSense & Cookies Policy</h2>
          <p>Taleonix utilizes cookies to store information about visitors' preferences, to record user-specific information on which pages the reader accesses, and to customize web page content based on visitors' browser type or other information that the visitor sends via their browser.</p>

          <h3>Google DoubleClick DART Cookie</h3>
          <p>Google is one of our third-party vendors on our site. It also uses cookies, known as <strong>DART cookies</strong>, to serve ads to our site visitors based upon their visit to Taleonix and other sites on the internet.</p>
          <p>Visitors may choose to opt out of the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL: <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener">https://policies.google.com/technologies/ads</a></p>

          <h3>Our Advertising Partners</h3>
          <p>Some of our advertisers on our site may use cookies and web beacons. Our primary advertising partner is <strong>Google AdSense (Publisher ID: pub-3806896432302528)</strong>. Third-party ad servers or ad networks use technology in their respective advertisements and links that appear on Taleonix, which are sent directly to your browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see.</p>

          <h2>3. CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
          <p>Under the California Consumer Privacy Act (CCPA), California consumers have the right to:</p>
          <ul>
            <li>Request that a business disclose the categories and specific pieces of personal data collected about consumers.</li>
            <li>Request that a business delete any personal data about the consumer that a business collected.</li>
            <li>Request that a business that sells a consumer's personal data, not sell the consumer's personal data (Taleonix does not sell user data).</li>
          </ul>

          <h2>4. GDPR Data Protection Rights</h2>
          <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
          <ul>
            <li><strong>The right to access</strong> – You have the right to request copies of your personal data.</li>
            <li><strong>The right to rectification</strong> – You have the right to request that we correct any information you believe is inaccurate.</li>
            <li><strong>The right to erasure</strong> – You have the right to request that we erase your personal data under certain conditions.</li>
          </ul>

          <h2>5. Children's Online Privacy Protection (COPPA)</h2>
          <p>Another part of our priority is adding protection for children while using the internet. Taleonix is an editorial fiction platform designed for general audiences and adult readers (aged 18+). We do not knowingly collect any Personal Identifiable Information from children under the age of 13. If you believe that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will promptly remove such information.</p>

          <h2>6. Contact Our Data Protection Officer</h2>
          <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at <a href="mailto:privacy@taleonix.com">privacy@taleonix.com</a> or via our <a href="/contact" onclick="handleNavClick(event, '/contact')">Contact Page</a>.</p>
        </div>
      `
    },
    'about': {
      title: 'About Taleonix',
      badge: 'Editorial & Mission',
      meta: 'Published by Taleonix Media Network • US Serial Fiction',
      content: `
        <div class="legal-body-content">
          <p><strong>Taleonix</strong> is a premier American digital publishing platform dedicated to serialized fiction, high-stakes family dramas, billionaire romance, and viral cliffhanger storytelling.</p>
          
          <div class="legal-highlight-box">
            <strong>Our Mission:</strong> To revive the golden era of episodic storytelling for the digital age — providing deep, character-driven narratives with unforgettable moral questions, emotional depth, and high-retention reading experiences.
          </div>

          <h2>Our Editorial Philosophy</h2>
          <p>Every story published on Taleonix is crafted with meticulous attention to pacing, character psychology, and cinematic realism. We believe that great drama is not just about shock value — it is about the choices human beings make when pressed by loyalty, betrayal, family secrets, and retribution.</p>
          <p>Our multi-chapter sagas feature extensive world-building, authentic dialogue, and multi-part continuations that allow readers to binge uninterrupted without subscription paywalls.</p>

          <h2 id="editorial-team">The Taleonix Storytelling Collective</h2>
          <p>Our editorial board and contributing authors bring decades of combined experience in screenwriting, novel writing, and contemporary American drama:</p>

          <div class="legal-authors-grid">
            <div class="author-profile-box">
              <div class="author-profile-avatar"><i class="fa-solid fa-pen-nib"></i></div>
              <div class="author-profile-info">
                <h4>Elena Vance</h4>
                <span class="author-role">Lead Drama & Family Fiction Editor</span>
                <p>Specializes in domestic realism, in-law confrontations, and multi-generational inheritance sagas.</p>
              </div>
            </div>

            <div class="author-profile-box">
              <div class="author-profile-avatar" style="background:linear-gradient(135deg,#f59e0b,#b45309);"><i class="fa-solid fa-feather"></i></div>
              <div class="author-profile-info">
                <h4>Marcus Sterling</h4>
                <span class="author-role">Senior Suspense & Revenge Author</span>
                <p>Focuses on billionaire undercover founders, boardroom betrayals, and high-society justice.</p>
              </div>
            </div>

            <div class="author-profile-box">
              <div class="author-profile-avatar" style="background:linear-gradient(135deg,#10b981,#047857);"><i class="fa-solid fa-book-open"></i></div>
              <div class="author-profile-info">
                <h4>Diana Ross-Cross</h4>
                <span class="author-role">Senior Narrative Director</span>
                <p>Oversees episodic story arcs, character bibles, and cliffhanger continuity across all series.</p>
              </div>
            </div>
          </div>

          <h2>Commitment to Free Access</h2>
          <p>Taleonix is funded through non-intrusive, privacy-compliant digital advertising. We never charge readers per chapter, and we never hide our Grand Finales behind mandatory coin systems. All chapters are freely accessible to our readers worldwide.</p>
        </div>
      `
    },
    'contact': {
      title: 'Contact Us',
      badge: 'Editorial & Reader Support',
      meta: 'Response Time: Within 24-48 Hours • Available Mon-Fri',
      content: `
        <div class="legal-body-content">
          <p>Have a question about one of our serialized sagas, an editorial suggestion, press inquiry, or technical feedback? We would love to hear from you. Please use the form below or contact our team directly.</p>

          <form class="contact-form-card" onsubmit="handleContactSubmit(event)" style="margin: 28px 0; background: var(--bg-surface-elevated); padding: 28px; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
            <div class="contact-form-grid">
              <div class="form-group">
                <label for="contactName">Your Name *</label>
                <input type="text" id="contactName" class="form-control" placeholder="e.g. Sarah Jenkins" required>
              </div>
              <div class="form-group">
                <label for="contactEmail">Your Email Address *</label>
                <input type="email" id="contactEmail" class="form-control" placeholder="e.g. sarah@example.com" required>
              </div>
            </div>

            <div class="form-group">
              <label for="contactTopic">Inquiry Topic *</label>
              <select id="contactTopic" class="form-control" required>
                <option value="story-feedback">Story Feedback & Suggestions</option>
                <option value="licensing">Licensing, Adaptation & Press</option>
                <option value="advertising">Advertising & Google AdSense Inquiries</option>
                <option value="dmca">DMCA & Copyright Clearance</option>
                <option value="technical">Technical Support / Bug Report</option>
              </select>
            </div>

            <div class="form-group">
              <label for="contactMessage">Your Message *</label>
              <textarea id="contactMessage" rows="5" class="form-control" placeholder="Write your message here..." required></textarea>
            </div>

            <button type="submit" class="btn-contact-submit" id="btnSubmitContact">
              <i class="fa-solid fa-paper-plane"></i> Send Message
            </button>
          </form>

          <h2>Direct Department Inquiries</h2>
          <ul>
            <li><strong>General & Reader Support:</strong> <a href="mailto:contact@taleonix.com">contact@taleonix.com</a></li>
            <li><strong>Editorial Board & Story Submissions:</strong> <a href="mailto:editorial@taleonix.com">editorial@taleonix.com</a></li>
            <li><strong>Copyright & DMCA Agent:</strong> <a href="mailto:dmca@taleonix.com">dmca@taleonix.com</a></li>
            <li><strong>Advertising & Partnerships:</strong> <a href="mailto:ads@taleonix.com">ads@taleonix.com</a></li>
          </ul>
        </div>
      `
    },
    'terms': {
      title: 'Terms of Service',
      badge: 'Legal Terms',
      meta: 'Effective Date: September 2026 • Please read carefully',
      content: `
        <div class="legal-body-content">
          <p>Welcome to <strong>Taleonix</strong>. By accessing or using our website, reading serialized chapters, or subscribing to notification services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.</p>

          <h2>1. Intellectual Property & Copyright</h2>
          <p>All content published on Taleonix — including but not limited to serialized story chapters, characters, dialogues, titles, cover illustrations, graphical assets, and software code — is the exclusive intellectual property of Taleonix Media Network and its contributing authors, protected by United States and international copyright laws.</p>
          <p>You may read, share links to, and discuss our stories for personal, non-commercial entertainment. You may not republish, reproduce, scrape, modify, or distribute full chapters or text without prior written permission from Taleonix.</p>

          <h2>2. User Conduct & Reader Discussions</h2>
          <p>When participating in discussions, polls, or sharing feedback, you agree not to:</p>
          <ul>
            <li>Submit defamatory, harassing, abusive, or discriminatory comments.</li>
            <li>Attempt to disrupt website operations, spam comment feeds, or bypass security features.</li>
            <li>Transmit harmful code, automated scraping bots, or malware.</li>
          </ul>

          <h2>3. Advertisements & Third-Party Links</h2>
          <p>Taleonix displays advertisements served by third parties, including Google AdSense. We do not endorse or assume liability for third-party products, services, or websites advertised on our platform. Your interactions with advertisers are solely between you and the respective third party.</p>

          <h2>4. Disclaimer of Warranties & Limitation of Liability</h2>
          <p>Taleonix provides all content and services on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind. In no event shall Taleonix Media Network, its editors, or authors be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our platform.</p>

          <h2>5. Governing Law</h2>
          <p>These terms shall be governed by and construed in accordance with the laws of the United States. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the competent courts.</p>
        </div>
      `
    },
    'disclaimer': {
      title: 'Disclaimer & DMCA Policy',
      badge: 'Copyright & Content Notice',
      meta: 'Official Content Notice & Copyright Policy',
      content: `
        <div class="legal-body-content">
          <div class="legal-highlight-box">
            <strong>Work of Fiction Notice:</strong> All stories, characters, dialogues, and events depicted on Taleonix are entirely works of fiction. Any resemblance to real persons, living or dead, or actual events is purely coincidental.
          </div>

          <h2>1. General Entertainment Disclaimer</h2>
          <p>The stories published on Taleonix are produced for entertainment and literary appreciation. Opinions, moral dilemmas, and actions expressed by characters in our stories do not reflect the personal views of Taleonix Media Network or its management.</p>

          <h2>2. DMCA Copyright Notice & Takedown Policy</h2>
          <p>Taleonix respects the intellectual property rights of others and complies with the provisions of the Digital Millennium Copyright Act (DMCA). If you believe in good faith that any content or media appearing on our website infringes upon your copyrighted work, you or your designated agent may send us a formal DMCA takedown notification containing the following information:</p>
          <ol>
            <li>A physical or electronic signature of a person authorized to act on behalf of the copyright owner.</li>
            <li>Identification of the copyrighted work claimed to have been infringed.</li>
            <li>Identification of the material that is claimed to be infringing and information reasonably sufficient to permit us to locate the material (e.g., exact URL).</li>
            <li>Your contact information, including full name, physical address, telephone number, and email address.</li>
            <li>A statement that you have a good-faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.</li>
            <li>A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the copyright owner.</li>
          </ol>

          <h2>3. Submitting a DMCA Notice</h2>
          <p>Please send all formal copyright notices and DMCA communications to our designated Copyright Agent:</p>
          <p>
            <strong>Taleonix Media Network — DMCA Agent</strong><br>
            Email: <a href="mailto:dmca@taleonix.com">dmca@taleonix.com</a><br>
            Address: Taleonix Digital Media Network, Legal & Compliance Dept.
          </p>
          <p>Upon receiving a valid and complete notification, we will review the matter expeditiously and take appropriate action, including the prompt removal of the disputed content where justified.</p>
        </div>
      `
    }
  };

  const page = pages[pageKey] || pages['privacy-policy'];

  container.innerHTML = `
    <header class="legal-header">
      <span class="legal-badge"><i class="fa-solid fa-file-lines"></i> ${page.badge}</span>
      <h1 style="margin-top: 14px;">${page.title}</h1>
      <div class="legal-meta-row">
        <span><i class="fa-regular fa-clock"></i> ${page.meta}</span>
      </div>
    </header>
    ${page.content}
  `;

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ================= CONTACT FORM SUBMIT HANDLER =================
async function handleContactSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('btnSubmitContact');
  const name = document.getElementById('contactName')?.value;
  const email = document.getElementById('contactEmail')?.value;
  const topic = document.getElementById('contactTopic')?.value;
  const message = document.getElementById('contactMessage')?.value;

  if (!email || !message) return;

  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
  }

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, topic, message })
    });
    const data = await res.json();
    if (data.success) {
      showToast('Message sent! Our editorial team will get back to you shortly.');
      e.target.reset();
    } else {
      showToast('Thank you! Your inquiry has been received.');
      e.target.reset();
    }
  } catch (err) {
    showToast('Thank you! Your message has been sent to editorial@taleonix.com');
    e.target.reset();
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
    }
  }
}

