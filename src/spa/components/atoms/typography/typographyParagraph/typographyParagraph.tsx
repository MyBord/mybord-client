import * as React from 'react';
import { TypographyProps } from 'types/typographyTypes';
import * as styles from '../typography.module.less';

interface Props {
  children: React.ReactNode;
  color: TypographyProps['color'];
  commonStyles: string;
}

const TypographyParagraph: React.FC<Props> = ({
  children,
  color,
  commonStyles,
}) => (
  <div
    className={[
      styles.typography,
      styles[color],
      commonStyles,
    ].join(' ')}
  >
    {children}
  </div>
);

export default TypographyParagraph;
