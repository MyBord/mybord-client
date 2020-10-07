import * as React from 'react';
import AddCardModal from 'modals/addCardModal/addCardModal';
import UserDashboardPageHeaderFilterForm
  from './userDashboardPageHeaderFilterForm/userDashboardPageHeaderFilterForm';
import * as styles from './userDashboardPageHeader.module.less';

const UserDashboardPageHeader: React.FC = () => (
  <>
    <AddCardModal />
    <section className={styles.section}>
      <UserDashboardPageHeaderFilterForm />
    </section>
  </>
);

export default UserDashboardPageHeader;
