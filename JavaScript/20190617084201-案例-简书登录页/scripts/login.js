window.onload = function() {
    var mobileInputEle = document.querySelector(".mobile_input");
    var mobileErrorEle = document.querySelector(".error_mobile");
    function checkMobile() {
        // 如果手机号码输入框的内容为空字符串，提示手机号码不能为空
        var mobileValue = mobileInputEle.value.replace(/\ /g, "");
        mobileInputEle.value = mobileValue;
        if (mobileValue == "") {
            mobileErrorEle.textContent = "手机号码不能为空";
            mobileErrorEle.classList.add("show");
            return false;
        }
        if (!/^1\d{10}$/.test(mobileValue)) {
            mobileErrorEle.textContent = "手机号码不符合规则";
            mobileErrorEle.classList.add("show");
            return false;
        }
        console.log("手机号码校验通过");
        mobileErrorEle.classList.remove("show");
        return true;
    }
    mobileInputEle.addEventListener("input", checkMobile);

    var passInputEle = document.querySelector(".pass_input");
    var passErrorEle = document.querySelector(".error_pass");
    function checkPass() {
        var passValue = passInputEle.value.replace(/\ /g, "");
        if (passValue == "") {
            passErrorEle.textContent = "密码不能为空";
            passErrorEle.classList.add("show");
            return false;
        }
        if (passValue.length < 6) {
            passErrorEle.classList.add("show");
            passErrorEle.textContent = "密码不能少于6位";
            return false;
        }
        if (passValue.length > 10) {
            passErrorEle.textContent = "密码不能超过10位字符";
            passErrorEle.classList.add("show");
            return false;
        }
        passErrorEle.classList.remove("show");
        return true;
    }
    passInputEle.addEventListener("input", checkPass);

    var loginBtn = document.querySelector(".login_btn");
    loginBtn.addEventListener("click", function() {
        var flag1 = checkMobile();
        var flag2 = checkPass();
        if (flag1 && flag2) {
            alert("登录成功");
        }
    });
};
