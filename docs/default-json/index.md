# default.json

位置：`/etc/onlyoffice/documentserver/default.json`

## 文件大小限制

1. 修改参数
```sh
# 单位字节（B）
FileConverter.converter.maxDownloadBytes = 104857600

FileConverter.converter.inputLimits[0].zip.uncompressed = "500MB"

FileConverter.converter.inputLimits[2].zip.uncompressed = "500MB"
```
2. 重启容器

```sh
docker restart <容器ID>
```


<script setup>
import Footer from '../components/Footer.vue'
</script>

<Footer/>
