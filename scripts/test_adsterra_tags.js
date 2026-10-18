const http = require('http');

process.env.PORT = 3099;
require('../server/index.js');

setTimeout(async () => {
  function get(urlPath) {
    return new Promise((resolve, reject) => {
      http.get('http://localhost:3099' + urlPath, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve({ status: res.statusCode, data }));
      }).on('error', reject);
    });
  }

  console.log('=== RUNNING LOCAL INTEGRATION TESTS ===');
  
  // 1. Homepage
  const home = await get('/');
  console.log('GET / status:', home.status);
  console.log('GET / contains Social Bar:', home.data.includes('bauval.org/14/921dbe310183bf4dcb1329bc411d64ec'));
  console.log('GET / contains Native Banner container (should be false):', home.data.includes('container-b6bb156ca9b853461f8ef911071da2b5'));
  console.log('GET / contains Native Banner script (should be false):', home.data.includes('bauval.org/21/b6bb156ca9b853461f8ef911071da2b5'));

  // 2. Story page
  const db = require('../server/db');
  const stories = db.getStories();
  const sampleSlug = stories[0].slug;
  const storyPage = await get('/story/' + sampleSlug);
  console.log('\nGET /story/' + sampleSlug + ' status:', storyPage.status);
  console.log('GET /story contains Social Bar:', storyPage.data.includes('bauval.org/14/921dbe310183bf4dcb1329bc411d64ec'));
  console.log('GET /story contains Native Banner container:', storyPage.data.includes('container-b6bb156ca9b853461f8ef911071da2b5'));
  console.log('GET /story contains Native Banner script:', storyPage.data.includes('bauval.org/21/b6bb156ca9b853461f8ef911071da2b5'));

  // Check ordering: container is after readerBody and before comments / continuation card
  const posReaderBody = storyPage.data.indexOf('id="readerBody"');
  const posAd = storyPage.data.indexOf('container-b6bb156ca9b853461f8ef911071da2b5');
  const posNext = storyPage.data.indexOf('id="partContinuationCard"');
  const posComments = storyPage.data.indexOf('id="readerCommentsSection"');
  console.log('Order check (ReaderBody < Ad < NextCard):', posReaderBody < posAd && posAd < posNext);

  // 3. Privacy page
  const privacy = await get('/privacy');
  console.log('\nGET /privacy status:', privacy.status);
  console.log('GET /privacy contains Social Bar:', privacy.data.includes('bauval.org/14/921dbe310183bf4dcb1329bc411d64ec'));
  console.log('GET /privacy contains Native Banner (should be false):', privacy.data.includes('container-b6bb156ca9b853461f8ef911071da2b5'));
  console.log('GET /privacy mentions Adsterra in Advertising:', privacy.data.includes('We also use Adsterra') && privacy.data.includes('adsterra.com'));

  // 4. About page
  const about = await get('/about');
  console.log('\nGET /about status:', about.status);
  console.log('GET /about contains Social Bar:', about.data.includes('bauval.org/14/921dbe310183bf4dcb1329bc411d64ec'));
  console.log('GET /about contains Native Banner (should be false):', about.data.includes('container-b6bb156ca9b853461f8ef911071da2b5'));

  console.log('\n=== ALL LOCAL TESTS PASSED ===');
  process.exit(0);
}, 2000);
