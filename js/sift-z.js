//渲染主栏商品
var goodsList = $('.goods-list');
var goodsSpread = $('.goods-spread');
var pageArr = this.beautifulCong.getCommunityData('page1');

goodsList.find('li').hover(function() {
    $(this).toggleClass('goods-list-show');
})
goodsList.find('.p-price').each(function(index) {
    $(this).text('￥' + pageArr[index].discountPrice)
})
goodsList.find('.p-num em').each(function(index) {
    $(this).text(pageArr[index].introduce)
})
goodsList.find('.p-name a').each(function(index) {
    $(this).text(pageArr[index].name)
})
goodsList.find('.p-img a').each(function(index) {
    $(this).attr('id', pageArr[index].id)
    $(this).attr('target', '_black')
    $(this).attr('href', 'zhou.html?module=page1&id=' + pageArr[index].id + '&index=' + index + '&num=0')
    $(this).parents('.p-img').siblings('.p-name').find('a').attr('href', 'zhou.html?module=page1&id=' + pageArr[index].id + '&index=' + index + '&num=0')
    var path = pageArr[index].children[0].bigPic;
    $(this).children().attr('src', path)
})
goodsList.find('.sider ul').each(function(index) {
    for (var i = 0; i < pageArr[index].children.length; i++) {
        if (i < 5) {
            var path = pageArr[index].children[i].smallPic;
            $(this).append('<li><img src="' + path + '"></img></li>')
        }
    }
});
//切换商品的展示图
goodsList.find('.sider').each(function(index) {
    $(this).find('li').each(function(num) {
        $(this).mouseenter(function() {
            $(this).parents('.sider').prev().find('a').attr('href', 'zhou.html?module=page1&id=' + pageArr[index].id + '&index=' + index + '&num=' + num)
            var path = pageArr[index].children[num].bigPic;
            $(this).parents('.sider').prev().find('img').attr('src', path)
        })
    })
});


// 渲染推广商品
goodsSpread.find('.p-price').each(function(index) {
    $(this).text('￥' + pageArr[index].discountPrice)
})
goodsSpread.find('.p-num em').each(function(index) {
    $(this).text(pageArr[index].introduce)
})
goodsSpread.find('.p-name a').each(function(index) {
    $(this).text(pageArr[index].name)
})
goodsSpread.find('.p-img a').each(function(index) {
    $(this).attr('id', pageArr[index].id)
    $(this).attr('target', '_black')
    $(this).attr('href', 'zhou.html?module=page1&id=' + pageArr[index].id)
    $(this).parents('.p-img').siblings('.p-name').find('a').attr('href', 'zhou.html?module=page1&id=' + pageArr[index].id)
    var path = pageArr[index].children[0].bigPic;
    $(this).children().attr('src', path)
})

//排序栏切换
$('.filter-sort').find('a').click(function() {
        $(this).addClass('curr').siblings().removeClass('curr');
    })
    //按默认排序
$('.filter-sort a').eq(0).click(function() {
    //清空小图片
    goodsList.find('.sider ul').each(function(index) {
        $(this).find('li').remove();
    })

    goodsList.find('.p-price').each(function(index) {
        $(this).text('￥' + pageArr[index].discountPrice)
    })
    goodsList.find('.p-num em').each(function(index) {
        $(this).text(pageArr[index].introduce)
    })
    goodsList.find('.p-name a').each(function(index) {
        $(this).text(pageArr[index].name)
    })
    goodsList.find('.p-img a').each(function(index) {
        $(this).attr('id', pageArr[index].id)
        $(this).attr('target', '_black')
        $(this).attr('href', 'zhou.html?module=page1&id=' + pageArr[index].id + '&index=' + index + '&num=0')
        $(this).parents('.p-img').siblings('.p-name').find('a').attr('href', 'zhou.html?module=page1&id=' + pageArr[index].id + '&index=' + index + '&num=0')
        var path = pageArr[index].children[0].bigPic;
        $(this).children().attr('src', path)
    })
    goodsList.find('.sider ul').each(function(index) {
        for (var i = 0; i < pageArr[index].children.length; i++) {
            if (i < 5) {
                var path = pageArr[index].children[i].smallPic;
                $(this).append('<li><img src="' + path + '"></img></li>')
            }
        }
    });

    //切换商品的展示图
    goodsList.find('.sider').each(function(index) {
        $(this).find('li').each(function(num) {
            $(this).mouseenter(function() {
                $(this).parents('.sider').prev().find('a').attr('href', 'zhou.html?module=page1&id=' + pageArr[index].id + '&index=' + index + '&num=' + num)
                var path = pageArr[index].children[num].bigPic;
                $(this).parents('.sider').prev().find('img').attr('src', path)
            })
        })
    })

});

//按销量排序
var arrGoods = [];
var arrPage = [];
var arrGoodsId = [];
//重新渲染主栏商品
$('.filter-sort a').eq(1).click(function() {
        //清空小图片
        goodsList.find('.sider ul').each(function(index) {
            $(this).find('li').remove();
        })

        goodsList.find('.p-num em').each(function(index) {
            arrGoods.push(Number($(this).text()));
        })
        arrGoods.sort(function(a, b) {
            return b - a;
        })
        console.log(arrGoods)
        arrGoods.splice(16);
        for (var i = 0; i < arrGoods.length; i++) {
            for (var j = 0; j < pageArr.length; j++) {
                if (arrGoods[i] == pageArr[j].introduce) {
                    arrPage.push(pageArr[j])
                }
            }
        }
        console.log(arrPage)
        goodsList.find('.p-price').each(function(index) {
            $(this).text('￥' + arrPage[index].discountPrice)
        })
        goodsList.find('.p-num em').each(function(index) {
            $(this).text(arrPage[index].introduce)
        })
        goodsList.find('.p-name a').each(function(index) {
            $(this).text(arrPage[index].name)
        })
        goodsList.find('.p-img a').each(function(index) {
            $(this).attr('id', arrPage[index].id)
            $(this).attr('target', '_black')
            $(this).attr('href', 'zhou.html?module=page1&id=' + arrPage[index].id + '&index=' + index + '&num=0')
            $(this).parents('.p-img').siblings('.p-name').find('a').attr('href', 'zhou.html?module=page1&id=' + arrPage[index].id + '&index=' + index + '&num=0')
            var path = arrPage[index].children[0].bigPic;
            $(this).children().attr('src', path)
        })
        goodsList.find('.sider ul').each(function(index) {
            for (var i = 0; i < arrPage[index].children.length; i++) {
                if (i < 5) {
                    var path = arrPage[index].children[i].smallPic;
                    $(this).append('<li><img src="' + path + '"></img></li>')
                }
            }
        })

    })
    //按价格排序
$('.filter-sort a').eq(4).click(function() {
    //清空小图片
    goodsList.find('.sider ul').each(function(index) {
        $(this).find('li').remove();
    })

    goodsList.find('.p-price').each(function(index) {
        arrGoods.push(Number($(this).text().split('￥')[1]));
    })
    arrGoods.sort(function(a, b) {
        return b - a;
    })
    for (var i = 0; i < arrGoods.length; i++) {
        for (var j = 0; j < pageArr.length; j++) {
            if (arrGoods[i] == pageArr[j].discountPrice) {
                arrPage.push(pageArr[j])
            }
        }
    }
    goodsList.find('.p-price').each(function(index) {
        $(this).text('￥' + arrPage[index].discountPrice)
    })
    goodsList.find('.p-num em').each(function(index) {
        $(this).text(arrPage[index].introduce)
    })
    goodsList.find('.p-name a').each(function(index) {
        $(this).text(arrPage[index].name)
    })
    goodsList.find('.p-img a').each(function(index) {
        $(this).attr('id', arrPage[index].id)
        $(this).attr('target', '_black')
        $(this).attr('href', 'zhou.html?module=page1&id=' + arrPage[index].id + '&index=' + index + '&num=0')
        $(this).parents('.p-img').siblings('.p-name').find('a').attr('href', 'zhou.html?module=page1&id=' + arrPage[index].id + '')
        var path = arrPage[index].children[0].bigPic;
        $(this).children().attr('src', path)
    })
    goodsList.find('.sider ul').each(function(index) {
        for (var i = 0; i < arrPage[index].children.length; i++) {
            if (i < 5) {
                var path = arrPage[index].children[i].smallPic;
                $(this).append('<li><img src="' + path + '"></img></li>')
            }
        }
    })
});