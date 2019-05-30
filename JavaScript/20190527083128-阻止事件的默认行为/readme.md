# 事件的默认行为

在浏览器的各种事件中，有一部分事件是自带默认行为的。比如超链接元素被点击后，会跳转到对应的网页，这就是它的默认行为。这种行为是可以被取消的，通过事件对象的`preventDefault()`函数。

```html
<a href="http://baidu.com">jump to baidu website</a>

<script>
    var a = document.querySelector("a");
    a.addEventListener("click", function(event) {
        // a元素被点击后，不会再有跳转行为了
        event.preventDefault();
        console.log("a元素被点击了");
    });
</script>
```

超链接元素还有另一个功能：点击后页面滑动到对应的锚点位置。这个功能也是默认行为，也可以被取消掉

```html
<style>
    div {
        height: 800px;
    }
    #div1 {
        background-color: rgb(62, 138, 236);
    }
    #div2 {
        background-color: darkorange;
    }
</style>

<a href="#div2">jump to baidu div2</a>
<div id="div1"></div>
<div id="div2"></div>

<script>
    var a = document.querySelector("a");
    a.addEventListener("click", function(event) {
        // a元素被点击后，页面没有自动跳转到指定锚点位置
        event.preventDefault();
        console.log("a元素被点击了");
    });
</script>
```

表单中的提交按钮也自带跳转页面的默认行为，同样可以使用`event.preventDefault()`取消。

```html
<form action="./demo01.html" , method="GET">
    <input type="text" name="age" value="20" />
    <button>提交表单</button>
</form>
<script>
    var btn = document.querySelector("button");
    btn.addEventListener("click", function(event) {
        // button元素被点击后，不会再有跳转行为了
        event.preventDefault();
        console.log("提交按钮被点击了");
    });
</script>
```

## 不能取消默认行为的事件

当事件发生时，传递给侦听函数的事件对象中有一个`cancelable`属性，用来判断该事件的默认行为是否能被取消，`true`表示可以被取消，`false`表示不能被取消。

前面超链接的默认行为和表单按钮的默认行为都是可以取消的，所以它们事件对象的`cancelale`属性值是`true`，而`wheel(滚轮)`事件的默认行为是不能取消的，这个事件对象的`cancelable`属性值为`false`，如果强行对不能取消默认行为的事件使用`event.preventDefault()`方法，浏览器会抛出错误。

```html
<a href="http://baidu.com">jump to baidu website</a>

<script>
    var a = document.querySelector("a");
    a.addEventListener("click", function(event) {
        console.log("click事件的默认行为是否能被取消：", event.cancelable);
        // 超链接不会跳转页面了
        event.preventDefault();
    });

    window.addEventListener("wheel", function(event) {
        console.log("wheel事件的默认行为是否能被取消：", event.cancelable);
        // 强行取消浏览器会抛出错误
        event.preventDefault();
    });
</script>
```
