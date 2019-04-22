# webAPI 中的 BOM 和 DOM

<!-- 吃牛排使用什么工具 -->

API 的意思是： `application programing interface`(应用程序接口)。意思是应用程序给我们提供了一些内置的工具，让我们可以通过这些工具去操作应用程序的内容。

浏览器给我们提供的工具叫做[“WebAPI”](https://developer.mozilla.org/zh-CN/docs/Web/API)。这里的“工具”值得是浏览器提供给我们的函数或者属性。

WebAPI 中工具，最常用的是 BOM 和 DOM 两大类。

BOM 指的是：`browser object model`(浏览器对象模型)。这里面是一套可以用来操作浏览器本身的工具。比如获取浏览器的宽度、高度、位置等等。

DOM 指的是：`document object model`(文档对象模型)。这里面是一套可以用来操作页面内容的工具。比如往页面中插入元素、删除元素、修改元素、修改样式等等。

事实上，前面已经见过了很多 BOM 中的函数，比如`alert()、confirm()`等，这些函数可以让浏览器显示一个不同类型的弹窗。`console.log()`函数则是在浏览器的开发者工具中

DOM 相关的函数也用过了，比如`document.write()`用来在页面中显示一些文字内容。

BOM 和 DOM 中包含的函数还有很多，后面会将常用的函数一一介绍。
