		var height = ($(window).height()*0.3)+'px';

		
		$(document).ready(function(){
			$('.f_elast').css('height', height);
		});

	
 
		
		//new mlPushMenu( document.getElementById( 'mp-menu' ), document.getElementById( 'trigger' ) );

		$('body').on('click', '.f_elast', function(){
			$(this).animate({
				height: "70vh"
			}, 370, function() {

			});
			//$(this).css('height','70vh');
			$(this).siblings('.f_elast').animate({
				height: "15vh"
			}, 370, function() {

			});
			//$(this).siblings('.f_elast').css('height','15vh');
		});
