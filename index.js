var app = document.getElementById('app')
changePage({target: {innerHTML: 'home'}})

var links = document.getElementsByClassName('nav-link')
for (key in Object.keys(links)) {
  links[key].addEventListener("click", changePage)
}

function changePage (e) {
  emptyNode(app)
  switch (e.target.innerHTML) {
    case "home":
      renderHome()
      break
    case "games":
      renderGames()
      break
    case "contact":
      renderContact()
      break
  }
}

function appendNode (node, text) {
  var newNode = document.createElement(node)
  var textNode = document.createTextNode(text)
  newNode.appendChild(textNode);
  app.appendChild(newNode);
}

function appendLink (link, text) {
  var a = document.createElement('a')
  a.setAttribute('href', link);
  a.innerHTML = text;
  app.appendChild(a);
}

function emptyNode (node) {
  while (node.firstChild) {
    app.removeChild(node.firstChild);
  }
}

// page render

function renderHome () {
  appendNode('h2', 'home')
  appendNode('p', 'welcome to my webpage')
}

function renderGames () {
  appendNode('h2', 'games')
  appendLink('http://quested-immune.herokuapp.com', 'immune')
}

function renderContact () {
  appendNode('h2', 'contact')
  appendNode('p', '021647472')
  appendLink('mailto:josephquested@gmail.com', 'josephquested@gmail.com')
}
