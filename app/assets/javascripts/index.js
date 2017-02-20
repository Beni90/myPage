$(document).ready(function(){
	$("#moreInfoButton").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#services").offset().top
	    }, 2000);
		}
});