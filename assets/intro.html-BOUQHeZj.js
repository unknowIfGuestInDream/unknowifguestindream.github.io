import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as s,c as r,a as e,b as p,e as i,f as n,d as c,w as d}from"./app-DBNG70bZ.js";const h={},m={class:"hint-container info"};function u(b,t){const o=l("RouteLink");return s(),r("div",null,[t[3]||(t[3]=e("p",null,"在 GitHub Actions 的仓库中自动化、自定义和执行软件开发工作流程。",-1)),t[4]||(t[4]=e("p",null,"您可以发现、创建和共享操作以执行您喜欢的任何作业 (包括 CI/CD) ，并将操作合并到完全自定义的工作流程中。",-1)),p(" more "),t[5]||(t[5]=i('<h2 id="特点" tabindex="-1"><a class="header-anchor" href="#特点"><span>特点</span></a></h2><ul><li><p>GitHub 把组成持续集成的操作称为 actions。</p></li><li><p>GitHub 允许开发者把每个操作写成独立的脚本文件，存放到代码仓库，使得其他开发者可以引用。</p></li><li><p>如果您需要某个 action，不必自己写复杂的脚本，直接引用他人写好的 action 即可，整个持续集成过程，就变成了一个 actions 的组合。这就是 GitHub Actions 最特别的地方。</p></li><li><p>GitHub 做了一个官方市场，可以搜索到他人提交的 actions。另外， <a href="https://github.com/sdras/awesome-actions" target="_blank" rel="noopener noreferrer">awesome actions</a> 仓库收集了很多有用的 actions。</p></li></ul>',2)),e("div",m,[t[2]||(t[2]=e("p",{class:"hint-container-title"},"持续集成",-1)),e("p",null,[t[1]||(t[1]=n("关于持续集成 (CI) 的概念与介绍，详见 ")),c(o,{to:"/code/basic/ci.html"},{default:d(()=>t[0]||(t[0]=[n("基础 → 持续集成")])),_:1})])]),t[6]||(t[6]=i('<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p>GitHub Actions 帮助您自动完成软件开发周期内的任务。 GitHub Actions 是事件驱动的，意味着您可以在指定事件发生后运行一系列命令。 例如，每次有人为仓库创建拉取请求时，您都可以自动运行命令来执行软件测试脚本。</p><h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件"><span>组件</span></a></h2><p>下面是一起运行作业的多个 GitHub Actions 组件列表。 您可以查看这些组件如何相互作用。</p><h3 id="workflow" tabindex="-1"><a class="header-anchor" href="#workflow"><span>workflow</span></a></h3><p>工作流程 (workflow) 是您添加到仓库的自动化过程。 工作流程由一项或多项作业组成，可以计划或由事件触发。 工作流程可用于在 GitHub 上构建、测试、打包、发布或部署项目。</p><p>持续集成一次运行的过程，就是一个 workflow。</p><h3 id="event" tabindex="-1"><a class="header-anchor" href="#event"><span>event</span></a></h3><p>事件 (event) 是触发工作流程的特定活动。 例如，当有推送提交到仓库或者创建议题或拉取请求时，GitHub 就可能产生活动。</p><p>您还可以使用仓库的 web hook 在发生外部事件时触发工作流程。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>事件是 workflow 执行的判定。可以通过配置工作流程，来决定在哪些事件被触发执行。</p><p>同时工作流也可以读取触发事件的相关信息，以在不同情况下执行不同的任务。</p></div><h3 id="jobs" tabindex="-1"><a class="header-anchor" href="#jobs"><span>Jobs</span></a></h3><p>作业 (job) 是在同一运行服务器上执行的一组步骤。</p><p>默认情况下，包含多个作业的工作流程将同时运行这些作业。</p><p>您也可以配置工作流程按顺序运行作业。例如，工作流程可以有两个连续的任务来构建和测试代码，其中测试作业取决于构建作业的状态。如果构建作业失败，测试作业将不会运行。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>作业是工作流程中一个完整任务的封装。</p><p>一个 workflow 由一个或多个 jobs 构成，一次持续集成的运行，可以完成多个作业，对应多个任务。</p></div><h3 id="steps" tabindex="-1"><a class="header-anchor" href="#steps"><span>Steps</span></a></h3><p>步骤 (step) 是可以在作业中运行命令的单个任务。步骤可以是操作或 shell 命令。</p><p>作业中的每个步骤在同一运行器上执行，可让该作业中的操作互相共享数据。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>每个 job 由多个 step 构成，一步步完成。</p></div><h3 id="action" tabindex="-1"><a class="header-anchor" href="#action"><span>Action</span></a></h3><p>操作 (Action) 是独立命令，它们组合到步骤以创建作业。</p><p>操作是工作流程最小的便携式构建块。 您可以创建自己的操作，也可以使用 GitHub 社区创建的操作。要在工作流程中使用操作，必须将其作为一个步骤。</p><h3 id="server" tabindex="-1"><a class="header-anchor" href="#server"><span>Server</span></a></h3><p>运行器 (Server) 是安装了 GitHub Actions 运行器应用程序的服务器。</p><p>您可以使用 GitHub 托管的运行器或托管您自己的运行器。运行器将侦听可用的作业，每次运行一个作业，并将进度、日志和结果报告回 GitHub。</p><p>对于 GitHub 托管的运行器，工作流程中的每项作业都会在一个新的虚拟环境中运行。</p><p>GitHub 托管的运行器基于 Ubuntu Linux、Microsoft Windows 和 macOS。</p>',28))])}const v=a(h,[["render",u],["__file","intro.html.vue"]]),k=JSON.parse('{"path":"/code/github/actions/intro.html","title":"Actions 介绍","lang":"zh-CN","frontmatter":{"title":"Actions 介绍","icon":"info","date":"2021-02-18T00:00:00.000Z","category":"GitHub","tag":["action","介绍"],"order":1,"description":"在 GitHub Actions 的仓库中自动化、自定义和执行软件开发工作流程。 您可以发现、创建和共享操作以执行您喜欢的任何作业 (包括 CI/CD) ，并将操作合并到完全自定义的工作流程中。","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/code/github/actions/intro.html"}],["meta",{"property":"og:site_name","content":"梦里不知身是客"}],["meta",{"property":"og:title","content":"Actions 介绍"}],["meta",{"property":"og:description","content":"在 GitHub Actions 的仓库中自动化、自定义和执行软件开发工作流程。 您可以发现、创建和共享操作以执行您喜欢的任何作业 (包括 CI/CD) ，并将操作合并到完全自定义的工作流程中。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-03T05:28:44.000Z"}],["meta",{"property":"article:author","content":"unknowIfGuestInDream"}],["meta",{"property":"article:tag","content":"action"}],["meta",{"property":"article:tag","content":"介绍"}],["meta",{"property":"article:published_time","content":"2021-02-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-03T05:28:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Actions 介绍\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-02-18T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-03T05:28:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"unknowIfGuestInDream\\",\\"url\\":\\"https://tlcsdm.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://blog.tlcsdm.com/atom.xml","title":"梦里不知身是客 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://blog.tlcsdm.com/feed.json","title":"梦里不知身是客 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://blog.tlcsdm.com/rss.xml","title":"梦里不知身是客 RSS Feed"}]]},"headers":[{"level":2,"title":"特点","slug":"特点","link":"#特点","children":[]},{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"组件","slug":"组件","link":"#组件","children":[{"level":3,"title":"workflow","slug":"workflow","link":"#workflow","children":[]},{"level":3,"title":"event","slug":"event","link":"#event","children":[]},{"level":3,"title":"Jobs","slug":"jobs","link":"#jobs","children":[]},{"level":3,"title":"Steps","slug":"steps","link":"#steps","children":[]},{"level":3,"title":"Action","slug":"action","link":"#action","children":[]},{"level":3,"title":"Server","slug":"server","link":"#server","children":[]}]}],"git":{"createdTime":1665160537000,"updatedTime":1706938124000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":2}]},"readingTime":{"minutes":3.54,"words":1061},"filePathRelative":"code/github/actions/intro.md","localizedDate":"2021年2月18日","excerpt":"<p>在 GitHub Actions 的仓库中自动化、自定义和执行软件开发工作流程。</p>\\n<p>您可以发现、创建和共享操作以执行您喜欢的任何作业 (包括 CI/CD) ，并将操作合并到完全自定义的工作流程中。</p>\\n","autoDesc":true}');export{v as comp,k as data};