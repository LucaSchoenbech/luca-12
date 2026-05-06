import fs from 'fs';

async function search(query) {
  const url = `https://unsplash.com/napi/search/photos?query=${encodeURIComponent(query)}&per_page=5&page=1`;
  const res = await fetch(url, {
      headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
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
  await search('medical research');
  await search('pharma lab');
}
run();
