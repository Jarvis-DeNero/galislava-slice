import $ from "jquery";

$(document).ready(function () {
    const pricesSlider = $('.prices-slider');
    const callPopupBooking = $('.call-popup-booking');
    const popup = $('.popup');
    const isMobile = window.screen.width <= 600;

    if (pricesSlider.length) {
        pricesSlider.slick({
            infinite: isMobile,
            centerPadding: isMobile ? '30px' : '0',
            centerMode: isMobile,
            slidesToShow: 1,
            mobileFirst: true,
            prevArrow: '<span class="icon-arrowleft"></span>',
            nextArrow: '<span class="icon-arrowright"></span>',
        });

        callPopupBooking.on('click', function () {
            popup.fadeIn();
            const _this = $(this);

            return popup.find('input[name=room]').val(_this.closest('.prices-description').find('.prices-description__title').text());
        });
    }

    if (popup.length) {
        popup.on('click', '.icon-close', function () {
            return popup.hide();
        });
    }
});
