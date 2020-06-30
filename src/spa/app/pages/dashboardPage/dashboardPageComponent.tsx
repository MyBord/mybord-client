import * as React from 'react';
import DashboardCards from './dashboardCards/dashboardCards';
import DashboardHeader from './dashboardHeader/dashboardHeader';
import * as styles from './dashboardPage.module.less';

const DashboardPageComponent: React.FC = () => (
  <section className={styles.section}>
    <DashboardHeader />
    <DashboardCards />
  </section>
);

export default DashboardPageComponent;
