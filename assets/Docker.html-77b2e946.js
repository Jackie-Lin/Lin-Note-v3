const e=JSON.parse('{"key":"v-b171affc","path":"/%E5%A4%A7%E5%89%8D%E7%AB%AF/%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83/Docker.html","title":"Docker","lang":"zh-CN","frontmatter":{"description":"Docker 1. 基本使用 # 查看 docker 版本 docker --version # 查看 docker-compose 版本 docker-compose --version # 查看 docker 中运行的服务 docker ps # 停止 docker 中的服务, some-mysql 是服务名 docker stop some-mysql # 删除 docker 中的服务 docker rm some-mysql # 获取所有服务 docker network ls # 查看某个服务的详细信息，docker_default 为服务名称 docker network inspect docker_default # 查看服务运行失败的原因 mydb 为服务名称 docker logs -f mydb # 配置镜像加速器 cd etc/docker vim daemon.json # 修改镜像地址为 { \\"registry-mirrors\\": [\\"https://lwviz7xj.mirror.aliyuncs.com\\"] }","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/Lin-Note-v3/%E5%A4%A7%E5%89%8D%E7%AB%AF/%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83/Docker.html"}],["meta",{"property":"og:site_name","content":"Lin-Note"}],["meta",{"property":"og:title","content":"Docker"}],["meta",{"property":"og:description","content":"Docker 1. 基本使用 # 查看 docker 版本 docker --version # 查看 docker-compose 版本 docker-compose --version # 查看 docker 中运行的服务 docker ps # 停止 docker 中的服务, some-mysql 是服务名 docker stop some-mysql # 删除 docker 中的服务 docker rm some-mysql # 获取所有服务 docker network ls # 查看某个服务的详细信息，docker_default 为服务名称 docker network inspect docker_default # 查看服务运行失败的原因 mydb 为服务名称 docker logs -f mydb # 配置镜像加速器 cd etc/docker vim daemon.json # 修改镜像地址为 { \\"registry-mirrors\\": [\\"https://lwviz7xj.mirror.aliyuncs.com\\"] }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-21T16:39:25.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-21T16:39:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Docker\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-21T16:39:25.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1. 基本使用","slug":"_1-基本使用","link":"#_1-基本使用","children":[]}],"git":{"createdTime":1713717565000,"updatedTime":1713717565000,"contributors":[{"name":"Jack_Lin","email":"1351123861@qq.com","commits":1}]},"readingTime":{"minutes":0.45,"words":135},"filePathRelative":"大前端/开发环境/Docker.md","localizedDate":"2024年4月21日","excerpt":"<h1> Docker</h1>\\n<h2> 1. 基本使用</h2>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token comment\\"># 查看 docker 版本</span>\\n<span class=\\"token function\\">docker</span> <span class=\\"token parameter variable\\">--version</span>\\n\\n<span class=\\"token comment\\"># 查看 docker-compose 版本</span>\\n<span class=\\"token function\\">docker-compose</span> <span class=\\"token parameter variable\\">--version</span>\\n\\n<span class=\\"token comment\\"># 查看 docker 中运行的服务</span>\\n<span class=\\"token function\\">docker</span> <span class=\\"token function\\">ps</span>\\n\\n<span class=\\"token comment\\"># 停止 docker 中的服务, some-mysql 是服务名</span>\\n<span class=\\"token function\\">docker</span> stop some-mysql\\n\\n<span class=\\"token comment\\"># 删除 docker 中的服务</span>\\n<span class=\\"token function\\">docker</span> <span class=\\"token function\\">rm</span> some-mysql\\n\\n<span class=\\"token comment\\"># 获取所有服务</span>\\n<span class=\\"token function\\">docker</span> network <span class=\\"token function\\">ls</span>\\n\\n<span class=\\"token comment\\"># 查看某个服务的详细信息，docker_default 为服务名称</span>\\n<span class=\\"token function\\">docker</span> network inspect docker_default\\n\\n<span class=\\"token comment\\"># 查看服务运行失败的原因 mydb 为服务名称</span>\\n<span class=\\"token function\\">docker</span> logs <span class=\\"token parameter variable\\">-f</span> mydb\\n\\n<span class=\\"token comment\\"># 配置镜像加速器</span>\\n<span class=\\"token builtin class-name\\">cd</span> etc/docker\\n<span class=\\"token function\\">vim</span> daemon.json\\n\\n<span class=\\"token comment\\"># 修改镜像地址为</span>\\n<span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token string\\">\\"registry-mirrors\\"</span><span class=\\"token builtin class-name\\">:</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"https://lwviz7xj.mirror.aliyuncs.com\\"</span><span class=\\"token punctuation\\">]</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};