# 如何与插件通信

## 同源场景下（同域名、端口）

在文件 `code.js` 暴露 window 对象给顶级窗口
```js
window.top.sonWin = window;
window.helloFun = function(){
    console.log("hello world");
}
``` 

在应用中使用插件内的方法
```js
sonWin.helloFun();
// hello world
```

<script setup>
import Footer from '../components/Footer.vue'
</script>

<Footer/>