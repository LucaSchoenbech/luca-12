async function t() {
  let res = await fetch("https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=10");
  console.log(res.status);
}
t();
