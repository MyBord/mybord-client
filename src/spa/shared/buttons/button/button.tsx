import * as React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Button as AntButton } from 'antd';
import Icon from 'icons/icon/icon';
import { IconNames } from 'types/iconNameTypes';
import * as styles from './button.module.less';
import './button.less';

interface Props {
  autoFocus?: boolean;
  color?: 'blue' | 'red';
  disabled?: boolean;
  htmlType?: 'button' | 'reset' | 'submit';
  iconName?: IconNames;
  isWaiting?: boolean;
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  size?: 'small' | 'normal';
  type?: 'primary' | 'secondary' | 'tertiary';
}

const Button: React.FC<Props> = ({
  autoFocus = false,
  color = 'blue',
  disabled = false,
  htmlType = 'button',
  iconName = null,
  isWaiting = false,
  label,
  onClick,
  size = 'normal',
  type = 'primary',
}) => {
  const getClassNames = (): string => {
    if (disabled) {
      return [
        styles.button,
        styles[`${type}-${color}-disabled`],
      ].join(' ');
    }

    return [
      styles.button,
      styles[`${type}-${color}`],
    ].join(' ');
  };

  return (
    <AntButton
      autoFocus={autoFocus}
      className={getClassNames()}
      disabled={disabled}
      htmlType={htmlType}
      loading={isWaiting}
      onClick={onClick}
      size={size === 'normal' ? 'default' : size}
      type={type === 'primary' ? 'primary' : null}
    >
      {
        // @ts-ignore
        isWaiting && <LoadingOutlined />
      }
      {
        iconName && <Icon iconName={iconName} size={16} />
      }
      {label}
    </AntButton>
  );
};

export default Button;
