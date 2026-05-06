import fs from "fs";
async function get() {
   const res = await fetch("https://unsplash.com/napi/photos/1582719478250-c89cae4dc85b", {
      headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
      }
  });
  if(res.ok) {
     const data = await res.json();
     console.log(data.description, data.alt_description);
  } else { console.log(res.status); }
}
get();
