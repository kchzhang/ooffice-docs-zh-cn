# Docker 文档

## 介绍

#### 概要

- 允许您在本地服务器上安装并将在线编辑器与您的 Web 应用程序集成。
- 无限制连接数
- 支持移动端
- <a target="_blank" href="https://hub.docker.com/r/knoxzhang/oo-ce-docker-license">镜像地址</a>

#### 功能性

- 文档编辑器 
- 电子表格编辑器
- 演示文稿编辑器
- 移动网络编辑器
- 协作编辑
- 支持所有流行格式：DOC、DOCX、TXT、ODT、RTF、ODP、EPUB、ODS、XLS、XLSX、CSV、PPTX、HTML

## 服务器配置

- CPU 双核 2 GHz或更高
- 内存 2 GB或更多
- 硬盘至少 40 GB的可用空间
- 内核版本为3.10或更高版本的amd64 Linux 发行版
- 其他要求：
  - Docker：版本1.10或更高版本


## 安装

::: tip 温馨提示
您需要安装最新的 Docker 版本。如果您没有它，请参阅 <a target="_blank" href="https://docs.docker.com/get-docker/#installation">Docker</a> 网站上的安装部分以了解如何获取它。
:::



#### 安装 Docker 后，运行它并执行以下命令：

```sh

sudo docker run --name=ooffice -i -t -d -p 8080:80 --restart=always knoxzhang/oo-ce-docker-license:8.0.0.1

```

#### 挂载数据

```sh

sudo docker run --name=ooffice -i -t -d -p 8080:80 --restart=always \
    -v /app/onlyoffice/DocumentServer/logs:/var/log/onlyoffice  \
    -v /app/onlyoffice/DocumentServer/data:/var/www/onlyoffice/Data  \
    -v /app/onlyoffice/DocumentServer/lib:/var/lib/onlyoffice \
    -v /app/onlyoffice/DocumentServer/db:/var/lib/postgresql \
    knoxzhang/oo-ce-docker-license:8.0.0.1

```

#### 可用的配置参数

下面是可以使用环境变量设置的参数的完整列表

- <b>ONLYOFFICE_HTTPS_HSTS_ENABLED</b> : 用于关闭 HSTS 配置的高级配置选项。仅在使用 SSL 时适用。默认为true
- <b>ONLYOFFICE_HTTPS_HSTS_MAXAGE</b> : 用于在 onlyoffice NGINX vHost 配置中设置 HSTS max-age 的高级配置选项。仅在使用 SSL 时适用。默认为31536000
- <b>SSL_CERTIFICATE_PATH</b> : 要使用的 SSL 证书的路径。默认为/var/www/onlyoffice/Data/certs/tls.crt
- <b>SSL_KEY_PATH</b> : SSL 证书私钥的路径。默认为/var/www/onlyoffice/Data/certs/tls.key
- <b>SSL_DHPARAM_PATH</b> : Diffie-Hellman 参数的路径。默认为/var/www/onlyoffice/Data/certs/dhparam.pem
- <b>SSL_VERIFY_CLIENT</b> : 启用使用CA_CERTIFICATES_PATH file. 默认为false
- <b>DB_TYPE</b> : 数据库类型 支持的值为postgres,mariadb或mysql 默认为postgres
- <b>DB_HOST</b> : 运行数据库服务器的主机的 IP 地址或名称
- <b>DB_PORT</b> : 数据库服务器端口号
- <b>DB_NAME</b> : 要在映像启动时创建的数据库的名称
- <b>DB_USER</b> : 具有数据库帐户超级用户权限的新用户名
- <b>DB_PWD</b> : 为数据库帐户设置的密码
- <b>AMQP_URI</b> : 连接到消息代理服务器的AMQP URI
- <b>AMQP_TYPE</b> : 消息代理类型。支持的值为rabbitmq或activemq。默认为rabbitmq
- <b>REDIS_SERVER_HOST</b> : 运行 Redis 服务器的主机的 IP 地址或名称
- <b>REDIS_SERVER_PORT</b> : Redis 服务器端口号
- <b>NGINX_WORKER_PROCESSES</b> : 定义 NGINX 工作进程的数量
- <b>NGINX_WORKER_CONNECTIONS</b> : 设置 NGINX 工作进程可以同时打开的最大连接数
- <b>JWT_ENABLED</b> : 指定ONLYOFFICE Docs启用 JSON Web 令牌验证。默认为false
- <b>JWT_SECRET</b> : 定义密钥以验证对ONLYOFFICE Docs的请求中的 JSON Web 令牌。默认为secret
- <b>JWT_HEADER</b> : 定义将用于发送 JSON Web 令牌的 HTTP 标头。默认为Authorization
- <b>JWT_IN_BODY </b> : 指定在ONLYOFFICE Docs的请求正文中启用令牌验证。默认为false
- <b>USE_UNAUTHORIZED_STORAGE</b> : true 如果您的存储服务器使用自签名证书，则设置为，例如 Nextcloud。默认为false
- <b>GENERATE_FONTS</b> : true 每次开始时，重新生成字体列表和字体缩略图等。默认为true
- <b>METRICS_ENABLED </b> : 为ONLYOFFICE Docs指定启用 StatsD 默认为false
- <b>METRICS_HOST</b> : 定义 StatsD 监听主机。默认为localhost
- <b>METRICS_PORT</b> : 定义 StatsD 监听端口。默认为8125
- <b>METRICS_PREFIX</b> : 定义后端服务的 StatsD 指标前缀。默认为ds..
- <b>LETS_ENCRYPT_DOMAIN</b> : 定义 Let's Encrypt 证书的域
- <b>LETS_ENCRYPT_MAIL</b> : 定义 Let's Encrypt 证书的域管理员邮件地址


```sh
# 启用令牌
sudo docker run --name=ooffice -i -t -d -p 8080:80 --restart=always \
    -e JWT_ENABLED=true \
    knoxzhang/oo-ce-docker-license

```





<script setup>
import Footer from '../components/Footer.vue'
</script>

<Footer/>