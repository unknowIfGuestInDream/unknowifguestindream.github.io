(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const S="unknowIfGuestInDream",C="unknowIfGuestInDream",E="https://github.com/unknowIfGuestInDream.png",D="Java Developer · Eclipse / VS Code Plugin Author · Open Source Enthusiast",G="大连, 中国",M="tlcsdm",V=["一名 Java 开发工程师，居住在大连。","热衷于开发者工具，维护了十余个 Eclipse 插件与多个 VS Code 扩展。","个人仓库：github.com/unknowIfGuestInDream ；组织仓库：github.com/tlcsdm"],z=[{icon:"code",label:"Java / JavaFX"},{icon:"plug",label:"Eclipse RCP & Plugin"},{icon:"vscode",label:"VS Code Extension"},{icon:"chip",label:"C / Embedded"}],L=[{name:"GitHub",icon:"github",link:"https://github.com/unknowIfGuestInDream"},{name:"tlcsdm",icon:"org",link:"https://github.com/tlcsdm"},{name:"Gitee",icon:"gitee",link:"https://gitee.com/unknowIfGuestInDream"},{name:"Email",icon:"mail",link:"mailto:liang.tang.cx@gmail.com"}],g={name:S,githubId:C,avatar:E,tagline:D,location:G,org:M,bio:V,highlights:z,socials:L},v=[{name:"eclipse-maven-view",description:"A plug-in that recreates IntelliJ IDEA's Maven View for Eclipse.",stars:3,repo:"tlcsdm/eclipse-maven-view"},{name:"eclipse-translation",description:"Eclipse plugin for translation.",stars:2,repo:"tlcsdm/eclipse-translation"},{name:"eclipse-iconpreview",description:"Lightweight plugin to preview image files in the Eclipse Package Explorer.",stars:2,repo:"tlcsdm/eclipse-iconpreview"},{name:"eclipse-openexplorer",description:"Open the selected resource in the system file explorer.",stars:1,repo:"tlcsdm/eclipse-openexplorer"},{name:"eclipse-copyright",description:"Copyright header generator for Eclipse (forked from Eclipse-Copyright-Generator).",stars:1,repo:"tlcsdm/eclipse-copyright"},{name:"eclipse-multicursor",description:"Multiple cursor support for the Eclipse IDE.",stars:1,repo:"tlcsdm/eclipse-multicursor"},{name:"eclipse-renesas-config-editor",description:"Registers Renesas project files (.mtpj / .scfg / .ewp) with Eclipse's XML editor.",stars:1,repo:"tlcsdm/eclipse-renesas-config-editor"},{name:"eclipse-fullscreen",description:"Make Eclipse go fullscreen to save screen space.",stars:1,repo:"tlcsdm/eclipse-fullscreen"},{name:"eclipse-autofill-arguments",description:"Guess call parameters by the callee parameter names.",stars:1,repo:"tlcsdm/eclipse-autofill-arguments"},{name:"eclipse-generateAllSetter",description:"Generate calls to every setter of a class in one action.",stars:1,repo:"tlcsdm/eclipse-generateAllSetter"},{name:"eclipse-method-sorter",description:"Sort Java class methods to improve source code readability.",stars:1,repo:"tlcsdm/eclipse-method-sorter"},{name:"eclipse-fixcnchar",description:"Automatically replace full-width Chinese punctuation with half-width punctuation while coding.",stars:1,repo:"tlcsdm/eclipse-fixcnchar"},{name:"eclipse-minimap",description:"Minimap for navigating source code in Eclipse.",stars:1,repo:"tlcsdm/eclipse-minimap"},{name:"eclipse-bpep",description:"Builder Pattern Eclipse Plugin — generate fluent builders from Java classes.",stars:1,repo:"tlcsdm/eclipse-bpep"},{name:"eclipse-folding",description:"Enhanced code folding in the Eclipse IDE.",stars:1,repo:"tlcsdm/eclipse-folding"},{name:"eclipse-instasearch",description:"Quick workspace search with instant results powered by a Lucene index.",stars:1,repo:"tlcsdm/eclipse-instasearch"}],h=[{name:"vscode-javafx-support",description:"JavaFX development support for VS Code.",stars:1,repo:"tlcsdm/vscode-javafx-support"},{name:"vscode-iconpreview",description:"Preview image files inside the VS Code explorer and editor.",stars:1,repo:"tlcsdm/vscode-iconpreview"},{name:"vscode-json-tree-view",description:"Visual tree view for browsing, searching and querying JSON files with JSONata.",stars:1,repo:"tlcsdm/vscode-json-tree-view"},{name:"vscode-git-blame-info",description:"Git blame annotations in the editor gutter, inspired by Eclipse EGit.",stars:1,repo:"tlcsdm/vscode-git-blame-info"},{name:"vscode-patchReader",description:"Visualize patch and diff files directly in VS Code.",stars:0,repo:"tlcsdm/vscode-patchReader"},{name:"vscode-java-autofill-arguments",description:"Guess call parameters by the callee parameter names (Java).",stars:0,repo:"tlcsdm/vscode-java-autofill-arguments"},{name:"vscode-lvgl-builder",description:"Drag-and-drop LVGL code generator for embedded UI development.",stars:0,repo:"tlcsdm/vscode-lvgl-builder"},{name:"vscode-fixcnchar",description:"Replace full-width Chinese punctuation with half-width punctuation.",stars:0,repo:"tlcsdm/vscode-fixcnchar"},{name:"vscode-java-method-sorter",description:"Sort methods in Java classes to improve source code readability.",stars:0,repo:"tlcsdm/vscode-java-method-sorter"},{name:"vscode-translation",description:"In-editor translation for VS Code.",stars:0,repo:"tlcsdm/vscode-translation"}],f=[{name:"javafxTool",description:"JavaFX scaffolding built on JDK21 + JavaFX 21 + controlsfx 11 + Maven.",language:"Java",stars:17,repo:"unknowIfGuestInDream/javafxTool"},{name:"tlstudio",description:"SWT examples (JFace / RCP examples planned).",language:"Java",stars:2,repo:"unknowIfGuestInDream/tlstudio"},{name:"jvm-explorer",description:"Desktop app for browsing loaded class files in running JVMs.",language:"Java",stars:0,repo:"unknowIfGuestInDream/jvm-explorer"},{name:"fxRobotStudio",description:"JavaFX-based automation / robot tool.",language:"Java",stars:0,repo:"unknowIfGuestInDream/fxRobotStudio"},{name:"InsightPC",description:"Visual implementation of OSHI — view system and hardware information.",language:"Java",stars:0,repo:"unknowIfGuestInDream/InsightPC"},{name:"patchVisualizer",description:"Visualize patch files and their applied changes.",language:"Java",stars:0,repo:"unknowIfGuestInDream/patchVisualizer"},{name:"ZeroProbe",description:"实验性探测工具。",language:"Java",stars:0,repo:"unknowIfGuestInDream/ZeroProbe"},{name:"javafx-tool-template",description:"JavaFX 工具开发代码模板。",language:"Java",stars:0,repo:"unknowIfGuestInDream/javafx-tool-template"},{name:"windowMonitor",description:"窗口监控工具。",language:"Java",stars:0,repo:"unknowIfGuestInDream/windowMonitor"},{name:"dalian-dagunzi-fx",description:"JavaFX 大连大骨子（个人趣味项目）。",language:"Java",stars:0,repo:"unknowIfGuestInDream/dalian-dagunzi-fx"},{name:"eclipse-rcp-example",description:"Eclipse RCP 示例工程。",language:"Java",stars:1,repo:"tlcsdm/eclipse-rcp-example"},{name:"eclipse-gefemf-example",description:"Eclipse + GEF Classic + EMF 代码生成器示例。",language:"Java",stars:1,repo:"tlcsdm/eclipse-gefemf-example"},{name:"eclipse-graphiti-example",description:"Eclipse Graphiti 使用示例。",language:"Java",stars:0,repo:"tlcsdm/eclipse-graphiti-example"},{name:"javafx-swt",description:"JavaFX 与 SWT 互操作示例。",language:"Java",stars:0,repo:"tlcsdm/javafx-swt"}],b=[{name:"genCode",description:"从 Oracle 等数据库的存储过程生成后台 Java 代码，并根据表生成 CRUD 存储过程。",language:"Java",stars:6,repo:"unknowIfGuestInDream/genCode"},{name:"fileserver",description:"轻量静态资源映射服务。",language:"Java",stars:1,repo:"unknowIfGuestInDream/fileserver"},{name:"ucdetector",description:"Unnecessary Code Detector — clone of the SourceForge project.",language:"Java",stars:0,repo:"tlcsdm/ucdetector"},{name:"patchReader-extension",description:"浏览器扩展：可视化 patch 和 diff 文件。",language:"JavaScript",stars:0,repo:"tlcsdm/patchReader-extension"},{name:"tlcsdm-quick-access-plugin",description:"浏览器扩展：tlcsdm 网站快速访问入口。",language:"JavaScript",stars:0,repo:"tlcsdm/tlcsdm-quick-access-plugin"},{name:"antdpro5-demo",description:"Ant Design Pro 5.2 初始化模板。",language:"TypeScript",stars:0,repo:"tlcsdm/antdpro5-demo"}],w=[{name:"byteBuddyLearn",description:"Byte Buddy 学习示例。",language:"Java",stars:0,repo:"unknowIfGuestInDream/byteBuddyLearn"},{name:"DesignpatternTest",description:"Java 设计模式练习。",language:"Java",stars:1,repo:"unknowIfGuestInDream/DesignpatternTest"},{name:"CppDesignPatterns",description:"C++ 设计模式练习。",language:"C++",stars:1,repo:"unknowIfGuestInDream/CppDesignPatterns"},{name:"c-event-manager",description:"嵌入式事件管理器。",language:"C",stars:0,repo:"unknowIfGuestInDream/c-event-manager"},{name:"c-task-model",description:"嵌入式任务模型。",language:"C",stars:0,repo:"unknowIfGuestInDream/c-task-model"},{name:"c-embedded-learn",description:"嵌入式学习笔记与示例。",language:"C",stars:0,repo:"unknowIfGuestInDream/c-embedded-learn"},{name:"tlcsdm-common",description:"常用 Java 工具类封装（已归档）。",language:"Java",stars:3,repo:"tlcsdm/tlcsdm-common"},{name:"xxl-job-oracle",description:"基于 xxl-job-2.3 的 Oracle 数据源版本（已归档）。",language:"Java",stars:0,repo:"tlcsdm/xxl-job-oracle"}],j={Java:"#b07219",TypeScript:"#3178c6",JavaScript:"#f1e05a","C++":"#f34b7d",C:"#555555",Python:"#3572a5",Go:"#00add8",Rust:"#dea584",HTML:"#e34c26",CSS:"#563d7c",Shell:"#89e051",Vue:"#41b883"},I={github:"M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577 0-.285-.01-1.04-.016-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.086 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.776.42-1.305.763-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23A11.5 11.5 0 0112 5.8c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.654 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.605-2.805 5.622-5.478 5.92.43.37.823 1.103.823 2.222 0 1.604-.015 2.896-.015 3.29 0 .32.217.694.825.576C20.565 21.8 24 17.302 24 12c0-6.627-5.373-12-12-12z",org:"M12 2 3 7v6c0 4.5 3.5 8.5 9 9 5.5-.5 9-4.5 9-9V7l-9-5zm0 3.3L19 9v4c0 3.3-2.5 6.5-7 7-4.5-.5-7-3.7-7-7V9l7-3.7zM8 11v6h2v-2h4v2h2v-6h-2v2h-4v-2H8z",gitee:"M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm5.997 10.182h-9.01a.818.818 0 00-.818.818v2.045c0 .452.366.818.818.818h5.455a.818.818 0 01.818.818v.409a2.455 2.455 0 01-2.455 2.455H5.182a.818.818 0 01-.818-.818V9.455A2.455 2.455 0 016.818 7h10.361a.818.818 0 01.818.818v1.546a.818.818 0 01-.818.818z",mail:"M2 4h20v16H2V4zm2 2v.511l8 5.334 8-5.334V6H4zm16 2.823l-7.445 4.963a1 1 0 01-1.11 0L4 8.823V18h16V8.823z",location:"M12 2a7 7 0 017 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 017-7zm0 4.5A2.5 2.5 0 1012 11.5 2.5 2.5 0 0012 6.5z",briefcase:"M10 2h4a2 2 0 012 2v2h4a2 2 0 012 2v3H2V8a2 2 0 012-2h4V4a2 2 0 012-2zm0 4h4V4h-4v2zM2 13h20v7a2 2 0 01-2 2H4a2 2 0 01-2-2v-7zm9 1v3h2v-3h-2z",code:"M8.7 15.9L4.8 12l3.9-3.9-1.4-1.4L2 12l5.3 5.3 1.4-1.4zm6.6 0l3.9-3.9-3.9-3.9 1.4-1.4L22 12l-5.3 5.3-1.4-1.4z",plug:"M14 2v4h-4V2H8v4H6v5a5 5 0 005 5v6h2v-6a5 5 0 005-5V6h-2V2h-2z",vscode:"M23.15 2.587l-4.6-2.21a1.39 1.39 0 00-1.58.26L1.86 14.77a.93.93 0 000 1.37l1.23 1.12a.93.93 0 001.19.05L22.5 3.89a.93.93 0 00-.04-1.5l-.01.01.7.19zM17.58 7.5L9.68 15.4l7.9 6.67a1.39 1.39 0 001.56.11l4.38-2.1a1.4 1.4 0 00.78-1.26V5.18a1.4 1.4 0 00-.78-1.26L17.58 7.5zM7.67 13.4l-2.86 2.86 2.86 2.47 2.87-2.46-2.87-2.87z",chip:"M6 2h12a2 2 0 012 2v4h2v2h-2v4h2v2h-2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4H2v-2h2v-4H2V8h2V4a2 2 0 012-2zm0 2v16h12V4H6zm3 3h6v10H9V7z",star:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z"},y="uigid-theme",P="M12 4V2m0 20v-2m8-8h2M2 12h2m13.657-5.657l1.414-1.414M4.929 19.071l1.414-1.414m0-11.314L4.929 4.929m14.142 14.142l-1.414-1.414M12 7a5 5 0 100 10 5 5 0 000-10z",J="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z",s=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),x=e=>`https://github.com/${e}`,m=e=>e>=1e3?(e/1e3).toFixed(1)+"k":String(e),u=(e,a=!1)=>a?`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${e}"/></svg>`:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${e}" fill="currentColor"/></svg>`,d=e=>u(I[e]??I.github),H=e=>`
  <section class="hero" aria-label="About">
    <div class="hero__avatar">
      <img src="${s(e.avatar)}" alt="${s(e.name)} 头像"
        loading="eager" width="156" height="156"
        referrerpolicy="no-referrer" />
    </div>
    <div class="hero__body">
      <span class="hero__id">@${s(e.githubId)}</span>
      <h1 class="hero__name">${s(e.name)}</h1>
      <p class="hero__tagline">${s(e.tagline)}</p>
      <div class="hero__bio">
        ${e.bio.map(a=>`<p>${s(a)}</p>`).join("")}
      </div>
      <div class="hero__meta">
        <span>${d("location")}${s(e.location)}</span>
        <span>${d("briefcase")}${s(e.org)}</span>
      </div>
      <div class="hero__highlights">
        ${e.highlights.map(a=>`<span class="chip">${d(a.icon)}${s(a.label)}</span>`).join("")}
      </div>
      <div class="hero__socials">
        ${e.socials.map(a=>`
          <a class="social-link" href="${s(a.link)}"
             target="_blank" rel="noopener noreferrer" aria-label="${s(a.name)}">
            ${d(a.icon)}
            <span>${s(a.name)}</span>
          </a>`).join("")}
      </div>
    </div>
  </section>
`,O=(e,a,o)=>{const i=e.length+a.length+o.length,t=e.reduce((n,c)=>n+c.stars,0)+a.reduce((n,c)=>n+c.stars,0)+o.reduce((n,c)=>n+c.stars,0),r=new Set(o.map(n=>n.language));return`
    <section class="stats" aria-label="Stats">
      <div class="stat"><div class="stat__value">${i}</div><div class="stat__label">开源仓库</div></div>
      <div class="stat"><div class="stat__value">${m(t)}</div><div class="stat__label">累计 Stars</div></div>
      <div class="stat"><div class="stat__value">${r.size}+</div><div class="stat__label">涉及语言</div></div>
    </section>
  `},_=e=>`
  <a class="card" href="${s(x(e.repo))}"
     target="_blank" rel="noopener noreferrer">
    <h3 class="card__title"><span>${s(e.name)}</span></h3>
    <div class="card__repo">${s(e.repo)}</div>
    <p class="card__desc">${s(e.description)}</p>
    <div class="card__meta">
      <span class="stars"><span class="stars__icon">★</span> ${s(m(e.stars))}</span>
      <span>GitHub</span>
    </div>
  </a>
`,p=e=>{const a=j[e.language]??"#888";return`
    <a class="card" href="${s(x(e.repo))}"
       target="_blank" rel="noopener noreferrer">
      <h3 class="card__title"><span>${s(e.name)}</span></h3>
      <div class="card__repo">${s(e.repo)}</div>
      <p class="card__desc">${s(e.description)}</p>
      <div class="card__meta">
        <span class="lang">
          <span class="lang__dot" style="background:${s(a)}"></span>
          ${s(e.language)}
        </span>
        <span class="stars"><span class="stars__icon">★</span> ${s(m(e.stars))}</span>
      </div>
    </a>
  `},l=(e,a,o,i=!1)=>`
  <section class="module">
    <header class="module__header">
      <h2 class="module__title">${s(e)}</h2>
      <span class="module__count">${a.length} repos</span>
    </header>
    <div class="grid${i?" grid--compact":""}">
      ${a.map(o).join("")}
    </div>
  </section>
`,T=e=>`
    <footer class="footer">
      <span>© ${new Date().getFullYear()} ${s(e.name)}</span>
      <span class="beian">
        <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">
          辽ICP备2021000033号
        </a>
        <span aria-hidden="true">·</span>
        <a class="beian__police"
           href="https://beian.mps.gov.cn/#/query/webSearch?code=21020302000532"
           target="_blank" rel="noopener noreferrer">
          <img src="/beian.png" alt="公安备案" width="16" height="16" />
          辽公网安备21020302000532号
        </a>
      </span>
    </footer>
  `,A=()=>`
  <header class="topbar">
    <button class="theme-toggle" id="theme-toggle" type="button"
            aria-label="Toggle color theme" title="切换主题">
      ${u(J,!0)}
    </button>
  </header>
`,R=()=>`
  <div class="container">
    ${A()}
    ${H(g)}
    ${O(v,h,[...f,...b,...w])}
    ${l("Eclipse Plugins",v,_)}
    ${l("VS Code Extensions",h,_)}
    ${l("Desktop UI Projects",f,p,!0)}
    ${l("Web / Tools",b,p,!0)}
    ${l("Others",w,p,!0)}
    ${T(g)}
  </div>
`,F=()=>{try{const e=localStorage.getItem(y);if(e==="light"||e==="dark")return e}catch{}return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"},k=e=>{document.documentElement.setAttribute("data-theme",e);const a=document.getElementById("theme-toggle");a&&(a.innerHTML=u(e==="dark"?P:J,!0))},B=()=>{let e=F();k(e),document.getElementById("theme-toggle")?.addEventListener("click",()=>{e=e==="dark"?"light":"dark";try{localStorage.setItem(y,e)}catch{}k(e)})},$=()=>{const e=document.getElementById("app");e&&(e.innerHTML=R(),B())};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",$):$();
