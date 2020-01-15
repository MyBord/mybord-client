import * as React from 'react';
import LoginFormHeader from './loginFormHeader/loginFormHeader';
import LoginForm from './loginForm';
import * as styles from './loginForm.module.less';

const LoginFormContainer: React.FC = () => (
  <div className={styles.formContainer}>
    <LoginFormHeader />
    <LoginForm />
  </div>
);

export default LoginFormContainer;
