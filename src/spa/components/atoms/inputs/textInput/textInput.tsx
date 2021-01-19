import * as React from 'react';
import Icon, { IconNames } from 'icon/icon';
import * as styles from './textInput.module.less';

interface Props {
  disabled?: boolean;
  iconName?: IconNames;
  onChange?: (value: string) => void;
  placeholder?: string;
}

const TextInput: React.FC<Props> = ({
  disabled = false,
  iconName = null,
  onChange = null,
  placeholder = null,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.value);
  };

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
          onChange={handleChange}
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
      onChange={handleChange}
      placeholder={placeholder}
      type="text"
    />
  );
};

export default TextInput;
