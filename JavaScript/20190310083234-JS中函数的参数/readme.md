# 函数的参数

调用函数的时候，可以向函数中传入某种值，这些值被称为**参数**，

-   调用的时候可以同时传入多个参数，这些参数需要使用`,`隔开;
-   传入的参数可以在函数中按照传入的先后顺序获取到
-   声明函数时，小括号内的参数称作是`形参`，
-   调用函数时，小括号内的参数称作是`实参`

```html
<script>
    function sum(x, y) {
        console.log(x, y);
    }
    sum(1, 2);
    sum(10, 20);
</script>
```

[案例代码](./demo/demo01.html)

![](./images/01.png)

因此，我们可以让函数根据传入参数的不同。输出不同的结果

```html
<script>
    function sum(x, y) {
        console.log("x+y=" + (x + y), " y-x=" + (y - x));
    }
    sum(1, 2);
    sum(10, 20);
</script>
```

[案例代码](./demo/demo02.html)

![](./images/02.png)
