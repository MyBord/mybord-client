import * as React from 'react';
import Form from 'form/form';
import { AddCardModalProps } from 'types/modalTypes';
import { FormProp } from 'types/formTypes';
import { useAddCardModalContext } from 'context/addCardModalContext/addCardModalContext';
import { useModalContext } from 'context/modalContext/modalContext';
import AddCardModalFormContent from './addCardModalFormContent';

const AddCardModalFormContainer: React.FC<AddCardModalProps> = ({ formData }) => {
  const { setTitle } = useAddCardModalContext();
  const [isWaiting, setIsWaiting] = React.useState<boolean>(false);
  const { setModalId } = useModalContext();

  const handleCancel = (): void => {
    setModalId(null);
  };

  const handleSubmit = async (form: FormProp): Promise<void> => {
    setIsWaiting(true);
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
