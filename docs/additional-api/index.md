## 命令服务

对于与 文档命令服务 的交互，使用POST请求。 请求参数在请求正文中以 JSON 格式输入请求被发送到 https://documentserver/coauthoring/CommandService.ashx, 其中 documentserver 是安装了ONLYOFFICE 文档服务器的服务器的名称

从 8.1 版开始，建议将 shardkey 参数添加到 URL QueryString，其中包含 key 值。 例如，?shardkey=Khirz6zTPdfd7。这允许您对请求进行负载平衡。