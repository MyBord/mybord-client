import * as React from 'react';
import Modal from 'modal/modal';
import { FormProp } from 'types/formTypes';
import UserAgreementModalContainer from './userAgreementModalContainer';

interface Props {
  form: FormProp;
}

const UserAgreementModal: React.FC<Props> = ({ form }) => (
  <Modal id="signup-terms-modal" title="User Agreement">
    <UserAgreementModalContainer form={form} />
  </Modal>
);

export default UserAgreementModal;
