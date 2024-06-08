import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as e,o as c,c as l,a as n,e as s,d as t,b as u,f as p}from"./app-C7BN-lPW.js";const i={},r={href:"https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/ch2.html",target:"_blank",rel:"noopener noreferrer"},k=p(`<h2 id="函数声明" tabindex="-1"><a class="header-anchor" href="#函数声明"><span>函数声明</span></a></h2><p>在 JavaScript 中，有两种常见的定义函数的方式——函数声明(Function Declaration)和函数表达式(Function Expression):</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 函数声明(Function Declaration)</span>
<span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 函数表达式(Function Expression)</span>
<span class="token keyword">let</span> <span class="token function-variable function">mySum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>一个函数有输入和输出，要在 TypeScript 中对其进行约束，需要把输入和输出都考虑到，其中函数声明的类型定义较简单:</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>注意，<strong>输入多余的(或者少于要求的)参数，是不被允许的</strong>:</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// index.ts(4,1): error TS2346: Supplied parameters do not match any signature of call target.</span>
</code></pre></div><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// index.ts(4,1): error TS2346: Supplied parameters do not match any signature of call target.</span>
</code></pre></div><h2 id="函数表达式" tabindex="-1"><a class="header-anchor" href="#函数表达式"><span>函数表达式</span></a></h2><p>如果要我们现在写一个对函数表达式(Function Expression)的定义，可能会写成这样:</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> <span class="token function-variable function">mySum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>这是可以通过编译的，不过事实上，上面的代码只对等号右侧的匿名函数进行了类型定义，而等号左边的 <code>mySum</code>，是通过赋值操作进行类型推论而推断出来的。如果需要我们手动给 <code>mySum</code> 添加类型，则应该是这样:</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> <span class="token function-variable function">mySum</span><span class="token operator">:</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function-variable function">number</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>注意不要混淆了 TypeScript 中的 <code>=&gt;</code> 和 ES6 中的 <code>=&gt;</code>。</p><p>在 TypeScript 的类型定义中，<code>=&gt;</code> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。</p>`,15),d=n("code",null,"=>",-1),m={href:"http://es6.ruanyifeng.com/#docs/function#%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0",target:"_blank",rel:"noopener noreferrer"},g=p(`<h2 id="用接口定义函数的形状" tabindex="-1"><a class="header-anchor" href="#用接口定义函数的形状"><span>用接口定义函数的形状</span></a></h2><p>我们也可以使用接口的方式来定义一个函数需要符合的形状:</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">SearchFunc</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span>source<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> subString<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> mySearch<span class="token operator">:</span> SearchFunc<span class="token punctuation">;</span>
<span class="token function-variable function">mySearch</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>source<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> subString<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> source<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>subString<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="可选参数" tabindex="-1"><a class="header-anchor" href="#可选参数"><span>可选参数</span></a></h2><p>前面提到，输入多余的(或者少于要求的)参数，是不允许的。那么如何定义可选的参数呢?</p><p>与接口中的可选属性类似，我们用 <code>?</code> 表示可选的参数:</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">buildName</span><span class="token punctuation">(</span>firstName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> lastName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>lastName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> firstName <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> lastName<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> firstName<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> tomcat <span class="token operator">=</span> <span class="token function">buildName</span><span class="token punctuation">(</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Cat&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> tom <span class="token operator">=</span> <span class="token function">buildName</span><span class="token punctuation">(</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>需要注意的是，可选参数必须接在必需参数后面。换句话说，<strong>可选参数后面不允许再出现必需参数了</strong>:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">buildName</span><span class="token punctuation">(</span>firstName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> lastName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>firstName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> firstName <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> lastName<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> lastName<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> tomcat <span class="token operator">=</span> <span class="token function">buildName</span><span class="token punctuation">(</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Cat&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> tom <span class="token operator">=</span> <span class="token function">buildName</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// index.ts(1,40): error TS1016: A required parameter cannot follow an optional parameter.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参数默认值" tabindex="-1"><a class="header-anchor" href="#参数默认值"><span>参数默认值</span></a></h2><p>在 ES6 中，我们允许给函数的参数添加默认值，<strong>TypeScript 会将添加了默认值的参数识别为可选参数</strong>:</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">buildName</span><span class="token punctuation">(</span>firstName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> lastName<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;Cat&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> firstName <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> lastName<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> tomcat <span class="token operator">=</span> <span class="token function">buildName</span><span class="token punctuation">(</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Cat&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> tom <span class="token operator">=</span> <span class="token function">buildName</span><span class="token punctuation">(</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>此时就不受「可选参数必须接在必需参数后面」的限制了:</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">buildName</span><span class="token punctuation">(</span>firstName<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span> lastName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> firstName <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> lastName<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> tomcat <span class="token operator">=</span> <span class="token function">buildName</span><span class="token punctuation">(</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Cat&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> cat <span class="token operator">=</span> <span class="token function">buildName</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token string">&quot;Cat&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,14),f={href:"http://es6.ruanyifeng.com/#docs/function#%E5%87%BD%E6%95%B0%E5%8F%82%E6%95%B0%E7%9A%84%E9%BB%98%E8%AE%A4%E5%80%BC",target:"_blank",rel:"noopener noreferrer"},y=p(`<h2 id="剩余参数" tabindex="-1"><a class="header-anchor" href="#剩余参数"><span>剩余参数</span></a></h2><p>ES6 中，可以使用 <code>...rest</code> 的方式获取函数中的剩余参数(rest 参数):</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">push</span><span class="token punctuation">(</span><span class="token parameter">array<span class="token punctuation">,</span> <span class="token operator">...</span>items</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  items<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    array<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token function">push</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>事实上，<code>items</code> 是一个数组。所以我们可以用数组的类型来定义它:</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">push</span><span class="token punctuation">(</span>array<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">...</span>items<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  items<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    array<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token function">push</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,5),b={href:"http://es6.ruanyifeng.com/#docs/function#rest%E5%8F%82%E6%95%B0",target:"_blank",rel:"noopener noreferrer"},h=p(`<h2 id="重载" tabindex="-1"><a class="header-anchor" href="#重载"><span>重载</span></a></h2><p>重载允许一个函数接受不同数量或类型的参数时，作出不同的处理。</p><p>比如，我们需要实现一个函数 <code>reverse</code>，输入数字 <code>123</code> 的时候，输出反转的数字 <code>321</code>，输入字符串 <code>&#39;hello&#39;</code> 的时候，输出反转的字符串 <code>&#39;olleh&#39;</code>。</p><p>利用联合类型，我们可以这么实现:</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">reverse</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> x <span class="token operator">===</span> <span class="token string">&quot;number&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">Number</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> x <span class="token operator">===</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>然而这样有一个缺点，就是不能够精确的表达，输入为数字的时候，输出也应该为数字，输入为字符串的时候，输出也应该为字符串。</p><p>这时，我们可以使用重载定义多个 <code>reverse</code> 的函数类型:</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">reverse</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">reverse</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">reverse</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> x <span class="token operator">===</span> <span class="token string">&quot;number&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">Number</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> x <span class="token operator">===</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>上例中，我们重复定义了多次函数 <code>reverse</code>，前几次都是函数定义，最后一次是函数实现。在编辑器的代码提示中，可以正确的看到前两个提示。</p><p>注意，TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面。</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2>`,11),v={href:"http://www.typescriptlang.org/docs/handbook/functions.html",target:"_blank",rel:"noopener noreferrer"},w={href:"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Functions.html",target:"_blank",rel:"noopener noreferrer"},q={href:"http://www.typescriptlang.org/docs/handbook/interfaces.html#function-types",target:"_blank",rel:"noopener noreferrer"},x={href:"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Interfaces.html#%E5%87%BD%E6%95%B0%E7%B1%BB%E5%9E%8B",target:"_blank",rel:"noopener noreferrer"},_={href:"https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/",target:"_blank",rel:"noopener noreferrer"},E={href:"http://es6.ruanyifeng.com/#docs/function#%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0",target:"_blank",rel:"noopener noreferrer"},S={href:"http://es6.ruanyifeng.com/#docs/function#%E5%87%BD%E6%95%B0%E5%8F%82%E6%95%B0%E7%9A%84%E9%BB%98%E8%AE%A4%E5%80%BC",target:"_blank",rel:"noopener noreferrer"},N={href:"http://es6.ruanyifeng.com/#docs/function#rest%E5%8F%82%E6%95%B0",target:"_blank",rel:"noopener noreferrer"};function B(T,F){const a=e("ExternalLinkIcon");return c(),l("div",null,[n("blockquote",null,[n("p",null,[n("a",r,[s("函数是 JavaScript 中的一等公民"),t(a)])])]),u(" more "),k,n("p",null,[s("在 ES6 中，"),d,s(" 叫做箭头函数，应用十分广泛，可以参考 "),n("a",m,[s("ES6 中的箭头函数"),t(a)]),s("。")]),g,n("blockquote",null,[n("p",null,[s("关于默认参数，可以参考 "),n("a",f,[s("ES6 中函数参数的默认值"),t(a)]),s("。")])]),y,n("p",null,[s("注意，rest 参数只能是最后一个参数，关于 rest 参数，可以参考 "),n("a",b,[s("ES6 中的 rest 参数"),t(a)]),s("。")]),h,n("ul",null,[n("li",null,[n("a",v,[s("Functions"),t(a)]),s("("),n("a",w,[s("中文版"),t(a)]),s(")")]),n("li",null,[n("a",q,[s("Functions # Function Types"),t(a)]),s("("),n("a",x,[s("中文版"),t(a)]),s(")")]),n("li",null,[n("a",_,[s("JS 函数式编程指南"),t(a)])]),n("li",null,[n("a",E,[s("ES6 中的箭头函数"),t(a)])]),n("li",null,[n("a",S,[s("ES6 中函数参数的默认值"),t(a)])]),n("li",null,[n("a",N,[s("ES6 中的 rest 参数"),t(a)])])])])}const D=o(i,[["render",B],["__file","type-of-function.html.vue"]]),C=JSON.parse('{"path":"/code/language/typescript/basics/type-of-function.html","title":"函数的类型","lang":"zh-CN","frontmatter":{"date":"2020-05-04T00:00:00.000Z","title":"函数的类型","icon":"function","category":"TypeScript","description":"函数是 JavaScript 中的一等公民","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/code/language/typescript/basics/type-of-function.html"}],["meta",{"property":"og:site_name","content":"梦里不知身是客"}],["meta",{"property":"og:title","content":"函数的类型"}],["meta",{"property":"og:description","content":"函数是 JavaScript 中的一等公民"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-03T05:28:44.000Z"}],["meta",{"property":"article:author","content":"unknowIfGuestInDream"}],["meta",{"property":"article:published_time","content":"2020-05-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-03T05:28:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"函数的类型\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-03T05:28:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"unknowIfGuestInDream\\",\\"url\\":\\"https://tlcsdm.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://blog.tlcsdm.com/atom.xml","title":"梦里不知身是客 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://blog.tlcsdm.com/feed.json","title":"梦里不知身是客 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://blog.tlcsdm.com/rss.xml","title":"梦里不知身是客 RSS Feed"}]]},"headers":[{"level":2,"title":"函数声明","slug":"函数声明","link":"#函数声明","children":[]},{"level":2,"title":"函数表达式","slug":"函数表达式","link":"#函数表达式","children":[]},{"level":2,"title":"用接口定义函数的形状","slug":"用接口定义函数的形状","link":"#用接口定义函数的形状","children":[]},{"level":2,"title":"可选参数","slug":"可选参数","link":"#可选参数","children":[]},{"level":2,"title":"参数默认值","slug":"参数默认值","link":"#参数默认值","children":[]},{"level":2,"title":"剩余参数","slug":"剩余参数","link":"#剩余参数","children":[]},{"level":2,"title":"重载","slug":"重载","link":"#重载","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1665160537000,"updatedTime":1706938124000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":2}]},"readingTime":{"minutes":4.55,"words":1364},"filePathRelative":"code/language/typescript/basics/type-of-function.md","localizedDate":"2020年5月4日","excerpt":"<blockquote>\\n<p><a href=\\"https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/ch2.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">函数是 JavaScript 中的一等公民</a></p>\\n</blockquote>\\n","autoDesc":true}');export{D as comp,C as data};