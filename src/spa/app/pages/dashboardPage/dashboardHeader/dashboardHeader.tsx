import * as React from 'react';
import DashboardHeaderFilterFormContainer
  from './dashboardHeaderFilterForm/dashboardHeaderFilterFormContainer';
import * as styles from './dashboardHeader.module.less';

const DashboardHeader: React.FC = () => (
  <section className={styles.section}>
    <DashboardHeaderFilterFormContainer />
  </section>
);

export default DashboardHeader;
