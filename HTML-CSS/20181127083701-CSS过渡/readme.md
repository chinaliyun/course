# 设置动画周期

`transition: 属性1 时间1 速度1 延时1，属性2 时间2 速度2 延时2，属性3 时间3 速度3 延时3, ...`.属性用来设置实现变换的周期、速度等条件

-   当一次性设置多个属性的时候，可以使用`all`代替

## 时间

-   以秒为单位
-   比如: 0.1s

## 速度

-   速度中`linear`表示匀速
-   速度中`ease-in`表示加速
-   速度中`ease-out`表示减速
-   速度中`ease-in-out`表示先加速后减速

[点击查看案例](./demo/demo01.html)

`transition`属性是一个集合属性，可以分为以下三种属性来设置：

-   transition-property: 使用动画的属性
-   transition-duration :动画周期
-   transition-timing-function: 动画变化速度
-   transition-delay: 动画延时时间[点击查看案例](./demo/demo02.html)
