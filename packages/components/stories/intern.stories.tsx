import type { Meta, StoryObj } from '@storybook/react';
import Intern from '../Intern/Intern';
import byteDanceLogo from '../../public/logo/byteDance.png';
import bilibiliLogo from '../../public/logo/bilibili.png';
import kuaiShouLogo from '../../public/logo/kuaiShou.png';
import tencentLogo from '../../public/logo/tencent.png';

const meta: Meta<typeof Intern> = {
  title: 'Components/Intern',
  component: Intern,
  argTypes: {
    period: { 
      control: 'text',
      description: 'Internship duration period'
    },
    company: { 
      control: 'text',
      description: 'Company name'
    },
    group: { 
      control: 'text',
      description: 'Department or group within the company'
    },
    job: { 
      control: 'text',
      description: 'Job title during internship'
    },
    companyLogoUrl: { 
      control: 'text',
      description: 'URL of the company logo'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Intern>;

export const ByteDanceInternship: Story = {
  args: {
    period: '2023.07 - 2023.09',
    company: '字节跳动',
    group: '飞书',
    job: '前端实习生',
    companyLogoUrl: byteDanceLogo
  }
};

export const BilibiliInternship: Story = {
  args: {
    period: '2022.06 - 2022.08',
    company: 'Bilibili',
    group: '视频技术部',
    job: '后端实习生',
    companyLogoUrl: bilibiliLogo
  }
};

export const KuaiShouInternship: Story = {
  args: {
    period: '2024.01 - 2024.03',
    company: '快手',
    // group: 'Video Technology',
    job: '门卫保安实习生',
    companyLogoUrl: kuaiShouLogo
  }
};

export const TencentInternship: Story = {
  args: {
    period: '2022.09 - 2022.12',
    company: '腾讯',
    group: '微信事业部',
    job: '前端高级工程师',
    companyLogoUrl: tencentLogo
  }
};