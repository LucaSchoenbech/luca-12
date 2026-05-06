// check pexels alt text
import fs from 'fs';
async function run() {
  const ids = ['3825586', '3786157', '3938022', '3844581'];
  for (let id of ids) {
    const res = await fetch(`https://www.pexels.com/photo/${id}/`);
    const html = await res.text();
    const match = html.match(/<title>(.*?)[|-] Pexels<\/title>/i);
    console.log(id, '->', match ? match[1].trim() : 'no title');
  }
}
run();
