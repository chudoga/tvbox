# TVBox 订阅源导航

TVBox 影视订阅源配置集合，附带导航网站。

## 目录结构

```
├── docs/                  # GitHub Pages 网站
│   ├── index.html         # 导航站首页
│   ├── style.css          # 样式
│   └── app.js             # 交互逻辑（搜索/复制/检测）
├── sites/                 # 标准化订阅源配置
│   ├── sources.json       # 按分类整理的订阅源
│   └── shiguang.json      # 完整订阅源列表（无注释，标准JSON）
├── adult/                 # 成人内容配置（单独维护）
│   ├── fun
│   └── stymei18.json
├── .github/workflows/     # CI/CD 配置
│   └── deploy-pages.yml   # GitHub Pages 自动部署
├── shiguang               # 原始配置（保留备份）
├── shiguang1              # 已合并到 sites/
├── fun                    # 已移至 adult/
├── stymei18.json          # 已移至 adult/
└── README.md
```

## GitHub Pages

导航站地址：`https://<你的用户名>.github.io/tvbox`

内容推送到 `main` 分支后，GitHub Actions 会自动将 `docs/` 目录部署到 Pages。

### 手动部署

在 GitHub 仓库页面，进入 **Settings > Pages**，将 Source 设为 **GitHub Actions**，工作流会自动生效。

## 订阅源用途

TVBox 配置用于电视盒子等设备的视频播放。列表中的每个源对应一个 JSON 配置，包含该源的频道列表和播放地址。

> **注意**: 成人内容配置在 `adult/` 目录下单独维护，不包含在 GitHub Pages 站点中。

## 相关资源

- [TVBox 项目](https://github.com/o0HalfLife0o/TVBoxOSC)
