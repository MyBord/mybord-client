import * as React from 'react';
import { Form } from 'antd';
import { GetFieldDecoratorOptionsType, FormProp } from 'types/formTypes';

interface Props {
  children: React.ReactNode;
  errorMessage?: string;
  fieldName: string;
  form: FormProp;
  required?: boolean;
  requiredMessage?: string;
  type?: string;
  typeMessage?: string;
}

const FormItem: React.FC<Props> = ({
  children,
  errorMessage = null,
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

  const options: GetFieldDecoratorOptionsType = {
    rules,
  };

  return (
    <Form.Item
      help={errorMessage}
      validateStatus={errorMessage ? 'error' : undefined}
    >
      {
        form.getFieldDecorator(fieldName, options)(children)
      }
    </Form.Item>
  );
};

export default FormItem;
