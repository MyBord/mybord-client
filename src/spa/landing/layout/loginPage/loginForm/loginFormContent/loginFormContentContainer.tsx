// NOTE: This container is definitely doing WAY TOO MUCH in one single script / component. A
// refactor could definitely be used to make this more readable / digestible.

import * as React from 'react';
import { useHistory } from 'react-router';
import { useLazyQuery, useMutation } from '@apollo/react-hooks';
import Form from 'forms/form/form';
import getGraphQLErrorMessage from 'utils/getGraphQLErrorMessage';
import handleError from 'server/errors/handleError';
import {
  GET_CURRENT_USER_QUERY,
  LOGIN_USER_MUTATION,
  VALIDATE_USER_SIGNUP,
} from 'schema/user';
import { FormProp } from 'types/formTypes';
import { useCurrentUserContext } from 'context/currentUserContext/currentUserContext';
import { useLoginContext } from 'context/loginContext/loginContext';
import { useModalContext } from 'context/modalContext/modalContext';
import LoginFormContentComponent from './loginFormContentComponent';
import './loginFormContent.less';

/* eslint-disable brace-style */
const LoginFormContentContainer: React.FC = () => {
  const history = useHistory();
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
  const [loginUser] = useMutation(LOGIN_USER_MUTATION);

  // ----- STATE ----- //

  const { setAuthenticationStatus, setCurrentUser } = useCurrentUserContext();

  const {
    formStatus,
    setAlertMessage,
    setIsAuthenticationWaiting,
    userHasAgreedToTerms,
    setSignUpStatus,
  } = useLoginContext();

  // ----- HANDLERS ----- //

  // Function that gets invoked when the user clicks on the 'login' button
  const handleLogin = async (form: FormProp): Promise<void> => {
    const values = form.getFieldsValue();
    try {
      setIsAuthenticationWaiting(true);

      // try to login the user / auth the user to the backend
      await loginUser({
        variables: {
          emailOrUsername: values.emailOrUsername,
          password: values.password,
        },
      });

      // ask the backend if the user is now authenticated
      getCurrentUserQuery();

      setIsAuthenticationWaiting(false);
      history.push('/');
    } catch (error) {
      setIsAuthenticationWaiting(false);

      // If a 401 status is returned, notify the user that they have provided the incorrect creds
      const { status } = handleError(error);
      if (status === 401) {
        setAlertMessage('email or password is incorrect');
      }
    }
  };

  // Function that gets invoked when the user clicks on the 'signup' button in order to create a
  // user
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

  // Function that gets invoked when the 'submit' button is invoked, whichever button that may be
  const handleSubmit = (form: FormProp): void => {
    // If the user has forgotten their creds, send them an email to have them reset their
    // creds when they click on the 'reset password' button
    if (formStatus === 'forgot') {
      console.log('forgot submit handler');
    }

    // if the user clicks login, try to log them in
    else if (formStatus === 'login') {
      handleLogin(form);
    }

    // if the user clicks 'sign up', register them to the db
    else if (formStatus === 'signUp') {
      handleSignUp(form);
    }

    // Throw an error for anything else
    else {
      throw new Error('Unexpected status');
    }
  };

  // ----- DATA HANDLING ----- //

  // If, when signing up, the user has agreed to the Terms & Conditions and the Privacy Policy,
  // and thus the user has been created, then run the `getCurrentUserQuery` so we can then now
  // authenticate the newly created user and un-gate the application.
  React.useEffect(() => {
    if (userHasAgreedToTerms) {
      getCurrentUserQuery();
    }
  }, [userHasAgreedToTerms]);

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

  return (
    <Form onSubmit={handleSubmit} type="login">
      <LoginFormContentComponent />
    </Form>
  );
};

export default LoginFormContentContainer;
