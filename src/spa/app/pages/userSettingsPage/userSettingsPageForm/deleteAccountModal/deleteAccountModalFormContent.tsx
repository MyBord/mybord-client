import * as React from 'react';
import FormItem from 'forms/formItem/formItem';
import TextInput from 'inputs/textInput/textInput';
import { FormProp } from 'types/formTypes';

interface Props {
  form?: FormProp;
  setCanDelete: (canDelete: boolean) => void;
}

const DeleteAccountModalFormContent: React.FC<Props> = ({ form, setCanDelete }) => {
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

export default DeleteAccountModalFormContent;
