$(function() {
	var height = $('#textscroll li').height();
	setInterval(function() {
		$('#textscroll ul').animate({
			marginTop: -height
		}, 1000, 'linear', function() {
			$('#textscroll ul li:first').appendTo('#textscroll ul');
			$('#textscroll ul').css('marginTop', '0')
		})
	}, 1000);
})
