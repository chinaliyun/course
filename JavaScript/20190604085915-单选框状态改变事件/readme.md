# 单选框状态改变事件

单选框控件，在用户点击任意一个单选框时，都会先触发元素的`input`事件，再触发元素的`change`事件

```html
<form action="./demo03.html">
    爱好：
    <label><input type="radio" name="age" value="pear" />梨子</label>
    <label><input type="radio" name="age" value="apple" />苹果</label>
    <label><input type="radio" name="age" value="banana" />香蕉</label>
</form>

<script>
    var inputs = document.querySelectorAll("input");
    var len = inputs.length;
    for (var i = 0; i < len; i++) {
        inputs[i].addEventListener("change", function(event) {
            console.log("触发了", event.target, "的change事件");
        });
        inputs[i].addEventListener("input", function(event) {
            console.log("触发了", event.target, "的input事件");
        });
    }
</script>
```

[案例源码](./demo/demo01.html)

![](./images/01.png)
