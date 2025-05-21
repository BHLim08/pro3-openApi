    
    var swiper = new Swiper(".mySwiperNew", {
    slidesPerView: 5,
    slidesPerGroup: 5,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".mySwiperNew .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: "#newBook .swiper-button-next",
        prevEl: "#newBook .swiper-button-prev",
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

        async function bookDataNew() {
            try {
                const querys = ['소설', '요리', '초등', '중학습', '인문'];

                querys.forEach(async (query, i) => {
                    const data = await fetchBooks(query);

                    // for문 (8개)
                    const divs = $('.mySwiperNew').eq(i).find('.swiper-wrapper');


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

        bookDataNew();

        //탭
        $('.catagory_tab_menu li').click(function () {
            let i = $(this).index();
            $('.mySwiperNew').eq(i).show().siblings('.mySwiperNew').hide();
        });



    