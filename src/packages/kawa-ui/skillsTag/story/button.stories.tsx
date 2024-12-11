import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SkillTag  from '../skillTag';
import { SkillTagType } from '../../../kawa-foundation/skillTag/constant';

const meta: Meta<typeof SkillTag> = {
  title: 'Components/SkillTag',
  component: SkillTag,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: [
        SkillTagType.PRIMARY, 
        SkillTagType.SECONDARY, 
        SkillTagType.TERTIARY
      ]
    }
  }
};

export default meta;

type Story = StoryObj<typeof SkillTag>;

export const Default: Story = {
  args: {
    children: 'React'
  }
};

export const Types: Story = {
  render: () => (
    <div className="flex gap-2 items-center">
      <SkillTag type={SkillTagType.PRIMARY}>React</SkillTag>
      <SkillTag type={SkillTagType.SECONDARY}>Vue</SkillTag>
      <SkillTag type={SkillTagType.TERTIARY}>Angular</SkillTag>
    </div>
  )
};

export const CustomColors: Story = {
  render: () => (
    <div className="flex gap-2 items-center">
      <SkillTag color="#3b82f6">TypeScript</SkillTag>
      <SkillTag color="#10b981">Node.js</SkillTag>
      <SkillTag color="#9333ea">Vue</SkillTag>
      <SkillTag color="#f59e0b">Nest.js</SkillTag>
      <SkillTag color="#ef4444">Python</SkillTag>
    </div>
  )
};

export const MixedExample: Story = {
  render: () => (
    <div className="flex gap-2 items-center flex-wrap">
      <SkillTag type={SkillTagType.PRIMARY}>React</SkillTag>
      <SkillTag type={SkillTagType.SECONDARY}>Vue</SkillTag>
      <SkillTag type={SkillTagType.TERTIARY}>Angular</SkillTag>
      <SkillTag color="#3b82f6">TypeScript</SkillTag>
      <SkillTag color="#10b981">Node.js</SkillTag>
      <SkillTag color="#9333ea">GraphQL</SkillTag>
    </div>
  )
};