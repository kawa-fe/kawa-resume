import { Image } from '@kawafe/components';
import type { LayoutComponent, LayoutPreset, LayoutProps } from '@kawafe/core';

const layout: LayoutComponent = ({ userData, theme }: LayoutProps) => {
  return (
    <div>
      <Image userData={userData} theme={theme} />
    </div>
  );
};

export const defaultPreset: LayoutPreset = {
  name: 'default',
  author: '苏向夜 <fu050409@163.com>',
  layout,
};
