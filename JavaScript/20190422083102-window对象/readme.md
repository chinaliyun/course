# window 对象

前面说 BOM 中包含了一大批用来操作浏览器本身的函数，比如`alert() confirm()`等等。

这些函数实际上都是`window`对象下的方法。而`window`对象中除了前面讲过的`alert() confirm() console.log()`这些方法之外，还有很多方法。下面是最常用的一些方法：

| 方法或属性                       | 作用                                                             |
| -------------------------------- | ---------------------------------------------------------------- |
| `window.name`                    | 设置或者获取当前窗口的名称                                       |
| `window.open()`                  | 打开一个新窗口 ，返回一个该窗口的引用对象 `windowRefrenceObject` |
| `window.closed`                  | 判断当前窗口是否已被关闭，`true`表示已被关闭                     |
| `window.close()`                 | 关闭当前窗口                                                     |
| `window.outerWidth`              | 获取浏览器的宽度                                                 |
| `window.outerHeight`             | 获取浏览器的高度                                                 |
| `window.innerWidth`              | 获取浏览器可视区域的宽度                                         |
| `window.innerHeight`             | 获取浏览器可视区域的高度                                         |
| `window.setInterval(fn,timeout)` | 设置一个永久定时器，指定毫秒后自动执行某个函数                   |
| `window.setTimeout(fn,timeout)`  | 设置一个一次性定时器，指定毫秒后自动执行某个函数                 |
| `window.clearInterval(name)`     | 清除一个永久定时器                                               |
| `window.clearTimeout(name)`      | 清除一个一次性定时器                                             |
| `window.scrollX`                 | 获取水平滚动条的位置                                             |
| `window.scrollY`                 | 获取垂直滚动条的位置                                             |
| `window.scrollTo(x,y)`           | 让滚动条垂直滚动到 y 位置，水平滚动到 x 位置                     |
| `window.scrollBy(x,y)`           | 让滚动条垂直方移动 x 像素，水平方向移动 y 像素                   |
| `window.screenX/screenLeft`      | 获取浏览器窗口到屏幕最左边的距离                                 |
| `window.screenY/screenTop`       | 获取浏览器窗口相屏幕最顶部的距离                                 |
