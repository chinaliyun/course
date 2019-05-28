# 鼠标进入和离开元素事件

前面讲过，鼠标进入元素和离开元素事件有 4 种： `mouseenter\mouseleave\mousemove\mouseout`。

## mouseenter 和 mouseleave

这四种事件到底有什么区别呢？我们先来试一下`mouseenter`和`mouseleave`事件：

```html
<style>
    .outer {
        width: 200px;
        height: 200px;
        margin: 0 auto;
        background-color: brown;
    }
    .inner {
        width: 100px;
        height: 100px;
        margin: 0 auto;
        background-color: cornflowerblue;
    }
</style>
<div class="outer">
    <div class="inner"></div>
</div>
<script>
    var outer = document.querySelector(".outer");
    var inner = document.querySelector(".inner");

    inner.onmouseenter = function(event) {
        console.log("鼠标进入了inner元素");
    };
    outer.onmouseenter = function(event) {
        console.log("鼠标进入了outer元素");
    };

    inner.onmouseleave = function(event) {
        console.log("鼠标离开了inner元素");
    };
    outer.onmouseleave = function(event) {
        console.log("鼠标离开了outer元素");
    };
</script>
```

反复进入`outer`和`inner`元素后，可以发现：

1. 只有鼠标从外部进入元素内部才会触发`mouseenter`事件
2. 鼠标从`outer`进入`inner`元素时，触发了`inner`元素的`mouseenter`事件，该事件没有冒泡
3. 鼠标从内部离开元素时，才会触发`mouseleave`事件
4. 鼠标离开`inner`元素时，触发了`inner`元素的`mouseleave`事件，但该事件没有冒泡

## mouseover 事件

再来试一下`mouseover`:

```html
<style>
    .outer {
        width: 200px;
        height: 200px;
        margin: 0 auto;
        background-color: brown;
    }
    .inner {
        width: 100px;
        height: 100px;
        margin: 0 auto;
        background-color: cornflowerblue;
    }
</style>
<div class="outer">
    <div class="inner"></div>
</div>
<script>
    var outer = document.querySelector(".outer");
    var inner = document.querySelector(".inner");

    inner.onmouseover = function(event) {
        console.log("鼠标进入了inner元素");
    };
    outer.onmouseover = function(event) {
        console.log("鼠标进入了outer元素");
    };
</script>
```

反复在`body/outer/inner`元素上进进出出后发现：

1. 不管从`body`进入`.outer`,还是从`inner`进入`outer`都会触发`outer`的`mouseover`事件
2. 从`outer`进入`inner`元素时，触发了`inner`元素的`mouseover`事件，且该事件发生了向上冒泡的现象，也就是说在函数执行后，又接着触发了 `outer`元素的`mouseover`事件。

## mouseout 事件

```html
<style>
    .outer {
        width: 200px;
        height: 200px;
        margin: 0 auto;
        background-color: brown;
    }
    .inner {
        width: 100px;
        height: 100px;
        margin: 0 auto;
        background-color: cornflowerblue;
    }
</style>
<div class="outer">
    <div class="inner"></div>
</div>
<script>
    var outer = document.querySelector(".outer");
    var inner = document.querySelector(".inner");

    inner.onmouseout = function(event) {
        console.log("鼠标离开了inner元素");
    };
    outer.onmouseout = function(event) {
        console.log("鼠标离开了outer元素");
    };
</script>
```

反复进出后可以发现：

1. 不管鼠标从`outer`进入`body`，还是进入`inner`元素，都触发了`outer`元素的`mouseout`事件
2. 鼠标离开`inner`元素时，触发了`inner`元素的`mouseout`事件，又向上冒泡，触发了`outer`元素的`mouseout`事件

这样就够了吗？ 我们再看一个案例：

```html
<style>
    .outer {
        width: 200px;
        height: 200px;
        margin: 0 auto;
        background-color: brown;
    }
    .inner1 {
        width: 100px;
        height: 100px;
        margin: 0 auto;
        background-color: cornflowerblue;
    }
    .inner2 {
        width: 100px;
        height: 100px;
        margin: 0 auto;
        background-color: rgb(76, 214, 129);
    }
    p {
        background-color: darkcyan;
    }
</style>
<div class="outer">
    <div class="inner1">
        <p>p element</p>
    </div>
    <div class="inner2"></div>
</div>
<script>
    var outer = document.querySelector(".outer");
    var inner = document.querySelector(".inner");

    outer.onmouseover = function(event) {
        console.log("鼠标进入了outer元素或者它的子元素", event.target);
    };
    outer.onmouseout = function(event) {
        console.log("鼠标离开了outer元素或者它的子元素", event.target);
    };
</script>
```

在页面中反复移动鼠标后，我们发现：

1. 鼠标进入元素或者元素的某个后代元素时，总是会触发元素的进入事件，
2. 元素离开元素或者元素的某个后代元素时，总会触发元素的离开事件
3. 当鼠标在元素的子元素之间移动时，总会先触发离开事件，再触发进入事件
4. 可以通过`event.target`来获取鼠标离开或者进入的实际元素

## 总结

现在可以总结一下`mouseenter/mouseleave`与`mouseover/mouseout`的区别了

1. `mouseenter/mouseleave`不会向上冒泡，而`mouseover/mouseout`会自动向上冒泡
2. `mouseenter/mouseleave`只会在鼠标从外部进入元素本身，或着鼠标向外离开元素本身时触发；鼠标进入元素本身或者元素的后代元素时都会触发元素的`mouseover`事件，鼠标离开元素本身或者元素的后代元素时都会触发元素的`mouseout`事件，
3. 当鼠标在元素的后代元素之间移动时，总会先触发`mouseout`事件，再触发`mouseover`事件
