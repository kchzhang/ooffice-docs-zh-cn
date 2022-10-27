# 常见错误

## 无法保存

![回调保存失败](/save-error.png)

编辑器加载了"无法保存文档"消息。

文档编辑服务 无法连接到 editorConfig.callbackUrl 地址的 文档存储服务。

检查 回调处理程序 是否正常工作。 文档存储服务 必须返回 {"error": 0} 作为响应。

## 文件错误

![保存文件错误](/saving-error.jpg)

编辑器加载了"保存文件时发生错误"消息。

文档编辑服务 无法连接到 web-apps 与 server 层使用 sdk 不一致造成脚本执行错误。

检查 web-apps 层 与 server 层 是否使用相同的 sdk。

## 文件版本已更新

![文件版本已更新](/version-error.png)

编辑器加载了"文件版本已更改。 将重新加载页面"消息。

文档编辑服务 无法打开之前编辑和保存过的文件来进行编辑。

不要忘记，每次编辑和保存文档时，都必须重新生成 document.key。

## 下载失败

![下载失败](/download-error.png)

在编辑器加载过程中会显示"下载失败"消息。

文档编辑服务 无法上传文件进行编辑。

检查 document.url 中指定的文件的链接是否正确。 该链接必须可以从 文档编辑服务访问。

## 令牌无效

![令牌无效](/token-error.png)

编辑器加载了"文档安全令牌没有正确生成。 请联系您的文档服务器管理员"消息。

文档编辑服务 请求加密过的 签名。

检查 令牌 是否正确。 令牌必须根据 JWT（JSON Web 令牌）标准 生成并存在于 ONLYOFFICE 文档服务器 配置中。

## 没有协作编辑

![没有协作编辑](/e-coedit.png)

当不同用户打开文档进行编辑时，无法进行共同编辑。

文档编辑服务 打开 两个不同 的文件进行编辑。

检查 document.key 值是否一致以便能够共同编辑同一个文档。 key 值在保存后必须改变，不同文档必须不同，并且在共同编辑同一个文档时必须相同。

## 文件版本打不开

![文件版本打不开](/changes-url.png)

文档编辑服务 无法打开文件版本。

检查setHistoryData方法中的changesUrl链接是否与previous.url参数对应。



<script setup>
import Footer from '../components/Footer.vue'
</script>

<Footer/>