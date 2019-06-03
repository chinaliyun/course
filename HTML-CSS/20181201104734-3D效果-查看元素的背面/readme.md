# 改变 3D 旋转的中心点

上一篇文章中，介绍了如何创建三维空间，以及让元素在三维空间中沿三个轴方向旋转，案例中的旋转都是沿着元素的中心点(线)变化的。这里讲一下如何改变 3D 旋转过程中的中心点(线);

方法： 给使用了`transform`属性的元素，添加`transform-origin: X轴位置 Y轴位置`属性。

-   X 轴上：0%(`left`)对应着元素的最左边，100%(`right`)对应着元素的最右边
-   Y 轴上：0%(`top`)对应着元素的最上边，100%(`bottom`)对应着元素的最下边
-   默认值是`50% 50%`或者是`center center`
-   百分比值可以使用对应的英文单词代替

## 绕着 X 轴旋转

```html
<style>
    .outer {
        width: 100px;
        height: 100px;
        float: left;
        margin: 150px 50px;
        border: 1px solid gray;
        perspective: 200px;
        transform-style: preserve-3d;
    }
    .inner {
        width: 100%;
        height: 100px;
        transform-origin: 50% 50%;
        animation: rotate 3s linear;
        animation-iteration-count: infinite;
    }
    .outer:nth-child(odd) .inner {
        background-color: red;
    }
    .outer:nth-child(even) .inner {
        background-color: red;
    }
    .outer:nth-child(2) .inner {
        transform-origin: center 0%;
    }
    .outer:nth-child(3) .inner {
        transform-origin: center 70%;
    }
    .outer:nth-child(4) .inner {
        transform-origin: center 100%;
    }

    @keyframes rotate {
        0% {
            transform: rotateX(0deg);
        }
        100% {
            transform: rotateX(360deg);
        }
    }
</style>
<div class="outer"><div class="inner"></div></div>
<div class="outer"><div class="inner"></div></div>
<div class="outer"><div class="inner"></div></div>
<div class="outer"><div class="inner"></div></div>
```

[案例源码](./demo/demo01.html)

![](./images/01.gif)

上面代码中的几个案例，都在围绕着 X 轴旋转，只有 Y 轴位置发生变化的时候，才会影响旋转的效果。

第一个案例中，没有设置`transform-origin`属性，使用了默认值`center center`,也就是说会沿着元素 `Y 轴上的中心点所在的线`进行旋转。

第二个案例中设置了`transform-origin:center 0%`属性，会沿着元素 `Y轴最上边`进行旋转

第三个案例中设置了`transform-origin:center 70%`属性，会沿着元素 `从Y轴顶部开始60%的位置所在的线`进行旋转

第四个案例中设置了`transform-origin:center 100%`属性，会沿着元素 `Y轴最下边`进行旋转

## 绕着 Y 轴旋转

```html
<style>
    .outer {
        width: 100px;
        height: 100px;
        float: left;
        margin: 150px 80px;
        border: 1px solid gray;
        perspective: 200px;
        transform-style: preserve-3d;
    }
    .inner {
        width: 100%;
        height: 100px;
        transform-origin: 50% 50%;
        animation: rotate 3s linear;
        animation-iteration-count: infinite;
    }
    .outer:nth-child(odd) .inner {
        background-color: red;
    }
    .outer:nth-child(even) .inner {
        background-color: red;
    }
    .outer:nth-child(2) .inner {
        transform-origin: 0% center;
    }
    .outer:nth-child(3) .inner {
        transform-origin: 70% center;
    }
    .outer:nth-child(4) .inner {
        transform-origin: 100% center;
    }

    @keyframes rotate {
        0% {
            transform: rotateY(0deg);
        }
        100% {
            transform: rotateY(360deg);
        }
    }
</style>
<div class="outer"><div class="inner"></div></div>
<div class="outer"><div class="inner"></div></div>
<div class="outer"><div class="inner"></div></div>
<div class="outer"><div class="inner"></div></div>
```

[案例源码](./demo/demo02.html)

![](./images/02.gif)

第一个案例中，没有设置`transform-origin`属性，使用了默认值`center center`,也就是说会沿着元素 `X轴上的中心点所在的线`进行旋转。

第二个案例中设置了`transform-origin: 0% center`属性，会沿着元素 `X轴最左边`进行旋转

第三个案例中设置了`transform-origin: 70% center`属性，会沿着元素 `从X轴左边开始60%的位置所在的线`进行旋转

第四个案例中设置了`transform-origin: 100% center`属性，会沿着元素 `X轴最右边`进行旋转

## 围绕 Z 轴旋转

```html
<style>
    .outer {
        width: 100px;
        height: 100px;
        float: left;
        margin: 150px 80px;
        border: 1px solid gray;
        perspective: 200px;
        transform-style: preserve-3d;
    }
    .inner {
        width: 100%;
        height: 100px;
        transform-origin: 50% 50%;
        animation: rotate 3s linear;
        animation-iteration-count: infinite;
    }
    .outer:nth-child(odd) .inner {
        background-color: red;
    }
    .outer:nth-child(even) .inner {
        background-color: red;
    }
    .outer:nth-child(2) .inner {
        transform-origin: 0% 0%;
    }
    .outer:nth-child(3) .inner {
        transform-origin: 70% 70%;
    }
    .outer:nth-child(4) .inner {
        transform-origin: 100% 100%;
    }
    .outer:nth-child(5) .inner {
        transform-origin: 100% 0%;
    }

    @keyframes rotate {
        0% {
            transform: rotateZ(0deg);
        }
        100% {
            transform: rotateZ(360deg);
        }
    }
</style>
<div class="outer"><div class="inner"></div></div>
<div class="outer"><div class="inner"></div></div>
<div class="outer"><div class="inner"></div></div>
<div class="outer"><div class="inner"></div></div>
<div class="outer"><div class="inner"></div></div>
```

[案例源码](./demo/demo03.html)

![](./images/03.gif)

第一个案例中，没有设置`transform-origin`属性，使用了默认值`center center`,也就是说会沿着元素 `X轴上的中心点所在的线`进行旋转。

第二个案例中设置了`transform-origin: 0% 0%`属性，会沿着元素 `左上角`进行旋转

第三个案例中设置了`transform-origin: 70% 70%`属性，会沿着元素 `从X轴左边开始70%位置和从Y轴上边开始70%位置相交叉的点`进行旋转

第四个案例中设置了`transform-origin: 100% 100%`属性，会沿着元素 `右下角`进行旋转

第四个案例中设置了`transform-origin: 100% 0%`属性，会沿着元素 `右上角`进行旋转
