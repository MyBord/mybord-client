import * as React from 'react';
import { Form } from 'antd';
import { useLazyQuery, useMutation } from '@apollo/react-hooks';
import LoginFormComponent from './loginFormComponent';
import handleError from 'server/errors/handleError';
import { FormProp, LoginFormStatus } from 'types/formTypes';
import { IS_AUTHENTICATED, LOGIN_USER } from 'schema/users';
import { useAuthenticationContext } from 'context/authenticationContext';
import * as styles from './loginForm.module.less';
import './loginForm.less';

interface Props {
  form: FormProp;
}

const LoginForm: React.FC<Props> = ({ form }) => {
  const [formStatus, setFormStatus] = React.useState<LoginFormStatus>('login');
  const [hasIncorrectCreds, setHasIncorrectCreds] = React.useState(false);
  const [isAuthenticated, { called, data, loading }] = useLazyQuery(IS_AUTHENTICATED);
  const [loginUser] = useMutation(LOGIN_USER);
  const { authenticateUser } = useAuthenticationContext();

  // @ts-ignore // ToDo: remove ts ignore
  const handleLogin = async (): void => {
    const values = form.getFieldsValue();
    try {
      await loginUser({
        variables: {
          email: values.email,
          password: values.password,
        },
      });
      isAuthenticated();
    } catch (error) {
      const { status } = handleError(error);
      if (status === 401) {
        setHasIncorrectCreds(true);
      }
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    form.validateFields((error) => {
      if (!error) {
        if (formStatus === 'forgot') {
          console.log('forgot submit handler');
        } else if (formStatus === 'login') {
          handleLogin();
        } else if (formStatus === 'signUp') {
          console.log('signup submit handler');
        } else {
          throw new Error('Unexpected status');
        }
      }
    });
  };

  if (called && !loading) {
    if (data.isAuthenticated) {
      authenticateUser();
    }
    // Note: the else block should never be reached because when attempting to login the user, the
    // server should either 1. successfully login the user, and thus they are authenticated,
    // or 2. return a 401 error, which is already handled in `handleLogin`. Thus, this block
    // should never be reached and should probably be thrown to an error reporting tool such
    // as sentry.
    throw new Error('Unable to authenticate');
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
