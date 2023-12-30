# 插件

## 示例

```js
(function (window, undefined) {
  window.Asc.plugin.init = function () {
    var sdkApi = window.parent.DE.getController("Main").api;
    console.log("可以调用的sdkapi", sdkApi);
    window.parent.addEventListener(
      "message",
      function (res) {
        var data = { type: 1 };
        try {
          data = JSON.parse(res.data);
        } catch (error) {}
        switch (data.type) {
          case 2:
            var currentPage = sdkApi.getCurrentPage();
            break;
          case 3:
            var currentPage = sdkApi.goToPage(1);
            break;

          default:
            break;
        }
      },
      false
    );

    var params = JSON.stringify({ type: 1, message: "加载完成" });
    window.top.postMessage(params, "*");
  };
})(window, undefined);
```

## 下载

<a href="../corss.zip.png" download="corss.zip" target="_blank">示例代码下载</a>

## 连接器

简单又强大的功能
<a href="../paid-custom-image/7.5.1.23/#_6-连接器（自动化api）">查看详情</a>

<script setup>
import Footer from '../components/Footer.vue'
</script>

<Footer/>
