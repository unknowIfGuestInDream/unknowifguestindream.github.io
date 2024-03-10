import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as s,o as i,c,b as p,a as e,d as l,w as n,e as t}from"./app-COrYw2cZ.js";const m={},u=e("p",null,"这里是一些 Comsol 的学习资料整理与学习心得。",-1),d=e("div",{class:"hint-container tip"},[e("p",{class:"hint-container-title"},"写在前面"),e("p",null,"本教程只适用于从未接触过仿真的人员，内容比较基础。"),e("p",null,"我本人主要活跃在计算机相关领域，本科专业是物理学，并没有学过系统的工程原理、数值分析、模型建构以及相关的误差分析。COMSOL 是我本科制作毕设的软件，在毕设前，我也使用 COMSOL 构建了几个模型，完成了一些装置的模拟与优化。"),e("p",null,"本篇教程，是根据我对 COMSOL 以及有限元仿真的理解书写的，一定会有一些疏漏与理解错误之处，还望大家指出。另外我主要研究过的方向是传热与流体流动，在本教程的举例中，也大多以这两方面为主。对其他的方向与模块，我是不熟悉的。")],-1),h=e("h2",{id:"文档",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#文档"},[e("span",null,"文档")])],-1),f={href:"https://mister-hope.com/file/comsol/IntroductionToCOMSOLMultiphysics.zh_CN.pdf",target:"_blank",rel:"noopener noreferrer"},_={href:"https://mister-hope.com/file/comsol/App%E5%BC%80%E5%8F%91%E5%99%A8%E7%AE%80%E4%BB%8B.pdf",target:"_blank",rel:"noopener noreferrer"},O={href:"https://mister-hope.com/file/comsol/ApplicationProgrammingGuide.zh_CN.pdf",target:"_blank",rel:"noopener noreferrer"},g={href:"http://cn.comsol.com/multiphysics/",target:"_blank",rel:"noopener noreferrer"},C={href:"https://cn.comsol.com/videos",target:"_blank",rel:"noopener noreferrer"},y={href:"https://cn.comsol.com/video-training",target:"_blank",rel:"noopener noreferrer"},k={href:"https://cn.comsol.com/papers-presentations",target:"_blank",rel:"noopener noreferrer"},L=e("h2",{id:"其他杂项",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#其他杂项"},[e("span",null,"其他杂项")])],-1),M={href:"https://cn.comsol.com/blogs/how-to-make-boundary-conditions-conditional-in-your-simulation/",target:"_blank",rel:"noopener noreferrer"},S={href:"https://cn.comsol.com/blogs/how-to-customize-the-comsol-desktop-and-use-keyboard-shortcuts/",target:"_blank",rel:"noopener noreferrer"},b=e("sup",null,"®",-1),w={href:"https://cn.comsol.com/blogs/how-to-use-the-find-and-auto-completion-tools-for-faster-model-setup/",target:"_blank",rel:"noopener noreferrer"};function x(E,T){const o=s("RouteLink"),r=s("ExternalLinkIcon");return i(),c("div",null,[u,p(" more "),d,e("ul",null,[e("li",null,[e("p",null,[l(o,{to:"/software/comsol/install.html"},{default:n(()=>[t("软件下载与安装")]),_:1})])]),e("li",null,[e("p",null,[l(o,{to:"/software/comsol/intro.html"},{default:n(()=>[t("有限元分析软件介绍")]),_:1})])]),e("li",null,[e("p",null,[l(o,{to:"/software/comsol/get-started.html"},{default:n(()=>[t("快速上手 COMSOL")]),_:1})])]),e("li",null,[e("p",null,[l(o,{to:"/software/comsol/geometry/"},{default:n(()=>[t("几何")]),_:1})]),e("ul",null,[e("li",null,[e("p",null,[l(o,{to:"/software/comsol/geometry/view.html"},{default:n(()=>[t("浏览几何")]),_:1})])]),e("li",null,[e("p",null,[l(o,{to:"/software/comsol/geometry/build.html"},{default:n(()=>[t("构建几何")]),_:1})])])])]),e("li",null,[e("p",null,[l(o,{to:"/software/comsol/select.html"},{default:n(()=>[t("选择")]),_:1})])]),e("li",null,[e("p",null,[l(o,{to:"/software/comsol/material.html"},{default:n(()=>[t("材料")]),_:1})])]),e("li",null,[e("p",null,[l(o,{to:"/software/comsol/physic-field.html"},{default:n(()=>[t("物理场")]),_:1})])]),e("li",null,[e("p",null,[l(o,{to:"/software/comsol/mesh/"},{default:n(()=>[t("网格")]),_:1})])]),e("li",null,[e("p",null,[l(o,{to:"/software/comsol/study.html"},{default:n(()=>[t("研究")]),_:1})])]),e("li",null,[e("p",null,[l(o,{to:"/software/comsol/result.html"},{default:n(()=>[t("结果")]),_:1})])]),e("li",null,[e("p",null,[l(o,{to:"/software/comsol/app.html"},{default:n(()=>[t("APP")]),_:1})])])]),h,e("ul",null,[e("li",null,[e("p",null,[e("a",f,[t("COMSOL 新手指南"),l(r)])])]),e("li",null,[e("p",null,[e("a",_,[t("COMSOL App 开发器简介"),l(r)])])]),e("li",null,[e("p",null,[e("a",O,[t("COMSOL Multiphysics 应用程序编程指南"),l(r)])])]),e("li",null,[e("p",null,[e("a",g,[t("COMSOL 多物理场仿真百科"),l(r)])])]),e("li",null,[e("p",null,[e("a",C,[t("COMSOL 视频中心"),l(r)])])]),e("li",null,[e("p",null,[e("a",y,[t("COMSOL 在线课程回放"),l(r)]),t(" (应该是在疫情期间限时开放)")])]),e("li",null,[e("p",null,[e("a",k,[t("基于 COMSOL 的论文"),l(r)])])])]),L,e("ul",null,[e("li",null,[e("p",null,[e("a",M,[t("如何设置特殊边界条件"),l(r)])])]),e("li",null,[e("p",null,[e("a",S,[t("如何定制 COMSOL Desktop"),b,t(" 和使用键盘快捷键"),l(r)])])]),e("li",null,[e("p",null,[e("a",w,[t("使用查找工具和自动完成工具加快建模过程"),l(r)])])])])])}const A=a(m,[["render",x],["__file","index.html.vue"]]),B=JSON.parse('{"path":"/software/comsol/","title":"COMSOL","lang":"zh-CN","frontmatter":{"title":"COMSOL","icon":"app","date":"2020-05-29T00:00:00.000Z","category":"软件","tag":["仿真","COMSOL"],"description":"这里是一些 Comsol 的学习资料整理与学习心得。 写在前面 本教程只适用于从未接触过仿真的人员，内容比较基础。 我本人主要活跃在计算机相关领域，本科专业是物理学，并没有学过系统的工程原理、数值分析、模型建构以及相关的误差分析。COMSOL 是我本科制作毕设的软件，在毕设前，我也使用 COMSOL 构建了几个模型，完成了一些装置的模拟与优化。 本篇教...","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/software/comsol/"}],["meta",{"property":"og:site_name","content":"梦里不知身是客"}],["meta",{"property":"og:title","content":"COMSOL"}],["meta",{"property":"og:description","content":"这里是一些 Comsol 的学习资料整理与学习心得。 写在前面 本教程只适用于从未接触过仿真的人员，内容比较基础。 我本人主要活跃在计算机相关领域，本科专业是物理学，并没有学过系统的工程原理、数值分析、模型建构以及相关的误差分析。COMSOL 是我本科制作毕设的软件，在毕设前，我也使用 COMSOL 构建了几个模型，完成了一些装置的模拟与优化。 本篇教..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-03T05:28:44.000Z"}],["meta",{"property":"article:author","content":"unknowIfGuestInDream"}],["meta",{"property":"article:tag","content":"仿真"}],["meta",{"property":"article:tag","content":"COMSOL"}],["meta",{"property":"article:published_time","content":"2020-05-29T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-03T05:28:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"COMSOL\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-29T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-03T05:28:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"unknowIfGuestInDream\\",\\"url\\":\\"https://tlcsdm.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://blog.tlcsdm.com/atom.xml","title":"梦里不知身是客 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://blog.tlcsdm.com/feed.json","title":"梦里不知身是客 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://blog.tlcsdm.com/rss.xml","title":"梦里不知身是客 RSS Feed"}]]},"headers":[{"level":2,"title":"文档","slug":"文档","link":"#文档","children":[]},{"level":2,"title":"其他杂项","slug":"其他杂项","link":"#其他杂项","children":[]}],"git":{"createdTime":1665153728000,"updatedTime":1706938124000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":2}]},"readingTime":{"minutes":1.6,"words":481},"filePathRelative":"software/comsol/README.md","localizedDate":"2020年5月29日","excerpt":"<p>这里是一些 Comsol 的学习资料整理与学习心得。</p>\\n","autoDesc":true}');export{A as comp,B as data};