import * as React from 'react';
import Navigation from 'navigation/navigation';
import Profile from 'profile/profile';
import { useHydrationContext } from 'context/hydrationContext/hydrationContext';
import * as styles from './layout.module.less';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const { setAnimationStatus } = useHydrationContext();

  React.useEffect(() => {
    // See *2 in `hydrationContext.tsx`
    setTimeout(() => setAnimationStatus(true), 500);
  }, [setAnimationStatus]);

  return (
    <>
      <Navigation />
      <Profile />
      <main className={styles.main}>
        <section className={styles.section}>
          {children}
        </section>
      </main>
    </>
  );
};

export default Layout;
