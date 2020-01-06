import * as React from 'react';
import Header from 'header/header';
import Navigation from 'navigation/navigation';
import * as styles from './layout.module.less';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => (
  <>
    <Navigation />
    <main className={styles.main}>
      <Header />
      <section className={styles.section}>
        {children}
      </section>
    </main>
  </>
);

export default Layout;
