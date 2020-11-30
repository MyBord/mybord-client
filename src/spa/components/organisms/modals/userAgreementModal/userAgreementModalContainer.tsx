import * as React from 'react';
import { useMutation } from '@apollo/react-hooks';
import handleError from 'server/errors/handleError';
import { CREATE_USER_MUTATION } from 'schema/user';
import { FormProp } from 'types/formTypes';
import { useLoginContext } from 'context/loginContext/loginContext';
import { useModalContext } from 'context/modalContext/modalContext';
import { useToastContext } from 'context/toastContext/toastContext';
import UserAgreementModalComponent from './userAgreementModalComponent';

interface Props {
  form: FormProp;
}

const UserAgreementModalContainer: React.FC<Props> = ({ form }) => {
  const { setModalId } = useModalContext();
  const [createUser] = useMutation(CREATE_USER_MUTATION);
  const [isAuthenticationWaiting, setIsAuthenticationWaiting] = React.useState<boolean>(false);
  const { setSignUpStatus, setUserHasAgreedToTerms } = useLoginContext();
  const { setToastId } = useToastContext();

  const handleBack = (): void => {
    setModalId(null);
    setToastId('user-agreement-toast');
  };

  const handleSignup = async (): Promise<void> => {
    const values = form.getFieldsValue();
    try {
      setIsAuthenticationWaiting(true);

      // try to create the new user with the backend
      await createUser({
        variables: {
          email: values.loginEmail,
          password: values.loginPassword,
          username: values.loginUsername,
        },
      });

      setUserHasAgreedToTerms(true);

      setIsAuthenticationWaiting(false);
      setModalId(null);
    } catch (error) {
      setIsAuthenticationWaiting(false);
      setModalId(null);

      // If a 400 status is returned, notify the user that their password is not strong enough
      const { message, status } = handleError(error);
      if (status === 400) {
        if (message === 'invalid username') {
          setSignUpStatus('invalid username');
        }
        if (message === 'duplicate username') {
          setSignUpStatus('duplicate username');
        }
        if (message === 'weak password') {
          setSignUpStatus('weak password');
        }
        if (message === 'duplicate email') {
          setSignUpStatus('duplicate email');
        }
      }
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
