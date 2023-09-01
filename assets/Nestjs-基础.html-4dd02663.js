const n=JSON.parse('{"key":"v-61489fea","path":"/%E5%9F%BA%E7%A1%80-%E8%BF%9B%E9%98%B6/%E5%9F%BA%E7%A1%80/Nestjs-%E5%9F%BA%E7%A1%80.html","title":"Nestjs-基础","lang":"zh-CN","frontmatter":{"description":"Nestjs-基础 IOC 控制反转 DI 依赖注入 (没懂) 什么是强耦合 class A { name: string; constructor() { this.name = \\"小满\\"; } } class B { a: any; constructor() { this.a = new A().name; } } class C { a: any; constructor() { this.a = new A().name; } }","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/Lin-Note-v3/%E5%9F%BA%E7%A1%80-%E8%BF%9B%E9%98%B6/%E5%9F%BA%E7%A1%80/Nestjs-%E5%9F%BA%E7%A1%80.html"}],["meta",{"property":"og:site_name","content":"坡罗斜"}],["meta",{"property":"og:title","content":"Nestjs-基础"}],["meta",{"property":"og:description","content":"Nestjs-基础 IOC 控制反转 DI 依赖注入 (没懂) 什么是强耦合 class A { name: string; constructor() { this.name = \\"小满\\"; } } class B { a: any; constructor() { this.a = new A().name; } } class C { a: any; constructor() { this.a = new A().name; } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-18T15:20:10.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-18T15:20:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Nestjs-基础\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-06-18T15:20:10.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"IOC 控制反转 DI 依赖注入 (没懂)","slug":"ioc-控制反转-di-依赖注入-没懂","link":"#ioc-控制反转-di-依赖注入-没懂","children":[{"level":3,"title":"什么是强耦合","slug":"什么是强耦合","link":"#什么是强耦合","children":[]}]},{"level":2,"title":"控制器","slug":"控制器","link":"#控制器","children":[{"level":3,"title":"Controller Request","slug":"controller-request","link":"#controller-request","children":[]}]},{"level":2,"title":"提供者 没懂","slug":"提供者-没懂","link":"#提供者-没懂","children":[]}],"git":{"createdTime":1687101610000,"updatedTime":1687101610000,"contributors":[{"name":"Jack_Lin","email":"1351123861@qq.com","commits":1}]},"readingTime":{"minutes":1.69,"words":508},"filePathRelative":"基础-进阶/基础/Nestjs-基础.md","localizedDate":"2023年6月18日","excerpt":"<h1> Nestjs-基础</h1>\\n<h2> IOC 控制反转 DI 依赖注入 (<code>没懂</code>)</h2>\\n<h3> 什么是强耦合</h3>\\n<div class=\\"language-typescript line-numbers-mode\\" data-ext=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\"><span class=\\"token constant\\">A</span></span> <span class=\\"token punctuation\\">{</span>\\n  name<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token function\\">constructor</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>name <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"小满\\"</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\"><span class=\\"token constant\\">B</span></span> <span class=\\"token punctuation\\">{</span>\\n  a<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">any</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token function\\">constructor</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>a <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\"><span class=\\"token constant\\">A</span></span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>name<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\"><span class=\\"token constant\\">C</span></span> <span class=\\"token punctuation\\">{</span>\\n  a<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">any</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token function\\">constructor</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>a <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\"><span class=\\"token constant\\">A</span></span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>name<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
