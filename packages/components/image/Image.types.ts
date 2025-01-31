import type { ThemePreset, UserData } from '@kawafe/core';
import type React from 'react';

export interface ImageProps {
  src?: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLImageElement>;
  className?: string;

  userData: UserData;
  theme: ThemePreset;
}
