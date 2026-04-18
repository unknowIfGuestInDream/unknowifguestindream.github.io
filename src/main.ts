import "./style.css";
import profile from "./data/profile.json";
import eclipsePlugins from "./data/eclipse-plugins.json";
import vscodeExtensions from "./data/vscode-extensions.json";
import projectsDesktop from "./data/projects-desktop.json";
import projectsWeb from "./data/projects-web.json";
import projectsOthers from "./data/projects-others.json";

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

interface Social {
  name: string;
  icon: string;
  link: string;
}

interface Highlight {
  icon: string;
  label: string;
}

interface Profile {
  name: string;
  githubId: string;
  avatar: string;
  tagline: string;
  location: string;
  org: string;
  bio: string[];
  highlights: Highlight[];
  socials: Social[];
}

interface RepoCard {
  name: string;
  description: string;
  stars: number;
  repo: string;
}

interface ProjectCard extends RepoCard {
  language: string;
}

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

const LANGUAGE_COLORS: Record<string, string> = {
  Java: "#b07219",
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  "C++": "#f34b7d",
  C: "#555555",
  Python: "#3572a5",
  Go: "#00add8",
  Rust: "#dea584",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
  Vue: "#41b883",
};

/* Inline SVG paths (24x24). */
const ICONS: Record<string, string> = {
  github:
    "M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577 0-.285-.01-1.04-.016-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.086 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.776.42-1.305.763-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23A11.5 11.5 0 0112 5.8c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.654 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.605-2.805 5.622-5.478 5.92.43.37.823 1.103.823 2.222 0 1.604-.015 2.896-.015 3.29 0 .32.217.694.825.576C20.565 21.8 24 17.302 24 12c0-6.627-5.373-12-12-12z",
  org: "M16 11a4 4 0 1 0-2.828-6.828A4 4 0 0 0 16 11zm-8 1a3 3 0 1 0-2.12-5.12A3 3 0 0 0 8 12zm8 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm-8 1c-2.33 0-7 1.17-7 3.5V20h5v-3c0-1.13.48-2.11 1.28-2.9C7.52 14.05 7.76 14 8 14z",
  jenkins:
    "M12 2a2 2 0 0 1 2 2v1.07a7.97 7.97 0 0 1 2.38.98l.76-.76a2 2 0 1 1 2.83 2.83l-.76.76c.44.74.77 1.54.98 2.38H22a2 2 0 1 1 0 4h-1.07a7.97 7.97 0 0 1-.98 2.38l.76.76a2 2 0 1 1-2.83 2.83l-.76-.76a7.97 7.97 0 0 1-2.38.98V22a2 2 0 1 1-4 0v-1.07a7.97 7.97 0 0 1-2.38-.98l-.76.76a2 2 0 1 1-2.83-2.83l.76-.76a7.97 7.97 0 0 1-.98-2.38H2a2 2 0 1 1 0-4h1.07a7.97 7.97 0 0 1 .98-2.38l-.76-.76a2 2 0 1 1 2.83-2.83l.76.76a7.97 7.97 0 0 1 2.38-.98V4a2 2 0 0 1 2-2zm0 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8z",
  gitee:
    "M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm5.997 10.182h-9.01a.818.818 0 00-.818.818v2.045c0 .452.366.818.818.818h5.455a.818.818 0 01.818.818v.409a2.455 2.455 0 01-2.455 2.455H5.182a.818.818 0 01-.818-.818V9.455A2.455 2.455 0 016.818 7h10.361a.818.818 0 01.818.818v1.546a.818.818 0 01-.818.818z",
  mail: "M2 4h20v16H2V4zm2 2v.511l8 5.334 8-5.334V6H4zm16 2.823l-7.445 4.963a1 1 0 01-1.11 0L4 8.823V18h16V8.823z",
  location:
    "M12 2a7 7 0 017 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 017-7zm0 4.5A2.5 2.5 0 1012 11.5 2.5 2.5 0 0012 6.5z",
  briefcase:
    "M10 2h4a2 2 0 012 2v2h4a2 2 0 012 2v3H2V8a2 2 0 012-2h4V4a2 2 0 012-2zm0 4h4V4h-4v2zM2 13h20v7a2 2 0 01-2 2H4a2 2 0 01-2-2v-7zm9 1v3h2v-3h-2z",
  code: "M8.7 15.9L4.8 12l3.9-3.9-1.4-1.4L2 12l5.3 5.3 1.4-1.4zm6.6 0l3.9-3.9-3.9-3.9 1.4-1.4L22 12l-5.3 5.3-1.4-1.4z",
  plug: "M14 2v4h-4V2H8v4H6v5a5 5 0 005 5v6h2v-6a5 5 0 005-5V6h-2V2h-2z",
  vscode:
    "M23.15 2.587l-4.6-2.21a1.39 1.39 0 00-1.58.26L1.86 14.77a.93.93 0 000 1.37l1.23 1.12a.93.93 0 001.19.05L22.5 3.89a.93.93 0 00-.04-1.5l-.01.01.7.19zM17.58 7.5L9.68 15.4l7.9 6.67a1.39 1.39 0 001.56.11l4.38-2.1a1.4 1.4 0 00.78-1.26V5.18a1.4 1.4 0 00-.78-1.26L17.58 7.5zM7.67 13.4l-2.86 2.86 2.86 2.47 2.87-2.46-2.87-2.87z",
  chip: "M6 2h12a2 2 0 012 2v4h2v2h-2v4h2v2h-2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4H2v-2h2v-4H2V8h2V4a2 2 0 012-2zm0 2v16h12V4H6zm3 3h6v10H9V7z",
  star: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z",
};

const THEME_KEY = "uigid-theme";
const SUN_PATH =
  "M12 4V2m0 20v-2m8-8h2M2 12h2m13.657-5.657l1.414-1.414M4.929 19.071l1.414-1.414m0-11.314L4.929 4.929m14.142 14.142l-1.414-1.414M12 7a5 5 0 100 10 5 5 0 000-10z";
const MOON_PATH = "M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z";

const escapeHtml = (s: string): string =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const repoUrl = (repo: string): string => `https://github.com/${repo}`;

const formatStars = (n: number): string => {
  if (n >= 1000) return (n / 1000).toFixed(1) + "k";
  return String(n);
};

const iconSvg = (path: string, strokeOnly = false): string => {
  if (strokeOnly) {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${path}"/></svg>`;
  }
  return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${path}" fill="currentColor"/></svg>`;
};

const getIcon = (name: string): string => iconSvg(ICONS[name] ?? ICONS.github);

/* -------------------------------------------------------------------------- */
/* Renderers                                                                  */
/* -------------------------------------------------------------------------- */

const renderHero = (p: Profile): string => `
  <section class="hero" aria-label="About">
    <div class="hero__avatar">
      <img src="${escapeHtml(p.avatar)}" alt="${escapeHtml(p.name)} 头像"
        loading="eager" width="156" height="156"
        referrerpolicy="no-referrer" />
    </div>
    <div class="hero__body">
      <span class="hero__id">@${escapeHtml(p.githubId)}</span>
      <h1 class="hero__name">${escapeHtml(p.name)}</h1>
      <p class="hero__tagline">${escapeHtml(p.tagline)}</p>
      <div class="hero__bio">
        ${p.bio.map((line) => `<p>${escapeHtml(line)}</p>`).join("")}
      </div>
      <div class="hero__meta">
        <span>${getIcon("location")}${escapeHtml(p.location)}</span>
        <span>${getIcon("briefcase")}${escapeHtml(p.org)}</span>
      </div>
      <div class="hero__highlights">
        ${p.highlights
          .map(
            (h) =>
              `<span class="chip">${getIcon(h.icon)}${escapeHtml(h.label)}</span>`,
          )
          .join("")}
      </div>
      <div class="hero__socials">
        ${p.socials
          .map(
            (s) => `
          <a class="social-link" href="${escapeHtml(s.link)}"
             target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(s.name)}">
            ${getIcon(s.icon)}
            <span>${escapeHtml(s.name)}</span>
          </a>`,
          )
          .join("")}
      </div>
    </div>
  </section>
`;

const renderStats = (
  ePlugins: RepoCard[],
  vExt: RepoCard[],
  projs: ProjectCard[],
): string => {
  const totalRepos = ePlugins.length + vExt.length + projs.length;
  const totalStars =
    ePlugins.reduce((s, r) => s + r.stars, 0) +
    vExt.reduce((s, r) => s + r.stars, 0) +
    projs.reduce((s, r) => s + r.stars, 0);
  const languages = new Set(projs.map((p) => p.language));
  return `
    <section class="stats" aria-label="Stats">
      <div class="stat"><div class="stat__value">${totalRepos}</div><div class="stat__label">开源仓库</div></div>
      <div class="stat"><div class="stat__value">${formatStars(totalStars)}</div><div class="stat__label">累计 Stars</div></div>
      <div class="stat"><div class="stat__value">${languages.size}+</div><div class="stat__label">涉及语言</div></div>
    </section>
  `;
};

const renderRepoCard = (item: RepoCard): string => `
  <a class="card" href="${escapeHtml(repoUrl(item.repo))}"
     target="_blank" rel="noopener noreferrer">
    <h3 class="card__title"><span>${escapeHtml(item.name)}</span></h3>
    <div class="card__repo">${escapeHtml(item.repo)}</div>
    <p class="card__desc">${escapeHtml(item.description)}</p>
    <div class="card__meta">
      <span class="stars"><span class="stars__icon">★</span> ${escapeHtml(formatStars(item.stars))}</span>
      <span>GitHub</span>
    </div>
  </a>
`;

const renderProjectCard = (item: ProjectCard): string => {
  const dotColor = LANGUAGE_COLORS[item.language] ?? "#888";
  return `
    <a class="card" href="${escapeHtml(repoUrl(item.repo))}"
       target="_blank" rel="noopener noreferrer">
      <h3 class="card__title"><span>${escapeHtml(item.name)}</span></h3>
      <div class="card__repo">${escapeHtml(item.repo)}</div>
      <p class="card__desc">${escapeHtml(item.description)}</p>
      <div class="card__meta">
        <span class="lang">
          <span class="lang__dot" style="background:${escapeHtml(dotColor)}"></span>
          ${escapeHtml(item.language)}
        </span>
        <span class="stars"><span class="stars__icon">★</span> ${escapeHtml(formatStars(item.stars))}</span>
      </div>
    </a>
  `;
};

const renderModule = <T>(
  title: string,
  items: T[],
  renderItem: (it: T) => string,
  compact = false,
): string => `
  <section class="module">
    <header class="module__header">
      <h2 class="module__title">${escapeHtml(title)}</h2>
      <span class="module__count">${items.length} repos</span>
    </header>
    <div class="grid${compact ? " grid--compact" : ""}">
      ${items.map(renderItem).join("")}
    </div>
  </section>
`;

const renderFooter = (p: Profile): string => {
  const year = new Date().getFullYear();
  return `
    <footer class="footer">
      <span>© ${year} ${escapeHtml(p.name)}</span>
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
  `;
};

const renderTopbar = (): string => `
  <header class="topbar">
    <button class="theme-toggle" id="theme-toggle" type="button"
            aria-label="Toggle color theme" title="切换主题">
      ${iconSvg(MOON_PATH, true)}
    </button>
  </header>
`;

const renderPage = (): string => `
  <div class="container">
    ${renderTopbar()}
    ${renderHero(profile as Profile)}
    ${renderStats(
      eclipsePlugins as RepoCard[],
      vscodeExtensions as RepoCard[],
      [
        ...(projectsDesktop as ProjectCard[]),
        ...(projectsWeb as ProjectCard[]),
        ...(projectsOthers as ProjectCard[]),
      ],
    )}
    ${renderModule(
      "Eclipse Plugins",
      eclipsePlugins as RepoCard[],
      renderRepoCard,
    )}
    ${renderModule(
      "VS Code Extensions",
      vscodeExtensions as RepoCard[],
      renderRepoCard,
    )}
    ${renderModule(
      "Desktop UI Projects",
      projectsDesktop as ProjectCard[],
      renderProjectCard,
      true,
    )}
    ${renderModule(
      "Web / Tools",
      projectsWeb as ProjectCard[],
      renderProjectCard,
      true,
    )}
    ${renderModule(
      "Others",
      projectsOthers as ProjectCard[],
      renderProjectCard,
      true,
    )}
    ${renderFooter(profile as Profile)}
  </div>
  <button
    class="back-to-top"
    id="back-to-top"
    type="button"
    aria-label="回到顶部"
    title="回到顶部"
    hidden
  >
    ↑
  </button>
`;

/* -------------------------------------------------------------------------- */
/* Theme                                                                      */
/* -------------------------------------------------------------------------- */

const getInitialTheme = (): "light" | "dark" => {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    /* ignore storage errors (private mode, etc.) */
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const applyTheme = (theme: "light" | "dark"): void => {
  document.documentElement.setAttribute("data-theme", theme);
  const btn = document.getElementById("theme-toggle");
  if (btn) {
    btn.innerHTML = iconSvg(theme === "dark" ? SUN_PATH : MOON_PATH, true);
  }
};

const bindTheme = (): void => {
  let current = getInitialTheme();
  applyTheme(current);
  const btn = document.getElementById("theme-toggle");
  btn?.addEventListener("click", () => {
    current = current === "dark" ? "light" : "dark";
    try {
      localStorage.setItem(THEME_KEY, current);
    } catch {
      /* ignore */
    }
    applyTheme(current);
  });
};

const bindBackToTop = (): void => {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;

  const updateVisibility = (): void => {
    const scrollable =
      document.documentElement.scrollHeight > window.innerHeight;
    btn.hidden = !(scrollable && window.scrollY > 220);
  };

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  window.addEventListener("scroll", updateVisibility, { passive: true });
  window.addEventListener("resize", updateVisibility);
  updateVisibility();
};

/* -------------------------------------------------------------------------- */
/* Bootstrap                                                                  */
/* -------------------------------------------------------------------------- */

const mount = (): void => {
  const root = document.getElementById("app");
  if (!root) return;
  root.innerHTML = renderPage();
  bindTheme();
  bindBackToTop();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mount);
} else {
  mount();
}
