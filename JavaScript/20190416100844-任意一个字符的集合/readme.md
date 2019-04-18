# 任意一个字符的集合

`[]`符号在正则表达式中，表示一个字符集合，用来判断目标是否包含`[]`中的任意字符

```html
<script>
    // 判断字符串中是否包含'a', 'b', 'c', 'd'四个之间的任意字符;
    var reg;
    reg = /[abcd]/;
    console.log(reg.test("welcome"));
    console.log(reg.test("lily"));
</script>
```

[案例源码](./demo/demo04.html)

![](./images/04.png)

如果想判断目标中是否包含任意一个数字，可以这么写：

```html
<script>
    var res;
    res = /[0-9]/g.test("welcome 10");
    console.log(res);
</script>
```

[案例源码](./demo/demo05.html)

![](./images/05.png)

结合前面的`{}`，如果想判断目标中是否包含至少 3 个数字，可以这么写：

```html
<script>
    var res;
    res = /[0-9]{3}/g.test("welcome 10");
    console.log('/[0-9]/g.test("welcome 10"): ', res);

    res = /[0-9]{3}/g.test("welcome 1017");
    console.log('/[0-9]/g.test("welcome 1017"): ', res);
</script>
```

[案例源码](./demo/demo06.html)

![](./images/06.png)

如果想判断目标中是否包含任意一个小写字母，可以这么写：

```html
<script>
    var res;
    res = /[a-z]/g.test("101");
    console.log(res);

    res = /[a-z]/g.test("welcome 1017");
    console.log(res);
</script>
```

[案例源码](./demo/demo07.html)

![](./images/07.png)

如果想判断目标中是否包含任意 1 个大写字母，可以这么写：

```html
<script>
    var res;
    res = /[A-Z]/g.test("welcome");
    console.log(res);

    res = /[A-Z]/g.test("welcome to China");
    console.log(res);
</script>
```

[案例源码](./demo/demo08.html)

![](./images/08.png)

如果想判断目标中是否包含任意 1 个大写字母或者小写字母或者数字，可这么写：

```html
<script>
    var res;
    res = /[a-zA-Z0-9]/g.test(".-|[]");
    console.log(res);

    res = /[a-zA-Z0-9]/g.test("China v5");
    console.log(res);
</script>
```

[案例源码](./demo/demo09.html)

![](./images/09.png)

如果想判断目标中，是否包含'b','0','-'中的任意一个字符，可以这么写：

```html
<script>
    var res;
    res = /[b0-]/g.test(".|[]");
    console.log(res);

    res = /[b0-]/g.test("China v50");
    console.log(res);
</script>
```

[案例源码](./demo/demo10.html)

![](./images/10.png)
