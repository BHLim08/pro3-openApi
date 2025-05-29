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

async function infoBox() {
   try {
      const querys = ['죽이고 싶은 아이' , '니체'];

      querys.forEach(async (query, i) => {
         const data = await fetchBooks(query);

         //썸네일이 빈 문자열인것은 제외
         const origin = data.documents;
         let book = origin.filter((val) => {
            return val.thumbnail != '' && val.contents != '';
         })
    
         const divs = $('#aside_bestSel').find('.bestSel').eq(i);
         const divs_view = $('.view_wrap').find('.view_img').eq(i);

           divs.append (` <div class="bestSel_img">
                        <img src= ${book[0].thumbnail} >
                    </div>
                    <div class="bestSel_text">
                    <div class="best_btn">BEST SELLER</div>
                        <h4>${book[0].title}</h4>
                    </div>`)

            divs_view.append (`
               <img src= ${book[0].thumbnail} >
               `)
              
          
      })
   } catch (error) {
      console.log('에러발생', error);
   }
}

infoBox();