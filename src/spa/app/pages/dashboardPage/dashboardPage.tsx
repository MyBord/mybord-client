import * as React from 'react';
import AddCardModal from 'modals/addCardModal/addCardModal';
import DashboardPageContainer from './dashboardPageContainer';

const DashboardPage: React.FC = () => (
  <>
    <AddCardModal />
    <DashboardPageContainer />
  </>
);

export default DashboardPage;
