import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o,c as p,a as n,e as t,d as r,f as c}from"./app-DmUMnqle.js";const l="/assets/task-runner-DbmCCwe3.gif",i={},d=n("h2",{id:"自动检测任务",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自动检测任务"},[n("span",null,"自动检测任务")])],-1),u=n("strong",null,"终端",-1),m=n("strong",null,"配置任务",-1),k=n("code",null,"tasks.json",-1),g={href:"https://code.visualstudio.com/docs/editor/debugging",target:"_blank",rel:"noopener noreferrer"},h=c(`<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token comment">// See &lt;https://go.microsoft.com/fwlink/?LinkId=733558&gt;</span>
  <span class="token comment">// for the documentation about the tasks.json format</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;tasks&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;script&quot;</span><span class="token operator">:</span> <span class="token string">&quot;install&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;group&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;kind&quot;</span><span class="token operator">:</span> <span class="token string">&quot;build&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;isDefault&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自动生成有时会出现问题。请查阅文档，以确保一切正常。</p><h2 id="从终端菜单运行任务" tabindex="-1"><a class="header-anchor" href="#从终端菜单运行任务"><span>从终端菜单运行任务</span></a></h2><p>从顶层菜单中选择 <strong>终端 &gt; 运行任务</strong>，然后选择要运行的任务。通过运行命令 <strong>终止任务</strong> 终止正在运行的任务</p><figure><img src="`+l+`" alt="任务执行器" tabindex="0" loading="lazy"><figcaption>任务执行器</figcaption></figure><h2 id="定义任务的键盘快捷键" tabindex="-1"><a class="header-anchor" href="#定义任务的键盘快捷键"><span>定义任务的键盘快捷键</span></a></h2><p>您可以为任何任务定义键盘快捷键。从命令面板(<code>Ctrl + Shift + P</code>)中，选择 <strong>首选项: 打开键盘快捷方式文件</strong>，将所需的快捷方式绑定到 <code>workbench.action.tasks.runTask</code> 命令，然后将 任务 定义为 <code>args</code>。</p><p>例如，要将 <code>Ctrl + H</code> 绑定到 <strong>运行任务</strong>，请添加以下内容:</p><div class="language-json" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+h&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workbench.action.tasks.runTask&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Run tests&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="从资源管理器中将-npm-脚本作为任务运行" tabindex="-1"><a class="header-anchor" href="#从资源管理器中将-npm-脚本作为任务运行"><span>从资源管理器中将 npm 脚本作为任务运行</span></a></h2><p>使用该设置 <code>npm.enableScriptExplorer</code>，您可以启用一个浏览器，该浏览器显示在工作空间中定义的脚本。</p><p>在资源管理器中，您可以在编辑器中打开脚本，将其作为任务运行，然后使用节点调试器启动它(当脚本定义了诸如 <code>--inspect-brk</code> 的调试选项时)。单击时的默认操作是打开脚本。要单击运行脚本，请设置 <code>npm.scriptExplorerAction</code> 为 <strong>运行</strong>。使用 <code>npm.exclude</code> 设置可以排除 <code>package.json</code> 特定文件夹中包含的文件中的脚本。</p><p>通过设置 <code>npm.enableRunFromFolder</code>，您可以启用从文件资源管理器的上下文菜单中为文件夹运行 npm 脚本的功能。选择文件夹后，该设置将启用命令 <strong>在文件夹中运行 npm 脚本...</strong>。该命令显示此文件夹中包含的 npm 脚本的快速选择列表，您可以选择要作为任务执行的脚本。</p>`,13);function v(b,f){const e=a("ExternalLinkIcon");return o(),p("div",null,[d,n("p",null,[t("从顶层菜单中选择"),u,t("，运行命令"),m,t("，然后选择您要运行的任务类型。这将生成一个 "),k,t(" 文件。有关更多详细信息，请参见 "),n("a",g,[t("任务文档"),r(e)]),t("。")]),h])}const _=s(i,[["render",v],["__file","task.html.vue"]]),x=JSON.parse('{"path":"/software/vscode/guide/task.html","title":"任务执行器","lang":"zh-CN","frontmatter":{"date":"2020-08-18T00:00:00.000Z","title":"任务执行器","icon":"operate","category":"VS Code","tag":["VS Code","软件"],"description":"自动检测任务 从顶层菜单中选择终端，运行命令配置任务，然后选择您要运行的任务类型。这将生成一个 tasks.json 文件。有关更多详细信息，请参见 任务文档。 自动生成有时会出现问题。请查阅文档，以确保一切正常。 从终端菜单运行任务 从顶层菜单中选择 终端 > 运行任务，然后选择要运行的任务。通过运行命令 终止任务 终止正在运行的任务 任务执行器任务...","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/software/vscode/guide/task.html"}],["meta",{"property":"og:site_name","content":"梦里不知身是客"}],["meta",{"property":"og:title","content":"任务执行器"}],["meta",{"property":"og:description","content":"自动检测任务 从顶层菜单中选择终端，运行命令配置任务，然后选择您要运行的任务类型。这将生成一个 tasks.json 文件。有关更多详细信息，请参见 任务文档。 自动生成有时会出现问题。请查阅文档，以确保一切正常。 从终端菜单运行任务 从顶层菜单中选择 终端 > 运行任务，然后选择要运行的任务。通过运行命令 终止任务 终止正在运行的任务 任务执行器任务..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-03T05:28:44.000Z"}],["meta",{"property":"article:author","content":"unknowIfGuestInDream"}],["meta",{"property":"article:tag","content":"VS Code"}],["meta",{"property":"article:tag","content":"软件"}],["meta",{"property":"article:published_time","content":"2020-08-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-03T05:28:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"任务执行器\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-08-18T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-03T05:28:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"unknowIfGuestInDream\\",\\"url\\":\\"https://tlcsdm.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://blog.tlcsdm.com/atom.xml","title":"梦里不知身是客 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://blog.tlcsdm.com/feed.json","title":"梦里不知身是客 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://blog.tlcsdm.com/rss.xml","title":"梦里不知身是客 RSS Feed"}]]},"headers":[{"level":2,"title":"自动检测任务","slug":"自动检测任务","link":"#自动检测任务","children":[]},{"level":2,"title":"从终端菜单运行任务","slug":"从终端菜单运行任务","link":"#从终端菜单运行任务","children":[]},{"level":2,"title":"定义任务的键盘快捷键","slug":"定义任务的键盘快捷键","link":"#定义任务的键盘快捷键","children":[]},{"level":2,"title":"从资源管理器中将 npm 脚本作为任务运行","slug":"从资源管理器中将-npm-脚本作为任务运行","link":"#从资源管理器中将-npm-脚本作为任务运行","children":[]}],"git":{"createdTime":1665153728000,"updatedTime":1706938124000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":3}]},"readingTime":{"minutes":1.83,"words":550},"filePathRelative":"software/vscode/guide/task.md","localizedDate":"2020年8月18日","excerpt":"","autoDesc":true}');export{_ as comp,x as data};