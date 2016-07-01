
function validateFName(input) {
	var regEx = /^.{1,}$/

	if (regEx.test(input)==true) {
		return input
	}
	else {
		var warning = document.getElementById('warnings')	
		var nameWarning = document.createTextNode("Please enter first name")
		var paragraph = document.createElement('p')
		paragraph.className = "message"		
		warning.appendChild(paragraph)
		paragraph.appendChild(nameWarning)
	}	
}

function validateLName(input) {
	var regEx = /^.{1,}$/

	if (regEx.test(input)==true) {
		return input
	}
	else {
		var warning = document.getElementById('warnings')	
		var nameWarning = document.createTextNode("Please enter last name")
		var paragraph = document.createElement('p')
		paragraph.className = "message"		
		warning.appendChild(paragraph)
		paragraph.appendChild(nameWarning)
	}	
}

function validateEmail(input) {	
	var regEx = /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,5}$/

	if (regEx.test(input)==true) {
		return input
	}
	else {
		var warning = document.getElementById('warnings')	
		var emailWarning = document.createTextNode("Please enter valid email")
		var paragraph = document.createElement('p')
		paragraph.className = "message"		
		warning.appendChild(paragraph)
		paragraph.appendChild(emailWarning)
	}
}

function success(inputF, inputL, inputE) {
	var regFname = /^.{1,}$/
	var regLname = /^.{1,}$/
	var regEmail = /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,5}$/

	return regFname.test(inputF) && regLname.test(inputL) && regEmail.test(inputE)
}

function submit() {

	var firstName = validateFName(document.getElementsByName('firstName')[0].value)
	var lastName = validateLName(document.getElementsByName('lastName')[0].value)
	var phone = document.getElementsByName('phone')[0].value
	// var emailInput = document.getElementsByName('email')[0].value
	var email = validateEmail(document.getElementsByName('email')[0].value)
	var gender = document.getElementsByName('gender')
	var color = document.getElementsByName('color')
	var continent = document.getElementsByName('continent')
	var bio = document.getElementsByName('bio')[0].value
	var inputs = document.getElementById('inputs') 
	var infoText = []
  	var labelsText = []

	if (gender[0].checked){
		gender = gender[0].value		
	}
	else if (gender[1].checked){
		gender =  gender[1].value		
	}
	else if (gender[2].checked){		
		gender = gender[2].value		
	}
	else {
		gender = ""
	}

	if (color[0].checked) {
		color = color[0].value
	}
	else if (color[1].checked){
		color = color[1].value		
	}
	else if (color[2].checked){
		color = color[2].value		
	}
	else {
		color = ""
	}	

	if (continent[0].checked) {
		continent = continent[0].value
	}
	else if (continent[1].checked) {
		continent = continent[1].value
	}
	else if (continent[2].checked) {
		continent = continent[2].value
	}
	else if (continent[3].checked) {
		continent = continent[3].value
	}
	else if (continent[4].checked) {
		continent = continent[4].value
	}
	else if (continent[5].checked) {
		continent = continent[5].value
	}	
	else {
		continent = ""
	}							

	if (success(firstName, lastName, email) == true) {
		form.style.display = 'none'
		document.getElementById('submit').style.display = 'none'
		inputs.style.display = 'block'
	}
	else {
		inputs.style.display = 'none'
	}

	var labels = ["First Name: ", "Last Name: ", "Phone: ", "Email: ", "Gender: ", "Color: ", "Continent: ", "Bio: "]
	var info = [firstName, lastName, phone, email, gender, color, continent, bio]

  	for (var i = 0; i < info.length; i++) {
  		var div = document.createElement('div')  		
  		var h3label = document.createElement('h3')
  		var h3input = document.createElement('h3')
  		div.className = "input-item"
  		h3label.className = "input-label"
  		h3input.className = "user-input"

  		labelsText[i] = document.createTextNode(labels[i])
  		infoText[i] = document.createTextNode(info[i])

  		inputs.appendChild(div)
  		div.appendChild(h3label)
  		div.appendChild(h3input)
  		h3label.appendChild(labelsText[i])
  		h3input.appendChild(infoText[i])
  	}
}

document.getElementById('submit').addEventListener('click', submit, false)
