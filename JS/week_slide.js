//주간 - Initialize Swiper

    var swiper = new Swiper(".week_left", {
      spaceBetween: 10,
      centeredSlides: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".week_left .swiper-button-next",
        prevEl: ".week_left .swiper-button-prev",
      },
      speed : 1800,
    })

        var swiper = new Swiper(".week_right", {
      spaceBetween: 10,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".week_right .swiper-button-next",
        prevEl: ".week_right .swiper-button-prev",
      },slidesPerView: 5,
   
      speed : 1800,
    })