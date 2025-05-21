// 카레고리 햄버거메뉴

     $(function(){

      //햄버거
        $('#catagory>button').mouseenter(function(){
            $("#catagoryBox").stop().fadeIn();
            
        })
        $('#catagoryBox, #mainNav').mouseleave(function(){
            $("#catagoryBox").stop().fadeOut();
        })
        
      //box_list
        $('.catagorybox>li').mouseenter(function(){
          $('.box_list').stop().hide();
          $(this).find('.box_list').stop().fadeIn();
        })
      });
