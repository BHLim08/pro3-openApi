// Hot Book 슬라이드

var swiper = new Swiper(".mySwiperHot", {
    slidesPerView: 5,
    slidesPerGroup: 5,
    spaceBetween: 35,
    freeMode: true,
    pagination: {
        el: ".mySwiperHot .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: "#hotBook .swiper-button-next",
        prevEl: "#hotBook .swiper-button-prev",
    },loop: true,
});


async function fetchBooks(query) {
    const params = new URLSearchParams({
        target: "title",
        query,
    });
    const url = `https://dapi.kakao.com/v3/search/book?${params}`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            Authorization: `KakaoAK 5e2c7e564da7c5fef16f2edb5a20c606`
        }
    });

    if (!response.ok) {
        throw new Error(`HTTP 오류: ${response.status}`);
    }

    return response.json();
}

async function bookDataHot() {
    try {
        const querys = ['엄마 당신의 이야기를 들려주세요', '아빠 당신의 이야기를 들려주세요', '더 퀸', '모든 것이 양자 이론 - 세상을', '단 한번의 삶', '나만의', '어른 김장하', '건강지속력', '시간유전자', '과자사면 과자'];

        querys.forEach(async (query, i) => {
            const data = await fetchBooks(query);
            const divs = $('.mySwiperHot').find('.swiper-slide').eq(i);
            divs.append(`             
                    <img src=${data.documents[0].thumbnail}/>
                    <h5>${data.documents[0].title}</h5>
                    <p>${data.documents[0].authors}</p>         
          `);

    })
} catch (error) {
    console.log('에러발생', error);
}
}

bookDataHot();
