import * as React from 'react';
import Modal from 'modals/modal/modal';
import { ModalCallback } from 'types/modalTypes';
import AddCardModalForm from './addCardModalForm/addCardModalForm';
import * as styles from './addCardModal.module.less';

const AddCardModal: React.FC = () => {
  const [setIsVisible, setSetIsVisible] = React.useState<ModalCallback['setIsVisible']>(null);

  const callback = (props: ModalCallback): void => {
    setSetIsVisible(props.setIsVisible);
  };

  return (
    <>
      <button type="button" onClick={() => setIsVisible(true)}>show</button>
      <button type="button" onClick={() => setIsVisible(false)}>hide</button>
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
