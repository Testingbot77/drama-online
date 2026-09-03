const fs = require('fs');
const path = require('path');

const STORIES_PATH = path.join(__dirname, 'data', 'stories.json');
const TRACKING_PATH = path.join(__dirname, 'data', 'tracking_links.json');
const ANALYTICS_PATH = path.join(__dirname, 'data', 'analytics.json');

// 1. Reset all stories views and uniqueVisitors to 0
if (fs.existsSync(STORIES_PATH)) {
  const stories = JSON.parse(fs.readFileSync(STORIES_PATH, 'utf8'));
  stories.forEach(s => {
    s.views = 0;
    s.uniqueVisitors = 0;
  });
  fs.writeFileSync(STORIES_PATH, JSON.stringify(stories, null, 2), 'utf8');
  console.log(`✅ Reset ${stories.length} stories views to 0!`);
}

// 2. Reset tracking links clicks and readers to 0
if (fs.existsSync(TRACKING_PATH)) {
  const trackingLinks = JSON.parse(fs.readFileSync(TRACKING_PATH, 'utf8'));
  trackingLinks.forEach(tl => {
    tl.clicks = 0;
    tl.uniqueReaders = 0;
    tl.estimatedRevenueUsd = 0;
  });
  fs.writeFileSync(TRACKING_PATH, JSON.stringify(trackingLinks, null, 2), 'utf8');
  console.log(`✅ Reset ${trackingLinks.length} tracking links clicks to 0!`);
}

// 3. Reset analytics.json to clean live 0 state
const cleanAnalytics = {
  overview: {
    totalPageviews: 0,
    uniqueVisitors: 0,
    usTrafficPercentage: 0,
    avgReadTimeSeconds: 0,
    estimatedRevenueUsd: 0,
    averageRpmUsd: 24.5,
    adImpressions: 0,
    adCtr: "0.00%",
    estimatedAdSenseRevenueUsd: 0
  },
  trafficSources: [
    { source: "Facebook Reels", visitors: 0, percentage: 0 },
    { source: "TikTok Shorts", visitors: 0, percentage: 0 },
    { source: "Instagram Reels", visitors: 0, percentage: 0 },
    { source: "Direct / Other", visitors: 0, percentage: 0 }
  ],
  geoBreakdown: [
    { country: "United States 🇺🇸", visitors: 0, percentage: 0, rpm: "$28.50" },
    { country: "United Kingdom 🇬🇧", visitors: 0, percentage: 0, rpm: "$21.00" },
    { country: "Canada 🇨🇦", visitors: 0, percentage: 0, rpm: "$19.50" }
  ],
  recentVisitors: [],
  facebookCampaigns: [],
  topStories: []
};

fs.writeFileSync(ANALYTICS_PATH, JSON.stringify(cleanAnalytics, null, 2), 'utf8');
console.log('✅ Reset data/analytics.json to 0!');
