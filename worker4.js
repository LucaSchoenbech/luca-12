import fs from 'fs';
async function run() {
  const res = await fetch('https://images.unsplash.com/photo-1497366216548-37526070297c?w=10');
  console.log(res.status);
}
run();
