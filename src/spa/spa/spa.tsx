import * as React from 'react';
import Form, { FormComponentProps } from 'antd/lib/form/Form';
import { Button, Input, Divider } from 'antd';
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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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

const Spa: React.FC = () => {
  const formRef = React.createRef<FormComponentProps>();
  const [inputValue, setInputValue] = React.useState();
  const [state, set] = React.useState(false);

  const handleSubmit = (): void => {
    setInputValue(formRef.current.form.getFieldValue('name'));
  };

  return (
    <div>
      <button type="button" onClick={() => set((i) => !i)}>
        Click Me
      </button>
      <h3>{state ? 'TRUE' : 'FALSE'}</h3>
      <div>{`I'm the value from form: ${inputValue}`}</div>
      <Divider />
      <EnhancedForm onSubmit={handleSubmit} wrappedComponentRef={formRef} />
    </div>
  );
};

export default Spa;
