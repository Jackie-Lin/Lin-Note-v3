const t=JSON.parse(`{"key":"v-f5f2b2e8","path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98/%E5%9F%BA%E7%A1%80%E9%9D%A2%E8%AF%95%E9%A2%98/Vue-%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8%E4%B8%8E%E5%8E%9F%E7%90%86.html","title":"Vue-基本使用与原理","lang":"zh-CN","frontmatter":{"description":"Vue-基本使用与原理 1. 基本使用 模板 (插槽、指令) 插值、表达式 指令、动态属性 v-html: 会有 XSS 风险, 会覆盖子组件 &lt;!-- 代码演示 --&gt; &lt;template&gt; \\t&lt;div&gt; &lt;p&gt;文本插值 {{ message }}&lt;/p&gt; &lt;p&gt;JS 表达式 {{ flag ? 'yes' : 'no' }}&lt;/p&gt; &lt;P :id=\\"dynamicId\\"&gt;动态属性&lt;/P&gt; &lt;p v-html=\\"rawHtml\\"&gt; &lt;span&gt;【注意】使用 v-html 之后, 将会覆盖子元素 (也就是 span 中的内容会被覆盖)&lt;/span&gt; \\t&lt;/p&gt; &lt;/div&gt; &lt;/template&gt; &lt;script&gt; export default { data() { return { message: 'hello vue', flag: true, rawHtml: '指令 - 原始 html &lt;b&gt;加粗&lt;/b&gt; &lt;i&gt;斜体&lt;/i&gt;', dynamicId: 'id-\${Date.now()}' } } } &lt;/script&gt;","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/Lin-Note-v3/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98/%E5%9F%BA%E7%A1%80%E9%9D%A2%E8%AF%95%E9%A2%98/Vue-%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8%E4%B8%8E%E5%8E%9F%E7%90%86.html"}],["meta",{"property":"og:site_name","content":"坡罗斜"}],["meta",{"property":"og:title","content":"Vue-基本使用与原理"}],["meta",{"property":"og:description","content":"Vue-基本使用与原理 1. 基本使用 模板 (插槽、指令) 插值、表达式 指令、动态属性 v-html: 会有 XSS 风险, 会覆盖子组件 &lt;!-- 代码演示 --&gt; &lt;template&gt; \\t&lt;div&gt; &lt;p&gt;文本插值 {{ message }}&lt;/p&gt; &lt;p&gt;JS 表达式 {{ flag ? 'yes' : 'no' }}&lt;/p&gt; &lt;P :id=\\"dynamicId\\"&gt;动态属性&lt;/P&gt; &lt;p v-html=\\"rawHtml\\"&gt; &lt;span&gt;【注意】使用 v-html 之后, 将会覆盖子元素 (也就是 span 中的内容会被覆盖)&lt;/span&gt; \\t&lt;/p&gt; &lt;/div&gt; &lt;/template&gt; &lt;script&gt; export default { data() { return { message: 'hello vue', flag: true, rawHtml: '指令 - 原始 html &lt;b&gt;加粗&lt;/b&gt; &lt;i&gt;斜体&lt;/i&gt;', dynamicId: 'id-\${Date.now()}' } } } &lt;/script&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mister-hope.github.io/Lin-Note-v3/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-19T07:19:39.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Vue-基本使用与原理"}],["meta",{"property":"article:modified_time","content":"2023-06-19T07:19:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vue-基本使用与原理\\",\\"image\\":[\\"https://mister-hope.github.io/Lin-Note-v3/\\"],\\"dateModified\\":\\"2023-06-19T07:19:39.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1. 基本使用","slug":"_1-基本使用","link":"#_1-基本使用","children":[{"level":3,"title":"模板 (插槽、指令)","slug":"模板-插槽、指令","link":"#模板-插槽、指令","children":[]},{"level":3,"title":"computed 和 watch","slug":"computed-和-watch","link":"#computed-和-watch","children":[]},{"level":3,"title":"class Style","slug":"class-style","link":"#class-style","children":[]},{"level":3,"title":"条件渲染","slug":"条件渲染","link":"#条件渲染","children":[]},{"level":3,"title":"循环 (列表) 渲染","slug":"循环-列表-渲染","link":"#循环-列表-渲染","children":[]},{"level":3,"title":"事件","slug":"事件","link":"#事件","children":[]},{"level":3,"title":"事件修饰符","slug":"事件修饰符","link":"#事件修饰符","children":[]},{"level":3,"title":"按键修改符","slug":"按键修改符","link":"#按键修改符","children":[]},{"level":3,"title":"表单","slug":"表单","link":"#表单","children":[]}]},{"level":2,"title":"2. 组件","slug":"_2-组件","link":"#_2-组件","children":[{"level":3,"title":"生命周期","slug":"生命周期","link":"#生命周期","children":[]},{"level":3,"title":"父子组件生命周期顺序 - 通过钩子函数来进行判断","slug":"父子组件生命周期顺序-通过钩子函数来进行判断","link":"#父子组件生命周期顺序-通过钩子函数来进行判断","children":[]},{"level":3,"title":"组件间传值","slug":"组件间传值","link":"#组件间传值","children":[]}]},{"level":2,"title":"3. 高级特性","slug":"_3-高级特性","link":"#_3-高级特性","children":[{"level":3,"title":"自定义 v-model","slug":"自定义-v-model","link":"#自定义-v-model","children":[]},{"level":3,"title":"$nextTick","slug":"nexttick","link":"#nexttick","children":[]},{"level":3,"title":"refs","slug":"refs","link":"#refs","children":[]},{"level":3,"title":"slot (插槽)","slug":"slot-插槽","link":"#slot-插槽","children":[]},{"level":3,"title":"动态组件","slug":"动态组件","link":"#动态组件","children":[]},{"level":3,"title":"异步组件","slug":"异步组件","link":"#异步组件","children":[]},{"level":3,"title":"keep-alive","slug":"keep-alive","link":"#keep-alive","children":[]},{"level":3,"title":"mixin","slug":"mixin","link":"#mixin","children":[]}]},{"level":2,"title":"4. vuex","slug":"_4-vuex","link":"#_4-vuex","children":[]},{"level":2,"title":"5. vue-router","slug":"_5-vue-router","link":"#_5-vue-router","children":[]},{"level":2,"title":"6. 原理","slug":"_6-原理","link":"#_6-原理","children":[{"level":3,"title":"1. jQuery 与 MVVM 的区别？","slug":"_1-jquery-与-mvvm-的区别","link":"#_1-jquery-与-mvvm-的区别","children":[]},{"level":3,"title":"2. vue 响应式原理","slug":"_2-vue-响应式原理","link":"#_2-vue-响应式原理","children":[]},{"level":3,"title":"3. Vue 编译原理","slug":"_3-vue-编译原理","link":"#_3-vue-编译原理","children":[]}]},{"level":2,"title":"7. Vue 全家桶","slug":"_7-vue-全家桶","link":"#_7-vue-全家桶","children":[{"level":3,"title":"vue-router 面试题","slug":"vue-router-面试题","link":"#vue-router-面试题","children":[]},{"level":3,"title":"vuex 面试题","slug":"vuex-面试题","link":"#vuex-面试题","children":[]},{"level":3,"title":"Axios 面试题","slug":"axios-面试题","link":"#axios-面试题","children":[]}]},{"level":2,"title":"8. Vue3 新特征","slug":"_8-vue3-新特征","link":"#_8-vue3-新特征","children":[]}],"git":{"createdTime":1687159179000,"updatedTime":1687159179000,"contributors":[{"name":"linzeqin","email":"1351123861@qq.com","commits":1}]},"readingTime":{"minutes":18.61,"words":5584},"filePathRelative":"前端面试题/基础面试题/Vue-基本使用与原理.md","localizedDate":"2023年6月19日","excerpt":"<h1> Vue-基本使用与原理</h1>\\n<h2> 1. 基本使用</h2>\\n<h3> 模板 (插槽、指令)</h3>\\n<ul>\\n<li>插值、表达式</li>\\n<li>指令、动态属性</li>\\n<li>v-html: 会有 XSS 风险, 会覆盖子组件</li>\\n</ul>\\n<div class=\\"language-vue line-numbers-mode\\" data-ext=\\"vue\\"><pre class=\\"language-vue\\"><code><span class=\\"token comment\\">&lt;!-- 代码演示 --&gt;</span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>p</span><span class=\\"token punctuation\\">&gt;</span></span>文本插值 {{ message }}<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>p</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>p</span><span class=\\"token punctuation\\">&gt;</span></span>JS 表达式 {{ flag ? 'yes' : 'no' }}<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>p</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>P</span> <span class=\\"token attr-name\\">:id</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>dynamicId<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>动态属性<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>P</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>p</span> <span class=\\"token attr-name\\">v-html</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>rawHtml<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n            <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>span</span><span class=\\"token punctuation\\">&gt;</span></span>【注意】使用 v-html 之后, 将会覆盖子元素 (也就是 span 中的内容会被覆盖)<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>span</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    \\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>p</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"><span class=\\"token language-javascript\\">\\n<span class=\\"token keyword\\">export</span> <span class=\\"token keyword\\">default</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token function\\">data</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token literal-property property\\">message</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'hello vue'</span><span class=\\"token punctuation\\">,</span>\\n            <span class=\\"token literal-property property\\">flag</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">,</span>\\n            <span class=\\"token literal-property property\\">rawHtml</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'指令 - 原始 html &lt;b&gt;加粗&lt;/b&gt; &lt;i&gt;斜体&lt;/i&gt;'</span><span class=\\"token punctuation\\">,</span>\\n            <span class=\\"token literal-property property\\">dynamicId</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'id-\${Date.now()}'</span>\\n        <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{t as data};
