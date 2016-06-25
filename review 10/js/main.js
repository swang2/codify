	// Create element review
// create elements
var awesomeDiv = document.createElement('div')

// add class to div
awesomeDiv.className = "yayClass"

// select element from HTML
var section = document.getElementById('Section')

// create text
var awesomeText = document.createTextNode("Hello");

// create Img tag
var yayImg = document.createElement("img")

// set attribute to img
yayImg.setAttribute('src', 'img/google.png')

// add text to div
awesomeDiv.appendChild(awesomeText);

// add img to div
awesomeDiv.appendChild(yayImg);

// add awesomeDiv to Section
section.appendChild(awesomeDiv)

	// arrays
var pokemonArray = ['pikachu', 'squirtle', 'charmander']

var reversePokemon = pokemonArray.reverse()

console.log(reversePokemon)
console.log(pokemonArray.sort())

var numArray = [1,7,3,22,7,8,-1]

console.log(numArray.sort( function(a, b) { return a-b } ))

pokemonArray.push("bulbasaur")
console.log(pokemonArray)

pokemonArray.pop("bulbasaur")
console.log(pokemonArray)

pokemonArray.shift()
console.log(pokemonArray)

pokemonArray.unshift('meowth')
console.log(pokemonArray)

for (var i = 0; i < pokemonArray.length; i++) {
	console.log(pokemonArray[i].length)
}

var num = 23
var string ='hello'
var bool = true
var object = {name: "sofia"}
var arr = [1,2,3]

var things = [num,string,bool,object,arr]

for (var i = 0; i < things.length; i++) {
	console.log(things[i].length)
}

	// function on object








