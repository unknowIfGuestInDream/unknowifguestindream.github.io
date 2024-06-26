import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as p,c as r,b as c,a as e,e as t,d as a,f as l}from"./app-Bd3TCVLi.js";const i={},m=e("p",null,"如果没有明确的指定类型，那么 TypeScript 会依照类型推论(Type Inference)的规则推断出一个类型。",-1),d=l(`<h2 id="什么是类型推论" tabindex="-1"><a class="header-anchor" href="#什么是类型推论"><span>什么是类型推论</span></a></h2><p>以下代码虽然没有指定类型，但是会在编译的时候报错:</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> myFavoriteNumber <span class="token operator">=</span> <span class="token string">&quot;seven&quot;</span><span class="token punctuation">;</span>
myFavoriteNumber <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>

<span class="token comment">// index.ts(2,1): error TS2322: Type &#39;number&#39; is not assignable to type &#39;string&#39;.</span>
</code></pre></div><p>事实上，它等价于:</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> myFavoriteNumber<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;seven&quot;</span><span class="token punctuation">;</span>
myFavoriteNumber <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>

<span class="token comment">// index.ts(2,1): error TS2322: Type &#39;number&#39; is not assignable to type &#39;string&#39;.</span>
</code></pre></div><p>TypeScript 会在没有明确的指定类型的时候推测出一个类型，这就是类型推论。</p><p><strong>如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 <code>any</code> 类型而完全不被类型检查</strong>:</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> myFavoriteNumber<span class="token punctuation">;</span>
myFavoriteNumber <span class="token operator">=</span> <span class="token string">&quot;seven&quot;</span><span class="token punctuation">;</span>
myFavoriteNumber <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2>`,9),u={href:"http://www.typescriptlang.org/docs/handbook/type-inference.html",target:"_blank",rel:"noopener noreferrer"},y={href:"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Type%20Inference.html",target:"_blank",rel:"noopener noreferrer"};function g(h,k){const n=o("ExternalLinkIcon");return p(),r("div",null,[m,c(" more "),d,e("ul",null,[e("li",null,[e("a",u,[t("Type Inference"),a(n)]),t("("),e("a",y,[t("中文版"),a(n)]),t(")")])])])}const _=s(i,[["render",g],["__file","type-inference.html.vue"]]),T=JSON.parse('{"path":"/code/language/typescript/basics/type-inference.html","title":"类型推论","lang":"zh-CN","frontmatter":{"date":"2020-05-04T00:00:00.000Z","title":"类型推论","icon":"extend","category":"TypeScript","description":"如果没有明确的指定类型，那么 TypeScript 会依照类型推论(Type Inference)的规则推断出一个类型。","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/code/language/typescript/basics/type-inference.html"}],["meta",{"property":"og:site_name","content":"梦里不知身是客"}],["meta",{"property":"og:title","content":"类型推论"}],["meta",{"property":"og:description","content":"如果没有明确的指定类型，那么 TypeScript 会依照类型推论(Type Inference)的规则推断出一个类型。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-03T05:28:44.000Z"}],["meta",{"property":"article:author","content":"unknowIfGuestInDream"}],["meta",{"property":"article:published_time","content":"2020-05-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-03T05:28:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"类型推论\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-03T05:28:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"unknowIfGuestInDream\\",\\"url\\":\\"https://tlcsdm.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://blog.tlcsdm.com/atom.xml","title":"梦里不知身是客 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://blog.tlcsdm.com/feed.json","title":"梦里不知身是客 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://blog.tlcsdm.com/rss.xml","title":"梦里不知身是客 RSS Feed"}]]},"headers":[{"level":2,"title":"什么是类型推论","slug":"什么是类型推论","link":"#什么是类型推论","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1665160537000,"updatedTime":1706938124000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":2}]},"readingTime":{"minutes":0.72,"words":215},"filePathRelative":"code/language/typescript/basics/type-inference.md","localizedDate":"2020年5月4日","excerpt":"<p>如果没有明确的指定类型，那么 TypeScript 会依照类型推论(Type Inference)的规则推断出一个类型。</p>\\n","autoDesc":true}');export{_ as comp,T as data};