# 改变背景图的起始位置

`background-clip`属性用于修改背景图的显示区域。下面的`content`表示`width*height`之间的区域。

| 属性值      | 作用                                                     |
| ----------- | -------------------------------------------------------- |
| border-box: | 默认值，表示背景图片会在 border+padding+content 之间显示 |
| padding-box | 表示背景图片只在 padding+content 之间显示                |
| content-box | 表示背景图片只在 content 之间的区域显示                  |

```html
<style>
    div {
        width: 200px;
        height: 120px;
        margin-bottom: 10px;
        padding: 20px;
        border: 20px solid rgba(28, 216, 106, 0.432);
        background-color: rgb(252, 133, 22);
        background-image: url("./images/01.png");
        background-repeat: no-repeat;
        background-origin: border-box;
        background-size: 100% 100%;
    }
    .p1 {
        background-clip: border-box;
    }
    .p2 {
        background-clip: padding-box;
    }
    .p3 {
        background-clip: content-box;
    }
</style>
background-clip: border-box;
<div class="p1"></div>
background-clip: padding-box;
<div class="p2"></div>
background-clip: content-box;
<div class="p3"></div>
```

[案例源码](./demo/demo01.html)

![](./images/01.png)
