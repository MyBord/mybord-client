import * as React from 'react';
import { AddCardModalProps } from 'types/modalTypes';
import AddCardModalFormContainer from './addCardModalFormContainer';

const AddCardModalForm: React.FC<AddCardModalProps> = ({ cardData }) => (
  <AddCardModalFormContainer cardData={cardData} />
);

export default AddCardModalForm;
