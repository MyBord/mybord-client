import * as React from 'react';
import Modal from 'modals/modal/modal';
import DashboardPageContainer from './dashboardPageContainer';

const DashboardPage: React.FC = () => (
  <>
    <DashboardPageContainer />
    <Modal title="Add New Card" defaultVisible>
      <div style={{ background: 'pink', width: '15rem', height: '10rem' }}>
        <h1>This is a modal foo bar</h1>
      </div>
    </Modal>
  </>
);

export default DashboardPage;
