import * as React from 'react';
import { Form as AntForm } from 'antd';
import { FormProp } from 'types/formTypes';
import * as styles from './formWrapper.module.less';

interface ComponentProps {
  form: FormProp;
}

interface FormWrapperProps {
  Component: React.FC<ComponentProps>;
  onSubmit: (form: FormProp) => void;
  type?: 'login';
}

const formWrapper = ({ Component, onSubmit, type = null }: FormWrapperProps): React.FC => {
  const Form: React.FC<ComponentProps> = ({ form }) => {
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
        <Component form={form} />
      </AntForm>
    );
  };

  // @ts-ignore; unclear from docs how to document this return type via TS
  return AntForm.create()(Form);
};

export default formWrapper;
