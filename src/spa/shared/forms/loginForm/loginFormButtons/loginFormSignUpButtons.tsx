import * as React from 'react';
import Anchor from 'inputs/anchor/anchor';
import Button from 'buttons/button/button';
import Checkbox from 'inputs/checkbox/checkbox';
import FormItem from 'forms/formItem/formItem';
import { FormProp, LoginFormStatus } from 'types/formTypes';
import * as styles from './loginFormButtons.module.less';

interface Props {
  form: FormProp;
  isAuthenticationWaiting: boolean;
  setFormStatus: (status: LoginFormStatus) => void;
}

const LoginFormSignUpButtons: React.FC<Props> = ({
  form,
  isAuthenticationWaiting,
  setFormStatus,
}) => {
  const handleBack = (): void => {
    setFormStatus('login');
  };
  const handleSignUp = (): void => {
    console.log('signing up user');
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
      </div>
      <div className={[styles.buttonDiv, styles.signUpDiv].join(' ')}>
        <FormItem
          fieldName="sign-up"
          form={form}
        >
          <Button
            htmlType="submit"
            isWaiting={isAuthenticationWaiting}
            label="Sign Up"
            onClick={handleSignUp}
            type="primary"
          />
        </FormItem>
        <FormItem
          fieldName="back"
          form={form}
        >
          <Anchor label="back" onClick={handleBack} />
        </FormItem>
      </div>
    </>
  );
};

export default LoginFormSignUpButtons;
