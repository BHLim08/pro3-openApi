
//디테일 버튼 토글

// 책 소개
$('.more_btn').click(function(){

    let book = $('.book_intro');
    let bookhight = book.height();

    if( bookhight < 200 ){ 
        book.stop().animate({height:'790px'},3000)
    }
    if (bookhight === 669){
         book.stop().animate({height:'280px'},3000)
    }
}) 

// 서평

$('.more_col_btn').click(function(){

    let book = $('.book_columns');
    let bookhight = book.height();

    if( bookhight < 200 ){ 
        book.stop().animate({height:'3800px'},3000)
    }
    if (bookhight === 3679){
         book.stop().animate({height:'280px'},3000)
    }
}) 



