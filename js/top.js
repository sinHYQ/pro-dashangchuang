// 位置定位部分
var oA = $('.English').find('a');
var length = $('.English').find('a').length;
oA.each(function(index) {
    // var index = $(this).index();
    $(this).hover(function() {
        // 卷进去的高度
        var ulheight = index * parseInt(70);
        console.log(this);
        if (index < length - 2) {
            $('.citylist').stop().animate({
                'top': -ulheight
            }, 200, 'linear')
        }
    })
});
$(".area").mouseup(function() {
    $(".city-content").off('mousemove');
});