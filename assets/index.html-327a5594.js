import{_ as i,X as d,Y as l,Z as n,$ as a,a1 as t,a0 as u,a2 as e,a3 as r,H as o}from"./framework-0ff09816.js";const k={},h={href:"https://developers.weixin.qq.com/miniprogram/dev/api/",target:"_blank",rel:"noopener noreferrer"},m=r(`<p>通常，在小程序 API 有以下几种类型:</p><h2 id="事件监听-api" tabindex="-1"><a class="header-anchor" href="#事件监听-api" aria-hidden="true">#</a> 事件监听 API</h2><p>我们约定，以 on 开头的 API 用来监听某个事件是否触发，如: <code>wx.onSocketOpen</code>, <code>wx.onCompassChange</code> 等。</p><p>这类 API 接受一个回调函数作为参数，当事件触发时会调用这个回调函数，并将相关数据以参数形式传入。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">onCompassChange</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>direction<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="同步-api" tabindex="-1"><a class="header-anchor" href="#同步-api" aria-hidden="true">#</a> 同步 API</h2><p>我们约定，以 <code>Sync</code> 结尾的 API 都是同步 API， 如 <code>wx.setStorageSync</code>，<code>wx.getSystemInfoSync</code> 等。此外，也有一些其他的同步 API，如 <code>wx.createWorker</code>, <code>wx.getBackgroundAudioManager</code> 等，详情参见 API 文档中的说明。</p><p>同步 API 的执行结果可以通过函数返回值直接获取，如果执行出错会抛出异常。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
  wx<span class="token punctuation">.</span><span class="token function">setStorageSync</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;value&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="异步-api" tabindex="-1"><a class="header-anchor" href="#异步-api" aria-hidden="true">#</a> 异步 API</h2><p>大多数 API 都是异步 API，如 <code>wx.request</code>，<code>wx.login</code> 等。这类 API 接口通常都接受一个 <code>Object</code> 类型的参数，这个参数都支持按需指定以下字段来接收接口调用结果:</p><h3 id="object-参数说明" tabindex="-1"><a class="header-anchor" href="#object-参数说明" aria-hidden="true">#</a> Object 参数说明</h3><table><thead><tr><th>参数名</th><th>类型</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>success</td><td>function</td><td>否</td><td>接口调用成功的回调函数</td></tr><tr><td>fail</td><td>function</td><td>否</td><td>接口调用失败的回调函数</td></tr><tr><td>complete</td><td>function</td><td>否</td><td>接口调用结束的回调函数(调用成功、失败都会执行)</td></tr><tr><td>其他</td><td>Any</td><td>-</td><td>接口定义的其他参数</td></tr></tbody></table><h3 id="回调函数的参数" tabindex="-1"><a class="header-anchor" href="#回调函数的参数" aria-hidden="true">#</a> 回调函数的参数</h3><p><code>success</code>, <code>fail</code>, <code>complete</code> 函数调用时会传入一个 <code>Object</code> 类型参数，包含以下字段:</p><table><thead><tr><th>属性</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>errMsg</td><td>string</td><td>错误信息，如果调用成功返回 <code>\${apiName}:ok</code></td></tr><tr><td>errCode</td><td>number</td><td>错误码，仅部分 API 支持，具体含义请参考对应 API 文档，成功时为 0。</td></tr><tr><td>其他</td><td>Any</td><td>接口返回的其他数据</td></tr></tbody></table><p>异步 API 的执行结果需要通过 <code>Object</code> 类型的参数中传入的对应回调函数获取。部分异步 API 也会有返回值，可以用来实现更丰富的功能，如 <code>wx.request</code>, <code>wx.connectSocke</code>t\` 等。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>code<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">Note</p><p>异步函数会在异步动作进行完之后，触发对应设置好的回调函数，所以此时的函数执行已经脱离了正常 js 的执行上下文。</p><p>如果对上面的话不理解，请务必查阅<strong>什么是同步/异步函数</strong>。</p></div><h2 id="常见-api" tabindex="-1"><a class="header-anchor" href="#常见-api" aria-hidden="true">#</a> 常见 API</h2>`,20);function v(g,b){const c=o("ExternalLinkIcon"),p=o("Badge"),s=o("RouterLink");return d(),l("div",null,[n("p",null,[a("小程序开发框架提供丰富的微信原生 API，可以方便的调起微信提供的能力，如获取用户信息，本地存储，支付功能等。详细介绍请参考 "),n("a",h,[a("API 文档"),t(c)]),a("。 "),t(p,{text:"重要",type:"error"})]),u(" more "),m,n("ul",null,[n("li",null,[n("p",null,[t(s,{to:"/en/code/mini-app/guide/service/api/route.html"},{default:e(()=>[a("路由")]),_:1})])]),n("li",null,[n("p",null,[t(s,{to:"/en/code/mini-app/guide/service/api/storage.html"},{default:e(()=>[a("数据缓存")]),_:1})])]),n("li",null,[n("p",null,[t(s,{to:"/en/code/mini-app/guide/service/api/interact.html"},{default:e(()=>[a("交互")]),_:1})])]),n("li",null,[n("p",null,[t(s,{to:"/en/code/mini-app/guide/service/api/network.html"},{default:e(()=>[a("网络")]),_:1})])]),n("li",null,[n("p",null,[t(s,{to:"/en/code/mini-app/guide/service/api/system.html"},{default:e(()=>[a("系统信息")]),_:1})])])])])}const x=i(k,[["render",v],["__file","index.html.vue"]]);export{x as default};