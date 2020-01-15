import * as React from 'react';
import gql from 'graphql-tag';
import { Form } from 'antd';
import { FormProp, LoginFormStatus } from 'types/formTypes';
import { useMutation } from '@apollo/react-hooks';
import LoginFormButtons from './loginFormButtons/loginFormButtons';
import LoginFormInputs from './loginFormInputs/loginFormInputs';
import LoginFormSocial from './loginFormSocial/loginFormSocial';
import * as styles from './loginForm.module.less';
import './loginForm.less';

interface Props {
  form: FormProp;
}

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(data: {email: $email, password: $password}) {
      id
      email
      password
    }
  }
`;

const LoginForm: React.FC<Props> = ({ form }) => {
  const [formStatus, setFormStatus] = React.useState<LoginFormStatus>('login');
  const [loginUser, { data }] = useMutation(LOGIN_USER);

  // @ts-ignore
  const handleLogin = async (): void => {
    const values = form.getFieldsValue();
    await loginUser({
      variables: {
        email: values.email,
        password: values.password,
      },
    });
    console.log('user data:');
    console.log(data);
  };

  return (
    <Form
      className={styles.form}
      onSubmit={() => console.log('-- form submitted --')}
    >
      // @ts-ignore
      <button type="button" onClick={() => console.log(form.getFieldsValue())}>foo</button>
      <button type="button" onClick={handleLogin}>login</button>
      <LoginFormInputs form={form} formStatus={formStatus} />
      <LoginFormButtons formStatus={formStatus} setFormStatus={setFormStatus} />
      <LoginFormSocial formStatus={formStatus} />
    </Form>
  );
};

const LoginFormFinal = Form.create()(LoginForm);
export default LoginFormFinal;
