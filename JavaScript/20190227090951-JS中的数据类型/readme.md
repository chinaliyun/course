# JS 中的数据类型

JS 中一共有 6 种基础数据类型和 3 种引用数据类型。

基础数据类型： 字符串(string)、数字(number)、布尔值(boolean)、未定义(undefined)、空值(null)、Symbol

引用类型： 数组(array)、对象(object)、函数(function)

## 字符串

JS 中的字符串必须使用`单引号`或者`双引号`包括起来，字符串的长度是没有限制的

```js
var name1 = "张三";
var name2 = "尼古拉斯-赵四";
```

如果字符串中包含引号，可以在引号前面添加`\`符号

```js
var name = "江穗兵是个'小女人', 他才\"16岁\"";
```

## 数值

JS 中的数字可以是整数，也可以是小数,由于一些原因，JS 中的数字必须在(-(2<sup>63</sup>-1))~(+(2<sup>63</sup>-1))之间。

```js
var age = 12;
var age2 = 12.2;
```

## 布尔值

布尔值只有两种类型，分别是`true`和`false`，对应着**正确的**和**错误的**两种状态。

## 未定义和空值

当变量被声明却没有赋值的时候，变量的值默认是`undefined`， 变量赋值之后，可以通过`null`清除变量已有的值。

```js
var name;
console.log(name); // undefined
name = null;
console.log(name); // null
```
