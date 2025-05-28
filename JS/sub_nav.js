$(document).ready(function () {
    let currentScrollTop = 0;
    $(window).scroll(function () {
        currentScrollTop = $(window).scrollTop();
        if (currentScrollTop > 744) {
            $("#sub_nav_wrap").addClass("scroll");
        } else {
            $("#sub_nav_wrap").removeClass("scroll");
        }

    });
});
