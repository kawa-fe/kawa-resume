import React, { forwardRef } from 'react';
import type { ImageProps } from './Image.types';

const Image = React.memo(
  forwardRef<HTMLImageElement, ImageProps>((props: ImageProps, ref) => {
    const { src, alt, width, height, style, className, userData } = props;

    return (
      <img
        ref={ref}
        src={userData?.photoUri || src}
        alt={alt}
        width={width}
        height={height}
        style={style}
        className={className}
      />
    );
  }),
);

export default Image;
