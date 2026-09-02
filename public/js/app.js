// State management
let allStories = [];
let marketingItems = [];
let analyticsData = null;
let currentStorySlug = null;
let selectedVideoFile = null;
let isAudioPlaying = false;
let speechSynthUtterance = null;

// Initialize on Load
document.addEventListener('DOMContentLoaded', () => {
  initRouting();
  initReadingPreferences();
  initEnvironmentMode();
  loadStories();
  loadMarketing();
  loadAnalytics();
  loadSettings();
});

// ================= 45-65 ACCESSIBILITY & PREFERENCES =================
function initReadingPreferences() {
  const savedSize = localStorage.getItem('drama_font_size') || 'large';
  const savedTheme = localStorage.getItem('drama_reading_theme') || 'dark';
  changeFontSize(savedSize, false);
  setReadingTheme(savedTheme, false);
}

function changeFontSize(size, save = true) {
  const readerEl = document.getElementById('view-story-detail');
  if (readerEl) {
    readerEl.classList.remove('font-normal', 'font-large', 'font-xlarge');
    readerEl.classList.add(`font-${size}`);
  }
  document.querySelectorAll('.btn-text-size').forEach(b => b.classList.remove('active'));
  const activeBtn = document.getElementById(size === 'normal' ? 'btnFontNormal' : size === 'large' ? 'btnFontLarge' : 'btnFontXLarge');
  if (activeBtn) activeBtn.classList.add('active');
  if (save) localStorage.setItem('drama_font_size', size);
}

function setReadingTheme(theme, save = true) {
  document.body.classList.remove('theme-dark', 'theme-sepia', 'theme-light');
  if (theme !== 'dark') {
    document.body.classList.add(`theme-${theme}`);
  }
  document.querySelectorAll('.btn-theme-mode').forEach(b => b.classList.remove('active'));
  const activeBtn = document.getElementById(theme === 'dark' ? 'themeBtnDark' : theme === 'sepia' ? 'themeBtnSepia' : 'themeBtnLight');
  if (activeBtn) activeBtn.classList.add('active');
  if (save) localStorage.setItem('drama_reading_theme', theme);
}

// Audio Narration (Web Speech API)
function toggleAudioNarration() {
  const btn = document.getElementById('btnListenStory');
  if (!('speechSynthesis' in window)) {
    showToast('Audio narration is not supported on this browser.');
    return;
  }

  if (isAudioPlaying) {
    window.speechSynthesis.cancel();
    isAudioPlaying = false;
    btn.classList.remove('playing');
    btn.innerHTML = '<i class="fa-solid fa-circle-play"></i> <span>Listen to Episode (Audio)</span>';
    showToast('Audio narration paused');
  } else {
    const paragraphs = document.querySelectorAll('#detailBody p');
    if (!paragraphs || paragraphs.length === 0) return;

    let fullText = Array.from(paragraphs).map(p => p.innerText).join('. ');
    speechSynthUtterance = new SpeechSynthesisUtterance(fullText);
    speechSynthUtterance.rate = 0.95; // Gentle, clear storytelling pace
    speechSynthUtterance.pitch = 1.0;

    // Pick best English voice if available
    const voices = window.speechSynthesis.getVoices();
    const usVoice = voices.find(v => v.lang.includes('en-US') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha')));
    if (usVoice) speechSynthUtterance.voice = usVoice;

    speechSynthUtterance.onend = () => {
      isAudioPlaying = false;
      btn.classList.remove('playing');
      btn.innerHTML = '<i class="fa-solid fa-circle-play"></i> <span>Listen to Episode (Audio)</span>';
    };

    speechSynthUtterance.onerror = () => {
      isAudioPlaying = false;
      btn.classList.remove('playing');
      btn.innerHTML = '<i class="fa-solid fa-circle-play"></i> <span>Listen to Episode (Audio)</span>';
    };

    window.speechSynthesis.speak(speechSynthUtterance);
    isAudioPlaying = true;
    btn.classList.add('playing');
    btn.innerHTML = '<i class="fa-solid fa-circle-pause"></i> <span>Pause Audio Narration</span>';
    showToast('Playing Audio Narration 🎧');
  }
}

// ================= ROUTING & TAB NAVIGATION =================
function initRouting() {
  const hash = window.location.hash;
  if (hash.startsWith('#drama/')) {
    const slug = hash.replace('#drama/', '');
    openStory(slug, false);
  } else if (hash === '#marketing') {
    navigateTo('marketing', false);
  } else if (hash === '#analytics') {
    navigateTo('analytics', false);
  } else {
    navigateTo('home', false);
  }

  window.addEventListener('hashchange', () => {
    const newHash = window.location.hash;
    if (newHash.startsWith('#drama/')) {
      openStory(newHash.replace('#drama/', ''), false);
    } else if (newHash === '#marketing') {
      navigateTo('marketing', false);
    } else if (newHash === '#analytics') {
      navigateTo('analytics', false);
    } else if (newHash === '' || newHash === '#home') {
      navigateTo('home', false);
    }
  });
}

function navigateTo(viewName, updateHash = true) {
  // Hide all views
  document.querySelectorAll('.app-view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));

  if (viewName === 'home') {
    document.getElementById('view-reader').classList.add('active');
    document.getElementById('tab-reader').classList.add('active');
    if (updateHash) window.location.hash = 'home';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (viewName === 'marketing') {
    document.getElementById('view-marketing').classList.add('active');
    document.getElementById('tab-marketing').classList.add('active');
    if (updateHash) window.location.hash = 'marketing';
    loadMarketing();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (viewName === 'analytics') {
    document.getElementById('view-analytics').classList.add('active');
    document.getElementById('tab-analytics').classList.add('active');
    if (updateHash) window.location.hash = 'analytics';
    loadAnalytics();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// ================= ENVIRONMENT-BASED ACCESS =================
function initEnvironmentMode() {
  const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  
  if (isLocalhost) {
    // Enable Creator Dashboard & Tools on your local machine
    document.querySelectorAll('.creator-local-only').forEach(el => {
      el.style.display = el.tagName === 'BUTTON' && el.classList.contains('nav-tab') ? 'inline-flex' : 'inline-flex';
    });
  } else {
    // On Live Render Website: Strictly Public Reader (No Creator tabs, No Admin controls)
    document.querySelectorAll('.creator-local-only').forEach(el => {
      el.style.display = 'none';
    });
    // Redirect if someone tries to manually type #marketing or #analytics on live public website
    if (window.location.hash === '#marketing' || window.location.hash === '#analytics') {
      navigateTo('home', true);
    }
  }
}

// ================= API: FETCH & RENDER STORIES =================
async function loadStories() {
  try {
    const res = await fetch('/api/stories');
    const data = await res.json();
    if (data.success) {
      allStories = data.stories;
      renderStoryGrid(allStories);
      if (allStories.length > 0) {
        renderHero(allStories[0]);
      }
    }
  } catch (err) {
    console.error('Error fetching stories:', err);
  }
}

function renderHero(story) {
  document.getElementById('heroTitle').innerText = story.title;
  document.getElementById('heroDesc').innerText = story.hookSummary;
  const heroBtn = document.querySelector('.hero-buttons button');
  if (heroBtn) {
    heroBtn.setAttribute('onclick', `openStory('${story.slug}')`);
  }
}

function renderStoryGrid(stories) {
  const grid = document.getElementById('storyGrid');
  grid.innerHTML = '';

  if (stories.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 40px; color: var(--text-secondary);">
      No drama stories published yet. Drop a video into <code>input_videos/</code> or click 'Upload Video'!
    </div>`;
    return;
  }

  stories.forEach(story => {
    const card = document.createElement('div');
    card.className = 'story-card';
    card.onclick = () => openStory(story.slug);
    card.innerHTML = `
      <div class="story-card-cover-wrap">
        <img src="${story.coverImage || '/images/story1_cover.svg'}" alt="${story.title}" class="story-card-cover" onerror="this.src='/images/story1_cover.svg'">
      </div>
      <div class="story-card-body">
        <div class="story-card-meta">
          <span class="badge-genre">${story.genre || 'Drama'}</span>
          <span class="story-card-views"><i class="fa-solid fa-eye"></i> ${story.views?.toLocaleString() || 0} reads</span>
        </div>
        <h3 class="story-card-title">${story.title}</h3>
        <p class="story-card-hook">${story.hookSummary || ''}</p>
        <div class="story-card-footer">
          <span class="story-card-read-time"><i class="fa-regular fa-clock"></i> ${story.readTime || '5 min read'}</span>
          <span style="color: var(--accent-gold); font-size: 0.85rem; font-weight: 700;">Read Chapter →</span>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function filterStories(tag) {
  document.querySelectorAll('.filter-pills .pill').forEach(p => p.classList.remove('active'));
  event.target.classList.add('active');

  if (tag === 'all') {
    renderStoryGrid(allStories);
  } else {
    const filtered = allStories.filter(s => 
      (s.genre && s.genre.toLowerCase().includes(tag.toLowerCase())) ||
      (s.tags && s.tags.some(t => t.toLowerCase().includes(tag.toLowerCase())))
    );
    renderStoryGrid(filtered);
  }
}

// ================= FULL STORY DETAIL READER =================
async function openStory(slug, updateHash = true) {
  try {
    const res = await fetch(`/api/stories/${slug}`);
    const data = await res.json();
    if (!data.success || !data.story) {
      showToast('Drama story not found');
      navigateTo('home');
      return;
    }

    const story = data.story;
    currentStorySlug = slug;

    // Track View & US Geo metric
    fetch(`/api/stories/${slug}/view`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ referrer: 'Social Short / Video Link', device: navigator.userAgent.includes('Mobile') ? 'Mobile (Safari/Chrome)' : 'Desktop' })
    });

    document.getElementById('detailTitle').innerText = story.title;
    document.getElementById('detailSynopsis').innerText = story.hookSummary;
    document.getElementById('detailTags').innerHTML = `
      <span class="badge-genre">${story.genre || 'Drama'}</span>
      <span class="badge-views"><i class="fa-solid fa-eye"></i> ${(story.views + 1)?.toLocaleString()} Readers</span>
      <span style="color: var(--accent-gold); font-size: 0.78rem; font-weight: 700;"><i class="fa-solid fa-bolt"></i> Uncensored Episode</span>
    `;
    document.getElementById('detailCoverImage').src = story.coverImage || '/images/story1_cover.svg';

    // Render paragraphs and inline scene breaks
    const bodyContainer = document.getElementById('detailBody');
    bodyContainer.innerHTML = '';

    const paragraphs = story.paragraphs || [];
    const scenes = story.scenes || [];

    paragraphs.forEach((pText, index) => {
      const pEl = document.createElement('p');
      pEl.innerText = pText;
      bodyContainer.appendChild(pEl);

      // Check if a scene illustration is attached after this paragraph
      const matchedScene = scenes.find(s => s.insertAfterParagraph === index);
      if (matchedScene) {
        const sceneWrap = document.createElement('div');
        sceneWrap.className = 'inline-scene-wrap';
        sceneWrap.innerHTML = `
          <img src="${matchedScene.image}" alt="Scene Illustration" class="inline-scene-img" onerror="this.style.display='none'">
          <div class="scene-caption"><i class="fa-solid fa-camera"></i> ${matchedScene.caption}</div>
        `;
        bodyContainer.appendChild(sceneWrap);
      }
    });

    // Switch view
    document.querySelectorAll('.app-view').forEach(v => v.classList.remove('active'));
    document.getElementById('view-story-detail').classList.add('active');
    if (updateHash) window.location.hash = `drama/${slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });

  } catch (err) {
    console.error('Error opening story:', err);
  }
}

// ================= API: DASHBOARD 1 (MARKETING & VIDEO HUB) =================
async function loadMarketing() {
  try {
    const res = await fetch('/api/marketing');
    const data = await res.json();
    if (data.success) {
      marketingItems = data.marketing;
      renderMarketingList(marketingItems);
      document.getElementById('videoCountBadge').innerText = marketingItems.length;
    }
  } catch (err) {
    console.error('Error loading marketing items:', err);
  }
}

function renderMarketingList(items) {
  const container = document.getElementById('marketingList');
  container.innerHTML = '';

  if (items.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding: 60px 20px; background: var(--bg-card); border-radius: var(--radius-xl); border: 1px dashed var(--border-color);">
        <i class="fa-solid fa-film" style="font-size: 3rem; color: var(--accent-gold); margin-bottom: 16px;"></i>
        <h3 style="color: #fff; margin-bottom: 8px;">No Videos Processed Yet</h3>
        <p style="color: var(--text-secondary); max-width: 500px; margin: 0 auto 20px auto;">
          Drop any short drama video (.mp4) into <code>input_videos/</code> or click 'Process New Video' above.
        </p>
        <button class="btn-accent" onclick="openUploadModal()"><i class="fa-solid fa-cloud-arrow-up"></i> Upload Your First Drama Video</button>
      </div>
    `;
    return;
  }

  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'marketing-card';

    // Pinned comments HTML
    const pinnedCommentsHtml = (item.pinnedComments || []).map((c, i) => `
      <div class="pinned-comment-card">
        <div class="pinned-top">
          <span class="pinned-type"><i class="fa-solid fa-thumbtack"></i> Option ${i + 1}: ${c.type}</span>
          <button class="btn-copy" onclick="copyText('${escapeQuotes(c.formattedText)}', 'Pinned Comment copied!')">
            <i class="fa-regular fa-copy"></i> Copy Comment
          </button>
        </div>
        <div class="pinned-text">${c.formattedText}</div>
      </div>
    `).join('');

    card.innerHTML = `
      <!-- Column 1: Video Preview Player -->
      <div class="video-preview-pane">
        <div class="video-player-box">
          <video controls preload="metadata" poster="/images/story1_cover.svg">
            <source src="${item.videoUrl}" type="video/mp4">
            Your browser does not support HTML video.
          </video>
        </div>
        <div class="video-file-info">
          <div class="video-file-name"><i class="fa-solid fa-file-video"></i> ${item.videoFileName}</div>
          <div class="video-process-time">Processed on ${new Date(item.processedAt).toLocaleDateString()}</div>
        </div>
      </div>

      <!-- Column 2: Marketing & Captions Control -->
      <div class="marketing-content-pane">
        <div class="mkt-header">
          <div>
            <span class="badge-genre">Published Story</span>
            <h3 class="mkt-story-title">${item.storyTitle}</h3>
          </div>
          <button class="btn-secondary" onclick="openStory('${item.storySlug}')">
            <i class="fa-solid fa-arrow-up-right-from-square"></i> View on Website
          </button>
        </div>

        <!-- 1-Click Story Link -->
        <div>
          <div class="mkt-section-label"><i class="fa-solid fa-link"></i> Story Website Link (For Bio & Comments)</div>
          <div class="mkt-url-box">
            <span class="mkt-url-text">${item.fullStoryUrl}</span>
            <button class="btn-copy" onclick="copyText('${item.fullStoryUrl}', 'Story link copied!')">
              <i class="fa-regular fa-copy"></i> Copy Link
            </button>
          </div>
        </div>

        <!-- Viral Captions for Socials -->
        <div>
          <div class="mkt-section-label"><i class="fa-solid fa-bullhorn"></i> Best Suited Video Captions</div>
          <div class="captions-grid">
            <div class="caption-box">
              <div class="caption-top">
                <span class="platform-badge tiktok"><i class="fa-brands fa-tiktok"></i> TikTok & Shorts Caption</span>
                <button class="btn-copy" onclick="copyText('${escapeQuotes(item.captions?.tiktok || item.captions?.reels)}', 'TikTok caption copied!')">
                  <i class="fa-regular fa-copy"></i> Copy
                </button>
              </div>
              <div class="caption-text">${item.captions?.tiktok || item.captions?.reels || 'Viral drama plot twist!'}</div>
            </div>

            <div class="caption-box">
              <div class="caption-top">
                <span class="platform-badge reels"><i class="fa-brands fa-instagram"></i> Instagram Reels Caption</span>
                <button class="btn-copy" onclick="copyText('${escapeQuotes(item.captions?.reels || item.captions?.tiktok)}', 'Reels caption copied!')">
                  <i class="fa-regular fa-copy"></i> Copy
                </button>
              </div>
              <div class="caption-text">${item.captions?.reels || item.captions?.tiktok || 'Full episode uncensored in bio!'}</div>
            </div>
          </div>
        </div>

        <!-- 2-3 Related Hashtags -->
        <div>
          <div class="mkt-section-label"><i class="fa-solid fa-hashtag"></i> 2-3 Curated Viral Hashtags</div>
          <div class="hashtags-box">
            <div class="hashtags-list">${(item.hashtags || []).join(' ')}</div>
            <button class="btn-copy" onclick="copyText('${(item.hashtags || []).join(' ')}', 'Hashtags copied!')">
              <i class="fa-regular fa-copy"></i> Copy Hashtags
            </button>
          </div>
        </div>

        <!-- Strong CTA Pinned Comments -->
        <div>
          <div class="mkt-section-label"><i class="fa-solid fa-comments"></i> Ready-to-Post Pinned Comments (For Your 6 Pages)</div>
          <div class="pinned-comments-container">
            ${pinnedCommentsHtml}
          </div>
        </div>

      </div>
    `;

    container.appendChild(card);
  });
}

// ================= API: DASHBOARD 2 (ANALYTICS & AD METRICS) =================
async function loadAnalytics() {
  try {
    const res = await fetch('/api/analytics');
    const data = await res.json();
    if (data.success) {
      analyticsData = data.analytics;
      renderAnalytics(analyticsData);
    }
  } catch (err) {
    console.error('Error loading analytics:', err);
  }
}

function renderAnalytics(data) {
  const o = data.overview;
  document.getElementById('kpiPageviews').innerText = o.totalPageviews.toLocaleString();
  document.getElementById('kpiUsShare').innerText = `${o.usTrafficPercentage}%`;
  document.getElementById('kpiReadTime').innerText = `${Math.floor(o.avgReadTimeSeconds / 60)}m ${o.avgReadTimeSeconds % 60}s`;
  document.getElementById('kpiRevenue').innerText = `$${o.estimatedRevenueUsd.toFixed(2)}`;

  // Geo Breakdown
  const geoContainer = document.getElementById('geoList');
  geoContainer.innerHTML = '';
  (data.geoBreakdown || []).forEach(geo => {
    const isUS = geo.country.includes('United States');
    const div = document.createElement('div');
    div.className = 'geo-item';
    div.innerHTML = `
      <div class="geo-row">
        <span class="geo-country">${geo.country}</span>
        <span class="geo-stats">${geo.visitors.toLocaleString()} visitors (${geo.percentage}%) <span class="geo-rpm-badge">${geo.rpm} RPM</span></span>
      </div>
      <div class="progress-bar-wrap">
        <div class="progress-fill ${isUS ? '' : 'blue'}" style="width: ${geo.percentage}%"></div>
      </div>
    `;
    geoContainer.appendChild(div);
  });

  // Traffic Sources (6 Pages)
  const sourcesContainer = document.getElementById('sourcesList');
  sourcesContainer.innerHTML = '';
  (data.trafficSources || []).forEach(src => {
    const div = document.createElement('div');
    div.className = 'source-item';
    div.innerHTML = `
      <div class="source-row">
        <span class="geo-country">${src.source}</span>
        <span class="geo-stats">${src.visitors.toLocaleString()} clicks (${src.percentage}%)</span>
      </div>
      <div class="progress-bar-wrap">
        <div class="progress-fill blue" style="width: ${src.percentage}%"></div>
      </div>
    `;
    sourcesContainer.appendChild(div);
  });

  // Top Stories Table
  const tableBody = document.getElementById('topStoriesTable');
  tableBody.innerHTML = '';
  (data.topStories || []).forEach(story => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td style="font-weight: 700; color: #fff;">${story.title}</td>
      <td><span class="badge-genre">${story.genre || 'Drama'}</span></td>
      <td style="color: var(--accent-gold); font-weight: 700;">${story.views.toLocaleString()}</td>
      <td><button class="btn-copy" onclick="openStory('${story.slug}')"><i class="fa-solid fa-eye"></i> View</button></td>
    `;
    tableBody.appendChild(tr);
  });

  // Real-time visitor activity stream
  const visitorBody = document.getElementById('recentVisitorsTable');
  visitorBody.innerHTML = '';
  (data.recentVisitors || []).forEach(v => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td style="color: var(--accent-gold); font-size: 0.8rem;"><i class="fa-regular fa-clock"></i> ${v.time}</td>
      <td style="font-weight: 600;">${v.drama}</td>
      <td><i class="fa-solid fa-location-dot" style="color: var(--accent-crimson);"></i> ${v.country}</td>
      <td style="color: var(--text-muted);">${v.device}</td>
      <td><span class="badge-pill">${v.referrer}</span></td>
    `;
    visitorBody.appendChild(tr);
  });
}

function refreshAnalytics() {
  loadAnalytics();
  showToast('Analytics updated in real-time');
}

// ================= UPLOAD & FOLDER SCAN HANDLERS =================
function openUploadModal() {
  document.getElementById('uploadModal').classList.add('active');
  document.getElementById('processingLoader').style.display = 'none';
  document.getElementById('uploadForm').style.display = 'block';
}

function closeUploadModal() {
  document.getElementById('uploadModal').classList.remove('active');
}

function handleFileSelected(input) {
  if (input.files && input.files[0]) {
    selectedVideoFile = input.files[0];
    document.getElementById('dropzoneText').innerText = `Selected: ${selectedVideoFile.name} (${(selectedVideoFile.size / (1024*1024)).toFixed(1)} MB)`;
    document.getElementById('btnStartProcess').style.display = 'block';
  }
}

async function submitVideoUpload() {
  if (!selectedVideoFile) return;

  document.getElementById('uploadForm').style.display = 'none';
  document.getElementById('processingLoader').style.display = 'block';

  const formData = new FormData();
  formData.append('video', selectedVideoFile);

  try {
    const res = await fetch('/api/upload-video', {
      method: 'POST',
      body: formData
    });
    const data = await res.json();

    if (data.success) {
      showToast('🎉 Video analyzed & Story published successfully!');
      closeUploadModal();
      await loadStories();
      await loadMarketing();
      navigateTo('marketing');
    } else {
      showToast('Error: ' + (data.error || 'Failed to process'));
      document.getElementById('uploadForm').style.display = 'block';
      document.getElementById('processingLoader').style.display = 'none';
    }
  } catch (err) {
    showToast('Upload error: ' + err.message);
    document.getElementById('uploadForm').style.display = 'block';
    document.getElementById('processingLoader').style.display = 'none';
  }
}

async function triggerFolderScan() {
  showToast('Scanning input_videos/ folder...');
  try {
    const res = await fetch('/api/scan-folder', { method: 'POST' });
    const data = await res.json();
    showToast(data.message || 'Folder scan completed');
    await loadStories();
    await loadMarketing();
  } catch (err) {
    showToast('Scan error: ' + err.message);
  }
}

// ================= SETTINGS & ADSENSE =================
function openSettingsModal() {
  document.getElementById('settingsModal').classList.add('active');
}

function closeSettingsModal() {
  document.getElementById('settingsModal').classList.remove('active');
}

async function loadSettings() {
  try {
    const res = await fetch('/api/settings');
    const data = await res.json();
    if (data.success && data.settings) {
      document.getElementById('settingApiKey').value = data.settings.maskedKey || '';
      document.getElementById('settingAdsenseId').value = data.settings.adsenseClientId || '';
      document.getElementById('settingDomainUrl').value = data.settings.domainUrl || '';
    }
  } catch (err) {
    console.error('Error loading settings:', err);
  }
}

async function saveSettingsForm(e) {
  e.preventDefault();
  const apiKey = document.getElementById('settingApiKey').value;
  const adsenseId = document.getElementById('settingAdsenseId').value;
  const domainUrl = document.getElementById('settingDomainUrl').value;

  try {
    const res = await fetch('/api/settings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        geminiApiKey: apiKey,
        adsenseClientId: adsenseId,
        domainUrl: domainUrl
      })
    });
    const data = await res.json();
    if (data.success) {
      showToast('Settings & AdSense ID saved!');
      closeSettingsModal();
      loadMarketing();
    }
  } catch (err) {
    showToast('Error saving settings');
  }
}

// ================= UTILITIES & CLIPBOARD =================
function copyText(text, successMessage = 'Copied to clipboard!') {
  if (!navigator.clipboard) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  } else {
    navigator.clipboard.writeText(text);
  }
  showToast(successMessage);
}

function copyCurrentStoryLink() {
  const url = window.location.href;
  copyText(url, 'Story link copied to clipboard!');
}

function shareOnSocial(platform) {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent('Read the full uncensored episode now!');
  if (platform === 'tiktok') {
    copyText(window.location.href, 'Link copied! Paste on TikTok profile or pinned comment.');
  } else if (platform === 'instagram') {
    copyText(window.location.href, 'Link copied! Paste in Instagram bio / story sticker.');
  }
}

function showToast(message) {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: var(--accent-gold);"></i> ${message}`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

function closeStickyAd() {
  const el = document.getElementById('stickyMobileAd');
  if (el) el.style.display = 'none';
}

function escapeQuotes(str) {
  return (str || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
}
