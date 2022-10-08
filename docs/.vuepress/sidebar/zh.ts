import { sidebar } from "vuepress-theme-hope";
import { comsol, software, vscode } from "./software";
import { code } from "./code";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "如何使用",
      icon: "creative",
      prefix: "guide/",
      link: "guide/",
      children: "structure",
    },
    {
      text: "文章",
      icon: "note",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
    "slides",
  ],
  "/software/vscode/": vscode,
  "/software/git/": "structure",
  "/software/comsol/": comsol,
  "/software/": software,
  "/code/windows/": [
    "",
    "shortcut-key",
    "hidden-file",
    "add-path",
    "cmd",
    "notepad",
  ],
  // "/code/website/jquery/": jquery,
  //
  // "/code/website/html/": html,
  //
  // "/code/website/css/": css,
  //
  // "/code/website/": website,
  //
  // "/code/vue/": vue,

  "/code/node-js/": "structure",

  // "/code/mini-app/": miniapp,
  //
  // "/code/language/typescript/": typescript,
  //
  // "/code/language/python/": python,
  //
  // "/code/language/markdown/": markdown,
  //
  // "/code/language/js/": javascript,
  //
  // "/code/language/dart/": dart,
  //
  // "/code/language/": language,
  //
  // "/code/github/": github,
  //
  // "/code/basic/": basic,

  "/code/Android/": ["", "intro", "base", "resource"],

  "/code/": code,
});
