import * as React from 'react';
import Button from 'buttons/button/button';
import Form from 'forms/form/form';
import Modal from 'modals/modal/modal';
import Typography from 'typography/typography';
import { useModalContext } from 'context/modalContext/modalContext';
import DeleteAccountModalFormContent from './deleteAccountModalFormContent';
import * as styles from './deleteAccountModal.module.less';

const DeleteAccountModal: React.FC = () => {
  const [canDelete, setCanDelete] = React.useState<boolean>(false);
  const [hasDeletingBegun, setHasDeletingBegun] = React.useState<boolean>(false);
  const [hasDeletingFinished, setHasDeletingFinished] = React.useState<boolean>(false);
  const { setModalId } = useModalContext();

  const handleDelete = (): void => {
    setHasDeletingBegun(true);
    console.log('deleting account ...');
    setTimeout(() => {
      setHasDeletingFinished(true);
      setModalId(null);
    }, 2000);
  };

  return (
    <Modal id="user-settings-delete-account-modal" title="Delete Account">
      <div className={styles.container}>
        <div className={styles.typographyContainer}>
          <Typography color="red" text="Are you sure you want to delete your account?" />
          <Typography color="red" text={'Please type "delete" to confirm:'} />
        </div>
        <Form>
          <DeleteAccountModalFormContent setCanDelete={setCanDelete} />
        </Form>
        <div className={styles.buttonDiv}>
          <Button
            color="red"
            disabled={!canDelete}
            label="Delete My Account"
            isWaiting={hasDeletingBegun && !hasDeletingFinished}
            onClick={handleDelete}
          />
        </div>
      </div>
    </Modal>
  );
};

export default DeleteAccountModal;
