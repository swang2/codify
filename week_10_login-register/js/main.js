// In Class Project: Modify the login app to register a new user. Test that a new user can register, and login on the same page without reloading the page. Check to make sure that the username is not already taken and that the password is at least 8 characters long.
var objPeople = [
	{
		username: "sam",
		password: "password25"
	},
	{
		username: "matt",
		password: "password88"
	},
	{
		username: "chris",
		password: "password3"
	}
]


//login functionality
function getInfo() {
	//retrieve data input from the form
	var username = document.getElementById("username").value
	var password = document.getElementById("password").value
	
	//loop through all the user objects and confirm if the username and passwords are correct
	for(i = 0; i < objPeople.length; i++) {
		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + " is logged in!!!")
			return
		}
	}

	//error if username and password do not match
	console.log("incorrect username or password")
}

function register() {
	var newUsername = document.getElementById("newUsername").value
	var newPassword = document.getElementById("newPassword").value
	var userValidator = document.getElementById('userValidator')
	var passValidator = document.getElementById('passValidator')

	for (var i = 0; i < objPeople.length; i++) {
		if (newUsername == objPeople[i].username) {
			userValidator.innerText = 'Username taken'
			return
		}
	}

	if (newPassword.length < 8) {
		passValidator.innerText = 'Password too short'
		return
	}

	var newUser = {
		username: newUsername,
		password: newPassword
	}

	objPeople.push(newUser)	
console.log(objPeople);	
}
