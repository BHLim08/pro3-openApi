// 이런책슬라이드
$('.md_prev').click(function () {
   $('.md_slide_list:last').prependTo('.md_slide');
   $('.md_slide').css('margin-left', "-10%");
   $('.md_slide').stop().animate({ marginLeft: 0 }, 800);
});

$('.md_next').click(function () {
   $('md_slide').stop().animate({ marginLeft: "-10%" }, 800, function () {
      $('.md_slide_list:first').appendTo('.md_slide');
      $('.md_slide').css({ marginLeft: 0 });
   });
});

// 이런책 북 데이타

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
      const querys = ['박경리', '기욤뮈소', '박완서','한강'];

      querys.forEach(async (query, i) => {
         const data = await fetchBooks(query);

         //썸네일이 빈 문자열인것은 제외
         const origin = data.documents;
         let book = origin.filter((val) => {
            return val.thumbnail != '' && val.contents != '';
         })
    
         const divs = $('#md_slide').find('.md_slide_list').eq(i);  
            divs.append(`
               <div class="md_list_img">
                  <img src=${data.documents[0].thumbnail}/>
                  <img src=${data.documents[1].thumbnail}/>
                  <img src=${data.documents[2].thumbnail}/>
                  <img src=${data.documents[3].thumbnail}/>
               </div>
               <div class="md_list_text">
                  <h3>${data.documents[0].title}</h3>
                  <p>${data.documents[0].authors}</p>
               </div>
                  <div class="md_list_logo">
                  <img src="	https://cdn.ypbooks.co.kr/front_web/assets/img/temp/yp_md_default.png" alt="#">
                  <span>영풍문고 온라인 MD</span>
               </div>  
          `);

      })
   } catch (error) {
      console.log('에러발생', error);
   }
}

bookDataMd();
