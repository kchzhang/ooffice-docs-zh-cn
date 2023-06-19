# 如何配置代理

## 如何使用
1. 安装 NGINX
2. 删除默认配置文件`/etc/nginx/conf.d/default.conf`、`/etc/nginx/sites-enabled/default`
3. 复制配置文件放到 `/etc/nginx/conf.d/` 路径下
4. 重启 NGINX `sudo service nginx reload`

## 常见场景

当您需要简单的将流量重定向到指定服务器时，使用此方案：
`default.conf`：配置文件<br/>
`backendserver-address`：指定服务器地址或者服务名
```sh
#Use this example for proxy traffic to the document server running at 'backendserver-address'.

upstream docservice {
  server backendserver-address;
}

map $http_host $this_host {
    "" $host;
    default $http_host;
}

map $http_x_forwarded_proto $the_scheme {
     default $http_x_forwarded_proto;
     "" $scheme;
}

map $http_x_forwarded_host $the_host {
    default $http_x_forwarded_host;
    "" $this_host;
}

map $http_upgrade $proxy_connection {
  default upgrade;
  "" close;
}

proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection $proxy_connection;
proxy_set_header X-Forwarded-Host $the_host;
proxy_set_header X-Forwarded-Proto $the_scheme;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;


server {
  listen 0.0.0.0:80;
  listen [::]:80 default_server;
  server_tokens off;

  location / {
    proxy_pass http://docservice;
    proxy_http_version 1.1;
  }
}
```
## 代理 HTTPS 到 HTTP
`default.conf`：配置文件<br/>
`backendserver-address`：指定服务器地址或者服务名
```sh
# Use this example for proxy HTTPS traffic to the document server running at 'backendserver-address'.
# Replace {{SSL_CERTIFICATE_PATH}} with the path to the ssl certificate file
# Replace {{SSL_KEY_PATH}} with the path to the ssl private key file

upstream docservice {
  server backendserver-address;
}

map $http_host $this_host {
    "" $host;
    default $http_host;
}

map $http_x_forwarded_proto $the_scheme {
     default $http_x_forwarded_proto;
     "" $scheme;
}

map $http_x_forwarded_host $the_host {
    default $http_x_forwarded_host;
    "" $this_host;
}

map $http_upgrade $proxy_connection {
  default upgrade;
  "" close;
}

proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection $proxy_connection;
proxy_set_header X-Forwarded-Host $the_host;
proxy_set_header X-Forwarded-Proto $the_scheme;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

## Normal HTTP host
server {
  listen 0.0.0.0:80;
  listen [::]:80 default_server;
  server_name _;
  server_tokens off;

  ## Redirects all traffic to the HTTPS host
  return 301 https://$server_name:443$request_uri;
}

server {
  listen 0.0.0.0:443 ssl;
  listen [::]:443 ssl default_server;
  server_tokens off;
  root /usr/share/nginx/html;

  ## Strong SSL Security
  ## https://raymii.org/s/tutorials/Strong_SSL_Security_On_nginx.html
  ssl on;
  ssl_certificate {{SSL_CERTIFICATE_PATH}};
  ssl_certificate_key {{SSL_KEY_PATH}};
  ssl_verify_client off;

  ssl_ciphers "EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH";

  ssl_protocols  TLSv1 TLSv1.1 TLSv1.2;
  ssl_session_cache  builtin:1000  shared:SSL:10m;

  ssl_prefer_server_ciphers   on;

  ## [Optional] Before enabling Strict-Transport-Security headers, ensure your server is properly configured for SSL.
  ## This directive informs the browser to always use HTTPS. For more info see:
  ## - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  # add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
  # add_header X-Frame-Options SAMEORIGIN;
  add_header X-Content-Type-Options nosniff;

  ## [Optional] If your certficate has OCSP, enable OCSP stapling to reduce the overhead and latency of running SSL.
  ## Replace with your ssl_trusted_certificate. For more info see:
  ## - https://medium.com/devops-programming/4445f4862461
  ## - https://www.ruby-forum.com/topic/4419319
  ## - https://www.digitalocean.com/community/tutorials/how-to-configure-ocsp-stapling-on-apache-and-nginx
  # ssl_stapling on;
  # ssl_stapling_verify on;
  # ssl_trusted_certificate /etc/nginx/ssl/stapling.trusted.crt;
  # resolver 208.67.222.222 208.67.222.220 valid=300s; # Can change to your DNS resolver if desired
  # resolver_timeout 10s;

  ## [Optional] Generate a stronger DHE parameter:
  ##   cd /etc/ssl/certs
  ##   sudo openssl dhparam -out dhparam.pem 4096
  ##
  # ssl_dhparam /etc/ssl/certs/dhparam.pem;

  location / {
    proxy_pass http://docservice;
    proxy_http_version 1.1;
  }
}
```

## 代理虚拟路径
当您需要将主机上的某个目录映射到 Web 服务器中指定的路径时，这是一个合适的场景：
`default.conf`：配置文件<br/>
`backendserver-address`：指定服务器地址或者服务名
```sh
#Use this example for the proxy document server running at 'backendserver-address'
# into the virtual directory 'documentserver-virtual-path'.

upstream docservice {
  server backendserver-address;
}

map $http_x_forwarded_proto $the_scheme {
     default $http_x_forwarded_proto;
     "" $scheme;
}

map $http_x_forwarded_host $the_host {
    default $http_x_forwarded_host;
    "" $host;
}

map $http_upgrade $proxy_connection {
  default upgrade;
  "" close;
}

proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection $proxy_connection;
proxy_set_header X-Forwarded-Host $the_host/documentserver-virtual-path;
proxy_set_header X-Forwarded-Proto $the_scheme;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;


server {
  listen 0.0.0.0:80;
  listen [::]:80 default_server;
  server_tokens off;

  location /documentserver-virtual-path/ {
    proxy_pass http://docservice/;
    proxy_http_version 1.1;
  }
}
```

## 与应用集成 (非虚拟路径)
假设你已经有一个应用地址为 `https://www.A.com`，同时想把编辑器部署在这个域名下，这是一个合适的场景：

`https://www.A.com/7.4.0-163/web-apps/apps/api/documents/api.js`
```sh
# backendserver-address 换成你的服务名或者地址
upstream docservice {
  server backendserver-address;
}

map $http_x_forwarded_proto $the_scheme {
     default $http_x_forwarded_proto;
     "" $scheme;
}

map $http_x_forwarded_host $the_host {
    default $http_x_forwarded_host;
    "" $host;
}

map $http_upgrade $proxy_connection {
  default upgrade;
  "" close;
}

proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection $proxy_connection;
# proxy_set_header X-Forwarded-Host $the_host/7.4.0-163;
proxy_set_header X-Forwarded-Proto $the_scheme;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;


server {
  listen 0.0.0.0:80;
  listen [::]:80 default_server;
  server_tokens off;

  # 你的 office 版本号
  location /7.4.0-163/ {
    proxy_pass http://docservice;
    proxy_http_version 1.1;
  }

  location /cache/ {
    proxy_pass http://docservice;
    proxy_http_version 1.1;
  }
}
```
<script setup>
import Footer from '../components/Footer.vue'
</script>

<Footer/>