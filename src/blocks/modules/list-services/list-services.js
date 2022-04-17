import $ from "jquery";

$(document).ready(function () {
    const categories = $('.list-services-categories');

    if (categories.length) {
        categories.on('click', '.list-services-categories__item', function () {
            const _this = $(this);
            _this.siblings().removeClass('list-services-categories__item_active');
            _this.addClass('list-services-categories__item_active');
            const catId = _this.attr('data-category');
            const items = $('.list-services__item');
            items.hide();
            return items.filter(`[data-category=${catId}]`).fadeIn();
        });
    }
});
