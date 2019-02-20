# 给元素设置圆角距离

格式： border-radius: 圆角距离；

相当于以下四种属性的集合

-   border-top-left-radius
-   border-top-right-radius
-   border-bottom-left-radius
-   border-bottom-right-radius

值：

-   长度
-   百分比

注意：

-   当属性值的单位是长度，元素是正方，且圆角距离大于等于元素宽高二分之一的时候，元素会显示为一个正圆
-   当元素是一个长方形的时候，圆角距离如果用长度来表示，最大不能超过最短一边的 50%

```html
<style>
    div {
        width: 100px;
        height: 100px;
        background-color: gold;
        margin: 5px;
    }
    div:nth-child(1) {
        border-radius: 20px;
    }
    div:nth-child(2) {
        border-radius: 50px;
    }
    div:nth-child(3) {
        border-radius: 50%;
    }
    div:nth-child(4) {
        width: 200px;
        border-radius: 50%;
    }
    div:nth-child(5) {
        width: 200px;
        border-radius: 50px;
    }
</style>

<div>border-radius: 20px;</div>
<div>border-radius: 50px;</div>
<div>border-radius: 50%</div>
<div>width: 200px; border-radius: 50%;</div>
<div>width: 200px; border-radius: 50px;</div>
```

[](./demo/demo01.html)

![](./images/01.png)
