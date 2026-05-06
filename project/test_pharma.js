async function check() {
  const ids = [
    '1532094349884-543bc11b234d',
    '1576086213369-94a05551c62f',
    '1584362917165-526a968579e8',
    '1579154204601-01588f351e67'
  ];
  for (let id of ids) {
    let res = await fetch(`https://images.unsplash.com/photo-${id}?w=10`);
    console.log(id, res.status);
  }
}
check();
