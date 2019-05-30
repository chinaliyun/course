# 委托事件

如果我想给`ul`中的每一个`li`元素都添加一个事件，可以这么写：

```html
<ul>
    <li>apple</li>
    <li>orange</li>
    <li>banana</li>
</ul>
<script>
    var lis = document.querySelectorAll("li");
    var len = lis.length;
    for (var i = 0; i < len; i++) {
        var li = lis[i];
        li.addEventListener("click", function(event) {
            console.log(event.target.textContent);
        });
    }
</script>
```

下面给页面中添加一个按钮，按钮点击后，给`ul`的结尾新增一个`li`元素，内容是`pear`:

```html
<ul>
    <li>apple</li>
    <li>orange</li>
    <li>banana</li>
</ul>
<button type="button">添加水果</button>
<script>
    var lis = document.querySelectorAll("li");
    var len = lis.length;
    for (var i = 0; i < len; i++) {
        var li = lis[i];
        li.addEventListener("click", function(event) {
            console.log(event.target.textContent);
        });
    }

    var btn = document.querySelector("button");
    // 点击按钮后，新增一个li标签，内容是pear
    btn.addEventListener("click", function() {
        var li = document.querySelector("li");
        var ele = li.cloneNode(true);
        ele.textContent = "pear";
        li.parentNode.appendChild(ele);
    });
</script>
```

点击按钮之后，发现了一个问题：新增的`li`元素上是没有点击事件的，如果再单独给这个`li`元素新增一个点击事件，无疑是不可取的，这个时候，就可以巧妙地用委托事件来让新增的`li`元素，自动添加点击事件：

```html
<ul>
    <li>apple</li>
    <li>orange</li>
    <li>banana</li>
</ul>
<button type="button">添加水果</button>
<script>
    var ul = document.querySelector("ul");
    ul.addEventListener("click", function(event) {
        if ((event.target.nodeName = "LI")) {
            console.log(event.target.textContent);
        }
    });

    var btn = document.querySelector("button");
    btn.addEventListener("click", function() {
        var li = document.querySelector("li");
        var ele = li.cloneNode(true);
        ele.textContent = "pear";
        li.parentNode.appendChild(ele);
    });
</script>
```

在这次的案例中，我们把点击事件委托给了`ul`元素，通过`event.target`来获取用户真实操作的元素，再通过元素的`nodeName`值来判断该元素是不是`li`元素，如果是，就弹出该元素的内容。

从最终结果来说，这种写法和使用`for`循环的结果是相同的，但是`for`循环添加的事件，不支持新增的`li`元素，而委托事件中，即便是新增的`li`元素，点击事件依然有效。

为了更好的实现这种委托事件，我们可以把这种方式封装成一个函数，可以作为简单的参考：

> 这里的委托函数仅做参考

```html
<ul>
    <li>apple</li>
    <li>orange</li>
    <li>banana</li>
</ul>
<ul>
    <li>11</li>
    <li>22</li>
</ul>
<button type="button">添加水果</button>
<script>
    var btn = document.querySelector("button");
    btn.addEventListener("click", function() {
        var li = document.querySelector("li");
        var ele = li.cloneNode(true);
        ele.textContent = "pear";
        li.parentNode.appendChild(ele);
    });
    weituo("click", "ul", "li", function(e) {
        console.log(e.target);
    });
    // 封装成一个委托函数：
    function weituo(type, parentSelector, childSelector, fn) {
        document.body.addEventListener(type, function(event) {
            var parentEles = document.querySelectorAll(parentSelector);
            var childEles = document.querySelectorAll(childSelector);
            for (var m = 0; m < parentEles.length; m++) {
                if (
                    Array.prototype.includes.call(childEles, event.target) &&
                    parentEles[m].contains(event.target)
                ) {
                    fn(event);
                    break;
                }
            }
        });
    }
</script>
```

> 有兴趣的可以考虑一下，为什么要把`body`作为委托对象，而不是遍历页面中所有的`ul`，把`ul`作为委托对象。这是因为如果使用遍历把`ul`作为委托对象，所有的事件，只能针对于页面中已存在的`ul`元素生效，对于新增加的`ul`元素是无效的。
