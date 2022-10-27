# Vue

## 安装

```sh
npm install --save @onlyoffice/document-editor-vue
```
or

```sh
yarn add @onlyoffice/document-editor-vue -S
```

## 使用示例

```vue
<template>
  <DocumentEditor 
    id="docEditor" 
    documentServerUrl="http://documentserver/"
    :config="config"
    :events_onDocumentReady="onDocumentReady"
    /> 
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { DocumentEditor } from "@onlyoffice/document-editor-vue";
 
export default defineComponent({
  name: 'ExampleComponent',
  components: {
    DocumentEditor
  },
  data() {
    return {
      config: {
        document: {
          fileType: "docx",
          key: "Khirz6zTPdfd7",
          title: "Example Document Title.docx",
          url: "https://example.com/url-to-example-document.docx"
        },
        documentType: "word",
        editorConfig: {
          callbackUrl: "https://example.com/url-to-callback.ashx"
        }
      }
    }
  },
  methods: {
    onDocumentReady() {
      console.log("Document is loaded");
    }
  },
});
</script>
```

## Props


| 名 称 <div style="width:160px"></div> | 类 型 <div style="width:50px"></div>| 默 认 <div style="width:40px"></div>| 必 填 <div style="width:40px"></div>| 描 述 |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| `id` | string | null | true | 组件唯一标识 |
| `documentServerUrl` | string | null | true | 文档服务器地址 |
| `config` | object | null | true | 用于打开带有token的文件的通用配置对象 | |
| `document_fileType` | string | null | false | 文件类型 |
| `document_title` | string | null | false | 文件名称|
| `documentType` | string | null | false | 文档类型 |
| `height` | string | null | false | 窗口高度 |
| `type` | string | null | false | 终端类型 desktop, mobile, embedded |
| `width` | string | null | false | 窗口宽度 |
| `events_onAppReady` | (event: object) => void | null | false | 应用初始化 |
| `events_onDocumentStateChange` | (event: object) => void | null | false | 文档修改 |
| `events_onMetaChange` | (event: object) => void | null | false | 通过meta命令更改文档的元信息 |
| `events_onDocumentReady` | (event: object) => void | null | false | 文档加载 |
| `events_onInfo` | (event: object) => void | null | false | 应用程序打开了文件 |
| `events_onWarning`| (event: object) => void | null | false | 出现警告 |
| `events_onError` | (event: object) => void | null | false | 出现错误 |
| `events_onRequestSharingSettings` | (event: object) => void | null | false | 点击置管理文档访问权限 |
| `events_onRequestRename` | (event: object) => void | null | false | 点击重命名 |
| `events_onMakeActionLink` | (event: object) => void | null | false | 点击书签获取链接，定位书签 |
| `events_onRequestInsertImage` | (event: object) => void | null | false | 点击插入图片 |
| `events_onRequestSaveAs` | (event: object) => void | null | false | 点击另存为 |
| `events_onRequestMailMergeRecipients` | (event: object) => void | null | false | 点击选择收件人数据 |
| `events_onRequestCompareFile` | (event: object) => void | null | false | 点击文档比对 |
| `events_onRequestEditRights` | (event: object) => void | null | false | 点击编辑按钮 |
| `events_onRequestHistory` | (event: object) => void | null | false | 点击历史版本 |
| `events_onRequestHistoryClose` | (event: object) => void | null | false | 关闭历史版本 |
| `events_onRequestHistoryData` | (event: object) => void | null | false | 点击特定版本 |
| `events_onRequestRestore` | (event: object) => void | null | false | 点击恢复版本按钮 |



<script setup>
import Footer from '../components/Footer.vue'
</script>

<Footer/>