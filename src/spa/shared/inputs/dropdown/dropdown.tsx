import * as React from 'react';
import { Select } from 'antd';
import Icon from 'icons/icon/icon';
import 'antd/dist/antd.css';
import { DropdownProps } from 'types/inputTypes';
import * as styles from './dropdown.module.less';
import './dropdown.less';

const DropdownIcon: React.FC = () => (
  <div className={styles.iconDiv}>
    <Icon color="lightGrey" iconName="caretDown" size={24} />
  </div>
);

const Dropdown = React.forwardRef<Select, DropdownProps>(({
  multiSelect = false,
  onChange,
  options,
  value,
}, ref) => (
  <Select
    className={styles.dropdown}
    mode={multiSelect ? 'multiple' : 'default'}
    onChange={onChange}
    ref={ref}
    showArrow
    suffixIcon={<DropdownIcon />}
    value={value || undefined}
  >
    {options.map((option) => (
      <Select.Option key={option.value} value={option.value}>
        {option.label}
      </Select.Option>
    ))}
  </Select>
));

export default Dropdown;
