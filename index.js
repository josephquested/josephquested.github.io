var app = document.getElementById('app')
var navs = document.getElementsByClassName('nav-button')

for (key in Object.keys(navs)) {
  if (navs[key] !== undefined) {
    navs[key].addEventListener("click", changePage)
  }
}

renderHeader()
changePage({target: {innerHTML: 'home'}})

function changePage (e) {
  emptyNode(app)
  setNavActive(document.getElementById(e.target.innerHTML))

  switch (e.target.innerHTML) {
    case "home":
      renderHome()
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
  for (key in Object.keys(navs)) {
    if (navs[key] !== undefined) {
      navs[key].classList.remove("active")
    }
  }
    nav.classList.add("active")
}

// header

function renderHeader () {
  var title = document.getElementById("title")
  var text = "QUESTED.co"
  for (var i = 0; i < text.length; i++) {
    var h1 = document.createElement("h1")
    h1.appendChild(document.createTextNode(text[i]))
    title.appendChild(h1)
    setOnClick(h1)
  }
  // setHeaderProperties(title)
}

function setHeaderProperties (title) {
  title.onmousemove = () => unFocus()
  title.onmouseup = () => unFocus()
  title.style.cursor = "pointer"
}

function setOnClick (node) {
  node.onclick = function () {
    var colors = ["red", "blue", "yellow", "black", "green", "orange", "white", "purple", "teal", "brown"]
    node.style.color = colors[randomInt(0, colors.length)]
  }
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var unFocus = function () {
  if (document.selection) {
      document.selection.empty()
  } else {
      window.getSelection().removeAllRanges()
  }
}

// page render

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
