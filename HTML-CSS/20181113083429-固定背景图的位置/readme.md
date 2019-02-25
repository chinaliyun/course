# 固定背景图的位置

`background-attachment`属性用来设置背景图是否跟随元素内容滚动而滚动。

| 属性值 | 作用                                                   |
| ------ | ------------------------------------------------------ |
| scroll | 默认值，表示背景图片跟随元素内容滚动而滚动             |
| fixed  | 表示背景图片会固定在指定位置，不跟随元素内容滚动而滚动 |

下面的案例在自己的浏览器中打开查看效果：

```html
<style>
    body {
        height: 1000px;
        background-image: url("./images/01.png");
        background-repeat: no-repeat;
        background-attachment: scroll; /* 跟随元素内容滚动 */
    }
</style>
<body></body>
```

[案例源码](./demo/demo01.html)

```html
<style>
    body {
        height: 1000px;
        background-image: url("./images/01.png");
        background-repeat: no-repeat;
        background-attachment: fixed; /* 不跟随元素内容滚动 */
    }
</style>
<body></body>
```

[案例源码](./demo/demo02.html)
