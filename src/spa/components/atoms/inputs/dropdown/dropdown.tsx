import * as React from 'react';
import * as styles from './dropdown.module.less';

interface Props {
  options: {
    label: string;
    value: string;
  }[];
}

const Dropdown: React.FC<Props> = ({
  options,
}) => (
  <select
    className={styles.dropdown}
    onChange={(e) => console.log(e.target)}
  >
    {
      options.map((option, index) => (
        <option
          key={`${option.label}-${index}`}
          value={option.value}
        >
          {option.label}
        </option>
      ))
    }
  </select>
);

export default Dropdown;
