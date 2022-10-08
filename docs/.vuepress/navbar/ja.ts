import { navbar } from "vuepress-theme-hope";

export const jaNavbar = navbar([
  "/ja/",
  { text: "Demo", icon: "discover", link: "/ja/demo/" },
  {
    text: "Posts",
    icon: "edit",
    prefix: "/ja/posts/",
    children: [
      {
        text: "Apple",
        icon: "edit",
        prefix: "apple/",
        children: [
          { text: "Apple1", icon: "edit", link: "1" },
          { text: "Apple2", icon: "edit", link: "2" },
          "3",
          "4",
        ],
      },
      {
        text: "Banana",
        icon: "edit",
        prefix: "banana/",
        children: [
          {
            text: "Banana 1",
            icon: "edit",
            link: "1",
          },
          {
            text: "Banana 2",
            icon: "edit",
            link: "2",
          },
          "3",
          "4",
        ],
      },
      { text: "Cherry", icon: "edit", link: "cherry" },
      { text: "Dragonfruit", icon: "edit", link: "dragonfruit" },
      "tomato",
      "strawberry",
    ],
  },
  {
    text: "V2 Docs",
    icon: "note",
    link: "https://vuepress-theme-hope.github.io/v2/",
  },
  {
    text: "代码笔记",
    icon: "code",
    children: [
      {
        text: "代码笔记",
        icon: "code",
        link: "/ja/code/",
        activeMatch: "^/code/$",
      },
      // {
      //   text: "产品设计",
      //   children: ["/design/"],
      // },
      // {
      //   text: "后端运维",
      //   children: ["/linux/"],
      // },
    ],
  },
  {
    text: "软件教程",
    icon: "software",
    prefix: "/ja/software/",
    children: [
      {
        text: "软件教程",
        icon: "software",
        link: "",
        activeMatch: "^/software/$",
      },
      "vscode/",
      "git/",
      "comsol/",
    ],
  },
]);
