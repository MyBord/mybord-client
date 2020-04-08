import * as React from 'react';
import { Form } from 'antd';
import { useLazyQuery, useMutation } from '@apollo/react-hooks';
import handleError from 'server/errors/handleError';
import { FormProp, LoginFormStatus } from 'types/formTypes';
import { IS_AUTHENTICATED, LOGIN_USER } from 'schema/users';
import { useAuthenticationContext } from 'context/authenticationContext';
import LoginFormComponent from './loginFormComponent';
import * as styles from './loginForm.module.less';
import './loginForm.less';

interface Props {
  form: FormProp;
}

/* eslint-disable brace-style */
const LoginForm: React.FC<Props> = ({ form }) => {
  const [formStatus, setFormStatus] = React.useState<LoginFormStatus>('login');
  const [hasIncorrectCreds, setHasIncorrectCreds] = React.useState(false);
  const [isAuthenticatedQuery, { called, data, loading }] = useLazyQuery(IS_AUTHENTICATED);
  const [loginUser] = useMutation(LOGIN_USER);
  const { authenticateUser } = useAuthenticationContext();

  // Function that gets invoked when the user clicks on the 'login' button
  const handleLogin = async (): Promise<void> => {
    const values = form.getFieldsValue();
    try {
      // try to login the user / auth the user to the backend
      await loginUser({
        variables: {
          email: values.email,
          password: values.password,
        },
      });
      // ask the backend if the user is now authenticated
      isAuthenticatedQuery();
    } catch (error) {
      // If a 401 status is returned, notify the user that they have provided the incorrect creds
      const { status } = handleError(error);
      if (status === 401) {
        setHasIncorrectCreds(true);
      }
    }
  };

  // Function that gets invoked when the 'submit' button is invoked, whichever button that may be
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // validate the form fields first to make sure that they meet the necessary requirements
    form.validateFields((error) => {
      if (!error) {
        // If the user has forgotten their creds, send them an email to have them reset their
        // creds when they click on the 'reset password' button
        if (formStatus === 'forgot') {
          console.log('forgot submit handler');
        }
        // if the user clicks login, try to log them in
        else if (formStatus === 'login') {
          handleLogin();
        }
        // if the user clicks 'sign up', register them to the db
        else if (formStatus === 'signUp') {
          console.log('signup submit handler');
        }
        // Throw an error for anything else
        else {
          throw new Error('Unexpected status');
        }
      }
    });
  };

  // After the user tries to login, if the back-end says they are authenticated, then update
  // their status on the front end as authenticated and push them towards the app
  if (called && !loading) {
    const { isAuthenticated } = data;
    if (isAuthenticated) {
      authenticateUser();
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

  return (
    <Form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <LoginFormComponent
        form={form}
        formStatus={formStatus}
        hasIncorrectCreds={hasIncorrectCreds}
        setFormStatus={setFormStatus}
      />
    </Form>
  );
};

export default Form.create()(LoginForm);
