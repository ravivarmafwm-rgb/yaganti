'use client';

import { useState, type ImgHTMLAttributes } from 'react';

const placeholder = '/images/placeholder.svg';

export function FallbackImage(props: ImgHTMLAttributes<HTMLImageElement>) {
  const [src, setSrc] = useState(props.src);

  return (
    <img
      {...props}
      src={src}
      onError={() => {
        if (src !== placeholder) setSrc(placeholder);
      }}
    />
  );
}
