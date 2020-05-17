import * as React from 'react';
import { FormProp, LoginFormStatus } from 'types/formTypes';
import LoginFormForgotInputs from './loginFormForgotInputs';
import LoginFormLoginInputs from './loginFormLoginInputs';
import LoginFormSignUpInputs from './loginFormSignUpInputs';

interface Props {
  form: FormProp;
  formStatus: LoginFormStatus;
  isPasswordWeak: boolean;
}

const LoginFormInputs: React.FC<Props> = ({ form, formStatus, isPasswordWeak }) => {
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
