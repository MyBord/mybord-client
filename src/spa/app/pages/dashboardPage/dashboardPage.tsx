import * as React from 'react';
import Modal from 'modals/modal/modal';
import DashboardPageContainer from './dashboardPageContainer';

const DashboardPage: React.FC = () => {
  const [state, set] = React.useState<boolean>(true);
  return (
    <>
      <DashboardPageContainer />
      <button type="button" onClick={() => set((prevState) => !prevState)}>foobar</button>
      <Modal title="Add New Card" defaultVisible={state}>
        <div style={{ background: 'pink', width: '15rem', height: '10rem' }}>
          <h1>This is a modal foo bar</h1>
        </div>
      </Modal>
    </>
  );
};

export default DashboardPage;
