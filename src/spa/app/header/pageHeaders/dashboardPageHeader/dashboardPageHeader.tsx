import * as React from 'react';
import DashboardPageHeaderFilterForm
  from './dashboardPageHeaderFilterForm/dashboardPageHeaderFilterForm';
import * as styles from './dashboardPageHeader.module.less';

const DashboardPageHeader: React.FC = () => (
  <section className={styles.section}>
    <DashboardPageHeaderFilterForm />
  </section>
);

export default DashboardPageHeader;
