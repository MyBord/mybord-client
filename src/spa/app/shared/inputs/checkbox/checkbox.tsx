import * as React from 'react';
import { Checkbox as AntCheckbox, Form } from 'antd';

interface Props {
  label: string;
}

const Checkbox: React.FC<Props> = ({ label }) => (
  <Form.Item>
    <AntCheckbox>
      {label}
    </AntCheckbox>
  </Form.Item>
);

export default Checkbox;
