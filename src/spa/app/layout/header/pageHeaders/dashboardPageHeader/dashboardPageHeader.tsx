import * as React from 'react';
import Modal from 'modals/modal/modal';
import AddCardModal from 'modals/addCardModal/addCardModal';
import DashboardPageHeaderFilterForm
  from './dashboardPageHeaderFilterForm/dashboardPageHeaderFilterForm';
import * as styles from './dashboardPageHeader.module.less';

const DashboardPageHeader: React.FC = () => (
  <>
    <Modal defaultVisible id="foo" title="bar">
      <h1>hello world</h1>
    </Modal>
    <AddCardModal />
    <section className={styles.section}>
      <DashboardPageHeaderFilterForm />
    </section>
  </>
);

export default DashboardPageHeader;
