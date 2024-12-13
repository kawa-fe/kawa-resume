import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import TechStack from "../techStack";

const meta: Meta<typeof TechStack> = {
  title: "Components/TechStack",
  component: TechStack,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TechStack>;

export const Default: Story = {
  args: {
    stacks: ["React", "TypeScript", "Node.js"],
  },
};

export const ManyStacks: Story = {
  args: {
    stacks: [
      "React", 
      "TypeScript", 
      "Node.js", 
      "Express", 
      "MongoDB", 
      "Docker", 
      "Kubernetes", 
      "GraphQL",
      "Prisma",
      "Next.js",
      "Nuxt.js",
      "Svelte",
      "Tailwind CSS",
      "Vite",
      "Nest.js",
      "Django",
      "Flask",
      "Spring Boot",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "RabbitMQ",
      "Elasticsearch",
      "MongoDB",
      "Redis",
      "RabbitMQ",
      "Elasticsearch",
    ],
  },
};

 