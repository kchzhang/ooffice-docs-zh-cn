import{_ as s}from"./chunks/Footer.b738dbff.js";import{o as n,c as a,b as p,a as l}from"./app.3138923d.js";const o=l(`<h1 id="\u5982\u4F55\u914D\u7F6E\u4EE3\u7406" tabindex="-1">\u5982\u4F55\u914D\u7F6E\u4EE3\u7406 <a class="header-anchor" href="#\u5982\u4F55\u914D\u7F6E\u4EE3\u7406" aria-hidden="true">#</a></h1><h2 id="\u5982\u4F55\u4F7F\u7528" tabindex="-1">\u5982\u4F55\u4F7F\u7528 <a class="header-anchor" href="#\u5982\u4F55\u4F7F\u7528" aria-hidden="true">#</a></h2><ol><li>\u5B89\u88C5 NGINX</li><li>\u5220\u9664\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6<code>/etc/nginx/conf.d/default.conf</code>\u3001<code>/etc/nginx/sites-enabled/default</code></li><li>\u590D\u5236\u914D\u7F6E\u6587\u4EF6\u653E\u5230 <code>/etc/nginx/conf.d/</code> \u8DEF\u5F84\u4E0B</li><li>\u91CD\u542F NGINX <code>sudo service nginx reload</code></li></ol><h2 id="\u5E38\u89C1\u573A\u666F" tabindex="-1">\u5E38\u89C1\u573A\u666F <a class="header-anchor" href="#\u5E38\u89C1\u573A\u666F" aria-hidden="true">#</a></h2><p>\u5F53\u60A8\u9700\u8981\u7B80\u5355\u7684\u5C06\u6D41\u91CF\u91CD\u5B9A\u5411\u5230\u6307\u5B9A\u670D\u52A1\u5668\u65F6\uFF0C\u4F7F\u7528\u6B64\u65B9\u6848\uFF1A <code>default.conf</code>\uFF1A\u914D\u7F6E\u6587\u4EF6<br><code>backendserver-address</code>\uFF1A\u6307\u5B9A\u670D\u52A1\u5668\u5730\u5740\u6216\u8005\u670D\u52A1\u540D</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">#Use this example for proxy traffic to the document server running at &#39;backendserver-address&#39;.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">upstream docservice </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  server backendserver-address</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">map </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">http_host </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">this_host </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">host</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    default </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">http_host</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">map </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">http_x_forwarded_proto </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">the_scheme </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">     default </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">http_x_forwarded_proto</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">scheme</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">map </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">http_x_forwarded_host </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">the_host </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    default </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">http_x_forwarded_host</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">this_host</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">map </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">http_upgrade </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">proxy_connection </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  default upgrade</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#A6ACCD;"> close</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">proxy_set_header Upgrade </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">http_upgrade</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">proxy_set_header Connection </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">proxy_connection</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">proxy_set_header X-Forwarded-Host </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">the_host</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">proxy_set_header X-Forwarded-Proto </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">the_scheme</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">proxy_set_header Host            </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">proxy_host</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">proxy_set_header X-Real-IP       </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">remote_addr</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">proxy_set_header X-Forwarded-For </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">proxy_add_x_forwarded_for</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">server </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  listen 0.0.0.0:80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  listen </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">::</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">:80 default_server</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  server_tokens off</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  location / </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_pass http://docservice</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_http_version 1.1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4EE3\u7406-https-\u5230-http" tabindex="-1">\u4EE3\u7406 HTTPS \u5230 HTTP <a class="header-anchor" href="#\u4EE3\u7406-https-\u5230-http" aria-hidden="true">#</a></h2><p><code>default.conf</code>\uFF1A\u914D\u7F6E\u6587\u4EF6<br><code>backendserver-address</code>\uFF1A\u6307\u5B9A\u670D\u52A1\u5668\u5730\u5740\u6216\u8005\u670D\u52A1\u540D</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Use this example for proxy HTTPS traffic to the document server running at &#39;backendserver-address&#39;.</span></span>
<span class="line"><span style="color:#676E95;"># Replace {{SSL_CERTIFICATE_PATH}} with the path to the ssl certificate file</span></span>
<span class="line"><span style="color:#676E95;"># Replace {{SSL_KEY_PATH}} with the path to the ssl private key file</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">upstream docservice </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  server backendserver-address</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">map </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">http_host </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">this_host </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">host</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    default </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">http_host</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">map </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">http_x_forwarded_proto </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">the_scheme </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">     default </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">http_x_forwarded_proto</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">scheme</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">map </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">http_x_forwarded_host </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">the_host </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    default </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">http_x_forwarded_host</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">this_host</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">map </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">http_upgrade </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">proxy_connection </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  default upgrade</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#A6ACCD;"> close</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">proxy_set_header Upgrade </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">http_upgrade</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">proxy_set_header Connection </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">proxy_connection</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">proxy_set_header X-Forwarded-Host </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">the_host</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">proxy_set_header X-Forwarded-Proto </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">the_scheme</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">proxy_set_header Host            </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">proxy_host</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">proxy_set_header X-Real-IP       </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">remote_addr</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">proxy_set_header X-Forwarded-For </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">proxy_add_x_forwarded_for</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">## Normal HTTP host</span></span>
<span class="line"><span style="color:#A6ACCD;">server </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  listen 0.0.0.0:80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  listen </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">::</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">:80 default_server</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  server_name _</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  server_tokens off</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">## Redirects all traffic to the HTTPS host</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> 301 https://</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">server_name:443</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">request_uri</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">server </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  listen 0.0.0.0:443 ssl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  listen </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">::</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">:443 ssl default_server</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  server_tokens off</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  root /usr/share/nginx/html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">## Strong SSL Security</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">## https://raymii.org/s/tutorials/Strong_SSL_Security_On_nginx.html</span></span>
<span class="line"><span style="color:#A6ACCD;">  ssl on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ssl_certificate {{SSL_CERTIFICATE_PATH}}</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ssl_certificate_key {{SSL_KEY_PATH}}</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ssl_verify_client off</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  ssl_ciphers </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  ssl_protocols  TLSv1 TLSv1.1 TLSv1.2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ssl_session_cache  builtin:1000  shared:SSL:10m</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  ssl_prefer_server_ciphers   on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">## [Optional] Before enabling Strict-Transport-Security headers, ensure your server is properly configured for SSL.</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">## This directive informs the browser to always use HTTPS. For more info see:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">## - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># add_header Strict-Transport-Security &quot;max-age=31536000; includeSubDomains&quot; always;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># add_header X-Frame-Options SAMEORIGIN;</span></span>
<span class="line"><span style="color:#A6ACCD;">  add_header X-Content-Type-Options nosniff</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">## [Optional] If your certficate has OCSP, enable OCSP stapling to reduce the overhead and latency of running SSL.</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">## Replace with your ssl_trusted_certificate. For more info see:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">## - https://medium.com/devops-programming/4445f4862461</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">## - https://www.ruby-forum.com/topic/4419319</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">## - https://www.digitalocean.com/community/tutorials/how-to-configure-ocsp-stapling-on-apache-and-nginx</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># ssl_stapling on;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># ssl_stapling_verify on;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># ssl_trusted_certificate /etc/nginx/ssl/stapling.trusted.crt;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># resolver 208.67.222.222 208.67.222.220 valid=300s; # Can change to your DNS resolver if desired</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># resolver_timeout 10s;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">## [Optional] Generate a stronger DHE parameter:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">##   cd /etc/ssl/certs</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">##   sudo openssl dhparam -out dhparam.pem 4096</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">##</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># ssl_dhparam /etc/ssl/certs/dhparam.pem;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  location / </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_pass http://docservice</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_http_version 1.1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4EE3\u7406\u865A\u62DF\u8DEF\u5F84" tabindex="-1">\u4EE3\u7406\u865A\u62DF\u8DEF\u5F84 <a class="header-anchor" href="#\u4EE3\u7406\u865A\u62DF\u8DEF\u5F84" aria-hidden="true">#</a></h2><p>\u5F53\u60A8\u9700\u8981\u5C06\u4E3B\u673A\u4E0A\u7684\u67D0\u4E2A\u76EE\u5F55\u6620\u5C04\u5230 Web \u670D\u52A1\u5668\u4E2D\u6307\u5B9A\u7684\u8DEF\u5F84\u65F6\uFF0C\u8FD9\u662F\u4E00\u4E2A\u5408\u9002\u7684\u573A\u666F\uFF1A <code>default.conf</code>\uFF1A\u914D\u7F6E\u6587\u4EF6<br><code>backendserver-address</code>\uFF1A\u6307\u5B9A\u670D\u52A1\u5668\u5730\u5740\u6216\u8005\u670D\u52A1\u540D</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">#Use this example for the proxy document server running at &#39;backendserver-address&#39;</span></span>
<span class="line"><span style="color:#676E95;"># into the virtual directory &#39;documentserver-virtual-path&#39;.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">upstream docservice </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  server backendserver-address</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">map </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">http_x_forwarded_proto </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">the_scheme </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">     default </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">http_x_forwarded_proto</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">scheme</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">map </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">http_x_forwarded_host </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">the_host </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    default </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">http_x_forwarded_host</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">host:</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">server_port</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">map </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">http_upgrade </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">proxy_connection </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  default upgrade</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#A6ACCD;"> close</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">proxy_set_header Upgrade </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">http_upgrade</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">proxy_set_header Connection </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">proxy_connection</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">proxy_set_header X-Forwarded-Host </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">the_host/documentserver-virtual-path</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">proxy_set_header X-Forwarded-Proto </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">the_scheme</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">proxy_set_header Host            </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">proxy_host</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">proxy_set_header X-Real-IP       </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">remote_addr</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">proxy_set_header X-Forwarded-For </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">proxy_add_x_forwarded_for</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">server </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  listen 0.0.0.0:80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  listen </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">::</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">:80 default_server</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  server_tokens off</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  location /documentserver-virtual-path/ </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_pass http://docservice/</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_http_version 1.1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4E0E\u5E94\u7528\u96C6\u6210-\u975E\u865A\u62DF\u8DEF\u5F84" tabindex="-1">\u4E0E\u5E94\u7528\u96C6\u6210 (\u975E\u865A\u62DF\u8DEF\u5F84) <a class="header-anchor" href="#\u4E0E\u5E94\u7528\u96C6\u6210-\u975E\u865A\u62DF\u8DEF\u5F84" aria-hidden="true">#</a></h2><p>\u5047\u8BBE\u4F60\u5DF2\u7ECF\u6709\u4E00\u4E2A\u5E94\u7528\u5730\u5740\u4E3A <code>https://www.A.com</code>\uFF0C\u540C\u65F6\u60F3\u628A\u7F16\u8F91\u5668\u90E8\u7F72\u5728\u8FD9\u4E2A\u57DF\u540D\u4E0B\uFF0C\u8FD9\u662F\u4E00\u4E2A\u5408\u9002\u7684\u573A\u666F\uFF1A</p><p><code>https://www.A.com/7.4.0-163/web-apps/apps/api/documents/api.js</code></p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># backendserver-address \u6362\u6210\u4F60\u7684\u670D\u52A1\u540D\u6216\u8005\u5730\u5740</span></span>
<span class="line"><span style="color:#A6ACCD;">upstream docservice </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  server backendserver-address</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">map </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">http_x_forwarded_proto </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">the_scheme </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">     default </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">http_x_forwarded_proto</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">scheme</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">map </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">http_x_forwarded_host </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">the_host </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    default </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">http_x_forwarded_host</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">host</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">map </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">http_upgrade </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">proxy_connection </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  default upgrade</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#A6ACCD;"> close</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">proxy_set_header Upgrade </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">http_upgrade</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">proxy_set_header Connection </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">proxy_connection</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">proxy_set_header X-Forwarded-Host </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">the_host</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">proxy_set_header X-Forwarded-Proto </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">the_scheme</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">proxy_set_header Host            </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">proxy_host</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">proxy_set_header X-Real-IP       </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">remote_addr</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">proxy_set_header X-Forwarded-For </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">proxy_add_x_forwarded_for</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">server </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  listen 0.0.0.0:80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  listen </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">::</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">:80 default_server</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  server_tokens off</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># \u4F60\u7684 office \u7248\u672C\u53F7</span></span>
<span class="line"><span style="color:#A6ACCD;">  location /7.4.0-163/ </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_pass http://docservice</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_http_version 1.1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  location /cache/ </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_pass http://docservice</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_http_version 1.1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,16),F=JSON.parse('{"title":"\u5982\u4F55\u914D\u7F6E\u4EE3\u7406","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5982\u4F55\u4F7F\u7528","slug":"\u5982\u4F55\u4F7F\u7528","link":"#\u5982\u4F55\u4F7F\u7528","children":[]},{"level":2,"title":"\u5E38\u89C1\u573A\u666F","slug":"\u5E38\u89C1\u573A\u666F","link":"#\u5E38\u89C1\u573A\u666F","children":[]},{"level":2,"title":"\u4EE3\u7406 HTTPS \u5230 HTTP","slug":"\u4EE3\u7406-https-\u5230-http","link":"#\u4EE3\u7406-https-\u5230-http","children":[]},{"level":2,"title":"\u4EE3\u7406\u865A\u62DF\u8DEF\u5F84","slug":"\u4EE3\u7406\u865A\u62DF\u8DEF\u5F84","link":"#\u4EE3\u7406\u865A\u62DF\u8DEF\u5F84","children":[]},{"level":2,"title":"\u4E0E\u5E94\u7528\u96C6\u6210 (\u975E\u865A\u62DF\u8DEF\u5F84)","slug":"\u4E0E\u5E94\u7528\u96C6\u6210-\u975E\u865A\u62DF\u8DEF\u5F84","link":"#\u4E0E\u5E94\u7528\u96C6\u6210-\u975E\u865A\u62DF\u8DEF\u5F84","children":[]}],"relativePath":"proxy-conf/index.md","lastUpdated":1713854479000}'),e={name:"proxy-conf/index.md"},C=Object.assign(e,{setup(t){return(r,c)=>(n(),a("div",null,[o,p(s)]))}});export{F as __pageData,C as default};
