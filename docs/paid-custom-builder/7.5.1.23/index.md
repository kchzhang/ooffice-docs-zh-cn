# 文档生成器（<span style="color:red">￥499</span>）

## 镜像部署

![builder](/pay/builder/dev.png)
<a href="../pay/builder/dev.png" target="_blank">点击放大</a>

## 本地调试

```shell
curl 'http://localhost:3000/builder' \
  -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7' \
  -H 'Accept-Language: zh-CN,zh;q=0.9,en;q=0.8' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Cookie: Hm_lvt_e96978ddd4a043adb41b2c052ca28a3a=1702729723,1703861452,1703904837; Hm_lpvt_e96978ddd4a043adb41b2c052ca28a3a=1703905287' \
  -H 'Origin: http://localhost:3000' \
  -H 'Pragma: no-cache' \
  -H 'Referer: http://localhost:3000/' \
  -H 'Sec-Fetch-Dest: document' \
  -H 'Sec-Fetch-Mode: navigate' \
  -H 'Sec-Fetch-Site: same-origin' \
  -H 'Sec-Fetch-User: ?1' \
  -H 'Upgrade-Insecure-Requests: 1' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --data-raw 'PredefinedScript=builder.CreateFile%28%22docx%22%29%3B%0D%0Avar+oDocument+%3D+Api.GetDocument%28%29%3B%0D%0Avar+oParagraph%2C+oRun%3B%0D%0AoParagraph+%3D+oDocument.GetElement%280%29%3B%0D%0AoParagraph+%3D+Api.CreateParagraph%28%29%3B%0D%0AoParagraph.AddText%28%22Dear+John+Smith.%22%29%3B%0D%0AoDocument.Push%28oParagraph%29%3B%0D%0AoParagraph+%3D+Api.CreateParagraph%28%29%3B%0D%0AoParagraph.AddText%28%22ONLYOFFICE+is+glad+to+announce+that+starting+today%2C+you+are+appointed+Commercial+director+to+the+company+of+your+dream.%22%29%3B%0D%0AoDocument.Push%28oParagraph%29%3B%0D%0AoParagraph+%3D+Api.CreateParagraph%28%29%3B%0D%0AoRun+%3D+Api.CreateRun%28%29%3B%0D%0AoRun.SetBold%28true%29%3B%0D%0AoRun.AddText%28%22Please+note%3A+%22%29%3B%0D%0AoParagraph.AddElement%28oRun%29%3B%0D%0AoRun+%3D+Api.CreateRun%28%29%3B%0D%0AoRun.AddText%28%22this+text+is+used+to+demonstrate+the+possibilities+of+%22%29%3B%0D%0AoParagraph.AddElement%28oRun%29%3B%0D%0AoRun+%3D+Api.CreateRun%28%29%3B%0D%0AoRun.SetBold%28true%29%3B%0D%0AoRun.AddText%28%22ONLYOFFICE+Document+Builder%22%29%3B%0D%0AoParagraph.AddElement%28oRun%29%3B%0D%0AoRun+%3D+Api.CreateRun%28%29%3B%0D%0AoRun.AddText%28%22+and+cannot+be+used+as+real+appointment+to+the+position+in+any+real+company.%22%29%3B%0D%0AoParagraph.AddElement%28oRun%29%3B%0D%0AoDocument.Push%28oParagraph%29%3B%0D%0AoParagraph+%3D+Api.CreateParagraph%28%29%3B%0D%0AoParagraph.AddText%28%22Best+regards%2C%22%29%3B%0D%0AoParagraph.AddLineBreak%28%29%3B%0D%0AoParagraph.AddText%28%22ONLYOFFICE+Document+Builder+Team%22%29%3B%0D%0AoDocument.Push%28oParagraph%29%3B%0D%0Abuilder.SaveFile%28%22docx%22%2C+%22SampleText.docx%22%29%3B%0D%0Abuilder.CloseFile%28%29%3B' \
  --compressed
```

--data-raw

```
PredefinedScript: builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph, oRun;
oParagraph = oDocument.GetElement(0);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Dear John Smith.");
oDocument.Push(oParagraph);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("ONLYOFFICE is glad to announce that starting today, you are appointed Commercial director to the company of your dream.");
oDocument.Push(oParagraph);
oParagraph = Api.CreateParagraph();
oRun = Api.CreateRun();
oRun.SetBold(true);
oRun.AddText("Please note: ");
oParagraph.AddElement(oRun);
oRun = Api.CreateRun();
oRun.AddText("this text is used to demonstrate the possibilities of ");
oParagraph.AddElement(oRun);
oRun = Api.CreateRun();
oRun.SetBold(true);
oRun.AddText("ONLYOFFICE Document Builder");
oParagraph.AddElement(oRun);
oRun = Api.CreateRun();
oRun.AddText(" and cannot be used as real appointment to the position in any real company.");
oParagraph.AddElement(oRun);
oDocument.Push(oParagraph);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Best regards,");
oParagraph.AddLineBreak();
oParagraph.AddText("ONLYOFFICE Document Builder Team");
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SampleText.docx");
builder.CloseFile();
```



## 联系方式

QQ：601424688

<!-- 微信号：KnoxZhang0 -->

<script setup>
import Footer from '../../components/Footer.vue'
</script>

<Footer/>
