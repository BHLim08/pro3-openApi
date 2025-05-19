var swiper = new Swiper(".mySwiperBest", {
    slidesPerView: 5,
    slidesPerGroup: 5,
    spaceBetween: 35,
    freeMode: true,
    pagination: {
        el: ".mySwiperBest .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
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

async function bookDataBest() {
    try {
        const querys = ['시', '자녀교육', '커피', '교육', '나라'];

        querys.forEach(async (query, i) => {
            const data = await fetchBooks(query);

            const divs = $('.mySwiperBest').eq(i).find('.swiper-wrapper');

            console.log(divs)

            for (let j = 0; j < 10; j++) {
                divs.append(`
                            <div class="swiper-slide">
                                <img src=${data.documents[j].thumbnail}/>
                                <h5>${data.documents[j].title}</h5>
                                <p>${data.documents[j].authors}</p>
                            </div>`)
            }
        })
    } catch (error) {
        console.log('에러발생', error);
    }
}

bookDataBest();

       //탭
        $('.catagory_tab_menu_Best li').click(function () {
            let i = $(this).index();
            $('.mySwiperBest').eq(i).show().siblings('.mySwiperBest').hide();
        });