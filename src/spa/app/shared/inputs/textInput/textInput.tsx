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
}

const TextInput: React.FC<Props> = ({
  defaultValue = null,
  disabled = false,
  onChange,
  onPressEnter,
  placeholder = null,
  type = 'text',
}) => (
  <Input
    defaultValue={defaultValue}
    disabled={disabled}
    onChange={onChange}
    onPressEnter={onPressEnter}
    placeholder={placeholder}
    type={type}
  />
);

export default TextInput;
