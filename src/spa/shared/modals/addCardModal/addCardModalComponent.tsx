import * as React from 'react';
import Card from 'cards/card';
import Modal from 'modals/modal/modal';
import { AddCardModalProps } from 'types/modalTypes';
import { UserCard } from 'schema/card';
import AddCardModalForm from './addCardModalForm/addCardModalForm';
import * as styles from './addCardModal.module.less';

interface Props extends AddCardModalProps {
  userCard: UserCard;
}

const AddCardModalComponent: React.FC<Props> = ({
  formData,
  userCard,
}) => (
  <Modal id="add-card-modal" title="Add To My Bord">
    <div className={styles.parentDiv}>
      <div className={styles.previewDiv}>
        <Card isPreview userCard={userCard} />
      </div>
      <div className={styles.formDiv}>
        <AddCardModalForm formData={formData} />
      </div>
    </div>
  </Modal>
);

export default AddCardModalComponent;
