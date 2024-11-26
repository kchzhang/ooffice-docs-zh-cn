ONLYOFFICE 文档服务器 使用 按 JSON Web 令牌 标准生成的令牌。

## 签名

对于验证设置，需要编辑位于配置文件中的 `secret key` 和 `token` 参数，配置文件可在以下路径找到(或创建)：

对于 Linux - `/etc/onlyoffice/documentserver/local.json`。

对于 Windows - `%ProgramFiles%\ONLYOFFICE\DocumentServer\config\local.json`。

对于 RPM/DEB 软件包：

```sh
systemctl restart ds-*
```

对于 Docker:

```sh
supervisorctl restart all
```

示例 local.json 配置

```json
{
  "services": {
    "CoAuthoring": {
      "secret": {
        "inbox": {
          "string": "secret"
        },
        "outbox": {
          "string": "secret"
        }
      },
      "token": {
        "enable": {
          "browser": true,
          "request": {
            "inbox": true,
            "outbox": true
          }
        }
      }
    }
  }
}
```

### 用于生成签名的代码示例

#### c#

```c#
public static class JwtManager
{
    private static readonly string Secret;
    public static readonly bool Enabled;

    static JwtManager()
    {
        Secret = WebConfigurationManager.AppSettings["files.docservice.secret"] ?? "";
        Enabled = !string.IsNullOrEmpty(Secret);
    }

    public static string Encode(IDictionary<string, object> payload)
    {
        var encoder = new JwtEncoder(new HMACSHA256Algorithm(),
                                        new JsonNetSerializer(),
                                        new JwtBase64UrlEncoder());
        return encoder.Encode(payload, Secret);
    }
}
```

#### Java

```java
public static String CreateToken(Map payloadClaims)
{
    try
    {
        String secret = ConfigManager.GetProperty("files.docservice.secret");
        Signer signer = HMACSigner.newSHA256Signer(secret);
        JWT jwt = new JWT();
        for (String key : payloadClaims.keySet())
        {
            jwt.addClaim(key, payloadClaims.get(key));
        }
        return JWT.getEncoder().encode(jwt, signer);
    }
    catch (Exception e)
    {
        return "";
    }
}
```

#### Nodejs
```js
var configServer = require('config').get('server');
var cfgSignatureSecretExpiresIn = configServer.get('token.expiresIn');
var cfgSignatureSecret = configServer.get('token.secret');
var cfgSignatureSecretAlgorithmRequest = configServer.get('token.algorithmRequest');

documentService.getToken = function (data) {
    var options = {algorithm: cfgSignatureSecretAlgorithmRequest, expiresIn: cfgSignatureSecretExpiresIn};
    return jwt.sign(data, cfgSignatureSecret, options);
};
```



<script setup>
import Footer from '../components/Footer.vue'
</script>

<Footer/>