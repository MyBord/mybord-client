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
      <div className={[styles.div, styles[size]].join(' ')}>
        <Switch
          checked={checked}
          onClick={onClick}
          size={size === 'large' ? 'default' : size}
        />
        <Typography
          onClick={onClick}
          size={size === 'large' ? 'normal' : 'two'}
          text={text}
        />
      </div>
    );
  }

  return (
    <div className={[styles.div, styles[size]].join(' ')}>
      <Switch
        checked={checked}
        onClick={onClick}
        size={size === 'large' ? 'default' : size}
      />
    </div>
  );
};

export default Toggle;
