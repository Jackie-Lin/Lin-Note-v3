const n=JSON.parse(`{"key":"v-32612ef2","path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98/%E5%88%86%E7%B1%BB%E9%9D%A2%E8%AF%95%E9%A2%98/%E7%9F%A5%E8%AF%86%E6%B7%B1%E5%BA%A6.html","title":"知识深度","lang":"zh-CN","frontmatter":{"description":"知识深度 1. JS 内存垃圾回收用什么算法 垃圾回收 哪些不会被垃圾回收？ -- 不会被垃圾回收 -- // window 对象的属性 不会被回收 // 闭包内存 不会回收 function getDataFns() { const data = {} //闭包 return { get(key) { return data[key] }, set(key, value) { data[key] = value } } } const { get, set } = getDataFns() set('x', 100) get('x')","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/Lin-Note-v3/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98/%E5%88%86%E7%B1%BB%E9%9D%A2%E8%AF%95%E9%A2%98/%E7%9F%A5%E8%AF%86%E6%B7%B1%E5%BA%A6.html"}],["meta",{"property":"og:site_name","content":"Lin-Note"}],["meta",{"property":"og:title","content":"知识深度"}],["meta",{"property":"og:description","content":"知识深度 1. JS 内存垃圾回收用什么算法 垃圾回收 哪些不会被垃圾回收？ -- 不会被垃圾回收 -- // window 对象的属性 不会被回收 // 闭包内存 不会回收 function getDataFns() { const data = {} //闭包 return { get(key) { return data[key] }, set(key, value) { data[key] = value } } } const { get, set } = getDataFns() set('x', 100) get('x')"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mister-hope.github.io/Lin-Note-v3/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-18T15:20:10.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"知识深度"}],["meta",{"property":"article:author","content":"Mr.Lin"}],["meta",{"property":"article:modified_time","content":"2023-06-18T15:20:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"知识深度\\",\\"image\\":[\\"https://mister-hope.github.io/Lin-Note-v3/\\"],\\"dateModified\\":\\"2023-06-18T15:20:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Lin\\",\\"url\\":\\"https://mrhope.site\\"}]}"]]},"headers":[{"level":2,"title":"1. JS 内存垃圾回收用什么算法","slug":"_1-js-内存垃圾回收用什么算法","link":"#_1-js-内存垃圾回收用什么算法","children":[]},{"level":2,"title":"2. JS 内存泄漏如何检测？场景有哪些？","slug":"_2-js-内存泄漏如何检测-场景有哪些","link":"#_2-js-内存泄漏如何检测-场景有哪些","children":[]},{"level":2,"title":"3. 浏览器 和 node.js 的 event loop 有什么区别？","slug":"_3-浏览器-和-node-js-的-event-loop-有什么区别","link":"#_3-浏览器-和-node-js-的-event-loop-有什么区别","children":[]},{"level":2,"title":"4. vdom 真的很快吗？","slug":"_4-vdom-真的很快吗","link":"#_4-vdom-真的很快吗","children":[]},{"level":2,"title":"5. 遍历一个数组用 for 和 forEach 哪个更快？","slug":"_5-遍历一个数组用-for-和-foreach-哪个更快","link":"#_5-遍历一个数组用-for-和-foreach-哪个更快","children":[]},{"level":2,"title":"6. nodejs 如何开启进程，进程如何通讯？","slug":"_6-nodejs-如何开启进程-进程如何通讯","link":"#_6-nodejs-如何开启进程-进程如何通讯","children":[]},{"level":2,"title":"7. 请描述 js-bridge 的实现原理","slug":"_7-请描述-js-bridge-的实现原理","link":"#_7-请描述-js-bridge-的实现原理","children":[]},{"level":2,"title":"8. requestIdleCallback 和 request","slug":"_8-requestidlecallback-和-request","link":"#_8-requestidlecallback-和-request","children":[]},{"level":2,"title":"9. Vue 每个生命周期都做了什么？","slug":"_9-vue-每个生命周期都做了什么","link":"#_9-vue-每个生命周期都做了什么","children":[]},{"level":2,"title":"10. Vue2、Vue3、React 三者 diff 算法有何区别？","slug":"_10-vue2、vue3、react-三者-diff-算法有何区别","link":"#_10-vue2、vue3、react-三者-diff-算法有何区别","children":[]},{"level":2,"title":"11. Vue-router MemoryHistory (abstract)","slug":"_11-vue-router-memoryhistory-abstract","link":"#_11-vue-router-memoryhistory-abstract","children":[]},{"level":2,"title":"12. 讲下 异步","slug":"_12-讲下-异步","link":"#_12-讲下-异步","children":[{"level":3,"title":"什么是同步、异步?","slug":"什么是同步、异步","link":"#什么是同步、异步","children":[]},{"level":3,"title":"为了会有异步","slug":"为了会有异步","link":"#为了会有异步","children":[]},{"level":3,"title":"如何 异步 解决 JS 单线程阻塞问题","slug":"如何-异步-解决-js-单线程阻塞问题","link":"#如何-异步-解决-js-单线程阻塞问题","children":[]},{"level":3,"title":"JS 如何实现异步?","slug":"js-如何实现异步","link":"#js-如何实现异步","children":[]}]}],"git":{"createdTime":1687101610000,"updatedTime":1687101610000,"contributors":[{"name":"Jack_Lin","email":"1351123861@qq.com","commits":1}]},"readingTime":{"minutes":12.67,"words":3801},"filePathRelative":"前端面试题/分类面试题/知识深度.md","localizedDate":"2023年6月18日","excerpt":"<h1> 知识深度</h1>\\n<h2> 1. JS 内存垃圾回收用什么算法</h2>\\n<p>垃圾回收</p>\\n<ul>\\n<li>哪些不会被垃圾回收？</li>\\n</ul>\\n<p>-- 不会被垃圾回收 --</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token comment\\">// window 对象的属性 不会被回收</span>\\n\\n<span class=\\"token comment\\">// 闭包内存 不会回收</span>\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function\\">getDataFns</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">const</span> data <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span> <span class=\\"token comment\\">//闭包</span>\\n    <span class=\\"token keyword\\">return</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token function\\">get</span><span class=\\"token punctuation\\">(</span>key<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">return</span> data<span class=\\"token punctuation\\">[</span>key<span class=\\"token punctuation\\">]</span>\\n        <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token function\\">set</span><span class=\\"token punctuation\\">(</span>key<span class=\\"token punctuation\\">,</span> value<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            data<span class=\\"token punctuation\\">[</span>key<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> value\\n        <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token keyword\\">const</span> <span class=\\"token punctuation\\">{</span> get<span class=\\"token punctuation\\">,</span> set <span class=\\"token punctuation\\">}</span> <span class=\\"token operator\\">=</span> <span class=\\"token function\\">getDataFns</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token function\\">set</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'x'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">100</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token function\\">get</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'x'</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
