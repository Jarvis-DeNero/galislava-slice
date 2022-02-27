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
    const promoList = promo.find('.promo-list');
    let promoListTop = 0;

    if (menu.length && menu.css('background-color') === 'rgba(0, 0, 0, 0)') {
        promoListTop = menu.innerHeight();
        promo.css('margin-top', promoListTop * -1);
    }

    if (menu.length && promoList.length) {
        promoList.css('top', promoListTop);
        menu.on('click', '.menu__icon', function () {
            $('body').toggleClass('disable-scroll');
            menu.toggleClass('menu_active');
            return promoList.toggleClass('promo-list_active');
        });
    }
});
