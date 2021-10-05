// 精选大牌轮播图
// ul元素
var viewpage = document.getElementsByClassName("viewpage")[0];
// 所有小圆点
var circles = document.getElementsByClassName("circle");
var calList = document.getElementsByClassName("cal-list")[0];
// 排他函数
function backcircle(ele) {
  for (var j = 0; j < ele.length; j++) {
    ele[j].className = "circle";
  }
}
// 鼠标放置到图片区域时，自动轮播停止
calList.onmouseover = function () {
  clearInterval(viewpage.autoId);
};
calList.onmouseout = function () {
  autoplay();
};
// 设置小圆点的计数器
var flag = 0;
// li目标走的位置
var count = 0;
// 自动轮播
function autoplay() {
  viewpage.autoId = setInterval(function () {
    flag++; //1
    count++; //1
    // 判断flag的值
    // 回滚到flag初始0
    if (flag == circles.length) {
      flag = 0;
    }
    // 判断count的值回归
    if (count == viewpage.children.length) {
      // 拉回到left=0
      viewpage.style.left = 0;
      // 设置count为1,这样就可以看到第二张图片了
      count = 1;
    }
    // ①设置小圆点的样式
    // 先排他
    backcircle(circles);
    circles[flag].className = "circle active";
    // ②移动当前的ul使图片进行移动
    var target = count * -758;
    // 走动画
    moveAnimation2(viewpage, target);
  }, 2000);
}
autoplay();
// 焦点轮播
// 循环给小圆点绑定事件
for (var i = 0; i < circles.length; i++) {
  // 保存i值
  circles[i].index = i;
  // 绑定事件
  circles[i].onclick = function () {
    // 设置同步
    flag = this.index;
    count = this.index;
    // 1.样式
    // 先排他
    backcircle(circles);
    this.className = "circle active";
    // 2.ul进行移动
    var target = this.index * -758;
    // 走动画
    moveAnimation2(viewpage, target);
  };
}

// 公告。促销
$(".tab_head_item-h").mouseenter(function () {
  $(this).addClass("on-h").siblings().removeClass("on-h");
  $(".con-none-h")
    .eq($(this).index())
    .addClass("con-active-h")
    .siblings()
    .removeClass("con-active-h");
});

// 好货大聚集轮播
var box_bd_ul_h = document.querySelector(".box-bd-ul-h");
var counth = 0;
function haohuoPlay() {
  box_bd_ul_h.autoId = setInterval(function () {
    counth++;
    if (counth == box_bd_ul_h.children.length - 5) {
      box_bd_ul_h.style.left = 0;
      counth = 1;
    }
    var target = counth * -238;
    moveAnimation2(box_bd_ul_h, target);
  }, 5000);
}
haohuoPlay();
var prev_h = document.querySelector(".prev-h");
var next_h = document.querySelector(".next-h");
next_h.onclick = function () {
  counth++; //1
  if (counth == box_bd_ul_h.children.length - 5) {
    // 拉回到left=0
    box_bd_ul_h.style.left = 0;
    counth = 1;
  }
  var target = counth * -238;
  moveAnimation2(box_bd_ul_h, target);
};
prev_h.onclick = function () {
  // 是否是第一张图片
  if (counth == 0) {
    counth = box_bd_ul_h.children.length - 5; //最后一个下标
    box_bd_ul_h.style.left = counth * -238 + "px";
  }
  counth--;
  var target = counth * -238;
  // 走动画
  moveAnimation2(box_bd_ul_h, target);
};

// 跳楼
// 当滚轮滚到超级品牌日的时候，楼层显示
var secDisTop_h = $(".super-dayin-h").offset().top;
$(window).scroll(function () {
  if ($(window).scrollTop() >= secDisTop_h) {
    // 楼层显示
    $(".floor-h").fadeIn();
    // 头部隐藏栏显示
    $(".attached-search-h").slideDown();
  } else {
    // 楼层隐藏
    $(".floor-h").fadeOut();
    // 头部隐藏栏消失
    $(".attached-search-h").slideUp();
  }
});
// 遍历每个楼层
$(".louceng-h").each(function (index, value) {
  $(window).scroll(function () {
    if ($(window).scrollTop() >= value.offsetTop) {
      // 排他思想
      $(".floor-item")
        .eq(index)
        .addClass("floor-active-h")
        .siblings()
        .removeClass("floor-active-h");
    }
  });
});
// 当鼠标点击的时候，会返回顶部
$(".floor-item-top").click(function () {
  $("html").animate(
    {
      scrollTop: 0,
    },
    1000
  );
});

//  点击事件
$(".floor-item").click(function () {
  $("html").animate({
    scrollTop: $(".louceng-h").eq($(this).index()).offset().top,
  });
});
