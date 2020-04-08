import * as React from 'react';
import LoginFormHeader from './loginFormHeader/loginFormHeader';
import LoginFormContainer from './loginFormContainer';
import * as styles from './loginForm.module.less';

const LoginFormFinal: React.FC = () => (
  <div className={styles.loginForm}>
    <LoginFormHeader />
    <LoginFormContainer />
  </div>
);

export default LoginFormFinal;
