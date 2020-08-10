import * as React from 'react';
import Form from 'forms/form/form';
import AddCardModalFormComponent from './addCardModalFormComponent';

const AddCardModalFormContainer: React.FC = () => {
  const handleSubmit = (): void => {
    console.log('foo');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <AddCardModalFormComponent />
    </Form>
  );
};

export default AddCardModalFormContainer;
