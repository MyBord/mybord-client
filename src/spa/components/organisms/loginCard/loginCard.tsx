import * as React from 'react';
import LoginFormContent from 'landing/layout/loginPage/loginForm/loginFormContent/loginFormContent';
import logoWithType from 'graphics/logoWithType.png';
import pageWrapper from 'landing/pages/pageWrapper/pageWrapper';
import { LoginContextProvider } from 'context/loginContext/loginContext';
import * as styles from './loginCard.module.less';

const LoginCard: React.FC = () => (
  <LoginContextProvider>
    <div className={styles.containerDiv}>
      <div className={styles.logoDiv}>
        <img alt="MyBord logo" className={styles.img} src={logoWithType} />
      </div>
      <LoginFormContent />
    </div>
  </LoginContextProvider>
);

export default pageWrapper(LoginCard);
