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
