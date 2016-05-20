// var modal = document.getElementById('poppis');
// var boton = document.getElementById('boton');

// boton.onclick=function() {
// 	modal.style.display="block";
// }

var sign = document.getElementById('input1').value;

if (sign == "pisces") {	


	console.log(sign);
}

		$('#boton').click(function() {
			$('.overlay').css('visibility','visible').click(function() {
				$('.overlay').css('visibility','hidden');
			});
		});

// $(document).ready(function(){

// $("#homelink").click(function(){
//    calcRotation(0);
// });

// $("#aboutLink").click(function(){
//   calcRotation(90);
// });

// $("#newsLink").click(function(){
//    calcRotation(180);
// });

// $("#contactLink").click(function(){
// calcRotation(270);
// });

// function calcRotation(rot){
//    $("#cube").css("transform", "rotateY(-" + rot + "deg)");
// }
// });