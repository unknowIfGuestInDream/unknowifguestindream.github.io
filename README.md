# unknowIfGuestInDream's Homepage

[![Deploy blog](https://github.com/unknowIfGuestInDream/unknowifguestindream.github.io/actions/workflows/deploy-docs.yml/badge.svg)](https://github.com/unknowIfGuestInDream/unknowifguestindream.github.io/actions/workflows/deploy-docs.yml)
[![Test blog](https://github.com/unknowIfGuestInDream/unknowifguestindream.github.io/actions/workflows/test.yml/badge.svg)](https://github.com/unknowIfGuestInDream/unknowifguestindream.github.io/actions/workflows/test.yml)
[![CodeQL](https://github.com/unknowIfGuestInDream/unknowifguestindream.github.io/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/unknowIfGuestInDream/unknowifguestindream.github.io/actions/workflows/codeql-analysis.yml)
[![License](https://img.shields.io/github/license/unknowIfGuestInDream/unknowifguestindream.github.io)](./LICENSE)

梦里不知身是客 —— [unknowIfGuestInDream](https://github.com/unknowIfGuestInDream) 的个人主页 / 博客站点。

在线地址：<https://unknowifguestindream.github.io>

## ✨ 特性

- 使用 [Vite](https://vite.dev/) + [TypeScript](https://www.typescriptlang.org/) 构建的纯静态单页站点
- 亮/暗双主题切换，自动跟随系统配色偏好，并持久化到 `localStorage`
- 响应式布局，移动端友好
- 项目 / 插件 / 扩展信息由 `src/data/*.json` 数据驱动，易于维护
- 通过 GitHub Actions 自动构建并发布到 `gh-pages` 分支

## 🧱 技术栈

| 分类     | 依赖                            |
| -------- | ------------------------------- |
| 构建工具 | Vite 8                          |
| 语言     | TypeScript 6                    |
| 代码风格 | Prettier 3                      |
| 部署     | GitHub Pages（`gh-pages` 分支） |

## 🚀 本地开发

环境要求：Node.js `>= 20.19` 或 `>= 22.12`（建议使用 Node 22 LTS）。

```bash
# 安装依赖
npm install

# 启动本地开发服务器（默认 http://localhost:5173）
npm run dev

# 生产构建，输出到 dist/
npm run build:vite

# 本地预览构建产物
npm run preview

# 格式化检查 / 自动格式化
npm run lint:check
npm run lint
```

## 📁 目录结构

```
.
├── index.html          # 入口 HTML
├── public/             # 静态资源（favicon、备案图标等）
├── src/
│   ├── main.ts         # 应用入口
│   ├── style.css       # 全局样式
│   └── data/           # 个人信息 / 项目数据（JSON）
├── vite.config.ts      # Vite 配置
└── tsconfig.json       # TypeScript 配置
```

## 📝 自定义内容

所有展示数据均放置在 `src/data/` 下的 JSON 文件中，可根据需要修改：

- `profile.json` —— 个人简介、头像、标签、社交链接
- `eclipse-plugins.json` —— Eclipse 插件列表
- `vscode-extensions.json` —— VS Code 扩展列表
- `projects-desktop.json` / `projects-web.json` / `projects-others.json` —— 项目展示

## 🤖 持续集成

位于 `.github/workflows/` 下：

- `deploy-docs.yml` —— 推送到 `master` 时自动构建并发布到 `gh-pages` 分支
- `test.yml` —— PR / push 时执行构建与 Prettier 格式校验
- `linter.yml` / `lintSupport.yml` —— Super-Linter / Prettier 代码风格检查
- `codeql-analysis.yml` —— CodeQL 安全扫描
- 其他：`label.yml`、`issue-labeled.yml`、`automerge.yml`、`stale.yml`、`lock.yml`

## 🤝 贡献

欢迎提 Issue 或 PR。提交前请确保：

```bash
npm run lint:check
npm run build:vite
```

## 📮 联系

如有问题，请发邮件到 <tang97155@gmail.com>，或在本仓库提交 Issue。

## 📄 License

本项目基于 [Apache License 2.0](./LICENSE) 开源。
