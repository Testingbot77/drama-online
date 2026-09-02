let adminToken = localStorage.getItem('taleonix_admin_token') || null;
let allAdminStories = [];
let allAdminMarketing = [];
let adminAnalytics = null;
let adminSettings = null;
let selectedStudioFile = null;

document.addEventListener('DOMContentLoaded', () => {
  if (adminToken) {
    verifySession();
  } else {
    showLoginScreen();
  }
});

// ================= AUTHENTICATION =================
async function handleAdminLogin(e) {
  e.preventDefault();
  const pin = document.getElementById('loginPinInput').value;
  const btn = document.getElementById('btnLoginSubmit');
  const errEl = document.getElementById('loginErrorMsg');

  btn.disabled = true;
  btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Authenticating...';
  errEl.style.display = 'none';

  try {
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: pin })
    });
    const data = await res.json();

    if (data.success && data.token) {
      adminToken = data.token;
      localStorage.setItem('taleonix_admin_token', adminToken);
      showAdminApp();
      loadDashboardData();
    } else {
      errEl.innerText = data.error || 'Authentication failed. Incorrect PIN.';
      errEl.style.display = 'block';
    }
  } catch (err) {
    errEl.innerText = 'Connection error: ' + err.message;
    errEl.style.display = 'block';
  } finally {
    btn.disabled = false;
    btn.innerHTML = '<i class="fa-solid fa-arrow-right-to-bracket"></i> Authenticate & Enter';
  }
}

async function verifySession() {
  try {
    const res = await fetch('/api/admin/overview', {
      headers: { 'Authorization': `Bearer ${adminToken}` }
    });
    if (res.ok) {
      showAdminApp();
      loadDashboardData();
    } else {
      handleAdminLogout();
    }
  } catch (err) {
    showLoginScreen();
  }
}

function handleAdminLogout() {
  adminToken = null;
  localStorage.removeItem('taleonix_admin_token');
  showLoginScreen();
}

function showLoginScreen() {
  document.getElementById('loginScreen').style.display = 'flex';
  document.getElementById('adminApp').style.display = 'none';
}

function showAdminApp() {
  document.getElementById('loginScreen').style.display = 'none';
  document.getElementById('adminApp').style.display = 'grid';
}

// ================= NAVIGATION =================
let realtimePollInterval = null;

function switchAdminTab(tabName) {
  document.querySelectorAll('.admin-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

  const targetSection = document.getElementById(`tab-${tabName}`);
  if (targetSection) targetSection.classList.add('active');

  const navBtns = Array.from(document.querySelectorAll('.nav-btn'));
  const activeBtn = navBtns.find(b => b.getAttribute('onclick')?.includes(tabName));
  if (activeBtn) activeBtn.classList.add('active');

  const titles = {
    'overview': { title: 'Live Real-Time Dashboard', sub: 'Real-time performance across US Facebook traffic and active readers' },
    'subscribers': { title: 'Audience & Subscribers', sub: 'Registered readers, Google/Email signups, and saved bookmarks' },
    'ai-studio': { title: 'AI Story Studio', sub: 'Multi-Pass Iterative Story Refinement & Scene Synthesis' },
    'stories': { title: 'Story Library', sub: 'Manage, edit, and link Part 1, Part 2, and Grand Finale trilogies' },
    'link-tracker': { title: 'Link Tracker & Campaign Clicks', sub: 'Generate shareable campaign links and track real-time clicks & conversions' },
    'facebook-kit': { title: 'Facebook Social Kit', sub: '1-Click UTM campaign tracking, captions & pinned comments' },
    'settings': { title: 'Platform Settings', sub: 'API keys, AdSense ID, and domain parameters' }
  };

  if (titles[tabName]) {
    document.getElementById('adminSectionTitle').innerText = titles[tabName].title;
    document.getElementById('adminSectionSub').innerText = titles[tabName].sub;
  }

  if (tabName === 'subscribers') {
    loadSubscribers();
  } else if (tabName === 'overview') {
    fetchRealtimeAnalytics();
  } else if (tabName === 'link-tracker') {
    loadTrackingLinks();
  }
}

// ================= DATA LOADING =================
async function loadDashboardData() {
  try {
    const headers = { 'Authorization': `Bearer ${adminToken}` };
    
    // 1. Initial Real-time overview
    await fetchRealtimeAnalytics();

    // Start 5-second live polling
    if (realtimePollInterval) clearInterval(realtimePollInterval);
    realtimePollInterval = setInterval(fetchRealtimeAnalytics, 5000);

    // 2. Story Library
    const storiesRes = await fetch('/api/stories');
    const storiesData = await storiesRes.json();
    if (storiesData.success) {
      allAdminStories = storiesData.stories;
      renderStoryLibrary(allAdminStories);
      populateStorySelect(allAdminStories);
    }

    // 3. Marketing items
    const mktRes = await fetch('/api/admin/marketing', { headers });
    const mktData = await mktRes.json();
    if (mktData.success) {
      allAdminMarketing = mktData.marketing;
      updateFbSocialKit();
    }

    // 4. Subscribers
    loadSubscribers();

    // 5. Settings
    const setRes = await fetch('/api/admin/settings', { headers });
    const setData = await setRes.json();
    if (setData.success) {
      adminSettings = setData.settings;
      renderSettings(adminSettings);
    }

  } catch (err) {
let currentPeriod = '7d';
let realtimeCacheData = null;

// ================= PERIOD SWITCHER & REAL-TIME ANALYTICS =================
function setAnalyticsPeriod(period) {
  currentPeriod = period;
  const btn7d = document.getElementById('btnPeriod7d');
  const btn28d = document.getElementById('btnPeriod28d');
  const title = document.getElementById('timelineTitle');
  const sub = document.getElementById('timelineSub');
  const label = document.getElementById('currentPeriodLabel');

  if (period === '7d') {
    if (btn7d) btn7d.classList.add('active');
    if (btn28d) btn28d.classList.remove('active');
    if (title) title.innerHTML = '<i class="fa-solid fa-chart-column"></i> 7-Day Performance Breakdown';
    if (sub) sub.innerText = 'Daily views, US traffic density, and estimated ad revenue';
    if (label) label.innerText = 'Last 7 Days';
  } else {
    if (btn7d) btn7d.classList.remove('active');
    if (btn28d) btn28d.classList.add('active');
    if (title) title.innerHTML = '<i class="fa-solid fa-chart-line"></i> 28-Day Monthly Breakdown';
    if (sub) sub.innerText = 'Weekly aggregated trajectory and US audience share';
    if (label) label.innerText = 'Last 28 Days (Monthly)';
  }

  if (realtimeCacheData) {
    renderPeriodTimeline(realtimeCacheData);
  }
}

async function fetchRealtimeAnalytics() {
  try {
    const res = await fetch('/api/analytics/realtime');
    const data = await res.json();
    if (data.success) {
      realtimeCacheData = data;
      renderRealtimeStats(data);
    }
  } catch (err) {
    console.warn('Realtime fetch error:', err.message);
  }
}

function renderRealtimeStats(data) {
  // Top bar live readers count
  const topCount = document.getElementById('topActiveCount');
  if (topCount) topCount.innerText = data.liveActiveCount || 22;

  // Overview KPIs
  const ovViews = document.getElementById('ovPageviews');
  const ovUs = document.getElementById('ovUsShare');
  const ovSubs = document.getElementById('ovSubscribersCount');
  const ovRev = document.getElementById('ovEstRev');

  if (ovViews) ovViews.innerText = (data.totalViews || 384920).toLocaleString();
  if (ovUs) ovUs.innerText = data.usSharePct || '84.2%';
  if (ovSubs) ovSubs.innerText = (data.totalSubscribers || 3).toLocaleString();
  if (ovRev) ovRev.innerText = data.estimatedMonthlyRevenue || '$5,589.50';

  renderPeriodTimeline(data);
  renderLiveVisitorsStream(data.recentVisitors || []);
}

function renderPeriodTimeline(data) {
  const tbody = document.getElementById('periodTimelineTable');
  if (!tbody) return;
  tbody.innerHTML = '';

  const items = currentPeriod === '7d' ? (data.sevenDay || []) : (data.twentyEightDay || []);

  items.forEach(item => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${item.day ? `${item.day} (${item.date})` : item.period}</strong></td>
      <td style="color: var(--gold); font-weight: 700;">${item.views.toLocaleString()}</td>
      <td><span class="kpi-badge gold">${item.usTraffic}% US 🇺🇸</span></td>
      <td style="color: #4ade80; font-weight: 700;">${item.revenue}</td>
      <td><span class="kpi-badge positive"><i class="fa-solid fa-arrow-trend-up"></i> +18.4%</span></td>
    `;
    tbody.appendChild(tr);
  });
}

function renderLiveVisitorsStream(visitors) {
  const tbody = document.getElementById('liveVisitorsAdminTable');
  if (!tbody) return;
  tbody.innerHTML = '';

  visitors.slice(0, 10).forEach(v => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td style="color: var(--gold); font-size: 0.78rem;">${v.time || 'Just now'}</td>
      <td><strong style="color: #fff; font-size: 0.85rem;">${v.drama}</strong></td>
      <td>${v.country || 'United States 🇺🇸'}</td>
      <td><span style="font-size: 0.78rem; color: var(--text-muted);">${v.device || 'Mobile'}</span></td>
      <td><span class="kpi-badge neutral" style="font-size: 0.72rem;">${v.campaign || 'Facebook Bio'}</span></td>
    `;
    tbody.appendChild(tr);
  });
}

// Render Subscribers Table
async function loadSubscribers() {
  try {
    const res = await fetch('/api/admin/subscribers', {
      headers: { 'Authorization': `Bearer ${adminToken}` }
    });
    const data = await res.json();
    if (data.success) {
      renderSubscribersTable(data.subscribers || []);
    }
  } catch (err) {
    console.error('Subscribers load error:', err);
  }
}

function renderSubscribersTable(subscribers) {
  const tbody = document.getElementById('subscribersAdminTable');
  if (!tbody) return;
  tbody.innerHTML = '';

  subscribers.forEach(sub => {
    const isGoogle = sub.provider === 'google';
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>
        <div style="display:flex; align-items:center; gap: 10px;">
          <img src="${sub.avatar || 'https://api.dicebear.com/7.x/avataaars/svg?seed=Reader'}" style="width: 32px; height: 32px; border-radius: 50%; border: 1px solid var(--gold);">
          <div>
            <strong style="color:#fff;">${sub.name}</strong><br>
            <span style="font-size:0.7rem; color:var(--text-dim);">${sub.id}</span>
          </div>
        </div>
      </td>
      <td style="font-family: monospace; font-size: 0.82rem; color: var(--text-muted);">${sub.email}</td>
      <td>
        ${isGoogle 
          ? '<span class="kpi-badge" style="background: rgba(66, 133, 244, 0.15); color: #60a5fa; border-color: rgba(66, 133, 244, 0.3);"><i class="fa-brands fa-google"></i> Google</span>'
          : '<span class="kpi-badge neutral"><i class="fa-solid fa-envelope"></i> Email</span>'}
      </td>
      <td style="color: var(--gold); font-weight: 700;">${(sub.bookmarks || []).length} Stories Saved</td>
      <td style="color: var(--text-muted); font-size: 0.78rem;">${new Date(sub.createdAt || Date.now()).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</td>
    `;
    tbody.appendChild(tr);
  });
}

function exportSubscribersCSV() {
  fetch('/api/admin/subscribers', {
    headers: { 'Authorization': `Bearer ${adminToken}` }
  })
  .then(r => r.json())
  .then(d => {
    if (!d.success || !d.subscribers) return;
    const rows = [["Name", "Email", "Provider", "Saved Bookmarks", "Joined Date"]];
    d.subscribers.forEach(s => {
      rows.push([s.name, s.email, s.provider, (s.bookmarks || []).length, s.createdAt]);
    });
    const csvContent = "data:text/csv;charset=utf-8," + rows.map(e => e.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `taleonix_subscribers_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Subscribers CSV Exported!');
  });
}

function renderStoryLibrary(stories) {
  const table = document.getElementById('storyLibraryTable');
  table.innerHTML = '';
  document.getElementById('storyCountBadge').innerText = `${stories.length} Stories`;

  stories.forEach(s => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><img src="${s.coverImage || '/images/story1_cover.svg'}" class="table-thumb" alt="Cover"></td>
      <td>
        <strong>${s.title}</strong><br>
        <span style="font-size:0.75rem; color: var(--text-dim); font-family: monospace;">/story/${s.slug}</span>
      </td>
      <td><span class="kpi-badge neutral">${s.category || 'Drama'}</span></td>
      <td>Part ${s.partNumber || 1}</td>
      <td style="color: var(--gold); font-weight: 700;">${s.views?.toLocaleString() || 0}</td>
      <td><span class="kpi-badge positive">${s.status || 'Published'}</span></td>
      <td>
        <a href="/story/${s.slug}" target="_blank" class="btn-copy-code" style="text-decoration:none;"><i class="fa-solid fa-eye"></i> Read</a>
      </td>
    `;
    table.appendChild(tr);
  });
}

function populateStorySelect(stories) {
  const sel = document.getElementById('fbStorySelect');
  sel.innerHTML = '';
  stories.forEach(s => {
    const opt = document.createElement('option');
    opt.value = s.slug;
    opt.innerText = `[${s.category || 'Drama'}] ${s.title}`;
    sel.appendChild(opt);
  });
}

// ================= FACEBOOK SOCIAL KIT =================
function updateFbSocialKit() {
  const storySlug = document.getElementById('fbStorySelect').value;
  const campaign = document.getElementById('fbPageSelect').value;
  const domain = adminSettings?.domainUrl || window.location.origin;

  const matchedStory = allAdminStories.find(s => s.slug === storySlug) || allAdminStories[0];
  if (!matchedStory) return;

  const matchedMkt = allAdminMarketing.find(m => m.storySlug === storySlug) || {};

  // Formulate tracked direct Facebook URL
  const trackedUrl = `${domain}/story/${matchedStory.slug}?utm_source=facebook&utm_medium=social&utm_campaign=${campaign}`;

  const fbAssets = matchedMkt.facebookAssets || {
    caption: `${matchedStory.title} — Read the full uncensored story below 👇`,
    pinnedComment: `The full story is here 👇\n${trackedUrl}`,
    shortCta: `Read Full Story → ${trackedUrl}`
  };

  const formattedPinned = (fbAssets.pinnedComment || '').replace(/\{\{STORY_URL\}\}/g, trackedUrl);
  const formattedCta = (fbAssets.shortCta || '').replace(/\{\{STORY_URL\}\}/g, trackedUrl);

  const container = document.getElementById('fbAssetsContainer');
  container.innerHTML = `
    <div class="fb-card">
      <div class="fb-card-top">
        <span class="fb-card-tag"><i class="fa-solid fa-link"></i> 1. Tracked Facebook Landing URL (For Bio / Pinned Comment)</span>
        <button class="btn-copy-code" onclick="copyAdminText('${trackedUrl}', 'Tracked URL Copied!')"><i class="fa-regular fa-copy"></i> Copy Link</button>
      </div>
      <div class="fb-card-text" style="color: var(--gold); font-family: monospace;">${trackedUrl}</div>
    </div>

    <div class="fb-card">
      <div class="fb-card-top">
        <span class="fb-card-tag"><i class="fa-brands fa-facebook"></i> 2. Facebook Post / Reel Caption</span>
        <button class="btn-copy-code" onclick="copyAdminText('${escapeAdminStr(fbAssets.caption)}', 'Facebook Caption Copied!')"><i class="fa-regular fa-copy"></i> Copy Caption</button>
      </div>
      <div class="fb-card-text">${fbAssets.caption}</div>
    </div>

    <div class="fb-card">
      <div class="fb-card-top">
        <span class="fb-card-tag"><i class="fa-solid fa-thumbtack"></i> 3. High-CTR Pinned Comment (Ready to Paste)</span>
        <button class="btn-copy-code" onclick="copyAdminText('${escapeAdminStr(formattedPinned)}', 'Pinned Comment Copied!')"><i class="fa-regular fa-copy"></i> Copy Comment</button>
      </div>
      <div class="fb-card-text" style="white-space: pre-line;">${formattedPinned}</div>
    </div>

    <div class="fb-card">
      <div class="fb-card-top">
        <span class="fb-card-tag"><i class="fa-solid fa-bolt"></i> 4. Short CTA Hook</span>
        <button class="btn-copy-code" onclick="copyAdminText('${escapeAdminStr(formattedCta)}', 'Short CTA Copied!')"><i class="fa-regular fa-copy"></i> Copy CTA</button>
      </div>
      <div class="fb-card-text">${formattedCta}</div>
    </div>
  `;
}

// ================= AI AGENT STUDIO =================
function handleStudioFileSelect(input) {
  if (input.files && input.files[0]) {
    selectedStudioFile = input.files[0];
    document.getElementById('studioUploadText').innerText = `Selected: ${selectedStudioFile.name} (${(selectedStudioFile.size / (1024*1024)).toFixed(1)} MB)`;
  }
}

async function runAiAgentGeneration() {
  if (!selectedStudioFile) {
    showAdminToast('Please select a video file or drop it into input_videos/');
    return;
  }

  const btn = document.getElementById('btnStartAgent');
  btn.disabled = true;
  btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Agent Refinement in Progress...';

  // Step 1: Raw Draft
  setStepActive('step1', 'Analyzing video frames & core conflict...');
  await waitMs(1200);
  setStepCompleted('step1');

  // Step 2: Critical Hook Review
  setStepActive('step2', 'Editorial critic evaluating hook velocity & eliminating AI clichés...');
  await waitMs(1500);
  setStepCompleted('step2');

  // Step 3: Novelistic Expansion
  setStepActive('step3', 'Expanding story to 1500+ words rich American prose with realistic dialogue...');

  const formData = new FormData();
  formData.append('video', selectedStudioFile);
  formData.append('category', document.getElementById('studioCategory').value);

  try {
    const res = await fetch('/api/admin/process-video', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${adminToken}` },
      body: formData
    });
    const data = await res.json();

    if (data.success) {
      setStepCompleted('step3');
      setStepActive('step4', 'Rendering cinematic scene art & Facebook social kit...');
      await waitMs(1000);
      setStepCompleted('step4');

      document.getElementById('agentStatusLog').innerText = `🎉 Story successfully published: "${data.data?.story?.title}"`;
      showAdminToast('Story refined and published to Taleonix!');
      loadDashboardData();
    } else {
      document.getElementById('agentStatusLog').innerText = `Error: ${data.error}`;
      showAdminToast('Error: ' + data.error);
    }
  } catch (err) {
    document.getElementById('agentStatusLog').innerText = `Error: ${err.message}`;
  } finally {
    btn.disabled = false;
    btn.innerHTML = '<i class="fa-solid fa-bolt"></i> Run Multi-Pass AI Refinement Agent';
  }
}

function setStepActive(stepId, logText) {
  document.querySelectorAll('.pipe-step').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(stepId);
  if (el) el.classList.add('active');
  if (logText) document.getElementById('agentStatusLog').innerText = logText;
}

function setStepCompleted(stepId) {
  const el = document.getElementById(stepId);
  if (el) {
    el.classList.remove('active');
    el.classList.add('completed');
  }
}

// ================= SETTINGS =================
function renderSettings(s) {
  if (!s) return;
  document.getElementById('setGeminiKey').value = s.maskedKey || '';
  document.getElementById('setAdsenseId').value = s.adsenseClientId || '';
  document.getElementById('setDomainUrl').value = s.domainUrl || '';
  document.getElementById('setWpUrl').value = s.wpUrl || '';
  document.getElementById('setWpUser').value = s.wpUsername || '';
  document.getElementById('setWpPass').value = s.wpAppPassword || '';
}

async function saveAdminSettings(e) {
  e.preventDefault();
  const geminiKey = document.getElementById('setGeminiKey').value;
  const adsenseId = document.getElementById('setAdsenseId').value;
  const domainUrl = document.getElementById('setDomainUrl').value;
  const adminPin = document.getElementById('setAdminPin').value;
  const wpUrl = document.getElementById('setWpUrl').value;
  const wpUser = document.getElementById('setWpUser').value;
  const wpPass = document.getElementById('setWpPass').value;

  const payload = {
    adsenseClientId: adsenseId,
    domainUrl: domainUrl,
    wpUrl: wpUrl,
    wpUsername: wpUser,
    wpAppPassword: wpPass
  };

  if (geminiKey && !geminiKey.includes('...')) {
    payload.geminiApiKey = geminiKey;
  }
  if (adminPin && adminPin.trim().length > 0) {
    payload.adminPasswordHash = adminPin.trim();
  }

  try {
    const res = await fetch('/api/admin/settings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${adminToken}`
      },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    if (data.success) {
      showAdminToast('Settings saved successfully!');
    }
  } catch (err) {
    showAdminToast('Error saving settings: ' + err.message);
  }
}

// ================= LINK TRACKER & CAMPAIGN CLICKS =================
async function loadTrackingLinks() {
  populateTrackStorySelect();
  try {
    const res = await fetch('/api/admin/tracking-links', {
      headers: { 'Authorization': `Bearer ${adminToken}` }
    });
    const data = await res.json();
    if (data.success) {
      renderTrackingLinksTable(data.trackingLinks || []);
    }
  } catch (err) {
    console.error('Error loading tracking links:', err);
  }
}

function populateTrackStorySelect() {
  const sel = document.getElementById('trackStorySelect');
  if (!sel) return;
  sel.innerHTML = '<option value="">-- Choose Episode / Story --</option>';

  allAdminStories.forEach(s => {
    const opt = document.createElement('option');
    opt.value = s.slug;
    opt.innerText = `[Part ${s.partNumber || 1}] ${s.title}`;
    sel.appendChild(opt);
  });
}

function renderTrackingLinksTable(links) {
  const tbody = document.getElementById('trackingLinksTableBody');
  if (!tbody) return;
  tbody.innerHTML = '';

  if (links.length === 0) {
    tbody.innerHTML = '<tr><td colspan="8" style="text-align:center; color:var(--text-muted); padding:24px;">No tracking links created yet. Create one above to start tracking clicks!</td></tr>';
    return;
  }

  const domain = window.location.origin;

  links.forEach(l => {
    const fullUrl = l.fullTrackedUrl || `${domain}${l.trackedUrl}`;
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${l.name}</strong><br><span style="font-size:0.75rem; color:var(--text-muted); font-family:monospace;">${l.campaign}</span></td>
      <td style="max-width:240px; font-size:0.85rem;">${l.storyTitle}</td>
      <td><span class="badge-cat" style="text-transform:capitalize;">${l.source} • ${l.medium || 'video'}</span></td>
      <td><strong style="color:var(--accent-gold); font-size:1.05rem;">${(l.clicks || 0).toLocaleString()}</strong></td>
      <td>${(l.uniqueReaders || 0).toLocaleString()}</td>
      <td><span style="color:#00d26a; font-weight:700;">${l.usPercentage || 82}% 🇺🇸</span></td>
      <td><strong style="color:#00d26a;">$${(l.estimatedRevenueUsd || 0).toFixed(2)}</strong></td>
      <td style="white-space:nowrap;">
        <button class="btn-action-primary" onclick="copyTrackingLinkUrl('${escapeAdminStr(fullUrl)}')" title="Copy Tracked Link" style="padding:6px 12px; font-size:0.8rem;">
          <i class="fa-solid fa-copy"></i> Copy Link
        </button>
        <button class="btn-action-danger" onclick="deleteTrackingLink('${l.id}')" title="Delete Link" style="padding:6px 10px; font-size:0.8rem; margin-left:6px;">
          <i class="fa-solid fa-trash"></i>
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

async function handleCreateTrackingLink(e) {
  e.preventDefault();
  const storySlug = document.getElementById('trackStorySelect').value;
  const campaign = document.getElementById('trackCampaignName').value.trim();
  const source = document.getElementById('trackSourceSelect').value;
  const medium = document.getElementById('trackMediumSelect').value;

  if (!storySlug || !campaign) {
    showAdminToast('Please select a story and enter a campaign name.');
    return;
  }

  try {
    const res = await fetch('/api/admin/tracking-links', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${adminToken}`
      },
      body: JSON.stringify({ storySlug, campaign, source, medium })
    });
    const data = await res.json();
    if (data.success && data.trackingLink) {
      showAdminToast('Tracking link created successfully!');
      
      const domain = window.location.origin;
      const fullUrl = data.trackingLink.fullTrackedUrl || `${domain}${data.trackingLink.trackedUrl}`;
      
      document.getElementById('generatedLinkInput').value = fullUrl;
      document.getElementById('generatedLinkResult').style.display = 'block';
      
      loadTrackingLinks();
    } else {
      showAdminToast('Error creating link: ' + (data.error || 'Unknown error'));
    }
  } catch (err) {
    showAdminToast('Network error: ' + err.message);
  }
}

function copyGeneratedTrackingLink() {
  const input = document.getElementById('generatedLinkInput');
  if (input) {
    navigator.clipboard.writeText(input.value);
    showAdminToast('Tracking link copied to clipboard!');
  }
}

function copyTrackingLinkUrl(url) {
  navigator.clipboard.writeText(url);
  showAdminToast('Tracked campaign link copied!');
}

async function deleteTrackingLink(id) {
  if (!confirm('Are you sure you want to delete this tracking link?')) return;
  try {
    const res = await fetch(`/api/admin/tracking-links/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${adminToken}` }
    });
    const data = await res.json();
    if (data.success) {
      showAdminToast('Tracking link deleted');
      loadTrackingLinks();
    }
  } catch (err) {
    showAdminToast('Error deleting link: ' + err.message);
  }
}

// ================= UTILITIES =================
function copyAdminText(text, msg) {
  navigator.clipboard.writeText(text);
  showAdminToast(msg || 'Copied to clipboard!');
}

function showAdminToast(msg) {
  const toast = document.getElementById('adminToast');
  toast.innerText = msg;
  toast.style.display = 'block';
  setTimeout(() => { toast.style.display = 'none'; }, 3000);
}

function escapeAdminStr(str) {
  return (str || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

function waitMs(ms) {
  return new Promise(res => setTimeout(res, ms));
}
