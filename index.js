var app = document.getElementById('app')
var navs = document.getElementsByClassName('nav-button')

for (key in Object.keys(navs)) {
  if (navs[key] !== undefined) {
    navs[key].addEventListener("click", changePage)
    flicker.init(navs[key])
  }
}

changePage({target: {id: 'home', classList: {add: () => "lol"}}})

function changePage (e) {
  emptyNode(app)
  setNavActive(e.target)

  switch (e.target.id) {
    case "home":
      renderHome()
      break
    case "frasier":
      renderFrasier()
      break
    case "podcast":
      renderPodcast()
      break
    case "contact":
      renderContact()
      break
    }
}

function appendNode (node, text) {
  var newNode = document.createElement(node)
  var textNode = document.createTextNode(text)
  newNode.appendChild(textNode)
  app.appendChild(newNode)
}

function appendLink (link, text) {
  var a = document.createElement('a')
  a.setAttribute('href', link)
  a.innerHTML = text
  app.appendChild(a)
}

function emptyNode (node) {
  while (node.firstChild) {
    app.removeChild(node.firstChild)
  }
}

function setNavActive (nav) {
  console.log(nav);
  for (key in Object.keys(navs)) {
    if (navs[key] !== undefined) {
      navs[key].classList.remove("active")
    }
  }
  nav.classList.add("active")
}

// page render
flicker.init(document.getElementById('title'))

function renderHome () {
  appendNode('h2', 'home')
  appendNode('p', 'welcome to my webpage')
}

function renderContact () {
  appendNode('h2', 'contact')
  appendLink('tel:+6421647472', '021 647 472')
  appendNode('p', '')
  appendLink('mailto:josephquested@gmail.com', 'josephquested@gmail.com')
}

function renderFrasier () {
  appendNode('h2', 'frasier')
  appendLink('http://quested.co/scrambled-egg', 'stream frasier online')
}

function renderPodcast () {
  appendNode('h2', 'podcast')
  appendLink('http://boyfriendspodcast.com', 'boy friends podcast')
}
