import fs from 'fs';
async function searchPexels(query) {
  const url = `https://www.pexels.com/search/${encodeURIComponent(query)}/`;
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' }});
  const html = await res.text();
  const matches = [...html.matchAll(/data-photo-id="(\d+)"/g)];
  console.log(`Results for ${query}:`);
  for (let m of matches.slice(0, 5)) {
    console.log(m[1]);
  }
}
searchPexels('corporate office');
searchPexels('meeting business');
