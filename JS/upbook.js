// 급상승 슬라이드

var swiper = new Swiper(".mySwiperUp", {
    slidesPerView: 5,
    slidesPerGroup: 5,
    spaceBetween: 35,
    freeMode: true,
    pagination: {
        el: ".mySwiperUp .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: "#upBook .swiper-button-next",
        prevEl: "#upBook .swiper-button-prev",
    }
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

async function bookDataUp() {
    try {
        const querys = ['청춘의 독서', '빛과 실', '어른 김장하', '모든 것이 양자 이론 - 세상을', '시간유전자', '빛과 실', '어른 김장하', '모든 것이 양자 이론 - 세상을', '시간유전자'];

        querys.forEach(async (query, i) => {
            const data = await fetchBooks(query);
            const divs = $('.mySwiperUp').find('.swiper-slide').eq(i);
            divs.append(`             
                    <img src=${data.documents[0].thumbnail}/>
                    <h3>${data.documents[0].title}</h3>
                    <h6>${data.documents[0].authors}</h6>         
          `);

    })
} catch (error) {
    console.log('에러발생', error);
}
}

bookDataUp();


