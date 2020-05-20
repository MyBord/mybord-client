import * as React from 'react';
import { FormProp } from 'types/formTypes';
import { useLoginContext } from 'landing/pages/loginPage/loginContext/loginContext';
import LoginFormForgotInputs from './loginFormForgotInputs';
import LoginFormLoginInputs from './loginFormLoginInputs';
import LoginFormSignUpInputs from './loginFormSignUpInputs';

interface Props {
  form: FormProp;
}

const LoginFormInputs: React.FC<Props> = ({ form }) => {
  const { formStatus } = useLoginContext();

  switch (formStatus) {
    case 'forgot':
      return <LoginFormForgotInputs form={form} />;
    case 'login':
      return <LoginFormLoginInputs form={form} />;
    case 'signUp':
      return <LoginFormSignUpInputs form={form} />;
    default:
      throw new Error('Unexpected form status');
  }
};

export default LoginFormInputs;
