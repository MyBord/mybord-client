import * as React from 'react';
import { Checkbox as AntCheckbox } from 'antd';
import './checkbox.less';

interface Props {
  label?: string;
}

const Checkbox: React.FC<Props> = ({ label = null }) => {
  if (label) {
    return (
      <AntCheckbox>
        {label}
      </AntCheckbox>
    );
  }

  return <AntCheckbox />;
};

export default Checkbox;
