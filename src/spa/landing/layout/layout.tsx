import * as React from 'react';
import LoginPage from './loginPage/loginPage';
import * as styles from './layout.module.less';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => (
  <main className={styles.main}>
    <LoginPage />
    <section className={styles.section}>
      {children}
    </section>
  </main>
);

export default Layout;
