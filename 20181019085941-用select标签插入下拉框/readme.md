# 用 select 标签插入下拉框

下拉框需要`<select>`和`<option>`标签配合使用

> `option`标签上的`value`属性用来定义每个选项的值，这个值会和`select`的`name`属性值一起提交。`option`标签中的文字可以显示在浏览器中。

```html
<form>
    <p>出生年份：</p>
    <select name="year">
        <option value="2000">2000年</option>
        <option value="2001">2001年</option>
        <option value="2002">2002年</option>
        <option value="2003">2003年</option>
        <option value="2004">2004年</option>
    </select>
</form>
```

[案例源码](./demo/demo01.html)

![](./images/01.png)
