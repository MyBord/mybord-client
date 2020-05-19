import * as React from 'react';
import { FormProp, LoginFormStatus } from 'types/formTypes';
import LoginFormForgotButtons from './loginFormForgotButtons';
import LoginFormLoginButtons from './loginFormLoginButtons';
import LoginFormSignUpButtons from './loginFormSignUpButtons';

interface Props {
  form: FormProp;
  formStatus: LoginFormStatus;
  isAuthenticationWaiting: boolean;
  setFormStatus: (status: LoginFormStatus) => void;
}

const LoginFormButtons: React.FC<Props> = ({
  form,
  formStatus,
  isAuthenticationWaiting,
  setFormStatus,
}) => {
  switch (formStatus) {
    case 'forgot':
      return <LoginFormForgotButtons form={form} />;
    case 'login':
      return (
        <LoginFormLoginButtons
          form={form}
          isAuthenticationWaiting={isAuthenticationWaiting}
          setFormStatus={setFormStatus}
        />
      );
    case 'signUp':
      return (
        <LoginFormSignUpButtons
          form={form}
          isAuthenticationWaiting={isAuthenticationWaiting}
          setFormStatus={setFormStatus}
        />
      );
    default:
      throw new Error('Unexpected form status');
  }
};

export default LoginFormButtons;
