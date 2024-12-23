import type { Meta, StoryFn } from "@storybook/react";
import ResumeHeader from "../resume_header/resume_header";
import "../resume_header/resume_header.style.ts";
import React from "react";

export default {
  title: "Components/ResumeHeader",
  component: ResumeHeader,
  argTypes: {
    type: {
      control: 'select',
      options: [
        '基本信息', 
        '工作经历', 
        '项目经历', 
        '实习经历', 
        '开源项目', 
        '技能清单', 
        '兴趣爱好', 
        '自我评价'
      ]
    }
  }
} as Meta;

/**
 * ResumeHeader 组件用于渲染简历各个模块的标题
 * 
 * 组件接收 type 属性，用于指定标题类型
 * - type: 指定标题的中文名称，会自动匹配对应的英文翻译
 * - 默认为 '基本信息'
 * 
 * 使用示例：
 * <ResumeHeader type="工作经历" />
 */
export const Default: StoryFn = () => (
  <ResumeHeader />
);

export const BasicInfo: StoryFn = () => (
  <ResumeHeader type="基本信息" />
);

export const WorkExperience: StoryFn = () => (
  <ResumeHeader type="工作经历" />
);

export const ProjectExperience: StoryFn = () => (
  <ResumeHeader type="项目经历" />
);

export const SkillList: StoryFn = () => (
  <ResumeHeader type="技能清单" />
);

export const OpenSourceExperience: StoryFn = () => (
  <ResumeHeader type="开源项目" />
);

export const Internship: StoryFn = () => (
  <ResumeHeader type="实习经历" />
);

export const Hobbies: StoryFn = () => (
  <ResumeHeader type="兴趣爱好" />
);

export const SelfEvaluation: StoryFn = () => (
  <ResumeHeader type="自我评价" />
);