## Array

| 属性/方法                                                             | 作用                                                           |
| --------------------------------------------------------------------- | -------------------------------------------------------------- |
| `arr.length`                                                          | 获取数组中元素的个数                                           |
| `arr.push(item)`                                                      | 往数组结尾插入新元素，返回数组长度                             |
| `arr.unshift(item)`                                                   | 往数组开头插入新元素，返回数组长度                             |
| `arr.pop(item)`                                                       | 删除数组最后一个元素，返回删除的元素                           |
| `arr.shift(item)`                                                     | 删除数组第一个元素，返回删除的元素                             |
| `arr.splice(index,length,item1,item2)`                                | 在数组的指定位置删除指定数量元素，并添加新元素                 |
| `arr.concat(item1, item2)`                                            | 合并多个数组，返回合并后的数组                                 |
| `arr.map(fn(currentValue, currentIndex, arr) [, thisTarget])`         | 遍历数组，处理之后组成新的数组                                 |
| `arr.forEach(fn(currentValue, currentIndex, arr) [, thisTarget])`     | 遍历数组，没有返回值                                           |
| `arr.every(fn(currentValue, currentIndex, arr) [, thisTarget])`       | 判断数组中是否每个元素都符合条件                               |
| `arr.some(fn(currentValue, currentIndex, arr) [, thisTarget])`        | 判断数组中是否至少一个元素符合条件                             |
| `arr.includes(item)`                                                  | 判断数组中是否包含指定元素                                     |
| `arr.indexOf(item)`                                                   | 在数组中**从前向后**查找指定元素，返回第一个符合条件的元素下标 |
| `arr.lastIndexOf(item)`                                               | 在数组中**从后向前**查找指定元素，返回第一个符合条件的元素下标 |
| `arr.find(fn(currentValue, currentIndex, arr) [, thisTarget])`        | 返回第一个符合条件的元素                                       |
| `arr.findIndex(fn(currentValue, currentIndex, arr) [, thisTarget])`   | 返回第一个符合条件的元素的索引值(下标)                         |
| `arr.filter(fn(currentValue, currentIndex, arr) [, thisTarget])`      | 筛选出所有符合条件的元素，并返回它们组成的新数组               |
| `arr.sort(fn(currentValue, currentIndex, arr) [, thisTarget])`        | 对数组中的元素重新进行排序                                     |
| `arr.reverse()`                                                       | 翻转数组中的元素                                               |
| `arr.reduce(fn(currentValue, currentIndex, arr) [, thisTarget])`      | 对数组中的元素**从左到右**按照指定规则统计                     |
| `arr.reduceRight(fn(currentValue, currentIndex, arr) [, thisTarget])` | 对数组中的元素**从右到左**按照指定规则统计                     |
| `arr.join(str)`                                                       | 使用指定字符把数组中的元素拼接成字符串                         |
| `arr.slice(beginIndex[, endIndex])`                                   | 返回指定的开始位置到结束位置之间的元素，不包含结束位置的元素   |

## String

| 属性/方法                             | 作用                                                                                  |
| ------------------------------------- | ------------------------------------------------------------------------------------- |
| `str.length`                          | 返回字符串的长度                                                                      |
| `str.includes(target)`                | 判断字符串中是否包含指定字符                                                          |
| `str.charAt(index)`                   | 返回字符串中指定位置的字符                                                            |
| `str.charCodeAt(index)`               | 返回字符串中指定位置的字符的 unicode 码点(10 进制)                                    |
| `str.slice(beginIndex, endIndex)`     | 返回指定的开始位置到结束位置之间的字符，不包含结束位置的字符                          |
| `str.substr(beginIndex, length)`      | 从指定位置开始截取指定数量个字符，并返回这些字符                                      |
| `str.substring(beginIndex, endIndex)` | 返回指定的开始位置到结束位置之间的字符，不包含结束位置的字符，参数小于 0 的会先转成 0 |
| `str.indexOf(target)`                 | 在字符串中**从前向后**查找指定字符，返回匹配字符中第一个字符所在索引值，没有返回-1    |
| `str.lastIndexOf(target)`             | 在字符串中**从后向前**查找指定字符，返回匹配字符中第一个字符所在索引值，没有返回-1    |
| `str.match(target)`                   | 查找字符串中符合条件的字符                                                            |
| `str.toUpperCase()`                   | 把字符串中的小写字母转成大写字母                                                      |
| `str.toLowerCase()`                   | 把字符串中的大写字母转成小写字母                                                      |
| `str.trim()`                          | 去除字符串中前后的空格                                                                |
| `str.concat(str1, str2)`              | 拼接多个字符串                                                                        |
| `str.split(condation)`                | 使用指定字符分割字符串，返回分割后的字符组成的数组                                    |
| `str.replace(newStr, oldStr)`         | 在字符串中使用新字符替换指定的旧字符                                                  |

## Number

| 属性/方法              | 作用                                             |
| ---------------------- | ------------------------------------------------ |
| `num.toFixed(x)`       | 把数字转为字符串，可以指定保留的小数部分数字位数 |
| `num.toString(x)`      | 把数字转为字符串，并指定字符串的显示基数(进制)   |
| `num.toExponential(x)` | 把数字转为 10 进制计数法                         |
| `num.toPresion(x)`     | 把数字转为字符串，可以指定保留的整体数字位数     |

## Math 对象

| 属性/方法           | 作用                        |
| ------------------- | --------------------------- |
| `Math.random()`     | 获取一个 0-1 之间的随机小数 |
| `Math.PI`           | 获取圆周率                  |
| `Math.floor(n)`     | 对数字进行向下取整          |
| `Math.ceil(n)`      | 对数字进行向上取整          |
| `Math.round(n)`     | 对数字进行四舍五入          |
| `Math.max(a,b,c,d)` | 找出最大的数字              |
| `Math.min(a,b,c,d)` | 找出最小的数字              |

## Date 对象

| 属性/方法                | 作用                              |
| ------------------------ | --------------------------------- |
| `var date = new Date()`  | 获取当前日期/时间                 |
| `date.getFullYear()`     | 获取日期的年份                    |
| `date.getMonth()`        | 获取日期的月份，从 0 开始         |
| `date.getDate()`         | 获取日期的日期，从 1 开始         |
| `date.getHours()`        | 获取日期的小时数，从 0 开始       |
| `date.getMinutes()`      | 获取日期的分钟数，从 0 开始       |
| `date.getSeconds()`      | 获取日期的秒数，从 0 开始         |
| `date.getMilliseconds()` | 获取日期的毫秒数，从 0 开始       |
| `date.getDay()`          | 获取日期对应一周的时间，从 0 开始 |
| `date.getTime()`         | 获取日期的时间戳                  |
| `date.setFullYear()`     | 修改日期中的年份                  |
| `date.setMonth()`        | 修改日期中的月份                  |
| `date.setDate()`         | 修改日期中的日期                  |
| `date.setHours()`        | 修改日期中的小时数                |
| `date.setMinutes()`      | 修改日期中的分钟数                |
| `date.setSeconds()`      | 修改日期中的秒数                  |
| `date.setMilliseconds()` | 修改日期中的毫秒数                |
| `date.setTime()`         | 修改日期的时间戳                  |

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

| 属性                    | 作用                                   |
| ----------------------- | -------------------------------------- |
| `navigator.appCodeName` | 获取浏览器的代码名                     |
| `navigator.appName`     | 获取浏览器的名称                       |
| `navigator.appVersion`  | 获取浏览器的平台和版本信息             |
| `navigator.platform`    | 获取浏览器的操作系统平台               |
| `navigator.userAgent`   | 获取浏览器给服务器发送信息时的头部信息 |

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

## 操作 DOM 节点

| 属性/方法                                    | 作用                                                           |
| -------------------------------------------- | -------------------------------------------------------------- |
| `node.childNodes`                            | 获取当前节点包含的所有节点，返回一个 NodeList 对象             |
| `node.parentNode`                            | 获取当前节点的父节点                                           |
| `node.firstChild`                            | 获取当前节点包含的第一个子节点 ，没有返回`null`                |
| `node.lastChild`                             | 获取当前节点包含的最后一个子节点，没有返回`null`               |
| `node.previousSibling`                       | 获取当前节点的前一个兄弟节点                                   |
| `node.nextSibling`                           | 获取当前节点的后一个兄弟节点                                   |
| `node.nodeType`                              | 获取节点的类型                                                 |
| `node.nodeName`                              | 获取普通节点或者属性节点的名称                                 |
| `node.textContent`                           | 获取节点的文本内容                                             |
| `document.createElement(tagName)`            | 创建一个元素节点                                               |
| `document.createTextNode(data)`              | 创建一个文本节点                                               |
| `document.createComment(data)`               | 创建一个注释节点                                               |
| `document.createDocumentFragment()`          | 创建一个空的文档片段                                           |
| `parentNode.appendChild(newNode)`            | 在父节点中往后插入一个新节点                                   |
| `parentNode.insertBefore(newNode, nextNode)` | 在父节点中插入一个新节点，并让新节点插入到指定节点的前一个位置 |
| `node.cloneNode([deep])`                     | 复制节点 node，返回复制的节点                                  |
| `parentNode.replaceChild(newNode, oldNode)`  | 用新节点替换旧节点                                             |
| `parentNode.remove(childNode)`               | 删除父节点中指定的子节点                                       |
| `node.isConnected`                           | 判断元素是否已经被渲染在当前页面中                             |
| `node.hasChildNodes()`                       | 判断节点是否有子节点                                           |
| `parentNode.contains(node)`                  | 判断节点是否是另一个节点的后代                                 |
| `node1.isEqualNode(node2)`                   | 判断两个节点是否相同                                           |

## 操作元素

| 属性/方法                                         | 作用                                                                       |
| ------------------------------------------------- | -------------------------------------------------------------------------- |
| `element.getElementsByClassName(name)`            | 在元素的后代元素中根据**类名**查找元素，返回**所有**符合条件的元素         |
| `element.getElementsByTagName(name)`              | 在元素的后代元素中根据**标签名**查找元素，返回**所有**符合条件的元素       |
| `element.querySelector(cssSelector)`              | 在元素的后代元素中使用**css 选择器**查找元素，返回**第一个**符合条件的元素 |
| `element.querySelectorAll(cssSelector)`           | 在元素的后代元素中使用**css 选择器**查找元素，返回**所有**符合条件的元素   |
| `element.children`                                | 获取元素的所有子元素                                                       |
| `element.firstElementChild`                       | 获取元素的第一个子元素                                                     |
| `element.lastElementChild`                        | 获取元素的最后一个子元素                                                   |
| `element.previousElementSibling`                  | 获取元素的上一个兄弟元素                                                   |
| `element.nextElementSibling`                      | 获取元素的下一个兄弟元素                                                   |
| `element.insertAdjacentElement(position,element)` | 在元素的指定位置插入一个新元素                                             |
| `element.insertAdjacentHTML(position,text)`       | 把 text 解析成 html 元素。并插入到指定位置                                 |
| `element.insertAdjacentText(position,text)`       | 在元素的指定位置插入一段文本                                               |

## 元素的标签属性

| 属性/方法                          | 作用                               |
| ---------------------------------- | ---------------------------------- |
| `element.attributes()`             | 获取元素所有的属性节点             |
| `elment.hasAttributes()`           | 判断元素标签中是否有属性节点       |
| `elment.hasAttribute(name)`        | 判断元素标签中是否含有指定属性节点 |
| `elment.setAttribute(name, value)` | 在元素上新增或修改属性节点         |
| `elment.getAttributeNames()`       | 获取元素标签中的所有属性名         |
| `elment.getAttribute(name)`        | 获取元素标签中指定属性的值         |
| `elment.removeAttribute(name)`     | 移除元素中的某个属性节点           |
| `elment.classList`                 | 获取元素的 class 属性值列表        |
| `elment.className`                 | 获取元素的 class 属性值            |
| `elment.style`                     | 获取元素的行内样式                 |
