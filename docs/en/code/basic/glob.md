---
title: Glob
icon: regexp
author: 陈慧玲
date: 2021-02-18
category: 基础
---

本文介绍 Glob 匹配。

<!-- more -->

## 简介

Glob 是当您要进行路径匹配时键入的模式。

在解析一条匹配模式前，Glob 首先将 `{}` 部分展开为一组匹配模式。`{}` 内的模式之间使用逗号分隔。

如 `a{/b/c,bcd}` 将扩展为 `a/b/c` 和 `abcd`

`{}` 可以嵌套，可与其他模式联用。

Glob 的魔术字符如下:

- `*`: 匹配路径部分中的 0 个或多个字符

- `?`: 匹配单个字符

- `[...]`: 匹配字符范围。`[^...]`和 `[!...]` 表示匹配不在范围内的字符

  ::: details 例子

  - `[xyz].js` 只能匹配 `x.js`, `y.js`, `z.js`，但不会匹配 `xy.js`, `xyz.js` 等，因为整个中括号只代表一个字符。其等价于 `[x-z].js`
  - `[!xyz].js` 能匹配 `a.js`, `b.js`, `u.js`，但不会匹配 `x.js`, `y.js` `z.js`，`ab.js` 等。其等价于 `[^xyz].js` 和 `[!x-z].js`。

  :::

- `!(pattern|pattern|pattern)`: 匹配与提供的任何模式都不匹配的任何内容。

- `?(pattern|pattern|pattern)`: 匹配 0 或一个内部模式。
- `+(pattern|pattern|pattern)` 匹配一个或多个内部模式。
- `*(a|b|c)`: 匹配 0 或多个内部模式。
- `@(pattern|pat*|pat?erN)`: 匹配恰好一个内部模式。

- `**`: 如果其在路径部分中单独出现，则匹配路径中的 0 个或多个目录与子目录。请注意它不对 symlinked 目录 (符号链接目录) 进行爬取。

  ::: details 例子

  - `**` 能匹配匹配所有的目录和文件。
  - `**/*.js` 能匹配所有的 js 文件。
  - `a/**/b.txt` 能匹配目录里任何一个 a 文件夹内的所有 b.txt 文件。

  :::

## `.` 开头的文件与文件夹

由于以 `.` 开头的文件或文件夹在 Unix 中视为隐藏文件或文件夹，故 Glob 不会匹配任何以 `.` 开头的路径部分，如 `.github/dependabot.yml` 或 `.eslintrc.js`。

如果的确想要匹配 `.` 开头的文件或文件夹，可以显示标注出来，如 `.*.js` 可以匹配 `.eslintrc.js`。