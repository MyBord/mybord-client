// This is technically not a 'page' but I don't know what else to call this component ¯\_(ツ)_/¯

import * as React from 'react';
import LoginCard from 'organisms/loginCard/loginCard';
import loginBackground from 'images/loginBackgroundRoad.jpg';
import * as styles from './loginPage.module.less';

const LoginPage: React.FC = () => (
  <div className={styles.div}>
    <img
      alt="login-form-background"
      className={styles.img}
      src={loginBackground}
    />
    <LoginCard />
  </div>
);

export default LoginPage;
