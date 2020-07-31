import * as React from 'react';
import { useLandingContext } from 'context/landingContext/landingContext';
import LoginPage from './loginPage/loginPage';
import * as styles from './layout.module.less';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const { showPages } = useLandingContext();

  const mainClassName = [
    styles.main,
    showPages ? styles.showPages : styles.hidePages,
  ].join(' ');

  return (
    <main className={mainClassName}>
      <LoginPage />
      <section className={styles.section}>
        {children}
      </section>
    </main>
  );
};

export default Layout;
