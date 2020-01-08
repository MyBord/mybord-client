import * as React from 'react';
import { Input, Form } from 'antd';
import '../textInput/textInput.less';

interface Props {
  disabled?: boolean;
  helpMessage?: string;
  onChange?: () => void;
  onPressEnter?: () => void;
  placeholder?: string;
  status?: 'error';
}

const PasswordInput: React.FC<Props> = ({
  disabled = false,
  helpMessage = null,
  onChange,
  onPressEnter,
  placeholder = null,
  status = null,
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
      <Input.Password
        disabled={disabled}
        onChange={onChange}
        onPressEnter={onPressEnter}
        placeholder={placeholder}
      />
    </Form.Item>
  );
};

export default PasswordInput;
