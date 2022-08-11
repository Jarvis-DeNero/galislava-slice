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

    const galleryCache = [];

    function runGallery() {
        const slider = $('.slider-gallery');
        if (slider.length) {
            let pager = false;

            slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
                if (!pager.length) {
                    slider.after('<span class="slider__pager"></span>');
                    pager = $('.slider__pager');
                }

                const i = (currentSlide ? currentSlide : 0) + 1;

                let count = slick.slideCount >= 10 ? slick.slideCount : `0${slick.slideCount}`;

                pager.text(`${i < 10 ? '0' + i : i} / ${count}`);
            });

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
    }
    runGallery();

    const gallerySliderBox = $('.gallery__slider-box');
    const galleryCats = $('.gallery-cats');

    if (gallerySliderBox.length) {
        galleryCats.on('click', 'li', function () {
            const catId = $(this).attr('data-category');

            $(this).siblings('li').removeClass('gallery-cats__item_active');
            $(this).addClass('gallery-cats__item_active');

            if (!galleryCache[catId]) {
                //запрос с сервера данных закинуть в кэш
                galleryCache[catId] = fromServerGallery;
            }

            //вставить готовый html в контйенер и запуск слайдера снова
            gallerySliderBox.html(galleryCache[catId]);
            runGallery();
        });
    }

    //данные-заглушка, для production удалить, данные будут прилетать со стороны сервера
    const fromServerGallery = `<div class="slider slider-gallery">
            <div class="slider__item">
                <a href="../img/gallery-img-01.jpg" data-lightbox="2">
                    <img src="../img/gallery-img-01.jpg" alt="alt" />
                </a>
            </div>
            <div class="slider__item">
                <a href="../img/gallery-img-01.jpg" data-lightbox="2">
                    <img src="../img/gallery-img-01.jpg" alt="alt" />
                </a>
            </div>
            <div class="slider__item">
                <a href="../img/slider-room-image.jpg" data-lightbox="2">
                    <img src="../img/slider-room-image.jpg" alt="alt" />
                </a>
            </div>
        </div>`;
});
