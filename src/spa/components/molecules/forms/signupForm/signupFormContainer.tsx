// NOTE: This container is definitely doing WAY TOO MUCH in one single script / component. A
// refactor could definitely be used to make this more readable / digestible.

import * as React from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import Form from 'form/form';
import getGraphQLErrorMessage from 'utils/getGraphQLErrorMessage';
import { FormProp } from 'types/formTypes';
import { GET_CURRENT_USER_QUERY, VALIDATE_USER_SIGNUP } from 'schema/user';
import { useCurrentUserContext } from 'context/currentUserContext/currentUserContext';
import { useLoginContext } from 'context/loginContext/loginContext';
import { useModalContext } from 'context/modalContext/modalContext';
import SignupFormContent from 'forms/signupForm/signupFormContent';

const SignupFormContainer: React.FC = () => {
  const [isAuthenticationWaiting, setIsAuthenticationWaiting] = React.useState<boolean>(false);
  const { setModalId } = useModalContext();

  // ----- QUERIES & MUTATIONS ----- //

  const [getCurrentUserQuery, { called, data, loading }] = useLazyQuery(
    GET_CURRENT_USER_QUERY,
    { fetchPolicy: 'no-cache' },
  );
  const [validateUserSignupQuery, validateOptions] = useLazyQuery(
    VALIDATE_USER_SIGNUP,
    { fetchPolicy: 'no-cache' },
  );

  // ----- STATE ----- //

  const { setAuthenticationStatus, setCurrentUser } = useCurrentUserContext();
  const { userHasAgreedToTerms, setSignUpStatus } = useLoginContext();

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
      getCurrentUserQuery();
    }
  }, [userHasAgreedToTerms]);

  // ----- DATA HANDLING ----- //

  // ToDo: abstract this
  // After the user tries to login, if the back-end says they are authenticated, then update
  // their status on the front end as authenticated and push them towards the app
  if (called && !loading) {
    const { email, isAuthenticated, username } = data.getCurrentUser;
    if (isAuthenticated) {
      setCurrentUser({ email, username });
      setAuthenticationStatus(true);
    }

    // Note: the else block should never be reached because when attempting to login the user, the
    // server should either 1. successfully login the user, and thus they are authenticated,
    // or 2. return a 401 error, which is already handled in `handleLogin`. Thus, this block
    // should never be reached and should probably be thrown to an error reporting tool such
    // as sentry.
    else {
      throw new Error('Unable to authenticate');
    }
  }

  if (validateOptions.called && !validateOptions.loading) {
    if (validateOptions.error) {
      setIsAuthenticationWaiting(false);
      const errorMessage = getGraphQLErrorMessage(validateOptions.error.message);

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

export default SingupFormContainer;
