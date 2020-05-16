import * as React from 'react';
import { useLazyQuery, useMutation } from '@apollo/react-hooks';
import formWrapper from 'forms/formWrapper/formWrapper';
import handleError from 'server/errors/handleError';
import { FormProp, LoginFormStatus } from 'types/formTypes';
import { CREATE_USER, IS_AUTHENTICATED, LOGIN_USER } from 'schema/user';
import { useAuthenticationContext } from 'context/authenticationContext';
import LoginFormComponent from './loginFormComponent';
import './loginForm.less';

interface Props {
  form: FormProp;
}

/* eslint-disable brace-style */
const LoginFormContainer: React.FC = () => {
  const [createUser] = useMutation(CREATE_USER);
  const [formStatus, setFormStatus] = React.useState<LoginFormStatus>('login');
  const [hasIncorrectCreds, setHasIncorrectCreds] = React.useState(false);
  const [isAuthenticationWaiting, setIsAuthenticationWaiting] = React.useState(false);
  const [passwordWeakMessage, setPasswordWeakMessage] = React.useState(null);
  const [isAuthenticatedQuery, { called, data, loading }] = useLazyQuery(
    IS_AUTHENTICATED, { fetchPolicy: 'no-cache' },
  );
  const [loginUser] = useMutation(LOGIN_USER);
  const { setAuthenticationStatus } = useAuthenticationContext();

  // Function that gets invoked when the user clicks on the 'login' button
  const handleLogin = async (form: FormProp): Promise<void> => {
    const values = form.getFieldsValue();
    try {
      setIsAuthenticationWaiting(true);

      // try to login the user / auth the user to the backend
      await loginUser({
        variables: {
          email: values.email,
          password: values.password,
        },
      });

      // ask the backend if the user is now authenticated
      isAuthenticatedQuery();

      setIsAuthenticationWaiting(false);
    } catch (error) {
      setIsAuthenticationWaiting(false);

      // If a 401 status is returned, notify the user that they have provided the incorrect creds
      const { status } = handleError(error);
      if (status === 401) {
        setHasIncorrectCreds(true);
      }
    }
  };

  // Function that gets invoked when the user clicks on the 'signup' button in order to create a
  // user
  const handleSignUp = async (form: FormProp): Promise<void> => {
    const values = form.getFieldsValue();
    try {
      setIsAuthenticationWaiting(true);

      // try to create the new user with the backend
      await createUser({
        variables: {
          email: values.email,
          password: values.password,
        },
      });

      // ask the backend if the user is now authenticated
      isAuthenticatedQuery();

      setIsAuthenticationWaiting(false);
    } catch (error) {
      setIsAuthenticationWaiting(false);

      // If a 400 status is returned, notify the user that their password is not strong enough
      const { message, status } = handleError(error);
      if (status === 400) {
        setPasswordWeakMessage(message);
      }
    }
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

  // After the user tries to login, if the back-end says they are authenticated, then update
  // their status on the front end as authenticated and push them towards the app
  if (called && !loading) {
    const { isAuthenticated } = data;
    if (isAuthenticated) {
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

  const FormContent: React.FC<Props> = ({ form }) => (
    <LoginFormComponent
      form={form}
      formStatus={formStatus}
      hasIncorrectCreds={hasIncorrectCreds}
      isAuthenticationWaiting={isAuthenticationWaiting}
      passwordWeakMessage={passwordWeakMessage}
      setFormStatus={setFormStatus}
    />
  );

  const Form = formWrapper(FormContent, handleSubmit, 'login');

  return <Form />;
};

export default LoginFormContainer;
