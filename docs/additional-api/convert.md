## docx 转 pdf

地址：POST http://documentserver/ConvertService.ashx
```json
{
    "async": false,
    "filetype": "docx",
    "key": "Khirz6zTPdfd7",
    "outputtype": "pdf",
    "title": "Example Document Title.docx",
    "url": "https://example.com/url-to-example-document.docx"
}
```

Response

```json
{
  "fileUrl": "http://example.com/cache/files/conv_3917555110101_pdf/output.pdf/Example%20Document%20Title.pdf?md5=Yi-k3hvnnp_30xfBQ9gcFg&expires=1663401660&disposition=attachment&filename=Example%20Document%20Title.pdf",
  "percent": 100,
  "endConvert": true
}
```


| 错误码 | 描述                       |
| ------ | -------------------------- |
| -1     | 未知错误                   |
| -2     | 转换超时错误               |
| -3     | 转换错误                   |
| -4     | 下载要转换的文档文件时出错 |
| -5     | 密码错误                   |
| -6     | 访问转换结果数据库时出错   |
| -7     | 输入错误                   |
| -8     | 令牌无效                   |




<script setup>
import Footer from '../components/Footer.vue'
</script>

<Footer/>