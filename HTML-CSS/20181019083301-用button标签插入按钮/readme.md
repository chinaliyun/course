# 用 button 标签插入按钮

除了修改`<input>`标签的`type`属性值可以生成三种按钮之外，HTML 另外提供了专门的按钮标签`<button>`.

`<button>`也有一个`type`属性，对应普通按钮、提交按钮和重置按钮

| 属性值   | 作用                                             |
| -------- | ------------------------------------------------ |
| `submit` | 默认值，提交按钮，点击后会提交表单               |
| `button` | 普通的纯按钮                                     |
| `reset`  | 重置按钮，点击后会清空用户在表单中的所有输入信息 |

> 和`<input>`生成的按钮不同，`<button>`标签是双标签，可以在两个标签之间插入文字，显示到页面的按钮中。

```html
<form>
    <div><button type="submit">提交按钮</button></div>
    <div><button type="button">纯按钮</button></div>
    <div><button type="reset">重置按钮</button></div>
</form>
```

[案例源码](./demo/demo01.html)

![](./images/01.png)
