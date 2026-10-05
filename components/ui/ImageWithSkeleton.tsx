'use client';

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface ImageWithSkeletonProps extends ImageProps {
  containerClassName?: string;
}

export function ImageWithSkeleton({
  src,
  alt,
  className = '',
  containerClassName = '',
  fill,
  ...props
}: ImageWithSkeletonProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {/* Animated Skeleton Shimmer */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-200 via-zinc-100 to-zinc-200 dark:from-zinc-800 dark:via-zinc-700/60 dark:to-zinc-800 animate-pulse z-10" />
      )}

      <Image
        src={src}
        alt={alt}
        fill={fill}
        className={`transition-all duration-500 ${
          isLoading ? 'scale-105 blur-sm opacity-0' : 'scale-100 blur-0 opacity-100'
        } ${className}`}
        onLoad={() => setIsLoading(false)}
        {...props}
      />
    </div>
  );
}
