import * as React from 'react';
import { Checkbox as AntCheckbox } from 'antd';
import './checkbox.less';

interface Props {
  checked?: boolean;
  label?: string;
  onChange?: () => void;
}

const Checkbox: React.FC<Props> = ({
  checked,
  label = null,
  onChange,
}) => {
  if (label) {
    return (
      <AntCheckbox
        checked={checked}
        onChange={onChange}
      >
        {label}
      </AntCheckbox>
    );
  }

  return (
    <AntCheckbox
      checked={checked}
      onChange={onChange}
    />
  );
};

export default Checkbox;
