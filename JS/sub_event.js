var swiper = new Swiper(".mySwiperEvent", {
            cssMode: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
            },
            mousewheel: true,
            keyboard: true,
            slidesPerView: 2,
            loop: true,
            spaceBetween: 30,
        });