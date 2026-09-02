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
function switchAdminTab(tabName) {
  document.querySelectorAll('.admin-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

  const targetSection = document.getElementById(`tab-${tabName}`);
  if (targetSection) targetSection.classList.add('active');

  const navBtns = Array.from(document.querySelectorAll('.nav-btn'));
  const activeBtn = navBtns.find(b => b.getAttribute('onclick')?.includes(tabName));
  if (activeBtn) activeBtn.classList.add('active');

  const titles = {
    'overview': { title: 'Overview Dashboard', sub: 'Real-time performance across your 10–15 Facebook Pages' },
    'ai-studio': { title: 'AI Agent Studio', sub: 'Multi-Pass Iterative Story Refinement & Scene Synthesis' },
    'stories': { title: 'Story Library', sub: 'Manage, edit, and link Part 1 / Part 2 serialized stories' },
    'facebook-kit': { title: 'Facebook Social Kit', sub: '1-Click UTM campaign tracking, captions & pinned comments' },
    'analytics': { title: 'UTM Attribution Analytics', sub: 'Performance breakdown per Facebook page and geo' },
    'settings': { title: 'Platform Settings', sub: 'API keys, AdSense ID, and WordPress integration' }
  };

  if (titles[tabName]) {
    document.getElementById('adminSectionTitle').innerText = titles[tabName].title;
    document.getElementById('adminSectionSub').innerText = titles[tabName].sub;
  }
}

// ================= DATA LOADING =================
async function loadDashboardData() {
  try {
    const headers = { 'Authorization': `Bearer ${adminToken}` };
    
    // 1. Overview & Analytics
    const analyticsRes = await fetch('/api/admin/overview', { headers });
    const analyticsData = await analyticsRes.json();
    if (analyticsData.success) {
      renderOverview(analyticsData.analytics);
    }

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

    // 4. Settings
    const setRes = await fetch('/api/admin/settings', { headers });
    const setData = await setRes.json();
    if (setData.success) {
      adminSettings = setData.settings;
      renderSettings(adminSettings);
    }

  } catch (err) {
    console.error('Error loading admin dashboard data:', err);
  }
}

function renderOverview(data) {
  const o = data.overview;
  document.getElementById('ovPageviews').innerText = o.totalPageviews.toLocaleString();
  document.getElementById('ovUsShare').innerText = `${o.usTrafficPercentage}%`;
  document.getElementById('ovPagesPerSession').innerText = o.pagesPerSession || '2.84';
  document.getElementById('ovEstRev').innerText = `$${o.estimatedAdSenseRevenueUsd?.toFixed(2) || '0.00'}`;

  // Facebook Campaigns
  const fbBody = document.getElementById('fbCampaignsTable');
  fbBody.innerHTML = '';
  (data.facebookCampaigns || []).forEach(c => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${c.name}</strong><br><span style="font-size: 0.72rem; color: var(--text-dim); font-family: monospace;">${c.campaign}</span></td>
      <td>${c.visitors.toLocaleString()}</td>
      <td style="color: var(--gold); font-weight: 700;">${c.pageviews.toLocaleString()}</td>
      <td>${c.pagesPerSession}</td>
      <td><span class="kpi-badge gold">${c.usShare}</span></td>
    `;
    fbBody.appendChild(tr);
  });

  // Top Stories
  const topBody = document.getElementById('topStoriesAdminTable');
  topBody.innerHTML = '';
  (data.topStories || []).forEach(s => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${s.title}</strong></td>
      <td><span class="kpi-badge neutral">${s.category || 'Drama'}</span></td>
      <td style="color: var(--gold); font-weight: 700;">${s.views.toLocaleString()}</td>
      <td><span class="kpi-badge positive">${s.trendingScore || 95.0} 🔥</span></td>
    `;
    topBody.appendChild(tr);
  });

  // Geo Breakdown in Analytics Tab
  const geoWrap = document.getElementById('adminGeoList');
  if (geoWrap) {
    geoWrap.innerHTML = '';
    (data.geoBreakdown || []).forEach(g => {
      const div = document.createElement('div');
      div.style.marginBottom = '12px';
      div.innerHTML = `
        <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 4px;">
          <span>${g.country}</span>
          <span>${g.visitors.toLocaleString()} (${g.percentage}%) <strong style="color: var(--gold);">${g.rpm} RPM</strong></span>
        </div>
        <div style="height: 6px; background: rgba(255,255,255,0.05); border-radius: 4px; overflow: hidden;">
          <div style="width: ${g.percentage}%; height: 100%; background: var(--gold);"></div>
        </div>
      `;
      geoWrap.appendChild(div);
    });
  }

  // Live Visitors Stream
  const liveWrap = document.getElementById('adminLiveVisitorsList');
  if (liveWrap) {
    liveWrap.innerHTML = '';
    (data.recentVisitors || []).forEach(v => {
      const div = document.createElement('div');
      div.style.padding = '10px 14px';
      div.style.background = 'rgba(255,255,255,0.02)';
      div.style.borderRadius = '8px';
      div.style.marginBottom = '8px';
      div.style.fontSize = '0.82rem';
      div.style.border = '1px solid var(--border)';
      div.innerHTML = `
        <div style="display:flex; justify-content:space-between; margin-bottom: 2px;">
          <strong style="color:#fff;">${v.drama}</strong>
          <span style="color: var(--gold); font-size: 0.75rem;">${v.time}</span>
        </div>
        <div style="color: var(--text-muted); font-size: 0.78rem;">
          ${v.country} • ${v.device} • <span style="color: var(--blue);">${v.referrer}</span>
        </div>
      `;
      liveWrap.appendChild(div);
    });
  }
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
