import * as React from 'react';
import Button from 'buttons/button/button';
import Form from 'forms/form/form';
import FormItem from 'forms/formItem/formItem';
import Modal from 'modals/modal/modal';
import TextInput from 'inputs/textInput/textInput';
import Typography from 'typography/typography';
import * as styles from './deleteAccountModal.module.less';

const DeleteAccountModal: React.FC = () => (
  <Modal id="user-settings-delete-account-modal" title="Delete Account">
    <div className={styles.container}>
      <Form>
        <div className={styles.typographyContainer}>
          <Typography color="red" text="Are you sure you want to delete your account?" />
          <Typography color="red" text={'Please type "delete" to confirm:'} />
        </div>
        <FormItem fieldName="delete-account-input-confirm">
          <TextInput />
        </FormItem>
      </Form>
      <div className={styles.buttonDiv}>
        <Button color="red" label="Delete My Account" />
      </div>
    </div>
  </Modal>
);

export default DeleteAccountModal;
