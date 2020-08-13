import * as React from 'react';
import { Select } from 'antd';
import Icon from 'icons/icon/icon';
import { DropdownProps } from 'types/inputTypes';
import * as styles from './dropdown.module.less';
import './dropdown.less';

const DropdownIcon: React.FC = () => (
  <div className={styles.iconDiv}>
    <Icon color="lightGrey" iconName="caretDown" size={24} />
  </div>
);

const Dropdown: React.FC<DropdownProps> = ({
  onChange,
  options,
  value,
}) => (
  <Select
    onChange={onChange}
    suffixIcon={<DropdownIcon />}
    value={value || undefined}
  >
    {options.map((option) => (
      <Select.Option key={option.value} value={option.value}>
        {option.label}
      </Select.Option>
    ))}
  </Select>
);

export default Dropdown;
