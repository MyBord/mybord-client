import * as React from 'react';
import { useMutation } from '@apollo/react-hooks';
import Form from 'forms/form/form';
import { AddCardModalProps } from 'types/modalTypes';
import { CREATE_USER_CARD_MUTATION } from 'schema/card';
import { FormProp } from 'types/formTypes';
import { useModalContext } from 'context/modalContext/modalContext';
import AddCardModalFormContent from './addCardModalFormContent';

const AddCardModalForm: React.FC<AddCardModalProps> = ({ formData }) => {
  const [createUserCard] = useMutation(CREATE_USER_CARD_MUTATION);
  const [isWaiting, setIsWaiting] = React.useState<boolean>(false);
  const { setModalId } = useModalContext();

  const handleCancel = (): void => {
    setModalId(null);
  };

  const handleSubmit = async (form: FormProp): Promise<void> => {
    setIsWaiting(true);
    await createUserCard({
      variables: {
        category: form.getFieldValue('add-card-modal-category'),
        isFavorite: form.getFieldValue('add-card-modal-favorite'),
        isToDo: form.getFieldValue('add-card-modal-to-do'),
        title: form.getFieldValue('add-card-modal-title'),
        url: formData.url,
      },
    });
    setIsWaiting(false);
    setModalId(null);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <AddCardModalFormContent
        formData={formData}
        handleCancel={handleCancel}
        isWaiting={isWaiting}
      />
    </Form>
  );
};

export default AddCardModalForm;
