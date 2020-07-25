// This is the parent component of the typography text that gets rendered. It determines what
// kind of text should get rendered, e.g. a Link, a clickable text, or a paragraph style text.

import * as React from 'react';
import { TypographyProps } from 'types/typographyTypes';
const TypographyButton = React.lazy(() => import('./typographyButton/typographyButton'));
const TypographyLink = React.lazy(() => import('./typographyLink/typographyLink'));
const TypographyParagraph = React.lazy(() => import('./typographyParagraph/typographyParagraph'));

interface Props {
  children: React.ReactNode;
  color: TypographyProps['color'];
  font: TypographyProps['font'];
  link: TypographyProps['link'];
  onClick: TypographyProps['onClick'];
  size: TypographyProps['size'];
  textAlign: TypographyProps['textAlign'];
  weight: TypographyProps['weight'];
}

const TypographyParent: React.FC<Props> = ({
  children,
  color,
  font,
  link,
  onClick,
  size,
  textAlign,
  weight,
}) => {
  if (link) {
    return (
      <TypographyLink
        font={font}
        link={link}
        onClick={onClick}
        size={size}
        textAlign={textAlign}
        weight={weight}
      >
        {children}
      </TypographyLink>
    );
  }

  if (onClick) {
    return (
      <TypographyButton
        font={font}
        onClick={onClick}
        size={size}
        textAlign={textAlign}
        weight={weight}
      >
        {children}
      </TypographyButton>
    );
  }

  return (
    <TypographyParagraph
      color={color}
      font={font}
      size={size}
      textAlign={textAlign}
      weight={weight}
    >
      {children}
    </TypographyParagraph>
  );
};

export default TypographyParent;
