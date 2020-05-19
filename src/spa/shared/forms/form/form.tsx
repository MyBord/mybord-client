import * as React from 'react';
import { Form as AntForm } from 'antd';
import { FormProp, FormProps } from 'types/formTypes';

// todo: change name of file & folder

interface FormContentProps extends FormProps {
  children: React.ReactElement | React.ReactElement[];
  onSubmit: (form: FormProp) => void;
}

interface Props {
  children: React.ReactElement | React.ReactElement[];
  onSubmit: (form: FormProp) => void;
}

const FormContent = React.forwardRef<FormProps, FormContentProps>(
  ({ children, form, onSubmit }: FormContentProps, ref) => {
    React.useImperativeHandle(ref, () => ({
      form,
    }));

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
      event.preventDefault();
      form.validateFields((error) => {
        if (!error) {
          onSubmit(form);
        }
      });
    };

    return (
      <AntForm onSubmit={handleSubmit}>
        {
          React.Children.map(children, (child) => React.cloneElement(child, { form }))
        }
      </AntForm>
    );
  },
);

const FormInstance = AntForm.create<FormContentProps>()(FormContent);

const Form = React.forwardRef<FormProps, Props>(
  ({ children, onSubmit }: Props, ref) => (
    <FormInstance onSubmit={onSubmit} wrappedComponentRef={ref}>
      {children}
    </FormInstance>
  ),
);

export default Form;
