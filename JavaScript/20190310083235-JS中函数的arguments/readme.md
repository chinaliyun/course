# 函数的 arguments 属性

通过`arguments`可以获取函数调用时传入的所有参数。

```html
<script>
function sum() {
console.log(arguments[0], arguments[1], arguments[2]);
}
sum(1, 2, 3);
</script>
```

[案例代码](./demo/demo01.html)

![](./images/01.png)
