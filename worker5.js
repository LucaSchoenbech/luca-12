async function checkImages() {
  const ids = [
    '1507679622114-ebba02a6ce44', 
    '1486406146926-c627a92ad1ab', 
    '1522071820081-009f0129c71c', 
    '1556761175-5973dd0f32b7',
    '1542744173-8e7e53415bb0',
    '1552664730-d307ca884978',
    '1486406146926-c627a92ad1ab', // glass building
    '1431540015110-8fd1a6db24e3', // business architecture
  ];
  for (let id of ids) {
    const res = await fetch(`https://images.unsplash.com/photo-${id}?w=10`);
    console.log(id, res.status);
  }
}
checkImages();
