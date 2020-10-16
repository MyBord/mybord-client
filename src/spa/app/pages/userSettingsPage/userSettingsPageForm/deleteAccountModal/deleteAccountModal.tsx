import * as React from 'react';
import { useMutation } from '@apollo/react-hooks';
import Button from 'buttons/button/button';
import Form from 'forms/form/form';
import Modal from 'modals/modal/modal';
import Typography from 'typography/typography';
import { DELETE_CURRENT_USER_MUTATION } from 'schema/user';
import { useModalContext } from 'context/modalContext/modalContext';
import DeleteAccountModalFormContent from './deleteAccountModalFormContent';
import * as styles from './deleteAccountModal.module.less';

const DeleteAccountModal: React.FC = () => {
  const [deleteCurrentUser] = useMutation(DELETE_CURRENT_USER_MUTATION);
  const { setModalId } = useModalContext();

  const [canDelete, setCanDelete] = React.useState<boolean>(false);
  const [hasDeletingBegun, setHasDeletingBegun] = React.useState<boolean>(false);
  const [hasDeletingFinished, setHasDeletingFinished] = React.useState<boolean>(false);

  const handleDelete = async (): Promise<void> => {
    setHasDeletingBegun(true);

    await deleteCurrentUser();

    setHasDeletingFinished(true);
    setModalId(null);

    window.location.href = '/';
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
