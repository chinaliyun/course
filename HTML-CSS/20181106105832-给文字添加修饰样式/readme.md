# 给文字添加修饰样式

`text-decoration`属性用于给文字添加修饰样式，可以用来代替`<b>`、<strong>`、<u>`、<ins>`、<s>`、<del>`标签，实现标签和样式分离。

| 属性值         | 作用                     |
| -------------- | ------------------------ |
| `none`         | 默认值，不要任何修饰样式 |
| `overline`     | 上划线                   |
| `line-through` | 删除线                   |
| `underline`    | 下划线                   |

```html
<style>
    .p1 {
        text-decoration: overline;
    }
    .p2 {
        text-decoration: line-through;
    }
    .p3 {
        text-decoration: underline;
    }
</style>
<div class="p1">we are family.</div>
<div class="p2">we are family.</div>
<div class="p3">we are family.</div>
```

[案例源码](./demo/demo01.html)

![](./images/01.png)
