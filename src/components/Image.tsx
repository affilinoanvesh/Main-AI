import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
}

export default function Image({ src, alt, className = '', sizes = '100vw' }: ImageProps) {
  // Generate srcSet for responsive images
  const generateSrcSet = () => {
    const widths = [320, 640, 768, 1024, 1280, 1536];
    return widths
      .map(width => `${src}?auto=format&fit=crop&w=${width} ${width}w`)
      .join(', ');
  };

  return (
    <img
      src={`${src}?auto=format&fit=crop`}
      srcSet={generateSrcSet()}
      sizes={sizes}
      alt={alt}
      className={className}
      loading="lazy"
    />
  );
}