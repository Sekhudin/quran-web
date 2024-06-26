import { Fragment } from 'react';
import { NextImage, NextImageAlt, NextImageSrc } from 'packages/ui/next-image';
import { cn, Children, PropsFrom, JSXComponent } from 'packages/utils/cn';

const ImageHOC = ({
  className: baseClassName,
  ...defaultProps
}: Partial<PropsFrom<typeof NextImage>>) => {
  const HOC = (asSrc: NextImageSrc, asAlt: NextImageAlt) => {
    const Component = ({
      className,
      src = asSrc,
      alt = asAlt,
      ...props
    }: PropsFrom<typeof NextImage>) => (
      <NextImage className={cn(baseClassName, className)} src={src} alt={alt} {...defaultProps} />
    );
    return Component as JSXComponent;
  };
  return HOC;
};

export { ImageHOC };
