import * as React from 'react';
import ErrorBoundary from 'landing/errorBoundary/errorBoundary';
import Routes from 'landing/routing/routes';
import loginBackground from 'assets/loginBackground.jpg';
import * as styles from './landing.module.less';

const Landing: React.FC = () => (
  <ErrorBoundary>
    <main>
      <img
        alt="login-form-background"
        className={styles.img}
        src={loginBackground}
      />
      <Routes />
    </main>
  </ErrorBoundary>
);

export default Landing;
