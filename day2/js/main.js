var main = $('.main-item');
var sub = $('.sub-menu');
var head = $('.header');

main.on('mouseover',function(){
    sub.removeClass('sub-act');
    $(this).siblings('.sub-menu').addClass('sub-act');
});

head.on('mouseleave',function(){
    sub.removeClass('sub-act');
});

