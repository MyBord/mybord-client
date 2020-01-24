import * as React from 'react';
import { Form } from 'antd';
import { useMutation, useLazyQuery } from '@apollo/react-hooks';
import { FormProp, LoginFormStatus } from 'types/formTypes';
import handleError from 'server/errors/handleError';
import { IS_AUTHENTICATED, LOGIN_USER } from 'schema/users';
import LoginFormComponent from './loginFormComponent';
import * as styles from './loginForm.module.less';
import './loginForm.less';

interface Props {
  form: FormProp;
}

const LoginForm: React.FC<Props> = ({ form }) => {
  const [formStatus, setFormStatus] = React.useState<LoginFormStatus>('login');
  const [hasIncorrectCreds, setHasIncorrectCreds] = React.useState(false);
  const [loginUser] = useMutation(LOGIN_USER);
  const [isAuthenticated, { called, data, loading }] = useLazyQuery(IS_AUTHENTICATED);

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
        if (formStatus === 'login') {
          handleLogin();
          isAuthenticated();
        }
      }
    });
  };

  if (called && !loading) {
    console.log('@@@@@@@@@@@@@@@@@');
    console.log(data);
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

const LoginFormContainer = Form.create()(LoginForm);
export default LoginFormContainer;
