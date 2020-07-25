import * as React from 'react';
import { ExportedColors } from 'types/colorTypes';
import {
  TypographyFont,
  TypographySize,
  TypographyTextAlign,
  TypographyWeight,
} from 'types/typographyTypes';
import * as styles from '../typography.module.less';

interface Props {
  children: React.ReactNode;
  color: ExportedColors;
  font: TypographyFont;
  size: TypographySize;
  textAlign: TypographyTextAlign;
  weight: TypographyWeight;
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
