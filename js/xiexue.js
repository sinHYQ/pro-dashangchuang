var nav2b = [{
    src: '../images/56c5253eff2e5bf7.jpg',
    title: '爱路思行李箱女24寸铝框拉杆箱男万向轮旅行箱20/22/26/',
    sel: 1,
    price: '￥188.00',
}, {
    src: '../images/249a36dbc4e900af.jpg',
    title: '小米（MI）拉杆箱青春版旅行箱20/24寸男女箱万向轮密',
    sel: 2,
    price: '￥199.00',
}, {
    src: '../images/0_thumb_G_1536617317847.jpg',
    title: 'WMNS Air Jordan 13 aj13 鳄鱼皮纹理 女鞋篮球鞋 - AQ',
    sel: 3,
    price: '￥1200.00',
}, {
    src: '../images/249a36dbc4e900af.jpg',
    title: '小米米家铝镁合金旅行箱拉杆箱 男女万向轮登机行李箱 20',
    sel: 4,
    price: '￥889.00',
}, {
    src: '../images/56c5253eff2e5bf7.jpg',
    title: '爱路思行李箱女24寸铝框拉杆箱男万向轮旅行箱20/22/26/',
    sel: 5,
    price: '￥188.00',
}, ]

var nav21b = [{
    src: '../images/56c5253eff2e5bf7.jpg',
    title: '爱路思行李箱女24寸铝框拉杆箱男万向轮旅行箱20/22/26/',
    sel: 1,
    price: '￥188.00',
}, {
    src: '../images/249a36dbc4e900af.jpg',
    title: '小米（MI）拉杆箱青春版旅行箱20/24寸男女箱万向轮密',
    sel: 2,
    price: '￥199.00',
}]
var joub = [{
        src: '../images/0_thumb_G_1536617317847.jpg',
        title: 'WMNS Air Jordan 13 aj13 鳄鱼皮纹理 女鞋篮球鞋 - AQ1757 004',
        price: '¥1200.00'
    }, {
        src: '../images/0_thumb_G_1489109583798.jpg',
        title: '同仁堂【情侣款】Camel骆驼男靴 时尚潮流英伦风马丁靴高帮皮靴 爆卖1',
        price: '¥1000.00'
    }, {
        src: '../images/0_thumb_G_1489108908792.jpg',
        title: '迪士尼伊米妮2017春新款简约时尚自然摔牛皮单肩手提大小版波士顿包女',
        price: '¥1000.00'
    }, {
        src: '../images/0_thumb_G_1490208908113.jpg',
        title: '西门子NIKE耐克男鞋2017春款AIR ZOOM 33气垫休闲运动跑步鞋83135',
        price: '¥888.00'
    }, {
        src: '../images/0_thumb_G_1489109337889.jpg',
        title: '同庆和堂igtt铝框行李箱拉杆箱旅行箱万向轮男女20/24/26寸密码箱登机',
        price: '¥330.00'
    }, {
        src: '../images/0_thumb_G_1490209093825.jpg',
        title: '伊莱克斯BOSSsunwen头层牛皮真皮针扣皮带男士编织时尚腰带奢侈品个',
        price: '¥1000.00'
    }, {
        src: '../images/0_thumb_G_1490209125275.jpg',
        title: '亿健COVHERlab男士职业正装商务领带 紫方块奢侈领带男韩版 礼品领',
        price: '¥551.00'
    }, {
        src: '../images/0_thumb_G_1490209125275.jpg',
        title: '飞科波米铝框拉杆箱万向轮密码旅行箱子20/24寸行李箱女登机箱男26/28',
        price: '¥250.00'
    }, {
        src: '../images/0_thumb_G_1490208869148.jpg',
        title: '喜瑞New Balance/NB 500系列男鞋复古鞋跑步鞋休闲运动鞋GM500RS',
        price: '¥321.00'
    }, {
        src: '../images/0_thumb_G_1490209033472.jpg',
        title: '一品玉KooDao2016新款奢侈蛇纹真皮女士手提包百搭精品休闲斜挎手拎',
        price: '¥3369.00'
    }]
    // 浏览历史
var joub1 = [{
    src: '../images/0_thumb_G_1536617317847.jpg',
    title: 'WMNS Air Jordan 13 aj13 鳄鱼皮纹理 女鞋篮球鞋 - AQ1757 004',
    price: '¥1200.00'
}, {
    src: '../images/0_thumb_G_1489109583798.jpg',
    title: '同仁堂【情侣款】Camel骆驼男靴 时尚潮流英伦风马丁靴高帮皮靴 爆卖1',
    price: '¥1000.00'
}]

function fun1(arr1, jQus1) {
    for (var i = 0; i < arr1.length; i++) {
        var newSpan1 = (`<span> <div class="list-1b">
        <img src=${arr1[i].src}  alt=""></div>
        <div class="list-2b">${arr1[i].sel}</div>
        <div class='list-3b'>
           <p><a href='collect.html'>${arr1[i].title}</a>
           </p>
           <p>${arr1[i].price}</p></div></span>`);
        jQus1.append(newSpan1);
    };
};
fun1(nav2b, $('.list1-b:eq(0)'))
fun1(nav21b, $('.list1-b:eq(1)'))

function fun(arr, jQus) {
    for (var j = 0; j < arr.length; j++) {
        var newSpan = (`<span><div class="text2-img">
       <a href='collect.html'><img src=${arr[j].src} alt=""></a>
        </div>
        <p class="text5-b"><a href='collect.html'>${arr[j].title}</a> </p>
        <p class="text6-b">${arr[j].price}</p> </span>`);
        jQus.append(newSpan);
    };

};

function fun2(arr2, jQus2) {
    for (var k = 0; k < arr2.length; k++) {
        var newSpan2 = (`<span>
        <div class="bro1-img">
        <a href='collect.html'><img src=${arr2[k].src} alt=""></a></div>
       <p class="bro2-b"><a href='collect.html'>${arr2[k].title}</a></p>
       <p class="bro3-b">查看详情</p>
    </span>`);
        jQus2.append(newSpan2);
    };

};
fun(joub, $('.text21-b'));
fun(joub, $('.xinpin-b'));
fun2(joub1, $('.bro1-b'));
// teb切换
$('.li1-b').hover(function() {
        var reindex = $(this).index()
            // $('.nav2-b').eq(reindex).toggleClass('show-b').siblings().removeClass('show-b');
        $('.nav2-b').eq(reindex).show();
        $('.nav2-b').eq(reindex).hover(function() {
            $(this).show();
        }, function() {
            $(this).hide()
        })
    }, function() {
        var reindex = $(this).index()
        $('.nav2-b').eq(reindex).hide();
    })
    // 热销榜
$('.list-b li').hover(function() {
    var seindex = $(this).index()
    $('.list1-b').eq(seindex).prevAll().fadeToggle(1000)
})

// 移动
$('.roll-left').on('click', function() {
    $('.roll1-b ul').animate({
        left: -1100
    }, 2000)
})
$('.roll-right').on('click', function() {
        $('.roll1-b ul').animate({
            left: 0
        }, 2000)
    })
    // 跳楼