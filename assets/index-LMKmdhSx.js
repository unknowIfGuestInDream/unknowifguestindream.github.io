(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={name:`unknowIfGuestInDream`,githubId:`unknowIfGuestInDream`,avatar:`/author.png`,tagline:`Java Developer · Eclipse / VS Code Plugin Author · Open Source Enthusiast`,location:`大连, 中国`,org:`tlcsdm`,bio:[`一名 Java 开发工程师，居住在大连。`,`热衷于开发者工具，维护了十余个 Eclipse 插件与多个 VS Code 扩展。`,`个人仓库：github.com/unknowIfGuestInDream ；组织仓库：github.com/tlcsdm`],highlights:[{icon:`code`,label:`Java / JavaFX`},{icon:`plug`,label:`Eclipse RCP & Plugin`},{icon:`vscode`,label:`VS Code Extension`}],socials:[{name:`GitHub`,icon:`github`,link:`https://github.com/unknowIfGuestInDream`},{name:`tlcsdm`,icon:`org`,link:`https://github.com/tlcsdm`},{name:`Jenkins`,icon:`jenkins`,link:`https://jenkins.tlcsdm.com/`},{name:`Gitee`,icon:`gitee`,link:`https://gitee.com/unknowIfGuestInDream`},{name:`Email`,icon:`mail`,link:`mailto:liang.tang.cx@gmail.com`}]},t=[{name:`eclipse-maven-view`,description:`A plug-in that recreates IntelliJ IDEA's Maven View for Eclipse.`,stars:3,repo:`tlcsdm/eclipse-maven-view`},{name:`eclipse-translation`,description:`Eclipse plugin for translation.`,stars:2,repo:`tlcsdm/eclipse-translation`},{name:`eclipse-iconpreview`,description:`Lightweight plugin to preview image files in the Eclipse Package Explorer.`,stars:2,repo:`tlcsdm/eclipse-iconpreview`},{name:`eclipse-openexplorer`,description:`Open the selected resource in the system file explorer.`,stars:1,repo:`tlcsdm/eclipse-openexplorer`},{name:`eclipse-copyright`,description:`Copyright header generator for Eclipse (forked from Eclipse-Copyright-Generator).`,stars:1,repo:`tlcsdm/eclipse-copyright`},{name:`eclipse-multicursor`,description:`Multiple cursor support for the Eclipse IDE.`,stars:1,repo:`tlcsdm/eclipse-multicursor`},{name:`eclipse-renesas-config-editor`,description:`Registers Renesas project files (.mtpj / .scfg / .ewp) with Eclipse's XML editor.`,stars:1,repo:`tlcsdm/eclipse-renesas-config-editor`},{name:`eclipse-fullscreen`,description:`Make Eclipse go fullscreen to save screen space.`,stars:1,repo:`tlcsdm/eclipse-fullscreen`},{name:`eclipse-autofill-arguments`,description:`Guess call parameters by the callee parameter names.`,stars:1,repo:`tlcsdm/eclipse-autofill-arguments`},{name:`eclipse-generateAllSetter`,description:`Generate calls to every setter of a class in one action.`,stars:1,repo:`tlcsdm/eclipse-generateAllSetter`},{name:`eclipse-method-sorter`,description:`Sort Java class methods to improve source code readability.`,stars:1,repo:`tlcsdm/eclipse-method-sorter`},{name:`eclipse-fixcnchar`,description:`Automatically replace full-width Chinese punctuation with half-width punctuation while coding.`,stars:1,repo:`tlcsdm/eclipse-fixcnchar`},{name:`eclipse-minimap`,description:`Minimap for navigating source code in Eclipse.`,stars:1,repo:`tlcsdm/eclipse-minimap`},{name:`eclipse-bpep`,description:`Builder Pattern Eclipse Plugin — generate fluent builders from Java classes.`,stars:1,repo:`tlcsdm/eclipse-bpep`},{name:`eclipse-folding`,description:`Enhanced code folding in the Eclipse IDE.`,stars:1,repo:`tlcsdm/eclipse-folding`},{name:`eclipse-instasearch`,description:`Quick workspace search with instant results powered by a Lucene index.`,stars:1,repo:`tlcsdm/eclipse-instasearch`},{name:`eclipse-rbe`,description:`Eclipse plugin for editing Java resource bundles. Lets you manage all localized .properties files in one screen. Some features: sorted keys, warning icons on missing keys/values, conversion to/from Unicode, hierarchical view of keys, and more.`,stars:1,repo:`tlcsdm/eclipse-rbe`}],n=[{name:`vscode-javafx-support`,description:`JavaFX development support for VS Code.`,stars:1,repo:`tlcsdm/vscode-javafx-support`},{name:`vscode-iconpreview`,description:`Preview image files inside the VS Code explorer and editor.`,stars:1,repo:`tlcsdm/vscode-iconpreview`},{name:`vscode-json-tree-view`,description:`Visual tree view for browsing, searching and querying JSON files with JSONata.`,stars:1,repo:`tlcsdm/vscode-json-tree-view`},{name:`vscode-git-blame-info`,description:`Git blame annotations in the editor gutter, inspired by Eclipse EGit.`,stars:1,repo:`tlcsdm/vscode-git-blame-info`},{name:`vscode-patchReader`,description:`Visualize patch and diff files directly in VS Code.`,stars:0,repo:`tlcsdm/vscode-patchReader`},{name:`vscode-java-autofill-arguments`,description:`Guess call parameters by the callee parameter names (Java).`,stars:0,repo:`tlcsdm/vscode-java-autofill-arguments`},{name:`vscode-fixcnchar`,description:`Replace full-width Chinese punctuation with half-width punctuation.`,stars:0,repo:`tlcsdm/vscode-fixcnchar`},{name:`vscode-java-method-sorter`,description:`Sort methods in Java classes to improve source code readability.`,stars:0,repo:`tlcsdm/vscode-java-method-sorter`},{name:`vscode-translation`,description:`In-editor translation for VS Code.`,stars:0,repo:`tlcsdm/vscode-translation`}],r=[{name:`javafxTool`,description:`JavaFX scaffolding built on JDK21 + JavaFX 21 + controlsfx 11 + Maven.`,language:`Java`,stars:17,repo:`unknowIfGuestInDream/javafxTool`},{name:`jvm-explorer`,description:`Desktop app for browsing loaded class files in running JVMs.`,language:`Java`,stars:0,repo:`unknowIfGuestInDream/jvm-explorer`},{name:`InsightPC`,description:`Visual implementation of OSHI — view system and hardware information.`,language:`Java`,stars:0,repo:`unknowIfGuestInDream/InsightPC`},{name:`patchVisualizer`,description:`Visualize patch files and their applied changes.`,language:`Java`,stars:0,repo:`unknowIfGuestInDream/patchVisualizer`},{name:`dalian-dagunzi-fx`,description:`JavaFX 大连大骨子（个人趣味项目）。`,language:`Java`,stars:0,repo:`unknowIfGuestInDream/dalian-dagunzi-fx`},{name:`eclipse-rcp-example`,description:`Eclipse RCP 示例工程。`,language:`Java`,stars:1,repo:`tlcsdm/eclipse-rcp-example`},{name:`tlstudio`,description:`SWT examples (JFace / RCP examples planned).`,language:`Java`,stars:2,repo:`unknowIfGuestInDream/tlstudio`}],i=[{name:`genCode`,description:`从 Oracle 等数据库的存储过程生成后台 Java 代码，并根据表生成 CRUD 存储过程。`,language:`Java`,stars:6,repo:`unknowIfGuestInDream/genCode`},{name:`patchReader-extension`,description:`浏览器扩展：可视化 patch 和 diff 文件。`,language:`JavaScript`,stars:0,repo:`tlcsdm/patchReader-extension`},{name:`tlcsdm-quick-access-plugin`,description:`浏览器扩展：tlcsdm 网站快速访问入口。`,language:`JavaScript`,stars:0,repo:`tlcsdm/tlcsdm-quick-access-plugin`}],a=[{name:`windowMonitor`,description:`窗口监控工具。`,language:`Java`,stars:0,repo:`unknowIfGuestInDream/windowMonitor`},{name:`xxl-job-oracle`,description:`基于 xxl-job-2.3 的 Oracle 数据源版本（已归档）。`,language:`Java`,stars:0,repo:`tlcsdm/xxl-job-oracle`}],o={Java:`#b07219`,TypeScript:`#3178c6`,JavaScript:`#f1e05a`,"C++":`#f34b7d`,C:`#555555`,Python:`#3572a5`,Go:`#00add8`,Rust:`#dea584`,HTML:`#e34c26`,CSS:`#563d7c`,Shell:`#89e051`,Vue:`#41b883`},s=` / `,c={eclipsePlugins:[`Java`],vscodeExtensions:[`TypeScript`]},l={github:`M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577 0-.285-.01-1.04-.016-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.086 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.776.42-1.305.763-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23A11.5 11.5 0 0112 5.8c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.654 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.605-2.805 5.622-5.478 5.92.43.37.823 1.103.823 2.222 0 1.604-.015 2.896-.015 3.29 0 .32.217.694.825.576C20.565 21.8 24 17.302 24 12c0-6.627-5.373-12-12-12z`,org:`M16 11a4 4 0 1 0-2.828-6.828A4 4 0 0 0 16 11zm-8 1a3 3 0 1 0-2.12-5.12A3 3 0 0 0 8 12zm8 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm-8 1c-2.33 0-7 1.17-7 3.5V20h5v-3c0-1.13.48-2.11 1.28-2.9C7.52 14.05 7.76 14 8 14z`,jenkins:`M12 2a2 2 0 0 1 2 2v1.07a7.97 7.97 0 0 1 2.38.98l.76-.76a2 2 0 1 1 2.83 2.83l-.76.76c.44.74.77 1.54.98 2.38H22a2 2 0 1 1 0 4h-1.07a7.97 7.97 0 0 1-.98 2.38l.76.76a2 2 0 1 1-2.83 2.83l-.76-.76a7.97 7.97 0 0 1-2.38.98V22a2 2 0 1 1-4 0v-1.07a7.97 7.97 0 0 1-2.38-.98l-.76.76a2 2 0 1 1-2.83-2.83l.76-.76a7.97 7.97 0 0 1-.98-2.38H2a2 2 0 1 1 0-4h1.07a7.97 7.97 0 0 1 .98-2.38l-.76-.76a2 2 0 1 1 2.83-2.83l.76.76a7.97 7.97 0 0 1 2.38-.98V4a2 2 0 0 1 2-2zm0 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8z`,gitee:`M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm5.997 10.182h-9.01a.818.818 0 00-.818.818v2.045c0 .452.366.818.818.818h5.455a.818.818 0 01.818.818v.409a2.455 2.455 0 01-2.455 2.455H5.182a.818.818 0 01-.818-.818V9.455A2.455 2.455 0 016.818 7h10.361a.818.818 0 01.818.818v1.546a.818.818 0 01-.818.818z`,mail:`M2 4h20v16H2V4zm2 2v.511l8 5.334 8-5.334V6H4zm16 2.823l-7.445 4.963a1 1 0 01-1.11 0L4 8.823V18h16V8.823z`,location:`M12 2a7 7 0 017 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 017-7zm0 4.5A2.5 2.5 0 1012 11.5 2.5 2.5 0 0012 6.5z`,briefcase:`M10 2h4a2 2 0 012 2v2h4a2 2 0 012 2v3H2V8a2 2 0 012-2h4V4a2 2 0 012-2zm0 4h4V4h-4v2zM2 13h20v7a2 2 0 01-2 2H4a2 2 0 01-2-2v-7zm9 1v3h2v-3h-2z`,code:`M8.7 15.9L4.8 12l3.9-3.9-1.4-1.4L2 12l5.3 5.3 1.4-1.4zm6.6 0l3.9-3.9-3.9-3.9 1.4-1.4L22 12l-5.3 5.3-1.4-1.4z`,plug:`M14 2v4h-4V2H8v4H6v5a5 5 0 005 5v6h2v-6a5 5 0 005-5V6h-2V2h-2z`,vscode:`M23.15 2.587l-4.6-2.21a1.39 1.39 0 00-1.58.26L1.86 14.77a.93.93 0 000 1.37l1.23 1.12a.93.93 0 001.19.05L22.5 3.89a.93.93 0 00-.04-1.5l-.01.01.7.19zM17.58 7.5L9.68 15.4l7.9 6.67a1.39 1.39 0 001.56.11l4.38-2.1a1.4 1.4 0 00.78-1.26V5.18a1.4 1.4 0 00-.78-1.26L17.58 7.5zM7.67 13.4l-2.86 2.86 2.86 2.47 2.87-2.46-2.87-2.87z`,star:`M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z`},u=`uigid-theme`,d=`M12 4V2m0 20v-2m8-8h2M2 12h2m13.657-5.657l1.414-1.414M4.929 19.071l1.414-1.414m0-11.314L4.929 4.929m14.142 14.142l-1.414-1.414M12 7a5 5 0 100 10 5 5 0 000-10z`,f=`M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z`,p=`M6 14l6-6 6 6`,m=e=>e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`),h=e=>`https://github.com/${e}`,g=e=>e>=1e3?(e/1e3).toFixed(1)+`k`:String(e),_=(e,t=!1)=>t?`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${e}"/></svg>`:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${e}" fill="currentColor"/></svg>`,v=e=>_(l[e]??l.github),y=e=>`
  <section class="hero" aria-label="About">
    <div class="hero__avatar">
      <img src="${m(e.avatar)}" alt="${m(e.name)} 头像"
        loading="eager" width="156" height="156"
        referrerpolicy="no-referrer" />
    </div>
    <div class="hero__body">
      <span class="hero__id">@${m(e.githubId)}</span>
      <h1 class="hero__name">${m(e.name)}</h1>
      <p class="hero__tagline">${m(e.tagline)}</p>
      <div class="hero__bio">
        ${e.bio.map(e=>`<p>${m(e)}</p>`).join(``)}
      </div>
      <div class="hero__meta">
        <span>${v(`location`)}${m(e.location)}</span>
        <span>${v(`briefcase`)}${m(e.org)}</span>
      </div>
      <div class="hero__highlights">
        ${e.highlights.map(e=>`<span class="chip">${v(e.icon)}${m(e.label)}</span>`).join(``)}
      </div>
      <div class="hero__socials">
        ${e.socials.map(e=>`
          <a class="social-link" href="${m(e.link)}"
             target="_blank" rel="noopener noreferrer" aria-label="${m(e.name)}">
            ${v(e.icon)}
            <span>${m(e.name)}</span>
          </a>`).join(``)}
      </div>
    </div>
  </section>
`,b=(e,t,n)=>{let r=e.length+t.length+n.length,i=e.reduce((e,t)=>e+t.stars,0)+t.reduce((e,t)=>e+t.stars,0)+n.reduce((e,t)=>e+t.stars,0),a=new Set(n.map(e=>e.language));e.length>0&&c.eclipsePlugins.forEach(e=>a.add(e)),t.length>0&&c.vscodeExtensions.forEach(e=>a.add(e));let o=Array.from(a).sort().join(s);return`
    <section class="stats" aria-label="Stats">
      <div class="stat"><div class="stat__value">${r}</div><div class="stat__label">开源仓库</div></div>
      <div class="stat"><div class="stat__value">${g(i)}</div><div class="stat__label">累计 Stars</div></div>
      <div class="stat"><div class="stat__value">${m(o)}</div><div class="stat__label">涉及语言</div></div>
    </section>
  `},x=e=>`
  <a class="card" href="${m(h(e.repo))}"
     target="_blank" rel="noopener noreferrer">
    <h3 class="card__title"><span>${m(e.name)}</span></h3>
    <div class="card__repo">${m(e.repo)}</div>
    <p class="card__desc">${m(e.description)}</p>
    <div class="card__meta">
      <span class="stars"><span class="stars__icon">★</span> ${m(g(e.stars))}</span>
      <span>GitHub</span>
    </div>
  </a>
`,S=e=>{let t=o[e.language]??`#888`;return`
    <a class="card" href="${m(h(e.repo))}"
       target="_blank" rel="noopener noreferrer">
      <h3 class="card__title"><span>${m(e.name)}</span></h3>
      <div class="card__repo">${m(e.repo)}</div>
      <p class="card__desc">${m(e.description)}</p>
      <div class="card__meta">
        <span class="lang">
          <span class="lang__dot" style="background:${m(t)}"></span>
          ${m(e.language)}
        </span>
        <span class="stars"><span class="stars__icon">★</span> ${m(g(e.stars))}</span>
      </div>
    </a>
  `},C=(e,t,n,r=!1)=>`
  <section class="module">
    <header class="module__header">
      <h2 class="module__title">${m(e)}</h2>
      <span class="module__count">${t.length} repos</span>
    </header>
    <div class="grid${r?` grid--compact`:``}">
      ${t.map(n).join(``)}
    </div>
  </section>
`,w=e=>`
    <footer class="footer">
      <span>© ${new Date().getFullYear()} ${m(e.name)}</span>
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
  `,T=()=>`
  <header class="topbar">
    <button class="theme-toggle" id="theme-toggle" type="button"
            aria-label="Toggle color theme" title="切换主题">
      ${_(f,!0)}
    </button>
  </header>
`,E=()=>`
  <div class="container">
    ${T()}
    ${y(e)}
    ${b(t,n,[...r,...i,...a])}
    ${C(`Eclipse Plugins`,t,x)}
    ${C(`VS Code Extensions`,n,x)}
    ${C(`Desktop UI Projects`,r,S,!0)}
    ${C(`Web / Tools`,i,S,!0)}
    ${C(`Others`,a,S,!0)}
    ${w(e)}
  </div>
  <button
    class="back-to-top"
    id="back-to-top"
    type="button"
    aria-label="Back to top / 回到顶部"
    title="Back to top / 回到顶部"
    hidden
  >
    ${_(p,!0)}
  </button>
`,D=()=>{try{let e=localStorage.getItem(u);if(e===`light`||e===`dark`)return e}catch{}return window.matchMedia(`(prefers-color-scheme: dark)`).matches?`dark`:`light`},O=e=>{document.documentElement.setAttribute(`data-theme`,e);let t=document.getElementById(`theme-toggle`);t&&(t.innerHTML=_(e===`dark`?d:f,!0))},k=()=>{let e=D();O(e),document.getElementById(`theme-toggle`)?.addEventListener(`click`,()=>{e=e===`dark`?`light`:`dark`;try{localStorage.setItem(u,e)}catch{}O(e)})},A=()=>{let e=document.getElementById(`back-to-top`);if(!e)return;let t=()=>{e.hidden=!(document.documentElement.scrollHeight>window.innerHeight)};e.addEventListener(`click`,()=>{window.scrollTo({top:0,behavior:`smooth`})}),window.addEventListener(`scroll`,t,{passive:!0}),window.addEventListener(`resize`,t),t()},j=()=>{let e=document.getElementById(`app`);e&&(e.innerHTML=E(),k(),A())};document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,j):j();