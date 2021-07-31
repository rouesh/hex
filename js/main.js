$(document).ready(function(){
    $('.slider__body').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        dots:false,
        adaptiveHeight:true,
        infinity: true,
        prevArrow: $('.nav__left'),
        nextArrow: $('.nav__right'),
    });
});

