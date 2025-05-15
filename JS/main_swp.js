//북 슬라이드 Initialize Swiper 

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    slidesPerGroup: 5,
    spaceBetween: 45,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});


//주간 - Initialize Swiper

var swiper = new Swiper(".mySwiper_left", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 1500,

});

var swiper = new Swiper(".mySwiper_right", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 1500,
});



// 리뷰 슬라이드 Initialize Swiper 

var swiper = new Swiper(".rs_Swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});
