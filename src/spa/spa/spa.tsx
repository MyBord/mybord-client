import * as React from 'react';
import { Button, Input, Divider } from 'antd';
import Form, { FormComponentProps } from 'antd/lib/form/Form';
import formWrapper from 'forms/formWrapper/formWrapperTwo';
import 'antd/dist/antd.css';

const Spa: React.FC = () => {
  const formRef = React.createRef<FormComponentProps>();
  const [inputValue, setInputValue] = React.useState();
  const [state, set] = React.useState(false);

  const handleSubmit = (): void => {
    setInputValue(formRef.current.form.getFieldValue('name'));
  };

  // const FormConent = () => (
  //   <>
  //     <Form.Item label="name">
  //       {form.getFieldDecorator('name')(<Input />)}
  //     </Form.Item>
  //     <Button htmlType="submit">submit</Button>
  //   </>
  // );

  const FormContent: React.FC = () => (
    <>
      <Button htmlType="submit">submit</Button>
    </>
  );

  const FinalForm = formWrapper(FormContent);

  return (
    <div>
      <button type="button" onClick={() => set((i) => !i)}>
        Click Me
      </button>
      <h3>{state ? 'TRUE' : 'FALSE'}</h3>
      <div>{`I'm the value from form: ${inputValue}`}</div>
      <Divider />
      <FinalForm onSubmit={() => console.log('foo')} />
    </div>
  );
};

export default Spa;
