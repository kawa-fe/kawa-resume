import type { Meta, StoryObj } from '@storybook/react';
import { Intern } from '../Intern';

const meta: Meta<typeof Intern> = {
  title: 'Components/Intern',
  component: Intern,
  tags: ['autoDocs'],
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

export const Default: Story = {
  args: {
    period: '2023.07 - 2023.09',
    company: 'Google',
    group: 'Cloud Infrastructure',
    job: 'Software Engineering Intern',
    companyLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png'
  }
};

export const WithoutLogo: Story = {
  args: {
    period: '2022.06 - 2022.08',
    company: 'Microsoft',
    group: 'Azure DevOps',
    job: 'Backend Development Intern'
  }
};

export const StartupInternship: Story = {
  args: {
    period: '2024.01 - 2024.03',
    company: 'TechStartup Inc.',
    group: 'Product Development',
    job: 'Full-Stack Intern',
    companyLogoUrl: 'https://example.com/startup-logo.png'
  }
};