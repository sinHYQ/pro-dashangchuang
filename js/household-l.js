// 第一个
tobFun($('.he-l ul li'), $('.con-rig-l'));
// 第二个 
tobFun($('.he1-l ul li'), $('.con-rig1-l'));
// 第三个
tobFun($('.he2-l ul li'), $('.con-rig2-l'));
// 第四个
tobFun($('.he3-l ul li'), $('.con-rig3-l'));
// 第五个
tobFun($('.he4-l ul li'), $('.con-rig4-l'));
// 封装的tob切换函数
function tobFun(he1Li, conDiv) {
    he1Li.hover(function () {
        $(this).addClass('res-l').siblings().removeClass('res-l');
        var recIndex = $(this).index();
        conDiv.eq(recIndex).addClass('show-l').siblings().removeClass('show-l');
    });
}
// 随手购
// 放上去左右按钮出现
$('.freego-content-n-c').hover(function () {
    $('.prev-n').css('display', 'block');
    $('.next-n').css('display', 'block');
}, function () {
    $('.prev-n').css('display', 'none');
    $('.next-n').css('display', 'none');
});
// ul列表的left
// 向左
$('.prev-n').click(function () {
    var length = $('.freego-content-list').position().left;
    // 在第一张就不动
    if (length == 0) {
        $('.freego-content-list').css('left', 0);
    } else {
        $('.freego-content-list').css('left', length + 1200);
    }
});
// 向右
$('.next-n').on('click', function () {
    var length = $('.freego-content-list').position().left;
    // 如果到最后一张,就回滚到第一张
    if (length == -2400) {
        $('.freego-content-list').css('left', 0);
    } else {
        $('.freego-content-list').css('left', length - 1200);
    }
});
// 列表配合内容部分
$('.freego-list li').click(function () {
    // 活性列表
    $(this).addClass('freego-active ').siblings().removeClass('freego-active ');
    var index = $(this).index();
    if (-index * 1200 == -3600) {
        $('.freego-content-list').css('left', 0);
    } else {
        $('.freego-content-list').css('left', -index * 1200);
    }
});
// 跳楼

$(window).scroll(function () {
    var windTop = $(window).scrollTop();
    // console.log($('.ty-1200-l').eq(0).offset().top);
    if (windTop >= $('.ty-1200-l').eq(0).offset().top) {
        $('.jump-l').show(500);
    } else {
        $('.jump-l').hide(500);
    }

    $('.ty-1200-l').each(function (index) {
        // console.log($(this).offset().top);
        // console.log(windTop);
        if (windTop > $(this).offset().top) {
            $('.jump-l span').eq(index).addClass('exc-l').siblings().removeClass('exc-l');
        }
    })

});
// 回到顶部
$('.hddb').click(function () {
    $('html').animate({
        'scrollTop': 0
    }, 500)
})
$('.jump-l span').click(function () {
    var indexSpan = $(this).index();
    console.log(indexSpan);
    // console.log($('.ty-1200-l').eq(indexSpan).offset().top);
    var oTop = $('.ty-1200-l').eq(indexSpan).offset().top;
    $('html').animate({
        'scrollTop': oTop,
    }, 1000)
});

// 鼠标放上去变颜色
$('.jump-l span').hover(function () {
    $(this).addClass('exc-l');
}, function () {
    $(this).removeClass('exc-l')
});
$('.rmtj1-l ul li').hover(function () {
    var aIndex = $(this).index()
    $(this).find('[class="a"]').addClass('show-l');
}, function () {
    $(this).find('div:nth-child(4)').removeClass('show-l');
})