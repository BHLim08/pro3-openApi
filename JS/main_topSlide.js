
function prev() {
    $('.main_slid li:last').prependTo('.main_slid');
    $('.main_slid').css('margin-left', "-36.3%");       
    $('.main_slid').stop().animate({ marginLeft: 0 }, 2000);
}


function next() {
    $('.main_slid').stop().animate({ marginLeft: "-36.3%" }, 2000, function () {
        $('.main_slid li:first').appendTo('.main_slid');
        $('.main_slid').css({ marginLeft: 0 });
    });
}

setInterval(next, 4000);

$('.top_prev').click(function () {
    prev();
});

$('.top_next').click(function () {
    next();
});
