$('.item-content-s').hover(function() {
    $(this).addClass('selected')
}, function() {
    $(this).removeClass('selected');
})
var mySwiper = new Swiper('.swiper-container', {
    loop: true, // 循环模式选项
    // 自动轮播
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        pauseOnMouseEnter: true
    },
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
})
var mySwiper1 = new Swiper('.swiper-container1', {
    loop: true, // 循环模式选项
    // 自动轮播
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        pauseOnMouseEnter: true
    },
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },


    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        hideOnClick: 'true',
    },
})
for (i = 0; i < mySwiper.pagination.bullets.length; i++) {
    mySwiper.pagination.bullets[i].onmouseover = function() {
        this.click();
    };
}
for (i = 0; i < mySwiper1.pagination.bullets.length; i++) {
    mySwiper1.pagination.bullets[i].onmouseover = function() {
        this.click();
    };
}

var settimeId = setInterval("getFormartTime( '2022-01-31 11:56:03') ", 1000)