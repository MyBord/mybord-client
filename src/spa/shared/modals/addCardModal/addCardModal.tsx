import * as React from 'react';
import Modal from 'modals/modal/modal';
import AddCardModalForm from './addCardModalForm/addCardModalForm';
import { useModalContext } from 'context/modalContext/modalContext';
import * as styles from './addCardModal.module.less';

const AddCardModal: React.FC = () => {
  const { setModalId } = useModalContext();

  return (
    <>
      <button type="button" onClick={() => setModalId('add-card-modal')}>show</button>
      <button type="button" onClick={() => setModalId(null)}>hide</button>
      <Modal id="add-card-modal" title="Add To My Bord">
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
