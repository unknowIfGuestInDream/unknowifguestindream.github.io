import { sidebar } from "vuepress-theme-hope";
import { comsol, software, vscode } from "./software";

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
});
