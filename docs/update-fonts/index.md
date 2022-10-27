# 中文字体

## 方案一

1. 把从 windows 字体目录拷贝的文件 cp 到镜像内

```sh
docker cp /root/fonts/ <容器ID>:/usr/share/fonts/
```
::: tip 温馨提示
拷贝之前先把中文字体属性名称改成中文,否则编辑器字体列表不会显示中文名称。

例如：【宋体】会显示成 【simsun】

<a href="../update-fonts-name/">修改中文字体名称</a>
:::

::: tip 温馨提示
如果您觉得麻烦可以下载现有的字体 <a href="../update-fonts-name/#已有中文字体">去下载</a>
:::

1.  进入容器

```sh
docker ps
docker exec -it <容器ID> /bin/bash
```

3.  执行命令
```sh
/usr/bin/documentserver-generate-allfonts.sh
```
4.  把容器保存为新镜像

```sh
docker commit -p -a "Knox" -m "fonts" <容器ID> ooffice:v1 
```

::: tip 温馨提示
如果新增字体不显示，尝试清理浏览器缓存，因为你可能读取的是浏览器缓存
:::


## 方案二

1. 用 Dockerfile 重新制作一个新的镜像
2. Dockerfile 文件示例

```sh
FROM knoxzhang/oo-ce-docker-license
COPY fonts/ /usr/share/fonts/
```

3. 制作镜像
   
```sh
docker build -t ooffice:v1 .
```






<script setup>
import Footer from '../components/Footer.vue'
</script>

<Footer/>