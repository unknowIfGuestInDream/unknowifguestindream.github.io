import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, jaNavbar, zhNavbar } from "./navbar.js";
import { enSidebar, jaSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme(
  {
    hostname: "https://blog.tlcsdm.com",

    author: {
      name: "unknowIfGuestInDream",
      url: "https://tlcsdm.com",
    },

    favicon: "/favicon.ico",

    iconAssets: "iconfont",

    logo: "/logo.svg",

    repo: "unknowIfGuestInDream/unknowifguestindream.github.io",

    repoDisplay: false,

    docsDir: "docs",

    locales: {
      "/": {
        navbar: zhNavbar,
        sidebar: zhSidebar,

        footer:
          '<a href="https://blog.tlcsdm.com/about/site.html" target="_blank">关于网站</a>',

        copyright: "unknowIfGuestInDream © 2024",

        blog: {
          description: "一名Java开发工程师, 居住在大连",
          intro: "/about/",
          medias: {
            Email: "mailto:tang97155@163.com",
            Gmail: "mailto:liang.tang.cx@gmail.com",
            GitHub: "https://github.com/unknowIfGuestInDream",
            Gitee: "https://gitee.com/unknowIfGuestInDream",
          },
        },
      },
      "/en/": {
        navbar: enNavbar,
        sidebar: enSidebar,

        footer:
          '<a href="https://blog.tlcsdm.com/en/about/site.html" target="_blank">About website</a>',

        copyright: "unknowIfGuestInDream © 2024",

        blog: {
          description: "A Java development engineer, living in Dalian",
          intro: "/en/about/",
          medias: {
            Email: "mailto:tang97155@163.com",
            Gmail: "mailto:liang.tang.cx@gmail.com",
            GitHub: "https://github.com/unknowIfGuestInDream",
            Twitter: "https://twitter.com/unknowIfGuest",
          },
        },
      },
      "/ja/": {
        navbar: jaNavbar,
        sidebar: jaSidebar,

        footer:
          '<a href="https://blog.tlcsdm.com/ja/about/site.html" target="_blank">ウェブサイトについて</a>',

        copyright: "unknowIfGuestInDream © 2024",

        blog: {
          description: "Java開発エンジニア、大連在住",
          intro: "/en/about/",
          medias: {
            Email: "mailto:tang97155@163.com",
            Gmail: "mailto:liang.tang.cx@gmail.com",
            GitHub: "https://github.com/unknowIfGuestInDream",
            Twitter: "https://twitter.com/unknowIfGuest",
          },
        },
      },
    },

    displayFooter: true,
    copyright: "Copyright © 2024 unknowIfGuestInDream",

    plugins: {
      blog: {
        excerptLength: 0,
      },

      comment: {
        provider: "Giscus",
        repo: "unknowIfGuestInDream/giscus-discussions",
        repoId: "R_kgDOIIOJOg",
        category: "Announcements",
        categoryId: "DIC_kwDOIIOJOs4CRybb",
      },

      docsearch: {
        appId: "LDBQGQC8Q9",
        apiKey: "5c3a7145aeba231c3b85b742d24fc24f",
        indexName: "mrhope",
      },

      feed: {
        atom: true,
        json: true,
        rss: true,
      },

      mdEnhance: {
        align: true,
        codetabs: true,
        demo: true,
        figure: true,
        flowchart: true,
        footnote: true,
        imgLazyload: true,
        imgMark: true,
        imgSize: true,
        mathjax: true,
        mermaid: true,
        revealJs: true,
        sub: true,
        sup: true,
        vPre: true,
      },

      pwa: {
        themeColor: "#5c92d1",
        cacheHTML: false,
        maxSize: 3072,
        apple: {
          icon: "/assets/icon/apple-touch-icon.png",
          statusBarColor: "white",
        },
        msTile: {
          image: "/assets/icon/ms-icon-144.png",
          color: "#ffffff",
        },
        manifest: {
          name: "unknowIfGuestInDream 的个人博客",
          short_name: "unknowIfGuestInDream Blog",
          description: "unknowIfGuestInDream 的个人博客",
          theme_color: "#5c92d1",
          icons: [
            {
              src: "/assets/icon/chrome-192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "/assets/icon/chrome-512.png",
              sizes: "512x512",
              type: "image/png",
            },
            {
              src: "/assets/icon/chrome-mask-192.png",
              sizes: "192x192",
              purpose: "maskable",
              type: "image/png",
            },
            {
              src: "/assets/icon/chrome-mask-512.png",
              sizes: "512x512",
              purpose: "maskable",
              type: "image/png",
            },
          ],
          shortcuts: [
            {
              name: "分类",
              short_name: "分类",
              icons: [
                {
                  src: "/assets/icon/category-maskable.png",
                  sizes: "192x192",
                  purpose: "maskable",
                  type: "image/png",
                },
              ],
              url: "/category/",
              description: "文章分类分组",
            },
            {
              name: "标签",
              short_name: "标签",
              icons: [
                {
                  src: "/assets/icon/tag-maskable.png",
                  sizes: "192x192",
                  purpose: "maskable",
                  type: "image/png",
                },
              ],
              url: "/tag/",
              description: "文章标签分组",
            },
            {
              name: "时间线",
              short_name: "时间线",
              icons: [
                {
                  src: "/assets/icon/timeline-maskable.png",
                  sizes: "192x192",
                  purpose: "maskable",
                  type: "image/png",
                },
              ],
              url: "/timeline/",
              description: "时间线文章列表",
            },
            {
              name: "个人介绍",
              short_name: "个人介绍",
              icons: [
                {
                  src: "/assets/icon/about-maskable.png",
                  sizes: "192x192",
                  purpose: "maskable",
                  type: "image/png",
                },
              ],
              url: "/about/",
              description: "个人介绍",
            },
          ],
        },
      },
    },
  },
  false,
);
