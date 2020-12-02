import * as React from 'react';
import LoginFormContainer from './loginFormContainer';

interface Props {
  handleSignup: () => void;
}

const LoginForm: React.FC<Props> = (props) => <LoginFormContainer {...props} />;

export default LoginForm;
