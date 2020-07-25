import * as React from 'react';
import { TypographyProps } from 'types/typographyTypes';
import * as styles from '../typography.module.less';

interface Props {
  children: React.ReactNode;
  font: TypographyProps['font'];
  onClick: TypographyProps['onClick'];
  size: TypographyProps['size'];
  textAlign: TypographyProps['textAlign'];
  weight: TypographyProps['weight'];
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
