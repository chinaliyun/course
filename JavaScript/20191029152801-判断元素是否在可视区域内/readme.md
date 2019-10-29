# 判断元素是否在可视区域内

元素在可视区域之外无非以下这两种情况：

1. 当元素顶部到可视区域顶部的距离大于可视区域高度时，元素在可视区域下方；
2. 当元素顶部到可视区域顶部的距离大于元素本身的高度时，元素在可视区域上方；

第一种情况很简单：

```js
element.getBoundingClientRect().top > window.innerHeight;
```

第二种情况：
当元素在可视区域上方时，元素顶部到可视区域顶部的距离是负值，因此判断条件应该是：

```js
element.getBoundingClientRect().top < -element.offsetHeight;
```

那么反过来，如果想判断元素是否在可视区域之内，可以这么写：

```js
if (
    element.getBoundingClientRect().top < window.innerHeight &&
    element.getBoundingClientRect().top > -element.offsetHeight
) {
    // 元素在可视区域之内
} else {
    // 元素在可视区域之外
}
```

## 案例

```html
<style>
    body {
        padding: 1000px 0;
        margin: 0;
    }
    div {
        font-size: 300px;
        background-color: coral;
        text-align: center;
    }
</style>
<div>150</div>
<script>
    window.onscroll = function() {
        var div = document.querySelector("div");
        if (
            div.getBoundingClientRect().top < window.innerHeight &&
            div.getBoundingClientRect().top > -div.offsetHeight
        ) {
            console.log("元素在可视区域之内");
        } else {
            console.log("元素在可视区域之外");
        }
    };
</script>
```

[案例源码](./demo/demo01.html)
