import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o,c as p,a as n,e as a,d as s,b as l,f as i}from"./app-C7BN-lPW.js";const r={},u=n("p",null,"这个 Action 允许您缓存依赖项和构建输出内容以缩短 Workflow 执行时间。",-1),d=n("p",null,"日常最多使用的就是缓存依赖项，在每个工作流程中，将安装后的依赖通过安装后生成的依赖版本文件的哈希值进行缓存。",-1),h=n("p",null,"当前工作流程的版本文件哈希值与历史缓存中的某一项完全相同时，直接载入这些依赖项缓存，这样就可以免去安装步骤。",-1),k={class:"hint-container info"},m=n("p",{class:"hint-container-title"},"缓存依赖",-1),y={href:"https://docs.github.com/cn/actions/guides/caching-dependencies-to-speed-up-workflows",target:"_blank",rel:"noopener noreferrer"},g=n("h2",{id:"配置项",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置项"},[n("span",null,"配置项")])],-1),v=n("h3",{id:"path",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#path"},[n("span",null,"path")])],-1),_=n("p",null,"要缓存和还原的文件，目录和通配符模式的列表。",-1),b={class:"hint-container info"},f=n("p",{class:"hint-container-title"},"相关信息",-1),x={href:"https://github.com/actions/toolkit/tree/main/packages/glob",target:"_blank",rel:"noopener noreferrer"},w=i(`<h3 id="key" tabindex="-1"><a class="header-anchor" href="#key"><span>key</span></a></h3><p>用于保存缓存与还原缓存的的密钥</p><h3 id="restore-keys" tabindex="-1"><a class="header-anchor" href="#restore-keys"><span>restore-keys</span></a></h3><p>当 key 没有命中缓存是用于恢复缓存键值的有序列表</p><h2 id="输出" tabindex="-1"><a class="header-anchor" href="#输出"><span>输出</span></a></h2><p><code>cache-hit</code>: 一个布尔值，表明是否找到与该键完全匹配的值</p><h2 id="缓存范围" tabindex="-1"><a class="header-anchor" href="#缓存范围"><span>缓存范围</span></a></h2><p>缓存的作用域为特定的键和分支。默认分支缓存可用于其他分支。</p><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例"><span>案例</span></a></h2><p>Yarn:</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/cache@v3
  <span class="token comment"># 使用此 id 获得 \`cache-hit\`</span>
  <span class="token comment"># (\`steps.yarn-cache.outputs.cache-hit != &#39;true&#39;\`)</span>
  <span class="token key atrule">id</span><span class="token punctuation">:</span> yarn<span class="token punctuation">-</span>cache
  <span class="token key atrule">with</span><span class="token punctuation">:</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> node_modules/
    <span class="token key atrule">key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> runner.os <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">-</span>yarn<span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> hashFiles(&#39;<span class="token important">**/yarn.lock&#39;)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token key atrule">restore-keys</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
      \${{ runner.os }}-yarn-</span>

<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install Dependencies
  <span class="token key atrule">if</span><span class="token punctuation">:</span> steps.yarn<span class="token punctuation">-</span>cache.outputs.cache<span class="token punctuation">-</span>hit <span class="token tag">!=</span> &#39;true&#39;
  <span class="token key atrule">run</span><span class="token punctuation">:</span> yarn install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建一个缓存键" tabindex="-1"><a class="header-anchor" href="#创建一个缓存键"><span>创建一个缓存键</span></a></h2><p>缓存键可以包括 GitHub Actions 支持的任何上下文，函数，文字和运算符。</p><p>例如，使用 <code>hashFiles</code> 功能可让您在依存关系更改时创建新的缓存。</p><div class="language-yaml" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/cache@v3
  <span class="token key atrule">id</span><span class="token punctuation">:</span> yarn<span class="token punctuation">-</span>cache
  <span class="token key atrule">with</span><span class="token punctuation">:</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
      node_modules/</span>
    <span class="token key atrule">key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> runner.os <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> hashFiles(&#39;<span class="token important">**/yarn.lock&#39;)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre></div><p>利用 cache-hit 输出，当对应键命中特定缓存后，可以跳过后续步骤 (例如，安装或构建) 。</p><div class="language-yaml" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install Dependencies
  <span class="token key atrule">if</span><span class="token punctuation">:</span> steps.yarn<span class="token punctuation">-</span>cache.outputs.cache<span class="token punctuation">-</span>hit <span class="token tag">!=</span> &#39;true&#39;
  <span class="token key atrule">run</span><span class="token punctuation">:</span> yarn install
</code></pre></div><h2 id="缓存限制" tabindex="-1"><a class="header-anchor" href="#缓存限制"><span>缓存限制</span></a></h2><p>一个存储库最多可以有 5GB 的缓存。达到 5GB 限制后，将根据上次访问缓存的时间驱逐较早的缓存。过去未访问的缓存也将被自动删除。</p><h2 id="仓库" tabindex="-1"><a class="header-anchor" href="#仓库"><span>仓库</span></a></h2>`,20),T={href:"https://github.com/actions/cache",target:"_blank",rel:"noopener noreferrer"};function N(I,A){const e=c("ExternalLinkIcon");return o(),p("div",null,[u,d,h,n("div",k,[m,n("p",null,[a("关于缓存依赖的文档，详见 "),n("a",y,[a("缓存依赖项以加快工作流程"),s(e)]),a("。")])]),l(" more "),g,v,_,n("div",b,[f,n("p",null,[a("支持的 glob 模式，请参见 "),n("a",x,[a("@actions/glob"),s(e)]),a("。")])]),w,n("p",null,[n("a",T,[a("https://github.com/actions/cache"),s(e)])])])}const G=t(r,[["render",N],["__file","cache.html.vue"]]),Z=JSON.parse('{"path":"/code/github/actions/cache.html","title":"cache","lang":"zh-CN","frontmatter":{"title":"cache","date":"2021-02-20T00:00:00.000Z","category":"GitHub","tag":["action","workflow"],"description":"这个 Action 允许您缓存依赖项和构建输出内容以缩短 Workflow 执行时间。 日常最多使用的就是缓存依赖项，在每个工作流程中，将安装后的依赖通过安装后生成的依赖版本文件的哈希值进行缓存。 当前工作流程的版本文件哈希值与历史缓存中的某一项完全相同时，直接载入这些依赖项缓存，这样就可以免去安装步骤。 缓存依赖 关于缓存依赖的文档，详见 缓存依赖项...","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/code/github/actions/cache.html"}],["meta",{"property":"og:site_name","content":"梦里不知身是客"}],["meta",{"property":"og:title","content":"cache"}],["meta",{"property":"og:description","content":"这个 Action 允许您缓存依赖项和构建输出内容以缩短 Workflow 执行时间。 日常最多使用的就是缓存依赖项，在每个工作流程中，将安装后的依赖通过安装后生成的依赖版本文件的哈希值进行缓存。 当前工作流程的版本文件哈希值与历史缓存中的某一项完全相同时，直接载入这些依赖项缓存，这样就可以免去安装步骤。 缓存依赖 关于缓存依赖的文档，详见 缓存依赖项..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-10-07T16:35:37.000Z"}],["meta",{"property":"article:author","content":"unknowIfGuestInDream"}],["meta",{"property":"article:tag","content":"action"}],["meta",{"property":"article:tag","content":"workflow"}],["meta",{"property":"article:published_time","content":"2021-02-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-07T16:35:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"cache\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-02-20T00:00:00.000Z\\",\\"dateModified\\":\\"2022-10-07T16:35:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"unknowIfGuestInDream\\",\\"url\\":\\"https://tlcsdm.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://blog.tlcsdm.com/atom.xml","title":"梦里不知身是客 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://blog.tlcsdm.com/feed.json","title":"梦里不知身是客 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://blog.tlcsdm.com/rss.xml","title":"梦里不知身是客 RSS Feed"}]]},"headers":[{"level":2,"title":"配置项","slug":"配置项","link":"#配置项","children":[{"level":3,"title":"path","slug":"path","link":"#path","children":[]},{"level":3,"title":"key","slug":"key","link":"#key","children":[]},{"level":3,"title":"restore-keys","slug":"restore-keys","link":"#restore-keys","children":[]}]},{"level":2,"title":"输出","slug":"输出","link":"#输出","children":[]},{"level":2,"title":"缓存范围","slug":"缓存范围","link":"#缓存范围","children":[]},{"level":2,"title":"案例","slug":"案例","link":"#案例","children":[]},{"level":2,"title":"创建一个缓存键","slug":"创建一个缓存键","link":"#创建一个缓存键","children":[]},{"level":2,"title":"缓存限制","slug":"缓存限制","link":"#缓存限制","children":[]},{"level":2,"title":"仓库","slug":"仓库","link":"#仓库","children":[]}],"git":{"createdTime":1665160537000,"updatedTime":1665160537000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":1}]},"readingTime":{"minutes":1.75,"words":526},"filePathRelative":"code/github/actions/cache.md","localizedDate":"2021年2月20日","excerpt":"<p>这个 Action 允许您缓存依赖项和构建输出内容以缩短 Workflow 执行时间。</p>\\n<p>日常最多使用的就是缓存依赖项，在每个工作流程中，将安装后的依赖通过安装后生成的依赖版本文件的哈希值进行缓存。</p>\\n<p>当前工作流程的版本文件哈希值与历史缓存中的某一项完全相同时，直接载入这些依赖项缓存，这样就可以免去安装步骤。</p>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">缓存依赖</p>\\n<p>关于缓存依赖的文档，详见 <a href=\\"https://docs.github.com/cn/actions/guides/caching-dependencies-to-speed-up-workflows\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">缓存依赖项以加快工作流程</a>。</p>\\n</div>\\n","autoDesc":true}');export{G as comp,Z as data};