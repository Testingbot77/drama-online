// WordPress REST API Auto-Publisher (Native fetch)

/**
 * WordPress REST API Auto-Publisher
 * Allows 1-click publishing of drama stories directly to any live WordPress site.
 */
async function publishToWordPress(story, wpSettings) {
  const { wpUrl, wpUsername, wpAppPassword } = wpSettings;

  if (!wpUrl || !wpUsername || !wpAppPassword) {
    throw new Error('WordPress URL, Username, or Application Password is missing');
  }

  const cleanUrl = wpUrl.replace(/\/+$/, '');
  const apiUrl = `${cleanUrl}/wp-json/wp/v2/posts`;
  const authHeader = 'Basic ' + Buffer.from(`${wpUsername}:${wpAppPassword}`).toString('base64');

  // Format paragraphs and scenes into rich HTML blog content
  let formattedHtml = '';
  const paragraphs = story.paragraphs || [];
  const scenes = story.scenes || [];

  paragraphs.forEach((pText, index) => {
    formattedHtml += `<p style="font-size: 18px; line-height: 1.8; margin-bottom: 20px;">${escapeHtml(pText)}</p>`;

    const matchedScene = scenes.find(s => s.insertAfterParagraph === index);
    if (matchedScene) {
      formattedHtml += `
        <div style="margin: 30px 0; text-align: center; border-radius: 12px; overflow: hidden; background: #0B0E17;">
          <img src="${matchedScene.image.startsWith('http') ? matchedScene.image : cleanUrl + matchedScene.image}" alt="Scene Illustration" style="max-width: 100%; height: auto; border-radius: 8px;">
          <p style="font-size: 14px; color: #888; font-style: italic; margin-top: 8px;">${escapeHtml(matchedScene.caption)}</p>
        </div>
      `;
    }
  });

  // Add cliffhanger box
  formattedHtml += `
    <div style="background: #1a1528; border-left: 4px solid #f5c518; padding: 20px; border-radius: 8px; margin-top: 40px;">
      <h3 style="color: #f5c518; margin-top: 0;">⚡ Uncensored Episode 2 Coming Soon!</h3>
      <p style="color: #ddd; margin-bottom: 0;">Bookmark this page and stay tuned to our social channels for the next chapter release.</p>
    </div>
  `;

  const payload = {
    title: story.title,
    content: formattedHtml,
    excerpt: story.hookSummary,
    status: 'publish', // or 'draft'
    slug: story.slug
  };

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authHeader
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || `WordPress Error (${response.status})`);
    }

    return {
      success: true,
      wpPostId: data.id,
      wpPostUrl: data.link
    };
  } catch (err) {
    console.error('[WordPress Sync] Error publishing to WP:', err.message);
    throw err;
  }
}

function escapeHtml(str) {
  return (str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

module.exports = {
  publishToWordPress
};
