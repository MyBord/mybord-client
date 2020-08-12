import * as React from 'react';
import { Select } from 'antd';
import Icon from 'icons/icon/icon';
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

const Dropdown: React.FC<Props> = ({
  onChange,
  value,
}) => (
  <Select
    onChange={onChange}
    suffixIcon={<Icon iconName="downArrow" size={24} />}
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
