import * as React from 'react';
import Icon, { IconNames } from 'icon/icon';
import * as styles from './button.module.less';

interface Props {
  iconName?: IconNames;
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  size?: 'default' | 'large';
  type?: 'primary' | 'secondary';
}

const Button: React.FC<Props> = ({
  iconName = null,
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
    {
      iconName && (
        <Icon
          color={type === 'primary' ? 'white' : 'blue'}
          iconName={iconName}
          size={size === 'default' ? 20 : 30}
          strokeWidth={3}
        />
      )
    }
  </button>
);

export default Button;
