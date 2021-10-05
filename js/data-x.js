// 品牌旗舰-----------------------------------------------------------

var rightImg = [
    {
        src: "../images/r1.jpg"
    },
    {
        src: "../images/r2.jpg"
    },
    {
        src: "../images/r3.jpg"
    },
    {
        src: "../images/r4.jpg"
    },
    {
        src: "../images/r5.jpg"
    },
    {
        src: "../images/r6.jpg"
    },
    {
        src: "../images/r7.jpg"
    },
    {
        src: "../images/r1.jpg"
    },
    {
        src: "../images/r8.jpg"
    },
    {
        src: "../images/r9.jpg"
    },
    {
        src: "../images/r10.jpg"
    },
    {
        src: "../images/r11.jpg"
    },
];
function RightImg() {
    $('.cb-r-x li').each(function (index, value) {
        $(value).find('img').attr('src', rightImg[index].src);
    });
};
RightImg();
// 品牌旗舰------------------------------------------------------------



// 热门推荐****************************************************************
var remenData = [
    {
        src: "../images/remen1.jpg",
        price: "¥379.00",
        title: "猫人Joyoung/九阳 Y-50C15电压力锅高压锅正品双胆智能预约5L铁釜新品 土灶铁斧 双重安"
    },
    {
        src: "../images/remen2.jpg",
        price: "¥100.00",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权"
    },
    {
        src: "../images/remen3.jpg",
        price: "¥280.00",
        title: "容声空气加湿器大容量大雾量工业商用烟草大型大功率蔬菜水果保鲜"
    },
    {
        src: "../images/remen4.jpg",
        price: "¥2233.00",
        title: "飞利浦空气净化器AC3252家用室内卧室除甲醛雾霾烟尘PM2.5办公室"
    },
    {
        src: "../images/remen5.jpg",
        price: "¥800.00",
        title: "小米空气净化器2S家用办公智能氧吧除甲醛雾霾粉尘 新品"
    },
    {
        src: "../images/remen6.jpg",
        price: "¥439.00",
        title: "美的 M1-L202B微波炉家用迷你智能多功能小型全自动平板式特价"
    }
];
function ImgData() {
    var rel = $('.qiehuan-active-x li');
    // console.log(rel);
    rel.each(function (index, value) {
        $(value).find('.p-img-x img').attr('src', remenData[index].src);
        $(value).find('.p-price-x').text(remenData[index].price);
        $(value).find('.p-name-x a').text(remenData[index].title);
    })
};
ImgData();
// 热门推荐****************************************************************




// 厨房电器小li****************************************************************
var chuImg = [
    {
        src: "../images/0_thumb_G_1489105386951.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1489105497655.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1490147066965.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1490175189731.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1490175270619.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1490175311141.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1490175311141.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1490175339477.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1490175463945.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1490175557366.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1489105386951.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1490204847115.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1489105386951.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1490204884535.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1489105386951.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1490204190470.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1490209587072.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1490209720209.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1489105386951.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1490175463945.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1490175557366.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1489105386951.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1490175463945.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1490175557366.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1489105386951.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1490204847115.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1489105386951.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1489105386951.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1490175463945.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1490175557366.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1489105386951.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1490175463945.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1490175557366.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1489105386951.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1490204847115.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1490175557366.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1489105386951.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1490204847115.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1490175463945.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1490175557366.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1489105386951.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1490204847115.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1490175463945.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1490175557366.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1489105386951.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1490204847115.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1490175557366.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1489105386951.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1490204847115.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1489105386951.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1489105386951.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1490175463945.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1490175557366.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1490175463945.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1490175557366.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1489105386951.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1490204847115.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1490175463945.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1490175557366.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1489105386951.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1490204847115.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1490175463945.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1490175557366.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1489105386951.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1490204847115.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1489105386951.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1489105386951.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1490175463945.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1490175557366.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1489105386951.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1490204847115.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1489105386951.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1489105386951.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1489105386951.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    },
    {
        src: "../images/0_thumb_G_1489105386951.jpg",
        title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
        price: "¥100.00"
    }
];
function tabImg1() {
    $('.con-ul-l li').each(function (index, value) {
        $('<img src="' + chuImg[index].src + '">').appendTo($(value).find('.text-l'));
        $('<a href="">' + chuImg[index].title + '</a>').appendTo($(value).find('.text-l1'));
        // $(value).find('.text-l1').text(chuImg[index].title);
        $(value).find('.text-l2').text(chuImg[index].price);
    })
};
tabImg1();
// 厨房电器小li**********************************************************************

// 大图*****************************************************************
var bigPicData = [
    {
        src: "../images/d1.jpg",
        title: "猫人Joyoung/九阳 Y-50C15电压力锅高压锅正品双胆智能预约5L铁釜新品 土灶铁斧 双重安",
        price: "¥379.00"
    },
    {
        src: "../images/d2.jpg",
        title: "猫人Joyoung/九阳 Y-50C15电压力锅高压锅正品双胆智能预约5L铁釜新品 土灶铁斧 双重安",
        price: "¥379.00"
    },
    {
        src: "../images/d3.jpg",
        title: "猫人Joyoung/九阳 Y-50C15电压力锅高压锅正品双胆智能预约5L铁釜新品 土灶铁斧 双重安",
        price: "¥379.00"
    },
    {
        src: "../images/d4.jpg",
        title: "猫人Joyoung/九阳 Y-50C15电压力锅高压锅正品双胆智能预约5L铁釜新品 土灶铁斧 双重安",
        price: "¥379.00"
    },
    {
        src: "../images/d5.jpg",
        title: "猫人Joyoung/九阳 Y-50C15电压力锅高压锅正品双胆智能预约5L铁釜新品 土灶铁斧 双重安",
        price: "¥379.00"
    },

    {
        src: "../images/d1.jpg",
        title: "猫人Joyoung/九阳 Y-50C15电压力锅高压锅正品双胆智能预约5L铁釜新品 土灶铁斧 双重安",
        price: "¥379.00"
    },
    {
        src: "../images/d2.jpg",
        title: "猫人Joyoung/九阳 Y-50C15电压力锅高压锅正品双胆智能预约5L铁釜新品 土灶铁斧 双重安",
        price: "¥379.00"
    },
    {
        src: "../images/d3.jpg",
        title: "猫人Joyoung/九阳 Y-50C15电压力锅高压锅正品双胆智能预约5L铁釜新品 土灶铁斧 双重安",
        price: "¥379.00"
    },
    {
        src: "../images/d4.jpg",
        title: "猫人Joyoung/九阳 Y-50C15电压力锅高压锅正品双胆智能预约5L铁釜新品 土灶铁斧 双重安",
        price: "¥379.00"
    },
    {
        src: "../images/d5.jpg",
        title: "猫人Joyoung/九阳 Y-50C15电压力锅高压锅正品双胆智能预约5L铁釜新品 土灶铁斧 双重安",
        price: "¥379.00"
    },

    {
        src: "../images/d1.jpg",
        title: "猫人Joyoung/九阳 Y-50C15电压力锅高压锅正品双胆智能预约5L铁釜新品 土灶铁斧 双重安",
        price: "¥379.00"
    },
    {
        src: "../images/d2.jpg",
        title: "猫人Joyoung/九阳 Y-50C15电压力锅高压锅正品双胆智能预约5L铁釜新品 土灶铁斧 双重安",
        price: "¥379.00"
    },
    {
        src: "../images/d3.jpg",
        title: "猫人Joyoung/九阳 Y-50C15电压力锅高压锅正品双胆智能预约5L铁釜新品 土灶铁斧 双重安",
        price: "¥379.00"
    },
    {
        src: "../images/d4.jpg",
        title: "猫人Joyoung/九阳 Y-50C15电压力锅高压锅正品双胆智能预约5L铁釜新品 土灶铁斧 双重安",
        price: "¥379.00"
    },
    {
        src: "../images/d5.jpg",
        title: "猫人Joyoung/九阳 Y-50C15电压力锅高压锅正品双胆智能预约5L铁釜新品 土灶铁斧 双重安",
        price: "¥379.00"
    },

    {
        src: "../images/d1.jpg",
        title: "猫人Joyoung/九阳 Y-50C15电压力锅高压锅正品双胆智能预约5L铁釜新品 土灶铁斧 双重安",
        price: "¥379.00"
    },
    {
        src: "../images/d2.jpg",
        title: "猫人Joyoung/九阳 Y-50C15电压力锅高压锅正品双胆智能预约5L铁釜新品 土灶铁斧 双重安",
        price: "¥379.00"
    },
    {
        src: "../images/d3.jpg",
        title: "猫人Joyoung/九阳 Y-50C15电压力锅高压锅正品双胆智能预约5L铁釜新品 土灶铁斧 双重安",
        price: "¥379.00"
    },
    {
        src: "../images/d4.jpg",
        title: "猫人Joyoung/九阳 Y-50C15电压力锅高压锅正品双胆智能预约5L铁釜新品 土灶铁斧 双重安",
        price: "¥379.00"
    },
    {
        src: "../images/d5.jpg",
        title: "猫人Joyoung/九阳 Y-50C15电压力锅高压锅正品双胆智能预约5L铁釜新品 土灶铁斧 双重安",
        price: "¥379.00"
    },

    {
        src: "../images/d1.jpg",
        title: "猫人Joyoung/九阳 Y-50C15电压力锅高压锅正品双胆智能预约5L铁釜新品 土灶铁斧 双重安",
        price: "¥379.00"
    },
    {
        src: "../images/d2.jpg",
        title: "猫人Joyoung/九阳 Y-50C15电压力锅高压锅正品双胆智能预约5L铁釜新品 土灶铁斧 双重安",
        price: "¥379.00"
    },
    {
        src: "../images/d3.jpg",
        title: "猫人Joyoung/九阳 Y-50C15电压力锅高压锅正品双胆智能预约5L铁釜新品 土灶铁斧 双重安",
        price: "¥379.00"
    }
];


$('.top-con-l').each(function (index, value) {
    $('<img src="' + bigPicData[index].src + '">').appendTo($('.con-r-l').eq(index));
    $(value).find('.con-le-fs-l a').text(bigPicData[index].title);
    $(value).find('.con-le-fs-l span:first').text(bigPicData[index].price);

});
// 大图*****************************************************************


// 随手购
var suishouData = [
    {
        src: "../images/sui1.jpg",
        price: "¥649.00",
        title: "斯伯丁飞利浦剃须刀S5091 男士充电式电动剃须刀刮胡刀胡须刀三刀头正品 一机三用 多效理容 剃须 洁面 修剪鼻毛",
        title2: "查看详情"
    },
    {
        src: "../images/suishou2.jpg",
        price: "¥649.00",
        title: "斯伯丁飞利浦剃须刀S5091 男士充电式电动剃须刀刮胡刀胡须刀三刀头正品 一机三用 多效理容 剃须 洁面 修剪鼻毛",
        title2: "查看详情"
    },
    {
        src: "../images/suishou3.jpg",
        price: "¥649.00",
        title: "斯伯丁飞利浦剃须刀S5091 男士充电式电动剃须刀刮胡刀胡须刀三刀头正品 一机三用 多效理容 剃须 洁面 修剪鼻毛",
        title2: "查看详情"
    },
    {
        src: "../images/suishou4.jpg",
        price: "¥649.00",
        title: "斯伯丁飞利浦剃须刀S5091 男士充电式电动剃须刀刮胡刀胡须刀三刀头正品 一机三用 多效理容 剃须 洁面 修剪鼻毛",
        title2: "查看详情"
    },
    {
        src: "../images/suishou5.jpg",
        price: "¥649.00",
        title: "斯伯丁飞利浦剃须刀S5091 男士充电式电动剃须刀刮胡刀胡须刀三刀头正品 一机三用 多效理容 剃须 洁面 修剪鼻毛",
        title2: "查看详情"
    },
    {
        src: "../images/suishou6.jpg",
        price: "¥649.00",
        title: "斯伯丁飞利浦剃须刀S5091 男士充电式电动剃须刀刮胡刀胡须刀三刀头正品 一机三用 多效理容 剃须 洁面 修剪鼻毛",
        title2: "查看详情"
    },
    {
        src: "../images/suishou7.jpg",
        price: "¥649.00",
        title: "斯伯丁飞利浦剃须刀S5091 男士充电式电动剃须刀刮胡刀胡须刀三刀头正品 一机三用 多效理容 剃须 洁面 修剪鼻毛",
        title2: "查看详情"
    },
    {
        src: "../images/suishou8.jpg",
        price: "¥649.00",
        title: "斯伯丁飞利浦剃须刀S5091 男士充电式电动剃须刀刮胡刀胡须刀三刀头正品 一机三用 多效理容 剃须 洁面 修剪鼻毛",
        title2: "查看详情"
    },
    {
        src: "../images/sui1.jpg",
        price: "¥649.00",
        title: "斯伯丁飞利浦剃须刀S5091 男士充电式电动剃须刀刮胡刀胡须刀三刀头正品 一机三用 多效理容 剃须 洁面 修剪鼻毛",
        title2: "查看详情"
    },
    {
        src: "../images/suishou2.jpg",
        price: "¥649.00",
        title: "斯伯丁飞利浦剃须刀S5091 男士充电式电动剃须刀刮胡刀胡须刀三刀头正品 一机三用 多效理容 剃须 洁面 修剪鼻毛",
        title2: "查看详情"
    },
    {
        src: "../images/suishou3.jpg",
        price: "¥649.00",
        title: "斯伯丁飞利浦剃须刀S5091 男士充电式电动剃须刀刮胡刀胡须刀三刀头正品 一机三用 多效理容 剃须 洁面 修剪鼻毛",
        title2: "查看详情"
    },
    {
        src: "../images/suishou4.jpg",
        price: "¥649.00",
        title: "斯伯丁飞利浦剃须刀S5091 男士充电式电动剃须刀刮胡刀胡须刀三刀头正品 一机三用 多效理容 剃须 洁面 修剪鼻毛",
        title2: "查看详情"
    },
    {
        src: "../images/suishou5.jpg",
        price: "¥649.00",
        title: "斯伯丁飞利浦剃须刀S5091 男士充电式电动剃须刀刮胡刀胡须刀三刀头正品 一机三用 多效理容 剃须 洁面 修剪鼻毛",
        title2: "查看详情"
    },
    {
        src: "../images/suishou6.jpg",
        price: "¥649.00",
        title: "斯伯丁飞利浦剃须刀S5091 男士充电式电动剃须刀刮胡刀胡须刀三刀头正品 一机三用 多效理容 剃须 洁面 修剪鼻毛",
        title2: "查看详情"
    },
    {
        src: "../images/suishou7.jpg",
        price: "¥649.00",
        title: "斯伯丁飞利浦剃须刀S5091 男士充电式电动剃须刀刮胡刀胡须刀三刀头正品 一机三用 多效理容 剃须 洁面 修剪鼻毛",
        title2: "查看详情"
    },
    {
        src: "../images/suishou8.jpg",
        price: "¥649.00",
        title: "斯伯丁飞利浦剃须刀S5091 男士充电式电动剃须刀刮胡刀胡须刀三刀头正品 一机三用 多效理容 剃须 洁面 修剪鼻毛",
        title2: "查看详情"
    },
    {
        src: "../images/suishou7.jpg",
        price: "¥649.00",
        title: "斯伯丁飞利浦剃须刀S5091 男士充电式电动剃须刀刮胡刀胡须刀三刀头正品 一机三用 多效理容 剃须 洁面 修剪鼻毛",
        title2: "查看详情"
    },
    {
        src: "../images/suishou8.jpg",
        price: "¥649.00",
        title: "斯伯丁飞利浦剃须刀S5091 男士充电式电动剃须刀刮胡刀胡须刀三刀头正品 一机三用 多效理容 剃须 洁面 修剪鼻毛",
        title2: "查看详情"
    }
];

$('.freego-content-list li').each(function (index, value) {
    // console.log(value);
    $('<img src="' + suishouData[index].src + '"><p class="p1-x">' + suishouData[index].price + '</p><p class="p2-x"><a href="">' + suishouData[index].title + '</a></p><p class="p-btn"><a href="">' + suishouData[index].title2 + '</a></p>').appendTo($(value));

});

