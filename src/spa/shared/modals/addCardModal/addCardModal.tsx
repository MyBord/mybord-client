import * as React from 'react';
import Modal from 'modals/modal/modal';
import AddCardModalForm from './addCardModalForm/addCardModalForm';
import * as styles from './addCardModal.module.less';

const AddCardModal: React.FC = () => (
  <Modal defaultVisible title="Add Card">
    <div className={styles.parentDiv}>
      <div className={styles.previewDiv}>
        foo bar
      </div>
      <div className={styles.formDiv}>
        <AddCardModalForm />
      </div>
    </div>
  </Modal>
);

export default AddCardModal;
