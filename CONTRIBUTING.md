# CONTRIBUTING

## 开发环境

- 我们使用最新长期支持版本的 Node.js （Node.js LTS）进行开发，使用`pnpm`作为包管理器。
- 我们的文档使用`rspress`进行构建，演示内容基于`mdx`进行编写。
- 我们的相关核心库使用`farm`进行编译构建。
- 我们使用`biomejs`进行代码检查和代码格式化。

## 安装依赖

使用`pnpm`安装依赖：

```bash
pnpm install
```

## 文档

我们的文档使用`rspress`进行构建，可以使用以下命令启动文档开发服务器：

```bash
pnpm docs:dev
```

在文档中，我们可以看到组件库的预览内容。

## 组件库

我们的组件库使用`farm`进行编译构建，可以使用以下命令启动组件库构建：

```bash
pnpm lib:build
```

## 卡哇核心

我们的核心库使用`farm`进行编译构建，可以使用以下命令启动核心库构建：

```bash
pnpm core:build
```

## 代码检查和代码格式化

我们使用`biomejs`进行代码检查和代码格式化，可以使用以下命令启动代码检查：

```bash
pnpm lint
```

### PR 标题规范

我们采用约定式提交来规范我们的 PR 标题，参考[约定式提交](https://www.conventionalcommits.org/zh-hans/v1.0.0/)。

我们允许的 PR 类型如下：

- fix
- feat
- docs
- style
- refactor
- perf
- test
- build
- ci
- chore
- revert
- release
