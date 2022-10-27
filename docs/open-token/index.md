## 开启token验证

```sh
 docker run --name=ooffice -i -t -d -p 8080:80 -e JWT_ENABLED=true --restart=always knoxzhang/oo-ce-docker-license
```

::: tip 温馨提示
7.1 版本之后 生成的 token的入参与前端集成的 config 格式要严格保持一致

:::

例如

config

```json
    {
        "document": {
            "fileType": "docx",
            "key": "apiwhec97b7f2-9f8b-4785-a68a-439de62e670c",
            "permissions": {},
            "title": "Example Document Title.docx",
            "url": "https:\/\/d2nlctn12v279m.cloudfront.net\/assets\/docs\/samples\/demo.docx"
        },
        "documentType": "word", 
        "editorConfig": {
            "callbackUrl": "https:\/\/api.onlyoffice.com\/editors\/callback",
            "customization": {
                "anonymous": {
                    "request": false
                }
            }
        },
        "height": "100%",
        "token": "ew0KICAidHlwIjogIkpXVCIsDQogICJhbGciOiAiSFMyNTYiDQp9.ew0KICAiZG9jdW1lbnQiOiB7DQogICAgImZpbGVUeXBlIjogImRvY3giLA0KICAgICJrZXkiOiAiYXBpd2hlYzk3YjdmMi05ZjhiLTQ3ODUtYTY4YS00MzlkZTYyZTY3MGMiLA0KICAgICJwZXJtaXNzaW9ucyI6IHt9LA0KICAgICJ0aXRsZSI6ICJFeGFtcGxlIERvY3VtZW50IFRpdGxlLmRvY3giLA0KICAgICJ1cmwiOiAiaHR0cHM6Ly9kMm5sY3RuMTJ2Mjc5bS5jbG91ZGZyb250Lm5ldC9hc3NldHMvZG9jcy9zYW1wbGVzL2RlbW8uZG9jeCINCiAgfSwNCiAgImRvY3VtZW50VHlwZSI6ICJ3b3JkIiwNCiAgImVkaXRvckNvbmZpZyI6IHsNCiAgICAiY2FsbGJhY2tVcmwiOiAiaHR0cHM6Ly9hcGkub25seW9mZmljZS5jb20vZWRpdG9ycy9jYWxsYmFjayIsDQogICAgImN1c3RvbWl6YXRpb24iOiB7DQogICAgICAiYW5vbnltb3VzIjogew0KICAgICAgICAicmVxdWVzdCI6IGZhbHNlDQogICAgICB9DQogICAgfQ0KICB9LA0KICAiaGVpZ2h0IjogIjEwMCUiLA0KICAid2lkdGgiOiAiMTAwJSINCn0.pVqCERdbkcvbl6s8W-0k8QngLRCYNyhW0IB8i7JxWwk", 
        "width": "100%"
    }
```

token
```json

 {
        "document": {
            "fileType": "docx",
            "key": "apiwhec97b7f2-9f8b-4785-a68a-439de62e670c",
            "permissions": {},
            "title": "Example Document Title.docx",
            "url": "https:\/\/d2nlctn12v279m.cloudfront.net\/assets\/docs\/samples\/demo.docx"
        },
        "documentType": "word", 
        "editorConfig": {
            "callbackUrl": "https:\/\/api.onlyoffice.com\/editors\/callback",
            "customization": {
                "anonymous": {
                    "request": false
                }
            }
        },
        "height": "100%",
        "width": "100%"
    }

```










<script setup>
import Footer from '../components/Footer.vue'
</script>

<Footer/>