## window 对象

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

## navigator 对象

| 属性                  | 作用                                   |
| --------------------- | -------------------------------------- |
| navigator.appCodeName | 获取浏览器的代码名                     |
| navigator.appName     | 获取浏览器的名称                       |
| navigator.appVersion  | 获取浏览器的平台和版本信息             |
| navigator.platform    | 获取浏览器的操作系统平台               |
| navigator.userAgent   | 获取浏览器给服务器发送信息时的头部信息 |

## location 对象

| 属性/方法               | 作用                                  |
| ----------------------- | ------------------------------------- |
| `location.href`         | 设置或获取 当前窗口完整的 url         |
| `location.protocol`     | 设置或获取 url 中的协议               |
| `location.host`         | 设置或获取 url 中的主机名(域名)和端口 |
| `location.hostname`     | 设置或获取 url 中的主机名(域名)       |
| `location.pathname`     | 设置或获取 url 中的文件路径           |
| `location.port`         | 设置或获取 url 中的端口号             |
| `location.search`       | 设置或获取 url 中的查询部分           |
| `location.hash`         | 设置或获取 url 的锚点部分             |
| `location.reload()`     | 重新加载本页面                        |
| `location.assign(url)`  | 载入一个新页面                        |
| `location.replace(url)` | 用新页面替换本页面                    |

## history 对象

| 属性/方法           | 作用                                       |
| ------------------- | ------------------------------------------ |
| `history.length`    | 获取当前窗口历史记录的个数                 |
| `history.back()`    | 返回上一页                                 |
| `history.forward()` | 返回下一页                                 |
| `history.go(x)`     | 以当前页为相对位置， 返回第 x 历史记录页面 |

## document 对象

| 属性                                         | 作用                                                        |
| -------------------------------------------- | ----------------------------------------------------------- |
| `document.title`                             | 获取当前页面的标题                                          |
| `document.documentURI`                       | 获取当前页面的 URI 地址                                     |
| `document.contenType`                        | 获取当前页面的`content-type`属性值                          |
| `document.documentElement`                   | 获取 `html` 元素                                            |
| `document.head`                              | 获取 `head` 元素                                            |
| `document.body`                              | 获取 `body` 元素                                            |
| `document.scripts`                           | 返回所有的`scripts`元素                                     |
| `document.links`                             | 返回所有的超链接元素                                        |
| `document.images`                            | 返回所有的`img`元素                                         |
| `document.forms`                             | 返回所有的`form`元素                                        |
| `document.getElementById(id)`                | 通过`id`属性值查找元素，返回该元素                          |
| `document.getElementsByName(name)`           | 通过元素的 name 属性值查找元素，返回**所有**符合条件的元素  |
| `document.getElementsByTagName(tagName)`     | 通过元素的标签名查找元素，返回**所有**符合条件的元素        |
| `document.getElementsByClassName(className)` | 通过元素的 class 属性值查找元素，返回**所有**符合条件的元素 |
| `document.querySelector(cssSelector)`        | 通过 css 选择器查找元素，返回**第 1 个**符合条件的元素      |
| `document.querySelectorAll(cssSelector)`     | 通过 css 选择器查找元素，返回**所有**符合条件的元素         |

## 查找节点

| 属性/方法              | 作用                                               |
| ---------------------- | -------------------------------------------------- |
| `node.childNodes`      | 获取当前节点包含的所有节点，返回一个 NodeList 对象 |
| `node.parentNode`      | 获取当前节点的父节点                               |
| `node.firstChild`      | 获取当前节点包含的第一个子节点 ，没有返回`null`    |
| `node.lastChild`       | 获取当前节点包含的最后一个子节点，没有返回`null`   |
| `node.previousSibling` | 获取当前节点的前一个兄弟节点                       |
| `node.nextSibling`     | 获取当前节点的后一个兄弟节点                       |

## 节点属性

| 属性               | 作用                           |
| ------------------ | ------------------------------ |
| `node.nodeType`    | 获取节点的类型                 |
| `node.nodeName`    | 获取普通节点或者属性节点的名称 |
| `node.textContent` | 获取节点的文本内容             |

## 操作节点

| 方法                                         | 作用                                                           |
| -------------------------------------------- | -------------------------------------------------------------- |
| `document.createElement(tagName)`            | 创建一个元素节点                                               |
| `document.createTextNode(data)`              | 创建一个文本节点                                               |
| `document.createComment(data)`               | 创建一个注释节点                                               |
| `document.createDocumentFragment()`          | 创建一个空的文档片段                                           |
| `parentNode.appendChild(newNode)`            | 在父节点中往后插入一个新节点                                   |
| `parentNode.insertBefore(newNode, nextNode)` | 在父节点中插入一个新节点，并让新节点插入到指定节点的前一个位置 |
| `node.cloneNode([deep])`                     | 复制节点 node，返回复制的节点                                  |
| `parentNode.replaceChild(newNode, oldNode)`  | 用新节点替换旧节点                                             |
| `parentNode.remove(childNode)`               | 删除父节点中指定的子节点                                       |

## 判断节点

| 属性/方法                   | 作用                               |
| --------------------------- | ---------------------------------- |
| `node.isConnected`          | 判断元素是否已经被渲染在当前页面中 |
| `node.hasChildNodes()`      | 判断节点是否有子节点               |
| `parentNode.contains(node)` | 判断节点是否是另一个节点的后代     |
| `node1.isEqualNode(node2)`  | 判断两个节点是否相同               |

## 获取元素节点

| 属性/方法                               | 作用                                                                       |
| --------------------------------------- | -------------------------------------------------------------------------- |
| `element.getElementsByClassName(name)`  | 在元素的后代元素中根据**类名**查找元素，返回**所有**符合条件的元素         |
| `element.getElementsByTagName(name)`    | 在元素的后代元素中根据**标签名**查找元素，返回**所有**符合条件的元素       |
| `element.querySelector(cssSelector)`    | 在元素的后代元素中使用**css 选择器**查找元素，返回**第一个**符合条件的元素 |
| `element.querySelectorAll(cssSelector)` | 在元素的后代元素中使用**css 选择器**查找元素，返回**所有**符合条件的元素   |
| `element.children`                      | 获取元素的所有子元素                                                       |
| `element.firstElementChild`             | 获取元素的第一个子元素                                                     |
| `element.lastElementChild`              | 获取元素的最后一个子元素                                                   |
| `element.previousElementSibling`        | 获取元素的上一个兄弟元素                                                   |
| `element.nextElementSibling`            | 获取元素的下一个兄弟元素                                                   |
