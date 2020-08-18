import * as React from 'react';
import Form from 'forms/form/form';
import { AddCardModalProps } from 'types/modalTypes';
import AddCardModalFormComponent from './addCardModalFormComponent';

const AddCardModalFormContainer: React.FC<AddCardModalProps> = ({ cardData }) => {
  const handleSubmit = (): void => {
    console.log('foo');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <AddCardModalFormComponent cardData={cardData} />
    </Form>
  );
};

export default AddCardModalFormContainer;
