# 筛选符合条件的所有元素

`arr.filter(fn(currentValue, index, arr))`用于筛选所有符合条件的元素

返回所有符合条件的元素组成的新数组，如果没有符合条件的元素，则返回空数组

`fn(currentValue, index, arr)`中

- `currentValue` 表示循环中当前的元素值
- `index` 表示循环中当前元素的下标
- `arr` 表示原有数组

```html
<script>
var arr = [1, 3, 5, 7, 9];
console.log("数组中的元素：", arr);
var result = arr.filter(function(currentValue, index, arr) {
console.log(
"currentValue=" + currentValue + ",index=" + index + ",arr=",
arr,
);
return currentValue > 4;
});
console.log("返回值为：", result);
</script>
```

[案例代码](./demo/demo01.html)

![](./images/01.png)

再看一个返回空数组的案例：

```html
<script>
var arr = [1, 3, 5, 7, 9];
console.log("数组中的元素：", arr);
var result = arr.filter(function(currentValue, index, arr) {
console.log(
"currentValue=" + currentValue + ",index=" + index + ",arr=",
arr,
);
return currentValue > 10;
});
console.log("返回值为：", result);
</script>
```

[案例代码](./demo/demo02.html)

![](./images/02.png)
