var app = document.getElementById('app')
var navs = document.getElementsByClassName('nav-link')

for (key in Object.keys(navs)) {
  if (navs[key] !== undefined) {
    flicker.init(navs[key])
  }
}

flicker.init(document.getElementById('title'))

console.log("dont look at me like that")