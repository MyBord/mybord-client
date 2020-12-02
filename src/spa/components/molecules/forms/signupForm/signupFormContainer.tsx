import * as React from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import Form from 'form/form';
import getGraphQLErrorMessage from 'utils/getGraphQLErrorMessage';
import { FormProp } from 'types/formTypes';
import { VALIDATE_USER_SIGNUP } from 'schema/user';
import { useLoginContext } from 'context/loginContext/loginContext';
import { useModalContext } from 'context/modalContext/modalContext';
import SignupFormContent from 'forms/signupForm/signupFormContent';

const SignupFormContainer: React.FC = () => {
  // ----- STATE ----- //

  const [isAuthenticationWaiting, setIsAuthenticationWaiting] = React.useState<boolean>(false);
  const { setModalId } = useModalContext();
  const { userHasAgreedToTerms, setSignUpStatus } = useLoginContext();

  // ----- QUERIES & MUTATIONS ----- //

  const [validateUserSignupQuery, { called, error, loading }] = useLazyQuery(
    VALIDATE_USER_SIGNUP,
    { fetchPolicy: 'no-cache' },
  );

  // ----- HANDLERS ----- //

  const handleSignUp = async (form: FormProp): Promise<void> => {
    const values = form.getFieldsValue();

    setIsAuthenticationWaiting(true);

    await validateUserSignupQuery({
      variables: {
        email: values.loginEmail,
        password: values.loginPassword,
        username: values.loginUsername,
      },
    });
  };

  React.useEffect(() => {
    if (userHasAgreedToTerms) {
      console.log('user has agreed to terms ... send them a verification email');
    }
  }, [userHasAgreedToTerms]);

  // ----- DATA HANDLING ----- //

  if (called && !loading) {
    if (error) {
      setIsAuthenticationWaiting(false);
      const errorMessage = getGraphQLErrorMessage(error.message);

      if (errorMessage === 'invalid username') {
        setSignUpStatus('invalid username');
      }
      if (errorMessage === 'duplicate username') {
        setSignUpStatus('duplicate username');
      }
      if (errorMessage === 'weak password') {
        setSignUpStatus('weak password');
      }
      if (errorMessage === 'duplicate email') {
        setSignUpStatus('duplicate email');
      }
    } else {
      setIsAuthenticationWaiting(false);
      setModalId('signup-terms-modal');
    }
  }

  // ----- COMPONENT ----- //

  // does type need to be "login"?
  return (
    <Form onSubmit={handleSignUp}>
      <SignupFormContent
        handleBack={() => console.log('back')}
        isAuthenticationWaiting={isAuthenticationWaiting}
      />
    </Form>
  );
};

export default SignupFormContainer;

