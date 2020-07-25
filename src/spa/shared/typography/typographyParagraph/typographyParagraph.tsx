import * as React from 'react';
import { TypographyProps } from 'types/typographyTypes';
import * as styles from '../typography.module.less';

interface Props {
  children: React.ReactNode;
  color: TypographyProps['color'];
  font: TypographyProps['font'];
  size: TypographyProps['size'];
  textAlign: TypographyProps['textAlign'];
  weight: TypographyProps['weight'];
}

const TypographyParagraph: React.FC<Props> = ({
  children,
  color,
  font,
  size,
  textAlign,
  weight,
}) => (
  <div
    className={[
      styles.typography,
      styles[color],
      styles[font],
      styles[size],
      styles[textAlign],
      styles[weight],
    ].join(' ')}
  >
    {children}
  </div>
);

export default TypographyParagraph;
