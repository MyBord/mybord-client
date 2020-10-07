import * as React from 'react';
import UserDashboardCards from './userDashboardCards/userDashboardCards';
import * as styles from './userDashboardPage.module.less';

const UserDashboardPageComponent: React.FC = () => (
  <section className={styles.section}>
    <UserDashboardCards />
  </section>
);

export default UserDashboardPageComponent;
