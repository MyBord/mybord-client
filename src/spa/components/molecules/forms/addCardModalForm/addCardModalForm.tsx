import * as React from 'react';
import { AddCardModalProps } from 'types/modalTypes';
import AddCardModalFormContainer from './addCardModalFormContainer';

interface Props {
  formData: AddCardModalProps['formData'];
}

const AddCardModalForm: React.FC<Props> = ({ formData }) => (
  <AddCardModalFormContainer formData={formData} />
);

export default AddCardModalForm;
