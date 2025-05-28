
//디테일 버튼 토글

$('.more_btn').click(function(){

    let book = $('.book_intro');
    let bookhight = book.height();

    if( bookhight === 300 ){ 
        book.stop().animate({height:'780px'},3000)
    }
   

    // $('.book_intro').stop().animate({height:'300px'},3000)
    
}) 


