import $ from "jquery";

$(document).ready(function () {
    const slider = $('.slider-default');
    if (slider.length) {
        slider.slick({
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 3,
            prevArrow: '<span class="icon-arrowleft"></span>',
            nextArrow: '<span class="icon-arrowright"></span>',
            infinite: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '30px',
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
});
