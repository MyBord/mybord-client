import * as React from 'react';
import { Input } from 'antd';
import '../textInput/textInput.module.less';

interface Props {
  disabled?: boolean;
  onChange?: () => void;
  onPressEnter?: () => void;
  placeholder?: string;
}

const PasswordInput: React.FC<Props> = ({
  disabled = false,
  onChange,
  onPressEnter,
  placeholder = null,
}) => (
  <Input.Password
    disabled={disabled}
    onChange={onChange}
    onPressEnter={onPressEnter}
    placeholder={placeholder}
  />
);

export default PasswordInput;
