# 给元素添加一个透明度

`opacity`属性用来设置元素的透明度

-   透明度的值从 0 开始，到 1 结束
-   0 表示完全透明，1 表示完全不透明
-   透明度可以是小数
-   当元素添加 opacity 属性的时候，内部的所有元素，都会变成透明的，并且内部元素再把 opacity 属性设为 1 是无效的。

```html
<style>
    div {
        width: 100px;
        height: 100px;
        float: left;
        margin: 5px;
        background-color: gold;
    }
    div:nth-child(2) {
        opacity: 0.2;
    }
    div:nth-child(2) img {
        width: 50px;
        height: 50px;
        opacity: 1; /*  不会覆盖父级的0.2 */
    }
    div:nth-child(3) {
        opacity: 0.6;
    }
</style>
<div>默认</div>
<div>0.2 <img src="./images/01.jpg" alt="" /></div>
<div>0.6</div>
```

[](./demo/demo01.html)

![](./images/01.png)
