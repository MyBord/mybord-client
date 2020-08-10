import * as React from 'react';
import Modal from 'modals/modal/modal';
import DashboardPageContainer from './dashboardPageContainer';

const DashboardPage: React.FC = () => (
  <div>
    <DashboardPageContainer />
    <Modal defaultVisible>
      <div style={{ background: 'pink', width: '10rem', height: '10rem' }}>
        <h1>This is a modal foo bar</h1>
      </div>
    </Modal>
  </div>
);

export default DashboardPage;
