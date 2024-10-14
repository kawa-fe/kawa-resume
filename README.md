> # Kawa Resume
> 卡哇简历--开源程序员简历模板库（孵化中）

## 使用方法
### 安装依赖
```bash
pnpm install
```
### 启动项目
```bash
pnpm start
```
启动后访问 [http://localhost:5173](http://localhost:5173) 查看效果

## 技术栈

- React
- TailwindCSS
- JavaScript
- Vite
  ···

## 项目结构
```graphql
kawa-resume/
│
├── packages/
│   ├── materials/                 # 物料库，用于定义简历的基础模块（组件、样式、模板等）
│   │   ├── base-components/       # 基础组件库（按钮、图片、文本框等）
│   │   ├── templates/             # 简历模板定义
│   │   └── themes/                # 可自定义的主题样式（颜色、字体、布局等）
│   │
│   ├── rendering-engine/          # 渲染逻辑包，负责渲染简历数据
│   │   ├── core/                  # 核心渲染引擎（包括解析和生成简历的逻辑）
│   │   ├── utils/                 # 渲染辅助工具函数（布局计算、字体处理等）
│   │   └── plugins/               # 可扩展的渲染插件（如 PDF 导出、HTML 渲染等）
│   │
│   ├── data-schema/               # 简历数据格式和模型定义
│   │   ├── json-schema/           # 基于 JSON 的简历数据结构
│   │   └── validation/            # 简历数据校验逻辑
│   │
│   └── editor/                    # 在线编辑器包，用于低代码编辑简历
│       ├── ui/                    # 编辑器的 UI 组件（拖拽式布局、可视化控件等）
│       └── state-management/      # 编辑器状态管理（Redux、MobX 或其他状态管理库）
│
├── examples/                      # 示例项目（如何使用 kawa-resume）
│   └── demo-app/                  # 一个演示应用，展示如何使用物料库和渲染引擎
│
├── docs/                          # 项目文档
│   └── api/                       # API 文档
│
├── scripts/                       # 构建和自动化脚本
│   └── build.js                   # 构建脚本
│
├── tests/                         # 测试用例
│   └── unit/                      # 单元测试
│   └── integration/               # 集成测试
│
├── .github/                       # GitHub 工作流配置（CI/CD 等）
│   └── workflows/                 # GitHub Actions 流程
│
├── README.md                      # 项目说明
├── package.json                   # 项目依赖配置
└── tsconfig.json                  # TypeScript 配置文件
```

> ## 有问题欢迎提issue，一起交流学习，希望对你有所帮助
> ## 希望大家多多star，多多支持
> ## 参与贡献直接提pr或者直接在issue下面认领我会assign给你

## 学习交流群

<img src="./public/qun.jpg" alt="kawa" style="width: 200px;"/>
