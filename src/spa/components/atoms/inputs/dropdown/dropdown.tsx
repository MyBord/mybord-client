import * as React from 'react';
import * as styles from './dropdown.module.less';

interface Props {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: {
    label: string;
    value: string;
  }[];
  value?: string;
}

const Dropdown: React.FC<Props> = ({
  onChange,
  options,
  value,
}) => (
  <>
    <select
      className={styles.dropdown}
      onChange={(event) => onChange(event)}
      value={value}
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
  </>
);

export default Dropdown;
