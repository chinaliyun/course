# 数组方法总结

| 函数                                            | 作用                                                                                                  |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `Array.isArray(target)`                         | 判断目标是否是一个数组,返回布尔值                                                                     |
| `arr1.concat(arr2[,arr3,...])`                  | 合并数组，返回新数组                                                                                  |
| `arr.map(fn[,thisTarget])`                      | 遍历数组，返回一个新数组                                                                              |
| `arr.forEach(fn[,thisTarget])`                  | 遍历数组，返回 undefined                                                                              |
| `arr.push(item1[,item2, ...])`                  | 往数组结尾插入新元素,返回当前数组长度                                                                 |
| `arr.unshift(item1[,item2, ...])`               | 往数组开头插入新元素,返回当前数组长度                                                                 |
| `arr.pop()`                                     | 删除数组最后一个元素，返回被删除的元素                                                                |
| `arr.shift()`                                   | 删除数组开头一个元素，返回被删除的元素                                                                |
| `arr.splice(index, length,[item1, item2, ...])` | 在数组中删除或添加元素，返回被删除元素组成的数组，没有删除时返回空数组                                |
| `arr.includes(target)`                          | 判断数组中是否包含指定目标,返回布尔值                                                                 |
| `arr.indexOf(target)`                           | 从前往后查找第一个指定目标，找到时返回元素下标，没有则返回-1                                          |
| `arr.lastIndexOf(target)`                       | 从后往前查找第一个指定目标，找到时返回下标，没有则返回-1                                              |
| `arr.find(fn[,thisTarget])`                     | 找到第一个符合条件的元素，返回该元素，没有找到时返回 undefined                                        |
| `arr.findIndex(fn[,thisTarget])`                | 找到第一个符合条件的元素，返回该元素的下标，没有找到时返回-1                                          |
| `arr.every(fn[,thisTarget])`                    | 所有元素都满足条件时，返回 true，任何一个元素不满足条件时，返回 false，并停止遍历数组                 |
| `arr.some(fn[,thisTarget])`                     | 任意元素满足条件时，返回 true；所有元素都不满足条件时，返回 false                                     |
| `arr.filter(fn[,thisTarget])`                   | 返回所有符合指定条件的元素组成的新数组，没有则返回空数组                                              |
| `arr.sort(fn)`                                  | 对数组中的元素重新排序,返回排序后的数组                                                               |
| `arr.reverse()`                                 | 翻转数组中元素的顺序，返回翻转后的数组；会影响原有数组                                                |
| `arr.join([string])`                            | 把数组中所有元素拼接成一个字符串，返回该字符串,如果元素是其他类型，会隐式转换为 string 类型，再拼接。 |
| `arr.reduce(fn)`                                | 使用 fn 函数指定的处理方式从左到右统计所有元素                                                        |
| `arr.reduceRight(fn)`                           | 使用 fn 函数指定的处理方式从右到左统计所有元素                                                        |
