# 总结让元素居中的方法

## 方法 1

条件：

-   子元素必须是行内或者行内块元素
-   子元素宽度必须小于父级宽度
-   子元素宽度已知或未知

```css
父级 {
    text-align: center;
}
子级 {
    display: inline; /* 或者是 display:inline-block;*/
}
```

## 方法 2

条件：

-   子元素宽度已知
-   子元素必须是块级元素
-   子元素宽度小于父级宽度

```css
margin: 0 auto;
```

## 方法 3

-   子元素是行内或者行内块元素
-   子元素宽度未知，大于小于父级宽度都可以

```css
父级 {
    text-align: center;
}
子级 {
    display: inline; /* 或者是 display:inline-block;*/
    margin: 0 -100%;
}
```

## 方法 4

-   子元素宽度已知或者未知，大于小于父级宽度都可以

```css
父级 {
}
子级 {
    float: left;
    margin-left: 50%;
    transform: translateX(-50%);
}
```

## 方法 5

-   宽度已知，小于或大于父级宽度

```css
父级 {
}
子级 {
    float: left;
    margin-left: 50%;
    position: relative;
    left: -XXpx; /*父级宽度的一半*/
}
```

## 方法 6

-   宽度已知或未知，小于或大于父级宽度

```css
父级 {
}
子级 {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
}
```

## 方法 7

-   元素宽度已知， 大于或小于父级宽度

```css
父级 {
}
子级 {
    position: relative;
    left: 50%;
    transform: translateX(-XXpx); /*元素宽度的一半*/
}
```

## 方法 8

-   元素宽度已知，大于或小于父级宽度

```css
父级 {
}
子级 {
    position: relative;
    left: 50%;
    margin-left: -XXpx; /*元素宽度的一半*/
}
```

## 方法 9

-   元素宽度已知，大于或小于父级宽度

```css
父级 {
    position: relative;
}
子级 {
    position: absolute;
    left: 50%;
    margin-left: -XXpx; /*元素宽度的一半*/
}
```

## 方法 10

-   元素宽度已知，大于或小于父级宽度

```css
父级 {
    position: relative;
}
子级 {
    position: absolute;
    left: -XXpx; /*元素宽度的一半*/
    margin-left: 50%;
}
```

## 方法 11

-   元素宽度已知，大于或小于父级宽度

```css
父级 {
    position: relative;
}
子级 {
    position: absolute;
    left: 50%;
    transform: translateX(-XXpx); /*元素本身宽度的一半*/
}
```

## 方法 12

-   元素宽度已知或未知，大于或小于父级宽度

```css
父级 {
    position: relative;
}
子级 {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}
```

## 方法 1

-   子元素高度已知，小于或大于父级高度

```css
子级 {
    position: relative;
    top: 50%;
    margin-top: -xxPx; /*子级元素本身高度的一半*/
}
```

## 方法 2

-   子元素高度已知，小于或大于父级高度

```css
子级 {
    position: relative;
    top: 50%;
    transform: translateY(-XXpx); /*子元素高度的一半*/
}
```

## 方法 3

-   子元素高度已知或未知，小于或大于父级高度

```css
子级 {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
}
```

## 方法 3

-   子元素高度已知，小于或大于父级高度

```css
父级 {
    position: relative;
}
子级 {
    position: absolute;
    top: 50%;
    margin-top: -XXpx; /*子元素高度的一半*/
}
```

## 方法 4

-   子元素高度已知，小于或大于父级高度

```css
父级 {
    position: relative;
}
子级 {
    position: absolute;
    top: 50%;
    transform: translateY(-XXpx); /*子元素高度的一半*/
}
```

## 方法 5

-   子元素高度已知或未知，小于或大于父级高度

```css
父级 {
    position: relative;
}
子级 {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
```

## 方法 6

-   父级高度已知
-   子元素高度已知，小于或大于父级高度

```css
父级 {
    position: relative;
}
子级 {
    margin-top: XXpx; /*父级高度的一半*/
    transform: translateY(-XXpx); /*子元素高度的一半*/
}
```

## 方法 7

-   父级高度已知
-   子元素高度已知或未知，小于或大于父级高度

```css
父级 {
    position: relative;
}
子级 {
    margin-top: XXpx; /*父级高度的一半*/
    transform: translateY(-50%);
}
```
