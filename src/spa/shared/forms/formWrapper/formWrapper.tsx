import * as React from 'react';
import { Form as AntForm } from 'antd';
import { FormProp } from 'types/formTypes';
import * as styles from './formWrapper.module.less';

interface Props {
  form: FormProp;
}

const formWrapper = (
  WrappedComponent: React.FC<Props>,
  onSubmit: (form: FormProp) => void,
  formType?: 'login',
): React.FC => {
  const Form: React.FC<Props> = ({ form }) => {
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
        className={formType ? styles[formType] : undefined}
        hideRequiredMark
        onSubmit={handleSubmit}
      >
        <WrappedComponent form={form} />
      </AntForm>
    );
  };

  // @ts-ignore; unclear from docs how to document this return type via TS
  return AntForm.create()(Form);
};

export default formWrapper;
