# JS 中的作用域

在 JS 中，变量和函数都有各自的使用范围，比如：

> 在函数内声明的变量和函数都属于该函数的私有属性。函数外不能访问函数内的私有属性，函数内却可以访问函数外的属性和方法。

```html
<script>
    var a = "我是a的变量值，函数内可访问到";
    function add() {
        console.log(a);
        var b = "我是b的变量值，函数外不可以访问到";
    }
    add();
    console.log(b);
</script>
```

[案例源码](./demo/demo01.html)

![](./images/01.png)

函数就好比是一个圆圈，圆圈内定义的变量和方法，只能在圆圈内部使用，圆圈内部的范围就被称为“函数作用域”，圆圈之外属于“全局作用域”。

## 全局作用域

函数外声明的变量，都被定义在全局作用域中。

使用 `var` 声明的全局变量和属性实际上都相当于 `window` 对象的属性，比如:

```html
<script>
    var name = "lily";
    document.write(window.name);

    function add() {
        console.log("通过window.add()也可以执行这个方法");
    }
</script>
```

[案例源码](./demo/demo01.html)

![](./images/01.png)
