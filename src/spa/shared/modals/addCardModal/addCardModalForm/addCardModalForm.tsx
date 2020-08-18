import * as React from 'react';
import { AddCardModalProps } from 'types/modalTypes';
import AddCardModalFormContainer from './addCardModalFormContainer';

const AddCardModalForm: React.FC<AddCardModalProps> = ({ formData }) => (
  <AddCardModalFormContainer formData={formData} />
);

export default AddCardModalForm;
