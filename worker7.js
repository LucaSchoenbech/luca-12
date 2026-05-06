import fs from 'fs';
async function run() {
  const ids = [
    '1522071820081-009f0129c71c', // A
    '1542744173-8e7e53415bb0', // B
    '1552664730-d307ca884978', // C
    '1486406146926-c627a92ad1ab', // D
    '1504384308090-c894fdcc538d', // E
    '1560250097-0b93528c311a', // F
  ];
  for (let id of ids) {
    let html = "no alt";
    try {
      const controller = new AbortController();
      const signal = controller.signal;
      setTimeout(() => controller.abort(), 2000);
      const res = await fetch(`https://unsplash.com/photos/${id}`, { signal });
      const text = await res.text();
      const match = text.match(/"alt_description" *: *"([^"]*)"/);
      if (match) html = match[1];
    } catch(e) {}
    console.log(id, html);
  }
}
run();
