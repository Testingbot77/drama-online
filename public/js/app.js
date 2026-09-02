let allPubStories = [];
let currentViewingStory = null;
let isAudioPlaying = false;
let speechSynth = null;

document.addEventListener('DOMContentLoaded', () => {
  initPubPreferences();
  initRouter();
  loadAllStories();
});

// ================= ROUTING & DIRECT STORY URLS =================
function initRouter() {
  handleRoute(window.location.pathname, false);

  window.addEventListener('popstate', () => {
    handleRoute(window.location.pathname, false);
  });
}

function handleNavClick(e, path) {
  if (e) e.preventDefault();
  window.history.pushState({}, '', path);
  handleRoute(path, true);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleRoute(path, shouldScroll = true) {
  path = path || window.location.pathname || '/';
  if (path.startsWith('/admin')) {
    window.location.href = '/admin/';
    return;
  }
  const drawer = document.getElementById('mobileDrawer');
  if (drawer) drawer.classList.remove('open');

  if (isAudioPlaying && window.speechSynthesis) {
    window.speechSynthesis.cancel();
    isAudioPlaying = false;
    const btn = document.getElementById('btnAudioPlayer');
    if (btn) btn.innerHTML = '<i class="fa-solid fa-circle-play"></i> <span>Listen to Story (Audio)</span>';
  }

  document.querySelectorAll('.category-nav .nav-item').forEach(item => {
    const href = item.getAttribute('href');
    if (href && (href === path || (path.startsWith('/category') && href.includes(path.split('/')[2])))) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

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

  if (shouldScroll) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function showHomePage() {
  document.querySelectorAll('.pub-view').forEach(v => v.classList.remove('active'));
  document.getElementById('page-home').classList.add('active');
  if (allPubStories.length > 0) {
    renderHomeComponents(allPubStories);
  }
}

// ================= API: FETCH STORIES =================
async function loadAllStories() {
  try {
    const res = await fetch('/api/stories');
    const data = await res.json();
    if (data.success && data.stories) {
      allPubStories = data.stories;
      handleRoute(window.location.pathname, false);
    }
  } catch (err) {
    console.error('Error fetching stories:', err);
  }
}

// ================= HOMEPAGE RENDERING =================
function renderHomeComponents(stories) {
  if (!stories || stories.length === 0) return;

  // Extract unique Series Starters (Chapter 1 of each distinct series)
  const seriesStarters = [];
  const seenSeries = new Set();

  stories.forEach(s => {
    const sid = s.seriesId || s.slug;
    if (!seenSeries.has(sid)) {
      seenSeries.add(sid);
      const chCount = stories.filter(st => (st.seriesId || st.slug) === sid).length;
      seriesStarters.push({ ...s, totalChapters: chCount });
    }
  });

  // 1. Hero Featured Story (First series starter)
  const heroStory = seriesStarters[0] || stories[0];
  const heroContainer = document.getElementById('heroCard');
  if (heroContainer) {
    const heroImg = heroStory.coverImage || `/images/${heroStory.slug}.jpg`;
    heroContainer.innerHTML = `
      <div class="hero-content-col">
        <div class="hero-badge-row">
          <span class="badge-gold"><i class="fa-solid fa-crown"></i> ${heroStory.totalChapters || 10} CHAPTERS MEGA SAGA</span>
          <span class="badge-cat">${heroStory.category || 'Family Secrets'}</span>
        </div>
        <h1 class="hero-title">${heroStory.title}</h1>
        <p class="hero-synopsis">${heroStory.hookSummary || ''}</p>
        <div class="hero-meta-row">
          <span><i class="fa-regular fa-clock"></i> ${heroStory.readTime || '9 min read'}</span>
          <span><i class="fa-solid fa-eye"></i> ${(heroStory.views || 0).toLocaleString()} readers</span>
          <span><i class="fa-solid fa-book-open"></i> Full ${heroStory.totalChapters || 10} Chapters</span>
        </div>
        <div class="hero-cta-actions">
          <a href="/story/${heroStory.slug}" class="btn-read-hero" onclick="handleNavClick(event, '/story/${heroStory.slug}')">
            <i class="fa-solid fa-book-open"></i> START READING CHAPTER 1
          </a>
        </div>
      </div>
      <div class="hero-image-col">
        <img src="${heroImg}" alt="${heroStory.title}" loading="lazy">
      </div>
    `;
  }

  // 2. Trending Now Grid (Shows all 8 Series Starters!)
  renderCardGrid('trendingStoriesGrid', seriesStarters);

  // 3. Most Read Today Sidebar (Shows all series starters)
  const mostReadStories = [...seriesStarters].sort((a, b) => (b.views || 0) - (a.views || 0)).slice(0, 6);
  const mostReadContainer = document.getElementById('mostReadSidebarList');
  if (mostReadContainer) {
    mostReadContainer.innerHTML = '';
    mostReadStories.forEach((s, idx) => {
      const item = document.createElement('a');
      item.className = 'most-read-item';
      item.href = `/story/${s.slug}`;
      item.onclick = (e) => handleNavClick(e, `/story/${s.slug}`);
      item.innerHTML = `
        <span class="most-read-num">0${idx + 1}</span>
        <div>
          <div class="most-read-title">${s.title}</div>
          <div class="most-read-meta">${s.category || 'Drama'} • ${s.totalChapters || 6} Chapters</div>
        </div>
      `;
      mostReadContainer.appendChild(item);
    });
  }

  // 4. Category Grids (Using distinct series starters)
  const family = seriesStarters.filter(s => matchCat(s, 'family') || matchCat(s, 'secrets') || matchCat(s, 'relationships'));
  const inheritance = seriesStarters.filter(s => matchCat(s, 'inheritance') || matchCat(s, 'money'));
  const justice = seriesStarters.filter(s => matchCat(s, 'courtroom') || matchCat(s, 'justice') || matchCat(s, 'feud'));
  const redemption = seriesStarters.filter(s => matchCat(s, 'redemption') || matchCat(s, 'revenge') || matchCat(s, 'secrets'));

  renderCardGrid('gridMarriage', family.length ? family : seriesStarters.slice(0, 4));
  renderCardGrid('gridBetrayal', redemption.length ? redemption : seriesStarters.slice(2, 6));
  renderCardGrid('gridInheritance', inheritance.length ? inheritance : seriesStarters.slice(1, 5));
  renderCardGrid('gridBillionaire', justice.length ? justice : seriesStarters.slice(4, 8));
  renderCardGrid('gridMoreStories', seriesStarters);
}

function renderCardGrid(elementId, storiesList) {
  const container = document.getElementById(elementId);
  if (!container) return;
  container.innerHTML = '';

  if (!storiesList || storiesList.length === 0) {
    container.innerHTML = '<p style="color: var(--text-muted); padding: 20px;">No stories available in this category.</p>';
    return;
  }

  storiesList.forEach(s => {
    const card = document.createElement('a');
    card.className = 'story-card';
    card.href = `/story/${s.slug}`;
    card.onclick = (e) => handleNavClick(e, `/story/${s.slug}`);
    
    const coverSrc = s.coverImage || `/images/${s.slug}.jpg`;
    const chapterBadge = s.totalChapters ? `${s.totalChapters} CHAPTERS` : (s.partNumber ? `CHAPTER ${s.partNumber}` : 'FULL STORY');

    card.innerHTML = `
      <div class="card-thumb-wrap">
        <img src="${coverSrc}" alt="${s.title}" loading="lazy" onerror="this.src='/images/grad_frame_01.jpg'">
        <div class="card-thumb-overlay">
          <span class="thumb-badge"><i class="fa-solid fa-book-bookmark"></i> ${chapterBadge}</span>
        </div>
      </div>
      <div class="card-body">
        <div class="card-meta-row">
          <span class="badge-cat">${s.category || 'Drama'}</span>
          <span style="font-size:0.75rem; color: var(--text-muted);"><i class="fa-regular fa-clock"></i> ${s.readTime || '9 min read'}</span>
        </div>
        <h3 class="card-title">${s.title}</h3>
        <p class="card-hook">${s.hookSummary || ''}</p>
        <div class="card-footer">
          <span><strong style="color: var(--accent-gold);"><i class="fa-solid fa-layer-group"></i> ${chapterBadge}</strong></span>
          <span style="color: var(--accent-gold); font-weight:700;">Start Reading →</span>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function matchCat(story, keyword) {
  const k = keyword.toLowerCase();
  return (story.category && story.category.toLowerCase().includes(k)) ||
         (story.subcategory && story.subcategory.toLowerCase().includes(k)) ||
         (story.tags && story.tags.some(t => t.toLowerCase().includes(k)));
}

// ================= CATEGORY / TRENDING ARCHIVE VIEW =================
function showCategoryArchive(catKey) {
  document.querySelectorAll('.pub-view').forEach(v => v.classList.remove('active'));
  document.getElementById('page-category').classList.add('active');

  const titles = {
    'trending': { title: '🔥 Trending Stories Now', badge: 'Trending', desc: 'Stories currently generating viral reader retention and engagement across the US.' },
    'marriage': { title: '💔 Marriage & Relationships', badge: 'Marriage', desc: 'Stories of secret vows, betrayal, second chances, and true devotion.' },
    'betrayal': { title: '😡 Betrayal & Revenge', badge: 'Revenge', desc: 'When the discarded returned to claim absolute retribution.' },
    'inheritance': { title: '💰 Money & Inheritance', badge: 'Inheritance', desc: 'Hidden wills, secret trusts, and battles for multi-billion family empires.' },
    'billionaire': { title: '🔥 Billionaire Drama', badge: 'Billionaire', desc: 'High-stakes Wall Street power plays, secret CEOs, and lavish confrontations.' },
    'mafia': { title: '🕶️ Mafia & Power', badge: 'Mafia', desc: 'Underworld syndicates, silent enforcers, and lethal protectors.' },
    'secrets': { title: '😱 Shocking Secrets', badge: 'Scandals', desc: 'High-society scandals, hidden DNA tests, and truths exposed.' }
  };

  const info = titles[catKey] || { title: `${catKey} Stories`, badge: 'Category', desc: 'Browse all serialized episodes.' };
  document.getElementById('archiveTitle').innerText = info.title;
  document.getElementById('archiveCatBadge').innerText = info.badge;
  document.getElementById('archiveDesc').innerText = info.desc;

  const filtered = catKey === 'trending'
    ? [...allPubStories].sort((a, b) => (b.trendingScore || b.views) - (a.trendingScore || a.views))
    : allPubStories.filter(s => matchCat(s, catKey));

  renderCardGrid('archiveGrid', filtered.length ? filtered : allPubStories);
}

// ================= SINGLE STORY READING EXPERIENCE =================
async function showStoryReader(slug) {
  document.querySelectorAll('.pub-view').forEach(v => v.classList.remove('active'));
  document.getElementById('page-story-reader').classList.add('active');

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
    document.getElementById('readerReadTime').innerText = story.readTime || '7 min read';
    document.getElementById('readerDate').innerText = new Date(story.publicationDate || Date.now()).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    document.getElementById('readerAuthor').innerText = story.author || 'Elena Vance';
    document.getElementById('readerCoverImg').src = story.coverImage || `/images/${story.slug}.jpg`;

    const bodyEl = document.getElementById('readerBody');
    bodyEl.innerHTML = '';

    const paragraphs = story.paragraphs || [];
    const scenes = story.scenes || [];

    paragraphs.forEach((pText, idx) => {
      if (pText.startsWith('[') && pText.endsWith(']')) {
        const locHeader = document.createElement('div');
        locHeader.className = 'scene-location-header';
        locHeader.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${pText.replace(/[\[\]]/g, '').trim()}`;
        bodyEl.appendChild(locHeader);
        return;
      }

      const p = document.createElement('p');
      p.innerText = pText;
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
          ? `<i class="fa-solid fa-crown"></i> CHAPTER ${nextPartNum} (GRAND FINALE) AVAILABLE`
          : `<i class="fa-solid fa-fire"></i> CHAPTER ${nextPartNum} AVAILABLE`;
      }

      nextPartHook.innerText = story.nextPartHook || `What happened in Chapter ${nextPartNum} shook the entire city...`;

      if (partDesc) {
        partDesc.innerText = isGrandFinale
          ? 'Experience the shocking conclusion, justice, and emotional climax in the Grand Finale.'
          : `Continue the gripping story right now in Chapter ${nextPartNum} without interruption.`;
      }

      btnReadPart2.innerHTML = isGrandFinale
        ? `READ CHAPTER ${nextPartNum} (GRAND FINALE) →`
        : `READ CHAPTER ${nextPartNum} →`;

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
      btnReadPart2.innerHTML = 'BINGE NEXT VIRAL DRAMA →';
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

    const relatedContainer = document.getElementById('relatedStoriesGrid');
    if (relatedContainer) {
      relatedContainer.innerHTML = '';
      const related = data.relatedStories || [];
      related.forEach(r => {
        const item = document.createElement('a');
        item.className = 'story-card';
        item.href = `/story/${r.slug}`;
        item.onclick = (e) => handleNavClick(e, `/story/${r.slug}`);
        item.innerHTML = `
          <div class="card-thumb-wrap" style="height: 140px;">
            <img src="${r.coverImage || `/images/${r.slug}.jpg`}" alt="${r.title}" loading="lazy">
          </div>
          <div class="card-body" style="padding: 12px;">
            <span class="badge-cat" style="font-size: 0.65rem;">${r.category || 'Drama'}</span>
            <h4 class="card-title" style="font-size: 0.95rem; margin-top: 6px;">${r.title}</h4>
          </div>
        `;
        relatedContainer.appendChild(item);
      });
    }

  } catch (err) {
    console.error('Error loading story:', err);
  }
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
    bodyEl.classList.remove('font-normal', 'font-large', 'font-xlarge');
    bodyEl.classList.add(`font-${scale}`);
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

// Audio Speech Narration
function toggleSpeechNarration() {
  const btn = document.getElementById('btnAudioPlayer');
  if (!('speechSynthesis' in window)) {
    showToast('Audio narration not supported on this device.');
    return;
  }

  if (isAudioPlaying) {
    window.speechSynthesis.cancel();
    isAudioPlaying = false;
    btn.classList.remove('playing');
    btn.innerHTML = '<i class="fa-solid fa-circle-play"></i> <span>Listen to Story (Audio)</span>';
    showToast('Audio narration paused');
  } else {
    const paragraphs = document.querySelectorAll('#readerBody p');
    if (!paragraphs || paragraphs.length === 0) return;

    const fullText = Array.from(paragraphs).map(p => p.innerText).join('. ');
    speechSynth = new SpeechSynthesisUtterance(fullText);
    speechSynth.rate = 0.95;
    speechSynth.pitch = 1.0;

    const voices = window.speechSynthesis.getVoices();
    const usVoice = voices.find(v => v.lang.includes('en-US') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha')));
    if (usVoice) speechSynth.voice = usVoice;

    speechSynth.onend = () => {
      isAudioPlaying = false;
      btn.classList.remove('playing');
      btn.innerHTML = '<i class="fa-solid fa-circle-play"></i> <span>Listen to Story (Audio)</span>';
    };

    speechSynth.onerror = () => {
      isAudioPlaying = false;
      btn.classList.remove('playing');
      btn.innerHTML = '<i class="fa-solid fa-circle-play"></i> <span>Listen to Story (Audio)</span>';
    };

    window.speechSynthesis.speak(speechSynth);
    isAudioPlaying = true;
    btn.classList.add('playing');
    btn.innerHTML = '<i class="fa-solid fa-circle-pause"></i> <span>Pause Audio Narration</span>';
    showToast('Playing Audio Narration 🎧');
  }
}

// ================= SOCIAL SHARING & UTILITIES =================
function toggleMobileNav() {
  const drawer = document.getElementById('mobileDrawer');
  if (drawer) drawer.classList.toggle('open');
}

function copyStoryLink() {
  navigator.clipboard.writeText(window.location.href);
  showToast('Story link copied to clipboard!');
}

function shareSocial(platform) {
  const url = encodeURIComponent(window.location.href);
  if (platform === 'facebook') {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  }
}

function closeStickyFooterAd() {
  const ad = document.getElementById('stickyFooterAd');
  if (ad) ad.style.display = 'none';
}

function showToast(msg) {
  const toast = document.getElementById('pubToast');
  if (!toast) return;
  toast.innerText = msg;
  toast.style.display = 'block';
  setTimeout(() => { toast.style.display = 'none'; }, 2800);
}

// ================= EMAIL SUBSCRIPTION SYSTEM =================
function handleEmailSubscription(e) {
  if (e) e.preventDefault();
  const emailInput = document.getElementById('inputReaderEmail');
  if (!emailInput || !emailInput.value) {
    showToast('Please enter a valid email address');
    return;
  }

  const email = emailInput.value.trim();
  const name = email.split('@')[0];

  fetch('/api/users/auth', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: name,
      email: email,
      provider: 'email',
      avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name)}&backgroundColor=f5c518&textColor=090a10`
    })
  })
  .then(r => r.json())
  .then(d => {
    emailInput.value = '';
    showToast('Subscribed! You will receive episode alerts for new chapters 🎉');
  })
  .catch(err => {
    emailInput.value = '';
    showToast('Thank you for subscribing! 🎉');
  });
}

function copyStoryShareLink() {
  const url = window.location.href;
  navigator.clipboard.writeText(url);
  showToast('Story link copied to clipboard! Share it with your friends 🎉');
}



