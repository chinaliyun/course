# CSS 中的动画

需要用到的属性：

-   `animation-name`：动画名称
-   `animation-duration`:动画时间(周期)
-   `animation-timing-function`:动画速度
-   `animation-delay`:动画延迟时间
-   `animation-iteration-count:`动画播放次数

动画名称需要配合`@keyframe`选择器使用

```html
<style>
    div {
        width: 100px;
        height: 100px;
        background-color: red;
    }
    div:hover {
        animation-name: donghua;
        animation-duration: 1s;
        animation-timing-function: linear;
        /* animation-iteration-count: infinite; */
    }
    @keyframes donghua {
        0% {
            transform: scale(1, 1);
        }
        30% {
            transform: scale(0.8, 0.8);
        }
        50% {
            transform: scale(1.4, 1.4);
        }
        70% {
            transform: scale(0.8, 0.8);
        }
        85% {
            transform: scale(1.2, 1.2);
        }
        100% {
            transform: scale(1, 1);
        }
    }
</style>
<div></div>
```

[案例源码](./demo/demo01.html)可以把鼠标移入元素查看动画效果
