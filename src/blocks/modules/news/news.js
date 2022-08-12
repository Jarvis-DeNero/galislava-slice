import $ from "jquery";

$(document).ready(function () {
    const slider = $('.slider-list');
    if (slider.length) {
        const slideToShowValue = $(this).attr('data-slide-to-show') ? $(this).attr('data-slide-to-show') : 3;
        slider.slick({
            slidesToShow: slideToShowValue,
            prevArrow: '<span class="icon-arrowleft"></span>',
            nextArrow: '<span class="icon-arrowright"></span>',
            infinite: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        slidesToShow: slideToShowValue
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
});
