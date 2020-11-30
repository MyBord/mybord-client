import * as React from 'react';
import { useHistory } from 'react-router';
import { useLazyQuery, useMutation } from '@apollo/react-hooks';
import Form from 'form/form';
import handleError from 'server/errors/handleError';
import { GET_CURRENT_USER_QUERY, LOGIN_USER_MUTATION } from 'schema/user';
import { FormProp } from 'types/formTypes';
import { useCurrentUserContext } from 'context/currentUserContext/currentUserContext';
import LoginFormContent from 'forms/loginForm/loginFormContent';

const LoginFormContainer: React.FC = () => {
  const [alertMessage, setAlertMessage] = React.useState<string>(null);
  const [isAuthenticationWaiting, setIsAuthenticationWaiting] = React.useState<boolean>(false);
  const history = useHistory();

  // ----- QUERIES & MUTATIONS ----- //

  const [getCurrentUserQuery, { called, data, loading }] = useLazyQuery(
    GET_CURRENT_USER_QUERY,
    { fetchPolicy: 'no-cache' },
  );
  const [loginUser] = useMutation(LOGIN_USER_MUTATION);

  // ----- STATE ----- //

  const { setAuthenticationStatus, setCurrentUser } = useCurrentUserContext();

  // ----- HANDLERS ----- //

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

  // ----- DATA HANDLING ----- //

  // ToDo: abstract this?
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

  // ----- COMPONENT ----- //

  // ToDo: does "type" need to be login?
  return (
    <Form onSubmit={handleLogin} type="login">
      <LoginFormContent
        alertMessage={alertMessage}
        isAuthenticationWaiting={isAuthenticationWaiting}
      />
    </Form>
  );
};

export default LoginFormContainer;
