import * as React from 'react';
import AddCardModal from 'modals/addCardModal/addCardModal';
import UserDashboardPageHeaderForm from './userDashboardPageHeaderForm/userDashboardPageHeaderForm';
import * as styles from './userDashboardPageHeader.module.less';

const UserDashboardPageHeader: React.FC = () => (
  <>
    <AddCardModal />
    <section className={styles.section}>
      <UserDashboardPageHeaderForm />
    </section>
  </>
);

export default UserDashboardPageHeader;
