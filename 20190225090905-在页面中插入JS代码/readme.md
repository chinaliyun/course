# 在页面中插入 JS 代码

页面中的 JS 代码需要使用`script`标签包括起来，而且必须是成对出现的。

```html
<script type="text/javascript">
    // 这里是具体的js代码
</script>
```

## 引用外部的 JS 文件

JS 代码也可以写进单独的文件中，再通过`script`标签的`src`属性引入到网页中。

```html
<script type="text/javascript" src=""></script>
```

单独文件中的 JS 代码不需要再用`script`标签包括，可以直接写入代码

## JS 代码的位置

`script`标签通常有 2 种位置

-   写在`head`标签中，浏览器解析`head`标签中的内容时，就先开始加载并执行 JS 代码，然后再加载 body 部分内容
-   写在`body`中: 浏览器解析到`script`标签的位置时，再执行里面的 JS 代码

到底应该写在哪个位置，需要视情况而定。比如说：如果需要页面打开的时候，立马通过 JS 改变`body`标签的一些样式，这部分 JS 代码就可以写在`head`标签中；如果是定义一些事件，就可以写在`body`的最后面。

## 多个 script 标签

一个页面中可以使用多对`script`标签，引入多个 JS 脚本文件

```html
<html>
    <head>
        <script type="text/javascript" src="1.js"></script>
    </head>
    <body>
        <script type="text/javascript" src="2.js"></script>
        <script type="text/javascript" src="3.js"></script>
        <script type="text/javascript" src="4.js"></script>
    </body>
</html>
```
