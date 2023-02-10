import{_ as s,X as a,Y as t,a0 as p,Z as n,a3 as e}from"./framework-0ff09816.js";const c={},o=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"章节过时"),n("p",null,"而且目前浏览器 API 已经基本统一，除非兼容旧版本 IE，否则无需针对不同浏览器写不同的代码。")],-1),l=e(`<p>直接使用浏览器提供的 API 对 DOM 结构进行修改，不但代码复杂，而且要针对浏览器写不同的代码。</p><p>有了 jQuery，我们就专注于操作 jQuery 对象本身，底层的 DOM 操作由 jQuery 完成就可以了，这样一来，修改 DOM 也大大简化了。</p><h2 id="添加-dom" tabindex="-1"><a class="header-anchor" href="#添加-dom" aria-hidden="true">#</a> 添加 DOM</h2><p>要添加新的 DOM 节点，除了通过 jQuery 的 <code>html()</code> 这种暴力方法外，还可以用 <code>append()</code> 方法，例如:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test-div<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>JavaScript<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>Python<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>Swift<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如何向列表新增一个语言? 首先要拿到 <code>&lt;ul&gt;</code> 节点:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> ul <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#test-div&gt;ul&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后，调用 <code>append()</code> 传入 HTML 片段:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>ul<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;li&gt;&lt;span&gt;Haskell&lt;/span&gt;&lt;/li&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>除了接受字符串，<code>append()</code> 还可以传入原始的 DOM 对象，jQuery 对象和函数对象:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 创建DOM对象:</span>
<span class="token keyword">const</span> ps <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;li&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ps<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&quot;&lt;span&gt;Pascal&lt;/span&gt;&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// 添加DOM对象:</span>
ul<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>ps<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 添加jQuery对象:</span>
ul<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#scheme&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 添加函数对象:</span>
ul<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">index<span class="token punctuation">,</span> html</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&quot;&lt;li&gt;&lt;span&gt;Language - &quot;</span> <span class="token operator">+</span> index <span class="token operator">+</span> <span class="token string">&quot;&lt;/span&gt;&lt;/li&gt;&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>传入函数时，要求返回一个字符串、DOM 对象或者 jQuery 对象。因为 jQuery 的 <code>append()</code> 可能作用于一组 DOM 节点，只有传入函数才能针对每个 DOM 生成不同的子节点。</p><p><code>append()</code> 把 DOM 添加到最后，<code>prepend()</code> 则把 DOM 添加到最前。</p><p>另外注意，如果要添加的 DOM 节点已经存在于 HTML 文档中，它会首先从文档移除，然后再添加，也就是说，用 <code>append()</code>，您可以移动一个 DOM 节点。</p><p>如果要把新节点插入到指定位置，例如，JavaScript 和 Python 之间，那么，可以先定位到 JavaScript，然后用 <code>after()</code> 方法:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> js <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#test-div&gt;ul&gt;li:first-child&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
js<span class="token punctuation">.</span><span class="token function">after</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;li&gt;&lt;span&gt;Lua&lt;/span&gt;&lt;/li&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>也就是说，同级节点可以用 <code>after()</code> 或者 <code>before()</code> 方法。</p><h2 id="删除节点" tabindex="-1"><a class="header-anchor" href="#删除节点" aria-hidden="true">#</a> 删除节点</h2><p>要删除 DOM 节点，拿到 jQuery 对象后直接调用 <code>remove()</code> 方法就可以了。如果 jQuery 对象包含若干 DOM 节点，实际上可以一次删除多个 DOM 节点:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> li <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#test-div&gt;ul&gt;li&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
li<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 所有&lt;li&gt;全被删除</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,20);function i(u,d){return a(),t("div",null,[o,p(" more "),l])}const r=s(c,[["render",i],["__file","modify-dom.html.vue"]]);export{r as default};