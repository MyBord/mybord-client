import * as React from 'react';
import LoginForm from './loginForm/loginForm';
import * as styles from './landingPage.module.less';

const LandingPage: React.FC = () => (
  <main className={styles.main}>
    <LoginForm />
  </main>
);

export default LandingPage;
