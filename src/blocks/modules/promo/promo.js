import $ from "jquery";

$(document).ready(function () {
    const promoSlider = $('.promo-slider');
    if (promoSlider.length) {
        promoSlider.slick({
            mobileFirst: true,
            prevArrow: '',
            nextArrow: '',
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
