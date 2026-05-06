import fs from 'fs';

async function search(query) {
  const url = `https://unsplash.com/s/photos/${encodeURIComponent(query)}`;
  const res = await fetch(url);
  const html = await res.text();
  
  const matches = [...html.matchAll(/"https:\/\/images\.unsplash\.com\/photo-([a-zA-Z0-9\-]+)\?.*?"/g)];
  const uniqueIds = [...new Set(matches.map(m => m[1]))];
  
  console.log(`Results for ${query}:`);
  for (let i = 0; i < Math.min(5, uniqueIds.length); i++) {
    console.log(`https://images.unsplash.com/photo-${uniqueIds[i]}?auto=format&fit=crop&q=80&w=1470`);
  }
}

async function run() {
  await search('pharmaceutical-laboratory');
  await search('industrial-manufacturing');
  await search('renewable-energy-wind');
  await search('cardboard-packaging-warehouse');
}
run();
