import * as React from 'react';
import { FormProp, LoginFormStatus } from 'types/formTypes';
import LoginFormForgotInputs from './loginFormForgotInputs';
import LoginFormLoginInputs from './loginFormLoginInputs';
import LoginFormSignUpInputs from './loginFormSignUpInputs';

interface Props {
  formStatus: LoginFormStatus;
  isPasswordWeak: boolean;
}

const LoginFormInputs: React.FC<Props> = ({ formStatus, isPasswordWeak }) => {
  switch (formStatus) {
    case 'forgot':
      return <LoginFormForgotInputs />;
    case 'login':
      return <LoginFormLoginInputs />;
    case 'signUp':
      return <LoginFormSignUpInputs isPasswordWeak={isPasswordWeak} />;
    default:
      throw new Error('Unexpected form status');
  }
};

export default LoginFormInputs;
