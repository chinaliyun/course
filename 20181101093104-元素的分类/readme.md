# 元素的分类

不同的标签在浏览器中都有一个默认的显示方式，大致分为三类：

-   块级元素
-   行内元素(“内联元素”)，
-   行内块元素

## 块级元素

-   块级元素默认的宽度和父级元素的内容宽度保持一致
-   块级元素和它后面的元素都会在页面中另起一行，

比如`div p Hx`等等。

## 行内元素

-   多个内联元素会在同一行显示，并在超过父级宽度的时候自动换行
-   内联元素之间有“空隙“，空隙可以使用 CSS 样式去掉

比如`i em u ins s del a span`等等

## 行内块元素

-   多个行内快元素会在同一行显示，并在超过父级宽度的时候自动换行
-   行内快元素之间有”空隙“，空隙可以使用 CSS 样式去掉

这些显示方式都是通过`display`属性设置的，属于浏览器的内置样式，我们可以通过手动设置`display`的属性值来修改元素的显示方式：

| 属性值         | 作用                 |
| -------------- | -------------------- |
| `block`        | 把元素改为块级元素   |
| `inline`       | 把元素改为行内元素   |
| `inline-block` | 把元素改为行内块元素 |

```html
<style>
    div {
        display: inline;
    }
    span {
        display: block;
    }
    p {
        display: inline-block;
    }
</style>

<div>we are family;</div>
<div>we are family;</div>
<div>we are family;</div>

<span>we are family;</span><span>we are family;</span
><span>we are family;</span>

<p>we are family;</p>
<p>we are family;</p>
<p>we are family;</p>
```

[案例源码](./demo/demo01.html)

![](./images/01.png)

> 上面案例中`div`元素默认是块级元素,会独占一行的，通过`display:inline`，它变成了一个行内元素，就会遵从行内元素的规则，多个元素在同一行显示
