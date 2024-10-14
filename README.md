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


### 项目目录结构

```
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

### 详细说明

1. **`packages/materials/`**：
   - **`base-components/`**：基础的 UI 组件库，如文本、按钮、图片等。用于构建简历模板中的基本元素。
   - **`templates/`**：预定义的一些简历模板，可以包括不同的布局、样式和设计。
   - **`themes/`**：提供多种简历主题（颜色、字体等），用户可以轻松切换不同风格。

2. **`packages/rendering-engine/`**：
   - **`core/`**：核心渲染引擎，负责将简历数据渲染成特定的格式（HTML、PDF 等）。
   - **`utils/`**：工具函数，帮助处理渲染中的复杂逻辑，如自动调整布局、处理字体等。
   - **`plugins/`**：渲染插件，支持不同输出格式（例如 PDF、Word 文档、HTML 等）的渲染逻辑。

3. **`packages/data-schema/`**：
   - **`json-schema/`**：定义简历数据的结构，确保简历数据的一致性和可扩展性。
   - **`validation/`**：负责校验简历数据，确保输入的数据符合规范（如必填项、格式正确等）。

4. **`packages/editor/`**：
   - **`ui/`**：简历编辑器的用户界面组件，允许用户通过拖拽等方式创建和修改简历。
   - **`state-management/`**：负责管理简历编辑器的状态，保存用户操作的历史记录、当前简历数据等。

5. **`examples/`**：
   - 示例代码，展示如何将 `kawa-resume` 与其他项目集成，帮助用户快速上手。

6. **`docs/`**：
   - 项目文档，包括如何使用库的说明，API 参考，安装指南等。

7. **`tests/`**：
   - 包含项目的测试代码，确保各个模块的功能正确运行。

8. **`scripts/`**：
   - 构建和自动化脚本，帮助你打包、发布项目。

9. **`.github/`**：
   - GitHub Actions 工作流，用于自动化测试、部署和构建任务。


> ## 有问题欢迎提issue，一起交流学习，希望对你有所帮助
> ## 希望大家多多star，多多支持
> ## 参与贡献直接提pr或者直接在issue下面认领我会assign给你

## 学习交流群

<img src="./public/qun.jpg" alt="kawa" style="width: 200px;"/>
