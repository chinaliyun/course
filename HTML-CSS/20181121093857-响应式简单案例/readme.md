# 响应式案例

## 案例 1

[OPPO 首页](http://www.oppo.com/cn/)中间部分

```html
<style>
    * {
        margin: 0;
        padding: 0;
    }
    .fl {
        float: left;
    }
    .clear:after {
        content: "";
        display: block;
        clear: both;
    }
    .banner {
        width: 100%;
        height: 200px;
    }
    .b1 {
        background-color: #f18bec;
    }
    .b2 {
        background-color: #88a8e0;
    }
    .b3 {
        background-color: #ccf7a4;
    }
    .b4 {
        background-color: rgb(250, 145, 126);
    }
    @media (min-width: 769px) {
        .banner {
            width: 50%;
            height: 280px;
        }
    }
    @media (min-width: 891px) {
        .banner {
            height: 310px;
        }
    }
    @media (min-width: 1025px) {
        .banner {
            height: 350px;
        }
    }
</style>
<div class="banner_wrapper">
    <div class="banner b1 fl"></div>
    <div class="banner b2 fl"></div>
</div>
<div class="banner_wrapper">
    <div class="banner b3 fl"></div>
    <div class="banner b4 fl"></div>
</div>
```

案例 2：
[OPPO 首页](http://www.oppo.com/cn/)头部部分

```html
<style>
    * {
        margin: 0;
        padding: 0;
    }
    .fl {
        float: left;
    }
    .clear:after {
        content: "";
        display: block;
        clear: both;
    }
    ul {
        list-style: none;
    }
    .header_section {
        height: 60px;
        line-height: 60px;
        background-color: aliceblue;
    }
    .header_container {
        width: 1200px;
        height: 10px;
        margin: 0 auto;
        position: relative;
    }
    .menu_wrapper {
        display: none;
    }
    .logo_wrapper {
        position: absolute;
        top: 0;
        left: 10px;
    }
    .shop_wrapper {
        position: absolute;
        top: 0;
        right: 10px;
    }
    .nav_wrapper {
        text-align: center;
    }
    .nav_wrapper ul {
        display: inline-block;
    }
    .nav_wrapper li {
        padding: 0 40px;
    }
    @media (max-width: 1200px) {
        .header_container {
            width: auto;
        }
        .nav_wrapper li {
            padding: 0 30px;
        }
    }
    @media (max-width: 930px) {
        .nav_wrapper li {
            padding: 0 20px;
        }
    }
    @media (max-width: 760px) {
        .nav_wrapper {
            display: none;
        }
        .menu_wrapper {
            display: block;
            position: absolute;
            left: 10px;
            top: 0;
        }
        .logo_wrapper {
            text-align: center;
            position: static;
        }
    }
</style>
<div class="header_section">
    <div class="header_container">
        <div class="menu_wrapper">菜单</div>
        <div class="logo_wrapper">OPPO</div>
        <div class="nav_wrapper">
            <ul class="clear">
                <li class="fl">手机</li>
                <li class="fl">手机</li>
                <li class="fl">手机</li>
                <li class="fl">手机</li>
                <li class="fl">手机</li>
                <li class="fl">手机</li>
                <li class="fl">手机</li>
            </ul>
        </div>
        <div class="shop_wrapper">商城</div>
    </div>
</div>
```

## 案例 3

[OPPO 首页](http://www.oppo.com/cn/)底部文字地图
