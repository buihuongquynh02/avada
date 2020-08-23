$(document).ready(function(){
    $('.Mega__slide-items').slick({
        dots:false,
        autoplay:true,
        autoplaySpeed:5000,
        prevArrow:'.Mega__slide .arrow__prev',
        nextArrow:'.Mega__slide .arrow__next',
    });
    $('.slide__text-items').slick({
        dots:true,
        autoplay:false,
        autoplaySpeed:5000,
        arrows:false,
        fade:true,
    });
});