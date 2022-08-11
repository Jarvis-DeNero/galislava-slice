import $ from "jquery";
import AirDatepicker from '../../../js/vendor/air-datepicker';

$(document).ready(function () {
    const accordion = $('.accordion');

    if (accordion.length) {
        accordion.on('click', '.accordion__header', function () {
            $(this).closest('.accordion__item').siblings().removeClass('accordion__item_opened');
            return $(this).closest('.accordion__item').toggleClass('accordion__item_opened');
        });
    }

    const roomPageSlider = $('.room-page-slider');

    if (roomPageSlider.length) {
        roomPageSlider.slick({
            infinite: false,
            slidesToShow: 1,
            mobileFirst: true,
            prevArrow: '<span class="icon-arrowleft"></span>',
            nextArrow: '<span class="icon-arrowright"></span>',
        });
    }

    let dpMin, dpMax;

    dpMin = new AirDatepicker('.form-datepicker', {
        onSelect({date}) {
            dpMax.update({
                minDate: date
            })
        }
    })

    dpMax = new AirDatepicker('#el2', {
        onSelect({date}) {
            dpMin.update({
                maxDate: date
            })
        }
    })
});
