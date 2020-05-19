import * as React from 'react';
import { Form as AntForm } from 'antd';
import { FormProp, FormProps } from 'types/formTypes';
import * as styles from './form.module.less';

// todo: change name of file & folder

interface FormContentProps extends FormProps {
  children: React.ReactElement | React.ReactElement[];
  onSubmit: (form: FormProp) => void;
  type?: 'login';
}

interface Props {
  children: React.ReactElement | React.ReactElement[];
  onSubmit: (form: FormProp) => void;
  type?: 'login';
}

const FormContent = React.forwardRef<FormProps, FormContentProps>(
  (
    {
      children,
      form,
      onSubmit,
      type,
    }: FormContentProps,
    ref,
  ) => {
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
      <AntForm
        className={type ? styles[type] : undefined}
        hideRequiredMark
        onSubmit={handleSubmit}
      >
        {
          React.Children.map(children, (child) => React.cloneElement(child, { form }))
        }
      </AntForm>
    );
  },
);

const FormInstance = AntForm.create<FormContentProps>()(FormContent);

const Form = React.forwardRef<FormProps, Props>(
  ({ children, onSubmit, type = null }: Props, ref) => (
    <FormInstance
      onSubmit={onSubmit}
      type={type}
      wrappedComponentRef={ref}
    >
      {children}
    </FormInstance>
  ),
);

export default Form;
