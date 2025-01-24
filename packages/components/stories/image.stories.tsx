import React from "react";
import { Image } from "../image";
import type { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Example/Image",
  component: Image,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta;

const Template: StoryFn = (args) => <Image userData={undefined} {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: "https://picsum.photos/200/200",
  alt: "示例图片",
  width: 200,
  height: 200,
  style: { border: "2px solid black" },
  className: "custom-class",
  userData: {},
};

export const WithUserData = Template.bind({});
WithUserData.args = {
  src: "xxxxx",
  alt: "示例图片",
  width: 200,
  height: 200,
  style: { border: "2px solid black" },
  className: "custom-class",
  userData: {
    photoUri: "https://picsum.photos/200/300",
  },
};
