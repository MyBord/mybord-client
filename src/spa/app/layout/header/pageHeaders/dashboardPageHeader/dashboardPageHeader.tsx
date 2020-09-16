import * as React from 'react';
import AddCardModal from 'modals/addCardModal/addCardModal';
import DashboardPageHeaderFilterForm
  from './dashboardPageHeaderFilterForm/dashboardPageHeaderFilterForm';
import * as styles from './dashboardPageHeader.module.less';

const DashboardPageHeader: React.FC = () => (
  <>
    <AddCardModal />
    <section className={styles.section}>
      <DashboardPageHeaderFilterForm />
    </section>
  </>
);

export default DashboardPageHeader;
