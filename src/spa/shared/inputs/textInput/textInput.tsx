import * as React from 'react';
import { Input } from 'antd';
import * as styles from './textInput.module.less';
import './textInput.less';

interface Props {
  color?: 'blue' | 'red';
  defaultValue?: string;
  disabled?: boolean;
  onChange?: () => void;
  onPressEnter?: () => void;
  overlayClassName?: string;
  placeholder?: string;
  type?: string;
  value?: string;
}

const TextInput: React.FC<Props> = ({
  color = 'blue',
  defaultValue = null,
  disabled = false,
  onChange,
  onPressEnter,
  overlayClassName = undefined,
  placeholder = null,
  type = 'text',
  value,
}) => (
  <Input
    className={[overlayClassName, styles[color]].join(' ')}
    defaultValue={defaultValue}
    disabled={disabled}
    onChange={onChange}
    onPressEnter={onPressEnter}
    placeholder={placeholder}
    type={type}
    value={value}
  />
);

export default TextInput;
