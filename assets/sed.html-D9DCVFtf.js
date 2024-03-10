import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as a,f as s}from"./app-COrYw2cZ.js";const n={},o=s(`<h1 id="sed" tabindex="-1"><a class="header-anchor" href="#sed"><span>sed</span></a></h1><p><code>sed</code> 命令用于对文本进行过滤和变形处理。</p><p>下面是 <code>example.txt</code> 文件的内容。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Hello This is a Test <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span>
replace all spaces with hyphens
</code></pre></div><p><code>sed</code> 命令将所有的空格换成连词线 <code>-</code>。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sed</span> <span class="token string">&#39;s/ /-/g&#39;</span> example.txt
Hello-This-is-a-Test-1-2-3-4
</code></pre></div><p>下面的命令将数字换成字母 <code>d</code>。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sed</span> <span class="token string">&#39;s/[0-9]/d/g&#39;</span> example.txt
Hello This is a Test d d d d
</code></pre></div>`,8),c=[o];function d(l,p){return t(),a("div",null,c)}const m=e(n,[["render",d],["__file","sed.html.vue"]]),h=JSON.parse('{"path":"/linux/bash/archives/commands/sed.html","title":"sed","lang":"zh-CN","frontmatter":{"date":"2024-02-03T00:00:00.000Z","description":"sed sed 命令用于对文本进行过滤和变形处理。 下面是 example.txt 文件的内容。 sed 命令将所有的空格换成连词线 -。 下面的命令将数字换成字母 d。","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/linux/bash/archives/commands/sed.html"}],["meta",{"property":"og:site_name","content":"梦里不知身是客"}],["meta",{"property":"og:title","content":"sed"}],["meta",{"property":"og:description","content":"sed sed 命令用于对文本进行过滤和变形处理。 下面是 example.txt 文件的内容。 sed 命令将所有的空格换成连词线 -。 下面的命令将数字换成字母 d。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-03T05:28:44.000Z"}],["meta",{"property":"article:author","content":"unknowIfGuestInDream"}],["meta",{"property":"article:published_time","content":"2024-02-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-03T05:28:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"sed\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-02-03T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-03T05:28:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"unknowIfGuestInDream\\",\\"url\\":\\"https://tlcsdm.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://blog.tlcsdm.com/atom.xml","title":"梦里不知身是客 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://blog.tlcsdm.com/feed.json","title":"梦里不知身是客 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://blog.tlcsdm.com/rss.xml","title":"梦里不知身是客 RSS Feed"}]]},"headers":[],"git":{"createdTime":1706938124000,"updatedTime":1706938124000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":1}]},"readingTime":{"minutes":0.35,"words":104},"filePathRelative":"linux/bash/archives/commands/sed.md","localizedDate":"2024年2月3日","excerpt":"","autoDesc":true}');export{m as comp,h as data};