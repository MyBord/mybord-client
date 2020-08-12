import * as React from 'react';
import { Select } from 'antd';
import Icon from 'icons/icon/icon';
import * as styles from './dropdown.module.less';
import './dropdown.less';

interface Props {
  onChange?: () => void;
  value?: any;
}

const options = [
  { label: 'Option 1', value: 'Value 1' },
  { label: 'Option 2', value: 'Value 2' },
  { label: 'Option 3', value: 'Value 3' },
];

const DropdownIcon: React.FC = () => (
  <div className={styles.iconDiv}>
    <Icon color="lightGrey" iconName="caretDown" size={24} />
  </div>
);

const Dropdown: React.FC<Props> = ({
  onChange,
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
