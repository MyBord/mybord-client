import * as React from 'react';
import { Form } from 'antd';
import { FormProp } from 'types/formTypes';

interface Props {
  children: React.ReactNode;
  fieldName: string;
  form: FormProp;
  message?: string;
  required?: boolean;
  type?: string;
}

const FormItem: React.FC<Props> = ({
  children,
  fieldName,
  form,
  message = null,
  required = false,
  type = null,
}) => {
  const options = {
    rules: [{
      // message,
      required,
      // type,
    }],
  };

  return (
    <Form.Item>
      {
        // @ts-ignore: not all options.rules should be required
        form.getFieldDecorator(fieldName, options)(
          <>
            {children}
          </>,
        )
      }
    </Form.Item>
  );
};

export default FormItem;
