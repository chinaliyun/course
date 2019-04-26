# 获取浏览器的位置和尺寸

BOM 提供了几个函数，可以获取浏览器在显示器中的位置和浏览器的尺寸

## screenX 和 screenLeft

`window.screenX`和`window.screenLeft`属性用来获取浏览器在显示器中距离显示器最左侧的距离

```js
console.log("浏览器到显示器左侧的距离：", window.screenX);
console.log("浏览器到显示器左侧的距离：", window.screenLeft);
```

## screenY 和 screenTop

`window.screenY`和`window.screenTop`属性用来获取浏览器在显示器中距离显示器最顶部的距离

```js
console.log("浏览器到显示器顶部的距离：", window.screenY);
console.log("浏览器到显示器顶部的距离：", window.screenTop);
```

> 早期的时候火狐浏览器不支持`screenLeft`和`screenTop`属性，而 IE 浏览器不支持`screenX`和`screenY`属性。现在已经都支持了。但是为了兼容早期的浏览器，获取浏览器位置的时候，可以这么写：

```js
var windowLeft = window.screenX || window.screenLeft;
var windowTop = window.screenY || window.screenTop;
```

## outerWidth 和 outerHeight

`window.outerWidth`和`window.outerOuter`属性分别用来获取浏览器本身的宽度和高度

```js
console.log("浏览器的宽度：", window.outerWidth);
console.log("浏览器的高度：", window.outerHeight);
```

## innerWidth 和 innerHeight

`window.innerWidth`和`window.innerinner`属性分别用来获取浏览器可视区域的宽度和高度

```js
console.log("浏览器可视区域的宽度：", window.innerWidth);
console.log("浏览器可视区域的高度：", window.innerHeight);
```
