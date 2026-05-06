async function t() {
   let res = await fetch('https://images.unsplash.com/photo-1532187863486-abf9db0c207a?w=10');
   console.log('1532187863486-abf9db0c207a', res.status);
}
t();
