# 付费镜像

## pro 镜像 （<span style="color:red">￥ 499</span>）

<!-- <span style="color:#000000;font-size:16px;text-decoration:line-through">￥99.00</span> -->

## 1. 去除 20 链接数限制

![online-users](/pay/online-users.png)
<a href="../pay/online-users.png" target="_blank">点击放大</a>

## 2. 移动端可编辑 <span style="color:red;font-size:14px"></span>

![mobile](/pay/mobile.png)
<a href="../pay/mobile.png" target="_blank">点击放大</a>

## 3. 增加中文字体

![font-family](/pay/font-family.png)
<a href="../pay/font-family.png" target="_blank">点击放大</a>
<span style="font-size:12px">不限以上字体</span>

## 4. 增加中文字号

![font-size](/pay/font-size.png)
<a href="../pay/font-size.png" target="_blank">点击放大</a>

<!-- ## 5. 开启多核线程 <span style="color:red;font-size:14px"></span>

![wokers](/pay/wokers.png)
<a href="../pay/wokers.png" target="_blank">点击放大</a> -->

## 5. 连接器 (自动化 API)<span style="color:red;font-size:14px">*</span>

```vue
Asc.scope.text = "Hello world!";
var connector = docEditor.createConnector();
connector.callCommand(function() {
    var oDocument = Api.GetDocument();
    var oParagraph = Api.CreateParagraph();
    oParagraph.AddText(Asc.scope.text);
    oDocument.InsertContent([oParagraph]);
}, function() { console.log("callback command"); });

```

## 下载方式
### docker

```sh
# 拉取
docker pull knoxzhang/oo-ce-docker-license-pro:8.0.1.33

```


## 联系方式

QQ：601424688

<script setup>
import Footer from '../../components/Footer.vue'
</script>

<Footer tip=" "/>
