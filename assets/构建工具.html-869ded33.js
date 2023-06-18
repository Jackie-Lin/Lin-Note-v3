const n=JSON.parse(`{"key":"v-6592ca76","path":"/%E5%A4%A7%E5%89%8D%E7%AB%AF/Vue3/%E6%9E%84%E5%BB%BA%E5%B7%A5%E5%85%B7.html","title":"构建工具","lang":"zh-CN","frontmatter":{"description":"构建工具 Vue-Router 有哪些变化? 引入方式变化, routes 属性加入强制判断 如果页面上没有对应的命名式路由, 如果像推送到路由上去, 原先的做法会默认导航到默认路径 ('/') 现在 4.x 以上版本不会有这个行为, 而是去加载一个空的组件, 且在控制台抛出异常 不会再给默认路径添加 /, redirect重定向需要写全路径 // router/index.js // Vue2 的配置方法, 的情况下, path: '', 会在 about 前面加 / // 比如访问 www.baodu.com/#/path 会默认转到 www.baodu.com/#/path/about // 但是, 在 Vue3 以后就不会默认加 / { path: \\"/path\\", name: \\"Home\\", component: HomeView, children: [ { path: \\"\\", redirect: \\"about\\" }, // vue2 -&gt; /path/about { path: \\"about\\", component: About1 }, ], } // Vue3 的配置 // 写全路径后, 访问 www.baodu.com/#/path 会默认转到 www.baodu.com/#/path/about // 只写 about 就只会跳到 about, 访问 www.baodu.com/#/path 会默认转到 www.baodu.com/#/about { path: \\"/path\\", name: \\"Home\\", component: HomeView, children: [ { path: \\"\\", redirect: \\"/path/about\\" }, { path: \\"about\\", component: About1 }, ], }","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/Lin-Note-v3/%E5%A4%A7%E5%89%8D%E7%AB%AF/Vue3/%E6%9E%84%E5%BB%BA%E5%B7%A5%E5%85%B7.html"}],["meta",{"property":"og:site_name","content":"Lin-Note"}],["meta",{"property":"og:title","content":"构建工具"}],["meta",{"property":"og:description","content":"构建工具 Vue-Router 有哪些变化? 引入方式变化, routes 属性加入强制判断 如果页面上没有对应的命名式路由, 如果像推送到路由上去, 原先的做法会默认导航到默认路径 ('/') 现在 4.x 以上版本不会有这个行为, 而是去加载一个空的组件, 且在控制台抛出异常 不会再给默认路径添加 /, redirect重定向需要写全路径 // router/index.js // Vue2 的配置方法, 的情况下, path: '', 会在 about 前面加 / // 比如访问 www.baodu.com/#/path 会默认转到 www.baodu.com/#/path/about // 但是, 在 Vue3 以后就不会默认加 / { path: \\"/path\\", name: \\"Home\\", component: HomeView, children: [ { path: \\"\\", redirect: \\"about\\" }, // vue2 -&gt; /path/about { path: \\"about\\", component: About1 }, ], } // Vue3 的配置 // 写全路径后, 访问 www.baodu.com/#/path 会默认转到 www.baodu.com/#/path/about // 只写 about 就只会跳到 about, 访问 www.baodu.com/#/path 会默认转到 www.baodu.com/#/about { path: \\"/path\\", name: \\"Home\\", component: HomeView, children: [ { path: \\"\\", redirect: \\"/path/about\\" }, { path: \\"about\\", component: About1 }, ], }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-18T15:20:10.000Z"}],["meta",{"property":"article:author","content":"Mr.Lin"}],["meta",{"property":"article:modified_time","content":"2023-06-18T15:20:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"构建工具\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-06-18T15:20:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Lin\\",\\"url\\":\\"https://mrhope.site\\"}]}"]]},"headers":[{"level":2,"title":"Vue-Router 有哪些变化?","slug":"vue-router-有哪些变化","link":"#vue-router-有哪些变化","children":[]},{"level":2,"title":"Vuex 的有哪些变化?","slug":"vuex-的有哪些变化","link":"#vuex-的有哪些变化","children":[]},{"level":2,"title":"新一代的状态管理工具 Pinia","slug":"新一代的状态管理工具-pinia","link":"#新一代的状态管理工具-pinia","children":[{"level":3,"title":"Vuex 相关知识回顾","slug":"vuex-相关知识回顾","link":"#vuex-相关知识回顾","children":[]},{"level":3,"title":"Vuex、Pinia、原生 三种实现状态管理的方法","slug":"vuex、pinia、原生-三种实现状态管理的方法","link":"#vuex、pinia、原生-三种实现状态管理的方法","children":[]},{"level":3,"title":"Pinia 核心概念","slug":"pinia-核心概念","link":"#pinia-核心概念","children":[]}]}],"git":{"createdTime":1687101610000,"updatedTime":1687101610000,"contributors":[{"name":"Jack_Lin","email":"1351123861@qq.com","commits":1}]},"readingTime":{"minutes":4.3,"words":1291},"filePathRelative":"大前端/Vue3/构建工具.md","localizedDate":"2023年6月18日","excerpt":"<h1> 构建工具</h1>\\n<h2> Vue-Router 有哪些变化?</h2>\\n<p><strong>引入方式变化, routes 属性加入强制判断</strong></p>\\n<p>如果页面上没有对应的命名式路由, 如果像推送到路由上去, 原先的做法会默认导航到默认路径 ('/')</p>\\n<p>现在 4.x 以上版本不会有这个行为, 而是去加载一个空的组件, 且在控制台抛出异常</p>\\n<p><strong>不会再给默认路径添加 /, redirect重定向需要写全路径</strong></p>\\n<div class=\\"language-json line-numbers-mode\\" data-ext=\\"json\\"><pre class=\\"language-json\\"><code><span class=\\"token comment\\">// router/index.js</span>\\n<span class=\\"token comment\\">// Vue2 的配置方法, 的情况下, path: '', 会在 about 前面加 /</span>\\n<span class=\\"token comment\\">// 比如访问 www.baodu.com/#/path 会默认转到 www.baodu.com/#/path/about</span>\\n<span class=\\"token comment\\">// 但是, 在 Vue3 以后就不会默认加 /</span>\\n<span class=\\"token punctuation\\">{</span>\\n    path<span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"/path\\"</span><span class=\\"token punctuation\\">,</span>\\n    name<span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"Home\\"</span><span class=\\"token punctuation\\">,</span>\\n    component<span class=\\"token operator\\">:</span> HomeView<span class=\\"token punctuation\\">,</span>\\n    children<span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">[</span>\\n      <span class=\\"token punctuation\\">{</span> path<span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"\\"</span><span class=\\"token punctuation\\">,</span> redirect<span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"about\\"</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// vue2 -&gt; /path/about</span>\\n      <span class=\\"token punctuation\\">{</span> path<span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"about\\"</span><span class=\\"token punctuation\\">,</span> component<span class=\\"token operator\\">:</span> About1 <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token comment\\">// Vue3 的配置</span>\\n<span class=\\"token comment\\">// 写全路径后, 访问 www.baodu.com/#/path 会默认转到 www.baodu.com/#/path/about</span>\\n<span class=\\"token comment\\">// 只写 about 就只会跳到 about, 访问 www.baodu.com/#/path 会默认转到 www.baodu.com/#/about</span>\\n<span class=\\"token punctuation\\">{</span>\\n    path<span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"/path\\"</span><span class=\\"token punctuation\\">,</span>\\n    name<span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"Home\\"</span><span class=\\"token punctuation\\">,</span>\\n    component<span class=\\"token operator\\">:</span> HomeView<span class=\\"token punctuation\\">,</span>\\n    children<span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">[</span>\\n      <span class=\\"token punctuation\\">{</span> path<span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"\\"</span><span class=\\"token punctuation\\">,</span> redirect<span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"/path/about\\"</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span> \\n      <span class=\\"token punctuation\\">{</span> path<span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"about\\"</span><span class=\\"token punctuation\\">,</span> component<span class=\\"token operator\\">:</span> About1 <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
