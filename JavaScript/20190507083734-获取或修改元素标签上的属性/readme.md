# 获取或修改元素标签上的属性

元素标签上可以定义许多属性，可以通过它们获取已有属性的值，或者新增属性，或者修改已有属性的属性值(class 属性除外)。

比如：

```html
<h1 id="logo" title="logo title">h1 element</h1>

<script>
    var h1 = document.querySelector("h1");
    console.log("h1.id: ", h1.id);
    console.log("h1.title: ", h1.title);
</script>
```

[案例源码](./demo/demo01.html)

![](./images/01.png)

还可以通过这些属性修改已有属性的属性值：

```html
<h1 id="logo" title="logo title">h1 element</h1>

<script>
    var h1 = document.querySelector("h1");
    console.log("修改前的h1.id: ", h1.id);
    console.log("修改前的h1.title: ", h1.title);

    h1.id = "member";
    h1.title = "member title";

    console.log("修改后的h1.id: ", h1.id);
    console.log("修改后的h1.title: ", h1.title);
</script>
```

[案例源码](./demo/demo02.html)

![](./images/02.png)


