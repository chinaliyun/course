## 设置文字的左右对齐方式

`text-align`属性用来设置文字水平方向的对齐方式

| 属性值    | 作用           |
| --------- | -------------- |
| `left`    | 默认值，左对齐 |
| `right`   | 右对齐         |
| `center`  | 居中对齐       |
| `justify` | 两端对齐       |

```html
<style>
    .p1 {
        text-align: left;
    }
    .p2 {
        text-align: right;
    }
    .p3 {
        text-align: center;
    }
    .p4 {
        text-align: justify;
    }
</style>
<div class="p1">we are family.</div>
<div class="p2">we are family.</div>
<div class="p3">we are family.</div>
<div class="p4">we are family.</div>
```

[案例源码](./demo/demo01.html)

![](./images/01.png)
