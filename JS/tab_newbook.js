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
                    const divs = $('.mySwiper').eq(i).find('.swiper-wrapper');

                    console.log(divs)

                    for (let j = 0; j < 10; j++) {
                        divs.append(`
                            <div class="swiper-slide">
                                <img src=${data.documents[j].thumbnail}/>
                                <h3>${data.documents[j].title}</h3>
                                <h6>${data.documents[j].authors}</h6>
                            </div>`)
                    }
                })
            } catch (error) {
                console.log('에러발생', error);
            }
        }

        bookData();

        //탭
        $('.catagory_tab_menu li').click(function () {
            let i = $(this).index();
            $('.mySwiper').eq(i).show().siblings('.mySwiper').hide();
        });



        
    //바로가기 탭
$(document).ready(function () {
    // 초기 상태 설정
    $('.sc_tab_list').hide().eq(0).css('display', 'flex');
    $('#sc_tab li').eq(0).addClass('active');

    // 탭 클릭 이벤트
    $('#sc_tab li').click(function () {
        let i = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.sc_tab_list').hide().eq(i).css('display', 'flex');
    });
});