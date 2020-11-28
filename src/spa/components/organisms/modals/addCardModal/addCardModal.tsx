import * as React from 'react';
import { AddCardModalContextProvider } from 'context/addCardModalContext/addCardModalContext';
import AddCardModalContainer from './addCardModalContainer';

const AddCardModal: React.FC = () => (
  <AddCardModalContextProvider>
    <AddCardModalContainer />
  </AddCardModalContextProvider>
);

export default AddCardModal;
