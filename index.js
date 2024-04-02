import marked from 'https://cdn.skypack.dev/marked';

fetch('https://api.github.com/repos/josephquested/josephquested.github.io/contents/')
  .then(response => response.json())
  .then(data => {
    const markdownFiles = data.filter(file => file.name.endsWith('.md'));
    console.log(markdownFiles);
    markdownFiles.forEach(file => {
    fetch(file.download_url)
      .then(response => response.text())
      .then(markdown => {
        const htmlContent = marked(markdown);
        const div = document.createElement('div');
        div.innerHTML = htmlContent;
        document.body.appendChild(div);
      })
      .catch(error => console.error('Error fetching markdown file:', error));
    });
  })
  .catch(error => console.error('Error fetching repository contents:', error));
