# 获取当前窗口的打开状态

`window.closed`属性用来获取当前窗口，或者新打开窗口的关闭状态。

先看看获取当前窗口的用法：

```js
console.log(window.closed); // false
```

下面是获取新打开窗口的状态：

```html
<script>
    var newWin1 = window.open("./demo02.html", "demo02 window");
    console.log(newWin1.closed);

    var newWin2 = window.open("./demo03.html", "demo03 window");
    console.log(newWin2.closed);
</script>
```

[案例源码](./demo/demo01.html)
