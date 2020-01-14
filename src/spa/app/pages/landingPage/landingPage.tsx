import * as React from 'react';
import LoginForm from 'forms/loginForm/loginForm';
import loginBackground from '../../../../assets/loginBackground.jpg';
import * as styles from './landingPage.module.less';

const LandingPage: React.FC = () => (
  <main>
    <img
      alt="login-form-background"
      className={styles.img}
      src={loginBackground}
    />
    <LoginForm />
  </main>
);

export default LandingPage;
