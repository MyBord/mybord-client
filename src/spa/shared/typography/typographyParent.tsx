// This is the parent component of the typography text that gets rendered. It determines what
// kind of text should get rendered, e.g. a Link, a clickable text, or a paragraph style text.

import * as React from 'react';
import { TypographyProps } from 'types/typographyTypes';
const TypographyButton = React.lazy(() => import('./typographyButton/typographyButton'));
const TypographyLink = React.lazy(() => import('./typographyLink/typographyLink'));
const TypographyParagraph = React.lazy(() => import('./typographyParagraph/typographyParagraph'));
import * as styles from './typography.module.less';

interface Props {
  children: React.ReactNode;
  color: TypographyProps['color'];
  disabled: TypographyProps['disabled'];
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
  disabled,
  font,
  link,
  onClick,
  size,
  textAlign,
  weight,
}) => {
  // These are the common styles that should to be applied to every Typography Type's className.
  const commonStyles = [
    styles.typography,
    styles[font],
    styles[size],
    styles[textAlign],
    styles[weight],
    disabled ? styles.isDisabled : undefined,
  ].join(' ');

  if (link) {
    return (
      <TypographyLink
        color={color}
        commonStyles={commonStyles}
        link={link}
        onClick={onClick}
      >
        {children}
      </TypographyLink>
    );
  }

  if (onClick) {
    return (
      <TypographyButton
        commonStyles={commonStyles}
        onClick={onClick}
      >
        {children}
      </TypographyButton>
    );
  }

  return (
    <TypographyParagraph
      color={color}
      commonStyles={commonStyles}
    >
      {children}
    </TypographyParagraph>
  );
};

export default TypographyParent;
