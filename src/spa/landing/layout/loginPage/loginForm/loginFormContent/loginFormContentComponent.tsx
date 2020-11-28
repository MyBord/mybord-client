import * as React from 'react';
import Modal from 'modal/modal';
import Toast from 'molecules/toast/toast';
import Typography from 'typography/typography';
import { FormProp } from 'types/formTypes';
import { useLandingContext } from 'context/landingContext/landingContext';
import LoginFormAlert from './loginFormAlert/loginFormAlert';
import LoginFormButtons from './loginFormButtons/loginFormButtons';
import LoginFormInputs from './loginFormInputs/loginFormInputs';
import LoginFormSocial from './loginFormSocial/loginFormSocial';
import LoginFormUserAgreementModalContent
  from './loginFormUserAgreement/loginFormUserAgreementModalContent';

interface Props {
  form?: FormProp;
}

const LoginFormContentComponent: React.FC<Props> = ({ form }) => {
  const { headerRef } = useLandingContext();

  const handleClick = (): void => {
    setTimeout(() => {
      if (headerRef.current) {
        headerRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, 100);
  };

  return (
    <>
      <Toast
        id="user-agreement-toast"
        text="By not accepting the user agreement, you are unable to signup for MyBord."
        type="warning"
      />
      <Modal id="signup-terms-modal" title="User Agreement">
        <LoginFormUserAgreementModalContent form={form} />
      </Modal>
      <LoginFormAlert form={form} />
      <LoginFormInputs form={form} />
      <LoginFormButtons form={form} />
      {/* <LoginFormSocial /> */}
      <Typography
        text="About MyBord"
        link="/about"
        onClick={handleClick}
      />
    </>
  );
};

export default LoginFormContentComponent;
