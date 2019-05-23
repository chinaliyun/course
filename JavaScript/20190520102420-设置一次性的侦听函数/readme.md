# 一次性的侦听函数

通过`element.addEventListener(type, fn [,options])`中`options`参数中的`once`属性可以让侦听函数只执行一次。

```html
<style>
    div {
        width: 200px;
        height: 200px;
        background-color: coral;
        margin: 0 auto;
    }
</style>
<script>
    var div = document.querySelector("div");
    div.addEventListener(
        "click",
        function() {
            console.log("这里的文字只会被执行一次");
        },
        {
            once: true,
        },
    );
</script>
```

[案例源码](./demo/demo01.html)
