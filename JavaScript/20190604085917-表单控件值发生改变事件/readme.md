# 表单控件值发生改变事件

```html
<form action="./demo03.html">
    姓名：
    <input type="text" name="username" />
    <br />
    密码：
    <input type="password" name="username" />
    <br />
    爱好：
    <label><input type="checkbox" name="goods" value="pear" />梨子</label>
    <label><input type="checkbox" name="goods" value="apple" />苹果</label>
    <label><input type="checkbox" name="goods" value="banana" />香蕉</label>
    <br />
    性别：
    <label><input type="radio" name="sex" value="1" />男</label>
    <label><input type="radio" name="sex" value="2" />女</label>
</form>

<script>
    var form = document.querySelector("form");
    form.oninput = function(event) {
        console.log(event.type, event.target);
    };
    form.onchange = function(event) {
        console.log(event.type, event.target);
    };
</script>
```

通过给表单添加`input`事件和`change`事件，说明这两种事件也会自动向上冒泡。
