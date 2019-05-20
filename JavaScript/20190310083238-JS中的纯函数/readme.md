# JS 中的纯函数

纯函数的基本三要素：

- 不依赖外部的变量或属性
- 运行时不会改变任何函数外部的变量或属性
- 传入相同的值时，始终输出/返回同样的值

案例 1：

```js
// 这不是一个纯函数，因为他依赖了外部的变量`sum`
var sum = 0;
function add(a) {
return a + sum;
}
add(10);
```

案例 2：

```js
// 这也不是一个纯函数，因为他在运行过程中修改了外部变量`sum`的值
var sum = 1;
function add(a) {
sum = 2;
}
add(10);
```

案例 3：

```js
// 这也不是一个纯函数，因为他相同参数调用时，每次的返回值都不一样
// Math.random() 返回一个随机数，每次的值都是不同的
function add(a) {
return a * Math.random();
}
add(10);
```
