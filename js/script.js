$(document).ready(function(){
    $(".slider__main").slick({
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 3,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    centerMode: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerMode: false,
                    slidesToShow: 1
                }
            }
        ]
    });
});
