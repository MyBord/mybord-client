import * as React from 'react';
import Typography from 'typography/typography';
import { Input } from 'antd';
import * as styles from './textInput.module.less';
import './textInput.less';

interface Props {
  defaultValue?: string;
  disabled?: boolean;
  label?: string;
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
  label = null,
  onChange,
  onPressEnter,
  overlayClassName = undefined,
  placeholder = null,
  type = 'text',
  value,
}) => (
  <>
    {
      label && (
        <div className={styles.typographyDiv}>
          <Typography size="three" text={label} weight="bold" />
        </div>
      )
    }
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
  </>
);

export default TextInput;
