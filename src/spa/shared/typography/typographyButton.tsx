import * as React from 'react';
import {
  TypographyFont,
  TypographySize,
  TypographyWeight,
} from 'types/typographyTypes';
import * as styles from './typography.module.less';

interface Props {
  children: React.ReactNode;
  font: TypographyFont;
  onClick: () => void;
  size: TypographySize;
  weight: TypographyWeight;
}

const TypographyButton: React.FC<Props> = ({
  children,
  font,
  onClick,
  size,
  weight,
}) => (
  <button
    className={[
      styles.button,
      styles.typography,
      styles[font],
      styles[size],
      styles[weight],
    ].join(' ')}
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
);

export default TypographyButton;
