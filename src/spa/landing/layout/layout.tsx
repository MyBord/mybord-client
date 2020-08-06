import * as React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from 'shared/footer/footer';
import { useLandingContext } from 'context/landingContext/landingContext';
import Header from './header/header';
import LoginPage from './loginPage/loginPage';
import * as styles from './layout.module.less';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const { pathname } = useLocation();
  const { headerRef, showPages, setShowPages } = useLandingContext();

  if (pathname !== '/') {
    setShowPages(true);
  }

  const mainClassName = [
    styles.main,
    showPages ? styles.showPages : styles.hidePages,
  ].join(' ');

  return (
    <main className={mainClassName}>
      <LoginPage />
      <div ref={headerRef} />
      <section className={styles.section}>
        <Header />
        {children}
        <Footer />
      </section>
    </main>
  );
};

export default Layout;
