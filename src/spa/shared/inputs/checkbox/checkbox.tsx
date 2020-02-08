import * as React from 'react';
import { Checkbox as AntCheckbox, Form } from 'antd';
import './checkbox.less';

interface Props {
  label: string;
}

const Checkbox: React.FC<Props> = ({ label }) => (
  <AntCheckbox>
    {label}
  </AntCheckbox>
);

export default Checkbox;
