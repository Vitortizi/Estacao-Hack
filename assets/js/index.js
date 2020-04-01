$(document).ready(function () {
    $('html, body').animate({
        scrollTop: $("#home").offset().top
    }, 600);
});

$("a").click(function () {
    const id = $(this).data('number');

    console.log(id)
    if (typeof id == 'string') {
        $('html, body').animate({
            scrollTop: $("#" + id).offset().top
        }, 600);
    }
});