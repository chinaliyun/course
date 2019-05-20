# 给对象添加监听事件和侦听函数

一个事件中，包含三个对象：监听对象，监听事件和侦听函数。意思是当监听对象发生指定事件时，会自动触发设置好的侦听函数。

以给元素添加点击事件`onclick`为例：

```html
<div onclick="console.log('click event1')">element</div>
```

[案例源码](./demo/demo01.html)

> 这里`onclick`的属性值，被当做 js 语句执行了

第二种方式是把要执行的语句封装到函数中，把函数调用作为事件的属性值

```html
<div onclick="add()">element</div>
<script>
    function add() {
        console.log("click event");
    }
</script>
```

[案例源码](./demo/demo02.html)

第三种方式，是把监听事件和侦听函数都放在`js`当中：

```html
<div onclick="add()">element</div>
<script>
    var div = document.querySelector("div");
    div.onclick = function add() {
        console.log("click event");
    };
</script>
```

[案例源码](./demo/demo03.html)
