
// 공지사항 위로 슬라이드
function notic(){
    $('.notic_wrap').animate({ marginTop: -40 }, function () {
    $('.notic_wrap div:first').appendTo('.notic_wrap');
    $('.notic_wrap').css({ marginTop: 0 });
});
};

setInterval(notic, 3500)


