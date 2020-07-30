import * as React from 'react';
import { useLoginContext } from 'context/loginContext/loginContext';
const LoginFormLoginSocial = React.lazy(() => import('./loginFormLoginSocial'));
const LoginFormSignUpSocial = React.lazy(() => import('./loginFormSignUpSocial'));

const LoginFormSocial: React.FC = () => {
  const { formStatus } = useLoginContext();

  switch (formStatus) {
    case 'forgot':
      return null;
    case 'login':
      return <LoginFormLoginSocial />;
    case 'signUp':
      return <LoginFormSignUpSocial />;
    default:
      throw new Error('Unexpected form status');
  }
};

export default LoginFormSocial;
