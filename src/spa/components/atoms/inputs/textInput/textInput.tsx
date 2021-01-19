import * as React from 'react';
import Icon, { IconNames } from 'icon/icon';
import * as styles from './textInput.module.less';

interface Props {
  disabled?: boolean;
  iconName?: IconNames;
  placeholder?: string;
}

const TextInput: React.FC<Props> = ({
  disabled = false,
  iconName = null,
  placeholder = null,
}) => {
  if (iconName) {
    return (
      <div className={styles.inputWithIconContainer}>
        <Icon
          color="placeholderGrey"
          iconName={iconName}
          size={18}
          strokeWidth={3}
        />
        <input
          className={[
            styles.textInput,
            disabled ? styles.disabled : undefined,
          ].join(' ')}
          disabled={disabled}
          placeholder={placeholder}
          type="text"
        />
      </div>
    );
  }

  return (
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
};

export default TextInput;
