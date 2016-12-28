(function($) {
	"use strict";

    jQuery(document).ready(function($){

       //For wow js 
       new WOW().init();

       //For Sticky nav
       $(".main-menu").sticky({ topSpacing: 0 });

        //Smooth Scroll
       $('li.smooth-menu a').bind('click', function(event) {
       		var $anchor = $(this);
       		var headerH = '79';
       		$('html, body').stop().animate({
       			scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
       		}, 1200, 'easeInOutExpo');
       		event.preventDefault();
       });

        //jquery scroll spay
        $('body').scrollspy({
        	target: ".navbar-collapse",
        	offset: 95
        });



    });


    jQuery(window).load(function(){

        
    });


}(jQuery));