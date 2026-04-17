import "./style.css";
import profile from "./data/profile.json";
import eclipsePlugins from "./data/eclipse-plugins.json";
import vscodeExtensions from "./data/vscode-extensions.json";
import projects from "./data/projects.json";

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

interface Social {
  name: string;
  icon: string;
  link: string;
}

interface Profile {
  name: string;
  githubId: string;
  avatar: string;
  tagline: string;
  bio: string[];
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

const SOCIAL_ICONS: Record<string, string> = {
  github:
    "M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577 0-.285-.01-1.04-.016-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.086 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.776.42-1.305.763-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23A11.5 11.5 0 0112 5.8c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.654 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.605-2.805 5.622-5.478 5.92.43.37.823 1.103.823 2.222 0 1.604-.015 2.896-.015 3.29 0 .32.217.694.825.576C20.565 21.8 24 17.302 24 12c0-6.627-5.373-12-12-12z",
  org: "M12 2 3 7v6c0 4.5 3.5 8.5 9 9 5.5-.5 9-4.5 9-9V7l-9-5zm0 3.3L19 9v4c0 3.3-2.5 6.5-7 7-4.5-.5-7-3.7-7-7V9l7-3.7zM8 11v6h2v-2h4v2h2v-6h-2v2h-4v-2H8z",
  gitee:
    "M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm5.997 10.182h-9.01a.818.818 0 00-.818.818v2.045c0 .452.366.818.818.818h5.455a.818.818 0 01.818.818v.409a2.455 2.455 0 01-2.455 2.455H5.182a.818.818 0 01-.818-.818V9.455A2.455 2.455 0 016.818 7h10.361a.818.818 0 01.818.818v1.546a.818.818 0 01-.818.818z",
  mail: "M2 4h20v16H2V4zm2 2v.511l8 5.334 8-5.334V6H4zm16 2.823l-7.445 4.963a1 1 0 01-1.11 0L4 8.823V18h16V8.823z",
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

const iconSvg = (path: string): string =>
  `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${path}" fill="currentColor"/></svg>`;

/* -------------------------------------------------------------------------- */
/* Renderers                                                                  */
/* -------------------------------------------------------------------------- */

const renderHero = (p: Profile): string => `
  <section class="hero" aria-label="About">
    <div class="hero__avatar">
      <img src="${escapeHtml(p.avatar)}" alt="${escapeHtml(p.name)}'s avatar"
        loading="eager" width="140" height="140" />
    </div>
    <div class="hero__body">
      <span class="hero__id">@${escapeHtml(p.githubId)}</span>
      <h1 class="hero__name">${escapeHtml(p.name)}</h1>
      <p class="hero__tagline">${escapeHtml(p.tagline)}</p>
      <div class="hero__bio">
        ${p.bio.map((line) => `<p>${escapeHtml(line)}</p>`).join("")}
      </div>
      <div class="hero__socials">
        ${p.socials
          .map(
            (s) => `
          <a class="social-link" href="${escapeHtml(s.link)}"
             target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(s.name)}">
            ${iconSvg(SOCIAL_ICONS[s.icon] ?? SOCIAL_ICONS.github)}
            <span>${escapeHtml(s.name)}</span>
          </a>`,
          )
          .join("")}
      </div>
    </div>
  </section>
`;

const renderRepoCard = (item: RepoCard): string => `
  <a class="card" href="${escapeHtml(repoUrl(item.repo))}"
     target="_blank" rel="noopener noreferrer">
    <h3 class="card__title">${escapeHtml(item.name)}</h3>
    <div class="card__repo">${escapeHtml(item.repo)}</div>
    <p class="card__desc">${escapeHtml(item.description)}</p>
    <div class="card__meta">
      <span class="stars">★ ${escapeHtml(formatStars(item.stars))}</span>
      <span aria-hidden="true">→</span>
    </div>
  </a>
`;

const renderProjectCard = (item: ProjectCard): string => {
  const dotColor = LANGUAGE_COLORS[item.language] ?? "#888";
  return `
    <a class="card" href="${escapeHtml(repoUrl(item.repo))}"
       target="_blank" rel="noopener noreferrer">
      <h3 class="card__title">${escapeHtml(item.name)}</h3>
      <div class="card__repo">${escapeHtml(item.repo)}</div>
      <p class="card__desc">${escapeHtml(item.description)}</p>
      <div class="card__meta">
        <span class="lang">
          <span class="lang__dot" style="background:${escapeHtml(dotColor)}"></span>
          ${escapeHtml(item.language)}
        </span>
        <span class="stars">★ ${escapeHtml(formatStars(item.stars))}</span>
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
      <span>
        <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">辽ICP备2021000033号</a>
        ·
        <a href="https://beian.mps.gov.cn/#/query/webSearch?code=21020302000532" target="_blank" rel="noopener noreferrer">
          辽公网安备21020302000532号
        </a>
      </span>
    </footer>
  `;
};

const renderTopbar = (): string => `
  <header class="topbar">
    <button class="theme-toggle" id="theme-toggle" type="button"
            aria-label="Toggle color theme" title="Toggle color theme">
      ${iconSvg(MOON_PATH)}
    </button>
  </header>
`;

const renderPage = (): string => `
  <div class="container">
    ${renderTopbar()}
    ${renderHero(profile as Profile)}
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
      "Other Open Source Projects",
      projects as ProjectCard[],
      renderProjectCard,
      true,
    )}
    ${renderFooter(profile as Profile)}
  </div>
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
    btn.innerHTML = iconSvg(theme === "dark" ? SUN_PATH : MOON_PATH);
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

/* -------------------------------------------------------------------------- */
/* Bootstrap                                                                  */
/* -------------------------------------------------------------------------- */

const mount = (): void => {
  const root = document.getElementById("app");
  if (!root) return;
  root.innerHTML = renderPage();
  bindTheme();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mount);
} else {
  mount();
}
