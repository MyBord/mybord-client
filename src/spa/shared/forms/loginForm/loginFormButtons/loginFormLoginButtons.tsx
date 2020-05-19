import * as React from 'react';
import Anchor from 'inputs/anchor/anchor';
import Button from 'buttons/button/button';
import Checkbox from 'inputs/checkbox/checkbox';
import FormItem from 'forms/formItem/formItem';
import { LoginFormStatus } from 'types/formTypes';
import * as styles from './loginFormButtons.module.less';

interface Props {
  isAuthenticationWaiting: boolean;
  setFormStatus: (status: LoginFormStatus) => void;
}

const LoginFormLoginButtons: React.FC<Props> = ({
  isAuthenticationWaiting,
  setFormStatus,
}) => {
  const handleForgot = (): void => {
    setFormStatus('forgot');
  };
  const handleLogin = (): void => {
    setFormStatus('login');
  };
  const handleSignUp = (): void => {
    setFormStatus('signUp');
  };

  return (
    <>
      <div className={styles.rememberForgotDiv}>
        <FormItem fieldName="remember-me">
          <Checkbox label="Remember Me" />
        </FormItem>
        {/* <FormItem */}
        {/*  fieldName="forgot-password" */}
        {/*  form={form} */}
        {/* > */}
        {/*  <Anchor label="Forgot Password?" onClick={handleForgot} /> */}
        {/* </FormItem> */}
      </div>
      <div className={[styles.buttonDiv, styles.loginDiv].join(' ')}>
        <FormItem fieldName="login">
          <Button
            htmlType="submit"
            isWaiting={isAuthenticationWaiting}
            label="Login"
            onClick={handleLogin}
          />
        </FormItem>
        <FormItem fieldName="sign-up">
          <Button
            htmlType="button"
            label="Sign Up"
            onClick={handleSignUp}
            type="secondary"
          />
        </FormItem>
      </div>
    </>
  );
};

export default LoginFormLoginButtons;
