import * as React from 'react';
import Header from 'header/header';
import Navigation from 'navigation/navigation';
import { useHydrationContext } from 'context/hydrationContext';
import * as styles from './layout.module.less';

interface Props {
  children: React.ReactNode;
}

// ToDo: add notes
const Layout: React.FC<Props> = ({ children }) => {
  const { setAnimationStatus } = useHydrationContext();

  React.useEffect(() => {
    setTimeout(() => setAnimationStatus(true), 1700);
  }, []);

  return (
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
};

export default Layout;
