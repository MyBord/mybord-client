import * as React from 'react';
import { Switch } from 'antd';
import Typography from 'typography/typography';
import * as styles from './toggle.module.less';
import './toggle.less';

interface Props {
  checked?: boolean;
  onClick?: () => void;
  onChange?: () => void;
  size?: 'large' | 'small';
  text?: string;
  value?: any;
}

const Toggle: React.FC<Props> = ({
  checked = null,
  onClick = null,
  onChange,
  size = 'large',
  text = null,
  value,
}) => (
  <div className={[styles.div, styles[size]].join(' ')}>
    <Switch
      checked={checked || value}
      onClick={onClick}
      onChange={onChange}
      size={size === 'large' ? 'default' : size}
    />
    {/* { */}
    {/*  text && ( */}
    {/*    <Typography */}
    {/*      onClick={onClick} */}
    {/*      size={size === 'large' ? 'normal' : 'two'} */}
    {/*      text={text} */}
    {/*    /> */}
    {/*  ) */}
    {/* } */}
  </div>
);

export default Toggle;
