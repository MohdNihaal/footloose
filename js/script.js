$(document).ready(function(){
    $("#main section.spotlight section.wrapper").slick({
        autoplay:true,
        dots:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows:false,
        centerMode :true,
        autoplaySpeed: 1000,
    });
})
