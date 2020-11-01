import * as React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Button as AntButton } from 'antd';
import Icon from 'icons/icon/icon';
import { IconNames } from 'types/iconNameTypes';
import * as styles from './button.module.less';
import './button.less';

interface Props {
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
  const divRef = React.useRef<any>(null);
  const [buttonWidth, setButtonWidth] = React.useState<number>(null);

  React.useEffect(() => {
    if (divRef && divRef.current) {
      const containerRect = divRef.current.getBoundingClientRect();
      // 15 is the padding that seems to not be considered in the calculation
      setButtonWidth(containerRect.width + 15);
    }
  }, [divRef]);

  const getClassNames = (): string => {
    const buttonStyles = [styles.button];
    if (disabled) {
      buttonStyles.push(styles[`${type}-${color}-disabled`]);
    } else {
      buttonStyles.push(styles[`${type}-${color}`]);
    }

    if (isWaiting) {
      buttonStyles.push(styles.isWaiting);
    }

    return buttonStyles.join(' ');
  };

  return (
    <div className={styles.div} ref={divRef}>
      <AntButton
        className={getClassNames()}
        disabled={disabled}
        htmlType={htmlType}
        onClick={onClick}
        size={size === 'normal' ? 'default' : size}
        style={{ width: buttonWidth || 'auto' }}
        type={type === 'primary' ? 'primary' : null}
      >
        {
          // @ts-ignore
          isWaiting && <LoadingOutlined />
        }
        {
          iconName && <Icon iconName={iconName} size={16} />
        }
        {
          !isWaiting && label
        }
      </AntButton>
    </div>
  );
};

export default Button;
