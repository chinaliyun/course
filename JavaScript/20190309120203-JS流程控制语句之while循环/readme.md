# while 循环

`while`循环也是根据指定条件的状态来判断是否执行花括号中的代码块；且代码块执行完，会重新判断括号内的条件，如果条件符合，将会再次执行大括号中的语句。

```js
var x = 5;

while (x > 0) {
console.log(x);
x--;
}
```

[案例代码](./demo/demo01.html)

![](./images/01.png)

> 如果代码块的执行过程中，条件语句中的变量值没有变化，会导致进入**死循环**，浏览器可能会因此卡死

## 使用`while`循环输出数组中的内容

```js
var arr = ["张三", "李四", "王五"];

// 正序输出
console.log("正序输出: ");
var x = 0;
while (x <= 2) {
console.log(x + ": " + arr[x]);
x++;
}

// 倒序输出
console.log("倒序输出: ");
var y = 2;
while (y >= 0) {
console.log(y + ": " + arr[y]);
y--;
}
```

[案例代码](./demo/demo02.html)

![](./images/02.png)

## 使用 break 打断循环

在`while`循环中，也可以使用关键字`break`跳出循环：

```html
<script>
var x = 5;
while (x > 0) {
if (x == 2) {
break;
}
console.log(x);
x--;
}
</script>
```

[案例代码](./demo/demo03.html)

![](./images/03.png)
