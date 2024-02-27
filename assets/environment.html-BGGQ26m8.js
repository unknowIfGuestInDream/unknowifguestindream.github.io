import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as e,o as l,c as r,b as c,a as n,e as s,d as t,w as i,f as u}from"./app-DmUMnqle.js";const d={},m=n("p",null,[s("由于 Node.js 需要编码、运行、调试，我们需要一个 IDE 集成开发环境，这样就可以大大提升开发效率。综合考察后，Mr.Hope 隆重向大家推荐 Node.js 集成开发环境: "),n("strong",null,"Visual Studio Code"),s("。它启动速度快，执行简单，调试方便这三点上。当然，免费使用是一个加分项。")],-1),k={class:"hint-container info"},v=n("p",{class:"hint-container-title"},"相关信息",-1),h=u(`<h2 id="运行和调试-javascript" tabindex="-1"><a class="header-anchor" href="#运行和调试-javascript"><span>运行和调试 JavaScript</span></a></h2><p>在 VS Code 中，我们可以非常方便地运行 JavaScript 文件。</p><p>VS Code 以文件夹作为工程目录 (Workspace Dir)，所有的 JavaScript 文件都存放在该目录下。此外，VS Code 在工程目录下还需要一个 <code>.vscode</code> 的配置目录，里面存放里 VS Code 需要的配置文件。</p><p>假设我们在 <code>C:\\Work\\</code> 目录下创建了一个 hello 目录作为工程目录，并编写了一个 <code>hello.js</code> 文件，则该工程目录的结构如下:</p><div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>hello/ &lt;-- workspace dir
|
├─ hello.js &lt;-- JavaScript file
|
└─ .vscode/ &lt;-- VS Code config
      |
      └ launch.json &lt;-- VS Code config file for JavaScript
</code></pre></div><p>可以用 VS Code 快速创建 <code>launch.json</code>，然后修改如下:</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.2.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;configurations&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Run hello.js&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;request&quot;</span><span class="token operator">:</span> <span class="token string">&quot;launch&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;program&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${workspaceRoot}/hello.js&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;stopOnEntry&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;cwd&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${workspaceRoot}&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;preLaunchTask&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token property">&quot;runtimeExecutable&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token property">&quot;runtimeArgs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;--nolazy&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;env&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;NODE_ENV&quot;</span><span class="token operator">:</span> <span class="token string">&quot;development&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;externalConsole&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sourceMaps&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有了配置文件，即可使用 VS Code 调试 JavaScript。</p><h2 id="视频演示" tabindex="-1"><a class="header-anchor" href="#视频演示"><span>视频演示</span></a></h2>`,9),q={href:"https://www.bilibili.com/video/av5827351/",target:"_blank",rel:"noopener noreferrer"};function g(y,b){const a=e("RouteLink"),o=e("ExternalLinkIcon");return l(),r("div",null,[m,c(" more "),n("div",k,[v,n("p",null,[s("有关 VS Code 使用教程请"),t(a,{to:"/software/vscode/"},{default:i(()=>[s("访问这里")]),_:1})])]),h,n("ul",null,[n("li",null,[n("a",q,[s("视频演示"),t(o)])])])])}const j=p(d,[["render",g],["__file","environment.html.vue"]]),S=JSON.parse('{"path":"/code/node-js/environment.html","title":"搭建 Node 开发环境","lang":"zh-CN","frontmatter":{"date":"2020-12-27T00:00:00.000Z","title":"搭建 Node 开发环境","icon":"leaf","order":3,"category":"Node.js","tag":["Node.js","软件"],"description":"由于 Node.js 需要编码、运行、调试，我们需要一个 IDE 集成开发环境，这样就可以大大提升开发效率。综合考察后，Mr.Hope 隆重向大家推荐 Node.js 集成开发环境: Visual Studio Code。它启动速度快，执行简单，调试方便这三点上。当然，免费使用是一个加分项。 相关信息 有关 VS Code 使用教程请 运行和调试 Ja...","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/code/node-js/environment.html"}],["meta",{"property":"og:site_name","content":"梦里不知身是客"}],["meta",{"property":"og:title","content":"搭建 Node 开发环境"}],["meta",{"property":"og:description","content":"由于 Node.js 需要编码、运行、调试，我们需要一个 IDE 集成开发环境，这样就可以大大提升开发效率。综合考察后，Mr.Hope 隆重向大家推荐 Node.js 集成开发环境: Visual Studio Code。它启动速度快，执行简单，调试方便这三点上。当然，免费使用是一个加分项。 相关信息 有关 VS Code 使用教程请 运行和调试 Ja..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-03T05:28:44.000Z"}],["meta",{"property":"article:author","content":"unknowIfGuestInDream"}],["meta",{"property":"article:tag","content":"Node.js"}],["meta",{"property":"article:tag","content":"软件"}],["meta",{"property":"article:published_time","content":"2020-12-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-03T05:28:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"搭建 Node 开发环境\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-12-27T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-03T05:28:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"unknowIfGuestInDream\\",\\"url\\":\\"https://tlcsdm.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://blog.tlcsdm.com/atom.xml","title":"梦里不知身是客 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://blog.tlcsdm.com/feed.json","title":"梦里不知身是客 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://blog.tlcsdm.com/rss.xml","title":"梦里不知身是客 RSS Feed"}]]},"headers":[{"level":2,"title":"运行和调试 JavaScript","slug":"运行和调试-javascript","link":"#运行和调试-javascript","children":[]},{"level":2,"title":"视频演示","slug":"视频演示","link":"#视频演示","children":[]}],"git":{"createdTime":1665160537000,"updatedTime":1706938124000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":2}]},"readingTime":{"minutes":1.17,"words":351},"filePathRelative":"code/node-js/environment.md","localizedDate":"2020年12月27日","excerpt":"<p>由于 Node.js 需要编码、运行、调试，我们需要一个 IDE 集成开发环境，这样就可以大大提升开发效率。综合考察后，Mr.Hope 隆重向大家推荐 Node.js 集成开发环境: <strong>Visual Studio Code</strong>。它启动速度快，执行简单，调试方便这三点上。当然，免费使用是一个加分项。</p>\\n","autoDesc":true}');export{j as comp,S as data};