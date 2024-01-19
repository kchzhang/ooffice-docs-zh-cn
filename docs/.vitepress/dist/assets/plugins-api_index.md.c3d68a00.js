import{_ as s}from"./chunks/Footer.6ce72f2c.js";import{o as n,c as a,b as l,a as p}from"./app.682700cd.js";const o=p(`<h2 id="\u63D2\u4EF6\u5165\u95E8" tabindex="-1">\u63D2\u4EF6\u5165\u95E8 <a class="header-anchor" href="#\u63D2\u4EF6\u5165\u95E8" aria-hidden="true">#</a></h2><ol><li>\u521B\u5EFA\u5DE5\u7A0B\u540D\u79F0 example <a href="../settings.zip.png" download="settings.zip">\u4E0B\u8F7D\u4F8B\u5B50</a></li></ol><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  config.json</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  index.html</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  README.md</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500resources</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u251C\u2500dark</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2502      icon.png</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2502      icon@1.25x.png</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2502      icon@1.5x.png</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2502      icon@1.75x.png</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2502      icon@2x.png</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2514\u2500light</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502          icon.png</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502          icon@1.25x.png</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502          icon@1.5x.png</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502          icon@1.75x.png</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502          icon@2x.png</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500scripts</span></span>
<span class="line"><span style="color:#A6ACCD;">        code.js</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="2"><li>\u7F16\u5199\u4EE3\u7801 <ul><li>\u5728 code.js \u7F16\u8F91\u4F60\u7684\u4E1A\u52A1\u903B\u8F91</li></ul></li><li>\u90E8\u7F72\u5230\u955C\u50CF</li></ol><div class="language-sh"><button class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#A6ACCD;">docker cp /example </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u5BB9\u5668ID</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">:/var/www/onlyoffice/documentserver/sdkjs-plugins/</span></span>
<span class="line"></span></code></pre></div><ol start="4"><li>\u5236\u4F5C\u65B0\u955C\u50CF</li></ol><div class="language-sh"><button class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#A6ACCD;">docker commit -p -a </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Knox</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> -m </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">plugins</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u5BB9\u5668ID</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> ooffice:v1</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">\u6E29\u99A8\u63D0\u793A</p><p>\u5728\u524D\u7AEF\u96C6\u6210 config \u4E2D\u5F00\u542F\u63D2\u4EF6\u5C5E\u6027</p><div class="language-json"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">editorConfig</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">customization</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">plugins</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">        ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></div>`,8),C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u63D2\u4EF6\u5165\u95E8","slug":"\u63D2\u4EF6\u5165\u95E8","link":"#\u63D2\u4EF6\u5165\u95E8","children":[]}],"relativePath":"plugins-api/index.md","lastUpdated":1675214042000}'),e={name:"plugins-api/index.md"},A=Object.assign(e,{setup(c){return(t,r)=>(n(),a("div",null,[o,l(s)]))}});export{C as __pageData,A as default};
