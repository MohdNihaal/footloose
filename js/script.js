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
        arrows:true,
        prevArrow:'<button type="button" class="slick-prev"><img style="width:60px;cursor:pointer;postion:absolute;" src="../images/left.png" /></button>',
        nextArrow:'<button type="button" class="slick-next"><img style="width:60px;cursor:pointer;" src="../images/right.png" /></button>',
        centerMode :true,
        autoplaySpeed: 1000,
    });
})