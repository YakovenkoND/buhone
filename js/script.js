$(document).ready(function(){
	$('.clients-inner').slick({
		dots:true,
		adaptiveHeight:true,
		slidesToShow:4,
		 responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        dots: false
      }
     },
	     {
	     	breakpoint: 480,
	      settings: {
	        slidesToShow: 2,
	        dots: false
	     }
	   }
     ]
	});
});