# 如何与插件通信

## 同源场景下（同域名、端口）

在文件 `code.js` 暴露 window 对象给顶级窗口

```js
window.top.sonWin = window;
window.helloFun = function () {
  console.log("hello world");
};
```

在应用中使用插件内的方法

```js
sonWin.helloFun();
// hello world
```

## 如何代理到指定服务器

::: tip 温馨提示

以 NGINX 为例

<a href="../proxy-conf/#与应用集成-同域访问">查看详细配置</a>
:::

## 连接器

简单又强大的功能
<a href="../paid-custom-image/7.5.1.23/#_6-连接器（自动化api）">查看详情</a>

<script setup>
import Footer from '../components/Footer.vue'
</script>

<Footer/>
