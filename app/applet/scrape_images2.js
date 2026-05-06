async function getAlt(id) {
  try {
    const res = await fetch(`https://unsplash.com/photos/${id}`);
    const html = await res.text();
    const titleMatch = html.match(/<title>(.*?)<\/title>/);
    console.log(id, titleMatch ? titleMatch[1] : 'no title');
  } catch(e) {
    console.log(e);
  }
}
async function run() {
  await getAlt('1584362917165-526a968579e8');
  await getAlt('1579154204601-01588f351e67');
  await getAlt('1532094349884-543bc11b234d');
  await getAlt('1576086213369-94a05551c62f');
  await getAlt('1563213126591-ba46ee00f14b');
}
run();
