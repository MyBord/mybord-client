import * as React from 'react';
import Modal from 'modal/modal';
import Toast from 'molecules/toast/toast';
import { FormProp } from 'types/formTypes';
import LoginFormButtons from './loginFormButtons/loginFormButtons';
import LoginFormInputs from './loginFormInputs/loginFormInputs';
import LoginFormUserAgreementModalContent
  from './loginFormUserAgreement/loginFormUserAgreementModalContent';

interface Props {
  form?: FormProp;
}

const LoginFormContentComponent: React.FC<Props> = ({ form }) => (
  <>
    <Toast
      id="user-agreement-toast"
      text="By not accepting the user agreement, you are unable to signup for MyBord."
      type="warning"
    />
    <Modal id="signup-terms-modal" title="User Agreement">
      <LoginFormUserAgreementModalContent form={form} />
    </Modal>
    <LoginFormInputs form={form} />
    <LoginFormButtons form={form} />
    {/* <LoginFormSocial /> */}
  </>
);

export default LoginFormContentComponent;
