import * as React from 'react';
import AddCardModalForm from 'forms/addCardModalForm/addCardModalForm';
import Modal from 'modal/modal';
import UserCard from 'organisms/userCard/userCard';
import { AddCardModalProps } from 'types/modalTypes';
import { UserCardData } from 'schema/card';
import * as styles from './addCardModal.module.less';

interface Props extends AddCardModalProps {
  userCardData: UserCardData;
}

const AddCardModalComponent: React.FC<Props> = ({
  formData,
  userCardData,
}) => (
  <Modal id="add-card-modal" title="Add To My Bord">
    <div className={styles.parentDiv}>
      <div className={styles.previewDiv}>
        {/* <UserCard isPreview userCardData={userCardData} /> */}
      </div>
      <div className={styles.formDiv}>
        <AddCardModalForm formData={formData} />
      </div>
    </div>
  </Modal>
);

export default AddCardModalComponent;
