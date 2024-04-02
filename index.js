async function main() {
  const res = await fetch('https://api.github.com/repos/josephquested/josephquested.github.io/contents/');
  const data = await res.json();
  const markdownFiles = data.filter(file => file.name.endsWith('.md'));

  // Fetching the Markdown content
  const markdownTexts = await Promise.all(markdownFiles.map(async file => {
    const res = await fetch(file.download_url);
    const text = await res.text();
    return text;
  }));

  // Directly inserting the Markdown content into the HTML
  markdownTexts.forEach(md => {
    const div = document.createElement('div');

    // Here, you're treating the Markdown as plain text
    // If you wanted to handle simple Markdown elements like **bold** or *italic*
    // you'd need to write or include a basic parser here
    div.textContent = md; // Use textContent for plain text to prevent HTML injection

    document.body.appendChild(div);
  });
}

main().catch(e => console.error(e));
