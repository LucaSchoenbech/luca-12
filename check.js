import https from 'https';
const check = (url) => new Promise(resolve => {
  https.get(url, res => resolve(res.statusCode));
});
async function run() {
  console.log('1:', await check('https://images.unsplash.com/photo-1532187875605-7fe358477126'));
  console.log('2:', await check('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158'));
  console.log('3:', await check('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e'));
  console.log('4:', await check('https://images.unsplash.com/photo-1549463599-24398344800b'));
}
run();
