import { sidebar } from "vuepress-theme-hope";
import {comsol, software, vscode} from "./software";
import {code} from "./code";

export const enSidebar = sidebar({
  "/en/": [
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
  "/en/software/vscode/": vscode,
  "/en/software/git/": "structure",
  "/en/software/comsol/": comsol,
  "/en/software/": software,
  "/en/code/windows/": [
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

  "/en/code/node-js/": "structure",

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

  "/en/code/Android/": ["", "intro", "base", "resource"],

  "/en/code/": code,
});
