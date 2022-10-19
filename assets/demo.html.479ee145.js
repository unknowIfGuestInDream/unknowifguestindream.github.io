import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as a,d as e,a as t,f as p}from"./app.6f239d00.js";const o={},c=t("p",null,"\u672C\u6848\u4F8B\u5C55\u793A\u4E86 Mr.Hope \u4E2A\u4EBA\u7F16\u5199\u7684 screen \u76F8\u5173\u7684 Vuex \u6A21\u5757\u3002",-1),i=p(`<h2 id="sreen-ts" tabindex="-1"><a class="header-anchor" href="#sreen-ts" aria-hidden="true">#</a> Sreen.ts</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Module <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuex&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BaseState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../state&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">SWState</span> <span class="token punctuation">{</span>
  status<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// service-worker \u72B6\u6001</span>
  error<span class="token operator">?</span><span class="token operator">:</span> Error<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> swState<span class="token operator">:</span> SWState <span class="token operator">=</span> <span class="token punctuation">{</span> status<span class="token operator">:</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> swModule<span class="token operator">:</span> Module<span class="token operator">&lt;</span>SWState<span class="token punctuation">,</span> BaseState<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  state<span class="token operator">:</span> swState<span class="token punctuation">,</span>
  mutations<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@description</span>: \u8BBE\u7F6E Service Worker \u72B6\u6001
     *
     * <span class="token keyword">@param</span> <span class="token parameter">state</span> swState
     * <span class="token keyword">@param</span> <span class="token parameter">status</span> ServiceWorker\u72B6\u6001
     */</span>
    <span class="token function">swState</span><span class="token punctuation">(</span>state<span class="token operator">:</span> SWState<span class="token punctuation">,</span> status<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>status <span class="token operator">=</span> status<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@description</span>: \u8BBE\u7F6E Service Worker \u9519\u8BEF
     *
     * <span class="token keyword">@param</span> <span class="token parameter">state</span> imagestate
     * <span class="token keyword">@param</span> <span class="token parameter">error</span> \u9047\u5230\u7684\u9519\u8BEF
     */</span>
    <span class="token function">swError</span><span class="token punctuation">(</span>state<span class="token operator">:</span> SWState<span class="token punctuation">,</span> error<span class="token operator">:</span> Error<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">;</span>
      state<span class="token punctuation">.</span>error <span class="token operator">=</span> error<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> swModule<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u672C\u6587\u4EF6\u5305\u542B\u4E86\u5B8C\u6574\u7684\u4E00\u4EFD state\u3001\u6570\u4E2A mutation \u548C\u4E00\u4E2A action\u3002</p>`,3);function r(l,u){return n(),a("div",null,[c,e(" more "),i])}const v=s(o,[["render",r],["__file","demo.html.vue"]]);export{v as default};
