# 打开或关闭新窗口

## 打开一个新窗口

`widnow.open(url [, windowName, setting])`函数用来告诉浏览器打开一个新窗口。比如说：

```html
<script>
    window.open("./demo02.html");
</script>
```

[案例源码](./demo/demo01.html)

页面打开后，浏览器会打开一个新的窗口，窗口的网址是`./demo02.html`;

## 参数 url

`url`用来设置新窗口的网址，可以是本地的一个文件地址，也可以是网络上的一个地址，比如：

```html
<script>
    // 在新窗口中打开百度
    window.open("http://www.baidu.com");

    // 在新窗口中打开本地的一个图片文件
    window.open("../images/01.png");
</script>
```

[案例源码](./demo/demo02.html)

### 参数 windowName

`windowName`用来设置新窗口的`name`属性，也就是新窗口的名字。没有设置的时候是空字符串`""`

```html
<!-- demo03.html -->
<script>
    window.open("./demo04.html", "new window demo04");
</script>
```

[案例源码](./demo/demo03.html)

-   重新打开一个相同 windowName 的窗口时，如果 url 参数和前一个相同，该窗口会重载页面(刷新页面)；如果 url 和前一个不同，该窗口会加载新的 url 页面

-   重新打开一个不同 windowName 的窗口时，即使 url 和前一个相同，浏览器也会打开一个新窗口

### 参数 setting

`setting`参数中可以设置新窗口的一些[属性](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/open#Position%20and%20size%20features)，常见的有：

```html
<script>
    window.open(
        "./demo04.html",
        "new window demo04",
        "width=300,height=300,left=30,top=30,resizable=no",
    );
</script>
```

[案例源码](./demo/demo05.html)

### 返回值

`window.open()`方法返回新窗口的一个引用对象，通过引用对象，可以获取新窗口的一些属性，比如获取新窗口的名称(name 属性)，或者修改新窗口的网址。这些属性会在后面一一讲解。

```html
<script>
    var newWindow = window.open("./demo04.html", "new window demo04");

    console.log("新窗口的name属性值是：", newWindow.name);

    // 这是一个定时器，表示2秒后，修改新窗口的网址，跳转到demo02.html
    setTimeout(function() {
        newWindow.location.href = "./demo04.html";
    }, 2000);
</script>
```

[案例源码](./demo/demo06.html)

## 关闭窗口

`close()`方法用来关闭当前窗口，或者关闭新打开的窗口(仅限于同源窗口)。

```js
// 关闭当前窗口
window.close();

// 关闭刚打开的新窗口
var newWindow = window.open("./demo04.html", "new window demo04");
newWindow.close();
```

[案例源码](./demo/demo07.html)

> 一般来说协议、域名和端口相同的网站，我们说这种网站具有相同的“源”。`file` 协议的任意两个本地文件都属于同源文件
