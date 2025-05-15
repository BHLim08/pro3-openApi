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

        async function bookData() {
            try {
                const querys = ['안녕', '건강', '유아', '중학습', '인문'];

                querys.forEach(async (query, i) => {
                    const data = await fetchBooks(query);

                    // for문 (8개)
                    const divs = $('.swiper-wrapper').eq(i).find('.swiper-slide');

                    for (let j = 0; j < divs.length; j++) {
                        divs.eq(j).append("<img src=" + data.documents[j].thumbnail + "/>");
                        divs.eq(j).append("<h3>" + data.documents[j].title + "</h3>");
                        divs.eq(j).append("<h6>" + data.documents[j].authors + "</h6>");

                    }
                })
            } catch (error) {
                console.log('에러발생', error);
            }
        }

        bookData();

        //multipage
        $('.catagory_tab_menu li').click(function () {
            let i = $(this).index();
            $('.swiper').eq(i).show().siblings('.swiper').hide();
        });