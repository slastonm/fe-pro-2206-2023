$(document).ready(function(){
    $('.responsive-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots:true,
        responsive: [
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            }
          ]
        
    });
});