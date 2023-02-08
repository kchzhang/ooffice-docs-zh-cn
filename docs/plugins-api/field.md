# 模板替换

## 字段插入替换

1. 插入字段
![field-insert](/field-insert.png)
<a href="../field-insert.png" target="_blank">放大查看</a>

2.  替换字段 
![field-replace](/field-replace.png)
<a href="../field-replace.png" target="_blank">放大查看</a>

3. 下载<br/>
   <a href="../field-replace.zip.png" download="field-replace.zip" target="_blank">插件例子代码下载</a>

   ::: tip 温馨提示
   通信:如果想在上层应用调用插件里面的方法可以尝试使用 postMessage <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage" target="_blank">更多介绍</a>
   :::

   ```js
   /*
   * A 窗口的域名是<http://example.com:8080>，以下是 A 窗口的 script 标签下的代码：
   */

   var popup = window.open(...popup details...);

   // 如果弹出框没有被阻止且加载完成

   // 这行语句没有发送信息出去，即使假设当前页面没有改变 location（因为 targetOrigin 设置不对）
   popup.postMessage("The user is 'bob' and the password is 'secret'",
                     "https://secure.example.net");

   // 假设当前页面没有改变 location，这条语句会成功添加 message 到发送队列中去（targetOrigin 设置对了）
   popup.postMessage("hello there!", "http://example.org");

   function receiveMessage(event)
   {
   // 我们能相信信息的发送者吗？(也许这个发送者和我们最初打开的不是同一个页面).
   if (event.origin !== "http://example.org")
      return;

   // event.source 是我们通过 window.open 打开的弹出页面 popup
   // event.data 是 popup 发送给当前页面的消息 "hi there yourself!  the secret response is: rheeeeet!"
   }
   window.addEventListener("message", receiveMessage, false);

   ```
   
   
<script setup>
import Footer from '../components/Footer.vue'
</script>

<Footer/>