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


async function goodHot() {
   try {
      const querys = ['디 에센셜 김연수','슬픔도 기쁨도','페른베', '절망의 구', '꿀잠 선물 가게' , '뭐 어때' , '혹시 돈 얘기해도 될까요' , '일단 떠나는 수 밖에'];

      querys.forEach(async (query, i) => {
         const data = await fetchBooks(query);

         //썸네일이 빈 문자열인것은 제외
         const origin = data.documents;
         let book = origin.filter((val) => {
            return val.thumbnail != '' && val.contents != '';
         })
    
         const divs = $('.goodItems_hot').find('.swiper-slide').eq(i);

     
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

goodHot();

     var swiper = new Swiper(".mySwiperhot", {
            cssMode: true,
            navigation: {
                nextEl: ".goodItems_hot .swiper-button-next",
                prevEl: ".goodItems_hot swiper-button-prev",
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
