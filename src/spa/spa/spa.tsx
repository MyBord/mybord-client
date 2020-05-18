import * as React from 'react';
import { FormComponentProps } from 'antd/lib/form/Form';
import { Divider } from 'antd';
import EnhancedForm from 'forms/formWrapper/formWrapperTwo';
import 'antd/dist/antd.css';

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
