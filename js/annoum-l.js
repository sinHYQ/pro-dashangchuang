$('.wdxx1-l').click(function() {
    $('.con-r-li-l:eq(0)').addClass('con-block-l');
    $('.con-r-li-l:gt(0)').removeClass('con-block-l')
});
tobFun($('.xssl-l li'), $('.con-r-li-l'))

function tobFun(he1Li, conDiv) {
    he1Li.click(function() {
        // $(this).addClass('con-block-l').siblings().removeClass('con-block-l');
        var recIndex = $(this).index() + 1;
        $('.con-r-li-l:eq(0)').addClass('con-none-l')
        conDiv.eq(recIndex).addClass('con-block-l').siblings().removeClass('con-block-l');
    });
}
$('.shou-l').on('click', (function() {
    if ($(this).hasClass('icon-jiantoushang')) {
        $(this).removeClass('icon-jiantoushang').addClass('icon-jiantou');
    } else if ($(this).hasClass('icon-jiantou')) {
        $(this).removeClass('icon-jiantou').addClass('icon-jiantoushang')
    }

    $('.wdxx-l').slideToggle(1000)
    $('.xssl-l').slideToggle(1000);

}));
$('.shou1-l').click(function() {
        $('.xssl-l').slideToggle(1000);
        if ($(this).hasClass('icon-jiantoushang')) {
            $(this).removeClass('icon-jiantoushang').addClass('icon-jiantou');
        } else if ($(this).hasClass('icon-jiantou')) {
            $(this).removeClass('icon-jiantou').addClass('icon-jiantoushang')
        }
    })
    // $('.category-rela').hover(function() {
    //     $('.er-quanbu-classl-category').addClass('con-block-l');
    // }, function() {
    //     $('.er-quanbu-classl-category').removeClass('con-block-l')
    // });
    // $('.er-quanbu-classl-category').hover(function() {
    //     $(this).addClass('con-block-l')
    // }, function() {
    //     $(this).removeClass('con-block-l')
    // })