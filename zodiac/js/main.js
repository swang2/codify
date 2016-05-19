
	// read user input


	// array of signs



// function display(){
// 	var sign = document.getElementById('input1').value;	
// 	for (var i = 0; i < options.length; i++) {
// 		if (sign == options[i]) {	
// 			console.log(options[i]);
// 		}
// 		else {
// 			console.log("no");
// 		}
// 	}
// }


function display(){
	var sign = document.getElementById('input1').value;

	var zodiac = ["aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces"];

	// var signId = ["'#popari'", "'#poptau'", "'#popgem'", "'#popcan'", "'#popleo'", "'#popvir'", "'#poplib'", "'#popscor'", "'#popsag'", "'#popcap'", "'#popaqua'", "'#poppis'"];

	var signId = ["#popari", "#poptau", "#popgem", "#popcan", "#popleo", "#popvir", "#poplib", "#popscor", "#popsag", "#popcap", "#popaqua", "#poppis"];	

	for (var i = 0; i < zodiac.length; i++) {
		if (sign == zodiac[i]) {	
				$(signId[i]).find('.overlay').css('visibility','visible');
				// .click(function() {
				// 	$('.overlay').css('visibility','hidden');
				// });
			console.log(sign);
		}
	}

}

