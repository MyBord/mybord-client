import * as React from 'react';
import { useAuthenticationContext } from 'context/authenticationContext/authenticationContext';
import DashboardCards from './dashboardCards/dashboardCards';
import * as styles from './dashboardPage.module.less';

const DashboardPageComponent: React.FC = () => {
  const { currentUser } = useAuthenticationContext();

  return (
    <section className={styles.section}>
      <h1>{currentUser.username}</h1>
      <h1>{currentUser.email}</h1>
      <DashboardCards />
    </section>
  );
};

export default DashboardPageComponent;
