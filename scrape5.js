async function testPexels() {
  const ids = ['3825586', '3786157', '3938022', '3844581'];
  for (let id of ids) {
    const res = await fetch(`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?w=10`);
    console.log(id, res.status);
  }
}
testPexels();
