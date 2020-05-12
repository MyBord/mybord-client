import * as React from 'react';
import Spinner from 'fallbacks/spinner/spinner';
import { fetchData } from 'api/fakeApi';
import { useHydrationContext } from 'context/hydrationContext';
import DashboardCards from './dashboardCards/dashboardCards';
import DashboardHeader from './dashboardHeader/dashboardHeader';
import * as styles from './dashboardPage.module.less';

interface Props {
  isAnimationComplete: boolean;
  setHydrationStatus: (status: boolean) => void;
}

const resource = fetchData();

const DashboardPage: React.FC = () => {
  const { isAnimationComplete, isHydrated, setHydrationStatus } = useHydrationContext();
  // See *1 notes in `hydrationContext.tsx` about why our fallback `Spinner` may not render unless
  // our app has been hydrated.
  return (
    <React.Suspense fallback={isHydrated && <Spinner />}>
      <DashboardPageContent
        isAnimationComplete={isAnimationComplete}
        setHydrationStatus={setHydrationStatus}
      />
    </React.Suspense>
  );
};

const DashboardPageContent: React.FC<Props> = ({ isAnimationComplete, setHydrationStatus }) => {
  const userCards = resource.userCards.read();

  // See *1 in `hydrationContext.tsx`
  React.useEffect(() => setHydrationStatus(true), []);

  // See *2 in `hydrationContext.tsx`
  if (isAnimationComplete) {
    return (
      <section className={styles.section}>
        <h1>This is the dashboard</h1>
      </section>
    );
  }
  return null;
};

export default DashboardPage;
