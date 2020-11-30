import * as React from 'react';
import { FormProp } from 'types/formTypes';
import { useLoginContext } from 'context/loginContext/loginContext';
const LoginFormForgotInputs = React.lazy(() => import('./loginFormForgotInputs'));
const LoginFormSignUpInputs = React.lazy(() => import('./loginFormSignUpInputs'));

interface Props {
  form: FormProp;
}

const LoginFormInputs: React.FC<Props> = ({ form }) => {
  const { formStatus } = useLoginContext();

  switch (formStatus) {
    case 'forgot':
      return <LoginFormForgotInputs form={form} />;
    case 'signUp':
      return <LoginFormSignUpInputs form={form} />;
    default:
      throw new Error('Unexpected form status');
  }
};

export default LoginFormInputs;
