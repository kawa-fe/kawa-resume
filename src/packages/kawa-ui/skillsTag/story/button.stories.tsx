import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SkillsTag } from '../index';

const meta: Meta<typeof SkillsTag> = {
  title: 'Components/SkillsTag',
  component: SkillsTag,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof SkillsTag>;

export const Default: Story = {
  args: {
    children: 'React'
  }
};

export const Combinations: Story = {
  render: () => (
    <div className="flex gap-2 items-center">
      <SkillsTag>React</SkillsTag>
      <SkillsTag color="#3b82f6" textColor="white">TypeScript</SkillsTag>
      <SkillsTag color="#10b981" textColor="white">Node.js</SkillsTag>
      <SkillsTag color="#9333ea" textColor="white">Vue</SkillsTag>
      <SkillsTag color="#f59e0b" textColor="white">Nest.js</SkillsTag>
      <SkillsTag color="#ef4444" textColor="white">Python</SkillsTag> 
    </div>
  )
};