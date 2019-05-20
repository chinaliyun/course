# 函数的参数

调用函数的时候，可以向函数中传入某种值，这些值被称为**参数**，

- 调用的时候可以同时传入多个参数，这些参数需要使用`,`隔开;
- 传入的参数可以在函数中按照传入的先后顺序获取到
- 声明函数时，小括号内的参数称作是`形参`，形参可看做是一个函数内的变量，只能在函数内使用
- 调用函数时，小括号内的参数称作是`实参`，实参用来给形参赋值

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

## 参数的类型

```html
<script>
function add(a) {
console.log("字符串类型的参数a:" + a);
}
add("字符串类型");

function foo(a) {
console.log("数值类型的参数a:" + a);
}
foo(10);

function bar(a) {
console.log("布尔类型的参数a:" + a);
}
bar(true);
</script>
```

[案例代码](./demo/demo03.html)

![](./images/03.png)

## 函数本身作为参数

函数作为数据类型的一种，本身也可以作为参数，也可以在调用函数的时候赋值给函数的形参。形参可以像普通函数那样调动函数。

```html
<script>
function add(a) {
console.log(a);
a();
}
function foo() {
console.log("hello world");
}
add(foo);
</script>
```

上面的代码中，函数`foo`被当做参数，赋值给了`add`函数中的形参`a`。因此可以在函数`add`中通过`a()`执行函数`foo`的代码块

[案例代码](./demo/demo04.html)

![](./images/04.png)

再看一个案例

```html
<script>
function add(a) {
var res = a();
console.log(res);
}
function foo() {
return 100;
}
add(foo);
</script>
```
