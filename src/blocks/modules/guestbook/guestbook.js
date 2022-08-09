import $ from "jquery";

$(document).ready(function () {
    const guestbookList = $('.guestbook__list');
    const guestbookForm = $('.guestbook-form');
    const callGuestbookForm = $('.call-guestbook-form');

    if (guestbookList.length) {
        guestbookList.on('click', '.guestbook__answer-button', function () {
            const _this = $(this);
            _this.next('.guestbook__answer').fadeIn();
            return _this.hide();
        });
    }

    if (guestbookForm.length && callGuestbookForm.length) {
        callGuestbookForm.on('click', function () {
            return guestbookForm.toggleClass('guestbook-form_active');
        });
    }

    if (guestbookForm.length) {
        guestbookForm.on('click', '.add-photos', function () {
            return $(this).next('input').click();
        });

        $('.star.rating').click(function () {
            const rate = $(this).data('rating');
            const _this = $(this);

            return _this.parent().attr('data-stars', rate) && _this.closest('.stars').find('input[name=rate]').val(rate);
        });

        const photos = document.querySelector('input[type=file]');
        const preview = document.querySelector('.guestbook-photos');

        const readImage = file => {
            if (!(/^image\/(png|jpe?g)$/).test(file.type)) {
                return preview.insertAdjacentHTML('beforeend', `Данный формат неразрешён ${file.type}: ${file.name}<br>`);
            }

            if (Math.round(file.size / 1024 / 1024) > 10) {
                preview.insertAdjacentHTML('beforeend', `<div>У изображения ${file.name} размер больше 10Mb<div>`);
                return false;
            }

            const img = new Image();
            img.addEventListener('load', () => {
                preview.appendChild(img);
                //preview.insertAdjacentHTML('beforeend', `<div>${file.name} ${img.width}×${img.height} ${file.type} ${Math.round(file.size / 1024)}KB<div>`);
                window.URL.revokeObjectURL(img.src); // Free some memory
            });
            img.src = window.URL.createObjectURL(file);
        }

        photos.addEventListener('change', ev => {
            preview.innerHTML = ''; // Remove old images and data
            let files = ev.target.files;
            if (!files || !files[0]) {
                return false;
            }

            if (files.length > 10) {
                preview.insertAdjacentHTML('beforeend', `<div>Выбрано больше 10 изображений, будут загружены первый 10<div>`);
                files = files.slice(0, 9);
            }

            [...files].forEach(readImage);
        });
    }
});
