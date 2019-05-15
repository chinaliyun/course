# 全局函数

全局函数值得是在代码的任何位置都可以使用的函数，声明变量和函数的时候，要尽可能避免与这些全局函数名相同，否则可能导致全局函数被覆盖。

常用的全局函数有以下几种：

| 函数                         | 作用                                  |
| ---------------------------- | ------------------------------------- |
| `encodeURI(string)`          | 编码字符串                            |
| `decodeURI(string)`          | 解码字符串                            |
| `encodeComponentURI(string)` | 编码字符串，比`encodeURI`编码范围更大 |
| `decodeComponentURI(string)` | 解码字符串，比`decodeURI`解码范围更大 |
| `parseInt(string [,radio])`  | 按照指定的基数提取字符串中的整数      |
| `parseFloat(string)`         | 提取字符串中的数字部分                |
| `isNaN(n)`                   | 判断参数是否不是一个数组              |
