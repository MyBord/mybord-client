import * as React from 'react';
import { Button as AntButton } from 'antd';
import * as styles from './button.module.less';
import './button.less';

interface Props {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'primary' | 'secondary';
}

const Button: React.FC<Props> = ({
  label,
  onClick,
  type = 'primary',
}) => (
  <AntButton
    className={styles[type]}
    onClick={onClick}
    type={type === 'primary' ? 'primary' : null}
  >
    {label}
  </AntButton>
);

export default Button;
