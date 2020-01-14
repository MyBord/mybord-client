import * as React from 'react';
import { Form } from 'antd';
import { LoginFormStatus } from 'types/formTypes';
import LoginFormButtons from './loginFormButtons/loginFormButtons';
import LoginFormHeader from './loginFormHeader/loginFormHeader';
import LoginFormInputs from './loginFormInputs/loginFormInputs';
import LoginFormSocial from './loginFormSocial/loginFormSocial';
import * as styles from './loginForm.module.less';
import './loginForm.less';

const LoginForm: React.FC = () => {
  const [formStatus, setFormStatus] = React.useState<LoginFormStatus>('login');

  return (
    <div className={styles.formContainer}>
      <LoginFormHeader />
      <Form
        className={styles.form}
        onSubmit={() => console.log('-- form submitted --')}
      >
        <LoginFormInputs formStatus={formStatus} />
        <LoginFormButtons formStatus={formStatus} setFormStatus={setFormStatus} />
        <LoginFormSocial formStatus={formStatus} />
      </Form>
    </div>
  );
};

export default LoginForm;
