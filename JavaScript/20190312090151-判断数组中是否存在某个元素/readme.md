# 判断数组中是否存在某个元素

在实际工作中，经常需要判断数组中是否存在某个元素，前面讲过的`for`循环可以用来实现这个功能：

```js
var arr = ["苹果", "香蕉", "西瓜", "橘子", "西瓜"];
var item = "葡萄";

var result = false;
for (var m = 0; m < arr.length; m++) {
    if (arr[m] == item) {
        result = true;
        break;
    }
}
if (result) {
    console.log("数组中包含指定元素");
} else {
    console.log("数组中不包指定元素");
}
```

为了便于重复使用这面这段代码，我们把以上代码使用函数封装一下

```html
<script>
    var arr = ["苹果", "香蕉", "西瓜", "橘子", "西瓜"];
    console.log("数组中的元素：", arr);

    function hasItem(item) {
        var result = false;
        for (var m = 0; m < arr.length; m++) {
            if (arr[m] == item) {
                result = true;
                break;
            }
        }
        if (result) {
            console.log("数组中包含" + item);
        } else {
            console.log("数组中不包含" + item);
        }
        return result;
    }
    console.log(hasItem("西瓜"));
    console.log(hasItem("葡萄"));
</script>
```

[案例代码](./demo/demo01.html)

![](./images/01.png)

上面是我们自己封装的“检查数组中是否包含某个元素”的函数，JS 里面其实内置了几个同样功能的方法。

## includes 方法

`array.inclues(item)`方法，可判断数组`array`中是否包含`item`元素

该方法返回一个布尔值，`true` 表示包含 `item` 元素，`false` 表示不包含元素

```html
<script>
    var arr = ["苹果", "香蕉", "西瓜", "橘子", "西瓜"];
    console.log("数组中的元素：", arr);

    console.log("数组是否包含西瓜：", arr.includes("西瓜"));
    console.log("数组是否包含葡萄：", arr.includes("葡萄"));
</script>
```

[案例代码](./demo/demo02.html)

![](./images/02.png)

## indexOf 和 lastIndexOf 方法

`array.indexOf(item)`和`array.lastIndexOf(item)`，可以在`array`中查找是否包含`item`元素，如果有，则返回元素所在的下标，如果没有则返回`-1`

两者不同的是：`indexOf`会从数组的左边往右查找，`lastIndexOf`会从数组的右边往左查找。只要找到一个符合`item`的元素，就会停止，并返回该元素的下标

```html
<script>
    var arr = ["苹果", "香蕉", "西瓜", "橘子", "西瓜"];

    console.log("arr的原有内容：", arr);
    console.log('arr.indexOf("西瓜"): ', arr.indexOf("西瓜"));
    console.log('arr.lastIndexOf("西瓜"): ', arr.lastIndexOf("西瓜"));
    console.log('arr.indexOf("葡萄"): ', arr.indexOf("葡萄"));
    console.log('arr.lastIndexOf("葡萄"): ', arr.lastIndexOf("葡萄"));
</script>
```

[案例代码](./demo/demo03.html)

![](./images/03.png)
