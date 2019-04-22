# 操作窗口滚动条

| `window.scrollTop` | 获取垂直滚动条的位置 |
| `window.scrollLeft` | 获取水平滚动条的位置 |
| `window.scrollTo(x,y)` | 让滚动条垂直滚动到 y 位置，水平滚动到 x 位置 |
| `window.scrollBy(x,y)` | 让滚动条垂直方移动 x 像素，水平方向移动 y 像素 |

浏览器提供了一些方法，用来获取或者设置窗口滚动条的位置。

## 设置滚动条的位置

`window.scrollTo(x,y)`和`window.scrollBy(x,y)`方法都可以用来修改滚动条的位置。

这两个方法都接收两个参数，`x`表示水平方向的滚动距离<`y`表示垂直方向的滚动距离。但是`window.scrollTo`表示滚动条滚动后的最终位置，而`window.scrollBy`表示滚动条从当前位置滚动的距离。

```html
<style>
    body {
        height: 150%;
        width: 150%;
    }
</style>
<script>
    window.scrollTo(100, 100);

    // window.scrollBy(10, -10);
</script>
```

[案例源码](./demo/demo01.html)

还有两个方法可以单独设置一个方向上滚动条的位置`window.scrollX(x)`和`window.scrollY(y)`。

## 获取当前滚动条的位置

`window.scrollX`属性用来获取水平方向滚动条的位置，`window.scrollY`属性用来获取垂直方向滚动条的位置。

```js
console.log("水平滚动条的位置：", window.scrollX);
console.log("垂直滚动条的位置：", window.scrollY);
```
