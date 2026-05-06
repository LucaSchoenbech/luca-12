async function check() {
  const url = 'https://image.pollinations.ai/prompt/a%20modern%20pharmaceutical%20laboratory?width=1470&height=980&nologo=true';
  const res = await fetch(url);
  console.log(res.status, res.headers.get('content-type'));
}
check();
