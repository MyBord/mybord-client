import * as React from 'react';
import Header from 'header/header';
import Navigation from 'navigation/navigation';
import { useHydrationContext } from 'context/hydrationContext/hydrationContext';
import * as styles from './layout.module.less';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const { setAnimationStatus } = useHydrationContext();

  React.useEffect(() => {
    // See *2 in `hydrationContext.tsx`
    setTimeout(() => setAnimationStatus(true), 1500);
  }, [setAnimationStatus]);

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
