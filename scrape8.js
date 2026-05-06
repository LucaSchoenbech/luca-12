async function searchWiki(query) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrlimit=5&pithumbsize=1000`;
  const res = await fetch(url);
  const data = await res.json();
  const pages = data.query?.pages || {};
  
  for (const pageId in pages) {
    const page = pages[pageId];
    if (page.thumbnail) {
      console.log(page.title, '->', page.thumbnail.source);
    }
  }
}
searchWiki('pharmaceutical manufacturing');
searchWiki('biotechnology manufacturing');
