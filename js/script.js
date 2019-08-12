var type = new Typed('#typed',{
    stringsElement: '#typed-strings',
    typeSpeed:100,
    
});

// NAVBAR FUNCTION START
$(window).scroll(function(){
    $('nav').toggleClass('scrolled',$(this).scrollTop() > 360);
});
// NAVBAR END
// filter items on button click
var $grid = $('.portfolio-filter').on( 'click','button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
// isotope grid
var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true
  });
  // Magnific POPup
  $('.test-popup-link').magnificPopup({
    type: 'image',
    gallery: {
     enabled: true
   },
 // other options
   });
  //  Owl Carousel
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
// jquery function
$(document).ready(function(){
  $('#btnalert').click(function(){
      alert("Thank you ");
  });
});
// Sumit Wow
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

// modal
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

