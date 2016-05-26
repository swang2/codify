
function formatDate(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + " " + strTime;
}

var dt = new Date();
var date = formatDate(dt);

$(document).ready(function(){
    $("#post").click(function(){
    	var image = "<img src=img/user.png>";
		var username = $("#username").val();
		var comment = $("#comment").val();  
		var sender = "<h4>From: " + username + "</h4>";
		var post = "<p>" + comment + "</p>";
		var created = "<small>" + date + "</small>";
		var remove = "<a href=\"#\" class=\"remove\">x</a>";
		var block = "<div class=\"comment\">" + image + sender + post + created + remove + "</div>";

        $(".comment-wrapper").append(block);
	    $(".comment-wrapper").on('click','.remove',function(){
	    	$(this).parents('.comment').remove();
	    });
		$(".show").click(function(){
			$(".comment-wrapper").toggle();
		});
    });
});
