window.onload = main;
function main() {
    var nicknameEle = document.querySelector(".nickname_input");
    var passEle = document.querySelector(".pass_input");
    var mobileEle = document.querySelector(".mobile_input");
    var codeEle = document.querySelector(".code_input");

    var sendCodeEle = document.querySelector(".send_code_btn");

    var submitEle = document.querySelector(".login_btn");
    submitEle.addEventListener("click", function() {
        var codeDiv = document.querySelector(".code_item");
        var nickname = checkNickname(),
            mobile = checkMobile(),
            pass = checkPass();

        if (/show/.test(codeDiv.className)) {
            var code = checkCode();
            if (nickname && mobile && pass && code) {
                alert("注册成功");
            }
        } else {
            if (nickname && mobile && pass) {
                alert("注册成功");
            }
        }

        /*
        如果codeitem是显示状态
            需要检查昵称 手机号码 验证码 密码
        否则：
            只需要检查 昵称 手机号 密码
        */
    });
    var initNum = 10,
        num = initNum,
        flag = false;
    sendCodeEle.addEventListener("click", function() {
        if (!checkMobile()) {
            return false;
        }
        if (flag) {
            return false;
        }
        flag = true;
        sendCodeEle.classList.remove("show");
        sendCodeEle.textContent = "重新发送(" + num + "s)";
        var timer = setInterval(function() {
            if (num == 0) {
                clearInterval(timer);
                num = initNum;
                flag = false;
                sendCodeEle.textContent = "重新发送";
                sendCodeEle.classList.add("show");
                return false;
            }
            num--;
            sendCodeEle.textContent = "重新发送(" + num + "s)";
        }, 1000);
    });
    nicknameEle.addEventListener("input", checkNickname);
    mobileEle.addEventListener("input", function() {
        var codeDiv = document.querySelector(".code_item");
        codeDiv.classList.add("show");
        checkMobile();
    });
    passEle.addEventListener("input", checkPass);
    codeEle.addEventListener("input", checkCode);
    function checkCode() {
        var codeValue = codeEle.value.replace(/\ /g, "");
        codeEle.value = codeValue;
        var errorCodeEle = document.querySelector(".error_code");
        if (codeValue.length == 0) {
            errorCodeEle.textContent = "验证码不能为空";
            errorCodeEle.classList.add("show");
            return false;
        }

        if (!/^\d{6}$/.test(codeValue)) {
            errorCodeEle.textContent = "验证码格式错误";
            errorCodeEle.classList.add("show");
            return false;
        }
        errorCodeEle.classList.remove("show");
        return true;
    }
    function checkNickname() {
        var nicknameValue = nicknameEle.value.replace(/\ /g, "");
        nicknameEle.value = nicknameValue;
        var errorNicknameEle = document.querySelector(".error_nickname");

        if (nicknameValue.length == 0) {
            errorNicknameEle.textContent = "昵称不能为空";
            errorNicknameEle.classList.add("show");
            return false;
        }
        if (/^\d/.test(nicknameValue)) {
            errorNicknameEle.textContent = "昵称不能以数字开头";
            errorNicknameEle.classList.add("show");
            return false;
        }
        if (/[\u4e00-\u9fa5]/.test(nicknameValue)) {
            errorNicknameEle.textContent = "昵称中不能使用中文";
            errorNicknameEle.classList.add("show");
            return false;
        }
        if (nicknameValue.length < 6) {
            errorNicknameEle.textContent = "昵称不能少于6位字符";
            errorNicknameEle.classList.add("show");
            return false;
        }
        if (nicknameValue.length > 10) {
            errorNicknameEle.textContent = "昵称不能超过10位字符";
            errorNicknameEle.classList.add("show");
            return false;
        }
        errorNicknameEle.classList.remove("show");
        return true;
    }
    function checkMobile() {
        var mobileValue = mobileEle.value.replace(/\ /g, "");
        var errorMibileEle = document.querySelector(".error_mobile");
        mobileEle.value = mobileValue;

        if (mobileValue.length == 0) {
            sendCodeEle.classList.remove("show");
            errorMibileEle.textContent = "手机号码不能为空";
            errorMibileEle.classList.add("show");
            return false;
        }
        if (
            !/^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/.test(
                mobileValue
            )
        ) {
            sendCodeEle.classList.remove("show");
            errorMibileEle.textContent = "手机号码格式错误";
            errorMibileEle.classList.add("show");
            return false;
        }
        errorMibileEle.classList.remove("show");
        sendCodeEle.classList.add("show");
        return true;
    }
    function checkPass() {
        var passValue = passEle.value.replace(/\ /g, "");
        var errorPassEle = document.querySelector(".error_pass");
        passEle.value = passValue;
        if (passValue.length == 0) {
            errorPassEle.textContent = "密码不能为空";
            errorPassEle.classList.add("show");
            return false;
        }

        if (passValue.length < 6) {
            errorPassEle.textContent = "密码不能少于6位字符";
            errorPassEle.classList.add("show");
            return false;
        }
        if (passValue.length > 10) {
            errorPassEle.textContent = "密码不能超过10位字符";
            errorPassEle.classList.add("show");
            return false;
        }
        errorPassEle.classList.remove("show");
        return true;
    }
}
