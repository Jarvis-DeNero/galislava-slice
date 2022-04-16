import $ from "jquery";

$(document).ready(function () {
    const accordion = $('.accordion');

    if (accordion.length) {
        accordion.on('click', '.accordion__header', function () {
            $(this).closest('.accordion__item').siblings().removeClass('accordion__item_opened');
            return $(this).closest('.accordion__item').toggleClass('accordion__item_opened');
        });
    }
});
