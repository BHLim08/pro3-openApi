  async function fetchBooks(query) {
            const params = new URLSearchParams({
                target: "title",
                query,
                size: 50
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

        async function bookData_today() {
            try {
                const querys = ['우리의 낙원에서 만나자', '새벽탐험', '존재와 시간', '죽이고싶은아이', '체리새우:비밀글입니다'];

                querys.forEach(async (query, i) => {
                    const data = await fetchBooks(query);
                    const divs = $('.five_book .five_list').eq(i);

                    divs.append("<img src=" + data.documents[0].thumbnail + "/>");
                    divs.append("<h4>" + data.documents[0].title + "</h3>");
                    divs.append("<h6>" + data.documents[0].authors + "</h6>");

                })
            } catch (error) {
                console.log('에러발생', error);
            }
        }

              async function bookData_md() {
            try {
                const querys = ['내 꿈에 가끔만 놀러와', '김켈리의 신비마트3', '완벽주의자의 조용한 우울', '모든 것이 양자 이론 - 세상을', '시간유전자'];

                querys.forEach(async (query, i) => {
                    const data = await fetchBooks(query);
                    const divs = $('.five_book_md .five_list_md').eq(i);

                    divs.append("<img src=" + data.documents[0].thumbnail + "/>");
                    divs.append("<h4>" + data.documents[0].title + "</h3>");
                    divs.append("<p>" + data.documents[0].authors + "</p>");

                })
            } catch (error) {
                console.log('에러발생', error);
            }
        }

        bookData_today();
        bookData_md();
