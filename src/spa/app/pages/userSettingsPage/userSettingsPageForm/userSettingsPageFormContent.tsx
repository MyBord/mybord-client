import * as React from 'react';
import Button from 'buttons/button/button';
import FormItem from 'formItem/formItem';
import { FormProp } from 'types/formTypes';
import { useModalContext } from 'context/modalContext/modalContext';
import DeleteAccountModal from './deleteAccountModal/deleteAccountModal';

interface Props {
  form?: FormProp;
}

const UserSettingsPageFormContent: React.FC<Props> = ({ form }) => {
  const { setModalId } = useModalContext();

  const handleClick = (): void => setModalId('user-settings-delete-account-modal');

  return (
    <>
      <FormItem
        fieldName="add-card-url-input"
        form={form}
        required
        requiredMessage="A url is required"
      >
        <Button color="red" label="Delete Account" onClick={handleClick} />
      </FormItem>
      <DeleteAccountModal />
    </>
  );
};

export default UserSettingsPageFormContent;
