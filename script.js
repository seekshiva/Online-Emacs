$(document).ready(function() {
	$('.buffer').css('height',function() {
		return $(window).height()-70;
	    });
	$(window).resize(function() {
		$('.buffer').css('height',function() {
			return $(window).height()-70;
		    });
	    });
    });