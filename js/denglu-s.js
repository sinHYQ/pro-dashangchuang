/* *
 * 会员登录
 */
function userLogin() {
    var frm = $("form[name='formLogin']");
    var username = frm.find("input[name='username']");
    var password = frm.find("input[name='password']");
    var captcha = frm.find("input[name='captcha']");
    var dsc_token = frm.find("input[name='dsc_token']");
    var error = frm.find(".msg-error");
    var msg = '';
    if (username.val() == "") {
        error.show();
        username.parents(".item").addClass("item-error");
        msg += username_empty;
        showMesInfo(msg);
        return false;
    }
    if (password.val() == "") {
        error.show();
        password.parents(".item").addClass("item-error");
        msg += password_empty;
        showMesInfo(msg);
        return false;
    }
    if (captcha.val() == "") {
        error.show();
        captcha.parents(".item").addClass("item-error");
        msg += captcha_empty;
        showMesInfo(msg);
        return false;
    }
    var back_act = frm.find("input[name='back_act']").val();
    var base64password = Base64.encode(password.val());
    Ajax.call('ajax_user.php?act=act_login', 'username=' + username.val() + '&pwcode=' + base64password + '&dsc_token=' + dsc_token.val() + '&captcha=' + captcha.val() + '&back_act=' + back_act, return_login, 'POST', 'JSON');
}

function return_login(result) {
    if (result.error > 0) {
        showMesInfo(result.message);
        $('.captcha_img').click();
    } else {
        if (result.ucdata) {
            $("body").append(result.ucdata)
        }
        location.href = result.url;
    }
}

function showMesInfo(msg) {
    $('.login-wrap .msg-wrap').empty();
    var info = '<div class="msg-error"><b></b>' + msg + '</div>';
    $('.login-wrap .msg-wrap').append(info);
}