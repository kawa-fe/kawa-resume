import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import SkillTag, { SkillTagType } from "../skillTag";

const meta: Meta<typeof SkillTag> = {
  title: "Components/SkillTag",
  component: SkillTag,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: [SkillTagType.PRIMARY, SkillTagType.MINI, SkillTagType.LARGE],
    },
  },
};

export default meta;

type Story = StoryObj<typeof SkillTag>;

export const Default: Story = {
  render: () => (
    <div className="flex gap-2 items-center">
      <SkillTag>React</SkillTag>
      <SkillTag>Vue</SkillTag>
      <SkillTag>Angular</SkillTag>
    </div>
  ),
};

export const Size: Story = {
  render: () => (
    <div className="flex gap-2 items-center">
      <SkillTag size={SkillTagType.PRIMARY}>React</SkillTag>
      <SkillTag size={SkillTagType.MINI}>Vue</SkillTag>
      <SkillTag size={SkillTagType.LARGE}>Angular</SkillTag>
    </div>
  ),
};

export const DiffColors: Story = {
  render: () => (
    <div className="flex gap-2 items-center">
      <SkillTag color="#3b82f6">Next.js</SkillTag>
      <SkillTag color="#f59e0b">Nest.js</SkillTag>
      <SkillTag color="#ef4444">Python</SkillTag>
    </div>
  ),
};