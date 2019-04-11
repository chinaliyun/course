# Date 对象及其运用

`Date`对象是 JS 提供的用来获取当前日期，或者对日期进行操作的一个构造函数。使用方法如下：

```js
var date = new Date(); // 返回一个日期对象

date.getFullYear(); // 返回当前年份
date.getMonth(); // 返回当前月份 0-11
date.getDate(); // 返回当前日期 1-31
date.getDay(); // 返回当前周几 0-6
date.getHour(); // 返回当前小时 0-23
date.getMinutes(); // 返回当前分钟 0-59
date.getSecond(); // 返回当前秒数 0-59
date.getMillisecond(); // 返回当前的毫秒数
date.getTime(); // 返回从1970年1月1日至今的毫秒数

date.setFullYear(3000); // 设置date中的年份，返回1970年1月1日到当前日期的毫秒数
date.setMonth(1); // 设置date中的月份 0-11，返回1970年1月1日到当前日期的毫秒数
date.setDate(12); // 设置date中的日期 1-31，返回1970年1月1日到当前日期的毫秒数
date.setHour(10); // 设置date中的小时 0-23，返回1970年1月1日到当前日期的毫秒数
date.setMinutes(30); // 设置date中的分钟 0-59，返回1970年1月1日到当前日期的毫秒数
date.setSecond(30); // 设置date中的秒数 0-59，返回1970年1月1日到当前日期的毫秒数
date.setMillisecond(120); // 设置date中的毫秒数，返回1970年1月1日到当前日期的毫秒数
date.setTime(); // 以毫秒数设置date日期
```
