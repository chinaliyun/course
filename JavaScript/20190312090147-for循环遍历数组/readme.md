# 循环数组内容

之前讲过 for 循环的使用，for 循环最常见的是用来循环输出数组的元素

```js
var arr = ["张三", "李四", "王五"];

// 正序输出：
console.log("正序输出：");
for (var x = 0; x < arr.length; x++) {
    console.log(x + ": " + arr[x]);
}

// 倒序输出
console.log("倒序输出");
for (var y = arr.length - 1; y >= 0; y--) {
    console.log(y + ": " + arr[y]);
}
```

[案例代码](./demo/demo01.html)

![](./images/01.png)

## 循环输出多维数组

```html
<script>
    var arr = [["张三", "李四", "王五"], ["赵六", "曾七", "钱八"]];
    for (var m = 0; m < arr.length; m++) {
        for (var n = 0; n < arr[m].length; n++) {
            console.log(
                "数组arr中第" +
                    m +
                    "个元素中的第" +
                    n +
                    "个元素内容是：" +
                    arr[m][n],
            );
        }
    }
</script>
```

[案例代码](./demo/demo02.html)

![](./images/02.png)
