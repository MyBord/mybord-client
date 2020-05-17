import * as React from 'react';
import LoginFormContainer from 'forms/loginForm/loginFormContainer';
import LoginFormHeader from 'forms/loginForm/loginFormHeader/loginFormHeader';
import pageWrapper from 'landing/pages/pageWrapper/pageWrapper';
import * as styles from './loginPage.module.less';

const LoginPage: React.FC = () => (
  <div className={styles.div}>
    <LoginFormHeader />
    <LoginFormContainer />
  </div>
);

export default pageWrapper(LoginPage);
