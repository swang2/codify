var clock = document.getElementById('clock')
// var day = document.getElementById('day')
var date = document.getElementById('date')

function addZero(i) {
	if (i < 10) {
		i = "0" + i;
	}
	return i;
}

function getTime() {
	var today = new Date()	
	var hour = addZero(today.getHours())
	var min = addZero(today.getMinutes())
	var sec = addZero(today.getSeconds())	
	// var time = hour + ":" + min + ":" + sec
	var time
	setTimeout('getTime()', 500)


	if (hour > 12) {
		hour -= 12
		time = hour + ":" + min + ":" + sec + " PM"
	}
	else {
		time = hour + ":" + min + ":" + sec + " AM"
	}

	clock.textContent = time
}

// function getDay() {
// 	var today = new Date()
// 	var d = new Array(7)
//     d[0] = "Sun";
//     d[1] = "Mon";
//     d[2] = "Tue";
//     d[3] = "Wed";
//     d[4] = "Thu";
//     d[5] = "Fri";
//     d[6] = "Sat";

// 	day.textContent = d[today.getDay()]   	
// }

function todayDate() {
	var today = new Date()
	var month = addZero(today.getMonth())
	var day = addZero(today.getDate())
	var year = today.getFullYear()

	var d = new Array(7)
    d[0] = "Sun";
    d[1] = "Mon";
    d[2] = "Tue";
    d[3] = "Wed";
    d[4] = "Thu";
    d[5] = "Fri";
    d[6] = "Sat";

	// month = new Array(12)
	// month[0] = "January";
	// month[1] = "February";
	// month[2] = "March";
	// month[3] = "April";
	// month[4] = "May";
	// month[5] = "June";
	// month[6] = "July";
	// month[7] = "August";
	// month[8] = "September";
	// month[9] = "October";
	// month[10] = "November";
	// month[11] = "December";

	// date.textContent = d[today.getDay()] + ", " + month + "/" + day + "/" + year
	date.textContent = d[today.getDay()] +  " " + day 
}

clock.addEventListener('onload', getTime(), false)
// day.addEventListener('onload', getDay(), false)
date.addEventListener('onload', todayDate(), false)








