import * as React from 'react';
import Anchor from 'inputs/anchor/anchor';
import Button from 'buttons/button/button';
import Checkbox from 'inputs/checkbox/checkbox';
import FormItem from 'forms/formItem/formItem';
import { FormProp } from 'types/formTypes';
import { useLoginContext } from 'forms/loginForm/loginFormContext/loginFormContext';
import * as styles from './loginFormButtons.module.less';

interface Props {
  form: FormProp;
  isAuthenticationWaiting: boolean;
}

const LoginFormSignUpButtons: React.FC<Props> = ({
  form,
  isAuthenticationWaiting,
}) => {
  const { setFormStatus } = useLoginContext();

  const handleBack = (): void => setFormStatus('login');
  const handleSignUp = (): void => console.log('signing up user');

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
