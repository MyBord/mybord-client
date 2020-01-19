import * as React from 'react';
import { Form } from 'antd';
import { FormProp } from 'types/formTypes';

interface Props {
  children: React.ReactNode;
  fieldName: string;
  form: FormProp;
}

const FormItem: React.FC<Props> = ({ children, fieldName, form }) => (
  <Form.Item>
    {
      form.getFieldDecorator(fieldName)(
        <>
          {children}
        </>,
      )
    }
  </Form.Item>
);

export default FormItem;
