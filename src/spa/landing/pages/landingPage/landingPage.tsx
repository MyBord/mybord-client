import * as React from 'react';
import LoginFormFinal from 'forms/loginForm/loginFormFinal';
import loginBackground from 'assets/loginBackground.jpg';
import { useHydrationContext } from 'context/hydrationContext';
import * as styles from './landingPage.module.less';

const LandingPage: React.FC = () => {
  const { setAnimationStatus, setHydrationStatus } = useHydrationContext();

  // See *1 and *2 in `hydrationContext.tsx`
  React.useEffect(() => {
    setAnimationStatus(true);
    setHydrationStatus(true);
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
