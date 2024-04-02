async function main() {
  const res = await fetch('https://api.github.com/repos/josephquested/josephquested.github.io/contents/');
  const data = await res.json();
  const markdownFiles = data.filter(file => file.name.endsWith('.md'));

  const markdownTexts = await Promise.all(markdownFiles.map(async file => {
    const res = await fetch(file.download_url);
    const text = await res.text();
    return text;
  }));

  markdownTexts.forEach(md => {
    const div = document.createElement('div');
    div.textContent = md;
    document.body.appendChild(div);
  });
}

main().catch(e => console.error(e));
