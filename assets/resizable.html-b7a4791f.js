import{_ as i,X as o,Y as p,Z as n,$ as s,a1 as e,a3 as t,H as c}from"./framework-0ff09816.js";const l={},r=t(`<h2 id="显示区域尺寸" tabindex="-1"><a class="header-anchor" href="#显示区域尺寸" aria-hidden="true">#</a> 显示区域尺寸</h2><p>显示区域指小程序界面中可以自由布局展示的区域。在默认情况下，小程序显示区域的尺寸自页面初始化起就不会发生变化。但以下两种方式都可以改变这一默认行为。</p><h3 id="在手机上启用屏幕旋转支持" tabindex="-1"><a class="header-anchor" href="#在手机上启用屏幕旋转支持" aria-hidden="true">#</a> 在手机上启用屏幕旋转支持</h3><p>从小程序基础库版本 2.4.0 开始，小程序在手机上支持屏幕旋转。使小程序中的页面支持屏幕旋转的方法是: 在 app.json 的 window 段中设置 <code>&quot;pageOrientation&quot;: &quot;auto&quot;</code> ，或在页面 json 文件中配置 <code>&quot;pageOrientation&quot;: &quot;auto&quot;</code>。</p><details class="hint-container details"><summary>代码示例</summary><p>以下是在单个页面 json 文件中启用屏幕旋转的示例。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;pageOrientation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果页面添加了上述声明，则在屏幕旋转时，这个页面将随之旋转，显示区域尺寸也会随着屏幕旋转而变化。</p></details><p>从小程序基础库版本 2.5.0 开始， <code>pageOrientation</code> 还可以被设置为 <code>landscape</code> ，表示固定为横屏显示。</p><h3 id="在-ipad-上启用屏幕旋转支持" tabindex="-1"><a class="header-anchor" href="#在-ipad-上启用屏幕旋转支持" aria-hidden="true">#</a> 在 iPad 上启用屏幕旋转支持</h3><p>从小程序基础库版本 2.3.0 开始，在 iPad 上运行的小程序可以支持屏幕旋转。使小程序支持 iPad 屏幕旋转的方法是: 在 app.json 中添加 <code>&quot;resizable&quot;: true</code> 。</p><details class="hint-container details"><summary>代码示例</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;resizable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果小程序添加了上述声明，则在屏幕旋转时，小程序将随之旋转，显示区域尺寸也会随着屏幕旋转而变化。</p></details><div class="hint-container warning"><p class="hint-container-title">Note</p><p>在 iPad 上不能单独配置某个页面是否支持屏幕旋转。</p></div><h2 id="media-query" tabindex="-1"><a class="header-anchor" href="#media-query" aria-hidden="true">#</a> Media Query</h2><p>有时，对于不同尺寸的显示区域，页面的布局会有所差异。此时可以使用 media query 来解决大多数问题。</p><details class="hint-container details"><summary>代码示例</summary><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.my-class</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 480px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token comment">/*仅在 480px 或更宽的屏幕上生效的样式规则*/</span>
  <span class="token selector">.my-class</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,13),u={href:"https://developers.weixin.qq.com/miniprogram/dev/component/match-media.html",target:"_blank",rel:"noopener noreferrer"},d=n("code",null,"this.createMediaQueryObserver()",-1),m={href:"https://developers.weixin.qq.com/miniprogram/dev/api/wxml/MediaQueryObserver.html",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"MediaQueryObserver",-1),k={href:"https://developers.weixin.qq.com/s/TtFaFjmb7aiy",target:"_blank",rel:"noopener noreferrer"},h=n("h2",{id:"屏幕旋转事件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#屏幕旋转事件","aria-hidden":"true"},"#"),s(" 屏幕旋转事件")],-1),b=n("p",null,"有时，仅仅使用 media query 无法控制一些精细的布局变化。此时可以使用 js 作为辅助。",-1),_={href:"https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.selectViewport.html",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"selectorQuery.selectViewport",-1),q=n("li",null,[n("p",null,[s("页面尺寸发生改变的事件，可以使用页面的 "),n("code",null,"onResize"),s(" 来监听。")])],-1),y=n("li",null,[n("p",null,[s("对于自定义组件，可以使用 "),n("code",null,"resize"),s(" 生命周期来监听。回调函数中将返回显示区域的尺寸信息。(从基础库版本 2.4.0 开始支持。)")])],-1),w=t(`<details class="hint-container details"><summary>代码示例</summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">onResize</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span>size<span class="token punctuation">.</span>windowWidth<span class="token punctuation">;</span> <span class="token comment">// 新的显示区域宽度</span>
    res<span class="token punctuation">.</span>size<span class="token punctuation">.</span>windowHeight<span class="token punctuation">;</span> <span class="token comment">// 新的显示区域高度</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">pageLifetimes</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">resize</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span>size<span class="token punctuation">.</span>windowWidth<span class="token punctuation">;</span> <span class="token comment">// 新的显示区域宽度</span>
      res<span class="token punctuation">.</span>size<span class="token punctuation">.</span>windowHeight<span class="token punctuation">;</span> <span class="token comment">// 新的显示区域高度</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1),x={href:"https://developers.weixin.qq.com/miniprogram/dev/api/ui/window/wx.onWindowResize.html",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"wx.onWindowResize",-1);function j(z,O){const a=c("ExternalLinkIcon");return o(),p("div",null,[r,n("p",null,[s("在 WXML 中，可以使用 "),n("a",u,[s("match-media"),e(a)]),s(" 组件来根据 media query 匹配状态展示、隐藏节点。")]),n("p",null,[s("此外，可以在页面或者自定义组件 JS 中使用 "),d,s(" 方法来创建一个 "),n("a",m,[v,e(a)]),s(" 对象，用于监听指定的 media query 的匹配状态。")]),n("blockquote",null,[n("p",null,[n("a",k,[s("在开发者工具中预览效果"),e(a)])])]),h,b,n("ul",null,[n("li",null,[n("p",null,[s("在 js 中读取页面的显示区域尺寸，可以使用 "),n("a",_,[g,e(a)]),s(" 。")])]),q,y]),w,n("p",null,[s("此外，还可以使用 "),n("a",x,[f,e(a)]),s(" 来监听(但这不是推荐的方式)。")])])}const V=i(l,[["render",j],["__file","resizable.html.vue"]]);export{V as default};