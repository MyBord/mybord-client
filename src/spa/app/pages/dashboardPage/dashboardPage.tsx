import * as React from 'react';
import Spinner from 'fallbacks/spinner/spinner';
import { fetchData } from 'api/fakeApi';
import { useHydrationContext } from 'context/hydrationContext';
import DashboardCards from './dashboardCards/dashboardCards';
import DashboardHeader from './dashboardHeader/dashboardHeader';
import * as styles from './dashboardPage.module.less';

interface Props {
  setHydrationStatus: (status: boolean) => void;
}

const resource = fetchData();

const DashboardPage: React.FC = () => {
  const { isHydrated, setHydrationStatus } = useHydrationContext();
  // See notes in `hydrationContext.tsx` about why our fallback `Spinner` may not render unless
  // our app has been hydrated.
  return (
    <React.Suspense fallback={isHydrated && <Spinner />}>
      <DashboardPageContent setHydrationStatus={setHydrationStatus} />
    </React.Suspense>
  );
};

const DashboardPageContent: React.FC<Props> = ({ setHydrationStatus }) => {
  // const userCards = resource.userCards.read();
  const userCards = resource.user.read();

  React.useEffect(() => setHydrationStatus(true), []);

  return (
    <h1>{userCards.name}</h1>
  );
};

export default DashboardPage;
