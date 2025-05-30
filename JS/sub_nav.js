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

// 탭 클릭 bg변경
  
    $('.sub_nav a').eq(0).addClass('active_sc');

    $('.sub_nav li').click(function () {       
        $(this).addClass('active_suv_nav').siblings().removeClass('active_suv_nav');
    });

