import * as React from 'react';
import Form, { FormComponentProps } from 'antd/lib/form/Form'; // use antd import?
import { Button, Input } from 'antd';
import 'antd/dist/antd.css';

interface TestFormProps extends FormComponentProps {
  onSubmit: () => void;
}

type Ref = FormComponentProps;

const formWrapper = (WrappedComponent: React.FC) => {
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
          <WrappedComponent />
        </Form>
      );
    },
  );

  return Form.create<TestFormProps>()(TestForm);
};


export default formWrapper;
