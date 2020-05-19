import * as React from 'react';
import { Form } from 'antd';
import { GetFieldDecoratorOptionsType, FormProp } from 'types/formTypes';

interface Props {
  children: React.ReactNode;
  errorMessage?: string | React.ReactNode;
  fieldName: string;
  form?: FormProp;
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
    rules.push({ message: requiredMessage, required });
  }
  if (type && typeMessage) {
    rules.push({ message: typeMessage, type });
  }

  const options: GetFieldDecoratorOptionsType = {
    rules,
  };

  if (type && typeMessage) {
    options.validateTrigger = 'onBlur';
  }

  if (errorMessage) {
    return (
      <Form.Item
        help={errorMessage}
        validateStatus="error"
      >
        {
          form.getFieldDecorator(fieldName)(children)
        }
      </Form.Item>
    );
  }

  return (
    <Form.Item>
      {
        form.getFieldDecorator(fieldName, options)(children)
      }
    </Form.Item>
  );
};

export default FormItem;
