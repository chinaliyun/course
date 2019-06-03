# 判断元素的滚动方向

当元素滚动条位置发生变化时，通过判断滚动条的位置，可以判断元素的滚动方向：

```html
<style>
  body {
    margin: 0;
    height: 200%;
  }
</style>
<script>
  var scrollTop = 0;
  window.addEventListener("scroll", function(event) {
    if (window.scrollY > scrollTop) {
      console.log("元素向上滚动");
    } else {
      console.log("元素向下滚动");
    }
    scrollTop = window.scrollY;
  });
</script>
```

[案例源码](./demo/demo01.html)

这里通过`window.scrollY`获取每次滚动后的滚动条位置，可以判断整个页面的滚动方向。
