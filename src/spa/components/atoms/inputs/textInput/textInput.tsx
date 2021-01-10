import * as React from 'react';
import * as styles from './textInput.module.less';

interface Props {
  placeholder?: string;
}

const TextInput: React.FC<Props> = ({
  placeholder = null,
}) => (
  <input
    className={styles.textInput}
    type="text"
  />
);

export default TextInput;
