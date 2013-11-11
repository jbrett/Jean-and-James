(function($) {
	"use strict";

	$(document).ready(function(){
	    $("a[rel^='prettyPhoto']").prettyPhoto();
	  });


	$('button.navButton').click(function(e) {
		$('#mainNav').slideToggle('slow');
	});
	

})(jQuery);
