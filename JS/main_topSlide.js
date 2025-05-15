
function prev() {
    $('.main_slid li:last').prependTo('.main_slid');
    $('.main_slid').css('margin-left', "-32.75%");       
    $('.main_slid').stop().animate({ marginLeft: 0 }, 2000);
}


function next() {
    $('.main_slid').stop().animate({ marginLeft: "-32.75%" }, 2000, function () {
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
