# 一个元素添加多个监听事件

还可给一个元素添加多种监听事件，比如同时给一个文本输入框添加一个获取焦点事件和一个失去焦点事件：

```html
<input type="text" />
<p></p>

<script>
    var input = document.querySelector("input");
    var p = document.querySelector("p");

    input.onfocus = function() {
        p.textContent = "焦点进入文本输入框了";
    };

    input.onblur = function() {
        p.textContent = "焦点离开文本输入框了";
    };
</script>
```

[案例源码](./demo/demo01.html)
