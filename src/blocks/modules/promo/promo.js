import $ from "jquery";

$(document).ready(function () {
    const promoSlider = $('.promo-slider');
    if (promoSlider.length) {
        let pager = false;

        promoSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            if (!pager.length) {
                promoSlider.find('.icon-arrowleft').after('<span class="promo-slider__pager"></span>');
                pager = $('.promo-slider__pager');
            }
            //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
            const i = (currentSlide ? currentSlide : 0) + 1;

            let count = slick.slideCount >= 10 ? slick.slideCount : `0${slick.slideCount}`;

            pager.text(`${i < 10 ? '0' + i : i}/${count}`);
        });

        promoSlider.slick({
            mobileFirst: true,
            prevArrow: '<span class="icon-arrowleft"></span>',
            nextArrow: '<span class="icon-arrowright"></span>',
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 1200
        });
    }

    const menu = $('section.menu');
    const promo = $('section.promo');
    let promoListTop = 0;

    if (menu.length && menu.css('background-color') === 'rgba(0, 0, 0, 0)') {
        promoListTop = menu.innerHeight();
        promo.css('margin-top', promoListTop * -1);
    }
});
