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
  for (key in Object.keys(navs)) {
    if (navs[key] !== undefined) {
      navs[key].classList.remove("active")
    }
  }
    nav.classList.add("active")
}

// flicker header

// String.prototype.splice = function(idx, rem, str) {
//     return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
// }
//
// function randomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//
// function flickerHeader () {
//   var title = document.getElementById("title")
//   var text = "QUESTEDco"
//   setInterval(() => {
//     var newText = text.splice(randomInt(0, text.length), 0, ".");
//     title.innerHTML = newText
//   }, 200)
// }
//
// flickerHeader()

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
  appendNode('p', '021 647 472')
  appendLink('mailto:josephquested@gmail.com', 'josephquested@gmail.com')
}
