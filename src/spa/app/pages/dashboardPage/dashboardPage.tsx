import * as React from 'react';
import Popover from 'shared/modals/popover/popover';
import DashboardCards from './dashboardCards/dashboardCards';
import DashboardHeader from './dashboardHeader/dashboardHeader';
import * as styles from './dashboardPage.module.less';

const DashboardPage: React.FC = () => (
  <section className={styles.section}>
    <Popover content={<h1>hello world</h1>}>
      <button type="button">click me</button>
    </Popover>
    <DashboardHeader />
    <DashboardCards />
  </section>
);

export default DashboardPage;
