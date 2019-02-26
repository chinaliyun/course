# 在页面中输出一些信息

可以通过`document.write()`方法，在页面中输出指定内容

```html
<script>
    document.write("这些文字会输出到页面中1");
    document.write("这些文字会输出到页面中2");
</script>
```

[案例源码](./demo/demo01.html)

![](./images/01.png)

除了上面的方法之外，还有一个`document.writeln()`方法，也可以在页面中输出内容

```html
<script>
    document.writeln("这些文字会输出到页面中1");
    document.writeln("这些文字会输出到页面中2");
</script>
```

[案例源码](./demo/demo02.html)

![](./images/02.png)

> `document.write()`与`document.writeln()`的区别在于：前者输出文字后，会多输出一个**空格**
