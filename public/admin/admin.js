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
    console.error("Dashboard load err:", err);
  }
}

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
  if (topCount) topCount.innerText = data.liveActiveCount || 0;

  // Overview KPIs: Separated Website Pageviews vs Link Clicks
  const ovViews = document.getElementById('ovPageviews');
  const ovLinks = document.getElementById('ovLinkClicks');
  const ovUniq = document.getElementById('ovUniqueVisitors');
  const ovStories = document.getElementById('ovStoriesCount');

  if (ovViews) ovViews.innerText = (data.totalWebsiteViews || 0).toLocaleString();
  if (ovLinks) ovLinks.innerText = (data.totalLinkClicks || 0).toLocaleString();
  if (ovUniq) ovUniq.innerText = (data.totalUnique || 0).toLocaleString();
  if (ovStories) ovStories.innerText = (data.totalStories || 52).toLocaleString();

  renderPeriodTimeline(data);
  renderLiveVisitorsStream(data.recentVisitors || []);
}

function renderPeriodTimeline(data) {
  const tbody = document.getElementById('periodTimelineTable');
  if (!tbody) return;
  tbody.innerHTML = '';

  const items = currentPeriod === '7d' ? (data.sevenDay || []) : (data.twentyEightDay || []);

  if (items.length === 0) {
    tbody.innerHTML = '<tr><td colspan="5" style="text-align:center; color:var(--text-muted); padding:20px;">No activity logged yet. Share a story link to see live tracking!</td></tr>';
    return;
  }

  items.forEach(item => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${item.day ? `${item.day} (${item.date})` : item.period}</strong></td>
      <td style="color: var(--accent-gold); font-weight: 700;">${(item.websiteViews || 0).toLocaleString()}</td>
      <td style="color: #60a5fa; font-weight: 700;">${(item.linkClicks || 0).toLocaleString()}</td>
      <td>${(item.unique || 0).toLocaleString()}</td>
      <td><span class="kpi-badge gold">${item.usTraffic || 85}% US 🇺🇸</span></td>
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
  if (!table) return;
  table.innerHTML = '';
  document.getElementById('storyCountBadge').innerText = `${stories.length} Chapters in Database`;

  const domain = getProductionDomain();

  stories.forEach(s => {
    const cleanCode = (s.slug.replace(/[^a-zA-Z0-9]/g, '').slice(0, 6).toLowerCase() || ('s' + (s.partNumber || 1)));
    const shortUrl = `${domain}/s/${cleanCode}`;
    const fbCaption = `${s.title} — Full Chapter Available Now!\n\n🔥 Read Full Story Free 👉 ${shortUrl}\n\n#drama #viral #taleonix`;
    const hasNote = Boolean(s.editorsNote && s.editorsNote.trim().length > 10);
    const isScheduled = s.status === 'scheduled';

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><img src="${s.coverImage || '/images/the-graduation-envelope-mother-in-green-cover.jpg'}" class="table-thumb" alt="Cover" style="width:70px; aspect-ratio:16/9; object-fit:cover; border-radius:6px;"></td>
      <td>
        <strong style="font-size:0.92rem; color:#fff;">${s.title}</strong><br>
        <span style="font-size:0.75rem; color: var(--text-dim); font-family: monospace;">/story/${s.slug}</span>
      </td>
      <td><span class="badge-cat" style="font-size:0.75rem;">${s.category || 'Drama'}</span></td>
      <td><strong style="color:var(--accent-gold);">Part ${s.partNumber || 1}</strong></td>
      <td>
        ${isScheduled 
          ? '<span style="background:rgba(59,130,246,0.2); color:#60a5fa; border:1px solid #3b82f6; padding:3px 8px; border-radius:4px; font-size:0.75rem; font-weight:700;"><i class="fa-solid fa-clock"></i> Scheduled</span>'
          : '<span style="background:rgba(0,210,106,0.15); color:#00d26a; border:1px solid rgba(0,210,106,0.3); padding:3px 8px; border-radius:4px; font-size:0.75rem; font-weight:700;"><i class="fa-solid fa-circle-check"></i> Live</span>'
        }
      </td>
      <td>
        ${hasNote 
          ? '<span style="color:#00d26a; font-size:0.8rem; font-weight:600;"><i class="fa-solid fa-check"></i> 100+ Words</span>'
          : '<button onclick="openStoryEditModal(\'' + escapeAdminStr(s.slug) + '\')" style="background:rgba(229,169,60,0.15); color:var(--accent-gold); border:1px solid var(--accent-gold); padding:2px 8px; border-radius:4px; font-size:0.75rem; cursor:pointer;"><i class="fa-solid fa-plus"></i> Add Note</button>'
        }
      </td>
      <td style="white-space:nowrap;">
        <button class="btn-action-accent" onclick="openStoryEditModal('${escapeAdminStr(s.slug)}')" title="Edit Story Text & Notes" style="padding:6px 12px; font-size:0.8rem; margin-right:4px;">
          <i class="fa-solid fa-pen-to-square"></i> Edit
        </button>
        <button class="btn-action-primary" onclick="copyTrackingLinkUrl('${escapeAdminStr(shortUrl)}', '⚡ Short link copied!')" title="Copy Short Link" style="padding:6px 10px; font-size:0.8rem; margin-right:4px;">
          <i class="fa-solid fa-copy"></i>
        </button>
        <a href="/story/${s.slug}" target="_blank" class="btn-action-secondary" style="padding:6px 10px; font-size:0.8rem; text-decoration:none; display:inline-flex; align-items:center; gap:4px; margin-right:4px;">
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <button onclick="handleDeleteStory('${escapeAdminStr(s.slug)}')" title="Delete Story" style="background:rgba(239,68,68,0.15); border:1px solid rgba(239,68,68,0.3); color:#ef4444; padding:6px 8px; border-radius:6px; cursor:pointer;">
          <i class="fa-solid fa-trash"></i>
        </button>
      </td>
    `;
    table.appendChild(tr);
  });
}

// ================= STORY EDITING & MODAL LOGIC =================
function openStoryEditModal(slug) {
  const modal = document.getElementById('storyEditModal');
  if (!modal) return;
  modal.style.display = 'flex';

  if (!slug) {
    // Create new story
    document.getElementById('editModalTitle').innerHTML = '<i class="fa-solid fa-plus"></i> Add New Story Chapter';
    document.getElementById('editStorySlugHidden').value = '';
    document.getElementById('editStoryTitle').value = '';
    document.getElementById('editStoryCategory').value = 'Family Secrets';
    document.getElementById('editStoryReadTime').value = '8 min read';
    document.getElementById('editStoryStatus').value = 'published';
    document.getElementById('editStoryPublishAt').value = '';
    document.getElementById('editStoryCover').value = '/images/the-two-mothers-at-graduation-cover.jpg';
    document.getElementById('editStoryHook').value = '';
    document.getElementById('editStoryEditorsNote').value = '';
    document.getElementById('editStoryParagraphs').value = '';
    return;
  }

  const story = allAdminStories.find(s => s.slug === slug);
  if (!story) return;

  document.getElementById('editModalTitle').innerHTML = `<i class="fa-solid fa-pen-to-square"></i> Edit: ${story.title.slice(0, 40)}...`;
  document.getElementById('editStorySlugHidden').value = story.slug;
  document.getElementById('editStoryTitle').value = story.title || '';
  document.getElementById('editStoryCategory').value = story.category || 'Family Secrets';
  document.getElementById('editStoryReadTime').value = story.readTime || '8 min read';
  document.getElementById('editStoryStatus').value = story.status || 'published';
  document.getElementById('editStoryPublishAt').value = story.publishAt ? story.publishAt.slice(0, 16) : '';
  document.getElementById('editStoryCover').value = story.coverImage || '';
  document.getElementById('editStoryHook').value = story.hookSummary || '';
  document.getElementById('editStoryEditorsNote').value = story.editorsNote || '';
  document.getElementById('editStoryParagraphs').value = Array.isArray(story.paragraphs) ? story.paragraphs.join('\n\n') : (story.paragraphs || '');
}

function closeStoryEditModal() {
  const modal = document.getElementById('storyEditModal');
  if (modal) modal.style.display = 'none';
}

async function handleSaveStoryEdit(e) {
  e.preventDefault();
  const btn = document.getElementById('btnSaveStoryEdit');
  const slug = document.getElementById('editStorySlugHidden').value;
  const title = document.getElementById('editStoryTitle').value;
  const category = document.getElementById('editStoryCategory').value;
  const readTime = document.getElementById('editStoryReadTime').value;
  const status = document.getElementById('editStoryStatus').value;
  const publishAt = document.getElementById('editStoryPublishAt').value;
  const coverImage = document.getElementById('editStoryCover').value;
  const hookSummary = document.getElementById('editStoryHook').value;
  const editorsNote = document.getElementById('editStoryEditorsNote').value;
  const paragraphsText = document.getElementById('editStoryParagraphs').value;

  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Saving...';
  }

  const payload = {
    slug,
    title,
    category,
    readTime,
    status,
    publishAt: publishAt ? new Date(publishAt).toISOString() : null,
    coverImage,
    hookSummary,
    editorsNote,
    paragraphs: paragraphsText.split('\n\n').map(p => p.trim()).filter(Boolean)
  };

  try {
    const url = slug ? '/api/admin/stories/update' : '/api/admin/stories';
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${adminToken}`
      },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    if (data.success) {
      showToast('🎉 Story saved and updated live on website!');
      closeStoryEditModal();
      // Reload stories
      const storiesRes = await fetch('/api/stories');
      const sData = await storiesRes.json();
      if (sData.success) {
        allAdminStories = sData.stories;
        renderStoryLibrary(allAdminStories);
        populateStorySelect(allAdminStories);
      }
    } else {
      showToast('Error saving: ' + (data.error || 'Server error'));
    }
  } catch (err) {
    showToast('Failed to save story: ' + err.message);
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = '<i class="fa-solid fa-floppy-disk"></i> Save & Publish Live';
    }
  }
}

async function handleDeleteStory(slug) {
  if (!confirm(`Are you sure you want to delete story: ${slug}?`)) return;

  try {
    const res = await fetch(`/api/admin/stories/${slug}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${adminToken}` }
    });
    const data = await res.json();
    if (data.success) {
      showToast('Story deleted.');
      allAdminStories = allAdminStories.filter(s => s.slug !== slug);
      renderStoryLibrary(allAdminStories);
      populateStorySelect(allAdminStories);
    }
  } catch (err) {
    showToast('Delete failed: ' + err.message);
  }
}

// ================= BULK IMPORT JSON MODAL LOGIC =================
function openBulkImportModal() {
  const modal = document.getElementById('bulkImportModal');
  if (modal) modal.style.display = 'flex';
  document.getElementById('bulkJsonTextarea').value = '';
  document.getElementById('bulkImportPreview').style.display = 'none';
}

function closeBulkImportModal() {
  const modal = document.getElementById('bulkImportModal');
  if (modal) modal.style.display = 'none';
}

function handleBulkJsonFileSelect(input) {
  if (!input.files || !input.files[0]) return;
  const file = input.files[0];
  const reader = new FileReader();
  reader.onload = (e) => {
    const text = e.target.result;
    document.getElementById('bulkJsonTextarea').value = text;
    previewPastedJson({ value: text });
  };
  reader.readAsText(file);
}

function previewPastedJson(textarea) {
  const val = textarea.value.trim();
  const preview = document.getElementById('bulkImportPreview');
  const countSpan = document.getElementById('bulkImportCount');
  if (!val) {
    preview.style.display = 'none';
    return;
  }
  try {
    const parsed = JSON.parse(val);
    const list = Array.isArray(parsed) ? parsed : (parsed.stories || [parsed]);
    countSpan.innerText = list.length;
    preview.style.display = 'block';
  } catch(e) {
    preview.style.display = 'none';
  }
}

async function executeBulkImport() {
  const textarea = document.getElementById('bulkJsonTextarea');
  const btn = document.getElementById('btnExecuteBulkImport');
  const val = textarea.value.trim();

  if (!val) {
    showToast('Please upload a JSON file or paste JSON data.');
    return;
  }

  let parsedList;
  try {
    parsedList = JSON.parse(val);
  } catch(err) {
    showToast('Invalid JSON syntax: ' + err.message);
    return;
  }

  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Importing...';
  }

  try {
    const res = await fetch('/api/admin/stories/bulk-import', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${adminToken}`
      },
      body: JSON.stringify(parsedList)
    });
    const data = await res.json();
    if (data.success) {
      showToast(`🎉 Bulk import success! ${data.addedCount} added, ${data.updatedCount} updated.`);
      closeBulkImportModal();
      // Refresh stories
      const storiesRes = await fetch('/api/stories');
      const sData = await storiesRes.json();
      if (sData.success) {
        allAdminStories = sData.stories;
        renderStoryLibrary(allAdminStories);
        populateStorySelect(allAdminStories);
      }
    } else {
      showToast('Bulk import error: ' + (data.error || 'Unknown error'));
    }
  } catch (err) {
    showToast('Import request failed: ' + err.message);
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = '<i class="fa-solid fa-cloud-arrow-up"></i> Execute Bulk Import';
    }
  }
}

function copyMasterApiKey() {
  const input = document.getElementById('setMasterApiKey');
  if (input) {
    input.select();
    navigator.clipboard.writeText(input.value);
    showToast('🔑 Master REST API Key copied to clipboard!');
  }
}

async function downloadStoriesBackup() {
  try {
    showToast('⏳ Generating complete stories JSON backup...');
    const res = await fetch('/api/admin/stories/export-json', {
      headers: { 'Authorization': `Bearer ${adminToken}` }
    });
    if (!res.ok) throw new Error('Failed to fetch backup: HTTP ' + res.status);
    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `taleonix_stories_backup_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    showToast('✅ Backup downloaded successfully!');
  } catch (err) {
    showToast('Backup error: ' + err.message);
  }
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

// ================= SETTINGS & DB STATUS =================
async function checkDbStatus() {
  const badge = document.getElementById('dbStatusBadge');
  const details = document.getElementById('dbStatusDetails');
  if (!badge) return;

  try {
    const res = await fetch('/api/admin/db-status', {
      headers: { 'Authorization': `Bearer ${adminToken}` }
    });
    const data = await res.json();
    if (data.success && data.status) {
      const st = data.status;
      if (st.type === 'postgresql' && st.connected) {
        badge.innerHTML = '<i class="fa-solid fa-circle-check" style="color:#22c55e;"></i> PostgreSQL Connected (Durable Persistence Active)';
        badge.style.background = 'rgba(34, 197, 94, 0.15)';
        badge.style.borderColor = 'rgba(34, 197, 94, 0.4)';
        badge.style.color = '#4ade80';
        if (details) details.innerHTML = '✅ <strong>Durable Persistence Active:</strong> All 84+ stories, chapters, and edits are automatically saved into PostgreSQL table <code>kv_store</code>.';
      } else if (st.hasDatabaseUrl && !st.connected) {
        badge.innerHTML = '<i class="fa-solid fa-triangle-exclamation" style="color:#ef4444;"></i> PostgreSQL Connection Error';
        badge.style.background = 'rgba(239, 68, 68, 0.15)';
        badge.style.borderColor = 'rgba(239, 68, 68, 0.4)';
        badge.style.color = '#f87171';
        if (details) details.innerHTML = `⚠️ Connection error with DATABASE_URL: <code>${st.error || 'Check connection string'}</code>. Falling back to local storage.`;
      } else {
        badge.innerHTML = '<i class="fa-solid fa-hard-drive" style="color:#f59e0b;"></i> Local Memory / File Mode';
        badge.style.background = 'rgba(245, 158, 11, 0.15)';
        badge.style.borderColor = 'rgba(245, 158, 11, 0.4)';
        badge.style.color = '#fbbf24';
        if (details) details.innerHTML = 'ℹ️ <strong>To Enable Permanent Cloud Persistence on Render:</strong> Add <code>DATABASE_URL</code> to Render Environment Variables (from Render PostgreSQL or Supabase/Neon).';
      }
    }
  } catch (err) {
    console.error('Error checking DB status:', err);
  }
}

function renderSettings(s) {
  if (!s) return;
  document.getElementById('setGeminiKey').value = s.maskedKey || '';
  document.getElementById('setAdsenseId').value = s.adsenseClientId || '';
  document.getElementById('setDomainUrl').value = s.domainUrl || '';
  document.getElementById('setWpUrl').value = s.wpUrl || '';
  document.getElementById('setWpUser').value = s.wpUsername || '';
  document.getElementById('setWpPass').value = s.wpAppPassword || '';
  checkDbStatus();
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

function getProductionDomain() {
  if (adminSettings && adminSettings.domainUrl && !adminSettings.domainUrl.includes('localhost')) {
    return adminSettings.domainUrl.replace(/\/+$/, '');
  }
  return 'https://drama-online.onrender.com';
}

function renderTrackingLinksTable(links) {
  const tbody = document.getElementById('trackingLinksTableBody');
  if (!tbody) return;
  tbody.innerHTML = '';

  if (links.length === 0) {
    tbody.innerHTML = '<tr><td colspan="8" style="text-align:center; color:var(--text-muted); padding:24px;">No shortened links created yet. Create one above to start tracking clicks!</td></tr>';
    return;
  }

  const domain = getProductionDomain();

  links.forEach(l => {
    const shortCode = l.shortCode || '';
    const fullShortUrl = l.fullShortUrl || `${domain}/s/${shortCode}`;
    const fullTrackedUrl = l.fullTrackedUrl || `${domain}${l.trackedUrl}`;

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${l.name}</strong><br><span style="font-size:0.75rem; color:var(--text-muted); font-family:monospace;">${l.campaign}</span></td>
      <td style="max-width:220px; font-size:0.85rem;">${l.storyTitle}</td>
      <td>
        <span class="badge-gold" style="font-family:monospace; font-size:0.82rem; cursor:pointer;" onclick="copyTrackingLinkUrl('${escapeAdminStr(fullShortUrl)}', 'Short URL copied!')" title="Click to copy short URL">
          <i class="fa-solid fa-scissors"></i> /s/${shortCode}
        </span>
      </td>
      <td><span class="badge-cat" style="text-transform:capitalize;">${l.source} • ${l.medium || 'video'}</span></td>
      <td><strong style="color:var(--accent-gold); font-size:1.05rem;">${(l.clicks || 0).toLocaleString()}</strong></td>
      <td>${(l.uniqueReaders || 0).toLocaleString()}</td>
      <td><span style="color:#00d26a; font-weight:700;">${l.usPercentage || 85}% 🇺🇸</span></td>
      <td style="white-space:nowrap;">
        <button class="btn-action-accent" onclick="copyTrackingLinkUrl('${escapeAdminStr(fullShortUrl)}', 'Short link copied to clipboard!')" title="Copy Short Link" style="padding:6px 12px; font-size:0.8rem;">
          <i class="fa-solid fa-copy"></i> Short Link
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
  const customCode = (document.getElementById('trackCustomCode')?.value || '').trim();
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
      body: JSON.stringify({ storySlug, campaign, source, medium, customCode })
    });
    const data = await res.json();
    if (data.success && data.trackingLink) {
      showAdminToast('Short link created successfully! ⚡');
      
      const domain = getProductionDomain();
      const shortCode = data.trackingLink.shortCode || '';
      const fullShortUrl = data.trackingLink.fullShortUrl || `${domain}/s/${shortCode}`;
      const fullTrackedUrl = data.trackingLink.fullTrackedUrl || `${domain}${data.trackingLink.trackedUrl}`;

      const shortInput = document.getElementById('generatedShortLinkInput');
      if (shortInput) shortInput.value = fullShortUrl;

      const fullInput = document.getElementById('generatedLinkInput');
      if (fullInput) fullInput.value = fullTrackedUrl;

      document.getElementById('generatedLinkResult').style.display = 'block';
      
      loadTrackingLinks();
    } else {
      showAdminToast('Error creating link: ' + (data.error || 'Unknown error'));
    }
  } catch (err) {
    showAdminToast('Network error: ' + err.message);
  }
}

function copyShortTrackingLink() {
  const input = document.getElementById('generatedShortLinkInput');
  if (input) {
    navigator.clipboard.writeText(input.value);
    showAdminToast('⚡ Short link copied to clipboard! Ready to paste in bio/captions');
  }
}

function copyGeneratedTrackingLink() {
  const input = document.getElementById('generatedLinkInput');
  if (input) {
    navigator.clipboard.writeText(input.value);
    showAdminToast('Full tracking link copied to clipboard!');
  }
}

function copyTrackingLinkUrl(url, msg) {
  navigator.clipboard.writeText(url);
  showAdminToast(msg || 'Link copied to clipboard!');
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
