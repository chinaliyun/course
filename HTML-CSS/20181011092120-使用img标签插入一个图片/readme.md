# 使用 img 标签插入一个图片

`<img>`标签用来在页面中插入一张图片，该标签也是一个`自闭合标签`，不需要结束标签。

## src 属性

`<img>`标签需要`src`属性的配合才能插入一张图片；`src`属性用来设置图片的路径；页面地址可以是绝对路径，也可以是相对路径，或者是一个网站的地址。

## 相对和绝对路径

从电脑的根目录开始定位文件的位置，叫做`绝对路径`,比如 windows 系统中的`D://网页/index.html`，以及 linux 系统中的`/home/liyun/index.html`

以指定文件的路径为参照物，定位其他文件的位置，叫做相对路径，

相对路径中，`./`表示当前文件所在目录，`../`表示当前文件的上一级目录，`../../`表示当前文件的上一级目录的上一级目录，并以此类推。

```
demo
|---images
|   |---01.png
|---www
    |---index.html
    |---images
        |---02.png
```

以上面的文档目录为例，如果想在 `index.html` 文件中引入 `02.png` 文件，需要如下代码：

```html
<img src="./images/02.png" alt="" />
```

[案例源码](./demo/wwww/demo01.html)

![](./images/01.png)

如果想在 `index.html` 文件中引入 `01.png` 文件，需要如下代码：

```html
<img src="../images/01.png" alt="" />
```

[案例源码](./demo/wwww/demo02.html)

![](./images/02.png)

## 网络路径

如果你知道一张图片在网路上的地址，也可以把这个地址写进 src 属性值中

```html
<img
    src="https://img.alicdn.com/tfs/TB1dw0vqHGYBuNjy0FoXXciBFXa-120-24.png"
    alt=""
/>
```

[案例源码](./demo/wwww/demo03.html)

![](./images/03.png)

## width 和 height 属性

如果插入的图片太大或者太小，可以在标签中添加`width`和`height`属性，分别设置图片的显示宽度和高度。 如果只设置了其中一个，另一个会`等比例缩放`，保证图片不变形。

```html
<img src="./images/02.png" width="100" />
<img src="./images/02.png" width="150" />
```

[案例源码](./demo/wwww/demo04.html)

![](./images/04.png)
