import * as React from 'react';
import { Form as AntForm } from 'antd';
import { FormProp, FormProps } from 'types/formTypes';
import * as styles from './form.module.less';

interface FormContentProps extends FormProps {
  children: React.ReactElement | React.ReactElement[];
  layout: 'horizontal' | 'vertical';
  onSubmit: (form: FormProp) => void;
  type?: 'login';
}

interface Props {
  children: React.ReactElement | React.ReactElement[];
  layout?: 'horizontal' | 'vertical';
  onSubmit: (form: FormProp) => void;
  type?: 'login';
}

const FormContent = React.forwardRef<FormProps, FormContentProps>(
  (
    {
      children,
      form,
      layout,
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
        className={[
          styles[layout],
          type ? styles[type] : undefined,
        ].join(' ')}
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
  (
    {
      children,
      layout = 'vertical',
      onSubmit,
      type = null,
    }: Props,
    ref,
  ) => (
    <FormInstance
      layout={layout}
      onSubmit={onSubmit}
      type={type}
      wrappedComponentRef={ref}
    >
      {children}
    </FormInstance>
  ),
);

export default Form;
