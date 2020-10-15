  // wow js
  
  wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();
    document.getElementById('moar').onclick = function() {
      var section = document.createElement('section');
      section.className = 'section--purple wow fadeInDown';
      this.parentNode.insertBefore(section, this);
    };
	
	  /* ==== top to button ===== */

$(document).ready(function(){

/*--- upper button---*/

$(window).scroll(function(){


var x = $(window).scrollTop();

if (x>1000) {
  $('#upper').fadeIn(1000);

}else{
 
   $('#upper').fadeOut(1000);

}

})

$('#upper').click(function(){

$('html').animate({scrollTop: 0},2000);

});


});
		/* ====smooth scrolling===== */
$(document).ready(function(){
	  // Add smooth scrolling to all links
	  $("a").on('click', function(event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
		  // Prevent default anchor click behavior
		  event.preventDefault();

		  // Store hash
		  var hash = this.hash;

		  // Using jQuery's animate() method to add smooth page scroll
		  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		  $('html, body').animate({
			scrollTop: $(hash).offset().top
		  }, 800, function(){
	   
			// Add hash (#) to URL when done scrolling (default click behavior)
			window.location.hash = hash;
		  });
		} // End if
	  });
	});