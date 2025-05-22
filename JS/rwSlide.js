// 리뷰 슬라이드 Initialize Swiper 

var swiper = new Swiper(".rs_Swiper", {
    slidesPerView: 3,
    spaceBetween: 15,
    freeMode: true,
    pagination: {
        el: ".rs_Swiper .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: "#review .swiper-button-next",
        prevEl: "#review .swiper-button-prev",
    },loop: true,
});

// 리뷰 북 데이타

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


async function bookDataMd() {
   try {
      const querys = ['영어가 바로 터지는', '에코 히어로즈', '당신의 뇌를 공감합니다', '자기다움 리더쉽-왜 우리', '새벽 탐험-슷카이','초등학생을 위한 거의 모든'];

      querys.forEach(async (query, i) => {
         const data = await fetchBooks(query);

         //썸네일이 빈 문자열인것은 제외
         const origin = data.documents;
         let book = origin.filter((val) => {
            return val.thumbnail != '' && val.contents != '';
         })
         
         const divs = $('.rs_Swiper').find('.rw_box').eq(i);  
            divs.append(`
                  <img src=${book[0].thumbnail}>
                  <div class="rw_text">
                    <h5>${book[0].title}</h5>
                    <p>${book[0].authors}</p>
                    <span>★★★★★</span>
                  </div>    
          `);

      })
   } catch (error) {
      console.log('에러발생', error);
   }
}

bookDataMd();