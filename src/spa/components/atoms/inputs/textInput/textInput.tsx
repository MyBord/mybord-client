import * as React from 'react';
import * as styles from './textInput.module.less';

interface Props {
  disabled?: boolean;
  placeholder?: string;
}

const TextInput: React.FC<Props> = ({
  disabled = false,
  placeholder = null,
}) => (
  <input
    className={[
      styles.textInput,
      disabled ? styles.disabled : undefined,
    ].join(' ')}
    disabled={disabled}
    placeholder={placeholder}
    type="text"
  />
);

export default TextInput;
