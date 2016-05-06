$(document).ready(function() {
	$("#divSnow").websnowjq();
	$('#appendBtn').click(function() {
		$('li').addClass('intro')
	})		
	$('#appendBtn').click(function() {
		$('#newList').append('<li>four</li>')
		$('#newList').prepend('<li>zero</li>')
	})

	$('#animateBtn').click(function() {
		$('#divBox').animate({
			left: '300px',
			width: '500px',
			height: '400px'
		})

		$('#divSquare').animate ({			
			left: '800px',
			width: '500px',
			height: '400px'			
		})
	})
	$('#btn').mouseenter(function() {
		$('.intro').hide('slow')

	})
	$('.intro').mousedown(function() {
		$('.intro').fadeOut()
	})
	$('#btn').dblclick(function() {
		$('.intro').fadeToggle('slow')
		$('.hiddenCode').fadeToggle('fast')
		$('.classThree').slideToggle(1000)
	})
})