var app = document.getElementById('app')
var navs = document.getElementsByClassName('nav-button')
for (key in Object.keys(navs)) {
  if (navs[key] !== undefined) {
    navs[key].addEventListener("click", changePage)
  }
}

changePage({target: {innerHTML: 'home'}})

function changePage (e) {
  emptyNode(app)
  setNavActive(document.getElementById(e.target.innerHTML))

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

function setNavActive (nav) {
  console.log(navs)
  for (key in Object.keys(navs)) {
    if (navs[key] !== undefined) {
      navs[key].classList.remove("active")
    }
  }
    nav.classList.add("active")
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