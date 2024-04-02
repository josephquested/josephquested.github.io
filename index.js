import marked from 'https://cdn.skypack.dev/marked';

async function main() {
  const res = await fetch('https://api.github.com/repos/josephquested/josephquested.github.io/contents/')
  const data = await res.json()
  const markdownFiles = data.filter(file => file.name.endsWith('.md'));
  const markdownTexts = await Promise.all(
    markdownFiles.map(async file => {
      const res = await fetch(file.download_url)
      const text = await res.text()
      return text
    })
  )

  const htmlContent = markdownTexts.map(md => marked(md))
  for (const html of htmlContent) {
    const div = document.createElement('div');
    div.innerHTML = htmlContent;
    document.body.appendChild(div);
  }
}

main().catch(e => console.error(e))