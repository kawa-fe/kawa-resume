import React, { forwardRef } from 'react';
import type { ImageProps } from './Image.types';

const Image = React.memo(
  forwardRef<HTMLImageElement, ImageProps>((props: ImageProps, ref) => {
    const { src, alt, width, height, style, onClick, className, userData } =
      props;

    return (
      // biome-ignore lint/a11y/useKeyWithClickEvents: key bindings are useless here
      <img
        ref={ref}
        src={userData?.profile?.photo || src}
        alt={alt}
        width={width}
        height={height}
        style={style}
        onClick={onClick}
        className={className}
      />
    );
  }),
);

export default Image;
