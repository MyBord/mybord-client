import * as React from 'react';
import { ExportedColors } from 'types/colorTypes';
import {
  TypographyFont,
  TypographySize,
  TypographyWeight,
} from 'types/typographyTypes';
import * as styles from '../typography.module.less';

interface Props {
  children: React.ReactNode;
  color: ExportedColors;
  font: TypographyFont;
  size: TypographySize;
  weight: TypographyWeight;
}

const TypographyParagraph: React.FC<Props> = ({
  children,
  color,
  font,
  size,
  weight,
}) => (
  <p
    className={[
      styles.typography,
      styles[color],
      styles[font],
      styles[size],
      styles[weight],
    ].join(' ')}
  >
    {children}
  </p>
);

export default TypographyParagraph;
