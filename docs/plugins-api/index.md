## 插件入门

1. 创建工程名称 example  <a href="../settings.zip.png" download="settings.zip">下载例子</a>

```
.
│  config.json
│  index.html
│  README.md
│
├─resources
│  ├─dark
│  │      icon.png
│  │      icon@1.25x.png
│  │      icon@1.5x.png
│  │      icon@1.75x.png
│  │      icon@2x.png
│  │
│  └─light
│          icon.png
│          icon@1.25x.png
│          icon@1.5x.png
│          icon@1.75x.png
│          icon@2x.png
│
└─scripts
        code.js
```
2. 编写代码
    - 在 code.js 编辑你的业务逻辑
3. 部署到镜像

```sh
docker cp /example <容器ID>:/var/www/onlyoffice/documentserver/sdkjs-plugins/
```
4. 制作新镜像
```sh
docker commit -p -a "Knox" -m "plugins" <容器ID> ooffice:v1
```

::: tip 温馨提示
在前端集成 config 中开启插件属性
```json
    {
        "editorConfig": {
            "customization": {
                "plugins": true
            }
        },
        ...
    }
```
:::


<script setup>
import Footer from '../components/Footer.vue'
</script>

<Footer/>