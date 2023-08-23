const n=JSON.parse(`{"key":"v-f386277e","path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98/%E5%88%86%E7%B1%BB%E9%9D%A2%E8%AF%95%E9%A2%98/%E9%A1%B9%E7%9B%AE%E8%AE%BE%E8%AE%A1.html","title":"项目设计","lang":"zh-CN","frontmatter":{"description":"项目设计 1. 如何设计一个前端统计 SDK - 分析功能范围 前端统计的范围 访问量 PV 自定义事件 (如 某个按钮的点击量, 分享按钮) 性能, 错误 --- 前端统计 SDK --- const PV_URL_SET = new Set() class Mystatistic { constructor(productId) { this.productId = productId this.initPerformance() // 性能统计 this.initError() // 错误统计 } // 发送统计数据 send(url, params = {}) { params.productId = productId const paramArr = [] for (let key in params) { const val = params[key] paramArr.push(\`\${key}=\${value}\`) } const newUrl = \`\${url}?\${paramArr.join('&amp;')}\` // url?a=10&amp;b=20 // 用 &lt;img&gt; 发送: 1. 可跨域 2. 兼容性非常好 const img = document.createElement('img') img.src = newUrl // get } // 初始化性能统计 initPerformance() { const url = 'yyy' this.send(url, performance.timing) // 统计的时候一定要给最原始的、最完整的结果, 原始数据 } // 初始化错误监控 initError() { // 监听 JS 错误 window.addEventListener('error', event =&gt; { const { error. lineno, colno } = event this.error(error, { lineno, colno }) }) // promise 未 catch 住的报错 window.addEventListener('unhandledrejection', event =&gt; { this.error(new Error(event.reason), { type: 'unhandlerejection' }) }) } pv() { // 页面流量统计 (可以看做一个特殊的 event) const herf = location.href if (PV_URL_SET.get(href)) return // 不重复发送 pv this.event('pv') PV_URL_SET.add(href) } event(key, val) { const url = 'xxx' // 自定义事件统计 server API this.send(url, {key,val}) } error(err, info = {}) { const url = 'zzz' const { message, stack } = err // message 错误信息, stack 错误的详细信息 this.send(url, { message, stack, ...info }) } } // 使用这个 SDK // const s = new MyStatistic('a1') // s.pv() // SPA 路由切换 就是一次 PV // s.event('vip', 'ok') // try { // } catch(ex) { // s.error(ex, {}) // } // Vue // React","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/Lin-Note-v3/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98/%E5%88%86%E7%B1%BB%E9%9D%A2%E8%AF%95%E9%A2%98/%E9%A1%B9%E7%9B%AE%E8%AE%BE%E8%AE%A1.html"}],["meta",{"property":"og:site_name","content":"Lin-Note"}],["meta",{"property":"og:title","content":"项目设计"}],["meta",{"property":"og:description","content":"项目设计 1. 如何设计一个前端统计 SDK - 分析功能范围 前端统计的范围 访问量 PV 自定义事件 (如 某个按钮的点击量, 分享按钮) 性能, 错误 --- 前端统计 SDK --- const PV_URL_SET = new Set() class Mystatistic { constructor(productId) { this.productId = productId this.initPerformance() // 性能统计 this.initError() // 错误统计 } // 发送统计数据 send(url, params = {}) { params.productId = productId const paramArr = [] for (let key in params) { const val = params[key] paramArr.push(\`\${key}=\${value}\`) } const newUrl = \`\${url}?\${paramArr.join('&amp;')}\` // url?a=10&amp;b=20 // 用 &lt;img&gt; 发送: 1. 可跨域 2. 兼容性非常好 const img = document.createElement('img') img.src = newUrl // get } // 初始化性能统计 initPerformance() { const url = 'yyy' this.send(url, performance.timing) // 统计的时候一定要给最原始的、最完整的结果, 原始数据 } // 初始化错误监控 initError() { // 监听 JS 错误 window.addEventListener('error', event =&gt; { const { error. lineno, colno } = event this.error(error, { lineno, colno }) }) // promise 未 catch 住的报错 window.addEventListener('unhandledrejection', event =&gt; { this.error(new Error(event.reason), { type: 'unhandlerejection' }) }) } pv() { // 页面流量统计 (可以看做一个特殊的 event) const herf = location.href if (PV_URL_SET.get(href)) return // 不重复发送 pv this.event('pv') PV_URL_SET.add(href) } event(key, val) { const url = 'xxx' // 自定义事件统计 server API this.send(url, {key,val}) } error(err, info = {}) { const url = 'zzz' const { message, stack } = err // message 错误信息, stack 错误的详细信息 this.send(url, { message, stack, ...info }) } } // 使用这个 SDK // const s = new MyStatistic('a1') // s.pv() // SPA 路由切换 就是一次 PV // s.event('vip', 'ok') // try { // } catch(ex) { // s.error(ex, {}) // } // Vue // React"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mister-hope.github.io/Lin-Note-v3/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-18T15:20:10.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"项目设计"}],["meta",{"property":"article:modified_time","content":"2023-06-18T15:20:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"项目设计\\",\\"image\\":[\\"https://mister-hope.github.io/Lin-Note-v3/\\"],\\"dateModified\\":\\"2023-06-18T15:20:10.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1. 如何设计一个前端统计 SDK - 分析功能范围","slug":"_1-如何设计一个前端统计-sdk-分析功能范围","link":"#_1-如何设计一个前端统计-sdk-分析功能范围","children":[]},{"level":2,"title":"2. sourcemap 有何作用, 如何配置","slug":"_2-sourcemap-有何作用-如何配置","link":"#_2-sourcemap-有何作用-如何配置","children":[]},{"level":2,"title":"3. 何时用 SPA, 何时用 MPA","slug":"_3-何时用-spa-何时用-mpa","link":"#_3-何时用-spa-何时用-mpa","children":[]},{"level":2,"title":"4. 技术 与 怎么做？","slug":"_4-技术-与-怎么做","link":"#_4-技术-与-怎么做","children":[]},{"level":2,"title":"5. 设计一个 H5 编辑器的数据模型和核心功能","slug":"_5-设计一个-h5-编辑器的数据模型和核心功能","link":"#_5-设计一个-h5-编辑器的数据模型和核心功能","children":[]},{"level":2,"title":"6. 设计一个 用户-权限 模型","slug":"_6-设计一个-用户-权限-模型","link":"#_6-设计一个-用户-权限-模型","children":[]},{"level":2,"title":"7. Hybrid 模板是如何更新的？","slug":"_7-hybrid-模板是如何更新的","link":"#_7-hybrid-模板是如何更新的","children":[]},{"level":2,"title":"8. 如果你是前端技术负责人, 将如何做技术选型","slug":"_8-如果你是前端技术负责人-将如何做技术选型","link":"#_8-如果你是前端技术负责人-将如何做技术选型","children":[]},{"level":2,"title":"9. 开发一个 H5 抽奖页, 需要后端提供哪些接口？","slug":"_9-开发一个-h5-抽奖页-需要后端提供哪些接口","link":"#_9-开发一个-h5-抽奖页-需要后端提供哪些接口","children":[]},{"level":2,"title":"10. 设计实现一个 H5 图片懒加载 SDK","slug":"_10-设计实现一个-h5-图片懒加载-sdk","link":"#_10-设计实现一个-h5-图片懒加载-sdk","children":[]}],"git":{"createdTime":1687101610000,"updatedTime":1687101610000,"contributors":[{"name":"Jack_Lin","email":"1351123861@qq.com","commits":1}]},"readingTime":{"minutes":6.27,"words":1880},"filePathRelative":"前端面试题/分类面试题/项目设计.md","localizedDate":"2023年6月18日","excerpt":"<h1> 项目设计</h1>\\n<h2> 1. 如何设计一个前端统计 SDK - 分析功能范围</h2>\\n<p>前端统计的范围</p>\\n<ul>\\n<li>访问量 PV</li>\\n<li>自定义事件 (如 某个按钮的点击量, 分享按钮)</li>\\n<li>性能, 错误</li>\\n</ul>\\n<p>--- 前端统计 SDK ---</p>\\n<div class=\\"language-tsx line-numbers-mode\\" data-ext=\\"tsx\\"><pre class=\\"language-tsx\\"><code><span class=\\"token keyword\\">const</span> <span class=\\"token constant\\">PV_URL_SET</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Set</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Mystatistic</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token function\\">constructor</span><span class=\\"token punctuation\\">(</span>productId<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>productId <span class=\\"token operator\\">=</span> productId\\n        \\n        <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">initPerformance</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">// 性能统计</span>\\n        <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">initError</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">// 错误统计</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    \\n    <span class=\\"token comment\\">// 发送统计数据</span>\\n    <span class=\\"token function\\">send</span><span class=\\"token punctuation\\">(</span>url<span class=\\"token punctuation\\">,</span> params <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        params<span class=\\"token punctuation\\">.</span>productId <span class=\\"token operator\\">=</span> productId\\n        \\n        <span class=\\"token keyword\\">const</span> paramArr <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span>\\n        <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">let</span> key <span class=\\"token keyword\\">in</span> params<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">const</span> val <span class=\\"token operator\\">=</span> params<span class=\\"token punctuation\\">[</span>key<span class=\\"token punctuation\\">]</span>\\n            paramArr<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">push</span><span class=\\"token punctuation\\">(</span><span class=\\"token template-string\\"><span class=\\"token template-punctuation string\\">\`</span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">\${</span>key<span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token string\\">=</span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">\${</span>value<span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token template-punctuation string\\">\`</span></span><span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        \\n        <span class=\\"token keyword\\">const</span> newUrl <span class=\\"token operator\\">=</span> <span class=\\"token template-string\\"><span class=\\"token template-punctuation string\\">\`</span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">\${</span>url<span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token string\\">?</span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">\${</span>paramArr<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">join</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'&amp;'</span><span class=\\"token punctuation\\">)</span><span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token template-punctuation string\\">\`</span></span> <span class=\\"token comment\\">// url?a=10&amp;b=20</span>\\n        \\n        <span class=\\"token comment\\">// 用 &lt;img&gt; 发送: 1. 可跨域 2. 兼容性非常好</span>\\n        <span class=\\"token keyword\\">const</span> img <span class=\\"token operator\\">=</span> document<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">createElement</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'img'</span><span class=\\"token punctuation\\">)</span>\\n        img<span class=\\"token punctuation\\">.</span>src <span class=\\"token operator\\">=</span> newUrl <span class=\\"token comment\\">// get   </span>\\n    <span class=\\"token punctuation\\">}</span>\\n    \\n    <span class=\\"token comment\\">// 初始化性能统计</span>\\n    <span class=\\"token function\\">initPerformance</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">const</span> url <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'yyy'</span>\\n        <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">send</span><span class=\\"token punctuation\\">(</span>url<span class=\\"token punctuation\\">,</span> performance<span class=\\"token punctuation\\">.</span>timing<span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token comment\\">// 统计的时候一定要给最原始的、最完整的结果, 原始数据</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    \\n    <span class=\\"token comment\\">// 初始化错误监控</span>\\n    <span class=\\"token function\\">initError</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token comment\\">// 监听 JS 错误</span>\\n        window<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">addEventListener</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'error'</span><span class=\\"token punctuation\\">,</span> event <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">const</span> <span class=\\"token punctuation\\">{</span> error<span class=\\"token punctuation\\">.</span> lineno<span class=\\"token punctuation\\">,</span> colno <span class=\\"token punctuation\\">}</span> <span class=\\"token operator\\">=</span> event\\n            <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">error</span><span class=\\"token punctuation\\">(</span>error<span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">{</span> lineno<span class=\\"token punctuation\\">,</span> colno <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token comment\\">// promise 未 catch 住的报错</span>\\n        window<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">addEventListener</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'unhandledrejection'</span><span class=\\"token punctuation\\">,</span> event <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">error</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Error</span><span class=\\"token punctuation\\">(</span>event<span class=\\"token punctuation\\">.</span>reason<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">{</span> type<span class=\\"token operator\\">:</span> <span class=\\"token string\\">'unhandlerejection'</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    \\n    <span class=\\"token function\\">pv</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token comment\\">// 页面流量统计 (可以看做一个特殊的 event)</span>\\n        <span class=\\"token keyword\\">const</span> herf <span class=\\"token operator\\">=</span> location<span class=\\"token punctuation\\">.</span>href\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token constant\\">PV_URL_SET</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">get</span><span class=\\"token punctuation\\">(</span>href<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">return</span> <span class=\\"token comment\\">// 不重复发送 pv</span>\\n        \\n        <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">event</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'pv'</span><span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token constant\\">PV_URL_SET</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">add</span><span class=\\"token punctuation\\">(</span>href<span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    \\n    <span class=\\"token function\\">event</span><span class=\\"token punctuation\\">(</span>key<span class=\\"token punctuation\\">,</span> val<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">const</span> url <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'xxx'</span> <span class=\\"token comment\\">// 自定义事件统计 server API</span>\\n        <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">send</span><span class=\\"token punctuation\\">(</span>url<span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">{</span>key<span class=\\"token punctuation\\">,</span>val<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    \\n    <span class=\\"token function\\">error</span><span class=\\"token punctuation\\">(</span>err<span class=\\"token punctuation\\">,</span> info <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">const</span> url <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'zzz'</span>\\n        <span class=\\"token keyword\\">const</span> <span class=\\"token punctuation\\">{</span> message<span class=\\"token punctuation\\">,</span> stack <span class=\\"token punctuation\\">}</span> <span class=\\"token operator\\">=</span> err <span class=\\"token comment\\">// message 错误信息, stack 错误的详细信息</span>\\n        <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">send</span><span class=\\"token punctuation\\">(</span>url<span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">{</span> message<span class=\\"token punctuation\\">,</span> stack<span class=\\"token punctuation\\">,</span> <span class=\\"token operator\\">...</span>info <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\">// 使用这个 SDK</span>\\n<span class=\\"token comment\\">// const s = new MyStatistic('a1')</span>\\n<span class=\\"token comment\\">// s.pv() // SPA 路由切换 就是一次 PV</span>\\n<span class=\\"token comment\\">// s.event('vip', 'ok') </span>\\n<span class=\\"token comment\\">// try {</span>\\n    \\n<span class=\\"token comment\\">// } catch(ex) {</span>\\n<span class=\\"token comment\\">//     s.error(ex, {})</span>\\n<span class=\\"token comment\\">// }</span>\\n\\n<span class=\\"token comment\\">// Vue</span>\\n<span class=\\"token comment\\">// React</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
