import * as React from 'react';
import { TypographyProps } from 'types/typographyTypes';
import * as styles from '../typography.module.less';

interface Props {
  children: React.ReactNode;
  commonStyles: string;
  onClick: TypographyProps['onClick'];
}

const TypographyButton: React.FC<Props> = ({
  children,
  commonStyles,
  onClick,
}) => (
  <button
    className={[styles.button, commonStyles].join(' ')}
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
);

export default TypographyButton;
