var speed = 0;

function right() {
	var width = $('#scroll').width() + parseInt($('#scroll li').css('marginRight'));
	$("#scroll").animate({
		scrollLeft: width
	}, 1000, "linear");
}

function left() {
	var width = $('#scroll').width() + parseInt($('#scroll li').css('marginLeft'));
	
	$("#scroll").animate({
		scrollLeft: -width
	}, 1000, "linear");
}
