import * as React from 'react';
import DashboardCards from './dashboardCards/dashboardCards';
import * as styles from './dashboardPage.module.less';

const DashboardPageComponent: React.FC = () => (
  <section className={styles.section}>
    <DashboardCards />
  </section>
);

export default DashboardPageComponent;
