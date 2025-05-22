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

async function bookDataUp() {
    try {
        const querys = ['헝거게임', '별별 직업 상담소', '신비마트', '긴긴밤', '시간유전자', '빛과 실', '니체 인생수업', '모든 것이 양자 이론 - 세상을', '별에게','흔한남매'];

        querys.forEach(async (query, i) => {
            const data = await fetchBooks(query);
            const divs = $('.mySwiperUp').find('.swiper-slide').eq(i);
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

bookDataUp();


