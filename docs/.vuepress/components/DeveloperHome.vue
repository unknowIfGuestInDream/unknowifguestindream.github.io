<script setup lang="ts">
import profile from "../data/profile.json";
import eclipsePlugins from "../data/eclipse-plugins.json";
import vscodeExtensions from "../data/vscode-extensions.json";
import projects from "../data/projects.json";

const languageColors: Record<string, string> = {
  Java: "#b07219",
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Go: "#00ADD8",
  Rust: "#dea584",
  Shell: "#89e051",
};

const socialIcon = (name: string): string => {
  const map: Record<string, string> = {
    github:
      "M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577 0-.285-.01-1.04-.016-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.086 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.776.42-1.305.763-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23A11.5 11.5 0 0112 5.8c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.654 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.605-2.805 5.622-5.478 5.92.43.37.823 1.103.823 2.222 0 1.604-.015 2.896-.015 3.29 0 .32.217.694.825.576C20.565 21.8 24 17.302 24 12c0-6.627-5.373-12-12-12z",
    blog: "M4 3h11l5 5v13H4V3zm2 2v14h12V9h-4V5H6zm3 4h3v2H9V9zm0 4h8v2H9v-2zm0 4h6v2H9v-2z",
    gitee:
      "M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm5.997 10.182h-9.01a.818.818 0 00-.818.818v2.045c0 .452.366.818.818.818h5.455a.818.818 0 01.818.818v.409a2.455 2.455 0 01-2.455 2.455H5.182a.818.818 0 01-.818-.818V9.455A2.455 2.455 0 016.818 7h10.361a.818.818 0 01.818.818v1.546a.818.818 0 01-.818.818z",
    mail: "M2 4h20v16H2V4zm2 2v.511l8 5.334 8-5.334V6H4zm16 2.823l-7.445 4.963a1 1 0 01-1.11 0L4 8.823V18h16V8.823z",
  };
  return map[name] ?? map.blog;
};

const formatDownloads = (n: number): string => {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
  if (n >= 1000) return (n / 1000).toFixed(1) + "K";
  return String(n);
};
</script>

<template>
  <div class="dev-home">
    <!-- About Me -->
    <section class="dev-section dev-hero">
      <div class="dev-hero__avatar">
        <img :src="profile.avatar" :alt="profile.name" loading="lazy" />
      </div>
      <div class="dev-hero__body">
        <div class="dev-hero__badge">@{{ profile.githubId }}</div>
        <h1 class="dev-hero__title">{{ profile.name }}</h1>
        <p class="dev-hero__tagline">{{ profile.tagline }}</p>
        <p v-for="(line, i) in profile.bio" :key="i" class="dev-hero__bio">
          {{ line }}
        </p>
        <div class="dev-hero__socials">
          <a
            v-for="s in profile.socials"
            :key="s.name"
            :href="s.link"
            class="dev-social"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="s.name"
          >
            <svg
              class="dev-social__icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path :d="socialIcon(s.icon)" fill="currentColor" />
            </svg>
            <span>{{ s.name }}</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Eclipse Plugins -->
    <section class="dev-section">
      <header class="dev-section__header">
        <h2 class="dev-section__title">
          <span class="dev-accent">#</span> Eclipse Plugins
        </h2>
        <p class="dev-section__subtitle">为 Eclipse IDE 开发的插件</p>
      </header>
      <div class="dev-grid">
        <article v-for="p in eclipsePlugins" :key="p.name" class="dev-card">
          <h3 class="dev-card__title">{{ p.name }}</h3>
          <p class="dev-card__desc">{{ p.description }}</p>
          <ul class="dev-card__tags">
            <li v-for="h in p.highlights" :key="h" class="dev-tag">
              {{ h }}
            </li>
          </ul>
          <div class="dev-card__actions">
            <a
              :href="p.sourceUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="dev-btn dev-btn--primary"
              >源码</a
            >
            <a
              :href="p.downloadUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="dev-btn"
              >下载</a
            >
          </div>
        </article>
      </div>
    </section>

    <!-- VS Code Extensions -->
    <section class="dev-section">
      <header class="dev-section__header">
        <h2 class="dev-section__title">
          <span class="dev-accent">#</span> VS Code Extensions
        </h2>
        <p class="dev-section__subtitle">发布在 Marketplace 的扩展</p>
      </header>
      <div class="dev-grid">
        <article v-for="e in vscodeExtensions" :key="e.name" class="dev-card">
          <div class="dev-card__head">
            <h3 class="dev-card__title">{{ e.name }}</h3>
            <span class="dev-downloads" :title="`${e.downloads} downloads`">
              ↓ {{ formatDownloads(e.downloads) }}
            </span>
          </div>
          <p class="dev-card__desc">{{ e.description }}</p>
          <ul class="dev-card__tags">
            <li v-for="f in e.features" :key="f" class="dev-tag">
              {{ f }}
            </li>
          </ul>
          <div class="dev-card__actions">
            <a
              :href="e.marketplaceUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="dev-btn dev-btn--primary"
              >Marketplace</a
            >
            <a
              :href="e.sourceUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="dev-btn"
              >源码</a
            >
          </div>
        </article>
      </div>
    </section>

    <!-- Other Open Source Projects -->
    <section class="dev-section">
      <header class="dev-section__header">
        <h2 class="dev-section__title">
          <span class="dev-accent">#</span> Other Open Source Projects
        </h2>
        <p class="dev-section__subtitle">其他参与或主导的开源项目</p>
      </header>
      <div class="dev-grid dev-grid--compact">
        <a
          v-for="pr in projects"
          :key="pr.name"
          :href="pr.link"
          target="_blank"
          rel="noopener noreferrer"
          class="dev-card dev-card--link"
        >
          <h3 class="dev-card__title">{{ pr.name }}</h3>
          <p class="dev-card__desc">{{ pr.description }}</p>
          <div class="dev-card__meta">
            <span class="dev-lang">
              <span
                class="dev-lang__dot"
                :style="{
                  background: languageColors[pr.language] || '#888',
                }"
              ></span>
              {{ pr.language }}
            </span>
            <span class="dev-stars">★ {{ pr.stars }}</span>
          </div>
        </a>
      </div>
    </section>
  </div>
</template>

<style>
/* Hide theme-hope's default page title + breadcrumb on pages that embed
   DeveloperHome — they duplicate the hero section. This rule is scoped to
   the html element only while the component is mounted because the rule
   is loaded lazily with the component. */
html:has(.dev-home) .vp-page-title,
html:has(.dev-home) .vp-breadcrumb {
  display: none !important;
}
html:has(.dev-home) .vp-page {
  padding-top: 0;
}
</style>

<style lang="scss" scoped>
/*
 * Theme-hope exposes CSS variables that switch automatically between light
 * and dark modes (body[data-theme="dark"]). We rely on those variables and
 * provide safe fallbacks so the component still renders on other themes.
 */
.dev-home {
  max-width: 1080px;
  margin: 0 auto;
  padding: 2rem 1.25rem 4rem;
  color: var(--text-color, #2c3e50);
  font-family: var(
    --font-family,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    sans-serif
  );
}

.dev-section {
  margin-bottom: 3.5rem;

  &__header {
    margin-bottom: 1.5rem;
    border-bottom: 1px solid var(--border-color, #e5e7eb);
    padding-bottom: 0.75rem;
  }

  &__title {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
    letter-spacing: -0.01em;
  }

  &__subtitle {
    color: var(--text-color-lighter, #6b7280);
    margin: 0.25rem 0 0;
    font-size: 0.95rem;
  }
}

.dev-accent {
  color: var(--theme-color, #3eaf7c);
  margin-right: 0.25rem;
}

/* Hero */
.dev-hero {
  display: flex;
  gap: 2rem;
  align-items: center;
  padding: 2rem;
  border-radius: 16px;
  background: linear-gradient(
    135deg,
    var(--bg-color-secondary, #f6f8fa) 0%,
    var(--bg-color, #fff) 100%
  );
  border: 1px solid var(--border-color, #e5e7eb);

  &__avatar {
    flex-shrink: 0;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid var(--theme-color, #3eaf7c);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }

  &__body {
    flex: 1;
    min-width: 0;
  }

  &__badge {
    display: inline-block;
    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    font-size: 0.85rem;
    color: var(--theme-color, #3eaf7c);
    background: rgba(62, 175, 124, 0.1);
    padding: 0.15rem 0.6rem;
    border-radius: 999px;
    margin-bottom: 0.5rem;
  }

  &__title {
    font-size: 2rem;
    font-weight: 800;
    margin: 0.1rem 0 0.4rem;
    letter-spacing: -0.02em;
  }

  &__tagline {
    color: var(--text-color-lighter, #6b7280);
    font-size: 1rem;
    margin: 0 0 0.9rem;
    font-weight: 500;
  }

  &__bio {
    margin: 0.25rem 0;
    line-height: 1.7;
    color: var(--text-color, #374151);
  }

  &__socials {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1.1rem;
  }
}

.dev-social {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.85rem;
  border-radius: 8px;
  border: 1px solid var(--border-color, #e5e7eb);
  color: var(--text-color, #2c3e50);
  text-decoration: none;
  font-size: 0.9rem;
  transition:
    transform 0.15s ease,
    border-color 0.15s ease,
    color 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    border-color: var(--theme-color, #3eaf7c);
    color: var(--theme-color, #3eaf7c);
  }

  &__icon {
    width: 16px;
    height: 16px;
  }
}

/* Grid & cards */
.dev-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;

  &--compact {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }
}

.dev-card {
  display: flex;
  flex-direction: column;
  padding: 1.1rem 1.2rem;
  border-radius: 12px;
  border: 1px solid var(--border-color, #e5e7eb);
  background: var(--bg-color, #fff);
  transition:
    transform 0.15s ease,
    border-color 0.15s ease,
    box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: var(--theme-color, #3eaf7c);
    box-shadow: var(--card-shadow, 0 6px 20px rgba(0, 0, 0, 0.08));
  }

  &--link {
    text-decoration: none;
    color: inherit;
  }

  &__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
  }

  &__title {
    font-size: 1.1rem;
    font-weight: 700;
    margin: 0 0 0.5rem;
  }

  &__desc {
    color: var(--text-color-lighter, #6b7280);
    font-size: 0.9rem;
    line-height: 1.55;
    margin: 0 0 0.85rem;
    flex: 1;
  }

  &__tags {
    list-style: none;
    padding: 0;
    margin: 0 0 0.9rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
  }

  &__actions {
    display: flex;
    gap: 0.5rem;
    margin-top: auto;
  }

  &__meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.85rem;
    color: var(--text-color-lighter, #6b7280);
    margin-top: auto;
  }
}

.dev-tag {
  font-size: 0.75rem;
  padding: 0.15rem 0.55rem;
  border-radius: 999px;
  background: var(--bg-color-secondary, #f1f5f9);
  color: var(--text-color-lighter, #475569);
  border: 1px solid var(--border-color, #e5e7eb);
}

.dev-btn {
  display: inline-flex;
  align-items: center;
  padding: 0.4rem 0.9rem;
  border-radius: 8px;
  border: 1px solid var(--border-color, #e5e7eb);
  background: transparent;
  color: var(--text-color, #2c3e50);
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 500;
  transition:
    background-color 0.15s ease,
    border-color 0.15s ease,
    color 0.15s ease;

  &:hover {
    border-color: var(--theme-color, #3eaf7c);
    color: var(--theme-color, #3eaf7c);
  }

  &--primary {
    background: var(--theme-color, #3eaf7c);
    border-color: var(--theme-color, #3eaf7c);
    color: #fff;

    &:hover {
      filter: brightness(1.08);
      color: #fff;
    }
  }
}

.dev-downloads {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 0.8rem;
  color: var(--theme-color, #3eaf7c);
  background: rgba(62, 175, 124, 0.1);
  padding: 0.1rem 0.5rem;
  border-radius: 999px;
  white-space: nowrap;
}

.dev-lang {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;

  &__dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: inline-block;
  }
}

.dev-stars {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
}

@media (max-width: 640px) {
  .dev-hero {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem 1rem;

    &__avatar {
      width: 110px;
      height: 110px;
    }

    &__socials {
      justify-content: center;
    }

    &__title {
      font-size: 1.6rem;
    }
  }

  .dev-home {
    padding: 1rem 0.75rem 3rem;
  }
}
</style>
