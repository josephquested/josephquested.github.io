flicker = {init: init}

var audio = new Audio('./hum.mp3')
var flickerCharacters = ['Q', 'U', 'E', 'S', 'T', 'D', '3', '1', '7']
var navFlickerCharacters = ['h', 'o', 'm', 'e', 'f', 'r', 'a', 's', 'i', 'e', 'r', 'c', 'o', 'n', 't', 'a', 'c', 't']

var minFlickerFrequency = 3000
var maxFlickerFrequency = 11000
var minFlickerSpeed = 100
var maxFlickerSpeed = 500

function init (node) {
  if (node !== undefined) {
    var characterNodes = splitHTML(node)
    characterNodes.forEach((characterNode) => {
      initFlicker(characterNode)
    })
  }
}

function initFlicker (node) {
  var originalCharacter = node.innerHTML
  window.setInterval(() => {
    flickerCharacter(node, originalCharacter)
  }, randomInt(minFlickerFrequency, maxFlickerFrequency));
}

function flickerCharacter (node, originalCharacter) {
  var newCharacter = navFlickerCharacters[randomInt(0, flickerCharacters.length - 1)]
  node.innerHTML = newCharacter
  flickerColor(node)
  hum(true)

  setTimeout(() => {
    node.innerHTML = originalCharacter
    flickerColor(node)
    hum(false)
  }, randomInt(minFlickerSpeed, maxFlickerSpeed));
}

function convertCharacter (originalCharacter, character) {
  if (originalCharacter === '.') return '.'
  if (originalCharacter == originalCharacter.toLowerCase()) {
    return navFlickerCharacters(randomInt(0, randomCharacters.length))
  } else {
    return character
  }
}

function flickerColor (node) {
  if (node.style.color !== 'white') {
    node.style.color = 'white'
  } else {
    node.style.color = 'red'
  }
}

// helpers
randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function splitHTML (node, type) {
  var characterNodes = []
  var characters = node.innerHTML.split('')
  node.innerHTML = ''
  characters.forEach((character) => {
    var textNode
    if (node.id == 'title') {
      textNode = document.createElement('h1')
    } else {
      textNode = document.createElement('p')
    }
    textNode.innerHTML = character
    node.appendChild(textNode)
    characterNodes.push(textNode)
  })
  return characterNodes
}

function hum (play) {
  if (play) {
    audio.play()
  } else {
    audio.pause();
    audio.currentTime = 0;
  }
}
