window.addEventListener("load", () => {
    const loader = document.querySelector(".loader")

    loader.classList.add("loader-hidden");
    loader.addEventListener("transitionend", () => {
        document.body.removeChild("loader");
    })
})


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
$(document).ready(function(){
    $("#show section.wrapper").slick({
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
        autoplaySpeed: 800,
    });
})

