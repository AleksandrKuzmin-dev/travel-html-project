$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        center: true,
        loop: true,
        margin: 30,
        items: 3,
        responsive : {
         
            // breakpoint from 768 up
            0 : {
                items : 1,
                margin: 10,
            },
            390 : {
                items : 2,
                margin: 10
            },
            750 : {
                items : 3,
                margin: 20
            }
        }
    });


var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.destinations__slider-btn-next').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.destinations__slider-btn-prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})
  });



// Mobile menu

document.querySelector('.header__mobile-menu').onclick = function(){
    document.querySelector('.header__mobile-menu-icon').classList.toggle('on');
    document.querySelector('.first-section__header').classList.toggle('first-section__header_mobile');

}



