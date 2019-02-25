# 改变背景图的尺寸

`backgrond-size: 水平尺寸 垂直尺寸`用于改变背景图的尺寸。

| 属性值    | 作用                                         |
| --------- | -------------------------------------------- |
| length    | 使用`px em rem`等单位设置背景图尺寸          |
| %         | 分别以`元素宽度和高度`的百分比设置背景图尺寸 |
| `cover`   | 优先保证元素被背景图沾满                     |
| `contain` | 优先保证背景图片能完整的显示出来             |
| `auto`    | 根据另一个方向的尺寸自动缩放                 |

```html
<style>
    div {
        width: 300px;
        height: 150px;
        background-color: rgb(239, 163, 241);
        background-image: url("./images/01.png");
        background-repeat: no-repeat;
        background-position: center center;
    }
    .p1 {
        background-size: 150px 75px;
    }
    .p2 {
        background-size: 50% 50%;
    }
    .p3 {
        background-size: cover;
    }
    .p4 {
        background-size: contain;
    }
</style>
background-size: 150px 75px:
<div class="p1"></div>
background-size: 50% 50%:
<div class="p2"></div>
background-size: cover:
<div class="p3"></div>
background-size: contain:
<div class="p4"></div>
```

[案例源码](./demo/demo01.html)

![](./images/01.png)
