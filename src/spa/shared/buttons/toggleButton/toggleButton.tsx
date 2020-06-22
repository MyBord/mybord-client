import * as React from 'react';
import { Switch } from 'antd';
import './toggleButton.less';

interface Props {
  checked: boolean;
  onClick: () => void;
  size?: 'large' | 'small';
}

const ToggleButton: React.FC<Props> = ({
  checked,
  onClick,
  size = 'large',
}) => (
  <Switch
    checked={checked}
    onClick={onClick}
    size={size === 'large' ? 'default' : size}
  />
);

export default ToggleButton;
