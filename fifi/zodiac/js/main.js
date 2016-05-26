function display(e){

	var zodiac = ["aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces"];


	var signId = ["#popari", "#poptau", "#popgem", "#popcan", "#popleo", "#popvir", "#poplib", "#popscor", "#popsag", "#popcap", "#popaqua", "#poppis"];	

	if (e.keyCode ==13) {
		for (var i = 0; i < zodiac.length; i++) {
			sign = document.getElementById('input1').value.toLowerCase();
			if (sign == zodiac[i]) {	
				$(signId[i]).css({
					'visibility':'visible', 
					'opacity':'1'
				});
				$('.overlay').click(function() {
					$(this).hide();
				});
				console.log(sign);			
			}	
		}
	}
}


