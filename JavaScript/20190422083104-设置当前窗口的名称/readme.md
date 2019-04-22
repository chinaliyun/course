# 获取当前打开窗口的名称

`window.name`属性用来获取当前窗口的名称，还可以获取从本页面打开的另一个窗口的名称。

默认情况下，当前窗口`window.name`属性值是空字符串，可以通过`window.name`设置或者获取。

```js
cosnole.log(window.name); // ""
window.name = "this window";
cosnole.log(window.name); // "this window"
```

还可以获取到从本页面打开的新窗口的名称：

```html
<script>
    var newWin1 = window.open("./demo02.html", "demo02 window");
    console.log(newWin1.name);

    var newWin2 = window.open("./demo03.html", "demo03 window");
    console.log(newWin2.name);
</script>
```

[案例源码](./demo/demo01.html)
