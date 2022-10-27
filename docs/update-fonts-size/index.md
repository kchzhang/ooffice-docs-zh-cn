# 中文字号

## 方案一

1.  查看容器ID

```sh
docker ps
```
2.  进入容器
```sh
docker exec -it <容器ID> /bin/bash
```
3. 添加中文字号
```sh
sed -i "s/{value:8,displayValue:\"8\"}/{value:42,displayValue:\"初号\"},{value:36,displayValue:\"小初\"},{value:26,displayValue:\"一号\"},{value:24,displayValue:\"小一\"},{value:22,displayValue:\"二号\"},{value:18,displayValue:\"小二\"},{value:16,displayValue:\"三号\"},{value:15,displayValue:\"小三\"},{value:14,displayValue:\"四号\"},{value:12,displayValue:\"小四\"},{value:10.5,displayValue:\"五号\"},{value:9,displayValue:\"小五\"},{value:7.5,displayValue:\"六号\"},{value:6.5,displayValue:\"小六\"},{value:5.5,displayValue:\"七号\"},{value:5,displayValue:\"八号\"},{value:8,displayValue:\"8\"}/g" `grep -rwl --include="*.js" "{value:8,displayValue:\"8\"}" /var/www/onlyoffice/documentserver/web-apps/apps`
```
4. 固定字体列表高度
```sh
sed -i "s/{cls:\"input-group-nr\",menuStyle:\"min-width: 55px;\"/{cls:\"input-group-nr\",menuStyle:\"min-width: 55px;height: 500px;\"/g" `grep -rwl --include="*.js" "{value:8,displayValue:\"8\"}" /var/www/onlyoffice/documentserver/web-apps/apps`

```
5. 重启容器
```sh
docker restart <容器ID>
``` 
6. 制作新镜像

```sh
docker commit -p -a "Knox" -m "zh-cn" <容器ID> ooffice:v1
```



<script setup>
import Footer from '../components/Footer.vue'
</script>

<Footer/>