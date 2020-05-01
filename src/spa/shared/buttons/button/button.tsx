import * as React from 'react';
import { Button as AntButton } from 'antd';
import Icon from 'icons/icon/icon';
import { IconNames } from 'types/iconNameTypes';
import * as styles from './button.module.less';
import './button.less';

interface Props {
  htmlType?: 'button' | 'reset' | 'submit';
  iconName?: IconNames;
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'primary' | 'secondary';
  waiting?: boolean;
}

const Button: React.FC<Props> = ({
  htmlType = 'button',
  iconName = null,
  label,
  onClick,
  type = 'primary',
  waiting = false,
}) => (
  <AntButton
    className={[styles.button, styles[type]].join(' ')}
    htmlType={htmlType}
    loading={waiting}
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
