$(function () {
    $('.menu>.level01').click(function () {
        $(this).addClass('active').siblings('.level01').removeClass('active');
    })
})