async function fetchBooks(query) {
   const params = new URLSearchParams({
      target: "title",
      query,
      size : 50,
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


async function goodUp() {
   try {
      const querys = ['치유의 빛','고래눈이 내리다','내게 남은 스물다섯', '나태주의 풀꽃', '내 꿈에 가끔만 놀러와' , '파과' , '드디어 만나는 북유럽' , '첫 여름 완주'];

      querys.forEach(async (query, i) => {
         const data = await fetchBooks(query);

         //썸네일이 빈 문자열인것은 제외
         const origin = data.documents;
         let book = origin.filter((val) => {
            return val.thumbnail != '' && val.contents != '';
         })
    
         const divs = $('.goodItems_up').find('.swiper-slide').eq(i);

     
            divs.append(`              
                    <div class="good_img">
                        <img src=${book[0].thumbnail}/>
                    </div> 
                    
                    <div class="good_text">
                        <h6>${book[0].title}</h6>
                        <p>${book[0].authors}</p> 
                    </div>                           
          `)

      })
   } catch (error) {
      console.log('에러발생', error);
   }
}

goodUp();

     var swiper = new Swiper(".mySwiperUP", {
            cssMode: true,
            navigation: {
                nextEl: ".goodItems_up .swiper-button-next",
                prevEl: ".goodItems_up swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
            },
            mousewheel: true,
            keyboard: true,
            slidesPerGroup: 4,
            slidesPerView: 4,
            loop: true,
            
        });