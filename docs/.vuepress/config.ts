import type { UserConfig } from "vuepress";
import { defineUserConfig } from "vuepress";
import { appendDatePlugin } from "@vuepress/plugin-append-date";
import { cachePlugin } from "@vuepress/plugin-cache";
import theme from "./theme.js";

export default <UserConfig>defineUserConfig({
  dest: "dist",

  head: [
    [
      "link",
      {
        rel: "mask-icon",
        href: "/assets/safari-pinned-tab.svg",
        color: "#5c92d1",
      },
    ],
  ],

  locales: {
    "/": {
      lang: "zh-CN",
      title: "梦里不知身是客",
      description: "梦里不知身是客的博客",
    },

    "/en/": {
      lang: "en-US",
      title: "unknowIfGuestInDream",
      description: "unknowIfGuestInDream's blog",
    },

    "/ja/": {
      lang: "ja-JP",
      title: "unknowIfGuestInDream",
      description: "unknowIfGuestInDream's blog",
    },
  },

  theme,

  plugins: [appendDatePlugin(), cachePlugin({ type: "filesystem" })],

  shouldPrefetch: false,
});
