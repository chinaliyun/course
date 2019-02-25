# 设置超出元素区域的显示方式

前面见过了不少元素嵌套元素的案例，也知道了元素可以定义宽高尺寸，那么如果子级元素的尺寸超过父级元素的尺寸会怎么样呢？

`overflow`属性用来设置子级元素超出父级尺寸时的显示方式。

| 属性值     | 作用                                                           |
| ---------- | -------------------------------------------------------------- |
| `visible`  | 默认值，超出部分仍然显示出来                                   |
| `hidden`   | 隐藏所有的超出部分，不再能被看到                               |
| `scroll`   | 在水平方向和垂直方向都显示一个滚动条，用来拖动查看超出部分     |
| `scroll-x` | 在水平方向显示一个滚动条                                       |
| `scroll-Y` | 在垂直方向都显示一个滚动条                                     |
| `auto`     | 当元素内容宽高超过元素宽高的时候，自动在对应方向显示一个滚动条 |

```html
<style>
    div {
        width: 120px;
        height: 80px;
        margin: 15px;
        background-color: rgb(235, 143, 82);
    }
    img {
        opacity: 0.6;
        height: 100px;
    }
    .p1 {
        overflow: visible;
    }
    .p2 {
        overflow: hidden;
    }
    .p3 {
        overflow: scroll;
    }
    .p4 {
        overflow-x: scroll;
        overflow-y: hidden;
    }
    .p5 {
        overflow: auto;
    }
</style>
overflow: visible:
<div class="p1"><img src="./images/01.png" alt="" /></div>
overflow: hidden:
<div class="p2"><img src="./images/01.png" alt="" /></div>
overflow: scroll;
<div class="p3"><img src="./images/01.png" alt="" /></div>
overflow-x: scroll; overflow-y: hidden;
<div class="p4"><img src="./images/01.png" alt="" /></div>
overflow: auto:
<div class="p5"><img src="./images/01.png" alt="" /></div>
```

[](./demo/demo01.html)

![](./images/01.png)
