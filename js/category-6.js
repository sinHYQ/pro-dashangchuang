var palyID;
// 轮播图的淡入淡出效果
function autoplay() {
    var i = 0;
    // 间歇显示效果
    var palyID = setInterval(function() {
        // 控制大图
        $('.banner-item-list').eq(i).animate({
            opacity: 1
        }, 300);
        $('.banner-item-list').eq(i).siblings().animate({
            opacity: 0
        }, 300);
        // $('.banner-item-list').eq(i).addClass('banner-item-active').siblings().removeClass('banner-item-active');
        // 控制滑块
        $('.banner-wrapper-nlist li').eq(i).addClass('banner-wrapper-active').siblings().removeClass('banner-wrapper-active');
        // 控制索引
        i++;
        if (i == 5) {
            i = 0;
        }
    }, 3000);
}
autoplay();
$('.banner-wrapper-nlist li').hover(function() {
    clearInterval(palyID);
    var index = $(this).index();
    // 控制大图
    $('.banner-item-list').eq(index).animate({
        opacity: 1
    }, 300);
    $('.banner-item-list').eq(index).siblings().animate({
        opacity: 0
    }, 300);
    // 控制滑块
    $('.banner-wrapper-nlist li').eq(index).addClass('banner-wrapper-active').siblings().removeClass('banner-wrapper-active');
});
// 楼层显示
var secDisTop = $('.limit-n').offset().top;
// 绑定鼠标滚动事件
$(window).scroll(function() {
    // 判断当前的位置
    if ($(window).scrollTop() >= secDisTop) {
        $('.side-lift-n').fadeIn(200);
    } else {
        $('.side-lift-n').fadeOut(200);
    }
});
// 跳楼效果
// 遍历需要跳楼显示的部分
$('.lift-jump-n').each(function(index, value) {
    // 绑定鼠标滚动事件
    $(window).scroll(function() {
        // 判断当前的位置
        if ($(window).scrollTop() >= $(value).offset().top) {
            $('.lift-list-item-n').eq(index).addClass('lift-list-active').siblings().removeClass('lift-list-active');
        }
    });
});
// 回到顶部
$('.lift-list-icon').click(function() {
    console.log(111);
    $('html').animate({
        scrollTop: 0
    }, 1000);
});
// 跳楼点击跳转
$('.lift-list-item-n').each(function(index, value) {
    $(value).click(function() {
        var indexEle = $(this).index();
        console.log($('.lift-jump-n').eq(indexEle).offset().top);
        $('html').animate({
            scrollTop: $('.lift-jump-n').eq(indexEle).offset().top
        }, 10)
    });
});
// 随手购
// 放上去左右按钮出现
$('.freego-content-n-c').hover(function() {
    $('.prev-n').css('display', 'block');
    $('.next-n').css('display', 'block');
}, function() {
    $('.prev-n').css('display', 'none');
    $('.next-n').css('display', 'none');
});
// ul列表的left
// 向左
$('.prev-n').click(function() {
    var length = $('.freego-content-list').position().left;
    // 在第一张就不动
    if (length == 0) {
        $('.freego-content-list').css('left', 0);
        $('.freego-list li').eq(0).addClass('freego-active').siblings().removeClass('freego-active');
    } else {
        console.log(length);
        $('.freego-content-list').css('left', length + 1200);
        if (length == -1200) {
            $('.freego-list li').eq(0).addClass('freego-active').siblings().removeClass('freego-active');
        }
        if (length == -2400) {
            $('.freego-list li').eq(1).addClass('freego-active').siblings().removeClass('freego-active');
        }
    }
});
// 向右
$('.next-n').on('click', function() {
    var length = $('.freego-content-list').position().left;
    // 如果到最后一张,就回滚到第一张
    if (length == -2400) {
        $('.freego-list li').eq(0).addClass('freego-active').siblings().removeClass('freego-active');
        $('.freego-content-list').css('left', 0);
    } else {
        $('.freego-content-list').css('left', length - 1200);
        if (length == -1200) {
            $('.freego-list li').eq(2).addClass('freego-active').siblings().removeClass('freego-active');
        }
        if (length == 0) {
            $('.freego-list li').eq(1).addClass('freego-active').siblings().removeClass('freego-active');
        }
    }
});
// 列表配合内容部分
$('.freego-list li').click(function() {
    // 活性列表
    $(this).addClass('freego-active ').siblings().removeClass('freego-active ');
    var index = $(this).index();
    if (-index * 1200 == -3600) {
        $('.freego-content-list').css('left', 0);
    } else {
        $('.freego-content-list').css('left', -index * 1200);
    }
});
// tab切换
$('.clothes-women-title-list li').hover(function() {
    $(this).addClass('clothes-active').siblings().removeClass('clothes-active');
    $('.clothes-women-content-list').eq($('.clothes-women-title-list li').index($(this))).addClass('clothes-women-content-active').siblings().removeClass('clothes-women-content-active');
});