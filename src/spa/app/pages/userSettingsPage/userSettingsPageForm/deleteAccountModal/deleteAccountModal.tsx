import * as React from 'react';
import Button from 'buttons/button/button';
import Form from 'forms/form/form';
import FormItem from 'forms/formItem/formItem';
import Modal from 'modals/modal/modal';
import TextInput from 'inputs/textInput/textInput';
import Typography from 'typography/typography';
import { FormProp } from 'types/formTypes';
import * as styles from './deleteAccountModal.module.less';

interface FormContentProps {
  form?: FormProp;
}

const DeleteAccountModal: React.FC = () => {
  const [canDelete, setCanDelete] = React.useState<boolean>(false);
  const FormContent: React.FC<FormContentProps> = ({ form }) => {
    const fieldName = 'delete-account-input-confirm';
    const fieldValue: string = form.getFieldValue(fieldName);

    React.useEffect(() => {
      if (fieldValue && fieldValue.toLowerCase() === 'delete') {
        setCanDelete(true);
      } else {
        setCanDelete(false);
      }
    }, [fieldValue]);

    return (
      <FormItem fieldName={fieldName} form={form}>
        <TextInput color="red" />
      </FormItem>
    );
  };

  return (
    <Modal id="user-settings-delete-account-modal" title="Delete Account">
      <div className={styles.container}>
        <div className={styles.typographyContainer}>
          <Typography color="red" text="Are you sure you want to delete your account?" />
          <Typography color="red" text={'Please type "delete" to confirm:'} />
        </div>
        <Form>
          <FormContent />
        </Form>
        <div className={styles.buttonDiv}>
          <Button color="red" label="Delete My Account" />
        </div>
      </div>
    </Modal>
  );
};

export default DeleteAccountModal;
