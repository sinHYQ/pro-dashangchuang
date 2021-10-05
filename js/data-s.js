// 预售首页
var datas1 = [{
    src: "../images/img-1-s.jpg",
    title: "马克华菲长袖T恤男士圆领修身韩版刺绣纯棉2017春装新款潮t 7002 立体3D绣花 欧美潮流范 17春装新品",
    pricelow: "¥128.00",
    price: "¥153.60",
    count: "1",
    time: '已结束',
}];
// 预售23数据
var datas2 = [{
    src: "../images/yushou2-content1.jpg",
    title: "歌梵 床头柜 地中海美式乡村蓝色田园床边柜 储物卧室家具 品质保障 用料环保 质保5年--不单卖",
    pricelow: "¥200.00",
    btn: "预售已结束",
    count: "15",
    time: '已结束',
}, {
    src: "../images/yushou2-content2.jpg",
    title: "特大号加厚塑料收纳箱整理箱有盖收纳盒衣服被子置物周转储物箱子",
    pricelow: "¥200.00",
    btn: "预售已结束",
    count: "6",
    time: '已结束',
}, {
    src: "../images/yushou2-content3.jpg",
    title: "一叶子晚安睡眠面膜补水保湿深层清洁免洗冻膜专柜正品女化妆品 诺丽果冻膜 补水保湿",
    pricelow: "¥50.00",
    btn: "预售已结束",
    count: "6",
    time: '已结束',
}, {
    src: "../images/yushou2-content4.jpg",
    title: "马克华菲长袖T恤男士圆领修身韩版刺绣纯棉2017春装新款潮t 7002 立体3D绣花 欧美潮流范 17春装新品",
    pricelow: "¥128.00",
    btn: "立即预约",
    count: "7",
}, {
    src: "../images/yushou2-content5.jpg",
    title: "一都枇杷新鲜水果特等级",
    pricelow: "¥49.90",
    btn: "预售已结束",
    count: "0",
    time: '已结束',
}];


// 渲染预售首页

function datas01() {
    $('.s-warp-s').each(function(index, value) {
        $(value).find('.p-img-s img').attr('src', datas1[index].src)
        $(value).find('.p-price-s span').text(datas1[index].pricelow)
        $(value).find('.p-price-s del').text(datas1[index].price)
        $(value).find('.p-name-s a').text(datas1[index].title)
        $(value).find('.p-info-s em').text(datas1[index].count)
    })

}

function datas02() {
    $('.p-warp').each(function(index, value) {
        $(value).find('.p-img img').attr('src', datas2[index].src)
        $(value).find('.p-info .p-name a').text(datas2[index].title)
        $(value).find('.p-info .p-item .p-price').text(datas2[index].pricelow)
        $(value).find('.p-info .p-item em').text(datas2[index].count)
        $(value).find('.p-info .p-dibu a').text(datas2[index].btn)
    })

}
var datas3 = datas2.reverse()

function datas03() {
    $('.s-warp-s').each(function(index, value) {
        $(value).find('.p-img-s img').attr('src', datas3[index].src)
        $(value).find('.p-price-s span').text(datas3[index].pricelow)
        $(value).find('.p-price-s del').text(datas3[index].price)
        $(value).find('.p-name-s a').text(datas3[index].title)
        $(value).find('.p-info-s em').text(datas3[index].count)
        $(value).find('.p-info-s .time').text(datas3[index].time)
    })

}
// 店铺街数据
var datas4 = [{
    src: "../images/pubu-1.jpg",
    src1: "../images/lvlian.jpg",
    title: "绿联专卖店",
    name: "主营品牌： 绿联",
    src3: "../images/sanxing.png",
}, {
    src: "../images/pubu-2.jpg",
    src1: "../images/huoying.jpg",
    title: "火影旗舰店",
    name: "主营品牌： 火影",
    src3: "../images/sanxing.png",
    seller: "平台自营",
}, {
    src: "../images/pubu-3.jpg",
    src1: "../images/quanyoujiasi.jpg",
    title: "全友家私",
    name: "主营品牌： 全友家私",
    src3: "../images/sanxing.png",
}, {
    src: "../images/maybelline.jpg",
    src1: "../images/lvlian.jpg",
    title: "美宝莲",
    name: "主营品牌： 美宝莲",
    src3: "../images/yising.png",
}, {
    src: "../images/pubu-5.jpg",
    src1: "../images/qiju.png",
    title: "奇居旗舰店",
    name: "主营品牌： 奇居",
    src3: "../images/erxing.png",
}, {
    src: "../images/pubu-6.jpg",
    src1: "../images/durex.jpg",
    title: "成人旗舰店",
    name: "主营品牌： 杜蕾斯",
    src3: "../images/yising.png",
}, {
    src: "../images/pubu-7.jpg",
    src1: "../images/hstyle.jpg",
    title: "/服装专卖店",
    name: "主营品牌： 服装",
    src3: "../images/yising.png",
}, {
    src: "../images/pubu-8.jpg",
    src1: "../images/duomiaowu.jpg",
    title: "多妙屋",
    name: "主营品牌： 多妙屋",
    src3: "../images/yising.png",
}, {
    src: "../images/pubu-9.jpg",
    src1: "../images/dazhong.jpg",
    title: "大众专卖店",
    name: "主营品牌： 大众",
    src3: "../images/yising.png",
}, {
    src: "../images/pubu-10.jpg",
    src1: "../images/dangdang.jpg",
    title: "当当旗舰店",
    name: "主营品牌：当当旗舰店",
    src3: "../images/yising.png",
}, {
    src: "../images/pubu-11.jpg",
    src1: "../images/dika.jpg",
    title: "迪卡侬专卖店",
    name: "主营品牌： 迪卡侬",
    src3: "../images/yising.png",
}, {
    src: "../images/pubu-12.jpg",
    src1: "../images/zhoudafu.jpg",
    title: "周大福旗舰店",
    name: "主营品牌： 周大福",
    src3: "../images/yising.png",
}, {
    src: "../images/pubu-13.jpg",
    src1: "../images/dashangchuang.jpg",
    title: "旗舰店",
    seller: "平台自营",
    name: "主营品牌： 绿联",
    src3: "../images/sixing.png",
}, {
    src: "../images/pubu-14.jpg",
    src1: "../images/swisse.jpg",
    title: "Swisse专卖店",
    name: "主营品牌：Swisse",
    src3: "../images/yising.png",
}, {
    src: "../images/pubu-15.png",
    src1: "../images/jianeng.png",
    title: "大商创旗舰店",
    name: "主营品牌：佳能",
    src3: "../images/yising.png",
}, {
    src: "../images/pubu-16.jpg",
    src1: "../images/dashangchuang.jpg",
    title: "创造旗舰店",
    name: "主营品牌： 佳能",
    src3: "../images/sanxing.png",
}, {
    src: "../images/pubu-17.jpg",
    src1: "../images/wanzhuo.jpg",
    title: "普陀区 - 万卓有限公司",
    seller: "平台自营",
    name: "主营品牌： 万卓",
    src3: "../images/sanxing.png",
}]


function datas04() {
    console.log($('article').children('a').find('img'));
    $('article').each(function(index, value) {
        $(value).children('a').find('img').attr('src', datas4[index].src)
        $(value).find('.info .s-logo img').attr('src', datas4[index].src1)
        $(value).find('.info .s-name .name').text(datas4[index].title)
        $(value).find('.info p').eq(0).text(datas4[index].name)
        $(value).find('.info').children('p').eq(1).children('img').attr('src', datas4[index].src3)
        $(value).find('.info .seller-sr').text(datas4[index].seller)
    })
}