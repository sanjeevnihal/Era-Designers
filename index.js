
// var nextIcon = '<img src="Images\arrow-right-circle.svg" alt="swipe-right">';
// var prevIcon = '<img src="Images\arrow-left-circle.svg" alt="swipe-left">';


$(".carousel").owlCarousel({

margin: 0,
loop: true,
// autoplay: true,
// autoplayTimeout: 2000,
// autoplayHoverPause: true,
// nav: true;
// navText: [
//   prevIcon,
//   nextIcon
// ],

responsive: {

  0: {
    items: 1,
    nav: false
  },

  600: {
    items: 1,
    nav: false
  },

  1000: {
    items: 1,
    nav: false
  }


}

});
