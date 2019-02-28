# JS 中的流程控制语句

流程控制语句也是所有编程语言中必备的一环。主要通过不同的条件执行不同的结果

## if...语句

格式：

```js
if (表达式) {
    语句1;
}
```

`if`后面的括号内的表达式，必须返回一个布尔值，当表达式的值为 `true` 的时候，才会执行“语句 1”。

```js
var a = 2;
if (a > 1) {
    console.log("a的值大于1");
}
```

## if...else...语句

如果需要设置表达式为 `false` 时的执行语句，可以使用`if...else...`语句

```js
var a = 2;
if (a > 3) {
    console.log("a的值大于1");
} else {
    console.log("a的值小于等于1");
}
```

## if...else if...语句

如果想根据多个表达式判断执行哪种语句，`if...else...`可以进行多层嵌套，先看下面的例子：

```js
/*
    0~3：幼年，
    4~6：童年，
    7~17：少年，
    18~40：青年，
    41~48：壮年，
    48~65：中年，
    66以后：老年
*/
var age = 30;

if (age >= 0 && age <= 3) {
    console.log("幼年");
}
if (age > 3 && age <= 6) {
    console.log("童年");
}
if (age > 6 && age <= 17) {
    console.log("少年");
}
if (age > 17 && age <= 40) {
    console.log("青年");
}
if (age > 40 && age <= 48) {
    console.log("壮年");
}
if (age > 48 && age <= 65) {
    console.log("中年");
}
if (age > 65) {
    console.log("老年");
}
```

[案例源码](./demo/demo01.html)

这个例子中，写了太多的`if`语句，可以通过另一种方式实现：

```js
var age = 30;
if (age <= 3) {
    console.log("幼年");
} else if (age <= 6) {
    console.log("童年");
} else if (age <= 17) {
    console.log("少年");
} else if (age <= 40) {
    console.log("青年");
} else if (age <= 48) {
    console.log("壮年");
} else if (age <= 65) {
    console.log("中年");
} else if (age > 65) {
    console.log("老年");
}
```

[案例源码](./demo/demo02.html)
