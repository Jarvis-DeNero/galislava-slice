import $ from "jquery";

$(document).ready(function () {
    const slider = $('.slider-services');
    if (slider.length) {
        slider.slick({
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 5,
            prevArrow: '',
            nextArrow: '',
            infinite: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 5
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '70px',
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
});
