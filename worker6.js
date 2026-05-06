async function checkImages() {
  const ids = [
    '1504384308090-c894fdcc538d', 
    '1560250097-0b93528c311a', 
    '1612550761232-4a47000e301d', 
    '1554774853-719586f897f3',
    '1517048676732-dce54c498d36', // corporate office people
    '1573164713619-24d4be9ed0d2', // boardroom
    '1542744173-8e7e53415bb0' // handshake
  ];
  for (let id of ids) {
    const res = await fetch(`https://images.unsplash.com/photo-${id}?w=10`);
    console.log(id, res.status);
  }
}
checkImages();
