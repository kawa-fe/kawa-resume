import type { UserData } from "@kawafe/core";

export interface ImageProps {
  src?: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLImageElement>;
  className?: string;

  userData: UserData;
}
