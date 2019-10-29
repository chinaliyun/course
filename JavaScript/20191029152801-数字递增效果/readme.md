# 数字递增效果

效果图下所示：

![]('./images/demo01.gif')

基础代码

```html
<style>
    body {
        margin: 0;
    }
    div {
        font-size: 300px;
        background-color: coral;
        text-align: center;
        color: white;
    }
</style>
<div>0</div>
```

## 实现思路

首先，数字递增效果的最终目的是改变`div`元素的文本内容，所以肯定要用到`element.textContent=''`;递增效果其实就是利用了永久定时器，比如每相隔 50 毫秒，改变元素的文本内容，这个内容从 0 开始，可以每次加 4 试一下：

```js
var div = document.querySelector("div");
var n = 0;
var m = 199;
setInterval(function() {
    n += 4;
    div.textContent = n;
}, 50);
```

这样写是不够的，变量`m`限制了 n 的最大值，所以当`n+=4`之后，发现`n`的值已经超过了目标值`m`，肯定要停止定时器，不需要再递增下去了。

```js
var div = document.querySelector("div");
var n = 0;
var m = 199;
var timer = setInterval(function() {
    n += 4;
    if (n > m) {
        clearInterval(timer);
    }
    div.textContent = n;
}, 50);
```

这样还没完，`n`最后一次递增 4 后的值是 200，按照代码的顺序，会继续把`div`的内容设为 200，如果在清楚定时器后添加`return false`，会导致`div`的文本内容停在 196,所以当发现`n+=4`的结果超过`m`值时，除了清除定时器，还应该把`n`的值直接设置为最大值`m`

```js
var div = document.querySelector("div");
var n = 0;
var m = 199;
var timer = setInterval(function() {
    n += 4;
    if (n > m) {
        n = m;
        clearInterval(timer);
    }
    div.textContent = n;
}, 50);
```

[案例源码](./demo/demo01.html)
