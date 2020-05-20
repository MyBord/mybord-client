import * as React from 'react';
import { FormProp } from 'types/formTypes';
import { useLoginContext } from 'forms/loginForm/loginFormContext/loginFormContext';
import LoginFormForgotInputs from './loginFormForgotInputs';
import LoginFormLoginInputs from './loginFormLoginInputs';
import LoginFormSignUpInputs from './loginFormSignUpInputs';

interface Props {
  form: FormProp;
  isPasswordWeak: boolean;
}

const LoginFormInputs: React.FC<Props> = ({ form, isPasswordWeak }) => {
  const { formStatus } = useLoginContext();

  switch (formStatus) {
    case 'forgot':
      return <LoginFormForgotInputs form={form} />;
    case 'login':
      return <LoginFormLoginInputs form={form} />;
    case 'signUp':
      return <LoginFormSignUpInputs form={form} isPasswordWeak={isPasswordWeak} />;
    default:
      throw new Error('Unexpected form status');
  }
};

export default LoginFormInputs;
