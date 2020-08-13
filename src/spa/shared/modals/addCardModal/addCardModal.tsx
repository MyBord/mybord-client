import * as React from 'react';
import Modal from 'modals/modal/modal';
import { ModalCallback } from 'types/modalTypes';
import AddCardModalForm from './addCardModalForm/addCardModalForm';
import * as styles from './addCardModal.module.less';

const AddCardModal: React.FC = () => {
  const [hideModal, setHideModal] = React.useState<ModalCallback['hideModal']>(null);
  const [showModal, setShowModal] = React.useState<ModalCallback['showModal']>(null);

  const callback = (props: ModalCallback): void => {
    setHideModal(props.hideModal);
    setShowModal(props.showModal);
  };

  return (
    <>
      <button type="button" onClick={showModal}>click me</button>
      <Modal callback={callback} title="Add To My Bord">
        <div className={styles.parentDiv}>
          <div className={styles.previewDiv}>
            foo bar
          </div>
          <div className={styles.formDiv}>
            <AddCardModalForm />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AddCardModal;
