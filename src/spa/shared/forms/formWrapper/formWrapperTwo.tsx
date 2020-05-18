import * as React from 'react';
import Form, { FormComponentProps } from 'antd/lib/form/Form';
import { Button, Input } from 'antd';
import 'antd/dist/antd.css';

interface TestFormProps extends FormComponentProps {
  onSubmit: () => void;
}

type Ref = FormComponentProps;

const TestForm = React.forwardRef<Ref, TestFormProps>(
  ({ form, onSubmit }: TestFormProps, ref) => {
    React.useImperativeHandle(ref, () => ({
      form,
    }));

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      onSubmit();
    };

    return (
      <Form onSubmit={handleSubmit}>
        <Form.Item label="name">
          {form.getFieldDecorator('name')(<Input />)}
        </Form.Item>
        <Button htmlType="submit">submit</Button>
      </Form>
    );
  },
);

const EnhancedForm = Form.create<TestFormProps>()(TestForm);

export default EnhancedForm;
