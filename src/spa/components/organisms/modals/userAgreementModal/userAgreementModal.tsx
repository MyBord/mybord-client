import * as React from 'react';
import Modal from 'modal/modal';
import { FormProp } from 'types/formTypes';
import UserAgreementModalContainer from './userAgreementModalContainer';

interface Props {
  handleAcceptTerms: () => void;
  form: FormProp;
}

const UserAgreementModal: React.FC<Props> = (props) => (
  <Modal id="signup-terms-modal" title="User Agreement">
    <UserAgreementModalContainer {...props} />
  </Modal>
);

export default UserAgreementModal;
