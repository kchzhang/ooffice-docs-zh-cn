# 付费镜像

## pro 镜像 （<span style="color:red">￥ 499</span>）

<!-- <span style="color:#000000;font-size:16px;text-decoration:line-through">￥99.00</span> -->

## 1. 去除 20 链接数限制

![online-users](/pay/online-users.png)
<a href="../../pay/online-users.png" target="_blank">点击放大</a>

## 2. 移动端可编辑 <span style="color:red;font-size:14px"></span>

![mobile](/pay/mobile.png)
<a href="../../pay/mobile.png" target="_blank">点击放大</a>

## 3. 增加中文字体

![font-family](/pay/font-family.png)
<a href="../../pay/font-family.png" target="_blank">点击放大</a>
<span style="font-size:12px">不限以上字体</span>

## 4. 增加中文字号

![font-size](/pay/font-size.png)
<a href="../../pay/font-size.png" target="_blank">点击放大</a>

## 5. 连接器 (自动化 API)<span style="color:red;font-size:14px">\*</span>

```vue
Asc.scope.text = "Hello world!"; 

var connector = docEditor.createConnector();

connector.callCommand(function() { 
    var oDocument = Api.GetDocument(); 
    var oParagraph = Api.CreateParagraph(); 
        oParagraph.AddText(Asc.scope.text);
        oDocument.InsertContent([oParagraph]); 
    }, 
    function() { 
        console.log("callback command");
    });
```
### word

![font-size](/8.2.0/auto-word.png)
<a href="../../8.2.0/auto-word.png" target="_blank">点击放大</a>

### excel

![font-size](/8.2.0/auto-cell.png)
<a href="../../8.2.0/auto-cell.png" target="_blank">点击放大</a>

![font-size](/8.2.0/auto-cell-2.png)
<a href="../../8.2.0/auto-cell-2.png" target="_blank">点击放大</a>

### powerpoint

![font-size](/8.2.0/auto-slide.png)
<a href="../../8.2.0/auto-slide.png" target="_blank">点击放大</a>

### pdf

![font-size](/8.2.0/auto-pdf.png)
<a href="../../8.2.0/auto-pdf.png" target="_blank">点击放大</a>

![font-size](/8.2.0/auto-pdf-2.png)
<a href="../../8.2.0/auto-pdf-2.png" target="_blank">点击放大</a>

## 联系方式

QQ：601424688

<script setup>
import Footer from '../../components/Footer.vue'
</script>

<Footer tip=" "/>
