import * as React from 'react';
import { useHistory } from 'react-router';
import Form from 'form/form';
import LoginFormContent from 'forms/loginForm/loginFormContent';
import handleError from 'server/errors/handleError';
import { FormProp } from 'types/formTypes';
import { useCurrentUserContext } from 'context/currentUserContext/currentUserContext';

interface Props {
  handleSignup: () => void;
}

/* eslint-disable brace-style */
const LoginFormContainer: React.FC<Props> = (props) => {
  // ----- STATE ----- //

  const [alertMessage, setAlertMessage] = React.useState<string>(null);
  const [isAuthenticationWaiting, setIsAuthenticationWaiting] = React.useState<boolean>(false);
  const history = useHistory();

  // ----- QUERIES & MUTATIONS ----- //

  // ----- HANDLERS ----- //

  const handleLogin = async (form: FormProp): Promise<void> => {
    const values = form.getFieldsValue();
    try {
      setIsAuthenticationWaiting(true);

      // try to login the user / auth the user to the backend
      // ask the backend if the user is now authenticated

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

  // After the user tries to login, if the back-end says they are authenticated, then update
  // their status on the front end as authenticated and push them towards the app
  // ----- COMPONENT ----- //

  // ToDo: does "type" need to be login?
  return (
    <Form onSubmit={handleLogin}>
      <LoginFormContent
        alertMessage={alertMessage}
        isAuthenticationWaiting={isAuthenticationWaiting}
        {...props}
      />
    </Form>
  );
};

export default LoginFormContainer;
