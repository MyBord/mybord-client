// This is technically not a 'page' but I don't know what else to call this component ¯\_(ツ)_/¯

import * as React from 'react';
import loginBackground from 'assets/pictures/loginBackgroundRoad.jpg';
import LoginForm from './loginForm/loginForm';
import * as styles from './loginPage.module.less';

const LoginPage: React.FC = () => (
  <div className={styles.div}>
    <img
      alt="login-form-background"
      className={styles.img}
      src={loginBackground}
    />
    <LoginForm />
  </div>
);

export default LoginPage;
