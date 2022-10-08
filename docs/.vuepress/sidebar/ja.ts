import { sidebar } from "vuepress-theme-hope";
import {comsol, software, vscode} from "./software";
import {code} from "./code";

export const jaSidebar = sidebar({
  "/ja/": [
    "",
    {
      icon: "discover",
      text: "Demo",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "Articles",
      icon: "note",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
    "slides",
  ],
  "/ja/software/vscode/": vscode,
  "/ja/software/git/": "structure",
  "/ja/software/comsol/": comsol,
  "/ja/software/": software,
  "/ja/code/windows/": [
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

  "/ja/code/node-js/": "structure",

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

  "/ja/code/Android/": ["", "intro", "base", "resource"],

  "/ja/code/": code,
});
