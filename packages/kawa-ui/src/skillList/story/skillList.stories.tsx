import type { Meta, StoryObj } from "@storybook/react";


import SkillList from "../index";
type SkillsProps = Array<string>;
 const mock: SkillsProps = [
    '掌握HTML,CSS,JS/TS，基础扎实；了解React内部实现，能熟练使用React生态工具链开发；',
    '具备扎实的工程化能力，对主流构建工具，包管理器有关注、优劣比较以及项目依赖版本升级实践；',
    '有规范前端工作流、配置例如ESLint、Prettier、Commitlint、Husky的经验;',
    '熟悉常用Git命令，具备丰富的团队协作开发经历，有分支管理，版本回退的经验；',
    '了解Taro、Tauri、ReactNative等跨端方案，有一定开发经验；',
    '英文能力CET6 ，能熟练阅读英文技术文档，关注国内外论坛了解前端新技术变化方向；'
  ];

  const backendMock: SkillsProps = [
    '熟悉 Node.js 开发，熟悉 Express 开发，熟悉 MongoDB 开发;',
    '熟悉 Java 开发，熟悉 Spring Boot 开发，熟悉 MySQL 开发;',
    '熟悉 Python 开发，熟悉 Flask 开发，熟悉 PostgreSQL 开发;',
    '熟悉 Golang 开发，熟悉 Gin 开发，熟悉 MySQL 开发;',
    '熟悉 Rust 开发，熟悉 Actix 开发，熟悉 PostgreSQL 开发;',
    '熟悉 C++ 开发，熟悉 Qt 开发，熟悉 MySQL 开发;',
  ]

const meta: Meta<typeof SkillList> = {
  title: "Components/SkillList",
  component: SkillList,
  tags: ["autodocs"],
  argTypes: {
    skills: {
      description: "An array of skills to display",
      control: { type: 'object' }
    }
  }
};

export default meta;

type Story = StoryObj<typeof SkillList>;

export const ShabixExample: Story = {
  args: {
    skills: mock,
  },
};

export const BackendExample: Story = {
  args: {
    skills: backendMock,
  },
};