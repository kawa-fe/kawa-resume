import type { Meta, StoryObj } from "@storybook/react";
import { Intern } from "../Intern";
// import byteDanceLogo from "../../public/logo/byteDance.png";
// import bilibiliLogo from "../../public/logo/bilibili.png";
// import kuaiShouLogo from "../../public/logo/kuaiShou.png";
// import tencentLogo from "../../public/logo/tencent.png";

const meta: Meta<typeof Intern> = {
  title: "Components/Intern",
  component: Intern,
  argTypes: {
    period: {
      control: "text",
      description: "Internship duration period",
    },
    company: {
      control: "text",
      description: "Company name",
    },
    group: {
      control: "text",
      description: "Department or group within the company",
    },
    job: {
      control: "text",
      description: "Job title during internship",
    },
    companyLogoUrl: {
      control: "text",
      description: "URL of the company logo",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Intern>;

export const ByteDanceInternship: Story = {
  args: {
    period: "2023.07 - 2023.09",
    company: "字节跳动",
    group: "飞书",
    job: "前端实习生",
    // companyLogoUrl: byteDanceLogo,
  },
};

export const BilibiliInternship: Story = {
  args: {
    period: "2022.06 - 2022.08",
    company: "Bilibili",
    group: "视频技术部",
    job: "后端实习生",
    // companyLogoUrl: bilibiliLogo,
  },
};
