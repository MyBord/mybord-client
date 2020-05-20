import * as React from 'react';
import { FormProp, LoginFormStatus } from 'types/formTypes';
import LoginFormForgotButtons from './loginFormForgotButtons';
import LoginFormLoginButtons from './loginFormLoginButtons';
import LoginFormSignUpButtons from './loginFormSignUpButtons';

interface Props {
  form: FormProp;
  formStatus: LoginFormStatus;
  isAuthenticationWaiting: boolean;
}

const LoginFormButtons: React.FC<Props> = ({
  form,
  formStatus,
  isAuthenticationWaiting,
}) => {
  switch (formStatus) {
    case 'forgot':
      return <LoginFormForgotButtons form={form} />;
    case 'login':
      return (
        <LoginFormLoginButtons
          form={form}
          isAuthenticationWaiting={isAuthenticationWaiting}
        />
      );
    case 'signUp':
      return (
        <LoginFormSignUpButtons
          form={form}
          isAuthenticationWaiting={isAuthenticationWaiting}
        />
      );
    default:
      throw new Error('Unexpected form status');
  }
};

export default LoginFormButtons;
