import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as n,c as i,b as p,a as e,e as o,d as r,f as s}from"./app-CYuPfws5.js";const c={},d=e("p",null,"使用“模型开发器”时，可通过以在默认的模型树中添加节点并编辑节点设置来构建模型。",-1),h=e("p",null,"默认模型树中的所有节点均为顶层父节点。可以右键单击这些节点以查看可在其中添加的子节点的列表。这是将节点添加到模型树的方式。",-1),m=e("p",null,"当您单击某个子节点时，可以在设置窗口中查看其节点设置。您可以在此编辑节点设置。",-1),u=s('<h2 id="根节点" tabindex="-1"><a class="header-anchor" href="#根节点"><span>根节点</span></a></h2><p>模型树始终包含根节点 (初始标签为 Untitled.mph)、全局定义节点和结果节点。根节点的标签是用来保存模型的多物理场模型文件 (或 MPH 文件)的名称。根节点包含作者姓名、默认单位制等设置。</p><h2 id="全局定义" tabindex="-1"><a class="header-anchor" href="#全局定义"><span>全局定义</span></a></h2><p>默认情况下，全局定义节点包含参数和材料子节点，用于定义可在整个模型树中使用的参数、变量、函数及耦合等。例如，可用于定义材料属性、力、几何及其他相关特征的值和函数依赖关系。全局定义节点本身不含任何设置，但其子节点包含许多设置。材料子节点用于存储材料属性，可在模型的组件节点中引用。</p><h2 id="组件和研究节点" tabindex="-1"><a class="header-anchor" href="#组件和研究节点"><span>组件和研究节点</span></a></h2><p>组件节点和研究节点通常在创建新模型时由 “模型向导”创建。使用 “模型向导”指定要建模的物理场类型以及要执行的研究类型 (如稳态、瞬态、频域或特征频率分析)后，“模型向导”会自动为每种类型创建一个节点并显示其内容。</p><p>您还可以在开发模型时添加更多的组件和研究节点。模型可以包含多个组件和研究节点，如果它们的名称都相同，可能会造成混淆。因此，您可以根据这些节点类型各自的用途将其重命名。</p><p>如果模型包含多个组件节点，可以将其耦合在一起，形成一系列更为复杂的仿真步骤。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>每个研究节点都可以执行不同类型的计算，因此每个节点都有单独的计算按钮。同时，这也意味着您可以用同一个模型来进行多个不同研究。</p></div><h2 id="结果节点" tabindex="-1"><a class="header-anchor" href="#结果节点"><span>结果节点</span></a></h2><p>结果节点用于访问通过执行仿真得到的解，其中还提供多个数据处理工具。结果节点最初包含五个子节点:</p><ul><li>数据集: 包含一组可供使用的解。</li><li>派生值: 使用大量后处理工具来定义要从解中派生的值。</li><li>表格: 一个非常方便的目标位置，用于存储探针生成的派生值或结果，这些探针在仿真运行期间实时监视解。</li><li>导出: 定义要导出至文件的数值数据、图像及动画。</li><li>报告: 包含自动生成或定制的模型报告，格式为 HTML 或 Microsoft Word。</li></ul><p>除了这五个默认子节点，您还可以添加更多绘图组子节点，用于定义要在图形或绘图窗口中显示的图形。其中一些节点可根据所执行的仿真类型自动创建，您也可以右键单击结果节点，并从绘图类型列表中进行选择来包含其他图形</p><h2 id="参数、函数、变量和范围" tabindex="-1"><a class="header-anchor" href="#参数、函数、变量和范围"><span>参数、函数、变量和范围</span></a></h2><h3 id="全局参数" tabindex="-1"><a class="header-anchor" href="#全局参数"><span>全局参数</span></a></h3><p>全局参数是用户定义的常数标量，可在整个模型中使用。也就是说，这些参数具有 “全局”性质。其重要用途包括:</p><ul><li>参数化几何尺寸。</li><li>指定网格单元大小。</li><li>定义参数化扫描 (即针对频率或载荷等各种不同的参数值反复运行仿真)。</li></ul><p>全局参数表达式可以包含数字、全局参数、内置常数、使用全局参数表达式作为变元的内置和用户定义函数，以及一元和二元运算符。</p><p>您可以在模型树的全局定义下的参数节点中定义全局参数。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>参数名称区分大小写</p></div><h3 id="结果参数" tabindex="-1"><a class="header-anchor" href="#结果参数"><span>结果参数</span></a></h3><p>为了实现更高的灵活性，可定义仅在结果节点中使用的参数。使用这些参数时无需解析模型。</p><h3 id="函数" tabindex="-1"><a class="header-anchor" href="#函数"><span>函数</span></a></h3><p>函数可用于全局定义和组件 &gt; 定义，其中包含一系列预定义的函数模板，这在建立多物理场仿真时非常有用。例如，阶跃函数模板可以创建平滑的阶跃函 数，用于定义不同类型的空间或时间过渡。</p><h3 id="变量" tabindex="-1"><a class="header-anchor" href="#变量"><span>变量</span></a></h3><p>变量在模型树中具有关联的变量节点，可在全局定义节点中定义，也可在任意组件节点的定义子节点中定义。</p><p>当然，选择在何处定义变量取决于您希望该变量是全局 (即在整个模型树中可用)的，还是在单个组件节点内进行局部定义。与参数表达式类似，变量表达式可以包含数字、参数、内置常数以及一元和二元运算符。不过，变量表达式还可以包含变量 (如 t、x、y 或 z)；以变量表达式为变元的函数；以及要求解的因变量及其空间和时间的导数。</p><p>如果模型包含许多变量节点，则可以使用节点组特征将其组合在一起。节点组可用于对全局定义、组件下的定义、材料、物理场接口和结果中的节点进行分组。</p>',28),_={id:"app-中使用的变量",tabindex:"-1"},g={class:"header-anchor",href:"#app-中使用的变量"},f=e("p",null,"模型参数和变量可在 App 中使用。例如，您可以让 App 用户更改参数值。此外，还可以在 “App 开发器”中 App 树的声明节点下定义要在 App 中使用的变量。此类变量也能在模型方法中使用。",-1),x=e("h3",{id:"范围",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#范围"},[e("span",null,"范围")])],-1),y=e("p",null,"参数或变量的 “范围”是一条声明该参数或变量在表达式中的使用位置的语句。所有全局参数均在模型树的全局定义节点中定义为参数子节点。这意味着它们的范围是全局性的，可在整个模型树中使用。",-1),b=e("p",null,"变量也可以在 “全局定义”节点中定义为变量子节点，此时变量具有全局范围，但受到其他限制。例如，变量不能用于几何、网格或研究节点 (在确定仿真停止时间的表达式中使用变量的情况除外)。",-1),v=e("p",null,"在组件节点的定义子节点下定义的变量具有局部范围，仅在这一特定组件中使用 (但同样不用于几何或网格节点)。例如，这些变量可用于在组件的材料子节点中指定材料属性，或用于指定边界条件或相互作用。有时，需要将变量的范围限制在几何的特定部分，如某些边界。为此，变量的设置中提供了一些预设值，可供您选择是将定义应用于整个组件几何，还是仅应用于某个域、边界、边或点。",-1);function k(T,A){const t=a("Badge");return n(),i("div",null,[d,h,m,p(" more "),u,e("h3",_,[e("a",g,[e("span",null,[o("App 中使用的变量 "),r(t,{text:"高级用法"})])])]),f,x,y,b,v])}const w=l(c,[["render",k],["__file","model-tree.html.vue"]]),C=JSON.parse('{"path":"/software/comsol/model-tree.html","title":"模型树","lang":"zh-CN","frontmatter":{"title":"模型树","icon":"tree","date":"2020-06-01T00:00:00.000Z","category":"软件","tag":["仿真","COMSOL"],"description":"使用“模型开发器”时，可通过以在默认的模型树中添加节点并编辑节点设置来构建模型。 默认模型树中的所有节点均为顶层父节点。可以右键单击这些节点以查看可在其中添加的子节点的列表。这是将节点添加到模型树的方式。 当您单击某个子节点时，可以在设置窗口中查看其节点设置。您可以在此编辑节点设置。","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/software/comsol/model-tree.html"}],["meta",{"property":"og:site_name","content":"梦里不知身是客"}],["meta",{"property":"og:title","content":"模型树"}],["meta",{"property":"og:description","content":"使用“模型开发器”时，可通过以在默认的模型树中添加节点并编辑节点设置来构建模型。 默认模型树中的所有节点均为顶层父节点。可以右键单击这些节点以查看可在其中添加的子节点的列表。这是将节点添加到模型树的方式。 当您单击某个子节点时，可以在设置窗口中查看其节点设置。您可以在此编辑节点设置。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-10-07T14:42:08.000Z"}],["meta",{"property":"article:author","content":"unknowIfGuestInDream"}],["meta",{"property":"article:tag","content":"仿真"}],["meta",{"property":"article:tag","content":"COMSOL"}],["meta",{"property":"article:published_time","content":"2020-06-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-07T14:42:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"模型树\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-06-01T00:00:00.000Z\\",\\"dateModified\\":\\"2022-10-07T14:42:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"unknowIfGuestInDream\\",\\"url\\":\\"https://tlcsdm.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://blog.tlcsdm.com/atom.xml","title":"梦里不知身是客 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://blog.tlcsdm.com/feed.json","title":"梦里不知身是客 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://blog.tlcsdm.com/rss.xml","title":"梦里不知身是客 RSS Feed"}]]},"headers":[{"level":2,"title":"根节点","slug":"根节点","link":"#根节点","children":[]},{"level":2,"title":"全局定义","slug":"全局定义","link":"#全局定义","children":[]},{"level":2,"title":"组件和研究节点","slug":"组件和研究节点","link":"#组件和研究节点","children":[]},{"level":2,"title":"结果节点","slug":"结果节点","link":"#结果节点","children":[]},{"level":2,"title":"参数、函数、变量和范围","slug":"参数、函数、变量和范围","link":"#参数、函数、变量和范围","children":[{"level":3,"title":"全局参数","slug":"全局参数","link":"#全局参数","children":[]},{"level":3,"title":"结果参数","slug":"结果参数","link":"#结果参数","children":[]},{"level":3,"title":"函数","slug":"函数","link":"#函数","children":[]},{"level":3,"title":"变量","slug":"变量","link":"#变量","children":[]},{"level":3,"title":"App 中使用的变量","slug":"app-中使用的变量","link":"#app-中使用的变量","children":[]},{"level":3,"title":"范围","slug":"范围","link":"#范围","children":[]}]}],"git":{"createdTime":1665153728000,"updatedTime":1665153728000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":1}]},"readingTime":{"minutes":6.19,"words":1858},"filePathRelative":"software/comsol/model-tree.md","localizedDate":"2020年6月1日","excerpt":"<p>使用“模型开发器”时，可通过以在默认的模型树中添加节点并编辑节点设置来构建模型。</p>\\n<p>默认模型树中的所有节点均为顶层父节点。可以右键单击这些节点以查看可在其中添加的子节点的列表。这是将节点添加到模型树的方式。</p>\\n<p>当您单击某个子节点时，可以在设置窗口中查看其节点设置。您可以在此编辑节点设置。</p>\\n","autoDesc":true}');export{w as comp,C as data};