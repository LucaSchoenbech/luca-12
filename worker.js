import fs from 'fs';

async function search(query) {
  const url = `https://unsplash.com/napi/search/photos?query=${encodeURIComponent(query)}&per_page=10&page=1`;
  const res = await fetch(url, {
      headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
  });
  if(res.ok) {
     const data = await res.json();
     console.log(`\nResults for ${query}:`);
     for (const photo of data.results) {
         console.log(photo.id, '->', photo.description || photo.alt_description);
     }
  } else {
     console.log('Error', res.status);
  }
}

async function run() {
  await search('executive search');
  await search('corporate office');
  await search('shaking hands consulting');
}
run();
