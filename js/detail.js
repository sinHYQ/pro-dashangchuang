// 个人化妆、清洁用品
$('.clean-drop-con-z').hover(function() {
    $(this).toggleClass('clean-drop-block-z');
    $(this).next().toggleClass('menu-drop-main-show-z');
    $(this).find('b').css('display', 'block');
}, function() {
    $(this).toggleClass('clean-drop-block-z');
    $(this).next().toggleClass('menu-drop-main-show-z');
    $(this).find('b').css('display', 'none');
});
$('.clean-drop-none-z').hover(function() {
    $(this).toggleClass('menu-drop-main-show-z');
    $(this).prev().toggleClass('box-border-show-z');
    $(this).prev().find('b').css('display', 'block');
}, function() {
    $(this).toggleClass('menu-drop-main-show-z');
    $(this).prev().toggleClass('box-border-show-z');
    $(this).prev().find('b').css('display', 'none');
});
// 主体部分---品牌
$('.selector-pic-main-z li').hover(function() {
    $(this).find('img').css('display', 'none');
    $(this).find('span').css('border-color', '#f42424');
}, function() {
    $(this).find('img').css('display', 'block');
    $(this).find('span').css('border-color', 'white');
});
//主体部分---多选单选
$('.icon-down').click(function() {
    $(this).toggleClass('icon-up');
});
$('.selector-checkbox-r-z').click(function() {
    $(this).find('.icon-plus').toggleClass('icon-reduce');
    $(this).find('span').toggleClass('mul-z').text('收起');
});
//主体部分---所有品牌切换
$('.all-a-z li').mouseover(function() {
    $(this).addClass('curr-z').siblings().removeClass('curr-z');
});
$('.selector-zimu-z li span').click(function() {
    $(this).toggleClass('span-icon-z');
});
$('.selector-close-btn-z span').click(function() {
    $(this).parents('.selector-letter-z').css('display', 'none');
    $('.selector-pic-main-z').css('display', 'block');
});
$('.selector-checkbox-r-z').click(function() {
    $('.selector-pic-main-z').css('display', 'none');
    $('.selector-letter-z').css('display', 'block');
});
// 输入框的清空确定的出现消失
$('.filter-warp-sub-z input').focusin(function() {
    $('.filter-warp-sure-z').css('display', 'block');
});
$('.filter-warp-sub-z input').focusout(function() {
    $('.filter-warp-sure-z').css('display', 'none');
});
var  min  =  0;
var  max  =  0;
$('.filter-warp-sure-z a').eq(1).click(function()  {     // $('.filter-warp-sub-z input').val('');
        
    $(this).parent('.filter-warp-sure-z').css('display',  'none');    
    min  =  Number($('.filter-warp-sub-z input').eq(0).val());    
    max  =  Number($('.filter-warp-sub-z input').eq(1).val());    
    if  (min  >=  max)  {         $('.pb-z').css('display',  'block');        
        $('.pb-x-z').click(function()  {             $('.pb-z').css('display',  'none');            
            $('.filter-warp-sub-z input').val('');         });     } 
    else  {

            }
});
$('.filter-warp-fcheckbox-z label').click(function() {
    console.log($(this));
    $(this).toggleClass('label-z');
});
//图片切换
$('.goods-list-sider-z li').mouseenter(function() {
    var imgArr = $(this).find('img');
    var repImg = $(this).parents('.goods-list-pic-z').find('.goods-list-img-z').find('img');
    repImg.attr('src', imgArr.attr('src'));
});
//收藏的红心切换
$('.icon-zan-alt').parent('a').click(function() {
    $(this).children().toggleClass('icon-zan-alts');
    $(this).css('color', '#f42424');
    if (!$(this).children().hasClass('icon-zan-alts')) {
        $(this).css('color', '#555');
    };
});
// 对比
$('.goods-list-ope-z input').click(function() {
    if ($(this).is(':checked')) {
        $(this).next().addClass('hook-z');
        $('.duibi-block-z').fadeIn();

    } else {
        $(this).next().removeClass('hook-z');
        $('.duibi-block-z').fadeOut();
    }
});
//清空对比栏
$('.second-z span').click(function() {
    console.log($(this));
});
//隐藏对比栏
$('.third-z').click(function() {
    $(this).parents('.duibi-block-z').fadeOut();
});
// console.log(page1);