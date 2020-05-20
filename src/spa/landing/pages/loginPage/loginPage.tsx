import * as React from 'react';
import LoginFormContainer from 'forms/loginForm/loginFormContainer';
import LoginFormHeader from 'forms/loginForm/loginFormHeader/loginFormHeader';
import pageWrapper from 'landing/pages/pageWrapper/pageWrapper';
import { LoginContextProvider } from 'forms/loginForm/loginFormContext/loginFormContext';
import * as styles from './loginPage.module.less';

const LoginPage: React.FC = () => (
  <LoginContextProvider>
    <div className={styles.div}>
      <LoginFormHeader />
      <LoginFormContainer />
    </div>
  </LoginContextProvider>
);

export default pageWrapper(LoginPage);
