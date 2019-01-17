# 设置文字的粗细

`font-weight`属性用来设置文字的粗细程度。

| 属性值    | 作用                                |
| --------- | ----------------------------------- |
| `normal`  | 默认值，正常粗细                    |
| `lighter` | 细体                                |
| `bold`    | 加粗                                |
| `bolder`  | 比加粗更粗的样式                    |
| `100~900` | `normal`相当于 400,`bold`相当于 700 |

```html
<style>
    .p1 {
        font-weight: lighter;
    }
    .p2 {
        font-weight: normal;
    }
    .p3 {
        font-weight: bolder;
    }
</style>
<div class="p1">we are family.</div>
<div class="p2">we are family.</div>
<div class="p3">we are family.</div>
```

[案例源码](./demo/demo01.html)

![](./images/01.png)
