import * as React from 'react';
import { FormProp } from 'types/formTypes';
import { useModalContext } from 'context/modalContext/modalContext';
import { useToastContext } from 'context/toastContext/toastContext';
import UserAgreementModalComponent from './userAgreementModalComponent';

interface Props {
  handleAcceptTerms: () => void;
  form: FormProp;
}

const UserAgreementModalContainer: React.FC<Props> = ({ form, handleAcceptTerms }) => {
  const { setModalId } = useModalContext();
  const [isAuthenticationWaiting, setIsAuthenticationWaiting] = React.useState<boolean>(false);
  const { setToastId } = useToastContext();

  const handleBack = (): void => {
    setModalId(null);
    setToastId('user-agreement-toast');
  };

  const handleSignup = async (): Promise<void> => {
    const values = form.getFieldsValue();
    try {
      setIsAuthenticationWaiting(true);

      handleAcceptTerms();

      setIsAuthenticationWaiting(false);
      setModalId(null);
    } catch (error) {
      setIsAuthenticationWaiting(false);
      setModalId(null);

      throw new Error(error);
    }
  };

  return (
    <UserAgreementModalComponent
      handleBack={handleBack}
      handleSignup={handleSignup}
      isAuthenticationWaiting={isAuthenticationWaiting}
    />
  );
};

export default UserAgreementModalContainer;
