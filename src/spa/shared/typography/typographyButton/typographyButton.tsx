import * as React from 'react';
import {
  TypographyFont,
  TypographySize,
  TypographyTextAlign,
  TypographyWeight,
} from 'types/typographyTypes';
import * as styles from '../typography.module.less';

interface Props {
  children: React.ReactNode;
  font: TypographyFont;
  onClick: () => void;
  size: TypographySize;
  textAlign: TypographyTextAlign;
  weight: TypographyWeight;
}

const TypographyButton: React.FC<Props> = ({
  children,
  font,
  onClick,
  size,
  textAlign,
  weight,
}) => (
  <button
    className={[
      styles.button,
      styles.typography,
      styles[font],
      styles[size],
      styles[textAlign],
      styles[weight],
    ].join(' ')}
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
);

export default TypographyButton;
