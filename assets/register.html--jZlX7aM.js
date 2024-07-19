import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as l,c as u,a as n,e as s,d as a,w as c,f as p}from"./app-BFiyIvlC.js";const d={},r={id:"注册小程序",tabindex:"-1"},k={class:"header-anchor",href:"#注册小程序"},m=n("p",null,[s("每个小程序都需要在 "),n("code",null,"app.js"),s(" 中调用 "),n("code",null,"App"),s(" 方法注册小程序示例，绑定生命周期回调函数、错误监听和页面不存在监听函数等。")],-1),v=p(`<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// app.js</span>
<span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">onLaunch</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Do something initial when launch.</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onShow</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Do something when show.</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onHide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Do something when hide.</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onError</span><span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">globalData</span><span class="token operator">:</span> <span class="token string">&quot;I am global data&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>整个小程序只有一个 App 实例，是全部页面共享的。</p><p>通过 <code>getApp</code> 方法获取到全局唯一的 App 示例，获取 App 上的数据或调用注册在 App 上的函数。</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// xxx.js</span>
<span class="token keyword">const</span> appInstance <span class="token operator">=</span> <span class="token function">getApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>appInstance<span class="token punctuation">.</span>globalData<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// I am global data</span>
</code></pre></div><h2 id="注册页面" tabindex="-1"><a class="header-anchor" href="#注册页面"><span>注册页面</span></a></h2><p>对于小程序中的每个页面，都需要在页面对应的 js 文件中进行注册，指定页面的初始数据、生命周期回调、事件处理函数等。</p>`,6),b={id:"使用-page-构造器注册页面",tabindex:"-1"},g={class:"header-anchor",href:"#使用-page-构造器注册页面"},h=p(`<p>简单的页面可以使用 <code>Page()</code> 进行构造。</p><p>代码示例:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">//index.js</span>
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;This is page data.&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 页面创建时执行</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onShow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 页面出现在前台时执行</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onReady</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 页面首次渲染完毕时执行</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onHide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 页面从前台变为后台时执行</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onUnload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 页面销毁时执行</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onPullDownRefresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 触发下拉刷新时执行</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onReachBottom</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 页面触底时执行</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onShareAppMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 页面被用户分享时执行</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onPageScroll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 页面滚动时执行</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onResize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 页面尺寸变化时执行</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onTabItemTap</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// tab 点击时执行</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>pagePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 事件响应函数</span>
  <span class="token function">viewTap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;Set some data for updating view.&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// this is setData callback</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 自由数据</span>
  <span class="token literal-property property">customData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">hi</span><span class="token operator">:</span> <span class="token string">&quot;MINA&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),f={id:"使用-component-构造器构造页面",tabindex:"-1"},y={class:"header-anchor",href:"#使用-component-构造器构造页面"},_=p(`<p><code>Page</code> 构造器适用于简单的页面。但对于复杂的页面， <code>Page</code> 构造器可能并不好用。</p><p>此时，可以使用 <code>Component</code> 构造器来构造页面。<code>Component</code> 构造器的主要区别是: 方法需要放在 <code>methods: { }</code> 里面。</p><p>代码示例:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;This is page data.&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 页面创建时执行</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">onPullDownRefresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 下拉刷新时执行</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 事件响应函数</span>
    <span class="token function">viewTap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// ...</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种创建方式非常类似于 自定义组件 ，可以像自定义组件一样使用 <code>behaviors</code> 等高级特性。</p><p>具体细节请阅读 <code>Component</code> 构造器 章节。</p>`,6);function x(j,A){const t=o("Badge"),e=o("RouteLink");return l(),u("div",null,[n("h2",r,[n("a",k,[n("span",null,[s("注册小程序 "),a(t,{text:"重要",type:"error"})])])]),m,n("p",null,[s("详细的参数含义和使用请参考 "),a(e,{to:"/code/mini-app/guide/service/app.html"},{default:c(()=>[s("App 参考文档")]),_:1}),s("。")]),v,n("h3",b,[n("a",g,[n("span",null,[s("使用 Page 构造器注册页面 "),a(t,{text:"重要",type:"error"})])])]),h,n("p",null,[s("详细的参数含义和使用请参考 "),a(e,{to:"/code/mini-app/guide/service/page.html"},{default:c(()=>[s("Page 参考文档")]),_:1}),s("。")]),n("h3",f,[n("a",y,[n("span",null,[s("使用 Component 构造器构造页面 "),a(t,{text:"初学无需了解",type:"grey"})])])]),_])}const D=i(d,[["render",x],["__file","register.html.vue"]]),P=JSON.parse('{"path":"/code/mini-app/guide/service/register.html","title":"注册","lang":"zh-CN","frontmatter":{"date":"2020-10-09T00:00:00.000Z","title":"注册","icon":"config","category":"小程序","description":"注册小程序 每个小程序都需要在 app.js 中调用 App 方法注册小程序示例，绑定生命周期回调函数、错误监听和页面不存在监听函数等。 详细的参数含义和使用请参考 。 整个小程序只有一个 App 实例，是全部页面共享的。 通过 getApp 方法获取到全局唯一的 App 示例，获取 App 上的数据或调用注册在 App 上的函数。 注册页面 对于小程...","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/code/mini-app/guide/service/register.html"}],["meta",{"property":"og:site_name","content":"梦里不知身是客"}],["meta",{"property":"og:title","content":"注册"}],["meta",{"property":"og:description","content":"注册小程序 每个小程序都需要在 app.js 中调用 App 方法注册小程序示例，绑定生命周期回调函数、错误监听和页面不存在监听函数等。 详细的参数含义和使用请参考 。 整个小程序只有一个 App 实例，是全部页面共享的。 通过 getApp 方法获取到全局唯一的 App 示例，获取 App 上的数据或调用注册在 App 上的函数。 注册页面 对于小程..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-03T05:28:44.000Z"}],["meta",{"property":"article:author","content":"unknowIfGuestInDream"}],["meta",{"property":"article:published_time","content":"2020-10-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-03T05:28:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"注册\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-10-09T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-03T05:28:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"unknowIfGuestInDream\\",\\"url\\":\\"https://tlcsdm.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://blog.tlcsdm.com/atom.xml","title":"梦里不知身是客 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://blog.tlcsdm.com/feed.json","title":"梦里不知身是客 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://blog.tlcsdm.com/rss.xml","title":"梦里不知身是客 RSS Feed"}]]},"headers":[{"level":2,"title":"注册小程序","slug":"注册小程序","link":"#注册小程序","children":[]},{"level":2,"title":"注册页面","slug":"注册页面","link":"#注册页面","children":[{"level":3,"title":"使用 Page 构造器注册页面","slug":"使用-page-构造器注册页面","link":"#使用-page-构造器注册页面","children":[]},{"level":3,"title":"使用 Component 构造器构造页面","slug":"使用-component-构造器构造页面","link":"#使用-component-构造器构造页面","children":[]}]}],"git":{"createdTime":1665160537000,"updatedTime":1706938124000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":2}]},"readingTime":{"minutes":2.13,"words":638},"filePathRelative":"code/mini-app/guide/service/register.md","localizedDate":"2020年10月9日","excerpt":"","autoDesc":true}');export{D as comp,P as data};