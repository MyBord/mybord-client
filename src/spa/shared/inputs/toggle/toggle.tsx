import * as React from 'react';
import { Switch } from 'antd';
import Typography from 'typography/typography';
import * as styles from './toggle.module.less';
import './toggle.less';

interface Props {
  checked: boolean;
  onClick: () => void;
  size?: 'large' | 'small';
  text?: string;
}

const Toggle: React.FC<Props> = ({
  checked,
  onClick,
  size = 'large',
  text = null,
}) => {
  if (text) {
    return (
      <button
        className={[styles.button, styles[size]].join(' ')}
        onClick={onClick}
        type="button"
      >
        <Switch
          checked={checked}
          size={size === 'large' ? 'default' : size}
        />
        <Typography
          color="blue"
          size={size === 'large' ? 'normal' : 'two'}
          text={text}
        />
      </button>
    );
  }

  return (
    <button
      className={styles.button}
      onClick={onClick}
      type="button"
    >
      <Switch
        checked={checked}
        size={size === 'large' ? 'default' : size}
      />
    </button>
  );
};

export default Toggle;
