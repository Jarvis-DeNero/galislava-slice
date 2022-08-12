import $ from "jquery";
import AirDatepicker from "../vendor/air-datepicker";

$(document).ready(function () {
    const isMobile = window.screen.width <= 600;
    const tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    const dateFinish = new AirDatepicker('.date-finish', {
        isMobile: isMobile,
        autoClose: true,
        minDate: tomorrow,
        position: 'bottom right',
        selectedDates: [tomorrow],
    });

    new AirDatepicker('.date-start', {
        minDate: new Date(),
        isMobile: isMobile,
        autoClose: true,
        selectedDates: [new Date()],
        onSelect({date}) {
            if (dateFinish.lastSelectedDate) {
                const dateFinishElChunks = $('.date-finish').val().split('.');

                const dateFinishCurrent = new Date(
                    parseInt(dateFinishElChunks[2]),
                    parseInt(dateFinishElChunks[1]) - 1,
                    parseInt(dateFinishElChunks[0])
                );

                if (dateFinishCurrent <= new Date(date)) {
                    dateFinish.clear();
                }
            }

            dateFinish.update({
                minDate: new Date(new Date(date).getTime() + 24 * 60 * 60 * 1000)
            });
        }
    });

    const form = $('form');
    if (form.length) {
        form.on('click', '.icon-calendar', function () {
            return $(this).prev('input').focus();
        });
    }
});
