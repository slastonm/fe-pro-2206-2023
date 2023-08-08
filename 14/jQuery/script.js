$(document).ready(function(){
    $( "#clickme" ).on( "click", function() {
        $( "#book" ).toggle( "slow", function() {
          // Animation complete.
        });
    });
    $('.your-class').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots:true
    });
});