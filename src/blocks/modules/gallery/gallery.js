import $ from "jquery";
import lightbox from "../../../js/vendor/lightbox.min";

$(document).ready(function () {
    const filter = $('#filter');
    const titleMobile = $('.title-mobile');

    if (titleMobile.length && titleMobile.is(':visible')) {
        titleMobile.on('click', function () {
            return filter.toggle();
        });

        filter.find('a').click(function () {
            return filter.hide();
        });
    }

    let $gallery = $('.gallery-images');
    $gallery.isotope({
        itemSelector: '.gallery-image'
    });

    filter.find('a').click(function () {

        filter.find('a').removeClass('current');
        $(this).addClass('current');
        const selector = $(this).attr('data-filter');

        $gallery.isotope({
            filter: selector,
            animationOptions: {
                duration: 1000,
                easing: 'easeOutQuart',
                queue: false
            }
        });

        $gallery.find('a').removeAttr('data-lightbox');
        $gallery.find('article:not(.isotope-hidden) a').attr('data-lightbox', 'gallery');

        return false;
    });

    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'albumLabel': 'Изображение %1 из %2'
    })
});
