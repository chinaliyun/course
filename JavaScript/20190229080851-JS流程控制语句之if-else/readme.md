# JS 中的流程控制语句

流程控制语句也是所有编程语言中必备的一环。主要通过不同的条件影响最终执行的结果

## if...else...语句

格式：

```js
if (表达式) {
    执行语句;
}
```

`if`后面的括号内的表达式，必须返回一个布尔值的值

```js
var zhangsan = {
    sex: "男",
};
if (zhangsan.sex == "男") {
    console.log("zhangsan 是个男生");
}

console.log("-----------");
var lisi = {
    sex: "男",
};
if (lisi.sex == "男") {
    console.log("lisi 是个男生");
} else {
    console.log("lisi 是个女生");
}

console.log("-----------");
var wangwu = {
    sex: "男",
};
if (wangwu.sex == "男") {
    console.log("wangwu 是个男生");
} else if (wangwu.sex == "女") {
    console.log("wangwu 是个女生");
} else {
    console.log("wangwu 是个人妖");
}
```

[案例代码](./demo/demo01.html)

![](./images/01.png)
