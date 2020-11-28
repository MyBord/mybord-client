import * as React from 'react';
import { useMutation } from '@apollo/react-hooks';
import Form from 'form/form';
import { AddCardModalProps } from 'types/modalTypes';
import { CREATE_USER_CARD_MUTATION } from 'schema/card';
import { FormProp } from 'types/formTypes';
import { useAddCardModalContext } from 'context/addCardModalContext/addCardModalContext';
import { useModalContext } from 'context/modalContext/modalContext';
import AddCardModalFormContent from './addCardModalFormContent';

const AddCardModalFormContainer: React.FC<AddCardModalProps> = ({ formData }) => {
  const [createUserCard] = useMutation(CREATE_USER_CARD_MUTATION);
  const { setTitle } = useAddCardModalContext();
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

    // This prevents the title from being cached when we add a second, third, etc. card
    setTitle(null);
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

export default AddCardModalFormContainer;
