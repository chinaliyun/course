# 设置和取消定时器

浏览器提供了两种定时器函数，也就是说在指定的时间后，执行某一个函数。

## setInterval()

`window.setTinterval(fn, delayTime)`用于设置一个能够执行多次的定时器，第一个参数必须是一个函数，表示想要重复调用的函数，第二个参数用于设置下次执行函数的延迟时间，单位是“毫秒”。

```html
<style>
    body {
        height: 150%;
        width: 150%;
    }
</style>
<script>
    // 每隔1秒钟，让水平和垂直方向的滚动条位置加10
    window.setInterval(function() {
        window.scrollBy(10, 10);
    }, 1000);
</script>
```

[案例源码](./demo/demo01.html)

## setTimeout()

`window.setTimeout(fn, delayTime)`用于设置一个只会执行一次的定时器，参数和`setInterval()`相同。

```html
<style>
    body {
        height: 150%;
        width: 150%;
    }
</style>
<script>
    // 1秒钟后，让水平和垂直方向的滚动条位置加10
    window.setTimeout(function() {
        window.scrollBy(10, 10);
    }, 1000);
</script>
```

[案例源码](./demo/demo02.html)

## clearInterval()和 clearTimeout()

`window.clearInterval(intervalRefrence)`用于清除`setInterval()`设置的定时器，`window.clearTimeout(timeoutRefrence)`则用来清除`setTimeout()`设置的定时器。

先来看一个清除重复定时器的案例：

```html
<style>
    body {
        height: 150%;
        width: 150%;
    }
</style>
<script>
    // 每隔1秒钟，让水平和垂直方向的滚动条位置加10
    var timer = window.setInterval(function() {
        window.scrollBy(10, 10);
    }, 1000);

    // 3.5秒后，取消定时器timer
    window.setTimeout(function() {
        window.clearInterval(timer);
    }, 3500);
</script>
```

[案例源码](./demo/demo03.html)

> 这个案例中，`setInterval`中的函数执行 3 次后，就不在执行了，因为这个定时器被取消了。

再来看一个清除一次性定时器的案例：

```html
<style>
    body {
        height: 150%;
        width: 150%;
    }
</style>
<script>
    function scrollFn() {
        window.scrollBy(10, 10);
    }
    // 5秒钟后，让水平和垂直方向的滚动条位置加10
    var timer = window.setTimeout(scrollFn, 5000);

    // 3秒后，取消定时器timer
    window.setTimeout(function() {
        window.clearInterval(timer);
    }, 3000);
</script>
```

> 这个案例中函数`scrollFn`不会被执行，因为 3 秒后该定时器就被取消了。
