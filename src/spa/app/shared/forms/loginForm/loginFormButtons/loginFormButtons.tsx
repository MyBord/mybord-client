import * as React from 'react';
import { Form } from 'antd';
import Anchor from 'inputs/anchor/anchor';
import Button from 'buttons/button/button';
import Checkbox from 'inputs/checkbox/checkbox';
import FormItem from 'forms/formItem';
import { FormProp, LoginFormStatus } from 'types/formTypes';
import * as styles from './loginFormButtons.module.less';

interface Props {
  form: FormProp;
  formStatus: LoginFormStatus;
  setFormStatus: (status: LoginFormStatus) => void;
}

const LoginFormButtons: React.FC<Props> = ({ form, formStatus, setFormStatus }) => {
  const handleLogin = (): void => {
    setFormStatus('login');
  };
  const handleSignUp = (): void => {
    setFormStatus('signUp');
  };

  return (
    <>
      <div className={styles.rememberForgotDiv}>
        <FormItem
          fieldName="remember-me"
          form={form}
        >
          <Checkbox label="Remember Me" />
        </FormItem>
        {
          formStatus === 'login' && (
            <FormItem
              fieldName="forgot-password"
              form={form}
            >
              <Anchor label="Forgot Password?" link="https://www.google.com" />
            </FormItem>
          )
        }
      </div>
      <div className={[
        styles.buttonDiv,
        formStatus === 'login' ? styles.loginDiv : styles.signUpDiv,
      ].join(' ')}
      >
        {
          formStatus === 'login' && (
            <FormItem
              fieldName="login"
              form={form}
            >
              <Button label="Login" onClick={handleLogin} />
            </FormItem>
          )
        }
        <FormItem
          fieldName="sign-up"
          form={form}
        >
          <Button
            label="Sign Up"
            onClick={handleSignUp}
            type={formStatus === 'login' ? 'secondary' : 'primary'}
          />
        </FormItem>
        {
          formStatus === 'signUp' && (
            <FormItem
              fieldName="back"
              form={form}
            >
              <Anchor label="back" onClick={() => setFormStatus('login')} />
            </FormItem>
          )
        }
      </div>
    </>
  );
};

export default LoginFormButtons;
