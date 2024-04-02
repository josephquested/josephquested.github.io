import marked from 'https://cdn.jsdelivr.net/npm/marked/marked.min.js';

fetch('https://api.github.com/repos/josephquested/moat-facts/contents/')
  .then(response => response.json())
  .then(data => {
    // Filter the list to include only markdown files
    const markdownFiles = data.filter(file => file.name.endsWith('.md'));
    // Now you can use markdownFiles to load and display your markdown content
    console.log(markdownFiles); // This logs the array of markdown files
    // Assuming markdownFiles is the array of files you logged
    markdownFiles.forEach(file => {
    fetch(file.download_url)
      .then(response => response.text())
      .then(markdown => {
        // Convert Markdown to HTML
        const htmlContent = marked(markdown);
  
        // Create a container for the HTML content. Here, you're creating a <div> which will
        // contain your markdown content. If you strictly need <p> tags, adjust accordingly.
        const div = document.createElement('div');
        div.innerHTML = htmlContent;
  
        // Append it to the body or any specific container on your page
        document.body.appendChild(div);
      })
      .catch(error => console.error('Error fetching markdown file:', error));
  });
  
  })
  .catch(error => console.error('Error fetching repository contents:', error));
