import * as React from 'react';
import { Form } from 'antd';
import { useMutation } from '@apollo/react-hooks';
import { FormProp, LoginFormStatus } from 'types/formTypes';
import handleError from 'server/errors/handleError';
import { LOGIN_USER } from 'schema/users';
import LoginFormComponent from './loginFormComponent';
import * as styles from './loginForm.module.less';
import './loginForm.less';

interface Props {
  form: FormProp;
}

const LoginForm: React.FC<Props> = ({ form }) => {
  const [formStatus, setFormStatus] = React.useState<LoginFormStatus>('login');
  const [loginUser, { data }] = useMutation(LOGIN_USER);

  // @ts-ignore
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
      handleError(error);
    }
    console.log('user data:');
    console.log(data);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    form.validateFields((error) => {
      if (!error) {
        if (formStatus === 'login') {
          handleLogin();
        }
      }
    });
  };

  return (
    <Form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <LoginFormComponent
        form={form}
        formStatus={formStatus}
        handleLogin={handleLogin}
        setFormStatus={setFormStatus}
      />
    </Form>
  );
};

const LoginFormContainer = Form.create()(LoginForm);
export default LoginFormContainer;
