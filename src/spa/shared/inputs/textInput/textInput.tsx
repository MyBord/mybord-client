import * as React from 'react';
import { Input } from 'antd';
import './textInput.less';

interface Props {
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
    className={overlayClassName}
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
