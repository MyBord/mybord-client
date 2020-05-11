import * as React from 'react';
import { fetchData } from 'api/fakeApi';
import DashboardCards from './dashboardCards/dashboardCards';
import DashboardHeader from './dashboardHeader/dashboardHeader';
import * as styles from './dashboardPage.module.less';

const resource = fetchData();

const DashboardPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  return (
    <>
      <h1 style={{ margin: '3rem' }}>{isLoaded ? 'LOADED' : 'NOT LOADED'}</h1>
      <React.Suspense fallback={<h1>...LOADING...</h1>}>
        <AppDetails setIsLoaded={setIsLoaded} />
      </React.Suspense>
    </>
  );
};

interface Props {
  setIsLoaded: (status: boolean) => void;
}

const AppDetails: React.FC<Props> = ({ setIsLoaded }) => {
  const userCards = resource.userCards.read();

  React.useEffect(() => setIsLoaded(true), []);

  return (
    <section className={styles.section}>
      <DashboardHeader />
      <DashboardCards userCards={userCards.userCards} />
    </section>
  );
};

export default DashboardPage;
