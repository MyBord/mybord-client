import * as React from 'react';
import LoginFormFinal from 'forms/loginForm/loginFormFinal';
import loginBackground from 'assets/loginBackground.jpg';
import { useAuthenticationContext } from 'context/authenticationContext';
import * as styles from './landingPage.module.less';

const LandingPage: React.FC = () => {
  const { resetLogOutStatus } = useAuthenticationContext();

  React.useEffect(() => {
    resetLogOutStatus();
  }, []);

  return (
    <main>
      <img
        alt="login-form-background"
        className={styles.img}
        src={loginBackground}
      />
      <LoginFormFinal />
    </main>
  );
};

export default LandingPage;
