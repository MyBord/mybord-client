import * as React from 'react';
import DashboardHeaderFilterForm from './dashboardHeaderFilterForm/dashboardHeaderFilterForm';
import * as styles from './dashboardHeader.module.less';

const DashboardHeader: React.FC = () => (
  <section className={styles.section}>
    <DashboardHeaderFilterForm />
  </section>
);

export default DashboardHeader;
