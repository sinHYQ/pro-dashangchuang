$('.two-ulList li').mouseenter(function() {
    $(this).addClass('two-ulListH').siblings().removeClass('two-ulListH');
    $('.two-olList>li').eq($(this).index()).show().siblings().hide();
    $('.two-olList').show();
});
$('.two-erji').mouseleave(function() {
    $('.two-olList>li').eq($(this).index()).hide();
    $('.two-olList').hide();
    $('.two-ulList li').removeClass('two-ulListH');
});
$('.two-olList').hover(function() {
    $('.two-erji-hidden').toggleClass('two-erji-play')
}, function() {
    $('.two-erji-hidden').toggleClass('two-erji-play')
})