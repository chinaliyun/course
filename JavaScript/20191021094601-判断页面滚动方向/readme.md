# 判断页面滚动方向

判断页面滚动方向，需要使用`window.scrollY`这个属性

思路：

1. 先保存当前页面超出可视区域的高度 a
2. 给 window 添加滚动事件，让滚动后的超出可视区域距离和上一次的距离 a 进行对比
3. 如果滚动后的超出距离大于上一次的超出距离，表示页面在向上滚动，否则页面在向下滚动
4. 判断后，更新变量 a 的值，便于下次滚动后的比较

```html
<style>
    body {
        height: 1000px;
    }
    div {
        position: fixed;
        top: 0;
        left: 0;
    }
</style>
<div></div>
<script>
    var scrollTop = 0;
    var div = document.querySelector("div");
    window.onscroll = function() {
        if (window.scrollY > scrollTop) {
            div.textContent = "页面向上滚动";
        } else {
            div.textContent = "页面向下滚动";
        }
        scrollTop = window.scrollY;
    };
</script>
```

[案例源码](../demo/demo01.html)

## 浏览器窗口的滚动事件

如果页面刷新前，`window.scrollY` 值不等于 0，页面刷新后，浏览器会自动跳转到刷新前的滚动距离，如果需要在每次刷新后自动执行`scroll`事件中的函数，必须把 window.onscroll 事件放在全局作用于下，看一下下面的案例：

```html
<style>
    body {
        height: 1000px;
        margin: 0;
    }
    div {
        position: fixed;
        top: 0;
        left: 0;
        background-color: bisque;
    }
</style>
<img src="http://pic1.win4000.com/wallpaper/2/58006dda3bf0f.jpg" alt="" />
<div>
    <p class="p1"></p>
    <p class="p2"></p>
</div>
<script>
    var p1 = document.querySelector(".p1");
    var p2 = document.querySelector(".p2");
    window.addEventListener("scroll", function() {
        p1.textContent = "刷新后，我会自动更新当前时间为：" + new Date();
    });
    window.addEventListener("load", function() {
        window.addEventListener("scroll", function() {
            p2.textContent = "页面滚动时，我的内容才会出现";
        });
    });
</script>
```

[案例源码](../demo/demo02.html)

案例中，在不同位置给`window`添加了不同的`scroll`事件，提前让页面拉到最底部，并刷新页面，会发现只有`p1`的内容出现了，滚动页面时，`p2`的内容才出现。

这两个`scroll`事件，一个放在`window.onload`外，我们称为 `event1`，另一个在`window.onload`之内，叫做`event2`;

为什么页面刷新后，event2 没有自动执行？这是因为`window.onscroll`会在页面刷新后立即执行，此时页面资源可能还未加载完成(如果页面需要的资源比较多)，等到加载完成才给 `window` 添加的 `event2` 事件，肯定要等页面再次滚动后，才会执行。

当然了，如果页面内没有什么大量资源，load 事件在浏览器刷新后自动执行的 scroll 事件之前发生，`event1`和`event2`就有可能会同时出现，比如把上面案例中的图片资源取消掉，把页面拉到底，再重新刷新页面时`event1`和`event2`就都会自动执行了

```html
<style>
    body {
        height: 1000px;
        margin: 0;
    }
    div {
        position: fixed;
        top: 0;
        left: 0;
        background-color: bisque;
    }
</style>
<div>
    <p class="p1"></p>
    <p class="p2"></p>
</div>
<script>
    var p1 = document.querySelector(".p1");
    var p2 = document.querySelector(".p2");
    window.addEventListener("scroll", function() {
        p1.textContent = "刷新后，我会自动更新当前时间为：" + new Date();
    });
    window.addEventListener("load", function() {
        window.addEventListener("scroll", function() {
            p2.textContent = "页面滚动时，我的内容才会出现";
        });
    });
</script>
```

[案例源码](../demo/demo03.html)
