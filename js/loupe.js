var picId = location.search;
picId = picId.split('?')[1];
var pId=Number(picId.split(':')[1]);
for(var i=0;i<dataff.length;i++){
    if(dataff[i].id==pId){
        var temp=dataff[i];
    }
}
$('title').text(temp.title);
$('.change-f').text(temp.describe).append('<em class="jian-f">');
$('.changef-f li').text(temp.describe);
$('<span>').text(temp.title).appendTo($('.nav-f'));
$('.fangl-f').find('img').each(function(index,value){
    if(pId<300){
        $(value).attr('src',temp.src);
    }else{
        $(value).attr('src',temp.children[1].smallPic)
    }
})
$('.changef-f li').hover(function(){
    $(this).css('color','#f42424');
},function(){
    $(this).css('color','#555')
})
$('.change-f').hover(function(){
    if($('.change-f').get().indexOf($(this)[0])==2){
        $(this).css('border-color','#f42424')
    }else{
        $(this).css({
            'z-index':'2',
            'border-color':'#f42424',
            'border-bottom-color':'#fff'
        })
        $(this).next().css({
            'display':'block',
            'border-color':'#f42424'
        })
    }
},function(){
    if($('.change-f').get().indexOf($(this)[0])==2){
        $(this).css('border-color','#d2d2d2')
    }else{
        $(this).css({
            'z-index':'1',
            'border-color':'#d2d2d2'
        })
        $(this).next().css({
            'display':'none',
            'border-color':'#d2d2d2'
        })
    }
})
$('.changef-f ul').hover(function(){
    $(this).css({
        'display':'block',
        'border-color':'#f42424'
    })
    $(this).prev().css({
        'z-index':'2',
        'border-color':'#f42424',
        'border-bottom-color':'#fff'
    })
},function(){
    $(this).css('display','none')
    $(this).prev().css({
        'z-index':'1',
        'border-color':'#d2d2d2'
    })
})
// 放大镜
$('.min-f').hover(function(){
    $('.mask-f').css('display','block')
    $('.max-f').css('display','block')
},function(){
    $('.mask-f').css('display','none')
    $('.max-f').css('display','none')
})
$('.min-f').mousemove(function(e){
    // 求出光标在盒子内的坐标---小盒子不是紧挨着body的
    var minX = e.pageX - $('.min-f').offset().left;
    var minY = e.pageY - $('.min-f').offset().top;
    // 光标在蒙版的中间
    minX = minX - $('.mask-f').outerWidth() / 2;
    minY = minY - $('.mask-f').outerHeight() / 2;
    // // 求出蒙版移动的最大距离
    var maskMaxdisX = $('.min-f').outerWidth() - $('.mask-f').outerWidth();
    var maskMaxdisY = $('.min-f').outerHeight() - $('.mask-f').outerHeight();
    // // 判断蒙版移动的最大距离
    if (minX > maskMaxdisX) {
        minX = maskMaxdisX;
    } else if (minX < 0) {
        minX = 0;
    };
    if (minY > maskMaxdisY) {
        minY = maskMaxdisY;
    } else if (minY < 0) {
        minY = 0;
    };
    // // 设定蒙版的位置
    $('.mask-f').offset({left:$('.min-f').offset().left+minX,top:$('.min-f').offset().top+minY})
    // // 3.蒙版移动,大盒子里的图片也移动
    // // 求比例关系
    var ratioX = minX / maskMaxdisX;
    var ratioY = minY / maskMaxdisY;
    // // 大图片移动的距离
    $('.maxImg-f').offset({left:$('.max-f').offset().left-(ratioX * ($('.maxImg-f').outerWidth() - $('.max-f').outerWidth())),top:$('.max-f').offset().top-(ratioY * ($('.maxImg-f').outerHeight() - $('.max-f').outerHeight()))})
})
var rel=$('.fangl-f').children('.min-f').children('img').attr('src');
$('<img>').attr('src',rel).appendTo('.minerc-f li');
$('.minerc-f li').mouseover(function(){
    $(this).find('img').css('position','static');
    $(this).addClass('boder').siblings().remove('boder')
})
$('.title-f').text(temp.title)
$('.shop-price-f').text(temp.pricelow)
$('.priceago-f').text(temp.price);
$(function() {
    //新品热销推荐tab切换
    $('.list li').click(function() {
        // console.log(this);
        var num = $('.list li').get().indexOf($(this)[0]);
        $(this).addClass('curr').siblings().removeClass('curr');
        $('.mc-main').eq(num).fadeIn(200).siblings().fadeOut(200);
    });
    //最近浏览清空按钮
    $('.fr.fs12').click(function(e) {
        // e.stopPropagation();
        $(this).parent().next().children('li').remove();
        console.log($(this).parent().next().children().remove());
        $('<div class="history_tishi">"您已清空最近浏览过的商品" <br> <a href="index.html">去购物</a></div>').appendTo($(this).parent().next());
    });

    //手机购买事件
    $('.tit').hover(function() {
        $('.tit-s').addClass('on');
        $('.tit-s').hover(function() {
            $(this).addClass('on');
        }, function() {
            $(this).removeClass('on');
        })
    }, function() {
        $('.tit-s').removeClass('on');
    });

    //右页面tab切换
    // 右页面板块
    $('.gm-tab li').click(function() {
        $(this).addClass('curr').siblings().removeClass('curr');
        var num = $('.gm-tab li').get().indexOf($(this)[0]);
        // console.log(num);
        if (num == 0) {
            $('.gm-f-item').eq(0).show();
        } else if (num == 1) {
            $('.gm-f-item').eq(0).hide();
            $('.gm-f-item').eq(1).show();

        } else {
            $('.gm-f-item').eq(0).hide();
            $('.gm-f-item').eq(1).hide();
        }
    });
    // 第二板块a标签点击事件
    $('ul.gm-f-tab a').click(function() {
        $('ul.gm-f-tab a').removeClass('curr');
        $(this).addClass('curr');
    });
    //第三板块a标签点击事件
    $('div.gm-f-tab a').click(function() {
        $('div.gm-f-tab a').removeClass('curr');
        $(this).addClass('curr');
    });
})