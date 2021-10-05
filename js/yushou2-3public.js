$('.item-content-s').hover(function() {
    $(this).addClass('selected')
}, function() {
    $(this).removeClass('selected');
})
$('.filter-quanbu').on('click', function() {
    $(this).next().children().removeClass('red-selected')
    $('.inline-block-list li a').removeClass('font-red')
    $(this).addClass('red-selected')
})
$('.inline-block-list li').on('click', function() {
    $(this).parent().prev().removeClass('red-selected');
    $(this).addClass('red-selected').siblings().removeClass('red-selected');
})
$('.inline-block-list li a').on('click', function() {
    $('.inline-block-list li a').removeClass('font-red')
    $(this).addClass('font-red')
})
var settimeId = setInterval("getFormartTime( '2022-01-31 11:56:03') ", 1000)