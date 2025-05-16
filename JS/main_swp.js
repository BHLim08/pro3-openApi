//북 슬라이드 Initialize Swiper 

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    slidesPerGroup: 5,
    spaceBetween: 35,
    freeMode: true,
    pagination: {
        el: ".mySwiper .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});



// 리뷰 슬라이드 Initialize Swiper 

var swiper = new Swiper(".rs_Swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".rs_Swiper .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".rs_Swiper .swiper-button-next",
        prevEl: ".rs_Swiper .swiper-button-prev",
    }
});
