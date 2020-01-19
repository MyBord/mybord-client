import * as React from 'react';
import { Form } from 'antd';
import { FormProp } from 'types/formTypes';

interface Props {
  children: React.ReactNode;
  fieldName: string;
  form: FormProp;
  required?: boolean;
  requiredMessage?: string;
  type?: string;
  typeMessage?: string;
}

const FormItem: React.FC<Props> = ({
  children,
  fieldName,
  form,
  required = false,
  requiredMessage = null,
  type = null,
  typeMessage = false,
}) => {
  const rules = [];
  if (required && requiredMessage) {
    rules.push({ required, message: requiredMessage });
  }
  if (type && typeMessage) {
    rules.push({ type, message: typeMessage });
  }

  const options = {
    rules,
  };

  return (
    <Form.Item>
      {
        form.getFieldDecorator(fieldName, options)(
          <div>
            {children}
          </div>,
        )
      }
    </Form.Item>
  );
};

export default FormItem;
