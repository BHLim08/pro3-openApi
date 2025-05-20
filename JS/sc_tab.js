    //바로가기 탭
$(document).ready(function () {
    // 초기 상태 설정
    $('.sc_tab_list').hide().eq(0).css('display', 'flex');
    $('#sc_tab li').eq(0).addClass('active');

    // 탭 클릭 이벤트
    $('#sc_tab li').click(function () {
        let i = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.sc_tab_list').hide().eq(i).css('display', 'flex');
    });
});