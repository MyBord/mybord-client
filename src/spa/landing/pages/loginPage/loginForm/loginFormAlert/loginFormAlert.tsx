import * as React from 'react';
import Alert from 'shared/alert/alert';
import FormItem from 'forms/formItem/formItem';
import { FormProp } from 'types/formTypes';
import { useLoginContext } from 'landing/pages/loginPage/loginContext/loginContext';

interface Props {
  form: FormProp;
}

const LoginFormAlert: React.FC<Props> = ({
  form,
}) => {
  const { alertMessage } = useLoginContext();

  return (
    <FormItem fieldName="alert" form={form}>
      <Alert message={alertMessage} showAlert={!!alertMessage} />
    </FormItem>
  );
};

export default LoginFormAlert;
