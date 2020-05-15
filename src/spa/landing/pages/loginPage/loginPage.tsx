import * as React from 'react';
import LoginFormContainer from 'forms/loginForm/loginFormContainer';
import LoginFormHeader from 'forms/loginForm/loginFormHeader/loginFormHeader';
import Typography from 'typography/typography';
import pageWrapper from 'landing/pages/pageWrapper/pageWrapper';
import * as styles from './loginPage.module.less';

const LoginPage: React.FC = () => (
  <div className={styles.div}>
    <LoginFormHeader />
    <LoginFormContainer />
    <Typography text="About MyBord" link="/about" />
  </div>
);

export default pageWrapper(LoginPage);
