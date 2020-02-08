import * as React from 'react';
import { LoginFormStatus } from 'types/formTypes';
import LoginFormLoginSocial from './loginFormLoginSocial';
import LoginFormSignUpSocial from './loginFormSignUpSocial';

interface Props {
  formStatus: LoginFormStatus;
}

const LoginFormSocial: React.FC<Props> = ({ formStatus }) => {
  switch (formStatus) {
    case 'login':
      return <LoginFormLoginSocial />;
    case 'signUp':
      return <LoginFormSignUpSocial />;
    default:
      throw new Error('Unexpected form status');
  }
};

export default LoginFormSocial;
