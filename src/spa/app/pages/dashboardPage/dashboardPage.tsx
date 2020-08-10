import * as React from 'react';
import Modal from 'modals/modal/modal';
import { ModalCallback } from 'types/modalTypes';
import DashboardPageContainer from './dashboardPageContainer';

const DashboardPage: React.FC = () => {
  const [show, setShow] = React.useState<ModalCallback['showModal']>(null);
  const [hide, setHide] = React.useState<ModalCallback['hideModal']>(null);

  const callback = (props: ModalCallback): void => {
    console.log('77777777');
    console.log(props);
    setHide(props.hideModal);
    setShow(props.showModal);
  };

  return (
    <>
      <DashboardPageContainer />
      <button type="button" onClick={show}>Show</button>
      <button type="button" onClick={hide}>Hide</button>
      <Modal callback={callback} title="Add New Card" defaultVisible>
        <div style={{ background: 'pink', width: '15rem', height: '10rem' }}>
          <h1>This is a modal foo bar</h1>
        </div>
      </Modal>
    </>
  );
};

export default DashboardPage;
