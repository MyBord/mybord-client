import * as React from 'react';
import { Input, Form } from 'antd';
import './textInput.less';

interface Props {
  defaultValue?: string;
  disabled?: boolean;
  helpMessage?: string;
  onChange?: () => void;
  onPressEnter?: () => void;
  placeholder?: string;
  status?: 'error';
  type?: string;
}

const TextInput: React.FC<Props> = ({
  defaultValue = null,
  disabled = false,
  helpMessage = null,
  onChange,
  onPressEnter,
  placeholder = null,
  status = null,
  type = null,
}) => {
  const [isHelpRendered, setIsHelpRendered] = React.useState(false);

  if (status && !isHelpRendered) {
    setIsHelpRendered(true);
  }

  if (!status && isHelpRendered) {
    setIsHelpRendered(false);
  }

  return (
    <Form.Item
      help={isHelpRendered ? helpMessage : null}
      validateStatus={status}
    >
      <Input
        defaultValue={defaultValue}
        disabled={disabled}
        onChange={onChange}
        onPressEnter={onPressEnter}
        placeholder={placeholder}
        type={type}
      />
    </Form.Item>
  );
};

export default TextInput;
