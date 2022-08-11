import $ from "jquery";

$(document).ready(function () {
    const menu = $('section.menu');
    const menuList = menu.find('.menu-list');
    const uri = window.document.location.pathname;

    if (menu.length && menuList.length) {
        menuList.css('top', menu.innerHeight());
        menu.on('click', '.menu__icon .icon-menu', function () {
            $('body').toggleClass('disable-scroll');
            menu.toggleClass('menu_active');
            return menuList.toggleClass('menu-list_active');
        });

        if (uri.length > 1) {
            menu.addClass('inside-page');
        }
    }
});
