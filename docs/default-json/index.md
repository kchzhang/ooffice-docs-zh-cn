# default.json

位置：`/etc/onlyoffice/documentserver/default.json`

## 文件大小限制

1. 修改参数
```sh
# 单位字节（B）
FileConverter.converter.maxDownloadBytes = 104857600			
```
2. 重启容器

```sh
docker restart <容器ID>
```

