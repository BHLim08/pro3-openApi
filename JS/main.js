
$(function(){
    
    //메인슬라이드

    function next (){
        $(".slid").stop().animate({marginLeft:1000},800,function(){$(".slid li:first").appenTo(".slid");
            $(".slid").css({marginLeft:0});
        })
    }
})