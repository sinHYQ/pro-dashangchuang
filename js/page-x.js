// 地图***************************************************************************
var arr = [
    0, 75, 175, 250, 325, 350, 400, 475, 550, 625, 700, 775, 850, 925, 1000,
    1075, 1150, 1225, 1300, 1375, 1450, 1525, 1600, 1675, 1750,
];
var searchCon = document.querySelector(".search-con");
console.log(searchCon);
searchCon.onfocus = function () {
    searchCon.value = "";
};
searchCon.onblur = function () {
    if (searchCon.value == "") {
        searchCon.value = "Five Plus";
    }
};
$(".ding-letter a").mouseenter(function () {
    $(".ding-con-list ul").animate(
        {
            scrollTop: $(arr).eq($(this).index())[0],
        }, 50);
});
$('.itme-city a').click(function () {
    // $(this).text()
    $('.map span').text($(this).text());
});
$('.itme-city a').click(function () {
    // $(this).text()
    $('.map span').text($(this).text());
});
$('.itme-city a').click(function () {
    // $(this).text()
    $('.map span').text($(this).text());
});
// 地图*******************************************************************
// 小三角
$('<div class="tran-x"></div>').appendTo('.item-content-x');
// 菜单-----------鼠标经过换背景颜色
$('.categorys-items-x .categorys-item-x').hover(function () {
    // console.log(this);
    $(this).addClass('selected-x').siblings().removeClass('selected-x');
    // 小尖角
    $(this).children().children('.tran-x').toggle();
    // console.log($(this).children().children('.tran-x'));
    // 鼠标移开，切换的背景颜色消失
    $(this).mouseleave(function () {
        $(this).removeClass('selected-x');
    });
    // 鼠标经过切换隐藏的盒子
    $(this).children('.categorys-items-layer-x').toggle();
});


// 二级标题  鼠标放上去背景颜色改变
$('.bank-x').hover(function () {
    // console.log(this);
    $(this).addClass('word-color-x').parent().siblings().children().removeClass('word-color-x');
    // 鼠标移开，切换的背景颜色消失
    $(this).mouseleave(function () {
        $(this).removeClass('word-color-x');
    });
})


// 热门推荐-----------------------------
$('.hr-slide-hd-x li').mouseenter(function () {
    // console.log(this);
    // 鼠标经过字体变颜色
    $(this).addClass('on-x').siblings().removeClass('on-x');
    var index = $(this).index();
    // console.log(index);
    $('.qiehuan-x').eq(index).addClass('qiehuan-active-x').siblings().removeClass('qiehuan-active-x');
    ImgData();

});

