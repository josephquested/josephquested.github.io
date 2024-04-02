fetch('https://api.github.com/repos/josephquested/moat-facts/contents/')
  .then(response => response.json())
  .then(data => {
    // Filter the list to include only markdown files
    const markdownFiles = data.filter(file => file.name.endsWith('.md'));
    // Now you can use markdownFiles to load and display your markdown content
    console.log(markdownFiles); // This logs the array of markdown files
  })
  .catch(error => console.error('Error fetching repository contents:', error));
