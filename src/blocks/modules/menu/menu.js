import $ from "jquery";

$(document).ready(function () {
    const menu = $('section.menu');
    const menuList = menu.find('.menu-list');

    if (menu.length && menuList.length) {
        menuList.css('top', menu.innerHeight());
        menu.on('click', '.menu__icon', function () {
            $('body').toggleClass('disable-scroll');
            menu.toggleClass('menu_active');
            return menuList.toggleClass('menu-list_active');
        });
    }
});
