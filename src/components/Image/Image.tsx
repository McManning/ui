import React, { forwardRef, useEffect, useState } from 'react';
import { mergeProps } from 'react-aria';

import { useTheme } from '../../hooks';
import { SlotProp, useSlots } from '../../hooks/useSlots';
import { StyleSystemProps, ThemeProp } from '../../types';
import { cx } from '../../utils';
import { Box } from '../Box';
import { Text } from '../Text';

export type ImageSlots = {
  /**
   * Content to render when the image source is invalid
   */
  placeholderSlot?: SlotProp<Record<string, never>>;
};

export type ImageProps = StyleSystemProps &
  ImageSlots & {
    /** Image source */
    src?: ThemeProp<string>;

    /**
     * Image alt text, used as title for placeholder if image was not loaded.
     *
     * If the image is only for decoration, use `alt=""`
     */
    alt: string;

    /** Image width */
    width?: number | string;

    /** Image height */
    height?: number | string;

    /** Image object-fit property */
    fit?: React.CSSProperties['objectFit'];

    /** Image caption */
    caption?: React.ReactNode;

    /** [Image element props](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img) to spread into the `img` element */
    imageProps?: React.ComponentPropsWithoutRef<'img'>;
  };

/**
 * Image documentation
 *
 * Image supports the full list of
 *
 * ## Accessibility
 * - The `alt` property is required to enforce screen reader support, unless a developer explicitly declares an image as cosmetic via `alt=""`.
 * - Images are wrapped with `figure` and contain a `figcaption` when `caption` is provided.
 */
export const Image = forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      style,
      className,
      width = '100%',
      height = 'auto',
      fit = 'cover',
      src,
      alt,
      caption,
      imageProps = {},
      ...props
    },
    ref
  ) => {
    const { resolve } = useTheme();
    const imgSrc = resolve(src);

    const [error, setError] = useState(!imgSrc);

    useEffect(() => {
      setError(false);
    }, [imgSrc]);

    const { placeholderSlot: Placeholder } = useSlots<ImageSlots>(props);

    return (
      <Box
        as="figure"
        {...props}
        className={cx('rui-relative', className)}
        style={{ width, ...style }}
      >
        <img
          ref={ref}
          src={imgSrc}
          alt={alt}
          className="rui-w-full rui-h-full rui-text-clear rui-text-[0px]"
          {...mergeProps(imageProps, {
            style: {
              objectFit: fit,
              width,
              height
            }
          })}
          onError={() => setError(true)}
        />

        {error && Placeholder && <Placeholder />}

        {caption && (
          <Text ta="center" as="figcaption" fs="sm" c="dark">
            {caption}
          </Text>
        )}
      </Box>
    );
  }
);
