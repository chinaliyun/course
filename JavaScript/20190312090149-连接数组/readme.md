## 连接数组

`array1.concat(array2, array3, ...)`方法，可以把多个数组连接起来，并返回一个新的数组。拼接的过程中不会影响原有数组。

```html
<script>
    var arr1 = ["张三", "李四", "王五"];
    var arr2 = ["赵六", "曾七"];
    var arr3 = ["钱八", "孙九"];
    var arr = arr1.concat(arr2);
    console.log("arr1、arr2、arr3中的元素被组合起来，赋值给了变量arr：", arr);
    console.log("arr1的值没有任何变化：", arr1);
    console.log("arr2的值没有任何变化：", arr2);
    console.log("arr3的值没有任何变化：", arr3);
</script>
```

[案例代码](./demo/demo01.html)

![](./images/01.png)
