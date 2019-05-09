# 操作 class 实现 css 过渡的案例

```html
<style>
    .begin {
        width: 100px;
        height: 100px;
        background-color: rgb(74, 194, 154);
        transition: all 0.5s linear;
    }
    .end {
        width: 200px;
        height: 150px;
        background-color: rgb(216, 139, 38);
    }
</style>
<div class="begin"></div>
<script>
    window.onload = function() {
        var div = document.querySelector("div");
        setTimeout(function() {
            div.classList.add("end");
        }, 2000);
    };
</script>
```

[案例源码](./demo/demo01.html)
