//주간 - Initialize Swiper

var swiper_weekleft = new Swiper(".week_left", {
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".week_left .swiper-button-next",
    prevEl: ".week_left .swiper-button-prev",
  },
  speed: 1800,
  
})

var swiper_weekright = new Swiper(".week_right", {
  spaceBetween: 20,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".week_right .swiper-button-next",
    prevEl: ".week_right .swiper-button-prev",
  }, slidesPerView: 5,
  speed: 1800,
})

//주간 북 데이타
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

async function bookData_week_R() {
   try {
      const querys = ['박경리', '기욤뮈소', '박완서','한강','교육'];

      querys.forEach(async (query, i) => {
         const data = await fetchBooks(query);
        
         //썸네일이 빈 문자열인것은 제외
         const origin = data.documents;
         let book = origin.filter((val) => {
            return val.thumbnail != '' && val.contents != '';
         })

        const divs = $('.weekBook_wrap').eq(i).find('.week_left .swiper-wrapper')  

        for (let j = 0; j < 10; j++) {
         divs.append(`
          <div class="swiper-slide">
            <img src=${book[j].thumbnail}/>
            <div class="week_text_box">
              <h4>${book[j].title}</h4>
              <p>${book[j].authors}</p>
            </div>
                    
          </div>`)
      }

      })
   } catch (error) {
      console.log('에러발생', error);
   }
}

async function bookData_week_L() {
try {
      const querys = ['박경리', '기욤뮈소', '박완서','한강','교육'];

      querys.forEach(async (query, i) => {
         const data = await fetchBooks(query);
        
         //썸네일이 빈 문자열인것은 제외
         const origin = data.documents;
         let book = origin.filter((val) => {
            return val.thumbnail != '' && val.contents != '';
         })

        const divs = $('.weekBook_wrap').eq(i).find('.week_right .swiper-wrapper')  

        for (let j = 0; j < 10; j++) {
         divs.append(`
          <div class="swiper-slide">
            <img src=${book[j].thumbnail}/>        
          </div>`)
      }

      })
   } catch (error) {
      console.log('에러발생', error);
   }
}

bookData_week_R()
bookData_week_L()

//바로가기

$('.catagory_tab_menu_weekBook li').click(function () {
  let i = $(this).index();
  $('.#weekBook_content').eq(i).show().siblings('.weekBook_list').hide();
});