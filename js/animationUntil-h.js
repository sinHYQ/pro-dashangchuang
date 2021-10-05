function moveAnimation1(ele, target) {
  // 使用DOM元素,用定时的id值来添加DOM元素属性
  clearInterval(ele.interId);
  // 获取定时器的id
  ele.interId = setInterval(function () {
    if (ele.offsetLeft == target) {
      clearInterval(ele.interId);
      // 向右走
    } else if (ele.offsetLeft < target) {
      // 给最后一步步长做判断
      var dis = ele.offsetLeft + 13 > target ? target : ele.offsetLeft + 13;
      ele.style.left = dis + "px";
      // 向左走
    } else if (ele.offsetLeft > target) {
      // 给最后一步步长做判断
      var dis = ele.offsetLeft - 13 < target ? target : ele.offsetLeft - 13;
      ele.style.left = dis + "px";
    }
  }, 50);
}

function moveAnimation2(ele, target) {
  // 使用DOM元素,用定时的id值来添加DOM元素属性
  clearInterval(ele.interId);
  // 获取定时器的id
  ele.interId = setInterval(function () {
    if (ele.offsetLeft == target) {
      clearInterval(ele.interId);
    } else {
      // 向右走向左走
      var slowStep = (target - ele.offsetLeft) / 10;
      slowStep = slowStep > 0 ? Math.ceil(slowStep) : Math.floor(slowStep);
      ele.style.left = ele.offsetLeft + slowStep + "px";
    }
  }, 20);
}

