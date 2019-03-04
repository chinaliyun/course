# JS 中数据类型的转换

在 JS 中可以强制转换目标的数据类型(显示转换)

## 把目标转成字符串

```html
<script>
    console.log("String(11):          " + String(11));
    console.log("String(true):        " + String(true));
    console.log("String(false):       " + String(false));
    console.log("String(undefined):   " + String(undefined));
    console.log("String(null):        " + String(null));
    console.log("String([]):          " + String([]));
    console.log("String({}):          " + String({}));
</script>
```

[案例源码](./demo/demo01.html)

![](./images/01.png)

## 把目标转成数字

JS 会把目标先转成字符串，再尝试转为数字

```html
<script>
    console.log("Number('11'):        " + Number("11"));
    console.log("Number('abc'):        " + Number("abc"));
    console.log("Number(''):        " + Number(""));
    console.log("Number(true):        " + Number(true));
    console.log("Number(false):       " + Number(false));
    console.log("Number(undefined):   " + Number(undefined));
    console.log("Number(null):        " + Number(null));
    console.log("Number([]):          " + Number([]));
    console.log("Number({}):          " + Number({}));
</script>
```

[案例源码](./demo/demo02.html)

![](./images/02.png)

## 把目标转成布尔值

```html
<script>
    console.log("Boolean('11'):        " + Boolean("11"));
    console.log("Boolean('abc'):        " + Boolean("abc"));
    console.log("Boolean(''):        " + Boolean(""));
    console.log("Boolean(NaN):        " + Boolean(NaN));
    console.log("Boolean(0):           " + Boolean(0));
    console.log("Boolean(1):           " + Boolean(1));
    console.log("Boolean(undefined):   " + Boolean(undefined));
    console.log("Boolean(null):        " + Boolean(null));
    console.log("Boolean([]):          " + Boolean([]));
    console.log("Boolean({}):          " + Boolean({}));
</script>
```

> 一共有 5 中类型转成布尔值后是 `false`: `0 '' undefined null NaN`， 其他类型转换成布尔值都是`true`

[案例源码](./demo/demo03.html)

![](./images/03.png)
