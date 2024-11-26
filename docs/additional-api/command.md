对于与 文档命令服务 的交互，使用 POST 请求。 请求参数在请求正文中以 JSON 格式输入请求被发送到 `https://documentserver/coauthoring/CommandService.ashx` 其中 documentserver 是安装了 ONLYOFFICE 文档服务器的服务器的名称

## 删除被遗忘的文件

请求示例

```json
{
  "c": "deleteForgotten",
  "key": "Khirz6zTPdfd7"
}
```

响应示例

```json
{
  "error": 0,
  "key": "Khirz6zTPdfd7"
}
```

## 断开在 users 参数中指定标识符的用户与 文档编辑服务的连接。这些用户将能够查看文档，但不允许对其进行更改。

请求示例

```json
{
  "c": "drop",
  "key": "Khirz6zTPdfd7",
  "users": ["6d5a81d0"]
}
```

响应示例

```json
{
  "error": 0,
  "key": "Khirz6zTPdfd7"
}
```

## 强制保存正在编辑的文档而不关闭它此命令后可能会继续编辑文档，因此这将不是最终保存的文档版本

请求示例

```json
{
  "c": "forcesave",
  "key": "Khirz6zTPdfd7",
  "userdata": "sample userdata"
}
```

响应示例

```json
{
  "error": 0,
  "key": "Khirz6zTPdfd7"
}
```

## 请求一个被遗忘的文件

请求示例

```json
{
  "c": "getForgotten",
  "key": "Khirz6zTPdfd7"
}
```

响应示例

```json
{
  "error": 0,
  "key": "Khirz6zTPdfd7",
  "url": "https://documentserver/url-to-forgotten-document.docx"
}
```

## 请求被遗忘文件的列表

请求示例

```json
{
  "c": "getForgottenList"
}
```

响应示例

```json
{
  "error": 0,
  "keys": ["Khirz6zTPdfd7"]
}
```

## 请求文档状态,以及打开编辑过文档的用户的标识符列表

请求示例

```json
{
  "c": "info",
  "key": "Khirz6zTPdfd7",
  "userdata": "sample userdata"
}
```

响应示例

```json
{
  "error": 0,
  "key": "Khirz6zTPdfd7"
}
```

## 从文档服务器请求许可证，以及有关服务器和用户配额的信息

请求示例

```json
{
  "c": "license"
}
```

响应示例

```json
{
  "error": 0,
  "license": {
    "end_date": "2021-07-07T23:59:59.000Z",
    "trial": false,
    "customization": false,
    "connections": 0,
    "connections_view": 0,
    "users_count": 10,
    "users_view_count": 10,
    "users_expire": 30
  },
  "server": {
    "resultType": 3,
    "packageType": 1,
    "buildDate": "2021-05-21T00:00:00.000Z",
    "buildVersion": "6.3.0",
    "buildNumber": 111
  },
  "quota": {
    "users": [
      {
        "userid": "uid-0",
        "expire": "2021-07-07T23:59:59.000Z"
      },
      {
        "userid": "uid-1",
        "expire": "2021-07-09T23:59:59.000Z"
      }
    ],
    "users_view": [
      {
        "userid": "uid-0",
        "expire": "2021-07-07T23:59:59.000Z"
      },
      {
        "userid": "uid-1",
        "expire": "2021-07-09T23:59:59.000Z"
      }
    ]
  }
}
```

## 为所有协作编辑器更新文档的元信息。

请求示例

```json
{
  "c": "meta",
  "key": "Khirz6zTPdfd7",
  "meta": {
    "title": "Example Document Title.docx"
  }
}
```

响应示例

```json
{
  "error": 0,
  "key": "Khirz6zTPdfd7"
}
```

## 请求文档服务器的当前版本号

请求示例

```json
{
  "c": "version"
}
```

响应示例

```json
{
  "error": 0,
  "version": "8.2.0.1"
}
```

<script setup>
import Footer from '../components/Footer.vue'
</script>

<Footer/>