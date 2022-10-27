# 前端SDK

初始化后，可调用sdk能力

```js
var docEditor = new DocsAPI.DocEditor( "placeholder" , config);
```

## 拒绝编辑

```js
docEditor.denyEditingRights("hello,world");
```

## 销毁文档对象

```js
docEditor.destroyEditor();
```
## 下载编辑后的文件

```js
docEditor.downloadAs(格式);
```
::: tip 温馨提示
只有在存在onDownloadAs事件 时才能调用该方法。文档编辑服务异步创建文档并使用参数中的链接触发onDownloadAs事件。
:::







<script setup>
import Footer from '../components/Footer.vue'
</script>

<Footer/>