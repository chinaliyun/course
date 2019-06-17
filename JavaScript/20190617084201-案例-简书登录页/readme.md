```
project(项目)
    |---login.html
    |---register.html
    |---index.html
    |---css
    |   |---login.css
    |   |---register.css
    |   |---index.css
    |---scripts
        |---login.js
        |---register.js
        |---index.js
```

用户在输入 input 的时候，检测手机号码和密码是否符合要求
如果不符合要求，下方显示红色提示文字

用户点击登录时，再次检测手机号码和密码，全都符合要求后弹出“登录成功”

手机号码：
不能为空
必须符合手机号码的规则
（11 位纯数字， 从 1 开始） /^1\d{10}/

密码：
不能为空
不能少于 6 位字符
不能多于 10 位字符
