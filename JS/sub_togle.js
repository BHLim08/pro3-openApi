
//디테일 버튼 토글

// 책 소개
$('.more_btn').click(function(){

    let book = $('.book_intro');
    let bookhight = book.height();

    if( bookhight < 200 ){ 
        book.stop().animate({height:'790px'},1500)
        $(this).text("접어보기")
    }
    if (bookhight === 669){
         book.stop().animate({height:'280px'},1500)
         $(this).text("펼쳐보기")
    }
}) 

// 서평

$('.more_col_btn').click(function(){

    let book = $('.book_columns');
    let bookhight = book.height();

    if( bookhight < 220 ){ 
        book.stop().animate({height:'3800px'},3000)
        $(this).text("접어보기")
    }
    if (bookhight >3100 ){
         book.stop().animate({height:'280px'},3000)
         $(this).text("펼쳐보기")
    }
}) 



