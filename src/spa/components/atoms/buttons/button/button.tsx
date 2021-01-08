import * as React from 'react';
import * as styles from './button.module.less';

interface Props {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  size?: 'default' | 'large';
  type?: 'primary' | 'secondary';
}

const Button: React.FC<Props> = ({
  label,
  onClick,
  size = 'default',
  type = 'primary',
}) => (
  <button
    className={[styles[size], styles[type]].join(' ')}
    type="button"
    onClick={onClick}
  >
    {label}
  </button>
);

export default Button;
