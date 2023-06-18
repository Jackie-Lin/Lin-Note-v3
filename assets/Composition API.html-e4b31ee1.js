import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-3b87b348.js";const e="/Lin-Note-v3/assets/image-20230225224850386-ed63a338.png",o={},i=t('<h1 id="composition-api" tabindex="-1"><a class="header-anchor" href="#composition-api" aria-hidden="true">#</a> Composition API</h1><h2 id="为什么会产生-composition-api" tabindex="-1"><a class="header-anchor" href="#为什么会产生-composition-api" aria-hidden="true">#</a> 为什么会产生 Composition API?</h2><h2 id="vue2-逻辑复用方式" tabindex="-1"><a class="header-anchor" href="#vue2-逻辑复用方式" aria-hidden="true">#</a> Vue2 逻辑复用方式</h2><p><strong>缺点</strong></p><ul><li>Mixin (命名空间冲突、逻辑不清晰、不易复用)</li><li>scoped slot 作用域插槽 (配置项多、代码分裂、性能差)</li><li>Vue2 对 TS 支持不充分</li></ul><h2 id="composition-api-1" tabindex="-1"><a class="header-anchor" href="#composition-api-1" aria-hidden="true">#</a> Composition API</h2><p><strong>优点</strong></p><ul><li>逻辑代码更少, 更集中, 更易扩展</li><li>更加丰富的 API 集成</li><li>对 TS 来说, 非常友好 (利于类型推导)</li></ul><h2 id="vue2-与-vue3-编写风格上的区别" tabindex="-1"><a class="header-anchor" href="#vue2-与-vue3-编写风格上的区别" aria-hidden="true">#</a> Vue2 与 Vue3 编写风格上的区别</h2><figure><img src="'+e+`" alt="image-20230225224850386" tabindex="0" loading="lazy"><figcaption>image-20230225224850386</figcaption></figure><p>data 的变量定义 与 methods 的方法定义 -&gt; 整合成一个 setup 中</p><p><strong>会不会导致 setup 方法非常大?</strong></p><p>不会, 方法和变量可以被定义到不同的 js 文件中</p><p><strong>setup 选项中没有 this, 无法访问组件声明中的属性, 但是 Methods 中有</strong></p><p>主要原因是在执行 setup 时, 尚未创建组件的实例, 因此在 setup 中没有 this</p><p><strong>setup 函数接收两个参数 props 与 context</strong></p><p><strong>props 不可解构, context 有 attrs/slots/emit 属性</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// context 没解构的使用</span>
<span class="token function">setup</span> <span class="token punctuation">(</span>props<span class="token punctuation">,</span> ctx<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;🚀 ~ file: HomeChild.vue:15 ~ setup ~ attrs:&#39;</span><span class="token punctuation">,</span> ctx<span class="token punctuation">.</span>attrs<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// context 解构的使用</span>
<span class="token function">setup</span> <span class="token punctuation">(</span>props<span class="token punctuation">,</span> <span class="token punctuation">{</span> emit<span class="token punctuation">,</span> attrs <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;🚀 ~ file: HomeChild.vue:15 ~ setup ~ attrs:&#39;</span><span class="token punctuation">,</span> attrs<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>TS 类型推导在组合式 API 中非常的好用</strong></p><p><strong>使用组合式 API 可以很方便的抽离逻辑代码进行复用</strong></p>`,20),p=[i];function c(u,l){return s(),a("div",null,p)}const m=n(o,[["render",c],["__file","Composition API.html.vue"]]);export{m as default};