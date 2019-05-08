# js 操作元素样式实现 css 过渡的案例

```html
<style>
    div {
        width: 100px;
        height: 100px;
        background-color: rgb(74, 194, 154);
        transition: all 0.5s linear;
    }
</style>
<div></div>
<script>
    window.onload = function() {
        var div = document.querySelector("div");
        setTimeout(function() {
            div.style.width = "200px";
            div.style.height = "150px";
            div.style.backgroundColor = "rgb(216, 139, 38)";
        }, 2000);
    };
</script>
```

[案例源码](./demo/demo01.html)
