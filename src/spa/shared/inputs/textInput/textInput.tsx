import * as React from 'react';
import { Input } from 'antd';
import './textInput.less';

interface Props {
  defaultValue?: string;
  disabled?: boolean;
  onChange?: () => void;
  onPressEnter?: () => void;
  placeholder?: string;
  type?: string;
  value?: string;
}

const TextInput: React.FC<Props> = ({
  defaultValue = null,
  disabled = false,
  onChange,
  onPressEnter,
  placeholder = null,
  type = 'text',
  value,
}) => (
  <Input
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
