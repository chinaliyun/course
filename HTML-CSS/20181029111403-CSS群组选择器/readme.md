# CSS 群组选择器

当不同元素的样式相同时，CSS 中允许使用逗号`,`分割多个选择器来实现。

```html
<style>
    /* 选择类名包含red,或者title属性值为name的元素 */
    .red,
    [title="name"] {
        color: red;
    }
</style>
<div>we are family;</div>
<div class="red">we are family;</div>
<p title="name">we are family;</p>
```

[案例源码](./demo/demo01.html)

![](./images/01.png)
