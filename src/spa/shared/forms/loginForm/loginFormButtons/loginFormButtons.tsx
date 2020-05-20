import * as React from 'react';
import { FormProp } from 'types/formTypes';
import { useLoginContext } from 'forms/loginForm/loginFormContext/loginFormContext';
import LoginFormForgotButtons from './loginFormForgotButtons';
import LoginFormLoginButtons from './loginFormLoginButtons';
import LoginFormSignUpButtons from './loginFormSignUpButtons';

interface Props {
  form: FormProp;
  isAuthenticationWaiting: boolean;
}

const LoginFormButtons: React.FC<Props> = ({
  form,
  isAuthenticationWaiting,
}) => {
  const { formStatus } = useLoginContext();

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
