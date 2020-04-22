import * as React from 'react';
import { Button as AntButton } from 'antd';
import Icon from 'icons/icon/icon';
import { IconNames } from 'types/iconTypes';
import * as styles from './button.module.less';
import './button.less';

interface Props {
  htmlType?: 'button' | 'reset' | 'submit';
  iconName?: IconNames;
  label: string;
  loading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'primary' | 'secondary';
}

const Button: React.FC<Props> = ({
  htmlType = 'button',
  iconName = null,
  label,
  loading = false,
  onClick,
  type = 'primary',
}) => (
  <AntButton
    className={[styles.button, styles[type]].join(' ')}
    htmlType={htmlType}
    loading={loading}
    onClick={onClick}
    type={type === 'primary' ? 'primary' : null}
  >
    {
      iconName && <Icon iconName={iconName} size={16} />
    }
    {label}
  </AntButton>
);

export default Button;
