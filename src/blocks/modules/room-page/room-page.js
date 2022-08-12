import $ from "jquery";

$(document).ready(function () {
    const accordion = $('.accordion');

    if (accordion.length) {
        accordion.on('click', '.accordion__header', function () {
            $(this).closest('.accordion__item').siblings().removeClass('accordion__item_opened');
            return $(this).closest('.accordion__item').toggleClass('accordion__item_opened');
        });
    }

    const roomPageSlider = $('.room-page-slider');
    const sliderRoomThumbs = $('.slider-room-thumbs');

    if (roomPageSlider.length) {
        roomPageSlider.slick({
            infinite: false,
            slidesToShow: 1,
            mobileFirst: true,
            prevArrow: '<span class="icon-arrowleft"></span>',
            nextArrow: '<span class="icon-arrowright"></span>',
        });

        roomPageSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
            const slickGoTo = Math.ceil(nextSlide/5) - 1;

            sliderRoomThumbs.find('.slider-room-thumbs__item').removeClass('slider-room-thumbs__item_active');
            sliderRoomThumbs.find('.slider-room-thumbs__item').eq(nextSlide).addClass('slider-room-thumbs__item_active');

            return sliderRoomThumbs.slick('slickGoTo', slickGoTo);
        });

        sliderRoomThumbs.on('click', '.slider-room-thumbs__item', function () {
            const _this = $(this);
            const slickGoTo = _this.attr('data-index');
            _this.siblings().removeClass('slider-room-thumbs__item_active');
            _this.addClass('slider-room-thumbs__item_active');

            return roomPageSlider.slick('slickGoTo', slickGoTo);
        });

        sliderRoomThumbs.slick({
            centerMode: true,
            centerPadding: '0',
            slidesToShow: 1,
            infinite: false,
            prevArrow: '<span class="icon-arrowleft"></span>',
            nextArrow: '<span class="icon-arrowright"></span>',
            vertical: true
        });
    }

    const tabs = $(".tabs-custom");
    if (tabs.length) {
        tabs.lightTabs();
    }
});
