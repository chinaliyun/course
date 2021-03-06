# 星星案例

```html
<style>
    body {
        margin: 0;
        background-color: black;
    }
    img {
        animation-name: donghua;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
    @keyframes donghua {
        0% {
            transform: rotate(0);
        }
        50% {
            transform: rotate(180deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>
<script>
    window.onload = function() {
        // 创建雪花的基础元素
        var snow = document.createElement("img");
        snow.src = "./snow.png";
        snow.style.position = "fixed";
        snow.style.transition = "all 1s linear";

        // 获取当前可视区域的高度和宽度，用来设置雪花的最终位置
        var winHeight = window.innerHeight,
            winWidth = window.innerWidth;

        // 保存所有的雪花元素
        var snows = [];
        var timer1 = setInterval(function() {
            createSnow();
        }, 200);

        var timer2 = setInterval(function() {
            animate();
        }, 1000);

        document.addEventListener("visibilitychange", function() {
            console.log(document.visibilityState);
            if (document.visibilityState == "hidden") {
                clearInterval(timer1);
                clearInterval(timer2);
            } else {
                timer1 = setInterval(function() {
                    createSnow();
                }, 300);

                timer2 = setInterval(function() {
                    animate();
                }, 1000);
            }
        });

        function createSnow() {
            var ele = snow.cloneNode(true);
            ele.style.top = "-100px";
            ele.style.left =
                (Math.random() * window.innerWidth).toFixed(2) + "px";
            ele.style.animationDuration = 2 + Math.random() * 6 + "s";
            ele.width = 10 + Math.random() * 20;
            snows.push(ele);
            document.body.appendChild(ele);
        }

        function animate() {
            for (var i = 0; i < snows.length; i++) {
                var ele = snows[i];
                if (parseInt(ele.style.top) > window.innerHeight) {
                    ele.parentNode.removeChild(ele);
                    snows.splice(i, 1);
                    continue;
                }
                ele.style.top =
                    parseInt(ele.style.top) +
                    parseInt(Math.random() * 40) +
                    30 +
                    "px";
                ele.style.left =
                    parseInt(ele.style.left) +
                    parseInt(Math.random() * 10 - 5) +
                    "px";
            }
        }
    };
</script>
```

[案例源码](./demo/demo01.html)
