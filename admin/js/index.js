$(function () {
    $('.menu>.level01').click(function () {
        $(this).addClass('active').siblings('.level01').removeClass('active');
        if ($(this).index()==1) {
            $('.level02').slideToggle();
            $(this).find('b').toggleClass("rotate0")
        }
    });
    $('.level02>li').click(function () {
        $(this).addClass("active").siblings('li').removeClass('active');
        
    });


})