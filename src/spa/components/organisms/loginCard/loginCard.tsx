import * as React from 'react';
import LoginFormContent from 'landing/layout/loginPage/loginForm/loginFormContent/loginFormContent';
import Typography from 'typography/typography';
import logoWithType from 'graphics/logoWithType.png';
import pageWrapper from 'landing/pages/pageWrapper/pageWrapper';
import { LoginContextProvider } from 'context/loginContext/loginContext';
import { useLandingContext } from 'context/landingContext/landingContext';
import * as styles from './loginCard.module.less';

const LoginCard: React.FC = () => {
  const { headerRef } = useLandingContext();

  const handleClick = (): void => {
    setTimeout(() => {
      if (headerRef.current) {
        headerRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, 100);
  };

  return (
    <LoginContextProvider>
      <div className={styles.containerDiv}>
        <div className={styles.logoDiv}>
          <img alt="MyBord logo" className={styles.img} src={logoWithType} />
        </div>
        <LoginFormContent />
        <Typography
          text="About MyBord"
          link="/about"
          onClick={handleClick}
        />
      </div>
    </LoginContextProvider>
  );
};

export default pageWrapper(LoginCard);
