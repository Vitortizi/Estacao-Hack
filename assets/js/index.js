$(document).ready(function () {
    $('html, body').animate({
        scrollTop: $("#home").offset().top
    }, 600);
});

$("a").click(function () {
    const id = $(this).data('number');
    const idSel = $(this).attr('id');

    $('#ul-pages li a').each(function(index, element) {
        $(element).removeClass('selected');
    });

    $('#' + idSel).addClass('selected');

    if (typeof id == 'string') {
        $('html, body').animate({
            scrollTop: $("#" + id).offset().top
        }, 600);
    }
});