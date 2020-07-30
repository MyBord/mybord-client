import * as React from 'react';
import pageWrapper from 'landing/pages/pageWrapper/pageWrapper';
import { LoginContextProvider } from 'context/loginContext/loginContext';
import LoginFormContent from './loginFormContent/loginFormContent';
import LoginFormHeader from './loginFormHeader/loginFormHeader';
import * as styles from './loginPage.module.less';

const LoginPage: React.FC = () => (
  <LoginContextProvider>
    <div className={styles.div}>
      <LoginFormHeader />
      <LoginFormContent />
    </div>
  </LoginContextProvider>
);

export default pageWrapper(LoginPage);
