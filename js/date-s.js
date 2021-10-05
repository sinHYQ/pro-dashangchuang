function getFormartTime(setTime) {
    var date1 = new Date();
    var date2 = new Date(setTime);
    var minusTime = Math.abs((date1 - date2) / 1000);
    // 获取天
    var days = parseInt(minusTime / 60 / 60 / 24);
    days = days < 10 ? '0' + days : days;
    // 获取小时
    var hours = parseInt(minusTime / 60 / 60 % 24);
    hours = hours < 10 ? '0' + hours : hours;
    // 获取分钟
    var minutes = parseInt(minusTime / 60 % 60);
    minutes = minutes < 10 ? '0' + minutes : minutes;
    // 获取秒
    var seconds = parseInt(minusTime % 60);
    seconds = seconds < 10 ? '0' + seconds : seconds;
    $('.days').text(days)
    $('.hours').text(hours)
    $('.minutes').text(minutes)
    $('.seconds').text(seconds)
}