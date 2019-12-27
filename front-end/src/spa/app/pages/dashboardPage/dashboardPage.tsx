import * as React from 'react';
import DashboardCards from './dashboardCards/dashboardCards';
import DashboardHeader from './dashboardHeader/dashboardHeader';
import * as styles from './dashboardPage.module.scss';

const DashboardPage: React.FC = () => (
  <section className={styles.section}>
    <DashboardHeader />
    <DashboardCards />
  </section>
);

export default DashboardPage;
