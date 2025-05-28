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


async function goodWith() {
   try {
      const querys = ['죽이고 싶은 아이2','당연하게도 나는','여름을', '소년이 온다', '시한부 -백은별' , '세계를 건너 너에게 갈게' , '세상의 마지막 기차역' , '나의 돈키호테'];

      querys.forEach(async (query, i) => {
         const data = await fetchBooks(query);

         //썸네일이 빈 문자열인것은 제외
         const origin = data.documents;
         let book = origin.filter((val) => {
            return val.thumbnail != '' && val.contents != '';
         })
    
         const divs = $('.goodItems_with').find('.swiper-slide').eq(i);

     
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

goodWith();

     var swiper = new Swiper(".mySwiperWith", {
            cssMode: true,
            navigation: {
                nextEl: ".goodItems_with .swiper-button-next",
                prevEl: ".goodItems_with .swiper-button-prev",
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
