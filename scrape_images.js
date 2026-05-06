async function check() {
  const ids = [
    '1579684385127-1ef15d508118',
    '1504917595217-d4dc5ebe6122',
    '1466611653911-95081537e5b7',
    '1605600659908-0ef719419d41'
  ];
  for (let id of ids) {
    let res = await fetch(`https://unsplash.com/oembed?url=https://unsplash.com/photos/${id}`);
    if (res.ok) {
       let j = await res.json();
       console.log(id, '->', j.title);
    } else {
       console.log(id, '->', res.status);
    }
  }
}
check();
