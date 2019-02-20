# 隐藏元素

隐藏元素可以通过两种方式：

-   display:none, 会让元素彻底消失，下面的元素依次往上移动
-   visibility:hidden，相当于透明度设为 0，元素依然占据页面空间
-   元素 visibility 属性的默认值是`visible`

```html
<style>
    .outer {
        float: left;
        height: 280px;
        border: 1px solid red;
    }
    .inner {
        width: 120px;
        height: 120px;
        margin: 10px;
        background-color: green;
    }
    .outer:nth-child(1) .inner:nth-child(1) {
        display: none;
    }
    .outer:nth-child(2) .inner:nth-child(1) {
        visibility: hidden;
    }
</style>

<div class="outer">
    <div class="inner"></div>
    <div class="inner"></div>
</div>

<div class="outer">
    <div class="inner"></div>
    <div class="inner"></div>
</div>
```

[](./demo/demo01.html)

![](./images/01.png)
