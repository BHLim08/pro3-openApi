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



